import axios from "axios";

const BACKEND_PUBLIC_API_URL = "http://localhost:8080/public";

const apiPublic = axios.create({
    baseURL: BACKEND_PUBLIC_API_URL,
})

export const getAllTechnologies = async () => {
    const response = await apiPublic.get("/all-technology");
    return response.data;
}

export const getAllVacancies = async () => {
    const response = await apiPublic.get("/all-vacancies");
    return response.data;
}

export const getVacancy = async (id) => {
    const response = await apiPublic.get(`/all-vacancies/${id}`);
    return response.data;
}