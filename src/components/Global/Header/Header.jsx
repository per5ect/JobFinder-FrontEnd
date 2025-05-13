import {Layout} from "../../Layout.jsx";
import {HeaderAdminElement} from "./HeaderAdminElement.jsx";
import {getUserRole} from "../../../utils/jwtDecode.js";
import {HeaderUserElement} from "./HeaderUserElement.jsx";
import {HeaderGuestElement} from "./HeaderGuestElement.jsx";
import {HeaderCompanyElement} from "./HeaderCompanyElement.jsx";

export function Header() {

    const userRole = getUserRole();
    function getComponentByRole(role) {
        switch (role){
            case "ROLE_ADMIN":
                console.log(getUserRole())
                return <HeaderAdminElement />
            case "ROLE_USER":
                console.log(getUserRole())
                return <HeaderUserElement />
            case "ROLE_COMPANY":
                console.log(getUserRole())
                return <HeaderCompanyElement />
            default:
                console.log(getUserRole())
                return <HeaderGuestElement/>;
        }
    }

    return (
        <header className="w-full h-25 bg-black flex flex-row items-center ">
            <Layout>
                {getComponentByRole(userRole)}
            </Layout>
        </header>
    )
}