import React from 'react';
import logo from '../assets/logo.svg'

export default function NavBar() {

    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

    // if window is wider than 700px mobileNavOpen must be false

    return (
        <nav>
            <a href="#">
                <img src={logo} alt="" />
            </a>

            <button 
            className="burger"
            onClick={() => {
                setMobileNavOpen(!mobileNavOpen);
            }}
            >
                <span class="material-symbols-outlined">
                    menu
                </span>
            </button>

            <div className={mobileNavOpen ? 'nav-menu visible' : 'nav-menu hidden'}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </div>

        </nav>
    )
}