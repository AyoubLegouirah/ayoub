import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import WigglesImage from '../images/WigglesImage.png';
import Netflix from '../images/netflix.png';
import Oeuf from '../images/Oeuf.png';
import Maverick from '../images/Maverick.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>Mes <b>Projets</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Oeuf} projectName="DragonClicker" />
        <ProjectBox projectPhoto={Maverick} projectName="Maverick" />
        <ProjectBox projectPhoto={Netflix} projectName="Getflix"  />
      </div>

    </div>
  )
}

export default Projects