import {Layout} from "../Global/Layout.jsx";
import { useEffect, useState} from "react";
import { getAllUsers} from "../../services/adminService.js";
import {Loader} from "../Global/Loader.jsx";
import {AdminTableElement} from "../Global/AdminTableElement.jsx";

export function MainAllUsers(){
    const[users, setUsers] = useState({});
    const[loading, setLoading] = useState(true);

    const columns = [
        { key: "Name", header: "Name" },
        { key: "Surname", header: "Surname" },
        { key: "Email", header: "Email" },
    ]

    useEffect(() => {
        const fetchData = async () => {
            try{
                const users = await getAllUsers();
                setUsers(users);
                console.log("comp: "+ users);
            }catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[])

    if (loading) {return <><div><Loader /></div></>}
    return(
        <main>
            <Layout>
                <div className="mt-13 mb-13 flex flex-col items-start w-full">
                    <h1 className=" bg-black text-white font-konkhmer text-[48px] px-7">
                        All Users
                    </h1>
                    <AdminTableElement columns={columns} data={users}/>
                </div>
            </Layout>
        </main>
    )
}
