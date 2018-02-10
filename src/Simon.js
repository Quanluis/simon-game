import React, { Component } from 'react';

class Simon extends Component{
    render(){
        return (
        <div>
        <div className= "d-flex justify-content-center col-warning">
           <div className="row hello">           
                <div className="col bg-success form-control-lg">col</div>
                <div className="col bg-danger form-control-lg">col</div>
                <div className="w-100"></div>
                <div className="col bg-warning form-control-lg ">col</div>
                <div className="col bg-primary form-control-lg">col</div>
            </div>
        </div>   
        </div> 
        );
    }
}
export default Simon 