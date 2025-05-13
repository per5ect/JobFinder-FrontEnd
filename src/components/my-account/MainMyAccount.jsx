import {getUserRole} from "../../utils/jwtDecode.js";
import {Layout} from "../Layout.jsx";
import {logout} from "../../services/authenticationService.js";
import {UserAccount} from "./UserAccount.jsx";
import {CompanyAccount} from "./CompanyAcconut.jsx";

export function MainMyAccount() {
    const userRole = getUserRole();

    function getComponentByRole(role) {
        switch (role){
            case "ROLE_ADMIN":
            case "ROLE_USER":
                console.log(getUserRole())
                return <UserAccount userRole={userRole} />
            case "ROLE_COMPANY":
                console.log(getUserRole())
                return <CompanyAccount />
        }
    }
    return (
        <main>
            <Layout>
                <div className="flex flex-col items-center w-full">
                    {getComponentByRole(userRole)}
                    <button className="bg-red text-white button-konkhmer py-4.5 w-[540px] mb-[57px] rounded-2xl transition-colors ease-in-out hover:bg-red/90" onClick={logout}>SIGN OUT</button>
                </div>
            </Layout>
        </main>
    )
}