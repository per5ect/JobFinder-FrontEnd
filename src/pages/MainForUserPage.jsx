import {Layout} from "../components/Layout.jsx";
import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";

export function MainForUserPage() {
    return (
        <>
            <Header/>
                <main className="mt-19 mb-19">
                    <Layout>
                    <div className="grid grid-rows-3 gap-3 auto-rows-auto">

                        <div className="flex items-center gap-12 max-h-34">
                            <p className="text-[150px] leading-none font-konkhmer text-black">
                                FIND
                            </p>
                            <p className="text-[32px] leading-8 font-kosugi text-black">
                                Our service helps you quickly and conveniently analyze resumes and find jobs that perfectly match your experience and skil
                            </p>
                        </div>

                        <div className="grid grid-cols-10 items-center max-h-[135px]">
                            <span className="h-[86px] max-w-[192px] bg-black block col-start-1 col-end-3"></span>
                            <p className="text-[150px] col-span-1 col-start-3 col-end-8 leading-none font-konkhmer text-black">
                                YOUR
                            </p>
                            <span className="h-[86px] bg-black block col-start-8 col-end-11"></span>
                        </div>

                        <div className="flex flex-row items-center justify-between max-h-[135px]">
                            <p className="text-[39px] font-kosugi text-black">
                                Start now upload your CV
                            </p>
                            <p className="text-[150px] font-konkhmer text-black">JOB</p>
                            <p className="text-[64px]">🔍🔍🔍</p>
                        </div>

                    </div>

                    <div className="grid grid-rows-2 grid-cols-12 mt-19">
                        <div className="row-start-1 col-start-1 col-end-8 bg-green flex justify-center items-center">
                            <p className="text-[36px] font-kosugi">Upload your CV (PDF or DOCX)</p>
                        </div>
                        <a href="/analyze" className="px-[95px] py-[30px] row-start-2 col-start-8 col-end-13 bg-blue text-[36px] text-center text-white font-kosugi transition-colors ease-in-out hover:bg-blue/90">
                            Start right now
                        </a>
                    </div>

                        <div className="flex flex-col mt-20 gap-15">
                            <div className="bg-black h-25 flex justify-center items-center w-90">
                                <p className="font-kosugi text-[36px] text-white py-7.5">How it works???</p>
                            </div>

                            <div className="">
                                <ol className="grid grid-rows-4 grid-cols-12 row-start-2 list-decimal text-[33px] font-kosugi">
                                    <li className="col-start-2 col-end-12 border-b">
                                        <p className="py-[33px]">AI will analyze your experience, skills, and education</p>
                                    </li>
                                    <li className="col-start-3 col-end-9 row-start-2 border-b">
                                        <p className="py-[35px]">Get a list of suitable jobs</p>
                                    </li>
                                    <li className="col-start-4 col-end-12 row-start-3 border-b">
                                        <p className="py-[35px]">Filter jobs by salary, experience and city</p>
                                    </li>
                                    <li className="col-start-5 col-end-12 row-start-4 border-b">
                                        <p className="py-[35px]">Respond to the best offers in one click</p>
                                    </li>
                                </ol>
                            </div>

                            <a href="/analyze" className="py-[30px] px-[93px] bg-green text-[36px] text-center text-black font-kosugi ml-auto transition-colors ease-in-out hover:bg-green/90">
                                Start right now
                            </a>
                        </div>
                    </Layout>
                </main>
            <Footer/>
        </>
    )
}