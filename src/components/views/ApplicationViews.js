import { Route, Routes, Outlet } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={

                <>
                <h1>The Study</h1>
                <div>Listen. Learn. Repeat.</div>

                <Outlet />
                </>

            }>

            </Route>
        </Routes>
    )
}