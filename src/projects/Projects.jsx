import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
} from "reactstrap";
import { styles } from "../commons/commonStyles";
import NavBar from "../Navbar/NavBar";
import { FaGithub, FaAngleRight } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div style={{ ...styles.common, marginTop: "55px" }}>
      <NavBar />
      <div className="container projects-container">
        <h3 className="projects-title">Academic Projects</h3>
        <div>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                <FaAngleRight
                  className={open === "1" ? "icon-rotate" : "icon"}
                />
                Dataflow Automation
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <p>
                The objective of this project was to develop a command-line tool designed to automate repetitive web tasks, including bulk Gmail and Discord operations, advanced data filtering, and data scraping. The system was optimized for efficiency, featuring caching techniques that reduced bandwidth usage and latency by around 20%. Additionally, the tool enhanced the management of large volumes of historical data, presenting it in sorted and tabulated formats for easier analysis and access. The project utilized a range of technologies, including Python, Selenium, sys and os modules, Pickle, and nuShell, to achieve these objectives effectively.
                </p>
                <a
                  href="https://github.com/avinashkrishna07/dataflow-automation"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View on GitHub
                </a>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                <FaAngleRight
                  className={open === "2" ? "icon-rotate" : "icon"}
                />
                Plant Disease Predictor
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <p>
                The objective of this project was to develop a web application leveraging Convolutional Neural Networks (CNN) for accurate plant disease identification using the PlantVillage dataset. Extensive data preprocessing and augmentation were conducted, followed by iterative hyperparameter tuning to improve model accuracy. This approach significantly enhanced early disease detection capabilities, aiming to reduce crop disease-related losses. The project was built using a range of technologies, including Python, TensorFlow, Keras, Streamlit, Docker, Matplotlib, and Numpy, to ensure a robust and efficient solution.
                </p>
                <a
                  href="https://github.com/avinashkrishna07/plant-disease-prediction-cnn-deep-leanring-project"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View on GitHub
                </a>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                <FaAngleRight
                  className={open === "3" ? "icon-rotate" : "icon"}
                />
                Play With Linux
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <p>
                The objective of this project was to create a comprehensive repository that includes setup scripts, configuration files, Linux installation steps, and helpful guides for Linux users. This resource was designed to streamline the installation and setup process, making it easier for users to get started with Linux environments. The project was developed using Shell scripting to automate various tasks and enhance the user experience.
                </p>
                <a
                  href="https://github.com/avinashkrishna07/play-with-linux" 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View on GitHub
                </a>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Projects;
