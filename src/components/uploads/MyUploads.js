import { useState, useEffect } from "react"
import { Resource } from "./Resource"

export const MyUploads = () => {
    const localStudyUser = localStorage.getItem("study_user")
    const studyUserObject = JSON.parse(localStudyUser)
    const [resources, updateResources] = useState([])

    const getMyResources = () => {
        fetch(`http://localhost:8088/resources?_expand=format&creatorId=${studyUserObject.id}`)
            .then(res => res.json())
            .then((myUploadsArray) => {
                updateResources(myUploadsArray)
            })
    }

    useEffect(
        () => {
            getMyResources()
        },
        []
    )


    return (
        <main className="general-font">
            <h1>My Uploads</h1>
            <article>
                {
                    resources.length === 0? <p>Your uploads will appear here. Submit new learning resources to see this page filled!</p> :
                    resources.map((resource) => <Resource
                        key={resource.id}
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