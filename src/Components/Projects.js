import React from 'react';
import { motion } from 'framer-motion'; // Importez motion depuis framer-motion
import ProjectBox from './ProjectBox';
import Netflix from '../images/netflix.png';
import Oeuf from '../images/Oeuf.png';
import Maverick from '../images/Maverick.png';

const Projects = () => {
  const zoom = {
    hidden: { scale: 0.8, opacity: 0 , transition: { duration: 2 }},
    visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div>
      <h1 className='projectHeading'>Mes <b>Projets</b></h1>
      <div className='project'>
        <motion.div initial="hidden" animate="visible" variants={zoom}>
          <ProjectBox projectPhoto={Oeuf} projectName="DragonClicker" />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={zoom}>
          <ProjectBox projectPhoto={Maverick} projectName="Maverick" />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={zoom}>
          <ProjectBox projectPhoto={Netflix} projectName="Getflix" />
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
