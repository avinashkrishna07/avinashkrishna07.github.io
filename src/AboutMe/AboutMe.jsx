import React from "react";
import NavBar from "../Navbar/NavBar";
import Coffee from "../images/Coffee.gif";
import GetToKnowMe from "../images/GetToKnowMe.svg";
import { styles } from "../commons/commonStyles";

const AboutMe = () => {
  return (
    <div style={{ ...styles.common, alignItems: "center" }}>
      <NavBar />
      <div style={{ fontFamily: "Roboto", alignItems: "center" }}>
        <div
          className="container"
          style={{ background: "#fff", color: "#000", textAlign: "justify" }}
        >
          <h2 style={{ textAlign: "center" }}>
            Get to Know Me{" "}
            <img
              src={GetToKnowMe}
              alt="Get To Know Me"
              style={{ marginBottom: "15px", height: "40px" }}
            />
          </h2>
          <div style={{ fontSize: "18px", marginTop: "15px" }}>
            
            <p>
            Hello and welcome! I'm Avinash Krishna, a technology enthusiast with a deep passion for all things innovative and cutting-edge. Currently, I’m an engineering student at the prestigious Indian Institute of Information Technology, Lucknow, where I’m honing my skills and knowledge to shape the future of tech.
            </p>

            <p>
            "Life is a series of natural and spontaneous changes. Don’t resist them." My journey into the realm of computer science began when I understood that logic and structure are to computers what rhythm is to music. This realization sparked my interest in the field, prompting me to pursue a Bachelor's degree in Information Technology at the Indian Institute of Information Technology Lucknow. I graduated in 2025 and embarked on my professional path, constantly seeking ways to apply my growing knowledge of technology. As I continue to learn and explore, I remain excited about the endless possibilities the world of technology offers.
            </p>

            <p>
            When I'm not deep in coding, you’ll find me indulging in my other passions. Whether it’s strumming on my guitar, gazing at the stars through the lens of astronomy, writing verses, or reflecting on life through philosophical thoughts, I find fulfillment in the rhythm of these diverse pursuits. I also find peace in solitude, embracing moments of quiet introspection and enjoying the serenity of being alone with my thoughts.
            </p>
            <p>
              Feel free to drop me a note on{" "}
              <a
                href="https://www.linkedin.com/in/avinashkrishna07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , and let's arrange a coffee chat!{" "}
              <img
                src={Coffee}
                alt="coffee GIF"
                style={{ marginBottom: "15px" }}
              />
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
