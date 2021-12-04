import "./styles.css"
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import {Helmet} from "react-helmet"

class Home extends Component {
    constructor() {
        super()
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }
    changeLastName(event){
        this.setState({
            lastName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    
    onSubmit(event){
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://localhost:4000/signup', registered)
            .then(response => console.log(response.data))

        // window.location = '/'
        this.setState = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    }

    render() {
        return (
            <div className="container">
                {/* Header */}
                <header className="row">
                    {/* Banner and Search Bar */}
                    <div className="center col-9">
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
                            <hr style={{border:'1px solid #996666'}}/>
                            <input type="button" name="" value="Sign Up"/>
                            <input type="button" name="" value="Forgot Password?"/>
                        </form>
                    </div>
                </header>

                {/* Navigation */}
                <div className="row">
                    <div className="navBox col-3">
                        <a href="about.html"><h6 className="center navText">ABOUT US</h6></a>
                    </div>
                    <div className="navBox col-3">
                        <div className="dropdown col-12">
                            <h6 className="center navText">RANKING</h6>
                            <div className="dropdown-content">
                                <a href="#">Top Shounen</a>
                                <a href="#">Top Shoujo</a>
                            </div>
                        </div> 
                    </div>
                    <div className="navBox col-3">
                        <h6 className="center navText">FORUM</h6>
                    </div>
                    <div className="navBox col-3">
                        <div className="dropdown col-12">
                            <a href="profile.html"><h6 className="center navText">PROFILE</h6></a>
                            <div className="dropdown-content">
                                <a href="#">Currently Watching</a>
                                <a href="#">Setting</a>
                            </div>
                        </div> 
                    </div>
                </div>

                {/* Carousel */}
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./_images/blueperiod.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./_images/k-on.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="././_images/gintama.jpg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Personal Suggestions */}
                <div className="row">
                    <div className="col">
                        <h3 className="floatingTitle">Your Personal Anime Suggestions</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid" src="./_images/oddtaxi.jpg" alt=""/>
                    </div>
                    <div className="col-8">
                        <p>Odd Taxi is set in an anthropomorphic animal world and tells the narrative of Odokawa, a 41-year-old walrus taxi driver whose parents abandoned him while he was in elementary school, leaving him socially awkward. However, he generally has chats with various animal occupants while riding in his cab around Tokyo, where the story is set. Odokawa's interactions with these individuals lead to a series of riddles and acts of violence, including the disappearance of a high school student. The police have been following leads back to him as a result of the missing girl case, and both the yakuza and policemen are now on his tail.</p>
                            <p><b>Original Run:</b> April 6, 2021 - June 29, 2021</p>
                            <p><b>Episodes:</b> 13</p>
                    </div>
                </div>

                {/* Shounen Suggestions */}
                <div className="row">
                    <div className="col">
                        <h3 className="floatingTitle">Shounen Suggestions</h3>
                    </div>
                </div>
                <div className="horizontal-scroll">
                    <div className="row flex-row flex-nowrap">
                        <div className="center col-2">
                                <img className="img-fluid" src="./_images/naruto.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                                <img className="img-fluid" src="./_images/demonslayer.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                                <img className="img-fluid" src="./_images/myheroacademia.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                                <img className="img-fluid" src="./_images/FMA.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                                <a href="animepage.html"><img className="img-fluid" src="./_images/jujutsukaisen.jpg" alt=""/></a>
                        </div>
                        <div className="center col-2">
                            <a href="animepage.html"><img className="img-fluid" src="./_images/jujutsukaisen.jpg" alt=""/></a>
                        </div>
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/FMA.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                                <a href="animepage.html"><img className="img-fluid" src="./_images/jujutsukaisen.jpg" alt=""/></a>
                        </div>
                        <div className="center col-2">
                            <a href="animepage.html"><img className="img-fluid" src="./_images/jujutsukaisen.jpg" alt=""/></a>
                        </div>
                    </div>
                </div>

                {/* Shoujo Suggestions */}
                <div className="row">
                    <div className="col">
                        <h3 className="floatingTitle">Shoujo Suggestions</h3>
                    </div>
                </div>
                <div className="horizontal-scroll">
                    <div className="row flex-row flex-nowrap">
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/shogochara.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/nozakikun.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/fruitsbasket.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/sailormoon.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/horimiya.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/fruitsbasket.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/sailormoon.jpg" alt=""/>
                        </div>
                        <div className="center col-2">
                            <img className="img-fluid" src="./_images/horimiya.jpg" alt=""/>
                        </div>
                    </div>
                </div>

                <Helmet>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" 
                type="text/javascript"/>
                </Helmet>

            </div>
        )
    }
}

export default Home;