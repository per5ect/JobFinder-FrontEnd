import {Layout} from "../Layout.jsx";
import {useEffect, useState} from "react";
import {UploadElement} from "./UploadElement.jsx";
import {getUserCvDetails} from "../../services/userService.js";
import {AnalyzeResultElement} from "./AnalyzeResultElement.jsx";

export  function AnalyzeMain() {
    const[analyseStep,setAnalyseStep] = useState("upload");
    const[analyseResult,setAnalyseResult] = useState("upload");

    useEffect(() => {
        const fetchAnalyzeResult = async () => {
            try{
                const data = await getUserCvDetails();
                console.log(typeof data);
                if(data === {}){
                    setAnalyseStep("analyse-result")
                    setAnalyseResult(data)
                } else {
                    setAnalyseResult("upload");
                }
                console.log(data)
            }catch(error){
                console.log(error);
            }
        }
        fetchAnalyzeResult();
    },[])
    console.log(analyseStep);
    const analyseElement = () => {
        switch (analyseStep) {
            case "upload":
                return <UploadElement setAnalyseStep={setAnalyseStep} analyseResult={analyseResult}/>;
            case "analyse-result":
                return <AnalyzeResultElement setAnalyseStep={setAnalyseStep}/>

        }
    }

    return (
        <main>
            <Layout>
                <section className="mt-12 mb-12 flex justify-center w-full">
                    {analyseElement()}
                </section>
            </Layout>
        </main>
    )
}
