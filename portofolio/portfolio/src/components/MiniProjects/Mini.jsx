import React from "react";
import "./Mini.css";
import CalImg from "../MiniProjects/Calculator.webp";
import ClockImg from "../MiniProjects/Clock.jpg"
import CounterImg from "../MiniProjects/TemCon.png"

export default function MiniProjects() {
  const projectList = [
    {
      title: "Simple Calculator",
      img: CalImg,
      description: "Simple Calculator Using javascript CSS and HTML.",
      link: "https://harunsuleiman.github.io/My-Calculator/",
    },
    {
      title: "Military Clock",
      img: ClockImg,
      description: "Simple military Clock Using javascript CSS and HTML.",
      link: "https://harunsuleiman.github.io/My-Clock/",
    },
    {
      title: "Convertor &...",
      img: CounterImg,
      description:
        "Counter and temperature convertor using javascript HTML and CSS",
      link: "https://harunsuleiman.github.io/T-/",
    },
  ];

  return (
    <section className="projects">
      <h1>Mini Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
