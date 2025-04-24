import {Layout} from "../../Layout.jsx";
import {AdminElement} from "./AdminElement.jsx";
import {getUserRole} from "../../../utils/jwtDecode.js";
import {UserElement} from "./UserElement.jsx";
import {GuestElement} from "./GuestElement.jsx";
import {CompanyElement} from "./CompanyElement.jsx";

export function Header() {

    const userRole = getUserRole();
    function getComponentByRole(role) {
        switch (role){
            case "ROLE_ADMIN":
                console.log(getUserRole())
                return <AdminElement />
            case "ROLE_USER":
                console.log(getUserRole())
                return <UserElement />
            case "ROLE_COMPANY":
                console.log(getUserRole())
                return <CompanyElement />
            default:
                console.log(getUserRole())
                return <GuestElement/>;
        }
    }

    return (
        <header className="h-25 bg-black flex flex-row items-center ">
            <Layout>
                {getComponentByRole(userRole)}
            </Layout>
        </header>
    )
}