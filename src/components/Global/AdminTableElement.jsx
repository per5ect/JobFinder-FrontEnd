import {CompanyTableBody} from "../admin-all-companies/CompanyTableBody.jsx";
import {useLocation} from "react-router";
import {UserTableBody} from "../admin-all-users/UserTableBody.jsx";

export function AdminTableElement({ columns, data }) {
    const location = useLocation().pathname;

    return (
        <div className="relative overflow-x-auto mt-13 w-full">
            <table className="w-full text-sm text-center">
                <thead className="text-xs text-black  bg-green">
                <tr>
                    {columns.map((header) => (
                        <th scope="col" key={header.key} className="px-6 py-3 border-r border-black/30">
                            {header.header}
                        </th>
                    ))}
                    <th scope="col" className="px-6 py-3 border-r border-black/30 bg-green text-black">
                        Enabled
                    </th>
                    <th scope="col" className="px-6 py-3 border-r border-black/30 bg-green text-black">
                        Actions
                    </th>
                </tr>
                </thead>
                {location === "/companies" ?
                    <CompanyTableBody data={data} /> :
                    <UserTableBody data={data} />
                }
            </table>
        </div>
    )
}