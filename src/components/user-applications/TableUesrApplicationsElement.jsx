import {useEffect, useState} from "react";
import {Loader} from "../Global/Loader.jsx";
import {getUserApplications} from "../../services/userService.js";

export function TableUesrApplicationsElement() {
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchApplications = async () => {
            try{
                const applications = await getUserApplications();
                setApplications(applications);
                console.log(applications);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchApplications();
    },[])

    if (loading) {return <Loader />}

    return (
        <div className="relative overflow-x-auto mt-13 w-full max-w-[742px]">
            <table className="w-full text-sm text-center">
                <thead className="text-xs text-black  bg-green">
                <tr>
                    <th scope="col" className="px-6 py-3 border-r border-black/30">
                        Vacancy name
                    </th>
                    <th scope="col" className="px-6 py-3 border-r border-black/30 bg-blue text-white">
                        Status
                    </th>
                </tr>
                </thead>
                <tbody className="border-l border-r border-b border-black/30">
                {applications.map(applicant => (
                    <tr key={applicant.vacancyId} className="bg-white font-konkhmer">
                        <td scope="row" className="px-6 py-4 border-r border-b border-black/30 text-black transition-colors ease-in-out hover:text-black/70 ">
                            <a href={"/all-vacancies/" + applicant.vacancyId}>
                                {applicant.vacancyTitle}
                            </a>
                        </td>
                        <td className="px-6 py-4  border-r border-b border-black/30">
                            <span className="bg-blue text-white rounded-xl px-3 py-1">
                                {applicant.applicationStatus}
                            </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}