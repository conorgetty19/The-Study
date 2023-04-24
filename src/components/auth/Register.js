import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { checkIfEmail } from "../ApiManager"

export const Register = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        isAdmin: false
    })
    let navigate = useNavigate()

    //function to register new user
    //posts user object, uses response to populate "current user" (aka study user)
    //navigates user to homepage
    //ADD TO API MANAGER LATER
    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("study_user", JSON.stringify({
                        id: createdUser.id,
                        admin: createdUser.isAdmin
                    }))

                    navigate("/")
                }
            })
    }

    //function to handle register event
    //checks if user with email exists
    //fix later to check for unique email, username, and password
    const handleRegister = (e) => {
        e.preventDefault()
        checkIfEmail(user.email, registerNewUser)
    }

    //function to update user (except checkbox)
    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main>
            <form onSubmit={handleRegister}>
                <h1>Registration Form</h1>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input onChange={updateUser}
                        type="text" id="username"
                        placeholder="Enter username"
                        required
                        autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input onChange={updateUser}
                        type="password" id="password"
                        placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email: </label>
                    <input onChange={updateUser}
                        type="email" id="email"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="isAdmin">
                        <input onChange={(event) => {
                            const copy = {...user}
                            copy.isAdmin = event.target.checked
                            setUser(copy)
                        }}
                        type="checkbox" id="isAdmin" />
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