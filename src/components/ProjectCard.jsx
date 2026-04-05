import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = 'https://placehold.co/600x338/1a1a1a/888?text=Project+Preview';

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
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
                {project.techIcons.slice(0, 5).map((tech, idx) => (
                  <div key={idx} className="tech-icon-wrapper" title={tech.name}>
                    <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                  </div>
                ))}
                {project.techIcons.length > 5 && (
                  <div className="tech-icon-wrapper more-icon" title={`+${project.techIcons.length - 5} more`}>
                    <span>+{project.techIcons.length - 5}</span>
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
          
          {/* Tombol Lihat Detail Proyek */}
          <button 
            className="detail-btn"
            onClick={openModal}
          >
            <i className="fas fa-info-circle"></i> Lihat Detail Proyek
          </button>
        </div>
      </div>

      {/* Modal untuk Detail Proyek */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{project.name}</h2>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="modal-body">
              {/* Thumbnail kecil di modal */}
              <div className="modal-thumb">
                <img 
                  src={imageError ? fallbackImage : project.thumbImage} 
                  alt={project.title}
                  className="modal-thumb-img"
                />
                {project.badge && <div className="modal-badge">{project.badge}</div>}
              </div>
              
              {/* Deskripsi Lengkap */}
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <i className="fas fa-align-left"></i> Deskripsi Lengkap
                </h4>
                <p className="modal-text">{project.longDescription || project.description}</p>
              </div>
              
              {/* Fitur Unggulan */}
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <i className="fas fa-star"></i> Fitur Unggulan
                </h4>
                <div className="modal-features-grid">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="modal-feature-item">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tech Stack */}
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <i className="fas fa-code"></i> Tech Stack
                </h4>
                <div className="modal-tech-grid">
                  {project.techIcons.map((tech, idx) => (
                    <div key={idx} className="modal-tech-item">
                      <img src={tech.icon} alt={tech.name} className="modal-tech-img" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Informasi Tambahan */}
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <i className="fas fa-tag"></i> Informasi Proyek
                </h4>
                <div className="modal-info-grid">
                  <div className="modal-info-item">
                    <span className="modal-info-label">Tipe:</span>
                    <span className="modal-info-value">{project.type}</span>
                  </div>
                  <div className="modal-info-item">
                    <span className="modal-info-label">Status:</span>
                    <span className="modal-info-value badge-success">Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="modal-footer-btn close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i> Tutup
              </button>
              {project.repo && project.repo !== '#' && (
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-footer-btn repo-btn"
                >
                  <i className="fab fa-github"></i> Lihat Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;