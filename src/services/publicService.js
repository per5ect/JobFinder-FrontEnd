import axios from "axios";

const BACKEND_PUBLIC_API_URL = "http://localhost:8080/public";

const apiPublic = axios.create({
    baseURL: BACKEND_PUBLIC_API_URL,
})

export const getAllTechnologies = async () => {
    const response = await apiPublic.get("/all-technology");
    return response.data;
}

export const getAllVacancies = async (filters = {}, page = 0, size = 10) => {
    const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== '')
    );

    const params = new URLSearchParams({
        ...cleanedFilters,
        page,
        size
    });

    const response = await apiPublic.get(`/all-vacancies?${params.toString()}`);
    return response.data;
};

export const getVacancy = async (id) => {
    const response = await apiPublic.get(`/all-vacancies/${id}`);
    return response.data;
}