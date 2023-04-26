import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Resource } from "./Resource"

export const CategoryResources = () => {
    const { categoryId } = useParams()
    const [resources, updateResources] = useState([])
    const [category, setCategory] = useState({
        id: 0,
        type: "",
    })

    const getAllResources = () => {
        fetch(`http://localhost:8088/resources?categoryId=${categoryId}&_expand=format`)
            .then(res => res.json())
            .then((resourcesArray) => {
                updateResources(resourcesArray)
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
        <main>
            <h1>{category?.type}</h1>
            <article>
                {
                    resources.length === 0 ? <p>Uploads will appear here. Submit new learning resources to see this page filled!</p> :
                        resources.map((resource) => <Resource
                            key={resource.id}
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