import {Layout} from "../Layout.jsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getVacancy} from "../../services/publicService.js";
import {Loader} from "../Global/Loader.jsx";
import {VacancyDetailsPanel} from "./VacancyDetailsPanel.jsx";
import {VacancyTechnologyListElement} from "./VacancyTechnologyListElement.jsx";
import {VacancyRequirements} from "./VacancyRequirements.jsx";
import {VacancyOfferings} from "./VacancyOfferings.jsx";
import {VacancyCompanyContacts} from "./VacancyCompanyContacts.jsx";
import {applyToVacancy} from "../../services/userService.js";
import {getUserRole} from "../../utils/jwtDecode.js";

export function MainVacancyDetails(){
    const { id } = useParams();
    const [vacancyData, setVacancyData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const role = getUserRole();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try{
                const data = await getVacancy(id)
                console.log(data);
                setVacancyData(data)
            } catch(err){
                console.log("error", err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [id])

    const handleApplyToVacancy = async (vacancyId) => {
        try {
            await applyToVacancy(vacancyId);
            alert("You successfully applied to the vacancy.");
        } catch (error) {
            console.error(error);
            alert("Failed to apply to the vacancy. Please try again.");
        }
    }
    if(isLoading){return <Loader/>}
    return(
        <main className="mt-22 mb-22">
            <Layout>
                    <section className="flex flex-row items-center w-full justify-between">
                        <div className="flex flex-col items-start max-w-[554px] gap-5">
                            <h3 className="font-konkhmer text-black text-[35px]">
                                {vacancyData.title}
                            </h3>
                            <div className="flex flex-row items-center gap-4">
                                <p className="font-konkhmer text-black text-[32px]">Company:</p>
                                <span className="flex flex-row items-center font-konkhmer rounded-2xl px-4 py-2 gap-2 border border-black">
                                    <img src="/Company.svg" alt=""/>
                                    {vacancyData.companyName}
                                </span>
                            </div>
                            <p className="font-kosugi text-black text-[25px]">
                                {vacancyData.shortDescription}
                            </p>
                        </div>
                        <VacancyDetailsPanel vacancyData={vacancyData} handleApplyToVacancy={handleApplyToVacancy} role={role}/>
                    </section>
                        <div className="mt-18 flex flex-row justify-center w-full">
                            <h1 className=" bg-black text-white font-konkhmer text-[48px] px-7">
                                Job description
                            </h1>
                        </div>
                    <section className="mt-18">
                        <VacancyTechnologyListElement vacancyData={vacancyData}/>
                    </section>
                    <section className="mt-18 w-full">
                        <h3 className="font-konkhmer text-start text-[40px]">What do we expect from you?</h3>
                        <VacancyRequirements vacancyData={vacancyData}/>
                    </section>
                    <section className="mt-18 w-full">
                        <h3 className="font-konkhmer text-start text-[40px]">What's in store for you? </h3>
                        <VacancyOfferings vacancyData={vacancyData}/>
                    </section>
                    <section className="mt-18 w-full flex flex-col items-center gap-10">
                        <h1 className="bg-black text-white font-konkhmer text-[48px] px-7">Contacts</h1>
                        <VacancyCompanyContacts vacancyData={vacancyData}/>
                        {role === "ROLE_USER" ? (
                            <button className="w-1/2 mt-12 py-8 bg-green button-kosugi rounded-2xl cursor-pointer button-font-size transition-colors ease-in-out hover:bg-green/90"
                                    onClick={() => handleApplyToVacancy(id)}>
                                Apply for this job
                            </button>
                        ) :  role === null ?
                            (<a href="/user-login" className="w-1/2 mt-12 py-8 bg-green button-kosugi rounded-2xl text-center text-[32px]">Sign In to apply</a>)
                            : null}
                    </section>
            </Layout>
        </main>
    )
}