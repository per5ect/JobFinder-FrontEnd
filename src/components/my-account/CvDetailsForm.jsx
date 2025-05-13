import {Loader} from "../Global/Loader.jsx";

export function CvDetailsForm({isLoading, cvLink, cvDetails}) {
    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-full py-20">
                <Loader/>
            </div>
        );
    }
    if (cvLink === ""){
        return (
            <div>
                <div className="w-full flex justify-center">
                    <div className="max-w-[800px] flex flex-col items-center justify-center mt-20 rounded-xl border border-black py-15 px-15 gap-10">
                        <h1 className="font-konkhmer text-black text-[30px] text-center">To get the Resume details, upload your resume first</h1>
                        <a href="/analyze" className="font-kosugi bg-green text-black text-[32px] px-5 py-3 rounded-xl">Analyze Resume</a>
                    </div>
                </div>
            </div>
        )
    }
    return (
         <div className="flex flex-col items-center w-full">
                <div className="max-w-[744px] px-18 py-8 border border-black/30 rounded-xl">
                    <div className="flex flex-row items-center justify-between pb-8 border-b border-black/10">
                        <h3 className="text-black font-konkhmer text-[30px]">Resume:</h3>
                        <a href={cvLink} className="flex flex-row gap-2 text-[24px] px-12 py-3.5 rounded-2xl font-konkhmer bg-green transition-colors ease-in-out hover:bg-green/90">
                            My resume
                            <img src="/Document.svg" alt=""/>
                        </a>
                    </div>
                    <div className="flex flex-row items-center justify-between pt-8 pb-8 border-b border-black/10">
                        <h3 className="text-black font-konkhmer text-[30px]">Years of experience:</h3>
                        <p className="text-black font-kosugi text-[30px]">{cvDetails.experienceYears} Years</p>
                    </div>
                    <div className="flex flex-col pt-8 gap-6">
                        <h3 className="text-black font-konkhmer text-[30px]">Technology stack:</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {Array.isArray(cvDetails?.techStack) && cvDetails.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
}