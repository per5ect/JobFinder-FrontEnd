import {DropdownElement} from "./DropdownElement.jsx";

export function HeaderAdminElement() {
    return (
        <div className="flex justify-between items-center">
            <div className="bg-white flex flex-row items-center gap-6 h-25 px-7">
                <a href="/main-admin-page" className="">
                    <img src="/Logo.svg" alt="" className=""/>
                </a>
                <p className="font-kosugi text-black text-[20px]">Admin Page</p>
            </div>

            <a href="/companies" className="px-6 py-1.5  text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                transition-colors ease-in-out hover:bg-green/90">
                All companies
            </a>

            <a href="/users" className="px-6 py-1.5  text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                transition-colors ease-in-out hover:bg-green/90">
                All users
            </a>

            <a href="/technologies" className="px-6 py-1.5  text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
                transition-colors ease-in-out hover:bg-green/90">
                Technologies
            </a>
            <div className="flex flex-row">
                <div className="flex flex-row items-center gap-5">
                    <a href="/my-account" className="bg-blue flex justify-center items-center w-25 h-25 transition-colors ease-in-out hover:bg-blue/90">
                        <img src="/icons/Me.svg" alt="" className=""/>
                    </a>
                </div>
                <DropdownElement/>
            </div>
        </div>
    )
}