import React from "react";
// import { ParallaxBanner } from 'react-scroll-parallax';

function About() {

    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="flex flex-row items-center">
                {/* <div className="lg:flex-grow wd:1-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                </div> */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 px-6">
                        <img
                            className="object-cover object-center rounded"
                            alt="company-logo"
                            src="images/logo.png"
                        />
                    </div>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-title text-sky-600 px-6">
                        Lighthouse Analytics
                    </h1>
                </div>
                <p className="mb-8 leading-relaxed">
                    Let us steer your data journey to safe havens
                </p>
                <div className="flex justify-center">
                    <a href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Us
                    </a>
                    <a href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Our Services
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;