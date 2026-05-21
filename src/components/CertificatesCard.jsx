import React, { useState } from 'react';

const CertificatesCard = ({ certificate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = 'https://placehold.co/600x400/1a1a1a/888?text=Certificate+Preview';

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="project-card certificate-card">
        <div className="project-thumb thumb-blue" onClick={openModal} style={{ cursor: 'pointer' }}>
          <img 
            src={imageError ? fallbackImage : certificate.image} 
            alt={certificate.title}
            className="project-thumb-img"
            onError={() => setImageError(true)}
          />
          <div className="thumb-overlay">
            {certificate.badge && <div className="thumb-badge">{certificate.badge}</div>}
            <div className="thumb-title">
              {certificate.title}
              <span className="thumb-subtitle">{certificate.issuer}</span>
            </div>
          </div>
        </div>

        <div className="project-info">
          <div className="project-type">{certificate.issuer}</div>
          <div className="project-name" style={{ fontSize: '1.1rem', margin: '5px 0' }}>{certificate.title}</div>
          <p className="project-short-desc" style={{ fontSize: '0.85rem' }}>
            ID Kredensial: {certificate.credentialId || '-'} <br />
            Diterbitkan: {certificate.issuedDate}
          </p>
          
          <button className="detail-btn" onClick={openModal}>
            <i className="fas fa-eye"></i> View Certificate
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{certificate.title}</h2>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-thumb" style={{ maxHeight: 'none' }}>
                <img 
                  src={imageError ? fallbackImage : certificate.image} 
                  alt={certificate.title}
                  className="modal-thumb-img"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
              
              <div className="modal-section" style={{ marginTop: '20px' }}>
                <h4 className="modal-section-title">
                  <i className="fas fa-info-circle"></i> Certificate Information
                </h4>
                <div className="modal-info-grid">
                  <div className="modal-info-item">
                    <span className="modal-info-label">Penerbit:</span>
                    <span className="modal-info-value">{certificate.issuer}</span>
                  </div>
                  <div className="modal-info-item">
                    <span className="modal-info-label">Tanggal Terbit:</span>
                    <span className="modal-info-value">{certificate.issuedDate}</span>
                  </div>
                  <div className="modal-info-item">
                    <span className="modal-info-label">ID Kredensial:</span>
                    <span className="modal-info-value"><code>{certificate.credentialId}</code></span>
                  </div>
                </div>
              </div>

              {certificate.skills && (
                <div className="modal-section">
                  <h4 className="modal-section-title">
                    <i className="fas fa-tools"></i> Skills Verified
                  </h4>
                  <div className="modal-features-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {certificate.skills.map((skill, idx) => (
                      <span key={idx} className="modal-feature-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.85rem' }}>
                        🛠️ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="modal-footer">
              <button className="modal-footer-btn close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesCard;