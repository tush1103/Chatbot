import './App.css';
import Bottom from './Components/Chatbot/Bottom';
import Header from './Components/Chatbot/Header';
import { useState } from 'react';
function App() {
  const date=new Date();
  const hours=date.getHours();
  const seconds=date.getSeconds();
  const day=date.getDay();
  const month=date.getMonth();
  const year=date.getFullYear();
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months=['January','February','March','April','May','June','July','August','September','October','Novermber','December'];
  const [time,setTime]=useState(`${hours}:${seconds}`);
  const [dateTime,setDateTime]=useState(`${days[day]}, ${months[month]} ${year}`);
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='content'>
          <Header date={dateTime}/>
          <Bottom/>
        </div>
      </div>
    </div>
  );
}

export default App;
