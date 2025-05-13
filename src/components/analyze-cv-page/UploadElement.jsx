import { useDropzone } from "react-dropzone";
import { useState } from "react";
import {analyzeUserCV, uploadUserCv} from "../../services/userService.js";
import {Loader} from "../Global/Loader.jsx";

export function UploadElement({ setAnalyseStep,analyseResult }) {
    const [error, setError] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);
    const [loading, setLoading] = useState(false);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            "application/pdf": [],
            "application/msword": [],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
        },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            if (selectedFile) {
                setError("You can only upload one file at a time.");
                return;
            }

            const file = acceptedFiles[0];
            setSelectedFile(file);
            setError(null);
        },
    });

    const handleUpload = async () => {
        if (!selectedFile) {
            setError("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            await uploadUserCv(formData);
            setIsUploaded(true);
            setError(null);
            alert("CV uploaded successfully!");
        } catch (err) {
            setError("There was an error uploading the file.");
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
    };

    const handleAnalyze = async () => {
        setLoading(true);
        try {
            await analyzeUserCV();
            setLoading(false);
            setAnalyseStep("analyse-result"); // 👈 Переход на результат анализа
        } catch (err) {
            setLoading(false);
            setError("There was an error analyzing the CV. Please try again.");
        }
    };

    return (
        <div className="text-center w-full max-w-[750px]">
            <h2 className="font-kosugi bg-green py-9 text-[30px] rounded-t-xl">{isUploaded ? "Analyze your resume" : "Upload your resume (PDF or DOCX)" }</h2>
                <div className="w-full flex flex-col gap-10 px-8 py-5 border border-black/20 border-t-0 rounded-b-xl min-h-[400px]">
                    <div className="w-full flex flex-col items-start mt-4">
                        <h3 className="font-konkhmer text-black">
                            {isUploaded ? "RESUME ANALYSE" : "RESUME UPLOAD" }
                        </h3>
                        <p className="font-kosugi text-black text-[17px] ">{isUploaded ? "🤖 Artificial intelligence analyzes your experience,skills and education" : " 🤖 Select your resume in a pdf format"}  </p>
                    </div>
                    <div
                        {...getRootProps()}
                        className={`border-2 border-blue border-dashed  p-10 rounded-xl cursor-pointer transition`}
                    >
                        <input {...getInputProps()} disabled={!!selectedFile} />
                        {isDragActive ? (
                            <p className="text-blue-600">Drop the file here ...</p>
                        ) : selectedFile ? (
                            <button className="text-blue font-kosugi border border-blue px-4 py-3 rounded-xl " onClick={handleRemoveFile}>
                                {selectedFile.name}
                            </button>
                        ) : (
                            <div className="flex flex-col items-center font-kosugi text-[14px] gap-3">
                                <img src="/upload.svg" alt=""/>
                                <p className="text-black">Drag your resume to start uploading</p>
                                <p>------ OR ------</p>
                                <span className="text-blue border border-blue px-3 py-2 rounded-xl">Browse files</span>
                            </div>
                        )}
                    </div>
                    {error && <p className="mt-2 text-red-500">{error}</p>}
                    {loading && (
                        <div className="flex flex-col items-center font-kosugi gap-4">
                            <Loader />
                            <p>🔍 It takes a few seconds and then we'll find the best jobs for you.</p>
                        </div>
                    )}
                    <div className="flex flex-row gap-3 w-full justify-center">
                        {analyseResult !== null ? (
                            <button
                                onClick={handleUpload}
                                className="bg-blue button-konkhmer text-white px-10 py-3 rounded-xl cursor-pointer transition-colors ease-in-out hover:bg-blue/90">
                                Upload
                            </button>
                        ) : null}
                        {isUploaded && (
                            <button
                                onClick={handleAnalyze}
                                className="bg-green button-konkhmer text-black px-10 py-3 rounded-xl cursor-pointer transition-colors ease-in-out hover:bg-blue/90"
                            >
                                Analyze
                            </button>
                        )}
                    </div>
                </div>
        </div>
    );
}
