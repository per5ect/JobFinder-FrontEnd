import {isAuthenticated} from "../services/authenticationService.js";
import {Navigate, Outlet} from "react-router";

export function MyAccountProtectedRoutes(){
    return isAuthenticated() ? <Outlet/> : <Navigate to="/user-login" replace/>
}