import {useNavigate} from "react-router";
import {useState} from "react";
import {registerCompany} from "../../services/authenticationService.js";
import {Layout} from "../Global/Layout.jsx";

export function MainCompanyRegister(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        companyEmail: "",
        companyPhone: "",
        companyName: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.password !== formData.confirmPassword){
            setError("Passwords don't match");
        }

        try{
            await registerCompany({
                companyEmail: formData.companyEmail,
                companyPhone: formData.companyPhone,
                companyName: formData.companyName,
                password: formData.password,
            })
            navigate("/company-verify", {state:{ companyEmail: formData.companyEmail }})
        } catch (error){
            setError("Registration Error");
            console.log(error);
        }
    }

    return (
        <main className="">
            <Layout>
                <div className="flex items-center w-full">
                    <div className="flex flex-col items-center max-w-[505px] w-full mx-auto py-12 px-6.5 mt-7.5 mb-7.5 border border-[#222A24]/40">
                        <div className="w-full">
                            <div className="flex flex-col mb-4">
                                <h2 className="text-black text-[31px] font-konkhmer leading-8">Sign up to</h2>
                                <p className="text-blue font-konkhmer text-[16px]">Find Workers</p>
                            </div>

                            <form action="" className="flex flex-col gap-7" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="companyEmail" className="font-kosugi text-[16px] text-black">
                                        Email
                                    </label>
                                    <input type="email" id="companyEmail" name="companyEmail"
                                           required={true}
                                           placeholder="Enter your company email"
                                           value={formData.companyEmail}
                                           onChange={handleChange}
                                           className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi
                                                   focus:border-[#2EA4F1]"
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="companyPhone" className="font-kosugi text-[16px] text-black">
                                        Phone Number
                                    </label>
                                    <input type="text" id="companyPhone" name="companyPhone"
                                           required={true}
                                           placeholder="Enter your phone number"
                                           value={formData.companyPhone}
                                           onChange={handleChange}
                                           className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi"
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="companyName" className="font-kosugi text-[16px] text-black">
                                        Company Name
                                    </label>
                                    <input type="text" id="companyName" name="companyName"
                                           required={true}
                                           placeholder="Enter your company name"
                                           value={formData.companyName}
                                           onChange={handleChange}
                                           className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi"
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="password" className="font-kosugi text-[16px] text-black">
                                        Password
                                    </label>
                                    <input type="password" id="password" name="password"
                                           required={true}
                                           placeholder="Enter your Password"
                                           value={formData.password}
                                           onChange={handleChange}
                                           className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi"
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="confirmPassword" className="font-kosugi text-[16px] text-black">
                                        Confirm Password
                                    </label>
                                    <input type="password" id="confirmPassword" name="confirmPassword"
                                           required={true}
                                           placeholder="Confrim Password"
                                           value={formData.confirmPassword}
                                           onChange={handleChange}
                                           className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi"
                                    />
                                </div>



                                {errors && <p className="text-red-500">{errors}</p>}

                                <button type="submit"
                                        className="w-full h-14 bg-blue text-white button-kosugi transition-colors ease-in-out duration-300 hover:bg-blue/80">
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="mt-7">
                            <a href="/company-login" className="mt-7 font-kosugi text-black underline underline-offset-3">
                                Already have an Account?
                            </a>
                            <a href="/company-login" className="text-blue font-konkhmer pl-1">Sign In</a>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    )
}