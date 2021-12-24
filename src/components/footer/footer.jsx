import './footer.css';
import React from 'react'
import Logo from "../../assets/logo/Multitasker-Logo-Final-Black.png";

export default function Footer () {
    return (
        <>
            <footer>
                <div class="content">
                    <div class="top">
                        <div class="logo-details">
                            <img src={ Logo } alt="logo" width="150" />
                            {/* <span class="logo_name">Multitasker</span> */ }
                        </div>
                        <div class="media-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="link-boxes">
                        <ul class="box">
                            <li class="link_name">Company</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/#about">About us</a></li>
                            <li><a href="/#work">Get started</a></li>
                        </ul>
                        <ul class="box">
                            <li class="link_name">Services</li>
                            <li><a href="/category">Graphic design</a></li>
                            <li><a href="/category">Handyman</a></li>
                            <li><a href="/category">Plumbing</a></li>
                            <li><a href="/category">Landscaper</a></li>
                            <li><a href="/category">And Many More</a></li>

                        </ul>
                        <ul class="box">
                            <li class="link_name">Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                        <ul class="box">
                            <li class="link_name">Courses</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Photoshop</a></li>
                        </ul>
                        <ul class="box input-box">
                            <li class="link_name">Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div class="bottom-details">
                    <div class="bottom_text">
                        <span class="copyright_text">Copyright © 2021 <a href="#">Multitasker.</a>All rights reserved</span>
                        <span class="policy_terms">
                            <a href="/terms-and-conditions">Privacy policy</a>
                            <a href="/terms-and-conditions">Terms & condition</a>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )

}