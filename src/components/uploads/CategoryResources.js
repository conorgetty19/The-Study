import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Resource } from "./Resource"

export const CategoryResources = () => {
    const { categoryId } = useParams()
    const [resources, updateResources] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/resources?categoryId=${categoryId}&_expand=format`)
                .then(res => res.json())
                .then((resourcesArray) => {
                    updateResources(resourcesArray)
                })
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
                    img={resource.image}
                    format={resource?.format?.type}
                    description={resource.description}
                    />)
                }
            </article>
        </main>
    )
}