import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="company-logo">
                                <h1>Kreative.</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="about-container">
                                <h4>About</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="quick-links-container">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/blogs">Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/createblog">Create Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="Contact-us">
                                <h4>Contact Us</h4>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Enter your message" aria-label="Search"></input>
                                    <button className="btn my-2 my-sm-0" type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default footer;