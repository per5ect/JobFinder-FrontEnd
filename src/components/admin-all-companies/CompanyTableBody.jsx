export function CompanyTableBody({data}) {
    return (
        <tbody className="border-l border-r border-b border-black/30">
        {data.map((company) => (
            <tr key={company.id} className="bg-white font-kosugi">
                <td scope="row" className="px-6 py-4 border-r border-b border-black/30 text-black">
                    {company.companyName}
                </td>
                <td className="px-6 py-4 border-r border-b border-black/30">
                    {company.companyPhone}
                </td>
                <td className="px-6 py-4 border-r border-b border-black/30">
                    {company.companyEmail}
                </td>
                <td className="px-6 py-4 border-r border-b border-black/30">
                    {company.enabled === true ?
                        (<span className="bg-green text-black rounded-xl px-8 py-3">{(company.enabled).toString().toUpperCase()}</span>) :
                        ((<span className="bg-red text-white rounded-xl px-8 py-3">{(company.enabled).toString().toUpperCase()}</span>))
                    }

                </td>
                <td className="px-6 py-4 border-r border-b border-black/30">
                    <form className="flex flex-row items-center justify-center gap-6">
                        <button className="bg-red text-white rounded-xl px-8 py-2 cursor-pointer">Delete</button>
                    </form>
                </td>
            </tr>
        ))}
        </tbody>
    )
}