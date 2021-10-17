import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const SingleBlog = (props) => {
    const id = props.match.params.id;
    const [singleBlog, setSingleBlog] = useState({});

    const fetchData = async () => {
        try {
            const res = await fetch(`https://food-blog-mern.herokuapp.com/blogs/${id}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            const data = await res.json();
            console.log(data);
            setSingleBlog(data);

        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className="single_post_section">
                <div className="container">
                    <h2>{singleBlog.title}</h2>
                    <p>{singleBlog.description}</p>
                    <img src={singleBlog.pic}></img>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SingleBlog;