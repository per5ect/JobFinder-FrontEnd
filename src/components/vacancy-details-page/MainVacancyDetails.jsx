import {Layout} from "../Layout.jsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getVacancy} from "../../services/publicService.js";
import {Loader} from "../Global/Loader.jsx";

export function MainVacancyDetails(){
    const { id } = useParams();
    const [vacancyData, setVacancyData] = useState();
    const [isLoading, setIsLoading] = useState(true);

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
    return(
        <main>
            <Layout>
                {isLoading ? <Loader/> :
                    <div>Vacancy ID: {id}</div>
                }
            </Layout>
        </main>
    )
}