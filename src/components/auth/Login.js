import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { loginPassOrFail } from "../ApiManager"

export const Login = () => {
    //state storage and setters for login functionality
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    //function to handle login event
    //fetch user with matching email and password
    //set study_user in local storage (keeps track of current user)
    //navigate user to homepage
    const handleLogin = (event) => {
        event.preventDefault()

        loginPassOrFail(username, password, navigate)
    }

    //return a form and link to registration page
    //onsubmit missing for now
    return (
        <main className="d-flex-column justify-content-around login">
            <div className="login-titleAndTag">
                <h1 className="custom-text-green-withoutHover login-title-font">The Study</h1>
                <h2 className="h6 login-tag" >Listen. Learn. Repeat.</h2>
            </div>
            <p className="login-p">The Study is a digital library for free, quality learning resources. Users can access and upload links to lectures, podcasts, literature, and more.</p>
            <section className="general-font login-form d-flex justify-content-center">
                <form onSubmit={handleLogin}>
                    <h3 className="h4 login-form-title">Sign in</h3>
                    <fieldset className="login-form-usernameField d-flex justify-content-between">
                        <label htmlFor="inputUsername"> Username: </label>
                        <input type="username" id="inputUsername"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            placeholder="Username"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="login-form-passwordField d-flex justify-content-between">
                        <label htmlFor="inputPassword"> Password: </label>
                        <input type="password" id="inputPassword"
                            autoComplete="new-password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset className="login-form-buttonAndLink d-flex justify-content-between">
                        <button className="btn btn-secondary" type="submit">
                            Sign in
                        </button>
                        <Link className="custom-text-green login-form-link" to="/register">Not a member yet?</Link>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}