import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "./Footer"


const Blog = () => {

    const history = useHistory();
    const [blogs, setBlogsData] = useState([]);

    const callToBlogs = async () => {
        try {
            const res = await fetch("/blogs", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "content-type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setBlogsData(data);
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        callToBlogs();
    });

    return (
        <>

            <section id="Blogs" className="blog_section padding-top padding-bottom">
                <div className="container">
                    <h2>Popular Posts</h2>
                </div>
                <div className="blogs-container">
                    {
                        blogs.map(blog =>
                            <div className="blogs-box">
                                <div className="blogs-box-img">
                                    <img src={blog.pic} alt=""></img>
                                </div>
                                <div className="blogs-caption">
                                    <h3>{blog.title.substring(0, 20)}</h3>
                                    <p>{blog.description.substring(0, 30)}</p>
                                    <i class="fas fa-arrow-circle-right" onClick={() => { history.push(`/blogs/${blog._id}`) }}></i>
                                </div>
                            </div>
                        )
                    }

                </div>
            </section>

            <Footer />

        </>
    )
}

export default Blog;