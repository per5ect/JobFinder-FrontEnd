import {getUserCV, getUserCvDetails} from "../../../services/userService.js";
import {useState} from "react";

export function useCvDetails() {
    const [cvDetails, setCvDetails] = useState([]);
    const [cvLink, setCvLink] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

        const fetchCvDetails = async () => {
            try {
                const data = await getUserCvDetails();
                const link = await getUserCV();
                setCvDetails(data);
                setCvLink(link);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

    return { cvDetails, cvLink, isLoading, fetchCvDetails };
}