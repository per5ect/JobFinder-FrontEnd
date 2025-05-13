import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainSuitableVacancies} from "../components/user-suitable-vacancies/MainSuitableVacancies.jsx";

export function UserSuitableVacanciesPage() {
    return (
        <>
            <Header/>
            <MainSuitableVacancies/>
            <Footer/>
        </>
    )
}