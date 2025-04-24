import {isAuthenticated} from "../services/authenticationService.js";
import {Navigate, Outlet} from "react-router";
import {getUserRole} from "../utils/jwtDecode.js";

export function AdminProtectedRoutes() {
    return (isAuthenticated() && getUserRole() === "ROLE_ADMIN" )?  <Outlet/> : <Navigate to="/user-login" replace/>
}