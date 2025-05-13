import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_USER_API_URL = `${API_BASE_URL}/user`;
const API_BASE_URL2 = "http/localhost:8081/user";
const token = localStorage.getItem("token");

const apiUser = axios.create({
    baseURL: API_BASE_URL2,
    headers: {
        "Authorization": `Bearer ${token}`
    },
})

export const getUserData = async () => {
    const response = await apiUser.get("/my-account");
    return response.data;
}

export const getUserCvDetails = async () => {
    const response = await apiUser.get("/getCvDetails");
    return response.data;
}

export const getUserCV = async () => {
    const response = await apiUser.get("/getCV");
    return response.data;
}

export const getUserFavoriteVacancies = async () => {
    const response = await apiUser.get("/my-favorite-vacancies");
    return response.data;
}

export const addToFavoriteVacancies = async (vacancyId) => {
    const response = await apiUser.post(`/add-to-favorite/${vacancyId}`);
    return response.data;
}

export const removeFromFavoriteVacancies = async (vacancyId) => {
    const response = await apiUser.delete(`/remove-from-favorite/${vacancyId}`);
    return response.data;
}

export const getUserApplications = async () => {
    const response = await apiUser.get("/my-applications");
    return response.data;
}

export const applyToVacancy = async (vacancyId) => {
    const response = await apiUser.post(`/apply/${vacancyId}`);
    return response.data;
}

export const getAllMatchesVacancies = async (filters = {}, page = 0, size = 10) => {
    const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== '')
    );

    const params = new URLSearchParams({
        ...cleanedFilters,
        page,
        size
    });

    const response = await apiUser.get(`/getMatchingVacancies?${params.toString()}`);
    return response.data;
};

export const uploadUserCv = async (CV) => {
    const response = await apiUser.post(`/uploadCV`, CV);
    return response.data;
}

export const analyzeUserCV = async () => {
    const response = await apiUser.post("/analyzeCV");
    return response.data;
}

export const updateUserPersonalInformation = async (updatedData) => {
    const response = await apiUser.patch("/my-account/update-personal-info",updatedData);
    return response.data;
}