import {Layout} from "../Global/Layout.jsx";
import {TableUesrApplicationsElement} from "./TableUesrApplicationsElement.jsx";

export function MainUserApplications(){
    return (
        <main>
            <Layout>
                <div className="flex flex-col items-center w-full mt-13 mb-13">
                    <h1 className=" bg-black text-white font-konkhmer text-[48px] px-7">
                        My Applications
                    </h1>
                    <TableUesrApplicationsElement/>
                </div>
            </Layout>
        </main>
    )
}