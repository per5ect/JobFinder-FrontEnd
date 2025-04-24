import axios from "axios";

const BACKEND_USER_API_URL = "http://localhost:8080/company";
const token = localStorage.getItem("token");

const apiCompany = axios.create({
    baseURL: BACKEND_USER_API_URL,
    headers: {
        "Authorization": `Bearer ${token}`
    },
})

export const getCompanyData = async () => {
    const response = await apiCompany.get("/my-company");
    return response.data;
}

export const createVacancy = async (vacancyData) => {
    const response = await apiCompany.post("/create-vacancy", vacancyData);
    return response.data;
}