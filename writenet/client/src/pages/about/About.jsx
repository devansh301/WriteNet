import React from "react";
import "./about.css";
import aboutImg from "./about.jpg";

const About = () => {
	return (
		<div className="about">
            
                    <h1>About me</h1>

                   <img className="aboutImg" src={aboutImg} alt="" />
                   <p> 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae cupiditate modi at ad maxime
                    dolorem quis corporis incidunt, fuga, fugiat eum sed delectus laborum perspiciatis eius quae sint,
                    nemo deserunt?
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae blanditiis eos, non vel
                    magnam laboriosam neque quo quis provident modi, perferendis asperiores dolore..
                </p>
                
                <span><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit?</strong></span>

                 <p> 

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi illum necessitatibus, quia temporibus
                    quos quidem officiis amet dignissimos exercitationem. Inventore?

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, tempora dolor aspernatur
                    pariatur ea tenetur! Atque eveniet corporis ad voluptate
                 </p>
                
             <ul> <h2>Contact Us</h2>
                 <li>Name :- Name Lastname</li>
                 <li>Email :- email_id@gmail.com</li>
                 <li>Phone No. :- +91-123456789</li>

             </ul>
                    

                 

            </div>
 
	);
};

export default About;
