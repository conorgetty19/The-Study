import {TheStudy} from "./components/TheStudy"
import {createRoot}  from "react-dom/client"
import './index.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <TheStudy />
  </BrowserRouter>
)
