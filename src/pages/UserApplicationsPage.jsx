import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainUserApplications} from "../components/user-applications/MainUserApplications.jsx";

export function UserApplicationsPage() {
    return (
        <>
            <Header/>
            <MainUserApplications/>
            <Footer/>
        </>
    )
}