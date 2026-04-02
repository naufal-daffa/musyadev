import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = 'https://placehold.co/600x338/1a1a1a/888?text=Project+Preview';

  return (
    <div className="project-card">
      <div className={`project-thumb ${project.thumbClass}`}>
        <img 
          src={imageError ? fallbackImage : project.thumbImage} 
          alt={`${project.title} - ${project.subtitle}`}
          className="project-thumb-img"
          onError={() => setImageError(true)}
        />
        <div className="thumb-overlay">
          {project.badge && <div className="thumb-badge">{project.badge}</div>}
          
          <div className="thumb-title">
            {project.title}
            <span className="thumb-subtitle">{project.subtitle}</span>
          </div>
          
          {project.techIcons && (
            <div className="thumb-icons">
              {project.techIcons.slice(0, 4).map((tech, idx) => (
                <div key={idx} className="tech-icon-wrapper" title={tech.name}>
                  <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                </div>
              ))}
              {project.techIcons.length > 4 && (
                <div className="tech-icon-wrapper more-icon" title={`+${project.techIcons.length - 4} more`}>
                  <span>+{project.techIcons.length - 4}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="project-info">
        <div className="project-type">{project.type}</div>
        <div className="project-name">{project.name}</div>
        <p className="project-short-desc">{project.description}</p>
        <button 
          className="expand-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Sembunyikan Detail ↑' : 'Lihat Detail Proyek ↓'}
        </button>
        
        {expanded && (
          <div className="project-details">
            <div className="details-section">
              <h4 className="details-title">Deskripsi Lengkap</h4>
              <p className="details-text">{project.longDescription}</p>
            </div>
            
            <div className="details-section">
              <h4 className="details-title">Fitur Unggulan</h4>
              <div className="features-grid">
                {project.features.map((feature, idx) => (
                  <span key={idx} className="feature-item">{feature}</span>
                ))}
              </div>
            </div>
            
            <div className="details-section">
              <h4 className="details-title">Tech Stack</h4>
              <div className="tech-stack-grid">
                {project.techIcons.map((tech, idx) => (
                  <div key={idx} className="tech-stack-item">
                    <img src={tech.icon} alt={tech.name} className="tech-stack-img" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Links */}
        <div className="project-links">
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            <i className="fab fa-github"></i> Repository
          </a>
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link demo"
          >
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;