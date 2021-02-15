import React, { useContext, useRef, useEffect, useState } from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { AuthContext } from "./Auth"
import fireApp from '../base.js'

import '../App.css'


const firestore = fireApp.firestore();


const MainChat = () => {
  const dummy = useRef()
  const [Channel, setChannel] = useState('messages')
  const messagesRef = firestore.collection(Channel);
  const query = messagesRef.orderBy('createdAt').limitToLast(25)
  const [messages] = useCollectionData(query, { idField: 'id' });

  useEffect(() => {
    setTimeout(()=>{
      dummy.current.scrollIntoView({ behavior: 'smooth' })
     }, 1000)
  }, [])

  useEffect(() => {
      dummy.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  //to update channel context
//   useEffect(() => {
//     setChannel()
// }, [setChannel])


  return (
  <>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>
  </>)
};

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === useContext(AuthContext).currentUser.uid? 'sent' : 'received';
  
  return (<>
      <div className={`${messageClass}`}>
      <div className="icon" >
      <img className='profile-photo' src={photoURL || "https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1637863831.jpg" } alt="stock" />
      </div>
  <span className='text'>{text}</span>
      
      
      </div>
  </>)
}

export default MainChat;