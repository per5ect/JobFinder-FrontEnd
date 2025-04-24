import {Layout} from "../../Layout.jsx";

export function GuestCompanyHeader() {
    return (
        <header className="h-25 bg-black flex flex-row items-center ">
            <Layout>
                <div className="flex justify-between items-center">
                    <div className="flex flex-row items-center gap-[68px]">
                        <a href="/" className="bg-white flex justify-center items-center w-25 h-25">
                            <img src="/Logo.svg" alt="" className=""/>
                        </a>

                        <a href="/" className="px-6 py-2 text-black bg-white underline underline-offset-3 font-kosugi">
                            For the employees
                        </a>
                    </div>

                    <div className="flex flex-row items-center gap-5">
                        <a href="/company-login" className="px-6 py-2 text-white bg-blue font-kosugi hover:bg-blue/90">
                            Sign in / Sign up
                        </a>
                        <img src="/Arrow.svg" alt=""/>
                        <a href="/my-account" className="bg-blue flex justify-center items-center w-25 h-25 transition-colors ease-in-out hover:bg-blue/90">
                            <img src="/Me.svg" alt="" className=""/>
                        </a>
                    </div>
                </div>
            </Layout>
        </header>
    )
}