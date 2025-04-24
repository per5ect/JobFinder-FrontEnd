import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainAllVacancies} from "../components/all-vacancies-page/MainAllVacancies.jsx";

export function AllVacanciesPage() {
    return (
        <>
            <Header/>
            <MainAllVacancies/>
            <Footer/>
        </>
    )
}