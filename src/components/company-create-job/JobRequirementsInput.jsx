import { useState, useEffect } from "react";

export function JobRequirementsInput({ onChange }) {
    const [requirementsInputs, setRequirementsInputs] = useState([""]);

    // Отправляем массив значений в родитель при каждом изменении
    useEffect(() => {
        onChange(requirementsInputs);
    }, [requirementsInputs]);

    const handleChange = (value, index) => {
        const updated = [...requirementsInputs];
        updated[index] = value;
        setRequirementsInputs(updated);
    };

    const handleAdd = () => {
        setRequirementsInputs([...requirementsInputs, ""]);
    };

    const handleRemove = (index) => {
        const updated = requirementsInputs.filter((_, i) => i !== index);
        setRequirementsInputs(updated);
    };

    return (
        <div className="flex flex-col gap-4">
            <label className="font-bold text-[20px]">Job Requirements</label>

            {requirementsInputs.map((value, index) => (
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

            <button
                type="button"
                onClick={handleAdd}
                className="bg-green text-black button-konkhmer px-7 py-3 rounded-xl mt-2 w-fit mx-auto"
            >
                Add Requirements
            </button>
        </div>
    );
}
