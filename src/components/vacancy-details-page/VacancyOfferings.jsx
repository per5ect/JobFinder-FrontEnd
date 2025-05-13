export function VacancyOfferings({vacancyData}){
    return(
        <div className="w-full mt-15">
            <ul className="font-kosugi w-full flex flex-col items-center ">
                <div className="flex flex-col gap-6 max-w-[600px]">
                    {vacancyData.offerings.map(offerings => (
                        <li className="text-[24px] list-disc">{offerings}</li>
                    ))}
                </div>
            </ul>
        </div>
    )
}