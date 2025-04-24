import {isAuthenticated} from "../services/authenticationService.js";
import {Navigate, Outlet} from "react-router";
import {getUserRole} from "../utils/jwtDecode.js";

export function UserProtectedRoutes() {
    return isAuthenticated() && getUserRole() === "ROLE_USER" ? <Outlet/> : <Navigate to="/user-login" replace/>
}