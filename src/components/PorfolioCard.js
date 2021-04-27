import React from "react";

function PortfolioCard({title, description, image, href}) {
    return (
        <div target="_blank" class = "container2 col-lg-4 col-md-6 col-sm-12 rounded mt-4">
            <a data-image = "1" class = "screenshotLink" href = {href}><img class="shadow-lg img-fluid rounded" id = "photo-1" src={image} width="350" height="350" alt=""/>
                <div id = "text-1" class="hide centered p-2 text-background link-alt">
                    <h2>{title}</h2>
                    <p><em>{description}</em></p>
                </div>
            </a>
        </div>
    );
}

export default PortfolioCard;