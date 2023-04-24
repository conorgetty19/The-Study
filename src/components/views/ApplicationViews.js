import { Route, Routes, Outlet } from "react-router-dom"
import { SubmissionForm } from "../forms/SubmissionForm"
import { Homepage } from "../uploads/Homepage"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={

                <>

                    <Outlet />
                </>

            }>
                <Route path="/submissionForm" element={<SubmissionForm />} />
                <Route path="/" element={<Homepage />} />
            </Route>
        </Routes>
    )
}