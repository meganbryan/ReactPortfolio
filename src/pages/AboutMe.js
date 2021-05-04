import React from "react";
import Portfolio1 from "../assets/Portfolio_1.jpg";
import Portfolio2 from "../assets/Portfolio_2.jpg";
import Resume from "../assets/Resume-MB.pdf";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function AboutMe() {
    return (
        <div className = "aboutme">
            <Navbar />
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
                                "I am a current Web Development student, based just outside of Los Angeles, CA. I also have a Bachelor's Degree in Physics, with minor studies in Math and Astronomy, from the University of Redlands (located in Redlands, CA)."
                            </p>
                            <p className= "m-3 text-right">
                                "My professional background is in STEM Education and Aquatic Athletics instruction. I'm hoping to make a 'splash' in the Web Development community, and someday return to Education to pass on my experience to the next generation of Young Women in STEM."
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
                                If you are interested in viewing my full body of work, please visit my <a className = "link" href="https://github.com/meganbryan">Github Profile</a>, or for samples, refer to the <Link to = "/portfolio" className = "link">Portfolio Page</Link> of my website. I am also on <a className = "link" href="https://www.linkedin.com/in/megan-bryan-webdevelopment/">LinkedIn</a>, and my full resume is available <a className = "link" href={Resume} target = "_blank" rel="noreferrer">here</a>. 
                            </p>
                            <p className= "m-3 text-left">
                                If you require any additional information, please reach out via my <Link to = '/contact' className = "link"> contact page </Link>, where you can also find my most current information. I look forward to future collaborations with you!
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