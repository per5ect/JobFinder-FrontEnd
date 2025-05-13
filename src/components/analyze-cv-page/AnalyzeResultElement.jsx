import {useEffect, useState} from "react";
import {getUserCvDetails} from "../../services/userService.js";
import {Loader} from "../Global/Loader.jsx";

export function AnalyzeResultElement({setAnalyseStep}) {
    const[analyzeResult, setAnalyzeResult] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalyzeResult = async () => {
            try{
                const data = await getUserCvDetails();
                setAnalyzeResult(data)
                console.log(data)
            }catch(error){
                console.log(error);
            }finally {
                setLoading(false);
            }

        }
        fetchAnalyzeResult();
    },[])
    if(loading){return <Loader />}
    return (
        <div className="text-center w-full max-w-[750px]">
            <h1 className="font-kosugi text-black bg-green py-9 text-[30px] rounded-t-xl">Results of analysis</h1>
            <div className="border border-black/20 border-t-0 rounded-b-xl px-8 py-5">
                <div className="flex flex-col items-start gap-5 min-h-[400px]">
                    <h1 className="text-black font-konkhmer text-[32px]">Analyzing results:</h1>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-3 font-kosugi text-[20px]">
                            <p className="p-0">Years experience:</p>
                            <p className="font-konkhmer">{analyzeResult.experienceYears} years</p>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <p className="font-kosugi text-[20px] text-black">Technology stack:</p>
                            <div className="flex flex-wrap gap-2 font-konkhmer text-white text-[15px]">
                                {analyzeResult.techStack !== undefined ?  analyzeResult.techStack.map(technology => (
                                    <span className="bg-blue py-2 px-5 rounded-2xl">
                                    {technology}
                                </span>
                                )) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-3">
                    <button className="w-full bg-blue text-white button-konkhmer rounded-lg" onClick={() => setAnalyseStep("upload")}>Analyze another resume</button>
                    <a href="/suitable-vacancies" className="w-full bg-green font-konkhmer text-black rounded-lg py-4">Get suitable jobs</a>
                </div>
            </div>
        </div>
    )
}