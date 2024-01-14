import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub:"",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox