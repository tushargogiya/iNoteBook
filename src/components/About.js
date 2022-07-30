import React from 'react'
import tushar from '../images/tushar.jpg'
import about from '../images/about.jpg'
import { Link } from "react-router-dom";


export function About() {
  const myStyle={
    "backgroundColor": "grey" ,
    "backgroundSize": 'cover',
    "backgroundRepeat": 'no-repeat',
    "color":"white"
};
    return (
        <div style={myStyle} >
           
           <div className="container">
           <img style={{"height":"200px"}} src={about} alt="" />

           </div>
            <div className="text-white aboutImg text-center">
                <div className="note-img">
                    <h1 className="display-4">Empowering  Students</h1>
                    <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Make something <span style={{ color: "#9C27B0" }}>Awesome</span> </h2>
                        <p>iNotebook is made from the pain of writing all the things in notebook which is very hectic :(, So we mad an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee.
                            you can also access your notes anywhere in your world, at anytime time . So dont forget to Create note because creating anything is always important
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                         
                        </div>
                    </div>
                    <div className="col-md-6">
                      
                    </div>
                </div>

                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                       
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={{ color: "#9C27B0" }}>internet’s visuals</span> </h2>
                        <p>
                            How we started? The concept was simple. iNotebook was born from the pain of writing all the things in notebook which is very hectic :( .
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                           
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#9C27B0" }}>i</span>Notebook</span>
                        </div>
                        <div className="media-icons">
                            <Link to="/"><i className="fab fa-facebook-f mx-2"></i></Link>
                            <Link to="/"><i className="fab fa-twitter mx-2"></i></Link>
                            <Link to="/"><i className="fab fa-instagram mx-2"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in mx-2"></i></Link>
                            <Link to="/"><i className="fab fa-youtube mx-2"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new">New Notes</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/">Get started</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><Link to="/">Your Notes</Link></li>
                            <li><Link to="/new">New Note</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="/login">Sign-in</Link></li>
                            <li><Link to="/register">Join Free</Link></li>
                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">About Creator</li>
                           <div className="container">
                            <img style={{"height":"160px"}} src={tushar} alt="" />
                          
                            <p>Hey ! Tushar gogiya this side
                              Contact:-
                              Email : tushargogiya97@gmail.com
                            </p>
                           </div>
                        </ul>
                        
                      
                        <ul className="box input-box">
                            <li className="link_name">About iNotebook</li>
                            <li style={{color: "#F7FFFF"}}>
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text mx-5">Copyright © 2022 <Link to="/">iNotebook</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

