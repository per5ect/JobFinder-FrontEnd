import {isAuthenticated} from "../services/authenticationService.js";
import {Navigate, Outlet} from "react-router";
import {getUserRole} from "../utils/jwtDecode.js";

export function CompanyProtectedRoutes() {
    return isAuthenticated() && getUserRole() === "ROLE_COMPANY" ? <Outlet/> : <Navigate to="/company-login" replace/>
}