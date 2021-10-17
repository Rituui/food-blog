import React from "react";
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
            <section id="Contact" className="contact_section padding-top padding-bottom">
                <div className="container">
                    <h2>Contact Us</h2>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn my-2 my-sm-0" type="submit">Send Message</button>
                </form>
            </section>

            <Footer />


        </>
    )
}

export default Contact;