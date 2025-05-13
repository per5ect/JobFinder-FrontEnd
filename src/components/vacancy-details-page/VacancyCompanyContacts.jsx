export function VacancyCompanyContacts({vacancyData}) {
    return (
        <div className="px-6.5 py-8 border border-black w-full max-w-[600px] rounded-[20px]">
            <div className="flex flex-col gap-6">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-konkhmer text-[32px]">Company:</p>
                    <p className="font-konkhmer text-[30px]">{vacancyData.companyName}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p className="font-konkhmer text-[32px]">Phone:</p>
                    <p className="font-kosugi text-[20px]">{vacancyData.companyPhone}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p className="font-konkhmer text-[32px]">Email:</p>
                    <p className="font-kosugi text-[20px]">{vacancyData.companyEmail}</p>
                </div>
            </div>
        </div>
    )
}