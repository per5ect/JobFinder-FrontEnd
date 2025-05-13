import { useState, useEffect } from "react";

export function JobOfferingsInput({ onChange }) {
    const [offerInputs, setOfferInputs] = useState([""]);

    // Отправляем массив значений в родитель при каждом изменении
    useEffect(() => {
        onChange(offerInputs);
        console.log(offerInputs)
    }, [offerInputs]);

    const handleChange = (value, index) => {
        const updated = [...offerInputs];
        updated[index] = value;
        setOfferInputs(updated);
    };

    const handleAdd = () => {
        setOfferInputs([...offerInputs, ""]);
    };

    const handleRemove = (index) => {
        const updated = offerInputs.filter((_, i) => i !== index);
        setOfferInputs(updated);
    };

    return (
        <div className="flex flex-col  w-full gap-4 ">
            <div className="flex flex-col gap-4">
                <label className="font-bold text-[20px]">Job Offerings:</label>

                {offerInputs.map((value, index) => (
                    <div key={index} className="flex gap-3 items-center">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(e.target.value, index)}
                            placeholder="Enter job offering"
                            className="py-4 p-6.5 border border-[#222A24] rounded-[15px] input-kosugi w-full"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="bg-red px-3 py-2 rounded-xl button-konkhmer text-white cursor-pointer"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={handleAdd}
                className="bg-green text-black button-konkhmer px-7 py-3 rounded-xl mt-2 w-fit mx-auto"
            >
                Add Offering
            </button>
        </div>
    );
}
