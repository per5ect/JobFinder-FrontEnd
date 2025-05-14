import {GuestCompanyHeader} from "../../components/Global/Header/GuestCompanyHeader.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainCompanyLogin} from "../../components/company-login-page/MainCompanyLogin.jsx";

export function CompanyLoginPage(){
    return (
        <>
            <GuestCompanyHeader/>
            <MainCompanyLogin/>
            <Footer/>
        </>
    )
}