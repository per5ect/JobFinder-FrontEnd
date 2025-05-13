import {Header} from "../components/Global/Header/Header.jsx";
import {GuestCompanyHeader} from "../components/Global/Header/GuestCompanyHeader.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {useNavigate} from "react-router";
import {useState} from "react";
import {loginCompany} from "../services/authenticationService.js";
import {Layout} from "../components/Layout.jsx";

export function CompanyLoginPage(){


    const navigate = useNavigate();
    const [formData, setFormData] = useState({ companyEmail: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "companyEmail" || name === "password") {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try{
            console.log(formData);
            await loginCompany(formData)
            navigate("/for-companies")
        } catch (error) {
            setError("Invalid email or password");
            console.log(error);
        }
    }
    return (
        <>
            <GuestCompanyHeader/>
            <main className="">
                <Layout>
                    <div className="flex items-center w-full">
                        <div className="flex flex-col items-center mx-auto py-12 px-6.5 mt-7.5 mb-7.5 border border-[#222A24]/">
                            <div className="">
                                <div className="flex flex-col mb-4">
                                    <h2 className="text-black text-[31px] font-konkhmer leading-8">Sign in to</h2>
                                    <p className="text-blue font-konkhmer text-[16px]">Find Workers</p>
                                </div>

                                <form action="" className="flex flex-col gap-7" onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-4">
                                        <label htmlFor="companyEmail" className="font-kosugi text-[16px] text-black">
                                            Email
                                        </label>
                                        <input type="email" id="companyEmail" name="companyEmail"
                                               value={formData.companyEmail}
                                               onChange={handleChange}
                                               required={true}
                                               placeholder="Enter your email"
                                               className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi w-102
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <label htmlFor="password" className="font-kosugi text-[16px] text-black">
                                            Password
                                        </label>
                                        <input type="password" id="password" name="password"
                                               value={formData.password}
                                               required={true}
                                               onChange={handleChange}
                                               placeholder="Enter your Password"
                                               className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi transition-colors ease-in-out duration-300 hover:border-blue/80"
                                        />
                                    </div>

                                    <a href="#" className="font-konkhmer text-[12px] text-black transition-colors ease-in-out duration-300
                                    hover:text-black/70">
                                        Forgot Password? Click here
                                    </a>

                                    {error && <p className="text-red-500">{error}</p>}

                                    <button type="submit" className="w-full h-14 bg-blue text-white button-kosugi transition-colors ease-in-out duration-300 hover:bg-blue/80">
                                        LogIn
                                    </button>
                                </form>
                            </div>
                            <div className="mt-7 flex flex-col items-center gap-5">
                                <a href="/user-login" className="mt-7 font-kosugi text-blue underline underline-offset-3">
                                    Want to find a job? Sign in as a employee
                                </a>
                                <div className="">
                                    <a href="/company-register" className="mt-7 font-kosugi text-black underline underline-offset-3">
                                        Dont have an Account?
                                    </a>
                                    <a href="/company-register" className="text-blue font-konkhmer pl-1">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
            <Footer/>
        </>
    )
}