import React, {Component} from "react";

class Options extends Component {
    render() {
        return (
            <div> 
                <div className = "row flex-d justify-content-center footer rounded">           
                    <button className = "button1 bg-white rounded">Start</button>
                      <h2 className = "text-white">0</h2>
                    <button className = "button2 bg-white rounded">Strict</button>
                </div>
            </div> 
        );

    }

}
export default Options
