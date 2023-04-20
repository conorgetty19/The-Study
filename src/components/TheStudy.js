import {Route, Routes} from "react-router-dom"
import { Authorized } from "./views/Authorized";
import { Login } from "./auth/Login";
import './TheStudy.css';
import { ApplicationViews } from "./views/ApplicationViews";

export const TheStudy = () => {
  return <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<h2>register</h2>}/>

      <Route path="*" element={
        <Authorized>
          <>
          
          <ApplicationViews />
          </>
        </Authorized>
      } />
  </Routes>
}
