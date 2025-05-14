export function VacancyDetailsPanel({vacancyData, handleApplyToVacancy,role}){
    return (
        <div className="px-6 py-8 w-full max-w-[505px] border border-black rounded-2xl">
            <div className="flex flex-col">
                <div className="border-b border-black/30">
                    <div className="flex flex-col gap-1 pb-5">
                        <div className="flex flex-row  justify-between items-center">
                            <p className="font-kosugi text-black text-[32px]">Salary:</p>
                            <p className="font-konkhmer text-black text-[32px]">
                                {vacancyData.salary}$/month
                            </p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-kosugi text-black text-[32px]">Work experience:</p>
                            <p className="font-konkhmer text-black text-[32px]">{vacancyData.workExperience}+ Years</p>
                        </div>
                    </div>
                </div>
                <div className="border-b border-black/30 py-5">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-kosugi text-black text-[32px]">Location:</p>
                            <span className="flex flex-row items-center px-5 py-2 bg-black text-white rounded-2xl font-konkhmer gap-2">
                                <img src="/icons/Compass.svg" alt=""/>
                                {vacancyData.location}
                            </span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-kosugi text-black text-[32px]">Level:</p>
                            <span className="bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2 cursor-pointer">
                                {vacancyData.knowledgeLevel}
                            </span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-kosugi text-black text-[29px]">Type of employment:</p>
                            <span className="bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2 cursor-pointer">
                                {vacancyData.typeOfEmployment}
                            </span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-kosugi text-black text-[32px]">Work mode:</p>
                            <span className="bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2 cursor-pointer">
                                {vacancyData.workMode}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row  gap-7 pt-5">
                    <button className="w-full bg-blue py-3 rounded-2xl button-konkhmer text-white cursor-pointer">
                        Share
                    </button>
                    {role === "ROLE_USER" ? (
                        <button className="w-full bg-green py-3 rounded-2xl button-konkhmer cursor-pointer" onClick={() => handleApplyToVacancy(vacancyData.id)}>
                            Apply for this job
                        </button>
                    ) :  role === null ?
                        (<a href="/user-login" className="w-full py-3 bg-green font-konkhmer rounded-2xl text-center">Sign In to apply</a>)
                        : null}
                </div>
            </div>
        </div>
    )
}