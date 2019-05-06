import React from 'react';
import MediaQuery from 'react-responsive';

const Landingpage = () =>{
  return (
    <div  style={{height:'770px', marginTop:'2%'}}>
          <MediaQuery query="(min-device-width: 1224px)">
      <div className="container animated zoomIn">
        <h1 style={{color:'Black'}}>You have ideas<br/> worth spreading.</h1>
        <div>
          <button className="btn btn-primary mt-4 animated fadeIn delay-1s stylebtn">Students Start Here</button>
          <button className="btn btn-primary mt-4 ml-3 animated fadeIn delay-2s stylebtn">Educators Start Here</button>
        </div>
      </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
      <div className="container animated zoomIn" style={{marginTop:'50px'}}>
        <h2 className="font-weight-bold" style={{color:'Black'}} align='center'>You have ideas<br/> worth spreading.</h2>
        <div align="center">
        <div align="center">
          <button className="btn btn-primary mt-4 animated fadeIn delay-1s stylebtn">Students Start Here</button>
          </div>
          <div align="center"> 
          <button className="btn btn-primary mt-4 animated fadeIn delay-2s stylebtn">Educators Start Here</button>
          </div>
        </div>
      </div>
    </MediaQuery> 
    </div>
  )
}

export default Landingpage;