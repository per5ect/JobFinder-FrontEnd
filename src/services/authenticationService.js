import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const API_BASE_URL2 = "http://localhost:8081";

const BACKEND_API_URL = `${API_BASE_URL2}/auth/`;

const apiAuth = axios.create({
    baseURL: BACKEND_API_URL,
    headers: { "Content-Type": "application/json" },
})

export const registerUser = async (userData) => {
    const response = await apiAuth.post("/user/signup", userData);
    return response.data;
}

export const registerCompany = async (companyData) => {
    const response = await apiAuth.post("/company/signup", companyData);
    return response.data;
}

export const loginUser = async (userLoginData) => {
    const response = await apiAuth.post("/user/login", userLoginData);
    const userData = response.data;
    const expirationTime = userData.expiresIn;
    localStorage.setItem("token", userData.token);
    localStorage.setItem("expiresIn", expirationTime);
    return response.data;
}

export const loginCompany = async (companyLoginData) => {
    const response = await apiAuth.post("/company/login", companyLoginData);
    const companyData = response.data;
    const expirationTime = companyData.expiresIn;
    localStorage.setItem("token", companyData.token);
    localStorage.setItem("expiresIn", expirationTime);
    return response.data;
}

export const verifyUser = async (userVerifyData) => {
    const response = await apiAuth.post("/user/verify", userVerifyData);
    return response.data;
}

export const verifyCompany = async (companyVerifyData) => {
    const response = await apiAuth.post("/company/verify", companyVerifyData);
    return response.data;
}

export const resendVerificationCode = async (email) => {
    try {
        const response = await apiAuth.post(`/user/resend?email=${encodeURIComponent(email)}`);
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    window.location.href = "/"; // Перенаправление на страницу входа
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

export const isTokenExpired = () => {
    const expiresIn = localStorage.getItem("expiresIn");

    if (!expiresIn) {
        return true;
    }

    return Date.now() >= Number(expiresIn);
};