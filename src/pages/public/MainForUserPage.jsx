import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainPublicForUsers} from "../../components/main-public-users/MainPublicForUsers.jsx";

export function MainForUserPage() {
    return (
        <>
            <Header/>
            <MainPublicForUsers/>
            <Footer/>
        </>
    )
}