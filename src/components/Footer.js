import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import MediaQuery from 'react-responsive';


const icon = {
    fontSize:'25px'
}

export default function Footer() {
  return (
      <div>
           <MediaQuery query="(min-device-width: 1224px)">
    <footer className="page-footer footer-sticky p-4" style={{fontFamily: 'Ubuntu, sans-serif',backgroundColor:'White',width:'100%',bottom: '0'}}>
    
    <div className="container-fluid text-center text-md-left text-dark ">

      <div className="row">

        <div className="col-md-6 mb-md-0 mb-3" style={{fontSize:'14px'}}>
                <Link to='/'>
                        <img
                            alt="TedEd"
                            src={logo}
                            width="48"
                            height="26"
                            className="d-inline-block ml-5s"
                        />
                </Link>

                <Link className="text-dark mx-2 ml-3" to="/#!">Help</Link>
                <Link className="text-dark mx-2" to="#!">Contact</Link>
                <Link className="text-dark mx-2"  to="/#!">Blog</Link>
                <Link className="text-dark mx-2" to="/#!">Get Involved</Link>
                <Link className="text-dark mx-2" to="/#!">About</Link>
                <Link className="text-dark mx-2" to="#!">Educators</Link>
                <Link className="text-dark mx-2" to="/#!">Patrons</Link>
            
        </div>
        <div className="d-flex justify-content-end ">
                <div>
                <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-twitter icons"></i></Link>
                <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-linkedin-in icons"></i></Link>
                <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-instagram icons"></i></Link>
                <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-facebook-f icons"></i></Link>
                <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-youtube icons"></i></Link>
                <div class="input-group mt-3 d-inline-flex" style={{width:'400px', border: '1px solid grey'}}>
                    <input type="email" class="form-control" placeholder="Subscribe to our news"/>
                    <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Send</button>
                </div>
        </div>
                </div>
        </div>

      </div>
    </div>
  </footer>
  </MediaQuery>
  
  <MediaQuery query="(max-device-width: 1224px)">
  <footer className="page-footer footer-fixed " style={{fontFamily: 'Ubuntu, sans-serif',backgroundColor:'White'}}>
    
    <div className="container-fluid text-dark">

      <div className="row">
            
        <div align="center" className="mt-2">  
        <div className="col-md-6 mb-md-0 mb-3" style={{fontSize:'14px'}}>
                <Link to='/'>
                        <img
                            alt="TedEd"
                            src={logo}
                            width="48"
                            height="26"
                        />
                </Link>
                <Link className="text-dark mx-2" to="/#!">Help</Link>
                <Link className="text-dark mx-2" to="#!">Contact</Link>
                <Link className="text-dark mx-2"  to="/#!">Blog</Link>
                <Link className="text-dark mx-2" to="/#!">Get Involved</Link>
                <Link className="text-dark mx-2" to="/#!">About</Link>
                <Link className="text-dark mx-2" to="#!">Educators</Link>
                <Link className="text-dark mx-2" to="/#!">Patrons</Link>
            
        </div>
        </div>
        <div className="col-md-6 mb-md-0 mb-3">
                <div align="center">
                    <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-twitter"></i></Link>
                    <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-linkedin-in"></i></Link>
                    <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-instagram"></i></Link>
                    <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-facebook-f"></i></Link>
                    <Link className="text-dark mx-3" to='/' style={icon}><i className="fab fa-youtube"></i></Link>
                </div>    
                <div align="center">
                <div class="input-group mt-3" style={{width:'300px',border: '1px solid grey'}}>
                    <input type="email" class="form-control" placeholder="Subscribe to our news"/>
                    <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Send</button>
                </div>
                </div>
 </div>
        </div>

      </div>
    </div>
  </footer>
  
  
  </MediaQuery>
    </div>

)
}
