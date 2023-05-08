import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Resource } from "./Resource"

export const Homepage = () => {
    const [categories, setCategories] = useState([])
    const [uploads, setUploads] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/categories`)
                .then(res => res.json())
                .then((categoriesArray) => {
                    setCategories(categoriesArray)
                })
        },
        []
    )

    const getAllResources = () => {
        fetch(`http://localhost:8088/resources`)
            .then(res => res.json())
            .then((resources) => {
                setUploads(resources)
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
            <article className="allUploads">
                <h2 className="h1 allUploads-title">All Uploads</h2>
                <section className=" d-flex justify-content-between flex-wrap">
                    {
                        uploads.map((upload) => <Resource
                            key={`upload-${upload.id}`}
                            id={upload.id}
                            link={upload.url}
                            creator={upload.creatorId}
                            title={upload.title}
                            img={upload.image}
                            format={upload?.format?.type}
                            description={upload.description}
                            getAllResources={getAllResources}
                        />)
                    }
                </section>
            </article>
        </main>
    )
}