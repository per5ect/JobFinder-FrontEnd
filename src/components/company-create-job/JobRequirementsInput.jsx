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
            <label className="font-bold text-[18px]">Job Requirements</label>

            {requirementsInputs.map((value, index) => (
                <div key={index} className="flex gap-3 items-center">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(e.target.value, index)}
                        placeholder="Enter job offering"
                        className="w-full border rounded-md px-4 py-2"
                    />
                    <button
                        type="button"
                        onClick={() => handleRemove(index)}
                        className="text-red-600 hover:underline"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={handleAdd}
                className="bg-green text-white px-4 py-2 rounded-md mt-2 w-fit"
            >
                Add Requirement
            </button>
        </div>
    );
}
