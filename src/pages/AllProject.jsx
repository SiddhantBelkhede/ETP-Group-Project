import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllProject() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", color: "#fff", marginTop: "2rem" }}>
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red", marginTop: "2rem" }}>
        Error: {error}
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#0d0d0d", color: "#fff", minHeight: "100vh" }}>
      <header
        style={{
          backgroundColor: "#1a1a1a",
          color: "#ff6f61",
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        <h1>All Projects</h1>
      </header>

      <div
        style={{
          textAlign: "center",
          margin: "1rem auto",
          maxWidth: "700px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#ccc",
        }}
      >
        <p>
          Explore innovative projects developed by IEEE members and students.
          From automation to AI, these projects showcase creativity and
          technology working together to solve real-world challenges.
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "0 1rem",
        }}
      >
        {projects.map((project) => (
          <div
            key={project._id}
            style={{
              backgroundColor: "#e0e0e0",
              color: "#000",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              borderLeft: "5px solid #d26f66",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(255, 111, 97, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h2 style={{ color: "#ff6f61" }}>{project.title}</h2>
            <p>
              <strong>Tech Stack:</strong>{" "}
              {Array.isArray(project.technologies)
                ? project.technologies.join(", ")
                : project.technologies}
            </p>
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p style={{ fontWeight: "bold", color: "#555" }}>
              Author: {project.authorName || "Unknown"}
            </p>

            <button
              onClick={() => navigate(`/projects/${project._id}`)}
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#ff6f61",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#e55b4f")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff6f61")
              }
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProject;
