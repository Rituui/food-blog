import React from "react";
import { useHistory } from "react-router";
import Footer from "./Footer";

const Index = () => {
    const history = useHistory();
    return (
        <>
            <section id="Home" className="home_section padding-bottom">
                <div className="hero container-fluid">
                    <div className="hero-img-box">
                        <img src="https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/07/food-photography-tips-photojaanic-3-1.jpg"></img>
                    </div>
                    <div className=" container hero-heading-container ">
                        <h1 className="main-heading">Kreative.</h1>
                        <p>Create your first blog with kreative platform your first blog with kreative platform. </p>
                        <div className="hero-buttons">
                            <button className="btn hero-button1 my-2 my-sm-0" type="submit" onClick={() => { history.push("/blogs") }}>All Blogs</button>
                            <button className="btn hero-button2 my-2 my-sm-0" type="submit" onClick={() => { history.push("/createblog") }}>Create Blog</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="About" className="about_section padding-bottom">
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

            <section id="Blogs" className="blog_section padding-bottom">
                <div className="container">
                    <h2>Popular Posts</h2>
                </div>
                <div className="blogs-container">
                    <div className="blogs-box">
                        <div className="blogs-box-img">
                            <img src="https://i.dailymail.co.uk/i/pix/2017/04/24/17/3F90957C00000578-4440854-image-a-109_1493051334010.jpg" alt=""></img>
                        </div>
                        <div className="blogs-caption">
                            <h3>Springy Vegetable</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                    <div className="blogs-box">
                        <div className="blogs-box-img">
                            <img src="https://i.pinimg.com/564x/a8/ba/c9/a8bac9282e4fbdb8bb759d0c4050058d.jpg" alt=""></img>
                        </div>
                        <div className="blogs-caption">
                            <h3>Tasty pasta</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                    <div className="blogs-box">
                        <div className="blogs-box-img">
                            <img src="https://i.pinimg.com/564x/8d/f2/53/8df25313d9f00480fcb47fff2e9fea3c.jpg" alt=""></img>
                        </div>
                        <div className="blogs-caption">
                            <h3>Vegetable Biryani</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Index;