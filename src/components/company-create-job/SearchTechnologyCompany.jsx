import { useEffect, useState } from "react";
import { getAllTechnologies } from "../../services/publicService.js";

export function SearchTechnologyCompany({ onChange }) {
    const [technologyList, setTechnologyList] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const data = await getAllTechnologies();
                console.log("data "  + data);
                setTechnologyList(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTechnologies();
    }, []);

    useEffect(() => {
        if (onChange) {
            const ids = selectedTechnologies.map(tech => tech.id);
            console.log("selected tech IDs:", ids); // ✅ для дебага
            onChange(ids); // передаём массив айдишников
        }
    }, [selectedTechnologies]);

    const filteredTechnologies = technologyList.filter(tech =>
        tech.technologyName &&
        tech.technologyName.toLowerCase().includes(search.toLowerCase()) &&
        !selectedTechnologies.some(selected => selected.id === tech.id)
    );

    const addTechnology = (tech) => {
        setSelectedTechnologies(prev => [...prev, tech]);
        console.log("selected techs" + selectedTechnologies)
        setSearch(""); // очищаем инпут после выбора
    };

    const removeTechnology = (id) => {
        setSelectedTechnologies(prev => prev.filter(tech => tech.id !== id));
    };

    return (
        <div className="space-y-8 border-b border-black/30 pb-9">
            <div className="flex flex-col gap-2.5">
                <label htmlFor="search-technology" className="font-konkhmer text-[20px] text-black">
                    Select Technology Stack
                </label>

                <input
                    type="text"
                    id="search-technology"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter technology name"
                    className="w-full py-4 px-6 border border-[#222A24] rounded-[15px] input-kosugi focus:border-blue transition duration-300"
                />
            </div>

            {/* Список найденных технологий */}
            {search && filteredTechnologies.length > 0 ? (
                    <div className="flex flex-wrap gap-2.5">
                        {filteredTechnologies.map(tech => (
                            <span
                                key={tech.id}
                                className="cursor-pointer bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2"
                                onClick={() => addTechnology(tech)}>
                {tech.technologyName}
            </span>
                        ))}
                    </div>
                ) :
                <span className="bg-black text-white font-konkhmer rounded-[20px] px-2 py-2">
                    Choose min 1 technology
                </span>
            }
            <div className="mt-10 pt-2">
                <p className="font-konkhmer text-[20px] text-black">Selected technologies:</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {selectedTechnologies.map(tech => (
                        <div key={tech.id} className="cursor-pointer bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2 flex items-center gap-2">
                            <span>{tech.technologyName}</span>
                            <button
                                onClick={() => removeTechnology(tech.id)}
                                className="text-white">
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
