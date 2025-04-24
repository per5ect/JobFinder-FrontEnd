import { useState } from "react";
import {logout} from "../../../services/authenticationService.js";

export function DropdownElement() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block">
            <button onClick={() => setIsOpen(!isOpen)}
                    className="bg-green flex justify-center items-center w-25 h-25 transition-colors ease-in-out">
                <img src="/Menu.svg" alt="" className="text-black"/>
            </button>

            {isOpen && (
                <div className="absolute left-0 z-10 bg-green    w-44">
                    <ul className="py-2 text-sm text-black font-kosugi">
                        <li>
                            <a href="#" className="block px-4 py-2">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Earnings
                            </a>
                        </li>
                        <li>
                            <a href="/all-vacancies" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                View all vacancies
                            </a>
                        </li>
                        <li>
                            <button onClick={logout}  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
