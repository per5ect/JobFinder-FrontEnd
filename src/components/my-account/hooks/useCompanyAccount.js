import {useState} from "react";
import {getCompanyData} from "../../../services/companyService.js";

export function useCompanyAccount(){
    const [companyData,setCompanyData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

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

    return {companyData,loading,error, fetchCompanyData}
}