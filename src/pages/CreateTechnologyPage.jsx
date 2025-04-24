import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {MainCreateTechnology} from "../components/create-technology/MainCreateTechnology.jsx";

export function CreateTechnologyPage() {
    return (
        <>
            <Header/>
            <MainCreateTechnology/>
            <Footer/>
        </>
    )
}