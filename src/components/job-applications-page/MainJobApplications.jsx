import {Layout} from "../Global/Layout.jsx";
import {TableApplicationsElement} from "./TableApplicationsElement.jsx";
import {useParams} from "react-router";

export function MainJobApplications() {
    const { vacancyName, vacancyId } = useParams();

    console.log("vacancyName:", vacancyName); // → Junior front-end developer
    console.log("vacancyId:", vacancyId);     // → 5

    return (
        <main>
            <Layout>
                <div className="flex flex-row items-center justify-between mt-13">
                    <p className="font-konkhmer text-black text-[36px]">{vacancyName}</p>
                    <h1 className="text-white font-konkhmer bg-black px-7.5 text-[48px]">
                        Applications
                    </h1>
                </div>
                <TableApplicationsElement vacancyId={vacancyId} />
            </Layout>
        </main>
    )
}