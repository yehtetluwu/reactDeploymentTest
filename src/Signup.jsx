import "./styles.css"
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class home extends Component {
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
        this.changeconfirmedPassword = this.changeconfirmedPassword.bind(this)
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
    changeconfirmedPassword(event){
        this.setState({
            confirmedPassword:event.target.value
        })
    }
    
    onSubmit(event){
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmedPassword: this.state.confirmedPassword,
        }
        axios.post('http://localhost:4000/signup', registered)
            .then(response => console.log(response.data))

        // window.location = '/'
        this.setState = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmedPassword:''
        }
    }

    render() {
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

                {/* Sign up */}
                <div className='center bg-transparent col-4'>
                    <h1 className='text-center'>Create your account</h1> 
                    <div className='form-div'>
                        <form className='signUp' onSubmit={this.onSubmit}>
                            <br></br>
                            <input type='text'
                            placeholder='First Name'
                            onChange={this.changeFirstName}
                            value={this.state.firstName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Last Name'
                            onChange={this.changeLastName}
                            value={this.state.lastName}
                            className='form-control form-group'
                            />

                            <input type='text'
                            placeholder='Email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='password'
                            placeholder='Confirm Password'
                            onChange={this.changeconfirmedPassword}
                            value={this.state.confirmedPassword}
                            className='form-control form-group'
                            />

                            <input type='submit' 
                            className='btn btn-danger btn-block'
                            value='Submit'
                            />
                            <br></br>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default home;