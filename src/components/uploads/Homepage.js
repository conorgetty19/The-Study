import { useEffect, useState } from "react"
import "./Homepage.css"
import { useNavigate, Link } from "react-router-dom"

export const Homepage = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

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

    return (
        <main className="general-font">
            <h1>Research Categories</h1>
            <div>
            {categories.map((category) => {
                return <div key={category.id}><Link className="custom-text-green" to={`/category/${category.id}`} id={category.id}>Category {category.id}: {category.type}</Link><br/></div>
            })}
            </div>
        </main>
    )
}