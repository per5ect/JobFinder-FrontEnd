export function HeaderGuestElement(){
    return(
        <div className="flex justify-between items-center">
            <div className="flex flex-row items-center gap-[68px]">
                <a href="/" className="bg-white flex justify-center items-center w-25 h-25">
                    <img src="/Logo.svg" alt="" className=""/>
                </a>

                <a href="/for-companies" className="px-6 py-1.5 text-black bg-white underline underline-offset-3 font-kosugi rounded-xl
                transition-colors ease-in-out hover:bg-white/90">
                    For the employers
                </a>
            </div>

            <a href="/all-vacancies" className="px-6 py-1.5 text-black bg-green underline underline-offset-3 font-kosugi rounded-xl
              transition-colors ease-in-out hover:bg-green/90">
                View vacancies
            </a>

            <div className="flex flex-row items-center gap-5">
                <a href="/user-login" className="px-6 py-1.5 text-white bg-blue rounded-xl font-kosugi transition-colors ease-in-out  hover:bg-blue/90 ">
                    Sign in / Sign up
                </a>
                <img src="/icons/Arrow.svg" alt=""/>
                <a href="/my-account" className="bg-blue flex justify-center items-center w-25 h-25 transition-colors ease-in-out hover:bg-blue/90">
                    <img src="/icons/Me.svg" alt="" className=""/>
                </a>
            </div>
        </div>
    )
}