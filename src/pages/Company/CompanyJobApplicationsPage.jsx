import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainJobApplications} from "../../components/job-applications-page/MainJobApplications.jsx";

export function CompanyJobApplicationsPage(){
    return(
        <>
            <Header/>
            <MainJobApplications/>
            <Footer/>
        </>
    )
}