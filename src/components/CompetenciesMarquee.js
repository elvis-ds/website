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
            <Marquee play="false" pauseOnClick="false" direction="left">
                <div className="flex flex-nowrap m-4 mb-2">
                    {competencies_a.map((comp) => (
                        <div className="p-4 md:w-1/2 max-w-sm object-center item-center">
                            <div className="h-full bg-slate-700 /*bg-opacity-40*/ p-8 rounded-lg flex-nowrap">
                                <img
                                    alt="testimonial"
                                    src={"images/competencies/".concat(comp.name.replaceAll(' ', '-').toLowerCase(), ".png")}
                                    // className="w-12 flex-shrink-0 object-cover object-center"
                                    className="w-12 object-center"
                                />
                                <div className="items-center">
                                    <span className="font-medium text-white">
                                        {comp.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
            
            <Marquee play="false" pauseOnClick="false" direction="right">
                <div className="flex flex-nowrap m-4 mb-2">
                    {competencies_b.map((comp) => (
                        <div className="p-4 md:w-1/2 max-w-sm item-center">
                            <div className="h-full bg-slate-700 /*bg-opacity-40*/ p-8 rounded-lg">
                                <img
                                    alt="testimonial"
                                    src={"images/competencies/".concat(comp.name.replaceAll(' ', '-').toLowerCase(), ".png")}
                                    // className="w-12 flex-shrink-0 object-cover object-center"
                                    className="w-12 object-center"
                                />
                                <div className="inline-flex items-center">
                                    <span className="title-font font-medium text-white">
                                        {comp.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>

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
