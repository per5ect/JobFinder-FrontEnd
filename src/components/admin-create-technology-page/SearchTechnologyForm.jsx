import { useEffect, useState} from "react";
import {getAllTechnologies} from "../../services/publicService.js";
import {deleteTechnology} from "../../services/adminService.js";


export function SearchTechnologyForm(){
    const [technologyList, setTechnologyList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchTechnologies = async () => {
            try{
                const data = await getAllTechnologies();
                console.log(data);
                setTechnologyList(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTechnologies();
    }, [])

    const handleDeleteTechnology = async (technologyId) => {
        try {
            await deleteTechnology(technologyId);
            // После удаления — фильтруем удалённый элемент из списка

        } catch (error) {
            console.error(error);
        } finally {
            setTechnologyList(prevList => prevList.filter(t => t.id !== technologyId));
        }
    }

    const filteredTechnologies = technologyList.filter(tech =>
        tech.technologyName && tech.technologyName.toLowerCase().includes(search.toLowerCase())
    );

    console.log(technologyList)
    return(
        <div className="pt-12.5 border-t-1 border-[#222A24]/10">
            <form action="" className="flex flex-col gap-4">
                <label htmlFor="search-technology" className="font-konkhmer text-[20px] text-black">
                    Already Created Technologies
                </label>
                <div className="flex flex-row gap-5">
                    <input type="text" id="search-technology" name="search-technology"
                        value={search}
                           onChange={(e) => setSearch(e.target.value)}
                           required={true}
                           placeholder="Enter technology name"
                           className="w-full  py-4 p-6.5 border border-[#222A24] rounded-[15px] input-kosugi
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
                    />
                    <button className="bg-green flex items-center justify-center py-[13px] px-[21px] rounded-[10px]">
                        <img src="/icons/Search.svg" alt=""/>
                    </button>
                </div>
            </form>

            <div className="mt-8 flex items-center justify-center">
                {filteredTechnologies.length > 0 ? (
                    <div className="flex flex-wrap gap-2.5">
                        {filteredTechnologies.map(technology => (
                            <span key={technology.id} className="bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2 cursor-pointer"
                                onClick={() =>
                                    handleDeleteTechnology(technology.id)}>
                            {technology.technologyName}
                            </span>
                        ))}
                    </div>
                ) : (<p className="text-white bg-black  font-konkhmer px-5 py-3 text-center rounded-2xl">NO TECHNOLOGIES FOUND(</p>)}
            </div>
        </div>
    )
}