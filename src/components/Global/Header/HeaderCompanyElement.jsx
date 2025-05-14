import {DropdownElement} from "./DropdownElement.jsx";

export function HeaderCompanyElement() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-row items-center gap-[68px]">
                <a href="/for-companies" className="bg-white flex justify-center items-center w-25 h-25">
                    <img src="/Logo.svg" alt="" className=""/>
                </a>
            </div>

            <a href="/create-work" className="px-6 py-1.5  text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                transition-colors ease-in-out hover:bg-green/90">
                Create a vacancy
            </a>

            <a href="/my-vacancies" className="px-6 py-1.5  text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                transition-colors ease-in-out hover:bg-green/90">
                Find employees
            </a>

            <a href="/my-vacancies" className="px-6 py-1.5 text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                transition-colors ease-in-out hover:bg-green/90">
                My vacancies
            </a>

            <div className="flex flex-row items-center">
                <a href="/my-account" className="bg-blue flex justify-center items-center w-25 h-25 transition-colors ease-in-out hover:bg-blue/90">
                    <img src="/icons/Me.svg" alt="" className=""/>
                </a>
                <DropdownElement/>
            </div>
        </div>
    )
}