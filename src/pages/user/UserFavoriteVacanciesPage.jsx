import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainUserFavoriteVacancies} from "../../components/user-favorite-vacancies/MainUserFavoriteVacancies.jsx";

export function UserFavoriteVacanciesPage() {
    return(
        <>
            <Header/>
            <MainUserFavoriteVacancies/>
            <Footer/>
        </>
    )
}