import { Route, Routes, Outlet } from "react-router-dom"
import { SubmissionForm } from "../forms/SubmissionForm"
import { Homepage } from "../uploads/Homepage"
import { CategoryResources } from "../uploads/CategoryResources"
import { EditForm } from "../forms/EditForm"

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
                <Route path="category/:categoryId" element={< CategoryResources/>} />  
                <Route path="editForm/:resourceId" element={< EditForm/>} />  
            </Route>
        </Routes>
    )
}