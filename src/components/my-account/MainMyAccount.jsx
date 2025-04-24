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
                <div className="flex items-center w-full">
                    <div className="flex flex-col items-center mx-auto py-12 px-6.5 mt-7.5 mb-7.5 border border-[#222A24]/40">
                        {getComponentByRole(userRole)}
                    </div>
                    <button onClick={logout}>Log out</button>
                </div>
            </Layout>
        </main>
    )
}