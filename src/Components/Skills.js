import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaPhp, FaDatabase, FaSass, FaHtml5, FaCss3, FaJava } from "react-icons/fa"; // Ajout de Java
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiTailwindcss, SiDocker, SiSpringboot, SiPostgresql } from "react-icons/si"; // Ajout de Docker, Spring Boot et PostgreSQL
import { SiTypescript, SiAngular, SiCsharp, SiHibernate, SiJakartaee } from "react-icons/si"; // Ajout d'icônes pour Hibernate et Jakarta EE si disponibles

const Skills = ({ skill }) => {
  const icon = {
    Python: <FaPython />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    PHP: <FaPhp />,
    MySQL: <FaDatabase />,  
    Sass: <FaSass />,  
    HTML: <FaHtml5 />,  
    CSS: <FaCss3 />, 
    CSharp: <SiCsharp />, 
    TypeScript: <SiTypescript />, 
    Angular: <SiAngular />, 
    Vercel: <SiVercel />,
    Tailwind: <SiTailwindcss />, 
    DotNet: <CgCPlusPlus />, 
    Java: <FaJava />, 
    Docker: <SiDocker />, 
    SpringBoot: <SiSpringboot />, 
    PostgreSQL: <SiPostgresql />, 
    Hibernate: <SiHibernate />,
    

  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  );
};

export default Skills;
