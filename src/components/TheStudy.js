import {Route, Routes} from "react-router-dom"
import { Authorized } from "./views/Authorized";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import './TheStudy.css';
import { ApplicationViews } from "./views/ApplicationViews";
import { NavBar } from "./nav/NavBar";


//add navbar later
export const TheStudy = () => {
  return <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>

      <Route path="*" element={
        <Authorized>
          <>
          <NavBar />
          <ApplicationViews />
          </>
        </Authorized>
      } />
  </Routes>
}