import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainCreateJob} from "../components/company-create-job/MainCreateJob.jsx";

export function CompanyCreateJobPage(){
    return (
        <>
            <Header/>
            <MainCreateJob/>
            <Footer/>
        </>
    )
}