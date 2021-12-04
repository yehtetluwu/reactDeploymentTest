import "./styles.css"
import React from 'react'

function About() {
    return (
        <div className="container">
            {/* Header */}
               <header className="row">
                {/* Banner and Search Bar */}
                <div className="center col-12">
                    <div className="rowBanner">
                        <h1 className="siteName"><a className="siteNameLink" href="index.html">OurAnimeList</a></h1>
                        <div className="bar">
                            <form className="searchBar" action="index.html" method="POST">
                                <input type='text' name='' placeholder='Search'/>
                                <input type="submit" name="" value="Go"/>
                            </form>
                        </div>
                    </div>
                </div>
                {/* LogIn Box */}
                <div className=" center bg-transparent col-3">
                    <form className="loginBox" action="index.html" method="POST">
                        <input type="text" name="" placeholder="Username"/>
                        <input type="password" name="" placeholder="Password"/>
                        <input type="submit" name="" value="Login"/>
                        <hr style="border: 1px solid #996666; border-radius: 3px;"/>
                        <input type="button" name="" value="Sign Up"/>
                        <input type="button" name="" value="Forgot Password?"/>
                    </form>
                </div>
            </header>

            {/* Navigation */}
            <div class="row">
                <div class="navBox col-3">
                    <a href="about.html"><h6 class="center navText">ABOUT US</h6></a>
                </div>
                <div class="navBox col-3">
                    <div class="dropdown col-12">
                        <h6 class="center navText">RANKING</h6>
                        <div class="dropdown-content">
                            <a href="#">Top Shounen</a>
                            <a href="#">Top Shoujo</a>
                        </div>
                    </div> 
                </div>
                <div class="navBox col-3">
                    <h6 class="center navText">FORUM</h6>
                </div>
                <div class="navBox col-3">
                    <div class="dropdown col-12">
                        <a href="profile.html"><h6 class="center navText">PROFILE</h6></a>
                        <div class="dropdown-content">
                            <a href="#">Currently Watching</a>
                            <a href="#">Setting</a>
                        </div>
                    </div> 
                </div>
            </div>

            {/* Marquee */}
            <div class="row">
                <div class="col bgColor">
                    <marquee direction="right" scrollamount="10" height="100%" width="100%" style="font-size: 40px; background: none; margin: auto; height: 60px; padding: 0px; color: #464343; text-shadow: 0px 0px 8px pink; font-style: inherit;">We are Team DogeSmirk</marquee>
                </div>
            </div>

            {/* About our team */}
            <div class="rowBlock">
                <div class="colBlock">
                    <h2 style="font-size: 25px;">Doge is our mascot!</h2>
                </div>
            </div>
            <div class="row">
                <div class="col twoFifth bgColor">
                    
                    <img style="width: 100%; height: 100%; box-shadow: 0 0 3px black;" src="_images/dogesmirk.jpg" alt=""/>
                </div>
                <div class="col threeFourth bgColor">                    
                    <p style="font-weight: bold; font-size: 20px;">We pray to Lord Doge</p>
                    <p>Our members are</p>
                    <ul>
                        <li>DogeSmirker Monica (Leader)</li>
                        <li>DogeSmirker Rai</li>
                        <li>DogeSmirker Kim</li>
                        <li>DogeSmirker Leon</li>
                    </ul>

                    <h1 style="font-weight: bold; font-size: 20px;"> About our app </h1>
                    <p>We designed our app for discovering anime, tracking what the users are currently watching, checking the reviews of the anime users want to know and the discussions. You can think of it as IMDb but for anime. We took our inspirations from <a href="https://myanimelist.net/" target="_blank"><u>MyAnimeList</u>.</a></p>
                </div>
            </div>
        </div>
    );
}

export default About;