export function VacancyFilterForm({ filters, onFilterChange, onSearch }) {
    return (
        <form
            className="flex flex-col w-full gap-6"
            onSubmit={(e) => {
                e.preventDefault();
                onSearch();
            }}
        >
            <div className="flex flex-row items-end justify-between">
                <div className="flex flex-col w-[552px] gap-3">
                    <label htmlFor="jobName" className="font-konkhmer text-[20px] text-black">
                        What job are you looking for?
                    </label>
                    <input
                        type="text"
                        id="jobName"
                        name="jobName"
                        value={filters.jobName}
                        onChange={onFilterChange}
                        className="py-4 p-6.5 border border-[#222A24] input-kosugi rounded-2xl focus:border-[#2EA4F1]"
                    />
                </div>

                <div className="flex flex-col w-[360px] gap-3">
                    <label htmlFor="location" className="font-konkhmer text-[20px] text-black">
                        Where?
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={filters.location}
                        onChange={onFilterChange}
                        className="py-4 p-6.5 border border-[#222A24] input-kosugi focus:border-[#2EA4F1] rounded-2xl"
                    />
                </div>

                <button
                    className="button-kosugi text-black bg-green rounded-xl px-12 py-4 text-[24px] cursor-pointer"
                    type="submit"
                >
                    Search
                </button>
            </div>

            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2 w-[264px]">
                    <label htmlFor="experience" className="font-konkhmer text-[20px] text-black">
                        Work experience
                    </label>
                    <select
                        id="experience"
                        name="experience"
                        value={filters.experience}
                        onChange={onFilterChange}
                    >
                        <option value="" >Choose</option>
                        <option value="0">No experience</option>
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                        <option value="5">5+ Years</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 w-[264px]">
                    <label htmlFor="employmentType" className="font-konkhmer text-[20px] text-black">
                        Type of employment
                    </label>
                    <select
                        id="employmentType"
                        name="employmentType"
                        value={filters.employmentType}
                        onChange={onFilterChange}
                    >
                        <option value="" >Choose</option>
                        <option value="Full time">Full time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 w-[264px]">
                    <label htmlFor="workMode" className="font-konkhmer text-[20px] text-black">
                        Work mode
                    </label>
                    <select
                        id="workMode"
                        name="workMode"
                        value={filters.workMode}
                        onChange={onFilterChange}
                    >
                        <option value="" >Choose</option>
                        <option value="Homeoffice">HomeOffice</option>
                        <option value="Remote">Remote</option>
                        <option value="OnSite">OnSite</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2 w-[264px]">
                    <label htmlFor="level" className="font-konkhmer text-[20px] text-black">
                        Level
                    </label>
                    <select
                        id="level"
                        name="level"
                        value={filters.level}
                        onChange={onFilterChange}
                    >
                        <option value="" >Choose</option>
                        <option value="Trainee">Trainee</option>
                        <option value="Junior">Junior</option>
                        <option value="Middle">Middle</option>
                        <option value="Senior">Senior</option>
                    </select>
                </div>
            </div>
        </form>
    );
}
