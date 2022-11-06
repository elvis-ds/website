import React from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import { competencies_a, competencies_b } from "../data";
import Marquee from "react-fast-marquee";




export default function Compentencies() {
    return (

        <section id="competencies">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <CpuChipIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Competencies
                    </h1>
                </div>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Peruse the leading, scalable cloud services and frameworks that we love being steeped in.
                </p>
            </div>
            <ul>
                <li>
                    <Marquee play="false" pauseOnClick="false" direction="left" speed="70">
                        <div className="flex flex-nowrap m-4">
                            {competencies_a.map((comp) => (
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded text-center">
                                        <img className="m-auto w-12"
                                            src={"images/competencies/".concat(comp.name.replaceAll(' ', '-').toLowerCase(), ".png")}
                                            alt="Sunset in the mountains" />
                                        <div className="px-6 py-2">
                                            <div className="text-xs text-white">
                                            {comp.subtitle}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </li>
                <li>
                    <Marquee play="false" pauseOnClick="false" direction="right" speed="70">
                        <div className="flex flex-nowrap m-4">
                            {competencies_b.map((comp) => (
                                <div className="p-4 md:w-1/2 w-full">
                                    <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded text-center">
                                        <img className="m-auto w-12"
                                            src={"images/competencies/".concat(comp.name.replaceAll(' ', '-').toLowerCase(), ".png")}
                                            alt="Sunset in the mountains" />
                                        <div className="px-6 py-2">
                                            <div className="text-xs text-white">
                                                {comp.subtitle}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </li>
            </ul>




        </section>

    );
}


    // <Marquee pauseOnClick="false" direction="left">
    // <div className="flex flex-nowrap m-4 mb-2">
    //     {testimonials.map((testimonial) => (
    //         <div className="p-4 md:w-1/2 max-w-sm">
    //             <div className="h-full bg-slate-700 /*bg-opacity-40*/ p-8 rounded">
    //                 <p className="leading-relaxed mb-6">{testimonial.quote}</p>
    //                 <div className="inline-flex items-center">
    //                     <img
    //                         alt="testimonial"
    //                         src={testimonial.image}
    //                         className="w-12 rounded-full flex-shrink-0 object-cover object-center"
    //                     />
    //                     <span className="flex-grow flex flex-col pl-4">
    //                         <span className="title-font font-medium text-white">
    //                             {testimonial.name}
    //                         </span>
    //                         <span className="text-gray-500 text-sm uppercase">
    //                             {testimonial.company}
    //                         </span>
    //                     </span>
    //                 </div>
    //             </div>
    //         </div>
    //     ))}
    // </div>
    // </Marquee>
