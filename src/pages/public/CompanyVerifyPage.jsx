import {GuestCompanyHeader} from "../../components/Global/Header/GuestCompanyHeader.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainCompanyVerify} from "../../components/company-verify-page/MainCompanyVerify.jsx";

export function CompanyVerifyPage() {
    return (
        <>
            <GuestCompanyHeader/>
            <MainCompanyVerify/>
            <Footer/>
        </>
    )
}