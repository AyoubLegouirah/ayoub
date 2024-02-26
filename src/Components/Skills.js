import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaPhp, FaDatabase, FaSass, FaHtml5, FaCss3 } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiTailwindcss } from "react-icons/si"; // Ajout de Tailwind CSS
import { SiTypescript, SiAngular, SiCsharp } from "react-icons/si"; // Ajout de TypeScript et Angular

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
    CSharp: <SiCsharp />, // Ajout de C#
    TypeScript: <SiTypescript />, // Ajout de TypeScript
    Angular: <SiAngular />, // Ajout d'Angular
    Vercel: <SiVercel />, // Ajout de Vercel
    Tailwind: <SiTailwindcss />, // Ajout de Tailwind CSS
    DotNet: <CgCPlusPlus />, // Ajout de .NET
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  );
};

export default Skills;
