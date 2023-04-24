import { Route, Routes, Outlet } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={

                <>

                <Outlet />
                </>

            }>

            </Route>
        </Routes>
    )
}