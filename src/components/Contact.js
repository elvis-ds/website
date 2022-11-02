import React from "react";

import ContactForm from "./ContactForm";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";




function Contact() {

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <ChatBubbleOvalLeftIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                        Contact Us
                    </h1>
                </div>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Reach out to us to see how we can help you with your data and analytics endeavors.
                </p>
            </div>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=empire+state+building+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Empire State Building <br />
                                New York, NY 10001
                            </p>
                            <br />
                            {/* </div> */}
                            {/* <div className="lg:w-1/2 px-6 mt-4 lg:mt-0"> */}
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a
                                className="text-indigo-400 leading-relaxed"
                                href="mailto:no-reply@gmail.com">
                                no-reply@gmail.com
                            </a>
                            <br />
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>

                {/* Set up Form Response */}
                <ContactForm />
            </div>
        </section>
    )

}

export default Contact;