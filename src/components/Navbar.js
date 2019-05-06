import React from 'react';
import '../App.css';
import { Nav, Navbar,Form,Button,FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const styletext ={
    fontSize: '25px'
}

 const Navigationbar = () =>{
  return (
     <div> 
    <Navbar expand="lg" style={{backgroundColor:'White'}}>
      <Link to='/'>
      <Navbar.Brand className="ml-5">
      <img
        alt="TedEd"
        src={logo}
        width="130"
        height="70"
        className="d-inline-block align-top ml-5s"
      />
      </Navbar.Brand>
      </Link>
</Navbar>
<Navbar expand="lg" style={{backgroundColor:'#FF2400'}}>

<Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to='/' className="ml-5 my-2 text-white" style={styletext}>DISCOVER</Link>
        <Link to='/aboutus' className="ml-5 my-2 text-white" style={styletext}>CREATE</Link>
        <Link to='/services' className="ml-5 my-2 text-white" style={styletext}>SUPPORT</Link>
      </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 w-50" hidden/>
      <Button className="formcontrol mr-5" style={{backgroundColor:'#FF2400',border:'none'}}><i className="fas fa-search" style={{fontSize:'25px'}}></i></Button>
    </Form>
      </Navbar.Collapse>
</Navbar>
</div>
  )
}

export default Navigationbar;