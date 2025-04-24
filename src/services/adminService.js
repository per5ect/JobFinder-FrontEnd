import axios from "axios";

const BACKEND_USER_API_URL = "http://localhost:8080/admin";
const token = localStorage.getItem("token");

const apiAdmin = axios.create({
    baseURL: BACKEND_USER_API_URL,
    headers: {
        "Authorization": `Bearer ${token}`
    },
})

export const getAdminData = async () => {
    const response = await apiAdmin.get("/my-account");
    return response.data;
}

export const createTechnology = async (technologyName) => {
    const response = await apiAdmin.post("/add-technology", technologyName);
    return response.data;
}

export const deleteTechnology = async (technologyId) => {
    const response = await apiAdmin.delete(`/delete-technology/${technologyId}`);
    return response.data;
}

export const deleteVacancy = async (vacancyId) => {
    const response = await apiAdmin.delete(`/delete-vacancy/${vacancyId}`);
    return response.data;
}