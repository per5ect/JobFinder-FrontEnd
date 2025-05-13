import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const API_BASE_URL2 = "http://localhost:8081";

// const BACKEND_PUBLIC_API_URL = `${API_BASE_URL}/public`;
const BACKEND_PUBLIC_API_URL = `${API_BASE_URL}/public`;

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