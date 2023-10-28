import React from "react";
import image from '../assets/image-web-3-desktop.jpg'

export default function LeadArticle() {
    return (
        <article className="lead-article">

            <img className="lead-article--img" src={image} alt="a colourful wooden puzzle" />

            <div className="lead-article--content">

                <h1 className="lead-article--header">The Bright Future of Web 3.0?</h1>

                <div className="lead-article--text">

                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                    <button>Read more</button>

                </div>

            </div>
        </article>
    )
}