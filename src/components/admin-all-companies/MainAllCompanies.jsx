import {Layout} from "../Layout.jsx";
import {AdminTableElement} from "../Global/AdminTableElement.jsx";
import {useEffect, useState} from "react";
import {getAllCompanies} from "../../services/adminService.js";
import {Loader} from "../Global/Loader.jsx";

export function MainAllCompanies() {
    const[companies, setCompanies] = useState({});
    const[loading, setLoading] = useState(true);

    const columns = [
        { key: "Company Name", header: "Company Name" },
        { key: "Company Phone", header: "Company Phone" },
        { key: "Company Email", header: "Company Email" },
    ]

    useEffect(() => {
        const fetchData = async () => {
            try{
                const companies = await getAllCompanies();
                setCompanies(companies);
                console.log("comp: "+ companies);
            }catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[])

    if (loading) {return <><div><Loader /></div></>}
    return (
        <main>
            <Layout>
                <div className="mt-13 mb-13 flex flex-col items-start w-full">
                    <h1 className=" bg-black text-white font-konkhmer text-[48px] px-7">
                        All Companies
                    </h1>
                    <AdminTableElement columns={columns} data={companies} />
                </div>
            </Layout>
        </main>
    )
}