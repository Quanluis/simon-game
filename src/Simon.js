import React, { Component } from 'react';

class Simon extends Component{
    render(){
        return (
        <div>
        <div>
        <div className= "d-flex justify-content-center col-warning container border-dark">
           <div className="row hello border-dark">       
                <button className="col bg-success form-control-lg border-dark"> </button>
                <button className="col bg-danger form-control-lg border-dark"></button>
                <div className="w-100"></div>
                <button className="col bg-warning form-control-lg border-dark "> </button>
                <button className="col bg-primary form-control-lg border-dark"> </button>
            </div>
        </div>
        </div>   
        </div> 
        ); 
    }
}
export default Simon 