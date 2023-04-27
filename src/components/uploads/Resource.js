import { useNavigate } from "react-router-dom"

export const Resource = ({ id, link, creator, title, img, format, description, getAllResources }) => {
    const localStudyUser = localStorage.getItem("study_user")
    const studyUserObject = JSON.parse(localStudyUser)
    const navigate = useNavigate()


    const deleteResourceClickEvent = () => {
        return fetch(`http://localhost:8088/resources/${id}`, {
            method: "DELETE"
        })
            .then(() => [
                getAllResources()
            ])
    }

    const navigateUserToEditForm = (id) => {
        navigate(`/editForm/${id}`)
    }


    return (
        <section>
            <figure>
                <img src={img} style={{ width: "15%", height: "22%" }} />
                <figcaption><a className="custom-text-green" href={link}>{title} </a></figcaption>
            </figure>
            <p>{format} Description: {description}</p>
            {
                studyUserObject.admin || studyUserObject.id === creator ?
                    <>
                        <button className="btn btn-secondary" onClick={() => navigateUserToEditForm(id)}>Edit</button>
                        <button className="btn btn-secondary" onClick={(clickEvent) => deleteResourceClickEvent(clickEvent)}>Delete</button>
                    </>
                    : ""

            }
        </section>
    )
}