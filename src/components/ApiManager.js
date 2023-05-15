//intend to continue refactoring to add all fetches to this document. Will break down further when document is too large

export const loginPassOrFail = (username, password, navigate) => {

    return fetch(`http://localhost:8088/users?username=${username}&password=${password}`)
        .then(res => res.json())
        .then(foundUsers => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0]
                localStorage.setItem("study_user", JSON.stringify({
                    id: user.id,
                    admin: user.isAdmin
                }))

                navigate("/")
            }
            else {
                window.alert("Invalid login")
            }
        })
}

export const checkIfEmail = (userEmail, registerNewUser) => {
    return fetch(`http://localhost:8088/users?email=${userEmail}`)
        .then(res => res.json())
        .then(response => {
            if (response.length > 0) {
                // Duplicate email. No good.
                window.alert("Account with that email address already exists")
            }
            else {
                // Good email, create user.
                registerNewUser()
            }
        })
}