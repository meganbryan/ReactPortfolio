import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioCard from "../components/PorfolioCard";
import { projects } from "../PortfolioInfo";

function Portfolio() {
    return (
        <div class = "portfolio">
            <Navbar />
            <div>
                <div class="container mb-5">
                    <div class="row">
                        <div id = "screenshots" class="row">
                        {projects.map((project) => {
                            return (
                                <PortfolioCard  title={project.title} description={project.description} image={project.image} href={project.href} />
                            )
                        })} 
                        </div>
                    </div>
                    <p class = "ml-4 mt-2 text-center">Click on any image above to navigate to the deployed application.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;