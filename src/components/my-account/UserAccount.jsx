import {useEffect} from "react";
import {Loader} from "../Global/Loader.jsx";
import {UserPersonalInformationForm} from "./UserPersonalnformationForm.jsx";
import {UserLoginDetailsForm} from "./UserLoginDetailsForm.jsx";
import {useUserAccount} from "./hooks/useUserAccount.js";

export function UserAccount({userRole}){
    const { user, loading, error, fetchUserData } = useUserAccount(userRole);

    useEffect(()=>{
        fetchUserData()
    }, [])

    if (loading) return <Loader/>;
    if (error) return <p>{error}</p>;

    return (
                <div className="flex flex-col w-full mt-[57px] mb-[57px]">
                    <div className="flex flex-col pb-9 border-b-1 border-black/10">
                        <div className="flex flex-row justify-between items-center w-full">

                            <div className="flex flex-row items-center gap-3 bg-black text-white font-konkhmer text-[48px] px-7 mb-3">
                                <h1 className="">My Profile</h1>
                                <img src="/icons/Me.svg" alt="My profile" className=""/>
                            </div>

                            {userRole === "ROLE_USER" ?
                                <div className="flex flex-row py-3 px-6.5 gap-1 bg-green rounded-2xl transition-colors ease-in-out hover:bg-green/80 ">
                                    <a href="/cv-details" className="text-black font-konkhmer">My CV details</a>
                                    <img src="/icons/Document.svg" alt="" className=""/>
                                </div> : null
                            }

                        </div>

                        <div className="flex flex-row gap-3 items-center">
                            <h3 className="font-konkhmer text-[30px]">Email:</h3>
                            <p className="font-kosugi text-[20px]">{user?.email || "Loading email..."}</p>
                        </div>

                    </div>

                    <UserPersonalInformationForm userPersonalData={user}/>
                    <UserLoginDetailsForm userLoginDetails={user} />

                </div>
        )
}