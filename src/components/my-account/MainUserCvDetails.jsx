import {Layout} from "../Global/Layout.jsx";
import {CvDetailsForm} from "./CvDetailsForm.jsx";
import {useEffect} from "react";
import {useCvDetails} from "./hooks/useCvDetails.js";

export function MainUserCvDetails() {
    const { cvDetails, cvLink, isLoading, fetchCvDetails } = useCvDetails()

    useEffect(() => {
        fetchCvDetails();
    }, []);
    return (
        <main>
            <Layout>
                <div className="flex flex-col items-center mt-[57px] mb-[57px]">
                    <div className="flex flex-col pb-9 w-full">
                        <div className="flex flex-row justify-between items-center w-full">

                            <div className="flex flex-row items-center bg-black text-white font-konkhmer text-[48px] px-7 gap-3">
                                <h1 className="">My CV details</h1>
                                <img src="/icons/DocumentWhite.svg" alt="My profile" className="w-[40px] h-[40px]"/>
                            </div>
                                <div className="flex flex-row py-3 px-6.5 gap-1 bg-green rounded-2xl transition-colors ease-in-out hover:bg-green/80 ">
                                    <a href="/my-account" className="text-black font-konkhmer">My Profile</a>
                                    <img src="/icons/Me-black.svg" alt="" className="w-[24px] h-[24px"/>
                                </div>
                        </div>
                    </div>
                        <CvDetailsForm cvDetails={cvDetails} cvLink={cvLink} isLoading={isLoading}/>
                </div>
            </Layout>
        </main>
    )
}