import {Layout} from "../Global/Layout.jsx";

export function MainForCompany(){
    return(
        <main>
            <Layout>
                <div className="flex flex-row mt-10 items-end justify-between">
                    <div className="flex flex-col items-start gap-[67px]">
                        <p className="text-black text-[40px] font-konkhmer leading-13">
                            Welcome to JobFinder a <br/>
                            platform that helps companies <br/>
                            find the perfect candidates
                        </p>
                        <a href="/create-work" className="px-[115px] py-[30px] bg-blue text-[36px] font-kosugi text-white underline underline-offset-7">
                            Create a job
                        </a>
                    </div>
                    <img src="/company.jpg" alt=""/>
                </div>
                
                <div className="flex flex-row justify-between mt-27">
                    <div className="border max-w-[360px]">
                        <div className="flex flex-col px-[33px] py-[33px] gap-[24px]">
                            <p className="text-black text-[24px] font-kosugi">1</p>
                            <p className="font-konkhmer text-[27px]">Create your account</p>
                            <p className="font-kosugi text-[24px] leading-7">
                                All you need is an email address to create an account and post a job.
                            </p>
                        </div>
                    </div>
                    <div className="border max-w-[360px]">
                        <div className="flex flex-col px-[33px] py-[33px] gap-[24px]">
                            <p className="text-black text-[24px] font-kosugi">2</p>
                            <p className="font-konkhmer text-[27px]">
                                Build your job offer
                            </p>
                            <p className="font-kosugi text-[24px] leading-7">
                                Then just add a title, description and location to your job posting and you're done.
                            </p>
                        </div>
                    </div>
                    <div className="border max-w-[360px]">
                        <div className="flex flex-col px-[33px] py-[33px] gap-[24px]">
                            <p className="text-black text-[24px] font-kosugi">3</p>
                            <p className="font-konkhmer text-[27px]">
                                Publish your job offer
                            </p>
                            <p className="font-kosugi text-[24px] leading-7">
                                Once the position is posted, use our state-of-the-art tools to find your ideal candidate.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-[67px] mb-[67px] flex flex-row items-center justify-between">
                    <p className="font-konkhmer text-white bg-black text-[40px] px-[43px] py-[29px]">
                        How it works<span className="font-kosugi">?</span>
                    </p>
                    <p className="font-kosugi text-black text-[30px]">
                        We use modern technology to automatically process <br/>
                        resumes in PDF format, allowing you to:
                    </p>
                </div>

                <div className="flex flex-col gap-[32px]">
                    <div className="flex flex-row bg-blue py-[35px] px-[41px] gap-[13px]">
                        <img src="/icons/Search-Document.svg" alt=""/>
                        <div className="flex flex-col">
                            <p className="font-konkhmer text-white text-[24px]">Quickly find suitable specialists</p>
                            <p className="font-kosugi text-white text-[22px]">the system analyzes documents and suggests candidates that meet your requirements.</p>
                        </div>
                    </div>

                    <div className="flex flex-row bg-black py-[35px] px-[41px] max-w-[996px] gap-[13px]">
                        <img src="/icons/watch.svg" alt=""/>
                        <div className="flex flex-col">
                            <p className="font-konkhmer text-white text-[24px]">Save time on selection</p>
                            <p className="font-kosugi text-white text-[22px]">smart algorithms match applicants with the right skills and experience.</p>
                        </div>
                    </div>

                    <div className="flex flex-row bg-green py-[35px] pl-[33px] max-w-[552px] gap-[20px]">
                        <img src="/icons/Group-person.svg" alt=""/>
                        <div className="flex flex-col">
                            <p className="font-konkhmer text-[24px] text-black">Filter and sort resumes</p>
                            <p className="font-kosugi text-[22px] text-black">
                                choose the best by key criteria.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-[67px] mb-[67px] flex flex-row items-center justify-between">
                    <a href="#" className="px-[115px] py-[30px] bg-blue text-[36px] font-kosugi text-white underline underline-offset-7">
                        Start right now
                    </a>
                    <p className="font-kosugi text-black text-[25px]">
                        You have control over your offers 24/7 - you can <br/>
                        edit, add or close them whenever you want.
                    </p>
                </div>
            </Layout>
        </main>
    )
}