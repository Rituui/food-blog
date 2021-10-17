import React from "react";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <section id="About" className="about_section padding-top padding-bottom">
                <div className="container">
                    <div className="about-section-container">
                        <div className="about-caption">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="about-img-box">
                            <img src="https://i.pinimg.com/564x/50/ef/a3/50efa37e38b1760faf1b4112c44001c1.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About;