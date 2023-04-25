import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"

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
        URL: "",
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
        <main>
            <form onSubmit={handleSubmission}>
                <h1>Submission Form</h1>
                <fieldset>
                    <label htmlFor="formatId">Format</label>
                    <select id="formatId" 
                    required 
                    onChange={updateSubmissionNumber}>
                        <option value="0">Select a format</option>
                        {formats.map(
                            (format) => {
                                return <option key={format.id} 
                                value={format.id}>{format.type}</option>
                            }
                        )}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="categoryId">Category</label>
                    <select id="categoryId" 
                    required 
                    onChange={updateSubmissionNumber}>
                        <option value="0">Select a category</option>
                        {categories.map(
                            (category) => {
                                return <option key={category.id} 
                                value={category.id}>{category.type}</option>
                            }
                        )}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="title">Title</label>
                    <input onChange={updateSubmission}
                        id="title"
                        type="text"
                        placeholder="Enter a title" 
                        required/>
                </fieldset>
                <fieldset>
                    <label htmlFor="URL">URL</label>
                    <input onChange={updateSubmission}
                        id="URL"
                        type="url"
                        placeholder="www.url.com" 
                        required/>
                </fieldset>
                <fieldset>
                    <label htmlFor="image">Image URL</label>
                    <input onChange={updateSubmission}
                        id="image"
                        type="url"
                        placeholder="www.image.com" 
                        required/>
                </fieldset>
                <fieldset>
                    <label htmlFor="description">Description</label>
                    <textarea onChange={updateSubmission}
                        id="description" rows="4" cols="50"
                        placeholder="Type a brief description of your resource"
                        style={{ resize: 'none' }} 
                        required
                        maxLength="208"></textarea>
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Submit
                    </button>
                </fieldset>
            </form>
        </main>
    )
}