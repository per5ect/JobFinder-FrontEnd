import {Header} from "../../components/Global/Header/Header.jsx";
import {Footer} from "../../components/Global/Footer.jsx";
import {AnalyzeMain} from "../../components/analyze-cv-page/AnalyzeMain.jsx";

export function AnalyzePage() {
    return (
        <>
            <Header/>
            <AnalyzeMain/>
            <Footer/>
        </>
    )
}