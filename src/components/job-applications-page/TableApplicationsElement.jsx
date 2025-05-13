import {useEffect, useState} from "react";
import {acceptApplicant, getVacancyApplications, rejectApplicant} from "../../services/companyService.js";
import {Loader} from "../Global/Loader.jsx";

export function TableApplicationsElement({vacancyId}) {
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedStatuses, setSelectedStatuses] = useState({})

    useEffect(() => {
        const fetchApplications = async () => {
            try{
                const applications = await getVacancyApplications(vacancyId);
                setApplications(applications);
                console.log(applications);
                console.log(vacancyId);
            } catch (error){
                console.error(error)
            }finally {
                setLoading(false)
            }
        }
        fetchApplications()
    },[])

    const handleSave = async (applicantId) => {
        const selected = selectedStatuses[applicantId];

        // Если статус не выбран или остался PENDING, не отправляем запрос
        if (!selected || selected === "PENDING") {
            alert("Please select ACCEPT or REJECT to proceed.");
            return;
        }

        try {
            if (selected === "ACCEPTED") {
                await acceptApplicant(applicantId);
            } else if (selected === "REJECTED") {
                await rejectApplicant(applicantId);
            }

            alert("Application status updated successfully!");

            // Обновляем локально статус в списке заявок
            setApplications((prev) =>
                prev.map((app) =>
                    app.applicationId === applicantId
                        ? { ...app, applicationStatus: selected }
                        : app
                )
            );
        } catch (error) {
            console.error("Update error:", error);
            alert("Failed to update status.");
        }
    };


    if (loading) {return <Loader/>}
    if(applications.length === 0) {
        return (
            <div className="mt-15 flex flex-col items-center text-center gap-3">
                <h1 className="font-konkhmer px-6 py-2 bg-black text-white">No responses to the vacancy yet(</h1>
                <a href="/my-vacancies" className="bg-blue font-konkhmer text-white rounded-xl px-6 py-2">Back</a>
            </div>
        )
    }

    return (
        <div className="relative overflow-x-auto mt-13">
            <table className="w-full text-sm text-center">
                <thead className="text-xs text-black  bg-green">
                <tr>
                    <th scope="col" className="px-6 py-3 border-r border-black/30">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 border-r border-black/30">
                        Surname
                    </th>
                    <th scope="col" className="px-6 py-3 border-r border-black/30">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3 border-r border-black/30">
                        Resume
                    </th>
                    <th scope="col" className="px-6 py-3 border-r border-black/30 bg-blue text-white">
                        Status
                    </th>
                </tr>
                </thead>
                <tbody className="border-l border-r border-b border-black/30">
                {applications.map(applicant => (
                    <tr key={applicant.applicationId} className="bg-white font-kosugi">
                        <td scope="row" className="px-6 py-4 border-r border-black/30 text-black ">
                            {applicant.applicantFirstName}
                        </td>
                        <td className="px-6 py-4  border-r border-black/30">
                            {applicant.applicantLastName}
                        </td>
                        <td className="px-6 py-4 border-r border-black/30">
                            <p className="overflow-hidden">
                                {applicant.applicantEmail}
                            </p>
                        </td>
                        <td className="px-6 py-4 border-r border-black/30">
                            <a href={applicant.resumeLink}
                            className="bg-green text-black rounded-xl px-4.5 py-3">
                                Download
                            </a>
                        </td>
                        <td className="px-6 py-4 border-r border-black/30">
                            <form action="" className="flex flex-row items-center justify-center gap-6">
                                {applicant.applicationStatus === "PENDING" ?
                                    <select
                                        value={selectedStatuses[applicant.applicationId] || "ACCEPT"}
                                        onChange={(e) =>
                                            setSelectedStatuses({
                                                ...selectedStatuses,
                                                [applicant.applicationId]: e.target.value,
                                            })
                                        }
                                    >

                                        <option value="PENDING">PENDING</option>
                                        <option value="ACCEPTED">ACCEPT</option>
                                        <option value="REJECTED">REJECT</option>
                                    </select> :
                                    <span className="bg-blue text-white rounded-xl px-6 py-2">
                                    {applicant.applicationStatus}
                                </span>
                                }
                                {applicant.applicationStatus !== "PENDING" ?
                                    null :
                                    <button
                                        type="button"
                                        className="bg-blue text-white rounded-xl px-6 py-2"
                                        onClick={() => handleSave(applicant.applicationId)}
                                    >
                                        SAVE
                                    </button>
                                }
                            </form>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}