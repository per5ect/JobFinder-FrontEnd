import { useState, useEffect } from "react";
import {updateUserPersonalInformation} from "../../../services/userService.js";

export function useUserPersonalInformation(userPersonalData) {
    const [formData, setFormData] = useState({ name: "", surname: "" });
    const [status, setStatus] = useState(null); // success | error | null
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userPersonalData) {
            setFormData({
                name: userPersonalData.firstName || "",
                surname: userPersonalData.lastName || ""
            });
        }
    }, [userPersonalData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            await updateUserPersonalInformation({
                name: formData.name,
                surname: formData.surname
            });
            setStatus("success");
        } catch (error) {
            console.error("Update error", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return { formData, status, loading, handleChange, handleSubmit };
}
