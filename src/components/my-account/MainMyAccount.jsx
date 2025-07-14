import {Layout} from "../Global/Layout.jsx";
import {logout} from "../../services/authenticationService.js";
import {useMyAccount} from "./hooks/useMyAccount.jsx";

export function MainMyAccount() {
    const {getComponentByRole, userRole} = useMyAccount();

    return (
        <main>
            <Layout>
                <div className="flex flex-col items-center w-full">
                    {getComponentByRole(userRole)}
                    <button className="bg-red text-white button-konkhmer py-4.5 w-[540px] mb-[57px] rounded-2xl transition-colors ease-in-out hover:bg-red/90"
                            onClick={logout}>
                        SIGN OUT
                    </button>
                </div>
            </Layout>
        </main>
    )
}