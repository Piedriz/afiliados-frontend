import {
    createBrowserRouter
  } from "react-router-dom";

//Pages
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";


export const router = createBrowserRouter([
  {
    path: "/signin",
    element:  <LoginPage/>
  },
  {
    path: "/",
    element: <h1>holamundo</h1> 
  },
  {
    path: "/signup",
    element: <RegisterPage/>
  },
  {
    path: "/new-afiliate",
    element: <h1>formulario nuevo afiliado</h1>
  },
 
]);
