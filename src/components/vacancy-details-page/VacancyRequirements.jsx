export function VacancyRequirements({vacancyData}) {
    return (
        <div className="w-full mt-15">
            <ul className="font-kosugi w-full flex flex-col items-center">
                <div className="flex flex-col gap-6 max-w-[600px]">
                    {vacancyData.requirements.map(requirement => (
                        <li className="text-[24px] list-disc">{requirement}</li>
                    ))}
                </div>
            </ul>
        </div>
    )
}