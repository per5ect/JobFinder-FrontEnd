export function Loader(){
    return (
        <>
            <div className="flex justify-center items-center mt-20">
                <span className="loader"></span>
            </div>
            <style>{`
                .loader {
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #2EA4F1;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </>
    )
}