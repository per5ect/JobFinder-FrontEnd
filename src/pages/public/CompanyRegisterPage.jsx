import {GuestCompanyHeader} from "../../components/Global/Header/GuestCompanyHeader.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainCompanyRegister} from "../../components/company-register-page/MainCompanyRegister.jsx";

export function CompanyRegisterPage() {
    return (
        <>
            <GuestCompanyHeader/>
            <MainCompanyRegister/>
            <Footer/>
        </>
    )
}