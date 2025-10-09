// pages/ProjectDetailPage.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./projectDetail.css"; // Create this CSS file

function ProjectDetailPage() {
  const { id } = useParams(); // Gets the 'id' from the URL route: /projects/:id
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Placeholder for user authentication logic
  // In a real MERN app, this would come from a global state/context
  const currentUserId = "your_logged_in_user_id"; // Replace with actual logic

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // You'll replace this with your actual MERN API endpoint
        // Example: http://localhost:5000/api/projects/1
        const response = await fetch(`http://localhost:5000/api/projects/${id}`); 
        
        if (!response.ok) {
          throw new Error("Project not found");
        }
        
        const data = await response.json();
        setProject(data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="detail-container">Loading project details...</div>;
  }

  if (error || !project) {
    return <div className="detail-container error">Error: {error || "Project not found."}</div>;
  }
  
  // This is a placeholder for checking if the current user is the project owner
  // You would compare currentUserId with project.ownerId (or similar field)
  const isOwner = project.ownerId === currentUserId; 
  
  // --- Handler functions for Edit/Delete (will require separate components/logic) ---
  const handleEdit = () => {
    // Navigate to an Edit Project page, passing the project ID
    navigate(`/edit-project/${project._id}`); 
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${project.title}"?`)) {
      try {
        // Replace with your actual DELETE API endpoint
        const response = await fetch(`http://localhost:5000/api/projects/${project._id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert("Project deleted successfully!");
          navigate("/all-project"); // Redirect to the All Projects page
        } else {
          alert("Failed to delete project.");
        }
      } catch (err) {
        alert("An error occurred during deletion.");
      }
    }
  };


  return (
    <div className="detail-container">
      <h1 className="project-title">{project.title}</h1>
      <p className="project-owner">**Owner:** {project.ownerName || "N/A"}</p>
      
      <div className="project-section">
        <h2>Description</h2>
        <p className="project-description">{project.description}</p>
      </div>

      <div className="project-section">
        <h2>Tech Stack</h2>
        <div className="tech-badges">
          {project.technologies?.map((tech, i) => (
            <span key={i} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h2>Resources</h2>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub →
        </a>
      </div>
      
      {/* Conditional Edit/Delete Buttons */}
      {isOwner && (
        <div className="owner-actions">
          <button className="btn edit-btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
      
      <button className="btn back-btn" onClick={() => navigate("/all-project")}>
        ← Back to All Projects
      </button>
    </div>
  );
}

export default ProjectDetailPage;