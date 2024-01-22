import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import { motion } from 'framer-motion'; // Importez motion depuis framer-motion
import pdf from "../AyoubLegouirah.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);

  const handleResize = () => {
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  const zoom = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={zoom}>
      <div className='ResumePage'>
        <Document file={pdf} className="resumeview">
          <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
        </Document>

        <a href={pdf} target='_blank' download="AyoubLegouirah_Resume">
          <button className='downloadCV' type='button'>
            <h3><BsDownload />&nbsp; Télécharger CV</h3>
          </button>
        </a>
      </div>
    </motion.div>
  )
}

export default Resume;
