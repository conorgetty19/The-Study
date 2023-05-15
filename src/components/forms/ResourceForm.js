
//returns fully furnished form
export const ResourceForm = ({ submission, handleSubmission, updateSubmissionNumber, updateSubmission, formats, categories }) => {


    return (
        <form className="formPage-content d-flex flex-column" onSubmit={handleSubmission}>
            <fieldset className="formField d-flex flex-column">
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
            <fieldset className="formField d-flex flex-column">
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
            <fieldset className="formField d-flex flex-column">
                <label htmlFor="title">Title</label>
                <input
                    defaultValue={submission.title}
                    onChange={updateSubmission}
                    id="title"
                    type="text"
                    placeholder="Enter a title"
                    required />
            </fieldset>
            <fieldset className="formField d-flex flex-column">
                <label htmlFor="url">URL</label>
                <input
                    defaultValue={submission.url}
                    onChange={updateSubmission}
                    id="url"
                    type="url"
                    placeholder="https://www.url.com"
                    required />
            </fieldset>
            <fieldset className="formField d-flex flex-column">
                <label htmlFor="image">Image URL</label>
                <input
                    defaultValue={submission.image}
                    onChange={updateSubmission}
                    id="image"
                    type="url"
                    placeholder="www.image.com"
                    required />
            </fieldset>
            <fieldset className="formField d-flex flex-column">
                <label htmlFor="description">Description</label>
                <textarea
                    defaultValue={submission.description}
                    onChange={updateSubmission}
                    id="description" rows="2" cols="50"
                    placeholder="Type a brief description of your resource"
                    style={{ resize: 'none' }}
                    required
                    maxLength="100"></textarea>
            </fieldset>
            <fieldset>
                <button className="btn btn-secondary form-button" type="submit">
                    Submit
                </button>
            </fieldset>
        </form>)
}