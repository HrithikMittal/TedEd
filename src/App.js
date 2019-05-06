import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css'
import Landingpage from './components/Landingpage';
import Navigationbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navigationbar/>
          <Route exact path="/" component = {Landingpage}/>
        <Footer/>  
        </BrowserRouter>
    </div>
  );
}

export default App;
