import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainForCompany} from "../components/main-company-page/MainForCompany.jsx";
import {GuestCompanyHeader} from "../components/Global/Header/GuestCompanyHeader.jsx";

export function MainForCompanyPage() {
    return (
        <>
            <GuestCompanyHeader/>
            <MainForCompany/>
            <Footer/>
        </>
    )
}