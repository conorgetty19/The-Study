import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1 className="custom-text-green-withoutHover">TS</h1>
            <nav>
                <li>
                    <Link className="custom-text-green" to="/">Homepage</Link>
                </li>
                <li>
                    <Link className="custom-text-green" to="/uploads">My Uploads</Link>
                </li>
                <li>
                    <Link className="custom-text-green" to="/submissionForm">Upload Form</Link>
                </li>
                {
                    localStorage.getItem("study_user")
                        ? <li>
                            <Link className="custom-text-green" to="" onClick={() => {
                                localStorage.removeItem("study_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </li>
                        : ""
                }
            </nav>
        </>
    )
}