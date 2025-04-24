import {DropdownElement} from "./DropdownElement.jsx";

export function AdminElement() {
    return (
        <div className="flex justify-between items-center">
            <div className="bg-white flex flex-row items-center gap-6 h-25 px-7">
                <a href="/" className="">
                    <img src="/Logo.svg" alt="" className=""/>
                </a>
                <p className="font-kosugi text-black text-[20px]">Admin Page</p>
            </div>

            <a href="" className="px-4 py-1 text-black bg-green underline underline-offset-3 font-kosugi">
                All companies
            </a>

            <a href="" className="px-4 py-1 text-black bg-green underline underline-offset-3 font-kosugi">
                All users
            </a>

            <a href="/technologies" className="px-4 py-2 text-black bg-green underline underline-offset-3 font-kosugi">
                Technologies
            </a>
            <div className="flex flex-row">
                <div className="flex flex-row items-center gap-5">
                    <a href="/my-account" className="bg-blue flex justify-center items-center w-25 h-25 transition-colors ease-in-out hover:bg-blue/90">
                        <img src="/Me.svg" alt="" className=""/>
                    </a>
                </div>
                <DropdownElement/>
            </div>
        </div>
    )
}