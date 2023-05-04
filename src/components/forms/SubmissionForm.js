import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ResourceForm } from "./ResourceForm"

export const SubmissionForm = () => {
    const localStudyUser = localStorage.getItem("study_user")
    const studyUserObject = JSON.parse(localStudyUser)
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
        creatorId: studyUserObject.id
    })
    let navigate = useNavigate()


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
    const submitNewResource = () => {
        return fetch("http://localhost:8088/resources", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submission)
        })
            .then(res => res.json())
            .then(navigate("/"))
    }

    //function to handle submission event
    //calls submitNewResource
    const handleSubmission = (event) => {
        event.preventDefault()
        submitNewResource()
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
        <main className="general-font formPage d-flex flex-column align-items-center">
            <h1>Upload Submission Form</h1>
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