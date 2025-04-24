import {Header} from "../components/Global/Header/Header.jsx";
import {Footer} from "../components/Global/Footer.jsx";
import {Layout} from "../components/Layout.jsx";
import {useNavigate} from "react-router";
import {useState} from "react";
import {registerUser} from "../services/authenticationService.js";

export function UserRegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
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
            await registerUser({
                email: formData.email,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName,
            })
            navigate("/user-verify", {state:{ email: formData.email }})
        } catch (error){
            setError("Registration Error");
            console.log(error);
        }
    }

    return (
        <>
            <Header/>
                <main className="">
                    <Layout>
                        <div className="flex items-center w-full">
                            <div className="flex flex-col items-center mx-auto py-12 px-6.5 mt-7.5 mb-7.5 border border-[#222A24]/40">
                                <div className="">
                                    <div className="flex flex-col mb-4">
                                        <h2 className="text-black text-[31px] font-konkhmer leading-8">Sign up to</h2>
                                        <p className="text-blue font-konkhmer text-[16px]">Find Job</p>
                                    </div>

                                    <form action="" className="flex flex-col gap-7" onSubmit={handleSubmit}>
                                        <div className="flex flex-col gap-4">
                                            <label htmlFor="email" className="font-kosugi text-[16px] text-black">
                                                Email
                                            </label>
                                            <input type="email" id="email" name="email"
                                                   required={true}
                                                   placeholder="Enter your email"
                                                   value={formData.email}
                                                   onChange={handleChange}
                                                   className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi
                                                   focus:border-[#2EA4F1]"
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
                                                Confrim Password
                                            </label>
                                            <input type="password" id="confirmPassword" name="confirmPassword"
                                                   required={true}
                                                   placeholder="Confrim Password"
                                                   value={formData.confirmPassword}
                                                   onChange={handleChange}
                                                   className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi"
                                            />
                                        </div>

                                        <div className="flex flex-row gap-5">
                                            <div className="flex flex-col gap-4">
                                                <label htmlFor="firstName" className="font-kosugi text-[16px] text-black">
                                                    Name
                                                </label>
                                                <input type="text" id="firstName" name="firstName"
                                                       required={true}
                                                       placeholder="Your name"
                                                       value={formData.firstName}
                                                       onChange={handleChange}
                                                       className="py-4 p-6.5 border border-[#222A24] rounded-md max-w-43 input-kosugi"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-4">
                                                <label htmlFor="lastName" className="font-kosugi text-[16px] text-black">
                                                    Surname
                                                </label>
                                                <input type="text" id="lastName" name="lastName"
                                                       required={true}
                                                       placeholder="Your surname"
                                                       value={formData.lastName}
                                                       onChange={handleChange}
                                                       className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi"
                                                />
                                            </div>
                                        </div>

                                        {errors && <p className="text-red-500">{errors}</p>}

                                        <button type="submit"
                                            className="w-full h-14 bg-blue text-white button-kosugi transition-colors ease-in-out duration-300 hover:bg-blue/80">
                                            Register
                                        </button>
                                    </form>
                                </div>
                                <div className="mt-7">
                                    <a href="/user-login" className="mt-7 font-kosugi text-black underline underline-offset-3">
                                        Already have an Account?
                                    </a>
                                    <a href="/user-login" className="text-blue font-konkhmer pl-1">Sign In</a>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </main>
            <Footer/>
        </>
    )
}