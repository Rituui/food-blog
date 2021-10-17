import React, { useState } from "react";
import Footer from "./Footer";
import { useHistory } from "react-router";

const CreateBlog = () => {

    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [pic, setPic] = useState(
        "https://thumbs.dreamstime.com/b/fresh-ripe-lemons-leaves-wooden-board-over-black-stone-background-fresh-ripe-lemons-leaves-wooden-board-139808766.jpg"
    );
    const [errorMessage, setErrorMessage] = useState(null);

    const postDetails = (pics) => {

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "foodblog");
            data.append("cloud_name", "ddnjjmfyw");
            fetch("https://api.cloudinary.com/v1_1/ddnjjmfyw/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };



    async function handleClick(event) {
        event.preventDefault();

        const res = await fetch("https://food-blog-mern.herokuapp.com/createblog", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                title,
                description,
                pic
            })

        });
        const data = res.json();
        if (res.status === 422 || !data) {
            document.getElementById("error-text").style.padding = "10px";
            setErrorMessage("Please fill all the fields");

        }
        else {
            history.push("/blogs");
        }
    }

    return (
        <>
            <section id="About" className="about_section padding-top padding-bottom">
                <div className="container">
                    <div className="about-section-container">
                        <div className="about-caption">
                            <p className="alert-danger" id="error-text">{errorMessage}</p>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Enter the title for blog</label>
                                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" name="title" value={title} id="exampleFormControlInput1"></input>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Enter the description for blog</label>
                                    <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} name="description" value={description} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div>
                                    <input type="file" onChange={(e) => postDetails(e.target.files[0])} name="pic" style={{ marginBottom: "10px" }}></input>
                                </div>
                                <button className="btn custom-btn my-2 my-sm-0" onClick={handleClick} type="submit">Create Blog</button>
                            </form>
                        </div>
                        <div className="about-img-box">
                            <img src="https://i.pinimg.com/564x/ac/12/1c/ac121c0fdc152af3a081aa50cd21badf.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CreateBlog;