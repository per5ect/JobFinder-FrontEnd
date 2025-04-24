import axios from "axios";

const BACKEND_USER_API_URL = "http://localhost:8080/user";
const token = localStorage.getItem("token");

const apiUser = axios.create({
    baseURL: BACKEND_USER_API_URL,
    headers: {
        "Authorization": `Bearer ${token}`
    },
})

export const getUserData = async () => {
    const response = await apiUser.get("/my-account");
    return response.data;
}
