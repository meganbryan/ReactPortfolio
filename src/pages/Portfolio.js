import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Portfolio() {
    return (
        <div class = "portfolio">
            <Navbar />
            <div>
                <div class="container mb-5">
                    <div class="row">
                        <div id = "screenshots" class="row">
                            <div target="_blank" class = "container2 col-lg-4 col-md-6 col-sm-12 rounded mt-4">
                                <a data-image = "1" class = "screenshotLink" href = "https://track-star-2021.herokuapp.com/"><img class="shadow-lg img-fluid rounded" id = "photo-1" src="./Assets/groupproject_ss.jpeg" width="350" height="350" alt=""/>
                                    <div id = "text-1" class="hide centered p-2 text-background link-alt">
                                        <h2>Track Star</h2>
                                        <p><em>All your deliveries, organized in a flash</em></p>
                                    </div>
                                </a>
                            </div>
                            <div target="_blank" class = "container2 col-lg-4 col-md-6 col-sm-12 rounded mt-4">
                                <a  data-image = "2" class = "screenshotLink" href = "https://meganbryan.github.io/WeatherDashboard/"><img class="rounded img-fluid shadow-lg" id = "photo-2" src="./Assets/SS_1.jpeg" width="350" height="350" alt=""/>
                                    <div id = "text-2" class="hide centered p-2 text-background link-alt">
                                        <h2>Weather Dashboard</h2>
                                        <p><em>Should you pack a jacket? Enter your city here.</em></p>
                                    </div>
                                </a>
                            </div>
                            <div target="_blank" class = "container2 col-lg-4 col-md-6 col-sm-12 rounded mt-4">
                                <a  data-image = "3" class = "screenshotLink" href = "https://meganbryan.github.io/WeatherDashboard/"><img class="rounded img-fluid shadow-lg" id = "photo-3" src="./Assets/SS_2.jpeg" width="350" height="350" alt=""/>
                                    <div id = "text-3" class="hide centered p-2 text-background link-alt">
                                        <h2>Weather Dashboard</h2>
                                        <p><em>Should you pack a jacket? Enter your city here.</em></p>
                                    </div>
                                </a>
                            </div>
                            <div target="_blank" class = "container2 col-lg-4 col-md-6 col-sm-12 rounded mt-4">
                                <a  data-image = "4" class = "screenshotLink" href = "https://meganbryan.github.io/WorkDayScheduler/"><img class="rounded img-fluid shadow-lg" id = "photo-4" src="./Assets/SS_3.jpeg" width="350" height="350" alt=""/>
                                    <div id = "text-4" class="hide centered p-2 text-background link-alt">
                                        <h2>Work Day Scheduler</h2>
                                        <p><em>Make your nine-to-five scheduling simpler.</em></p>
                                    </div>
                                </a>
                            </div>
                            <div target="_blank" class = "container2 col-lg-4 col-md-6 col-sm-12 rounded mt-4">
                                <a  data-image = "5" class = "screenshotLink" href = "https://github.com/meganbryan/EmployeeSummaryTemplate"><img class="rounded img-fluid shadow-lg" id = "photo-5" src="./Assets/SS_7.jpeg" width="350" height="350" alt=""/>
                                    <div id = "text-5" class="hide centered p-2 text-background link-alt">
                                        <h2>Employee Summary Template</h2>
                                        <p><em>Keep track of employee info using this node application.</em></p>
                                    </div>
                                </a>
                            </div>
                            <div target="_blank" class = "container2 col-lg-4 col-md-6 col-sm-12 rounded mt-4">
                                <a  data-image = "6" class = "screenshotLink" href = "https://meganbryan.github.io/CodeQuiz/"><img class="rounded img-fluid shadow-lg" id = "photo-6" src="./Assets/SS_8.jpeg" width="350" height="350" alt=""/>
                                    <div id = "text-6" class="hide centered p-2 text-background link-alt">
                                        <h2>Code Quiz</h2>
                                        <p><em>"Check your knowledge of chemistry (and my knowledge of coding)."</em></p>
                                    </div>
                                </a>
                            </div>
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