/* 
  File Name: layout.jsk
  Student's Name: Qihang Yang
  Student ID: 301277541
  Date: 2024-09-29
*/
import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
    return (
        <>
            <h1>My Portfolio</h1>
            <img src={"./public/logo.webp"} alt="logo" style={{ width: "65px" }} />
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link>| <Link
                to="/project">Project</Link>| <Link to="/contact">Contact</Link>
            </nav>
            <hr/>
            
            <footer> 
                <p>&copy; QihangYang-301277541. All rights reserved.</p>
            </footer>
        </>
    );
}
