
import React from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import { skills_a, skills_b } from "../data";
import Marquee from "react-fast-marquee";

function Sandbox() {
    return (
        <section id="skills">
            <Marquee play="false" pauseOnClick="false" direction="left" speed="0">
                {skills_a.map((skill) => (
                    <div className="container grid grid-cols-auto flex content-center px-2">
                        <div className="col-span-1 flex flex-col bg-white border-2 py-4">
                            <img
                                className="w-1/4 mx-auto"
                                src={"images/competencies/".concat(skill.name.replaceAll(' ', '-').toLowerCase(), ".png")}
                                alt="competency"
                            />
                            <p className="text-center text-[12px] text-black font-neue font-thin py-2">
                                {skill.subtitle}
                            </p>
                            {/* <p className="text-md text-justify">Some Description</p> */}
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}

// <div className="container mx-auto p-6 grid grid-rows-2 grid-cols-1 gap-4 bg-gray-800 rounded-sm">
//     <div className="row-span-2 flex flex-row p-4">
//         <img
//             className="mx-auto h-12 w-12"
//             src={"images/competencies/".concat(comp.name.replaceAll(' ', '-').toLowerCase(), ".png")}
//             alt="Sunset in the mountains"
//         />
//     </div>
//     <div className="row-span-1 flex flex-row p-4 text-center">
//         <p className="text-xs text-white text-base font-neue font-thin">
//             {comp.subtitle}
//         </p>
//     </div>
// </div>

// <div className="flex flex-nowrap m-4 mb-2">
//     {competencies_a.map((comp) => (
//         <div className="p-4 md:w-1/2 max-w-sm object-center">
//             <div className="h-full w-full bg-slate-700 bg-opacity-40 p-4 rounded-lg object-center">
//                 <div>
//                 <img
//                         alt="testimonial"
//                         src={"images/competencies/".concat(comp.name.replaceAll(' ', '-').toLowerCase(), ".png")}
//                         // className="w-12 flex-shrink-0 object-cover object-center"
//                         className="mx-auto object-contain h-12 w-12"
//                     />
//                 </div>
//                 <div className="flex-auto text-center">
//                     <span className="m-auto font-medium text-white">
//                         {comp.name}
//                     </span>
//                 </div>
//             </div>
//         </div>
//     ))}
// </div>

export default Sandbox;