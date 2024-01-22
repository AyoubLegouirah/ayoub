import React from 'react';
import { Zoom } from 'react-reveal';
import ProjectBox from './ProjectBox';
import Netflix from '../images/netflix.png';
import Oeuf from '../images/Oeuf.png';
import Maverick from '../images/Maverick.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>Mes <b>Projets</b></h1>
      <div className='project'>
        <Zoom>
          <ProjectBox projectPhoto={Oeuf} projectName="DragonClicker" />
        </Zoom>
        <Zoom>
          <ProjectBox projectPhoto={Maverick} projectName="Maverick" />
        </Zoom>
        <Zoom>
          <ProjectBox projectPhoto={Netflix} projectName="Getflix" />
        </Zoom>
      </div>
    </div>
  );
}

export default Projects;
