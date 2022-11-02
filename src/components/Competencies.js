import React from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid"

export default function Competencies() {

    return (
        <section id="competencies">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CpuChipIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Competencies
                    </h1>
                </div>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Peruse the leading, scalable cloud services and frameworks we are most adept at
                </p>
            </div>
        </section>
    )

}