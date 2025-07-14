# JobFinder Front-End

![GitHub repo size](https://img.shields.io/github/repo-size/per5ect/JobFinder-FrontEnd)
![GitHub stars](https://img.shields.io/github/stars/per5ect/JobFinder-FrontEnd?style=social)

Software Requirements Specification (SRS):
https://github.com/per5ect/JobFinder-FrontEnd/blob/main/SRS%20JobFinder.pdf

Software Design Document (SDD):
https://github.com/per5ect/JobFinder-FrontEnd/blob/main/SDD%20Jobfinder.pdf

Figma design: 
https://www.figma.com/design/CLQlBV5p9wejuXqliZ6CZE/JobFinder?node-id=0-1&t=nKr3H12D26vQ6Lv6-1

## Description

**JobFinder Front-End** is a responsive and modern web application built with React, Vite, Tailwind CSS, Redux, and Axios. JobFinder helps companies find suitable candidates and users compare job openings based on
resumes using artificial intelligence. Includes application administration

## Features

- 🔎 Search for jobs by keyword, location, or category
- 🔗 Obtaining suitable vacancies by analyzing resumes
- 📋 Filter and sort job listings
- 📄 View detailed job descriptions
- ⚡ Fast performance powered by Vite
- 🎨 Responsive and customizable UI with Tailwind CSS
- 🔗 Seamless API integration using Axios
- 🔄 State management with Redux

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



## Usage

- Open application in your browser.
- Use the search bar to find jobs by keyword or location.
- Apply filters to narrow down results.
- Click on job listings to view detailed information.
- Analyzing a resume
- Obtaining suitable vacancies after analysis
- Creation of vacancies by the firm
- Administering the application by admin



<img width="1437" height="698" alt="image" src="https://github.com/user-attachments/assets/41714ff5-473b-429b-9ca3-08adb2006714" />
<img width="1430" height="685" alt="image" src="https://github.com/user-attachments/assets/1c867c67-3d4b-49e8-a0a6-91ced0df3e6b" />
<img width="1431" height="700" alt="image" src="https://github.com/user-attachments/assets/7c88f066-2a6d-4615-a1ce-e0fef6210fba" />
<img width="1434" height="678" alt="image" src="https://github.com/user-attachments/assets/9c1247a0-a0f6-45d2-94fa-fd6abda1bfcd" />
<img width="1162" height="695" alt="image" src="https://github.com/user-attachments/assets/49a7b69e-14ec-47e1-a2de-1bb0dda2f967" />
<img width="1436" height="698" alt="image" src="https://github.com/user-attachments/assets/d0c255bb-9134-49ba-88f5-c303426c5faa" />


## Project Structure

```
Directory structure:
└── per5ect-jobfinder-frontend/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    │   └── fonts/
    │       ├── KonkhmerSleokchher-Regular.ttf
    │       └── KosugiMaru-Regular.ttf
    └── src/
        ├── App.jsx
        ├── index.jsx
        ├── components/
        │   ├── admin-all-companies/
        │   │   ├── CompanyTableBody.jsx
        │   │   └── MainAllCompanies.jsx
        │   ├── admin-all-users/
        │   │   ├── MainAllUsers.jsx
        │   │   └── UserTableBody.jsx
        │   ├── admin-create-technology-page/
        │   │   ├── CreateForm.jsx
        │   │   ├── MainCreateTechnology.jsx
        │   │   └── SearchTechnologyForm.jsx
        │   ├── admin-main-page/
        │   │   └── MainAdmin.jsx
        │   ├── all-vacancies-page/
        │   │   ├── MainAllVacancies.jsx
        │   │   └── VacancyFilterForm.jsx
        │   ├── analyze-cv-page/
        │   │   ├── AnalyzeMain.jsx
        │   │   ├── AnalyzeResultElement.jsx
        │   │   └── UploadElement.jsx
        │   ├── company-create-job/
        │   │   ├── JobOfferingsInput.jsx
        │   │   ├── JobRequirementsInput.jsx
        │   │   ├── MainCreateJob.jsx
        │   │   └── SearchTechnologyCompany.jsx
        │   ├── company-login-page/
        │   │   └── MainCompanyLogin.jsx
        │   ├── company-main-page/
        │   │   └── MainForCompany.jsx
        │   ├── company-register-page/
        │   │   └── MainCompanyRegister.jsx
        │   ├── company-vacancies-page/
        │   │   └── MainCompanyVacancies.jsx
        │   ├── company-verify-page/
        │   │   └── MainCompanyVerify.jsx
        │   ├── Global/
        │   │   ├── AdminTableElement.jsx
        │   │   ├── Footer.jsx
        │   │   ├── Layout.jsx
        │   │   ├── Loader.jsx
        │   │   ├── VacancyElement.jsx
        │   │   └── Header/
        │   │       ├── AdminDropdownMenu.jsx
        │   │       ├── CompanyDropdownMenu.jsx
        │   │       ├── DropdownElement.jsx
        │   │       ├── GuestCompanyHeader.jsx
        │   │       ├── Header.jsx
        │   │       ├── HeaderAdminElement.jsx
        │   │       ├── HeaderCompanyElement.jsx
        │   │       ├── HeaderGuestElement.jsx
        │   │       ├── HeaderUserElement.jsx
        │   │       └── UserDropdownMenu.jsx
        │   ├── job-applications-page/
        │   │   ├── MainJobApplications.jsx
        │   │   └── TableApplicationsElement.jsx
        │   ├── main-public-users/
        │   │   ├── FIndJobElement.jsx
        │   │   ├── HowItWorksElement.jsx
        │   │   ├── MainPublicForUsers.jsx
        │   │   └── UploadStartButtonsElement.jsx
        │   ├── my-account/
        │   │   ├── CompanyAcconut.jsx
        │   │   ├── CompanyInformationForm.jsx
        │   │   ├── CompanyLoginDetailsForm.jsx
        │   │   ├── CvDetailsForm.jsx
        │   │   ├── MainMyAccount.jsx
        │   │   ├── MainUserCvDetails.jsx
        │   │   ├── UserAccount.jsx
        │   │   ├── UserLoginDetailsForm.jsx
        │   │   ├── UserPersonalnformationForm.jsx
        │   │   └── hooks/
        │   │       ├── useCompanyAccount.js
        │   │       ├── useCvDetails.js
        │   │       ├── useMyAccount.jsx
        │   │       ├── useUserAccount.js
        │   │       └── useUserPersonalInformationForm.js
        │   ├── user-applications/
        │   │   ├── MainUserApplications.jsx
        │   │   └── TableUesrApplicationsElement.jsx
        │   ├── user-favorite-vacancies/
        │   │   └── MainUserFavoriteVacancies.jsx
        │   ├── user-login-page/
        │   │   └── MainUserLogIn.jsx
        │   ├── user-register-page/
        │   │   └── MainUserRegister.jsx
        │   ├── user-suitable-vacancies/
        │   │   └── MainSuitableVacancies.jsx
        │   ├── user-verify-page/
        │   │   └── MainUserVerify.jsx
        │   └── vacancy-details-page/
        │       ├── MainVacancyDetails.jsx
        │       ├── VacancyCompanyContacts.jsx
        │       ├── VacancyDetailsPanel.jsx
        │       ├── VacancyOfferings.jsx
        │       ├── VacancyRequirements.jsx
        │       └── VacancyTechnologyListElement.jsx
        ├── pages/
        │   ├── MyAccountPage.jsx
        │   ├── admin/
        │   │   ├── AdminAllCompaniesPage.jsx
        │   │   ├── AdminAllUsersPage.jsx
        │   │   ├── AdminHomePage.jsx
        │   │   └── CreateTechnologyPage.jsx
        │   ├── Company/
        │   │   ├── CompanyCreateJobPage.jsx
        │   │   ├── CompanyJobApplicationsPage.jsx
        │   │   └── CompanyVacanciesPage.jsx
        │   ├── public/
        │   │   ├── AllVacanciesPage.jsx
        │   │   ├── CompanyLoginPage.jsx
        │   │   ├── CompanyRegisterPage.jsx
        │   │   ├── CompanyVerifyPage.jsx
        │   │   ├── MainForCompanyPage.jsx
        │   │   ├── MainForUserPage.jsx
        │   │   ├── UserLoginPage.jsx
        │   │   ├── UserRegisterPage.jsx
        │   │   ├── UserVerifyPage.jsx
        │   │   └── VacancyPage.jsx
        │   └── user/
        │       ├── AnalyzePage.jsx
        │       ├── UserApplicationsPage.jsx
        │       ├── UserCvDetailsPage.jsx
        │       ├── UserFavoriteVacanciesPage.jsx
        │       └── UserSuitableVacanciesPage.jsx
        ├── router/
        │   ├── AdminProtectedRoutes.jsx
        │   ├── CompanyProtectedRoutes.jsx
        │   ├── MyAccountProtectedRoutes.jsx
        │   └── UserProtectedRoutes.jsx
        ├── services/
        │   ├── adminService.js
        │   ├── authenticationService.js
        │   ├── companyService.js
        │   ├── publicService.js
        │   └── userService.js
        ├── store/
        │   ├── favoriteVacanciesSlice.js
        │   └── store.js
        ├── styles/
        │   └── index.css
        └── utils/
            └── jwtDecode.js

```
