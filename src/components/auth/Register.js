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
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main className="general-font">
            <h2 className="fs-1 text custom-text-green-withoutHover general-font">TS</h2>
            <form className="registration-form" onSubmit={handleRegister}>
                <h1 className="registration-form-title">Registration Form</h1>
                <div className="registration-form-fields">
                    <fieldset className="registration-form-labelAndInput">
                        <label htmlFor="username">Username</label>
                        <input className="registration-form-field"
                            onChange={updateUser}
                            type="text" id="username"
                            placeholder="Enter username"
                            required
                            autoFocus />
                    </fieldset>
                    <fieldset className="registration-form-labelAndInput">
                        <label htmlFor="password">Password</label>
                        <input className="registration-form-field"
                            onChange={updateUser}
                            type="password" id="password"
                            placeholder="Password" required />
                    </fieldset>
                    <fieldset className="registration-form-labelAndInput">
                        <label htmlFor="email"> Email </label>
                        <input className="registration-form-field"
                            onChange={updateUser}
                            type="email" id="email"
                            placeholder="Email address"
                            required />
                    </fieldset>
                    <fieldset className="registration-form-labelAndInput">
                        <label htmlFor="isAdmin">
                            <input onChange={(event) => {
                                const copy = { ...user }
                                copy.isAdmin = event.target.checked
                                setUser(copy)
                            }}
                                type="checkbox" id="isAdmin" />
                            I am an admin
                        </label>
                    </fieldset>
                </div>
                <fieldset>
                    <button className="btn btn-secondary" type="submit">
                        Register
                    </button>
                </fieldset>
            </form>
        </main>
    )
}