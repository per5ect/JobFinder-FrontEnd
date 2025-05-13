import {Layout} from "../Layout.jsx";
import {useEffect, useState} from "react";
import {getCompanyVacancies} from "../../services/companyService.js";
import {Loader} from "../Global/Loader.jsx";
import {VacancyElement} from "../Global/VacancyElement.jsx";
import {getUserRole} from "../../utils/jwtDecode.js";

export function MainCompanyVacancies(){
    const userRole = getUserRole();

    const [companyVacancies, setCompanyVacancies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const vacancies = await getCompanyVacancies();
                setCompanyVacancies(vacancies);
                console.log(vacancies);
            } catch (error){
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    },[])

    if (loading) return <Loader/>;

    return(
        <main className="mt-13 mb-13">
            <Layout>
                <div className="flex flex-col items-start w-full">
                    <div className="w-full flex flex-row items-center justify-between">
                        <h1 className="bg-black text-white font-konkhmer text-[48px] px-7">
                            My vacancies
                        </h1>

                        <div className="flex flex-row items-center py-3 px-6.5 gap-1 bg-green rounded-2xl transition-colors ease-in-out hover:bg-green/80 ">
                            <a href="/my-account" className="text-black font-konkhmer">
                                Company Profile
                            </a>
                            <img src="/Company.svg" alt="" className=""/>
                        </div>
                    </div>

                    <div className="mt-15 flex flex-col gap-15 w-full">
                        {companyVacancies.map(vacancy => (
                            <VacancyElement vacancyData={vacancy}
                                            userRole={userRole}
                                            key={vacancy.id}
                            />
                        ))}
                    </div>
                </div>
            </Layout>
        </main>
    )
}