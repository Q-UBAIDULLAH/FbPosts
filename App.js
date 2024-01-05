// import { useState } from "react";
// import AboutUs from "./views/AboutUs";
// import ContactUs from "./views/ContactUs";
// import Dashboard from "./views/Dashboard";
// import './App.css'
// function App(){
// const[screen,setscreen]=useState('dashboard')


//   return(
//   <div className="App">
//   <h1>Welcome to Components!</h1>

//   <div>
// <button onClick={()=>setscreen('dashboard')}>Dashboard</button>
// <button onClick={()=>setscreen('contactus')}>ContactUS</button>
// <button onClick={()=>setscreen('aboutus')}>AboutUs</button>
//     </div>
//     {screen==='dashboard'&&<Dashboard/>}
//     {screen==='contactus'&&<ContactUs/>}
//     {screen==='aboutus'&&<AboutUs/>}
   

//   </div>
//   )
// }
// export default App;

import pic from"./IMG_20231215_211034_562.jpg"
import "./App.css"
import FbImageLibrary from 'react-fb-image-grid'
import { useEffect, useState } from "react";
function App(){
  const currentDate = new Date()
  const formattedDate = currentDate.toDateString()
    const[getdata,setdata]=useState([]);


    const getproduct=()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then((res)=>setdata(res.products)
   
        )

    }
    console.log(getdata)
    useEffect(()=>{
      getproduct()
    },[])
if(!getdata.length){
  return <div>Loading...</div>
}
return(


  <div  className='app'  style={{width:700}}>
      <header className="App-header">
    {getdata.map(function(item){
  
      return<div className='App'> 
      
       <div className="brand">  <img className="profile-pic" style={{width:40,height:40}} src={item.thumbnail}></img >{ item.brand}</div> 
       <p className="date">{formattedDate}</p>
       <br></br>
    
     <div className="description">{item.description}</div>

     <div style={{}}> {<FbImageLibrary images={item.images } />}</div>
     <hr></hr>


     <div className="btn">
      <button className="Button1">Like</button>
      <button className="Button2">Commente</button>
      <button className="Button3">Share</button>
     </div>

     <div className="comment-1"><img style={{width:35,height:33,borderRadius:17}} src={pic}></img> <input className="comment" placeholder="Write a comment..."></input></div>

 
     </div>


    
  
    })}
  </header>
  </div>
      )
  
}



export default App;