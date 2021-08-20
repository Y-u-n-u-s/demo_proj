import React from 'react'
import './App.css'
import image1 from './images/1.jpg'
import image2 from './images/logo.jpg'
function Home() {
    return (
        <div>
        <div  className="home" >
            <img src ={image1} alt="" id="img1"></img>
            <div id="content1"><h1 id="H1">Play dates, Made Easy</h1>
            <h4 id="p1">KidZoo is a social platform that takes the effort and awkwardness out of playdates</h4></div>
            
        </div>
        <div  className="home2" >
        <div id="content1"><h1 id="H1">About Us</h1>
            <h5 id="p1">We are parents who have felt the frustration in the effort required to schedule playdates. We have seen out children feel lonely sometimes. We think children spend too much time in front of screens today- TVs, iPads, phones. 
            So we decided to use our MBA degrees and decades of business experience in the technology and finance sectors, to build a social and mobile one stop platform to take the effort and frustration out of setting up play dates.</h5></div>
            <img src ={image2} alt="" id="img2"></img>
        </div>
        </div>
    )
}

export default Home
