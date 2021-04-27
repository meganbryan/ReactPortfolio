import React from "react";
import Portfolio1 from "../assets/Portfolio_1.jpg";
import Portfolio2 from "../assets/Portfolio_2.jpg";
import Footer from "../components/Footer";

function AboutMe() {
    return (
        <div className = "aboutme">
            <nav className="navbar navbar-expand-lg navbar-dark text-light mb-5 opaque-navbar">
                <a className="navbar-brand" href="index.html"><h1>Megan Bryan</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-1">
                            <a className="nav-link" href="/">About Me<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mr-1">
                            <a className="nav-link" href="/portfolio">Portfolio<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mr-1">
                            <a className="nav-link" href="/contact">Contact<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="row">
                <div className="col-lg-2 col-sm-1">
                    {/* Empty column */}
                </div> 
                <div className="col-lg-8 col-sm-10 p-2 mb-4">
                    <div className="row p-3 container2">
                        <div className="col-lg-5 col-md-6 col-sm-12 float-left">
                            <img className="img-fluid rounded grayscale" src={Portfolio2} width="max" alt="" />
                        </div>
                        <div className = "col-lg-7 col-md-6 col-sm-12 transparent rounded container2">
                            <div className="header">
                                <h1 className="m-3 text-right">About Me</h1>
                            </div>
                            <p className= "m-3 text-right">
                                I am a current Web Development student, based just outside of Los Angeles, CA. I also have a Bachelor's Degree in Physics, with minor studies in Math and Astronomy, from the University of Redlands (located in Redlands, CA).
                            </p>
                            <p className= "m-3 text-right">
                                My professional background is in STEM Education and Aquatic Athletics instruction. I'm hoping to make a 'splash' in the Web Development community, and someday return to Education to pass on my experience to the next generation of Young Women in STEM.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-1">
                    {/* Empty column */}
                </div> 
            </div>
            <div className="row mb-3">
                <div className="col-lg-2 col-sm-1">
                    {/* Empty column */}
                </div> 
                <div className="col-lg-8 col-sm-10 p-2 mb-5">
                    <div className="row p-3 container2">
                        <div className="col-lg-7 col-md-6 col-sm-12 transparent rounded container2">
                            <div className="header">
                                <h1 className="m-3 mb-4 text-left">Inquiries</h1>
                            </div>
                            <p className= "m-3 text-left">
                                If you are interested in viewing my full body of work, please visit my <a className = "link" href="https://github.com/meganbryan">Github Profile</a>, or for samples, refer to the <a className = "link" href="/portfolio">Portfolio Page</a> of my website. I am also on <a className = "link" href="https://www.linkedin.com/in/megan-bryan-webdevelopment/">LinkedIn</a>, and my full resume is available <a className = "link" href="./assets/Resume-MB.pdf">here</a>. 
                            </p>
                            <p className= "m-3 text-left">
                                If you require any additional information, please reach out via my contact page, where you can also find my most current information. I look forward to future collaborations with you!
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 container2 float-left">
                            <img className="img-fluid rounded grayscale" src={Portfolio1} width="500" height="500" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-1">
                    {/* Empty column */}
                </div> 
            </div>
            <Footer />
        </div>
    );
}

export default AboutMe;