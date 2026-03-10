import React from 'react'
import '../styles/Project.css'
import { Icon } from '@iconify/react';

import RunLife from "../assets/img/runlife_ui.png"
function Project() {

    const listProjects = [
        // {
        //     name: 'Education Management System',
        //     description: 'Develop a web application for managing education system for student, teacher and admin. ',
        //     skills: ['php', 'javascript', 'bootstrap', 'mysql', 'jquery'],
        //     link: 'link1',
        // },
        {
            name: 'Run Join life',
            description: 'Web Application that allows users to create running activities and join events organized by others. The system is built using React for the frontend, Node.js with Express for the backend, and PostgreSQL for the database.',
            skills: ['react', 'nodejs','express', 'tailwindcss', 'postgresql','postman'],
            github: 'https://github.com/bankox1437/activity_run',
            link: 'https://activity-run-alpha.vercel.app/',
        },

    ];
    return (
        <div className="project">
            <h2>Projects</h2>
            <div className="project-grid">
                {listProjects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={RunLife} alt=""  />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="project-skills">
                            {project.skills.map((skill, index) => (
                                <div key={index} className="project-skill" title={skill}>
                                    {/* <p>{skill}</p> */}
                                    <Icon icon={`devicon:${skill}`} width="20" height="20" />
                                </div>
                            ))}
                        </div>
                        <div className='look-section'>
                            <a href={project.github} target='_black'>GitHub <Icon icon="mdi:github" width="20" height="20" /></a>
                            <a href={project.link} target='_blank'>Live Demo <Icon icon="mdi:arrow-right" width="20" height="20" /></a>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project