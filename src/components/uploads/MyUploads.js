import { useState, useEffect } from "react"
import { Resource } from "./Resource"
import { UploadSearch } from "./UploadSearch"

export const MyUploads = () => {
    const localStudyUser = localStorage.getItem("study_user")
    const studyUserObject = JSON.parse(localStudyUser)
    const [formats, setFormats] = useState([])
    const [resources, updateResources] = useState([])
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredResources, setFilteredResources] = useState([])
    const [selectedFormat, setSelectedFormat] = useState(0)


    //filters resources by selected format and/or search terms
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

    const getMyResources = () => {
        fetch(`http://localhost:8088/resources?_expand=format&creatorId=${studyUserObject.id}`)
            .then(res => res.json())
            .then((myResourcesArray) => {
                updateResources(myResourcesArray)
                setFilteredResources(myResourcesArray)
            })
    }

    //retrieves list of formats on render
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

    useEffect(
        () => {
            getMyResources()
        },
        []
    )


    return (
        <main className="general-font page-content">
            <h1>My Uploads</h1>
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
                    filteredResources.length === 0 ? <p>Your uploads will appear here. Submit new learning resources to see this page filled!</p> :
                        filteredResources.map((resource) => <Resource
                            key={`myUploadResource-${resource.id}`}
                            id={resource.id}
                            link={resource.url}
                            creator={resource.creatorId}
                            title={resource.title}
                            img={resource.image}
                            format={resource?.format?.type}
                            description={resource.description}
                            getAllResources={getMyResources}
                        />)
                }
            </article>
        </main>
    )
}