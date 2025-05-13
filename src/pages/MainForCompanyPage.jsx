import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainForCompany} from "../components/main-company-page/MainForCompany.jsx";
import {GuestCompanyHeader} from "../components/Global/Header/GuestCompanyHeader.jsx";
import {isAuthenticated} from "../services/authenticationService.js";

export function MainForCompanyPage() {
    const authentication = isAuthenticated();
    return (
        <>
            {authentication ? <Header /> : <GuestCompanyHeader/>}
            <MainForCompany/>
            <Footer/>
        </>
    )
}