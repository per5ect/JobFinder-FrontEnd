import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainUserRegister} from "../../components/user-register-page/MainUserRegister.jsx";

export function UserRegisterPage() {
    return (
        <>
            <Header/>
            <MainUserRegister/>
            <Footer/>
        </>
    )
}