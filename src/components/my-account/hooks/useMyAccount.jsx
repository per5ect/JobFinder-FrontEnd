import {getUserRole} from "../../../utils/jwtDecode.js";
import {UserAccount} from "../UserAccount.jsx";
import {CompanyAccount} from "../CompanyAcconut.jsx";

export function useMyAccount(){
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

    return {userRole, getComponentByRole}
}