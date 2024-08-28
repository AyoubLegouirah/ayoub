import React from "react";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; // Importez motion depuis framer-motion
import { CiCoffeeCup } from "react-icons/ci";
import Avatar from "../images/Ayoub.png";
import Avatar1 from "../images/AyoubFirst.png";

const Home = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Réduisez la durée de transition à 0.5 secondes ou à la valeur que vous préférez
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 3 } }, // Réduisez la durée de transition à 0.5 secondes ou à la valeur que vous préférez
  };

  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
        <div className="HomePage">
          <div className="HomeText">
            <h1>Hello there !</h1>
            <h1>
              Je suis <b>AYOUB LEGOUIRAH</b>
            </h1>
            <Typed />
          </div>
          <Tilt>
            <img
              className="Avatar"
              src={Avatar}
              style={{ width: "300px", height: "auto" }}
              alt=""
            />
          </Tilt>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeRight}>
        <div className="AboutPage">
          <div className="AboutText">
            <h1 className="AboutTextHeading">
              <b>Introduction</b>
            </h1>
            <p>
              Mon parcours m'a permis de maîtriser un large éventail de
              technologies et de langages, y compris{" "}
              <b>Java, HTML, CSS, TypeScript et SQL.</b> J'ai une
              solide expérience dans le développement de projets full-stack en
              utilisant <b>Spring Boot</b> pour le back-end et des frameworks
              modernes comme <b>React et Angular</b> pour le front-end.
              <br />

              <br />

              Je suis actuellement à la recherche d'
              <b>opportunités professionnelles</b> où je pourrai appliquer et
              étendre mes compétences en Java et en développement full-stack.
              Passionné par l'<b>apprentissage continu</b> et l'
              <b>exploration de nouvelles technologies,</b> je suis toujours
              prêt à relever des défis stimulants et à contribuer de manière
              significative à des projets innovants.
              <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
            </p>
          </div>
          <Tilt>
            <img className="Avatar" src={Avatar1} alt="" />
          </Tilt>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
