

export const ResourceForm = ({submission, handleSubmission, updateSubmissionNumber, updateSubmission, formats, categories}) => {


    return (
        <form onSubmit={handleSubmission}>
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
                    placeholder="https://www.url.com"
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
                    id="description" rows="3" cols="35"
                    placeholder="Type a brief description of your resource"
                    style={{ resize: 'none' }}
                    required
                    maxLength="105"></textarea>
            </fieldset>
            <fieldset>
                <button className="btn btn-secondary" type="submit">
                    Submit
                </button>
            </fieldset>
        </form>)
}