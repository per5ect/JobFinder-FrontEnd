import { useState } from "react";
import { updateUserPersonalInformation } from "../../services/userService";

export function UserPersonalInformationForm({ userPersonalData }) {
    const [formData, setFormData] = useState({
        name: userPersonalData.firstName || "",
        surname: userPersonalData.lastName || ""
    });
    const [status, setStatus] = useState(null); // success | error | null
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            await updateUserPersonalInformation({
                name: formData.name,
                surname: formData.surname
            });
            setStatus("success");
        } catch (error) {
            console.error("Update error", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pt-10 pb-16 border-b-1 border-black/10 flex flex-col gap-3">
            <h2 className="font-konkhmer text-[36px]">Personal information</h2>

            <form onSubmit={handleSubmit} className="flex flex-row items-end justify-between">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-konkhmer text-[20px] text-black">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userPersonalData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="py-4 p-6.5 border border-[#222A24] rounded-xl input-kosugi w-[359px]
                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="surname" className="font-konkhmer text-[20px] text-black">
                        Surname
                    </label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={userPersonalData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your surname"
                        className="py-4 p-6.5 border border-[#222A24] rounded-xl input-kosugi w-[359px]
                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-[359px] bg-blue py-4 text-white button-konkhmer rounded-xl hover:bg-blue/90 transition"
                >
                    {loading ? "Saving..." : "Save"}
                </button>
            </form>

            {status === "success" && (
                <p className="text-green-600 mt-2">Your data has been updated successfully.</p>
            )}
            {status === "error" && (
                <p className="text-red-600 mt-2">An error occurred. Please try again.</p>
            )}
        </section>
    );
}
