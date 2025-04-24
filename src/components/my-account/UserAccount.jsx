import {useEffect, useState} from "react";
import {getUserData} from "../../services/userService.js";
import {getAdminData} from "../../services/adminService.js";

export function UserAccount({userRole}){
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchUserData = async () => {
            try{
                if(userRole === "ROLE_USER"){
                    const userData = await getUserData();
                    setUser(userData)
                    console.log(userData)
                } else {
                    const adminData = await getAdminData();
                    setUser(adminData);
                    console.log(adminData);
                }

            } catch (error) {
                setError(error + "loading data error")
            } finally {
                setLoading(false)
            }
        }
        fetchUserData()
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
            <>
                <h1>My Account</h1>
               <p>email: {user.email}</p>
               <p>firstName: {user.firstName}</p>
               <p>lastName: {user.lastName}</p>
            </>
        )
}