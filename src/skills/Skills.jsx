import React from "react";
import { styles } from "../commons/commonStyles";
import NavBar from "../Navbar/NavBar";
import Skill from "./Skill";
import { useInView } from "react-intersection-observer";
import "./Skills.css";
import CPlusIcon from "../images/cPlusPlus.svg";
import JavaIcon from "../images/java.svg";
// import CSharpIcon from "../images/cSharp.svg";
import CIcon from "../images/CLanguage.svg";
import PythonIcon from "../images/python.svg";
import ReactIcon from "../images/react.svg";
import JavascriptIcon from "../images/javascript.svg";
import AngularIcon from "../images/angular.svg";
import HtmlIcon from "../images/html.svg";
import CssIcon from "../images/css.svg";
// import DotnetIcon from "../images/dotnet.svg";
import AwsIcon from "../images/aws.svg";
// import AzureIcon from "../images/azure.svg";
import GitIcon from "../images/git.svg";
import MySQLIcon from "../images/mysql.svg";
import MongodbIcon from "../images/mongo.svg";
// import DynamodbIcon from "../images/dynamodb.svg";
// import RedisIcon from "../images/redis.svg";
// import JenkinsIcon from "../images/jenkins.svg";
import VSCodeIcon from "../images/code.svg";
import BashIcon from "../images/bash.svg";
import RedHatIcon from "../images/redhat.svg";
import LinuxIcon from "../images/linux.svg";
import NeoVimIcon from "../images/neovim.svg";

const skillsData = [
  { id: 3, source: CIcon, alt: "The logo icon for C", title: "C" },
  { id: 1, source: CPlusIcon, alt: "The logo icon for C++", title: "C++" },
  { id: 2, source: JavaIcon, alt: "The logo icon for Java", title: "Java" },
  { id: 4, source: PythonIcon, alt: "The logo icon for python", title: "Python",},
  { id: 8, source: HtmlIcon, alt: "The logo icon for HTML", title: "HTML" },
  { id: 9, source: CssIcon, alt: "The logo icon for CSS", title: "CSS" },
  { id: 6, source: JavascriptIcon, alt: "The logo icon for JavaScript", title: "JavaScript",},
  { id: 5, source: ReactIcon, alt: "The logo icon for React", title: "React" },
  { id: 7, source: AngularIcon, alt: "The logo icon for Angular", title: "Angular",},
  { id: 11, source: VSCodeIcon, alt: "The logo icon for VSCode", title: "VS Code" },
  { id: 17, source: NeoVimIcon, alt: "The logo icon for Neovim", title: "Neovim",},
  { id: 12, source: GitIcon, alt: "The logo icon for Git", title: "Git" },
  { id: 13, source: MySQLIcon, alt: "The logo icon for MySQL", title: "MySQL" },
  { id: 14, source: MongodbIcon, alt: "The logo icon for MongoDB", title: "MongoDB",},
  { id: 10, source: AwsIcon, alt: "The logo icon for AWS", title: "AWS" },
  { id: 15, source: BashIcon, alt: "The logo icon for Bash", title: "Bash",},
  { id: 16, source: RedHatIcon, alt: "The logo icon for RedHat Linux", title: "RedHat Linux" },
  { id: 18, source: LinuxIcon, alt: "The logo icon for Linux", title: "Linux",},
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <NavBar />
      <div style={{ ...styles.common, marginTop: "55px" }}>
        <div className="container" style={{ marginTop: "40px" }}>
          <div className={`skillsGrid ${inView ? "fadeIn" : ""}`} ref={ref}>
            {skillsData.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
