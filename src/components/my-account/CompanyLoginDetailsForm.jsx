export function CompanyLoginDetailsForm() {
    return (
        <section className="pt-10 pb-16 border-b-1 border-black/10 flex flex-col gap-3">
            <h2 className="font-konkhmer text-[36px]">Login details</h2>
            <form action="" className="flex flex-row items-end justify-between">
                <div className="flex flex-col gap-1">
                    <label htmlFor="currentPassword" className="font-konkhmer text-[20px] text-black">
                        Current password
                    </label>
                    <input type="password" id="currentPassword" name="currentPassword"
                           value=""
                        // onChange={handleChange}
                           required={false}
                           placeholder="Enter your current password"
                           className="py-4 p-6.5 border border-[#222A24] rounded-xl input-kosugi w-[359px]
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="newPassword" className="font-konkhmer text-[20px] text-black">
                        New password
                    </label>
                    <input type="password" id="newPassword" name="newPassword"
                           value=""
                        // onChange={handleChange}
                           required={false}
                           placeholder="Enter your new password"
                           className="py-4 p-6.5 border border-[#222A24] rounded-xl input-kosugi w-[359px]
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
                    />
                </div>
                <button className="w-[359px] bg-blue py-4 text-white button-konkhmer rounded-xl">Save</button>
            </form>
        </section>
    )
}