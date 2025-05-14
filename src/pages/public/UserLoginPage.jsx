import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainUserLogIn} from "../../components/user-login-page/MainUserLogIn.jsx";

export function UserLoginPage() {
    return (
        <>
            <Header/>
            <MainUserLogIn/>
            <Footer/>
        </>
    )
}