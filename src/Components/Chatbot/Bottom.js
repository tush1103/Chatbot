import React from "react";
import './Bottom.css';
function Bottom(){
    return (
        <div className="bottom">
            <div className="btm">
                <div className="input">
                    <input type="text" id="input" placeholder="Enter your message"/>
                </div>
                <div className="btn">
                    <button onClick={handleInput}><i className="fas fa-paper-plane"></i>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Bottom;