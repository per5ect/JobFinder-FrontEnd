import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainAdmin} from "../../components/admin-main-page/MainAdmin.jsx";

export function AdminHomePage() {
    return (
        <>
            <Header/>
            <MainAdmin/>
            <Footer/>
        </>
    )
}