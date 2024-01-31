import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'; // Importez motion depuis framer-motion
import Avatar2 from '../images/Ayoub2.png';

const About = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Réduisez la durée de transition à 0.5 secondes ou à la valeur que vous préférez
  };
  
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 3 } }, // Réduisez la durée de transition à 0.5 secondes ou à la valeur que vous préférez
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
        <div className='AboutPage'>
          <div className='AboutText'>
            <h1 className='AboutTextHeading'>Faisons <b>connaissance</b> !</h1>
            <p>
              En pleine transition vers le domaine passionnant de l'informatique, je suis <b>Ayoub Legouirah,</b> une personne <b>dynamique, volontaire et proactive.</b> Ma passion pour la création de projets se reflète dans mon enthousiasme à relever des défis. <b>Fort de mon engagement et de ma détermination,</b> je suis prêt à apporter une énergie positive et des compétences techniques solides à votre équipe.
            </p>
          </div>

          <div>
            <Tilt>
              <img className='illustration' src={Avatar2} alt="" />
            </Tilt>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeRight}>
        <h1 className='SkillsHeading'>Framework et langages </h1>
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
          <Skills skill='Python' />  
          <Skills skill='Postman' />
        </div>
      </motion.div>
    </>
  )
}

export default About;
