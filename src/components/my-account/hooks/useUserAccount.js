import { useState } from "react";
import {getAdminData} from "../../../services/adminService.js";
import {getUserData} from "../../../services/userService.js";


export function useUserAccount(userRole) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUserData = async () => {
        setLoading(true);
        setError(null);
        try {
            if (userRole === "ROLE_USER") {
                const userData = await getUserData();
                setUser(userData);
                console.log("user data");
                console.log(userData);
            } else {
                const adminData = await getAdminData();
                setUser(adminData);
                console.log(adminData);
            }
            setLoading(false);
        } catch (err) {
            setError(err + " loading data error");
        }
        finally {
            setLoading(false);
        }
    };

    return { user, loading, error, fetchUserData };
}
