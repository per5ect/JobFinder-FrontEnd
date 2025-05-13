import {Layout} from "../Layout.jsx";
import {VacancyFilterForm} from "./VacancyFilterForm.jsx";
import {useEffect, useState} from "react";
import {getAllVacancies} from "../../services/publicService.js";
import {Loader} from "../Global/Loader.jsx";
import {getUserRole} from "../../utils/jwtDecode.js";
import {VacancyElement} from "../Global/VacancyElement.jsx";

export function MainAllVacancies() {
    const role = getUserRole();

    const [vacancies, setVacancies] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const [filters, setFilters] = useState({
        title: '',
        location: '',
        workExperience: '',
        typeOfEmployment: '',
        workMode: '',
        knowledgeLevel: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const fetchVacancies = async (reset = false) => {
        setIsLoading(true);
        try {
            const data = await getAllVacancies(filters, reset ? 0 : page, 10);

            if (reset) {
                setVacancies(data);
                setPage(1);
            } else {
                setVacancies((prev) => [...prev, ...data]);
                setPage((prev) => prev + 1);
            }
            console.log(data);

            setHasMore(data.length === 10);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        fetchVacancies(true); // reset
    };

    useEffect(() => {
        fetchVacancies(true);
    }, []);

    return (
        <main className="mt-10 mb-10">
            <Layout>
                <section className="flex flex-col items-start border-b pb-8 gap-7">
                    <h1 className="text-5xl bg-black text-white font-konkhmer py-2 px-5">Job offers</h1>
                    <VacancyFilterForm
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        onSearch={handleSearch}
                    />
                </section>

                {isLoading && vacancies.length === 0 ? (
                    <Loader />
                ) : (
                    <div className="flex flex-col items-center w-full">
                        {vacancies.length === 0 ? (
                            <p className="text-center text-3xl text-black pt-10 font-konkhmer">
                                No vacancies found 😔
                            </p>
                        ) : (
                            <div className="flex flex-col w-full mt-14 gap-15">
                                {vacancies.map((vacancy, index) => (
                                    <VacancyElement key={index} vacancyData={vacancy} userRole={role} />
                                ))}
                            </div>
                        )}

                        {hasMore && (
                            <button onClick={() => fetchVacancies()} className="mt-8 px-6 py-2 bg-green text-black button-kosugi rounded-xl cursor-pointer">
                                Load more
                            </button>
                        )}
                    </div>
                )}
            </Layout>
        </main>
    );
}
