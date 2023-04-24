import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>TS</h1>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/uploads">My Uploads</Link>
                </li>
                <li>
                    <Link to="/submissionForm">Upload Form</Link>
                </li>
                {
                    localStorage.getItem("study_user")
                        ? <li>
                            <Link to="" onClick={() => {
                                localStorage.removeItem("study_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </li>
                        : ""
                }
            </ul>
        </>
    )
}