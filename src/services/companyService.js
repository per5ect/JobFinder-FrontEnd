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

export const getCompanyVacancies = async () => {
    const response = await apiCompany.get("/my-vacancies");
    console.log(response);
    return response.data;
}

export const getVacancyApplications = async (vacancyId) => {
    const response = await apiCompany.get(`/my-vacancies/${vacancyId}/applications`);
    return response.data;
}

export const acceptApplicant = async (applicantId) => {
    const response = await apiCompany.patch(`/applications/${applicantId}/accept`);
    return response.data;
}

export const rejectApplicant = async (applicantId) => {
    const response = await apiCompany.patch(`/applications/${applicantId}/reject`);
    return response.data;
}