import {Layout} from "../Layout.jsx";

export function MainAdmin() {
    return (
        <main>
            <Layout>
                <div className="mt-13 mb-13 text-[50px] w-full flex flex-col items-center gap-10">
                    <h1 className="font-konkhmer ">Welcome Back Admin </h1>
                    <div className="flex flex-row gap-6">
                        <div className="flex justify-center items-center text-center bg-blue  px-10 rounded-xl max-w-[360px] max-h-[395px] transition-colors ease-in-out hover:bg-blue/90">
                            <a href="/users">
                                <div className="flex flex-col items-center gap-3">
                                    <img src="/Group-personWhite.svg" className="w-[100px] h-[100px]" alt=""/>
                                    <h3 className="text-white font-konkhmer text-[48px]">Users</h3>
                                    <p className="text-white font-kosugi text-[24px]">Manage your user base with maximum accuracy </p>
                                </div>
                            </a>
                        </div>
                        <div className="flex justify-center items-center  text-center bg-black  px-10 rounded-xl max-w-[360px] max-h-[395px] transition-colors ease-in-out hover:bg-black/90">
                            <a href="/companies">
                                <div className="flex flex-col items-center gap-3">
                                    <img src="/CompanyWhite.svg" alt="" className="w-[100px] h-[100px]"/>
                                    <h3 className="text-white font-konkhmer text-[48px]">Companies</h3>
                                    <p className="text-white font-kosugi text-[24px]">
                                        Full control over employers
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="flex justify-center items-center text-center bg-green py-16 px-10 rounded-xl max-w-[360px] max-h-[395px] transition-colors ease-in-out hover:bg-green/70">
                            <a href="/technologies">
                                <div className="flex flex-col items-center gap-3">
                                    <img src="/CPU.svg" alt=""/>
                                    <h3 className="text-black font-konkhmer text-[38px]">Technologies</h3>
                                    <p className="text-black font-kosugi text-[24px]">
                                        Analyze technologies - add new trends
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    )
}