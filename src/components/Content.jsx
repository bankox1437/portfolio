import React from "react";
import { Icon } from "@iconify/react";
import '../styles/Content.css'
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

function Content() {
  return (
    <div>
      <section id="about" className="hero">
        <div className="blur-glow"></div> <h1>Narongrat Keanmueage</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Passionate Full-Stack Developer dedicated to building
          scalable web applications and continuous learning.
          Expert in developing new functionality
          to meet business requirements by bridging
          complex logic with high-performance solutions.
          Committed to writing clean, maintainable code and solving technical
          challenges through meticulous debugging.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-talk">
            <Icon icon="mdi:email" width="20" /> Let's Talk
          </a>
          <a href="#project" className="btn-work">
            <Icon icon="mdi:image-multiple" width="20" /> View Work
          </a>
        </div>
      </section>

      <section id="project" className="content">
        <Project />
      </section>

      <section id="skills" className="content">
        <Skills />
      </section>

      <section id="contact" className="content">
        <Contact />
      </section>
    </div>
  );
}

export default Content;
