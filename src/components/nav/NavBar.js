import { useNavigate, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <ul className="general-font nav nav-tabs background-black d-flex justify-content-between">
                <li className="fs-1 text custom-text-green-withoutHover general-font">TS</li>
                <li className={`nav-item ${location.pathname === "/" ? "active-tab" : ""}`}>
                    <div className="nav-link">
                        <Link className=" custom-text-green fs-4" to="/">Homepage</Link>
                    </div>
                </li>
                <li className={`nav-item ${location.pathname === "/uploads" ? "active-tab" : ""}`}>
                    <div className="nav-link">
                        <Link className="custom-text-green fs-4" to="/uploads">My Uploads</Link>
                    </div>
                </li>
                <li className={`nav-item ${location.pathname === "/submissionForm" ? "active-tab" : ""}`}>
                    <div className="nav-link">
                        <Link className="custom-text-green fs-4" to="/submissionForm">Upload Form</Link>
                    </div>
                </li>
                {
                    localStorage.getItem("study_user")
                        ? <div className="nav-link"><li className="nav-item">
                            <Link className="custom-text-green fs-4" to="" onClick={() => {
                                localStorage.removeItem("study_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </li></div>
                        : ""
                }
            </ul>
        </>
    )
}