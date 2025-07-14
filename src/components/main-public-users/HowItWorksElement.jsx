export function HowItWorksElement(){
    return (
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
    )
}