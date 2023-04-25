import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

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
        <main>
            <form onSubmit={handleSubmission}>
                <h1>Submission Form</h1>
                <fieldset>
                    <label htmlFor="formatId">Format</label>
                    <select
                        value={submission.formatId}
                        id="formatId"
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
                    <select
                        value={submission.categoryId}
                        id="categoryId"
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
                    <input
                        defaultValue={submission.title}
                        onChange={updateSubmission}
                        id="title"
                        type="text"
                        placeholder="Enter a title"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="url">URL</label>
                    <input
                        defaultValue={submission.url}
                        onChange={updateSubmission}
                        id="url"
                        type="url"
                        placeholder="www.url.com"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="image">Image URL</label>
                    <input
                        defaultValue={submission.image}
                        onChange={updateSubmission}
                        id="image"
                        type="url"
                        placeholder="www.image.com"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="description">Description</label>
                    <textarea
                        defaultValue={submission.description}
                        onChange={updateSubmission}
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