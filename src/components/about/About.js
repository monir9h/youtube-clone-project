import "./About.css"
import React from "react"
import {useState} from "react"
import ah from "./assets/ah.jpg"
import mh from "./assets/mh.png"
import rj from "./assets/rj.png"
import je from "./assets/je.png"
import { Link } from "react-router-dom";
export default function About (){
const [showMore, setShowMore] = useState(false)

const toggleShowMore =() =>{
    setShowMore(!showMore)
}


return (
    <div>
       
        <div> 
        <h2>About </h2>
        <p> Welcome to our YouTube clone project. Here you can search any keyword and play the video just like YouTube.
        This project is created by <strong >Ahmed Heggy</strong>, <strong>Raymond Johnson</strong>, <strong>James Edmond</strong> and <strong> Monir Hossen</strong>. You can learn more about each members below. Thank you.
        </p>
         
    </div>
            <div className="card">
                <img src={ah} />
                <div className="info-container">
                <h2>Ahmed Heggy</h2>
                    <p>Bio: I am a self-motivated individual passion for technology and a desire to stay up-to-date with the latest developments in the industry.  </p>
                    <a href= "https://github.com/aheggy ">GitHub</a>
                    <h5> </h5>
                </div>
            </div>
        

            <div className="card">
                <img src={rj} />
                <div className="info-container">
                <h2>Raymond Johnson</h2>
                <p>Bio: Full Stack Software Engineer...Graduate of Udacity FEND NanoDegree program (2022) and Pursuit Fellow (2023)  </p>
                <a href= "https://github.com/pulse99r">GitHub</a>

                    
                </div>
            </div>  



       
            <div className="card">
                <img src={je} />
                <div className="info-container">
                <h2>James Edmond</h2>
                <p>Bio: I am a student at Pursuit learning to become a Full Stack Software Developer. </p>
                <a href= "https://github.com/jed161 ">GitHub</a> 
                </div>
            </div>
    
            <div className="card">
                <img src={mh} />
                <div className="info-container">
                <h2>Monir Hossen</h2>
                <p>Bio: I am a Pursuit fellow who is trying to become a full-stack web developer. Please see my repositories for more information. TY!  </p>
                <a href= "https://github.com/monir9h ">GitHub</a>
                </div>
            </div>
            

        <footer>©️2023 @Ahmed Heggy, Raymond Johnson, James Edmond & Monir Hossen. </footer>
        
    </div>
)

}




// I can see an "About" page at the URL /about that has:
// The nav bar.
// A brief project description.
// A short bio of each teammate.
// Links to each teammate's GitHub.