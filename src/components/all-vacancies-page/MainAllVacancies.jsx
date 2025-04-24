import {Layout} from "../Layout.jsx";
import {VacancyFilterForm} from "./VacancyFilterForm.jsx";
import {useEffect, useState} from "react";
import {getAllVacancies} from "../../services/publicService.js";
import {Loader} from "../Global/Loader.jsx";
import {getUserRole} from "../../utils/jwtDecode.js";
import {deleteVacancy} from "../../services/adminService.js";

export function MainAllVacancies(){
    const role = getUserRole();
    const handleDeleteVacancy = async (vacancyId) => {
        try{
            await deleteVacancy(vacancyId);
        } catch (error) {
            console.log(error);
        } finally {
            alert("Vacancy deleted successfully");
            window.location.reload();
        }
    }

    const [vacancies, setVacancies] = useState();
    const [visibleCount, setVisibleCount] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        jobName: '',
        location: '',
        experience: '',
        employmentType: '',
        workMode: '',
        level: ''
    });
    const [filteredVacancies, setFilteredVacancies] = useState([]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = () => {
        if (!vacancies) return;

        const filtered = vacancies.filter((v) => {
            const titleMatch = v.title.toLowerCase().includes(filters.jobName.toLowerCase());
            const locationMatch = v.location.toLowerCase().includes(filters.location.toLowerCase());

            const experienceMatch = filters.experience === '' || v.workExperience === parseInt(filters.experience);
            const employmentTypeMatch = filters.employmentType === '' || v.typeOfEmployment === filters.employmentType;
            const workModeMatch = filters.workMode === '' || v.workMode === filters.workMode;
            const levelMatch = filters.level === '' || v.knowledgeLevel === filters.level;

            return (
                titleMatch &&
                locationMatch &&
                experienceMatch &&
                employmentTypeMatch &&
                workModeMatch &&
                levelMatch
            );
        });


        setFilteredVacancies(filtered);
    };

    useEffect(() => {
        const fetchVacancies = async () => {
            setIsLoading(true)
            try{
                const vacanciesData = await getAllVacancies();
                console.log("All vacancies:", vacanciesData);
                setVacancies(vacanciesData);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }
        fetchVacancies();
    }, [])
    return (
        <main className="mt-10 mb-10">
            <Layout>
                <div className="">
                    <section className="flex flex-col items-start border-b pb-8">
                        <h1 className="text-black font-konkhmer text-5xl mb-2">Job offers</h1>
                        <VacancyFilterForm
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            onSearch={handleSearch}
                        />
                    </section>
                    {isLoading ? <Loader/> :
                        <div className="flex flex-col justify-center">
                            {(filteredVacancies.length ? filteredVacancies : vacancies).length === 0 ? (
                                <p className="text-center text-3xl text-black pt-10 font-konkhmer">
                                    No vacancies found 😔
                                </p>
                            ) : (
                                <div className="flex flex-col mt-14 gap-15">
                                    {(filteredVacancies.length ? filteredVacancies : vacancies)
                                        .slice(0, visibleCount)
                                        .map((vacancy, index) => (
                                            <div key={index} className="border p-6 rounded-xl shadow-md bg-white">
                                                <a href={`all-vacancies/${vacancy.id}`} className="text-xl font-bold">{vacancy.title}</a>
                                                <p className="text-gray-700">{vacancy.shortDescription}</p>
                                                <p className="text-sm text-gray-500">Location: {vacancy.location}</p>
                                                <p className="text-sm text-gray-500">Salary: ${vacancy.salary}</p>
                                                <p className="text-sm text-gray-500">Company: {vacancy.companyName}</p>
                                                {role === "ROLE_ADMIN" && (
                                                    <button
                                                        className="bg-red-500 mt-3 px-4 py-3 rounded-2xl text-white"
                                                        onClick={() => handleDeleteVacancy(vacancy.id)}
                                                    >
                                                        Delete vacancy
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                </div>
                            )}


                            {vacancies.length < 10 ? null :
                                <button onClick={() => setVisibleCount(prev => prev + 10)}>
                                    Get more
                                </button>
                            }
                        </div>
                    }
                </div>
            </Layout>
        </main>
    )
}