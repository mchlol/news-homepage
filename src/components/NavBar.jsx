import React from 'react';
import logo from '../assets/logo.svg'

export default function NavBar() {
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>

        </nav>
    )
}