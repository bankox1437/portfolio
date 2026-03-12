import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import '../styles/Skills.css'
function Skills() {

    const skills = [
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'React', icon: 'react' },
        { name: 'Redux', icon: 'redux' },
        { name: 'NextJs', icon: 'nextjs' },
        { name: 'VueJs', icon: 'vuejs' },
        { name: 'Angular', icon: 'angularjs' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'NodeJs', icon: 'nodejs' },
        { name: 'Express', icon: 'express' },
        { name: 'JWT', icon: 'jwt' },
        { name: 'PHP', icon: 'php' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Git', icon: 'git' },
        { name: 'Linux', icon: 'linux' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Jira', icon: 'jira' },
        { name: 'Bitbucket', icon: 'bitbucket' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Jenkins', icon: 'jenkins' },

    ];
  const [expanded, setExpanded] = useState(false);
  const VISIBLE_COUNT = 8;
  // const showToggle = skills.length > VISIBLE_COUNT;
  // const visibleSkills = expanded ? skills : skills.slice(0, VISIBLE_COUNT);

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className={`skills-grid ${expanded ? 'expanded' : 'collapsed'}`}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <Icon icon={`devicon:${skill.icon}`} width="48" height="48" />
            <p>{skill.name}</p>
          </div>
         ))} 
      </div>
      {/* {showToggle && (
        <div className="read-more-wrap">
          <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show less' : 'Show more'}
          </button>
        </div>
      )} */}
    </div>
  )
}

export default Skills