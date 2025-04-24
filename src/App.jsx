import {Route, Routes} from "react-router";
import {MainForUserPage} from "./pages/MainForUserPage.jsx";
import {MyAccountPage} from "./pages/MyAccountPage.jsx";
import {UserRegisterPage} from "./pages/UserRegisterPage.jsx";
import {AnalyzePage} from "./pages/AnalyzePage.jsx";
import {UserProtectedRoutes} from "./router/UserProtectedRoutes.jsx";
import {UserLoginPage} from "./pages/UserLoginPage.jsx";
import {UserVerifyPage} from "./pages/UserVerifyPage.jsx";
import {MainForCompanyPage} from "./pages/MainForCompanyPage.jsx";
import {CompanyLoginPage} from "./pages/CompanyLoginPage.jsx";
import {CompanyRegisterPage} from "./pages/CompanyRegisterPage.jsx";
import {CompanyVerifyPage} from "./pages/CompanyVerifyPage.jsx";
import {CompanyProtectedRoutes} from "./router/CompanyProtectedRoutes.jsx";
import {AdminProtectedRoutes} from "./router/AdminProtectedRoutes.jsx";
import {CreateTechnologyPage} from "./pages/CreateTechnologyPage.jsx";
import {MyAccountProtectedRoutes} from "./router/MyAccountProtectedRoutes.jsx";
import {CompanyCreateJobPage} from "./pages/CompanyCreateJobPage.jsx";
import {AllVacanciesPage} from "./pages/AllVacanciesPage.jsx";
import {VacancyPage} from "./pages/VacancyPage.jsx";

export function App(){
    return (
        <Routes>
            <Route path="/" element={<MainForUserPage />} />
            <Route path="/for-companies" element={<MainForCompanyPage/>}/>

            <Route path="/all-vacancies" element={<AllVacanciesPage/>}/>

            <Route path="/all-vacancies/:id" element={<VacancyPage/>}/>

            <Route path="/user-register" element={<UserRegisterPage/>}/>
            <Route path="/company-register" element={<CompanyRegisterPage/>}/>

            <Route path="/user-login" element={<UserLoginPage/>}/>
            <Route path="/company-login" element={<CompanyLoginPage/>}/>

            <Route path="/user-verify" element={<UserVerifyPage/>}/>
            <Route path="/company-verify" element={<CompanyVerifyPage/>}/>

            <Route element={<MyAccountProtectedRoutes/>}>
                <Route path="/my-account" element={<MyAccountPage/>}/>
            </Route>

            <Route element={<UserProtectedRoutes/>}>
                <Route path="/analyze" element={<AnalyzePage/>}/>
            </Route>

            <Route element={<CompanyProtectedRoutes/>}>
                <Route path="/create-work" element={<CompanyCreateJobPage/>}/>
            </Route>

            <Route element={<AdminProtectedRoutes/>}>
                <Route path="/technologies" element={<CreateTechnologyPage/>}/>
            </Route>
        </Routes>
    )
}