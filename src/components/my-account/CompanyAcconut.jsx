import {useEffect, useState} from "react";
import {getCompanyData} from "../../services/companyService.js";

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <>
            <h1>Company account</h1>
            <p>email: {companyData.companyEmail}</p>
            <p>companyName: {companyData.companyName}</p>
            <p>company phone: {companyData.companyPhone}</p>
        </>
    )
}