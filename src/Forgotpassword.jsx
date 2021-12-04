import "./styles.css"
import React from 'react'

function ForgotPassword() {
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

            {/* Forgot Password */}
            <div class="center bg-transparent col-4">
                <h1 class="text-center">Forgot your password?</h1>
                <h4 class="text-center" style="font-size: 14px;"> Please enter your email to reset your password</h4>
                <form class="signUp" action="index.html" method="POST">
                    <br/>
                    <input type="email" name="" placeholder="Email"/>
                    <input type="submit" name="" value="Reset Password" style="width: 150px;"/>
                    <br/>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword