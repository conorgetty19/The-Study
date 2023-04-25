

export const Resource = ({img, format, description}) => {
    const localStudyUser = localStorage.getItem("study_user")
	const studyUserObject = JSON.parse(localStudyUser)

    return (
        <figure>
            <img src={img} style={{ width: "30%", height: "43%"}} />
            <p>{format} description: {description}</p>
            {
                studyUserObject.admin? 
                <>
                <button>Edit</button>
                <button>Delete</button>
                </>
                : ""
            
            }
        </figure>
        )
}