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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#e9ab53"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
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