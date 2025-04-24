import { jwtDecode } from "jwt-decode";

export const getUserRole = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try{
            const jwtData = jwtDecode(token);
            return jwtData.role;
        } catch (e){
            console.log("decoder error", e)
            return null;
        }
    } else return null;
}