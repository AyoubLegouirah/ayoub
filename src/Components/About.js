import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import Avatar2 from '../images/Ayoub2.png';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Faisons <b>connaissance</b> !</h1>
          <p>
            En pleine transition vers le domaine passionnant de l'informatique, je suis <b>Ayoub Legouirah,</b> une personne <b>dynamique, volontaire et proactive.</b> Ma passion pour la création de projets se reflète dans mon enthousiasme à relever des défis. <b>Fort de mon engagement et de ma détermination,</b> je suis prêt à apporter une énergie positive et des compétences techniques solides à votre équipe.
          </p>
        </div>

        <div>
          <Tilt>
            <img className='illustration'
              src={Avatar2} alt="" />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Framework et Bibliothèque</h1>
      <div className='skills'>
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Javascript' />
        <Skills skill='MySQL' />
        <Skills skill='PHP' />
        <Skills skill='Sass' />
        <Skills skill='React' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Bootstrap' />        
      </div>
    </>
  )
}

export default About