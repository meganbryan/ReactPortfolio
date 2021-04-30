import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioCard from "../components/PorfolioCard";
import { projects } from "../PortfolioInfo";

function Portfolio() {
    return (
        <div className = "portfolio">
            <Navbar />
            <div>
                <div className="container mb-5">
                    <div className="row">
                        <div id = "screenshots" className="row">
                        {projects.map((project) => {
                            return (
                                <PortfolioCard title={project.title} description={project.description} image={project.image} href={project.href} />
                            )
                        })} 
                        </div>
                    </div>
                    <p className = "ml-4 mt-2 text-center">Click on any image above to navigate to the deployed application.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;