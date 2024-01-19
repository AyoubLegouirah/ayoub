import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Ayoub.png';
import Avatar1 from '../images/AyoubFirst.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hello there !</h1>
          <h1>Je suis <b>AYOUB LEGOUIRAH</b></h1>
          <Typed />
        </div>

        <Tilt>
          <img className='Avatar' src={Avatar} style={{ width: '300px', height: 'auto' }} alt="" />
        </Tilt>

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'><b>Introduction</b></h1>
          <p>
            Mon parcours m'a permis de maîtriser des langages tels que <b>HTML, CSS, PHP et MySQL,</b> et je suis également familier avec la technologie moderne telle que <b>React.</b> Mon expérience s'étend également à l'utilisation de <b>Sass</b> pour améliorer le style de mes projets.
            <br /><br />
            Je cherche des <b>opportunités professionnelles</b> qui me permettront de mettre en pratique mes connaissances variées et de contribuer de manière significative à des projets stimulants. <b>En constante évolution,</b> je suis ouvert à l'apprentissage continu et à l'exploration de <b>nouvelles technologies</b> pour enrichir mes compétences.
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar1} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home