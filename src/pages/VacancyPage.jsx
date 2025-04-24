import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainVacancyDetails} from "../components/vacancy-details-page/MainVacancyDetails.jsx";

export function VacancyPage() {
    return (
        <>
            <Header/>
            <MainVacancyDetails/>
            <Footer/>
        </>
    )
}