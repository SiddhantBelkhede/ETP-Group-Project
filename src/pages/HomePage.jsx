import React from "react";
import { useNavigate } from "react-router-dom";
import "../hp.css";




function HomePage() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "QrollCall Attendance System",
      description:
        "A QR-based attendance tracking system built using Flask and SQLite.",
      technologies: ["Python", "Flask", "SQLite"],
      github: "https://github.com/vedant/qrollcall",
    },
    {
      id: 2,
      title: "TerraTip Property Monitor",
      description:
        "A green-themed web app to generate property monitoring reports.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/vedant/terratip",
    },
  ];

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="logo">My Project Library</h1>
        </div>
        <div className="nav-right">
          <button className="btn login-btn">Login</button>
          <button className="btn register-btn">Register</button>
        </div>
      </nav>
      <div className="home-header">
        <h1>My Project Library</h1>
        <p>Browse all your projects in one place.</p>
        <button className="add-btn" onClick={() => navigate("/add-project")}>
          + Add New Project
        </button>
        <button className="alp-btn" onClick={() => navigate("/all-project")}>
          All projects
        </button>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-badges">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default HomePage;
