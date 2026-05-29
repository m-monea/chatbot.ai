import React, { useState } from 'react';
export default function App(){
 const [msg,setMsg]=useState('');
 const [ans,setAns]=useState('');
 async function send(){
  const r=await fetch(import.meta.env.VITE_API_URL+'/chat',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({message:msg})
  });
  const d=await r.json();
  setAns(d.reply);
 }
 return <div style={{padding:30,fontFamily:'Arial'}}>
 <h1>Chatbot IA</h1>
 <input value={msg} onChange={e=>setMsg(e.target.value)} />
 <button onClick={send}>Invia</button>
 <p>{ans}</p>
 </div>
}