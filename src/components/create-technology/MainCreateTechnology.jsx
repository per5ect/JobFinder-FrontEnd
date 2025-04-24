import {Layout} from "../Layout.jsx";
import {CreateForm} from "./CreateForm.jsx";
import {SearchTechnologyForm} from "./SearchTechnologyForm.jsx";

export function MainCreateTechnology(){
    return(
        <main>
            <Layout>
                <div className="mt-10 flex flex-col gap-15">
                    <h1 className="text-black text-[48px] font-konkhmer">Technologies</h1>
                    <div className="flex flex-col container mx-auto max-w-[553px] mb-15">
                        <CreateForm/>
                        <SearchTechnologyForm />
                    </div>
                </div>
            </Layout>
        </main>
    )
}