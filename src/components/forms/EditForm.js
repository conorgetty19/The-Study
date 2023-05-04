import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ResourceForm } from "./ResourceForm"

export const EditForm = () => {
    const { resourceId } = useParams()

    const [categories, setCategories] = useState([])
    const [formats, setFormats] = useState([])
    //create place in state for submission object
    const [submission, setSubmission] = useState({
        categoryId: 0,
        formatId: 0,
        title: "",
        image: "",
        url: "",
        description: "",
        creatorId: 0
    })
    let navigate = useNavigate()

    //function to set current resource
    const getResource = (resourceId) => {
        fetch(`http://localhost:8088/resources/${resourceId}`)
            .then(res => res.json())
            .then((resource) => {
                setSubmission(resource)
            })
    }

    //useEffect to set resource when state changes
    useEffect(
        () => {
            getResource(resourceId)
        },
        [resourceId]
    )

    //fetches to populate formats and categories
    useEffect(
        () => {
            fetch(`http://localhost:8088/categories`)
                .then(res => res.json())
                .then((categoriesArray) => {
                    setCategories(categoriesArray)
                })
        }, []
    )
    useEffect(
        () => {
            fetch(`http://localhost:8088/formats`)
                .then(res => res.json())
                .then((formatsArray) => {
                    setFormats(formatsArray)
                })
        }, []
    )


    //submits new submission and navigates user back to home page
    const submitAlteredResource = () => {
        return fetch(`http://localhost:8088/resources/${resourceId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submission)
        })
            .then(res => res.json())
            .then(navigate(`/category/${submission.categoryId}`))
    }

    //function to handle submission event
    //calls submitAlteredResource
    const handleSubmission = (event) => {
        event.preventDefault()
        submitAlteredResource()
    }

    //function to update submission object
    const updateSubmissionNumber = (event) => {
        const copy = { ...submission }
        copy[event.target.id] = parseInt(event.target.value)
        setSubmission(copy)
    }
    const updateSubmission = (event) => {
        const copy = { ...submission }
        copy[event.target.id] = event.target.value
        setSubmission(copy)
    }

    return (
        <main className="general-font  formPage d-flex flex-column align-items-center">
            <h1>Resource Edit Form</h1>
            <ResourceForm
                submission={submission}
                handleSubmission={handleSubmission}
                updateSubmission={updateSubmission}
                updateSubmissionNumber={updateSubmissionNumber}
                formats={formats}
                categories={categories}
            />
        </main>
    )
}