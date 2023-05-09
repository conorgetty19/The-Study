import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Resource } from "./Resource"
import { UploadSearch } from "./UploadSearch"

export const CategoryResources = () => {
    const { categoryId } = useParams()
    const [resources, updateResources] = useState([])
    const [category, setCategory] = useState({
        id: 0,
        type: "",
    })
    const [formats, setFormats] = useState([])
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredResources, setFilteredResources] = useState([])
    const [selectedFormat, setSelectedFormat] = useState(0)

    useEffect(() => {
        let searchedResources
        if (selectedFormat === 0) {
          searchedResources = resources.filter(
            (resource) =>
              resource.title.toLowerCase().includes(searchTerms.toLowerCase()) ||
              resource.description.toLowerCase().includes(searchTerms.toLowerCase())
          );
        } else {
          searchedResources = resources.filter(
            (resource) =>
              parseInt(resource.formatId) === selectedFormat &&
              (resource.title.toLowerCase().includes(searchTerms.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchTerms.toLowerCase()))
          );
        }
        setFilteredResources(searchedResources)
      }, [searchTerms, selectedFormat, resources])

      useEffect(
        () => {
            fetch('http://localhost:8088/formats')
                .then(res => res.json())
                .then((formatsArray) => {
                    setFormats(formatsArray)
                })
        },
        []
    )

    const getAllResources = () => {
        fetch(`http://localhost:8088/resources?categoryId=${categoryId}&_expand=format`)
            .then(res => res.json())
            .then((resourcesArray) => {
                updateResources(resourcesArray)
                setFilteredResources(resourcesArray)
            })
    }
    const getCategory = () => {
        fetch(`http://localhost:8088/categories/${categoryId}`)
            .then(res => res.json())
            .then((newCategory) => {
                setCategory(newCategory)
            })
    }

    useEffect(
        () => {
            getCategory()
            getAllResources()
        },
        []
    )

    return (
        <main className="general-font page-content">
            <h1>{category?.type}</h1>
            <UploadSearch setterFunction={setSearchTerms} />
            <select value={selectedFormat} onChange={(e) => setSelectedFormat(parseInt(e.target.value))}>
                <option value="0">Select a format</option>
                {formats.map(
                    (format) => {
                        return <option key={format.id}
                            value={parseInt(format.id)}>{format.type}</option>
                    }
                )}
            </select>
            <article className="d-flex justify-content-between flex-wrap">
                {
                    filteredResources.length === 0 ? <p>Uploads will appear here. Submit new learning resources to see this page filled!</p> :
                        filteredResources.map((resource) => <Resource
                            key={`resource-${resource.id}`}
                            id={resource.id}
                            link={resource.url}
                            creator={resource.creatorId}
                            title={resource.title}
                            img={resource.image}
                            format={resource?.format?.type}
                            description={resource.description}
                            getAllResources={getAllResources}
                        />)
                }
            </article>
        </main>
    )
}