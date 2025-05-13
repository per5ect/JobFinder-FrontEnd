export function VacancyTechnologyListElement({vacancyData}){
    return(
        <div className="flex flex-nowrap items-center gap-4">
            <h3 className="font-konkhmer text-[40px]">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2">
                {vacancyData.technologyNames.map(technology => (
                    <span key={technology.id} className="bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2 cursor-pointer"
                    >
                            {technology}
                            </span>
                ))}
            </div>
        </div>
    )
}