import {DropdownElement} from "./DropdownElement.jsx";

export function CompanyElement() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-row items-center gap-[68px]">
                <a href="/" className="bg-white flex justify-center items-center w-25 h-25">
                    <img src="/Logo.svg" alt="" className=""/>
                </a>
            </div>

            <a href="" className="px-5 py-2 text-black bg-green underline underline-offset-3 font-kosugi">
                Find employees
            </a>

            <a href="/create-work" className="px-6 py-2 text-white bg-blue underline underline-offset-3 font-kosugi">
                Create job
            </a>

            <div className="flex flex-row items-center">
                <a href="/my-account" className="bg-blue flex justify-center items-center w-25 h-25 transition-colors ease-in-out hover:bg-blue/90">
                    <img src="/Me.svg" alt="" className=""/>
                </a>
                <DropdownElement/>
            </div>
        </div>
    )
}