import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Développé par Legouirah Ayoub.</h4>
      <h4>Copyright &copy; 2024 LG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/AyoubLegouirah" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ayoub-legouirah-069477230/" target='_blank'><FaLinkedin/></a>
        <a href='mailto:ayoubgrand@outlook.fr' target='_blank'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer