import { useState } from "react";
import { Layout } from "../Layout.jsx";
import { SearchTechnologyCompany } from "./SearchTechnologyCompany.jsx";
import { JobOfferingsInput } from "./JobOfferingsInput.jsx";
import { JobRequirementsInput } from "./JobRequirementsInput.jsx";
import { createVacancy } from "../../services/companyService.js";

export function MainCreateJob() {
    const [formData, setFormData] = useState({
        title: "",
        shortDescription: "",
        salary: "",
        location: "",
        knowledgeLevel: "",
        workMode: "",
        typeOfEmployment: "",
        workExperience: "",
        technologyIds: [],
        offerings: [],
        requirements: []
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const vacancyData = {
                ...formData,
                workExperience: parseInt(formData.workExperience),
            };
            await createVacancy(vacancyData);
            alert("Vacancy created successfully!");
        } catch (error) {
            console.error("Error creating vacancy:", error);
            alert("Failed to create vacancy.");
        }
    };

    return (
        <main>
            <Layout>
                <div className="mt-13">
                    <h1 className="text-black text-[48px] font-konkhmer">Create New Job</h1>
                    <div className="flex flex-col container mx-auto max-w-[553px] mb-15 mt-13">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                            {/* Title */}
                            <div className="flex flex-col gap-2 border-b border-black/30 pb-9">
                                <label htmlFor="jobName" className="font-konkhmer text-[20px] text-black">
                                    Job name
                                </label>
                                <input type="text" id="jobName" name="jobName"
                                       value={formData.title}
                                       onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                       required
                                       placeholder="Enter job name"
                                       className="py-4 p-6.5 border border-[#222A24] rounded-[15px] input-kosugi"/>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2 border-b border-black/30 pb-9">
                                <label htmlFor="jobdescription" className="font-konkhmer text-[20px] text-black">
                                    Job description (max 300 characters)
                                </label>
                                <p className="text-left text-sm text-gray-500">
                                    {formData.shortDescription.length}/300 characters
                                </p>
                                <textarea id="jobdescription" name="jobdescription"
                                          value={formData.shortDescription}
                                          onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                                          required
                                          maxLength={300}
                                          placeholder="Enter job description"
                                          className="h-[345px] py-4 p-6.5 border border-[#222A24] rounded-[15px] input-kosugi"/>
                            </div>

                            {/* Salary */}
                            <div className="flex flex-col gap-2 border-b border-black/30 pb-9">
                                <label htmlFor="jobSalary" className="font-konkhmer text-[20px] text-black">
                                    Salary (in $)
                                </label>
                                <input type="text" id="jobSalary" name="jobSalary"
                                       value={formData.salary}
                                       onChange={(e) => setFormData(prev => ({ ...prev, salary: e.target.value }))}
                                       required
                                       placeholder="Enter job salary in $"
                                       className="py-4 p-6.5 border border-[#222A24] rounded-[15px] input-kosugi"/>
                            </div>

                            {/* Location */}
                            <div className="flex flex-col gap-2 border-b border-black/30 pb-9">
                                <label htmlFor="jobCity" className="font-konkhmer text-[20px] text-black">
                                    Job Location (City)
                                </label>
                                <input type="text" id="jobCity" name="jobCity"
                                       value={formData.location}
                                       onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                                       required
                                       placeholder="Enter job location"
                                       className="py-4 p-6.5 border border-[#222A24] rounded-[15px] input-kosugi"/>
                            </div>

                            {/* Dropdowns */}
                            <div className="flex flex-row gap-6 ">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="knowlvl" className="font-konkhmer text-black text-[18px]">
                                        Choose knowledge level
                                    </label>
                                    <select id="knowlvl" name="knowlvl" required
                                            value={formData.knowledgeLevel}
                                            onChange={(e) => setFormData(prev => ({ ...prev, knowledgeLevel: e.target.value }))}>
                                        <option value="" disabled hidden>Choose</option>
                                        <option value="Trainee">Trainee</option>
                                        <option value="Junior">Junior</option>
                                        <option value="Middle">Middle</option>
                                        <option value="Senior">Senior</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="workMode" className="font-konkhmer text-black text-[18px]">
                                        Choose work mode
                                    </label>
                                    <select id="workMode" name="workMode" required
                                            value={formData.workMode}
                                            onChange={(e) => setFormData(prev => ({ ...prev, workMode: e.target.value }))}>
                                        <option value="" disabled hidden>Choose</option>
                                        <option value="Homeoffice">HomeOffice</option>
                                        <option value="Remote">Remote</option>
                                        <option value="OnSite">OnSite</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-row gap-6 border-b border-black/30 pb-9">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="tofEmploy" className="font-konkhmer text-black text-[18px]">Choose type of employment</label>
                                    <select id="tofEmploy" name="tofEmploy" required
                                            value={formData.typeOfEmployment}
                                            onChange={(e) => setFormData(prev => ({ ...prev, typeOfEmployment: e.target.value }))}>
                                        <option value="" disabled hidden>Choose</option>
                                        <option value="Full time">Full time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="workExp" className="font-konkhmer text-black text-[18px]">
                                        Choose work experience
                                    </label>
                                    <select id="workExp" name="workExp" required
                                            value={formData.workExperience}
                                            onChange={(e) => setFormData(prev => ({ ...prev, workExperience: e.target.value }))}>
                                        <option value="" disabled hidden>Choose</option>
                                        <option value="0">No experience</option>
                                        <option value="1">1 Year</option>
                                        <option value="2">2 Years</option>
                                        <option value="3">3 Years</option>
                                        <option value="4">4 Years</option>
                                        <option value="5">5+ Years</option>
                                    </select>
                                </div>
                            </div>

                            <SearchTechnologyCompany onChange={(ids) => setFormData(prev => ({ ...prev, technologyIds: ids }))} />
                            <JobOfferingsInput onChange={(list) => setFormData(prev => ({ ...prev, offerings: list }))} />
                            <JobRequirementsInput onChange={(list) => setFormData(prev => ({ ...prev, requirements: list }))} />

                            <button type="submit" className="mt-10 w-full bg-blue text-white button-kosugi rounded-[10px] py-3.5 cursor-pointer transition-colors ease-in-out hover:bg-blue/90">
                                Create job
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </main>
    );
}
