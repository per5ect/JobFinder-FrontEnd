import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainCompanyVacancies} from "../../components/company-vacancies-page/MainCompanyVacancies.jsx";

export function CompanyVacanciesPage(){
    return(
        <>
            <Header/>
            <MainCompanyVacancies/>
            <Footer/>
        </>
    )
}