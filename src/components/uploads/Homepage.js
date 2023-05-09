import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Resource } from "./Resource"
import { UploadSearch } from "./UploadSearch"

export const Homepage = () => {
    const [categories, setCategories] = useState([])
    const [resources, setResources] = useState([])
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
            fetch('http://localhost:8088/categories')
                .then(res => res.json())
                .then((categoriesArray) => {
                    setCategories(categoriesArray)
                })
        },
        []
    )

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
        fetch('http://localhost:8088/resources?_expand=format')
            .then(res => res.json())
            .then((resources) => {
                setResources(resources)
                setFilteredResources(resources)
            })
    }

    useEffect(
        () => {
            getAllResources()
        },
        []
    )

    return (
        <main className="general-font page-content allCategories">
            <h1>Research Categories</h1>
            <article className=" homepage-category d-flex flex-column justify-content-between">
                {categories.map((category) => {
                    return <div key={category.id}><Link className="custom-text-green" to={`/category/${category.id}`} id={category.id}>Category {category.id}: {category.type}</Link><br /></div>
                })}
            </article>
            <article className="allResources">
                <h2 className="h1 allResources-title">All Uploads</h2>
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
                <section className=" d-flex justify-content-between flex-wrap">
                    {
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
                </section>
            </article>
        </main>
    )
}