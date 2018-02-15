import React, { Component } from 'react';

const buttonGreen = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"); 
const buttonRed = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"); 
const buttonYellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"); 
const buttonBlue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"); 
const soundBoard = [buttonGreen, buttonRed, buttonYellow, buttonBlue];
 

class Simon extends Component{
    render(){
        return (
        <div>
        <div>
        <div className= "d-flex justify-content-center col-warning container border-dark">
           <div className="row hello border-dark">       
                <button onClick = {() => buttonGreen.play()} className="col bg-success form-control-lg border-dark"> </button>
                <button onClick ={() => buttonRed.play()} className="col bg-danger form-control-lg border-dark"></button>
                <div className="w-100"></div>
                <button onClick ={() => buttonYellow.play()} className="col bg-warning form-control-lg border-dark"> </button>
                <button onClick = {()=> buttonBlue.play()} className="col bg-primary form-control-lg border-dark"> </button>
            </div>
        </div>
        </div>   
        </div> 
  

    
        ); 
    }
}

export default Simon 