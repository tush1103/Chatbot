import React from "react";
import image from "../../img/bot_image.jpg";
import './Header.css';
function Header(props){
  const checkStatus=(event)=>{
    let isActive=true;
    if(props.dateTime==='Thursday, May 20 2022'){
      isActive=false;
    }
    const status=document.querySelector('.status');
    if(isActive===true){
      status.innerHTML='Active';
      status.style.color='green';
    }
    else{
      status.innerHTML='Not Active';
      status.style.color='red';
    }
  }
  const handleInput=()=>{
    const botMessage=document.querySelector("#message1");
    const userMessage=document.querySelector("#message2");

    let badWords=['fuck|bad|stupid|useless|bitch|crazy|nonesense'];
    let words=new RegExp(badWords);
    
    
  }
    return (
      <>
        <div className='header'>
            <div className='img'>
              <img src={image} alt=""/>
            </div>
            <div className='right'>
              <div className='name'>Chatbot</div>
              <div className='status'>Active</div>
            </div>
        </div>
        <div className="chatbot_main">
        <div className="main_content">
            <div className="messages">
                <div className="bot-message" id='message1'></div>
                <div className="human-message" id='message2'></div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Header;