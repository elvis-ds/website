import React from "react";
import { CpuChipIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { skills } from "../data";

export default function Competencies() {

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
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        </section>
    )

}