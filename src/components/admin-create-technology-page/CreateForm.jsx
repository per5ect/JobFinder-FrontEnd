import {useState} from "react";
import {createTechnology} from "../../services/adminService.js";

export function CreateForm(){
    const [technologyName, setTechnologyName] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setTechnologyName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await createTechnology({technologyName: technologyName});
            window.location.reload();
            console.log(technologyName);
        } catch (error) {
            setError("Something went wrong");
            console.log(error);
        }
    }

    return(
        <div className="mb-12.5">
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="add-technology" className="font-konkhmer text-[20px] text-black">
                    Add new Technology
                </label>
                <input type="text" id="add-technology" name="add-technology"
                    value={technologyName}
                    onChange={handleChange}
                       required={true}
                       placeholder="Enter technology name"
                       className="py-4 p-6.5 border border-[#222A24] rounded-[15px] input-kosugi
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
                />

                {error && <p className="text-red-500">{error}</p>}

                <button type="submit" className="w-full bg-green rounded-[10px] py-3.5 mt-5">Add</button>
            </form>
        </div>
    )
}