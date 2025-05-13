import {useEffect, useState} from "react";
import {getCompanyData} from "../../services/companyService.js";
import {Loader} from "../Global/Loader.jsx";
import {CompanyInformationForm} from "./CompanyInformationForm.jsx";
import {CompanyLoginDetailsForm} from "./CompanyLoginDetailsForm.jsx";

export function CompanyAccount() {
    const [companyData,setCompanyData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchCompanyData = async () => {
            try{
                const data = await getCompanyData();
                setCompanyData(data)
                console.log(data)
            } catch (error) {
                setError(error + "loading data error")
            } finally {
                setLoading(false)
            }
        }
        fetchCompanyData()
    }, [])

    if (loading) return <Loader/>;
    if (error) return <p>{error}</p>;
    return (
        <div className="flex flex-col w-full mt-[57px] mb-[57px]">
            <div className="flex flex-col pb-9 border-b-1 border-black/10">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row items-center gap-3">
                        <h1 className="text-[48px] font-konkhmer">My company profile</h1>
                        <img src="/Company.svg" alt="My profile" className=""/>
                    </div>
                        <div className="flex flex-row py-3 px-6.5 gap-1 bg-green rounded-2xl transition-colors ease-in-out hover:bg-green/80 ">
                            <a href="/my-vacancies" className="text-black font-konkhmer">My vacancies</a>
                            <img src="/Document.svg" alt="" className=""/>
                        </div>

                </div>

                <div className="flex flex-row gap-3 items-center">
                    <h3 className="font-konkhmer text-[30px]">Email:</h3>
                    <p className="font-kosugi text-[20px]">{companyData.companyName}</p>
                </div>
            </div>
            <CompanyInformationForm companyData={companyData}/>
            <CompanyLoginDetailsForm/>
        </div>
    )
}