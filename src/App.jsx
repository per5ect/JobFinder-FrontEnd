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
import {UserCvDetailsPage} from "./pages/UserCvDetailsPage.jsx";
import {CompanyVacanciesPage} from "./pages/CompanyVacanciesPage.jsx";
import {CompanyJobApplicationsPage} from "./pages/CompanyJobApplicationsPage.jsx";
import {UserFavoriteVacanciesPage} from "./pages/UserFavoriteVacanciesPage.jsx";
import {UserApplicationsPage} from "./pages/UserApplicationsPage.jsx";
import {AdminHomePage} from "./pages/AdminHomePage.jsx";
import {AdminAllCompaniesPage} from "./pages/AdminAllCompaniesPage.jsx";
import {AdminAllUsersPage} from "./pages/AdminAllUsersPage.jsx";
import {UserSuitableVacanciesPage} from "./pages/UserSuitableVacanciesPage.jsx";

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
                <Route path="/suitable-vacancies" element={<UserSuitableVacanciesPage/>}/>
                <Route path="/cv-details" element={<UserCvDetailsPage/>}/>
                <Route path="/favorite-vacancies" element={<UserFavoriteVacanciesPage/>}/>
                <Route path="/my-applications" element={<UserApplicationsPage/>}/>
            </Route>

            <Route element={<CompanyProtectedRoutes/>}>
                <Route path="/create-work" element={<CompanyCreateJobPage/>}/>
                <Route path="/my-vacancies" element={<CompanyVacanciesPage/>}/>
                <Route path="/vacancy-applications/:vacancyName/:vacancyId" element={<CompanyJobApplicationsPage/>}/>
            </Route>

            <Route element={<AdminProtectedRoutes/>}>
                <Route path="/main-admin-page" element={<AdminHomePage/>}/>
                <Route path="/technologies" element={<CreateTechnologyPage/>}/>
                <Route path="/companies" element={<AdminAllCompaniesPage/>}/>
                <Route path="/users" element={<AdminAllUsersPage/>}/>
            </Route>
        </Routes>
    )
}