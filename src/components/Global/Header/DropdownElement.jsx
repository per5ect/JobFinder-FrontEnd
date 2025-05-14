import { useState } from "react";
import {logout} from "../../../services/authenticationService.js";
import {getUserRole} from "../../../utils/jwtDecode.js";
import {UserDropdownMenu} from "./UserDropdownMenu.jsx";
import {CompanyDropdownMenu} from "./CompanyDropdownMenu.jsx";
import {AdminDropdownMenu} from "./AdminDropdownMenu.jsx";

export function DropdownElement() {
    const [isOpen, setIsOpen] = useState(false);

    const userRole = getUserRole();
    const dropdownByRole = (role) => {
        switch (role) {
            case "ROLE_USER":
                return <UserDropdownMenu/>
            case "ROLE_COMPANY":
                return <CompanyDropdownMenu/>
            case "ROLE_ADMIN":
                return <AdminDropdownMenu/>
        }
    }

    return (
        <div className="relative inline-block">
            <button onClick={() => setIsOpen(!isOpen)}
                    className="bg-green flex justify-center items-center w-25 h-25 transition-colors ease-in-out">
                <img src="/icons/Menu.svg" alt="" className="text-black"/>
            </button>

            {isOpen && (
                <div className="absolute left-0 z-10 bg-green w-44">
                    <ul className="text-sm text-black font-kosugi">
                        {dropdownByRole(userRole)}
                        <li>
                            <div className="flex flex-row items-center w-full bg-red text-white px-4 py-3 gap-2
                                    transition-colors ease-in-out hover:bg-black ">
                                <a href="#" onClick={logout} className="">
                                    Sign out
                                </a>
                                <img src="/icons/LogOut.svg" className="" alt=""/>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
