import {Layout} from "./Layout.jsx";

export function Footer() {
    return (
        <footer className="h-[100px] bg-[#222A24] flex flex-row items-center">
            <Layout>
                <div className="flex flex-row justify-between items-center">
                    <a href="/" className="bg-white flex justify-center items-center w-25 h-25">
                        <img src="/Logo.svg" alt="" className=""/>
                    </a>

                    <a href="mailto:findjob@gmail.com" className="text-white font-kosugi text-[20px]">findjob@gmail.com</a>

                    <div className="flex flex-row items-center gap-7.5">
                        <a href="">
                            <img src="/socials/Instagram.svg" alt=""/>
                        </a>
                        <a href="">
                            <img src="/socials/Linkedin.svg" alt=""/>
                        </a>
                        <a href="">
                            <img src="/socials/twitter.svg" alt=""/>
                        </a>
                        <a href="">
                            <img src="/socials/Facebook.svg" alt=""/>
                        </a>
                    </div>

                    <p className="text-white font-kosugi text-[20px]">® 2025 Find Job.All right reserved</p>
                </div>
            </Layout>
        </footer>
    )
}