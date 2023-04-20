import {useState} from "react"
import { useNavigate } from "react-router-dom"

export const Register = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        isAdmin: false
    })
    let navigate = useNavigate()

    //function to register new user

    //function to handle register event

    return (
        <main>
            <form>
                <h1>Registration Form</h1>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username"
                    placeholder="Enter username"
                    required 
                    autoFocus/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"
                        placeholder="Password" required/>
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email: </label>
                    <input type="email" id="email"
                        placeholder="Email address" 
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="adminStatus">
                        <input type="checkbox" id="adminStatus" />
                        I am an admin
                        </label>
                </fieldset>
                <fieldset>
                        <button type="submit">
                            Register
                        </button>
                </fieldset>
            </form>
        </main>
    )
}