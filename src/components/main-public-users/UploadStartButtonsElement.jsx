export function UploadStartButtonsElement(){
    return (
        <div className="grid grid-rows-2 grid-cols-12 mt-19">
            <div className="row-start-1 col-start-1 col-end-8 bg-green flex justify-center items-center">
                <p className="text-[36px] font-kosugi">Upload your CV (PDF or DOCX)</p>
            </div>
            <a href="/analyze" className="px-[95px] py-[30px] row-start-2 col-start-8 col-end-13 bg-blue text-[36px] text-center text-white font-kosugi transition-colors ease-in-out hover:bg-blue/90">
                Start right now
            </a>
        </div>
    )
}