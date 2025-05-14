import {Layout} from "../Global/Layout.jsx";
import {useEffect, useState} from "react";
import {getUserCvDetails, getUserFavoriteVacancies} from "../../services/userService.js";
import {VacancyElement} from "../Global/VacancyElement.jsx";
import {Loader} from "../Global/Loader.jsx";
import {getUserRole} from "../../utils/jwtDecode.js";

export function MainUserFavoriteVacancies() {
    const role = getUserRole();
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favorites = await getUserFavoriteVacancies();
                setFavorites(favorites);
                console.log(favorites);
            } catch (error){
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchFavorites();
    },[])

    if (isLoading) {return <Loader />}
    return (
        <main>
            <Layout>
                <div className="mt-13 flex flex-col items-start w-full">
                    <h1 className=" bg-black text-white font-konkhmer text-[48px] px-7">
                        My favorite vacancies
                    </h1>
                    <div className="w-full mt-13 mb-13">
                        {favorites.length === 0 ?
                            <div className="flex flex-col items-start gap-4">
                                <h1 className="text-center font-kosugi text-black text-[30px]">You don't have a favorite vacancy yet:(((</h1>
                                <a href="/all-vacancies" className="font-konkhmer bg-green text-black px-5 py-2 rounded-xl transition-colors ease-in-out hover:bg-green/90">Job Search</a>
                            </div>
                             :
                            <div className="flex flex-col gap-15">
                                {favorites.map((vacancies, index) => (
                                    <VacancyElement vacancyData={vacancies} key={index} userRole={role} />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </Layout>
        </main>
    )
}