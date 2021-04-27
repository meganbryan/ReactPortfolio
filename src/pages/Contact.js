import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
    return (
        <div className = "contact">
            <Navbar />
            <div className="row">
                <div className="col-lg-1 col-md-0">
                    {/* Empty Column */}
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="container px-3 pt-3 pb-5 mb-5">
                        <div className="page-header">
                            <h1 className="m-3">Request Information</h1>
                        </div>
                        <form className="m-2">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="name" className="form-control bg-secondary border-light text-white" id="exampleFormControlInput1" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control bg-secondary border-light text-white" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control bg-secondary border-light text-white" id="exampleFormControlTextarea1" rows="10.75"></textarea>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input bg-secondary border-light" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">I would like a response</label>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
                <div className = "col-lg-5 col-md-6 col-sm-12">
                    <div className="container p-3 mb-5">
                        <h1 className = "ml-4 pl-4">Contact Me:</h1>
                        <div className = "row p-2">
                        <div className = "col-4 text-center">
                            <a href="mailto:meganmbryan12@gmail.com"><i className="fas fa-envelope-square link-icon fa-6x"></i></a>
                        </div>
                        <div className = "col-4 text-center">
                            <a href = "https://github.com/meganbryan"><i className="fab fa-github-square link-icon fa-6x"></i></a>
                        </div>
                        <div className = "col-4 text-center">
                            <a href = "https://www.linkedin.com/in/megan-bryan-webdevelopment/"><i className="fab fa-linkedin link-icon fa-6x"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-md-0">
                    {/* Empty Column --> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;