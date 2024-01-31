import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    GetflixDesc : "Quadra propose une expérience cinématographique immersive avec une page d'accueil attrayante. Connectez-vous pour découvrir un film vedette changeant dynamiquement. Ajoutez des films à votre liste de souhaits, choisissez entre l'abonnement standard (2 films/mois) et le premium (accès à tous les films). Profitez de Quadra pour une expérience cinéphile exceptionnelle.",
    GetflixWebsite : "https://cryptobel.org/quadra/",

    DragonClickerDesc:"Dragon Clicker propose une aventure où chaque clic sur l'œuf de dragon accumule des œufs pour débloquer des bonus. Les joueurs collectent des œufs pour acheter des améliorations et boosters, avec une transformation visuelle unique de l'œuf central à chaque palier de points.",
    DragonClickerWebsite:"https://ayoublegouirah.github.io/dragon_clicker/",
    
    MaverickDesc:"Maverick offre une expérience aérienne unique avec son site épuré. Réservez des séances d'essai d'avions de chasse avec des pilotes expérimentés. Personnalisez votre vol et choisissez parmi différentes options. Vivez l'adrénaline de Maverick avec des vols d'essai exceptionnels.",
    MaverickWebsite:"https://maverick-khaki.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display"  /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox