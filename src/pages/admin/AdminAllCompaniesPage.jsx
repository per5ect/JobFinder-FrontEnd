import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainAllCompanies} from "../../components/admin-all-companies/MainAllCompanies.jsx";

export function AdminAllCompaniesPage(){
    return(
        <>
            <Header />
            <MainAllCompanies/>
            <Footer />
        </>
    )
}