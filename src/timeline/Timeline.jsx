import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import timelineElements from "./TimelineElements";
import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import NavBar from "../Navbar/NavBar";
import "./Timeline.css";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div style={{ marginTop: "55px" }}>
      <NavBar />
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.subtitle}
              </h5>
              {Array.isArray(element.description) ? (
                <ul id="description">
                  {element.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p id="description">{element.description}</p>
              )}
              {/* <p id="description">{element.description}</p> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
