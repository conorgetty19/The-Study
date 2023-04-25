import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Resource } from "./Resource"

export const CategoryResources = () => {
    const { categoryId } = useParams()
    const [resources, updateResources] = useState([])

    const getAllResources = () => {
        fetch(`http://localhost:8088/resources?categoryId=${categoryId}&_expand=format`)
                .then(res => res.json())
                .then((resourcesArray) => {
                    updateResources(resourcesArray)
                })
    }

    useEffect(
        () => {
            getAllResources()
        },
        []
    )

    return (
        <main>
            <h1>Category {categoryId} Resources</h1>
            <article>
                {
                    resources.map((resource) => <Resource 
                    key={resource.id} 
                    id={resource.id}
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