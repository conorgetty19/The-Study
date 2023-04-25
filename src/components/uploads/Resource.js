

export const Resource = ({ id, img, format, description, getAllResources }) => {
    const localStudyUser = localStorage.getItem("study_user")
    const studyUserObject = JSON.parse(localStudyUser)



    const deleteResourceClickEvent = () => {
        return fetch(`http://localhost:8088/resources/${id}`, {
            method: "DELETE"
        })
            .then(() => [
                getAllResources()
            ])
    }


    return (
        <figure>
            <img src={img} style={{ width: "15%", height: "22%" }} />
            <p>{format} description: {description}</p>
            {
                studyUserObject.admin ?
                    <>
                        <button>Edit</button>
                        <button onClick={(clickEvent) => deleteResourceClickEvent(clickEvent)}>Delete</button>
                    </>
                    : ""

            }
        </figure>
    )
}