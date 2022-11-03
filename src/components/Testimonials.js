import React from "react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { testimonials } from "../data";

export default function Testimonials() {

    return (
        <section id="testimonials" className="bg-gray-900">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Client Testimonials
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Hear what our customers have to say about us.
                </p>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-slate-700 /*bg-opacity-40*/ p-8 rounded">
                                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                                <div className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src={testimonial.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                            {testimonial.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}