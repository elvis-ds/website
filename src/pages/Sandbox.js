
import React from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import { competencies_a, competencies_b } from "../data";
import Marquee from "react-fast-marquee";

function Sandbox() {
    return (
        <section id="competencies">
            <Marquee play="false" pauseOnClick="false" direction="left" speed="72">
                <div className="flex flex-nowrap m-4">
                    {competencies_a.map((comp) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <img class="m-auto w-12"
                                    src={"images/competencies/".concat(comp.name.replaceAll(' ', '-').toLowerCase(), ".png")}
                                    alt="Sunset in the mountains" />
                                <div class="px-6 py-4 align-middle">
                                    <div class="font-medium text-white">
                                        The Coldest Sunset
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
}


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