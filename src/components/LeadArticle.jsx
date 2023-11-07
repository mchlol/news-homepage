import React from "react";
import imageDesktop from '../assets/image-web-3-desktop.jpg'
import imageMobile from '../assets/image-web-3-mobile.jpg'

export default function LeadArticle() {
    return (
        <article className="lead-article">

            <picture>
                <source media="(max-width:730px)" srcSet={imageMobile} />
                <img className="lead-article--img" src={imageDesktop} alt="a colourful wooden puzzle" />
            </picture>

            <div className="lead-article--content">

                <a href="#" className="lead-article--header">
                    <h1>The Bright Future of Web 3.0?</h1>
                </a>

                <div className="lead-article--text">

                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                    <button>Read more</button>

                </div>

            </div>
        </article>
    )
}