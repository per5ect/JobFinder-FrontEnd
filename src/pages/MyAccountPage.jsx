import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainMyAccount} from "../components/my-account/MainMyAccount.jsx";

export function MyAccountPage() {
    return (
        <>
            <Header/>
            <MainMyAccount/>
            <Footer/>
        </>
    )
}