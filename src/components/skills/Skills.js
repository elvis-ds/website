import React from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import { skills_a, skills_b } from "../../data";
import Marquee from "react-fast-marquee";


export default function Skills() {
    return (

        <section id="skill">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <CpuChipIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
                        Competencies
                    </h1>
                </div>
                <p className="lg:w-3/4 mx-auto leading-relaxed font-neue py-4">
                    Peruse the leading, scalable cloud services, frameworks, and languages that we love being steeped in.
                </p>
                <Marquee play="false" pauseOnClick="false" direction="left" speed="20">
                {skills_a.map((skill) => (
                    <div className="container grid grid-cols-auto flex content-center p-2">
                        <div className="col-span-1 flex flex-col bg-gray-600 bg-opacity-40 py-4">
                            <img
                                className="w-1/4 mx-auto"
                                src={"images/competencies/".concat(skill.name.replaceAll(' ', '-').toLowerCase(), ".png")}
                                alt="competency"
                            />
                            <p className="text-center text-[12px] text-white font-neue py-2">
                                {skill.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </Marquee>
            <Marquee play="false" pauseOnClick="false" direction="right" speed="20">
                {skills_b.map((skill) => (
                    <div className="container grid grid-cols-auto flex content-center p-2">
                        <div className="col-span-1 flex flex-col bg-gray-600 bg-opacity-40 py-4">
                            <img
                                className="w-1/4 mx-auto"
                                src={"images/competencies/".concat(skill.name.replaceAll(' ', '-').toLowerCase(), ".png")}
                                alt="competency"
                            />
                            <p className="text-center text-[12px] text-white font-neue py-2">
                                {skill.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </Marquee>
            </div>
            
        </section>

    );
}
