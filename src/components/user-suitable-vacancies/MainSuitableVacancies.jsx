import {Layout} from "../Layout.jsx";
import {getUserRole} from "../../utils/jwtDecode.js";
import {useEffect, useState} from "react";
import {VacancyFilterForm} from "../all-vacancies-page/VacancyFilterForm.jsx";
import {Loader} from "../Global/Loader.jsx";
import {VacancyElement} from "../Global/VacancyElement.jsx";
import {getAllMatchesVacancies, getUserCV, getUserCvDetails} from "../../services/userService.js";

export function MainSuitableVacancies() {
    const role = getUserRole();

    const [vacancies, setVacancies] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const[userCV, setUserCV] = useState("");
    const[userResumeTechnologies, setUserResumeTechnologies] = useState(null);
    console.log(userCV);

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
            const data = await getAllMatchesVacancies(filters, reset ? 0 : page, 10);

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

    const fetchUserCv = async () => {
        try{
            const userCvDetails = await getUserCV()
            setUserCV(userCvDetails)
            const userCvTechnologies = await getUserCvDetails();
            setUserResumeTechnologies(userCvTechnologies);
        }catch (error) {
            console.log(error);
        }
    };

    const handleSearch = () => {
        fetchVacancies(true); // reset
    };

    useEffect(() => {
        fetchVacancies(true);
        fetchUserCv();
    }, []);

    return (
        <main className="mt-12 mb-12">
            <Layout>
                {userCV === "" || userResumeTechnologies == null ? (
                    <div className="w-full flex justify-center">
                        <div className="max-w-[800px] flex flex-col items-center justify-center mt-20 rounded-xl border border-black py-15 px-15 gap-10">
                            <h1 className="font-konkhmer text-black text-[30px] text-center">To get the suitable vacancies,upload and analyze your resume first</h1>
                            <a href="/analyze" className="font-kosugi bg-green text-black text-[32px] px-5 py-3 rounded-xl">Analyze Resume</a>
                        </div>
                    </div>
                ) : (
                    <>
                        <section className="flex flex-col items-start gap-12 border-b pb-10">

                            <div className="flex flex-row w-full justify-between items-start">
                                <div className="flex flex-col items-start gap-5">
                                    <h1 className="text-5xl bg-black text-white font-konkhmer py-2 px-5">Suitable vacancies</h1>
                                    <p className="font-kosugi text-[20px]">After analyzing your resume, we can suggest jobs that fit your <br/>  experience and technology set </p>
                                </div>

                                <a href="/cv-details" className="text-black font-konkhmer bg-green text-[24px] px-10 py-2 rounded-xl">Resume Details</a>

                            </div>
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
                                    <p className="text-center text-3xl text-black pt-10 font-konkhmer pb-20">
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
                    </>
                )}

            </Layout>
        </main>
    );
}