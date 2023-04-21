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
    return  (
        <main>
            <section>
                <form onSubmit={handleLogin}> 
                    <h1>The Study</h1>
                    <h2>Listen. Learn. Repeat.</h2>
                    <h3>Please sign in</h3>
                    <fieldset>
                        <label htmlFor="inputUsername"> Username: </label>
                        <input type="username" id="inputUsername"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            placeholder="Username"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password: </label>
                        <input type="password" id="inputPassword"
                            autoComplete="new-password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder="Password"
                            required/>
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form> 
            </section>
            <section>
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}