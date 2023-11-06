import React from "react";
import img1 from '../assets/image-retro-pcs.jpg'
import img2 from '../assets/image-top-laptops.jpg'
import img3 from '../assets/image-gaming-growth.jpg'


export default function Featured() {
    return (
        <section className="featured">
            <div className="featured--content">
                <img className="featured--img" src={img1} alt=""/>
                <div className="featured--text">
                    <h2>01</h2>
                    <a href="#">
                        <h3>Reviving Retro PCs</h3>
                    </a>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>

            <div className="featured--content">
                <img className="featured--img" src={img2} alt="" />
                <div className="featured--text">
                    <h2>02</h2>
                    <a href="#">
                        <h3>Top 10 Laptops of 2022</h3>
                    </a>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>

            <div className="featured--content">
                <img className="featured--img" src={img3} alt="" />
                <div className="featured--text">
                    <h2>03</h2>
                    <a href="#">
                        <h3>The Growth of Gaming</h3>
                    </a>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </section>
    )
}