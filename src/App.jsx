import {Route, Routes} from "react-router";
import {MainForUserPage} from "./pages/public/MainForUserPage.jsx";
import {MyAccountPage} from "./pages/MyAccountPage.jsx";
import {UserRegisterPage} from "./pages/public/UserRegisterPage.jsx";
import {AnalyzePage} from "./pages/user/AnalyzePage.jsx";
import {UserProtectedRoutes} from "./router/UserProtectedRoutes.jsx";
import {UserLoginPage} from "./pages/public/UserLoginPage.jsx";
import {UserVerifyPage} from "./pages/public/UserVerifyPage.jsx";
import {MainForCompanyPage} from "./pages/public/MainForCompanyPage.jsx";
import {CompanyLoginPage} from "./pages/public/CompanyLoginPage.jsx";
import {CompanyRegisterPage} from "./pages/public/CompanyRegisterPage.jsx";
import {CompanyVerifyPage} from "./pages/public/CompanyVerifyPage.jsx";
import {CompanyProtectedRoutes} from "./router/CompanyProtectedRoutes.jsx";
import {AdminProtectedRoutes} from "./router/AdminProtectedRoutes.jsx";
import {CreateTechnologyPage} from "./pages/admin/CreateTechnologyPage.jsx";
import {MyAccountProtectedRoutes} from "./router/MyAccountProtectedRoutes.jsx";
import {CompanyCreateJobPage} from "./pages/Company/CompanyCreateJobPage.jsx";
import {AllVacanciesPage} from "./pages/public/AllVacanciesPage.jsx";
import {VacancyPage} from "./pages/public/VacancyPage.jsx";
import {UserCvDetailsPage} from "./pages/user/UserCvDetailsPage.jsx";
import {CompanyVacanciesPage} from "./pages/Company/CompanyVacanciesPage.jsx";
import {CompanyJobApplicationsPage} from "./pages/Company/CompanyJobApplicationsPage.jsx";
import {UserFavoriteVacanciesPage} from "./pages/user/UserFavoriteVacanciesPage.jsx";
import {UserApplicationsPage} from "./pages/user/UserApplicationsPage.jsx";
import {AdminHomePage} from "./pages/admin/AdminHomePage.jsx";
import {AdminAllCompaniesPage} from "./pages/admin/AdminAllCompaniesPage.jsx";
import {AdminAllUsersPage} from "./pages/admin/AdminAllUsersPage.jsx";
import {UserSuitableVacanciesPage} from "./pages/user/UserSuitableVacanciesPage.jsx";

export function App(){
    return (
        <Routes>
            {/*public routes*/}
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

            {/*my account route*/}
            <Route element={<MyAccountProtectedRoutes/>}>
                <Route path="/my-account" element={<MyAccountPage/>}/>
            </Route>

            {/*user routes*/}
            <Route element={<UserProtectedRoutes/>}>
                <Route path="/analyze" element={<AnalyzePage/>}/>
                <Route path="/suitable-vacancies" element={<UserSuitableVacanciesPage/>}/>
                <Route path="/cv-details" element={<UserCvDetailsPage/>}/>
                <Route path="/favorite-vacancies" element={<UserFavoriteVacanciesPage/>}/>
                <Route path="/my-applications" element={<UserApplicationsPage/>}/>
            </Route>

            {/*company routes*/}
            <Route element={<CompanyProtectedRoutes/>}>
                <Route path="/create-work" element={<CompanyCreateJobPage/>}/>
                <Route path="/my-vacancies" element={<CompanyVacanciesPage/>}/>
                <Route path="/vacancy-applications/:vacancyName/:vacancyId" element={<CompanyJobApplicationsPage/>}/>
            </Route>

            {/*admin routes*/}
            <Route element={<AdminProtectedRoutes/>}>
                <Route path="/main-admin-page" element={<AdminHomePage/>}/>
                <Route path="/technologies" element={<CreateTechnologyPage/>}/>
                <Route path="/companies" element={<AdminAllCompaniesPage/>}/>
                <Route path="/users" element={<AdminAllUsersPage/>}/>
            </Route>
        </Routes>
    )
}