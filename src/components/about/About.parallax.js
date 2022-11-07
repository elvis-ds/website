import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

function About() {

    return (
        <section id="about">
            <div className="static">
                <ParallaxBanner
                    id="parallax-banner"
                    layers={[
                        {
                            image: "/images/parallax/bg-1.jpg",
                            translateY: [0, 50],
                            shouldAlwaysCompleteAnimation: true,
                            expanded: false,
                        },
                        {
                            image: "/images/parallax/bg-2.png",
                            translateY: [5, 45],
                            shouldAlwaysCompleteAnimation: true,
                            expanded: false,
                        },
                        {
                            image: "/images/parallax/bg-3.png",
                            translateY: [10, 30],
                            shouldAlwaysCompleteAnimation: true,
                            expanded: false,
                        },
                        {
                            image: "/images/parallax/bg-4.png",
                            translateY: [15, 25],
                            shouldAlwaysCompleteAnimation: true,
                            expanded: false,
                        },
                        {
                            image: "/images/parallax/bg-5.png",
                            translateY: [20, 20],
                            shouldAlwaysCompleteAnimation: true,
                            expanded: false,
                        },
                    ]}
                    style={{
                        aspectRatio: "3/1",
                    }}
                >
                </ParallaxBanner>
                <div className="absolute bottom-0 left-0">
                    <img
                        alt="company-logo"
                        src="images/logo.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default About;