import React from 'react'
import CertificatesCard from './CertificatesCard'
import baseAi from '../assets/Dicoding/baseAi.png'
import baseWeb from '../assets/Dicoding/baseWeb.png'
import feBegin from '../assets/Dicoding/feBeginner.png'

const certificatesData = [
  {
    id: 1,
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    issuedDate: '12 Januari 2024',
    credentialId: 'JMZVEMYKOPN9',
    credentialUrl: 'https://www.dicoding.com/',
    image: baseAi,
    badge: 'Artificial Intellegent',
  },
  {
    id: 2,
    title: 'Belajar Pemograman Web',
    issuer: 'Dicoding',
    issuedDate: '10 Oktober 2024',
    credentialId: '53XEQ4449XRN',
    credentialUrl: 'https://www.dicoding.com/',
    image: baseWeb,
    badge: 'Front-End',
    skills: ['HTML', 'CSS']
  },
  {
    id: 3,
    title: 'Belajar Membuat Frontend Web Untuk Pemula',
    issuer: 'Dicoding',
    issuedDate: '12 Januari 2024',
    credentialId: '6RPNRKMQ5X2M',
    credentialUrl: 'https://www.dicoding.com/',
    image: feBegin,
    badge: 'Front-End',
    skills: ['React']
  }
];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <div className="project-grid">
        {certificatesData.map(cert => (
          <CertificatesCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;