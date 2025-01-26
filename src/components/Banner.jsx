import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { AiTwotonePhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";

export default function Banner() {
    return (
        <>
            <div
                className="bg-slate-950 mt-[-35px] w-screen ml-[-32px] text-gray-50 h-12 hidden sm:flex justify-around md:justify-center items-center sticky"
            >
                <div className=" flex mx-2 md:mx-0 lg:mx-[92px] gap-2 sm:gap-4 md:gap-10 xl:gap-0">
                    <div className=" text-gray-50  flex  items-center text-xs md:text-sm gap-2 xl:mr-52">
                        <div className="flex gap-8 items-center cursor-pointer">
                            <MdOutlineMail /><span>info@SaylaniWelfareUSA.com</span>
                            <RiWhatsappFill /><span>833-786-0999</span>
                            <AiTwotonePhone /><span>+923331201585</span>
                        </div>
                    </div>
                    <button className="cursor-pointer">English </button>
                </div>
            </div>
            
        </>
    );
}