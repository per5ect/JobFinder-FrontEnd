import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {MainAllUsers} from "../../components/admin-all-users/MainAllUsers.jsx";

export function AdminAllUsersPage() {
    return(
        <>
            <Header/>
            <MainAllUsers/>
            <Footer/>
        </>
    )
}