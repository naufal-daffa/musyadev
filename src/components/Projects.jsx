import React from 'react';
import ProjectCard from './ProjectCard';
import hrAbsenThumb from '../assets/hr-absen.png';
import dediciousThumb from '../assets/dedicious.png';
import spmbThumb from '../assets/spmb.png';

const projects = [
  {
    id: 1,
    thumbClass: 'thumb-green',
    thumbImage: hrAbsenThumb,
    badge: 'Laravel + React',
    title: 'HR-Absen',
    subtitle: 'Real-time Attendance System',
    description: 'A modern employee attendance application with selfie verification, GPS-based location validation, and interactive monthly attendance reports.',
    techIcons: [
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#ff2d20' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06b6d4' },
    ],
    features: [
      '✅ Clock-in/out with selfie verification',
      '✅ GPS-based location validation',
      '✅ Monthly attendance reports',
      '✅ Online leave & sick requests',
      '✅ Export reports to Excel/PDF',
      '✅ Multi-role system (Admin & Employee)'
    ],
    type: 'Web App',
    name: 'HR-Absen - Employee Attendance System',
    repo: '#'
  },
  {
    id: 2,
    thumbClass: 'thumb-purple',
    thumbImage: dediciousThumb,
    badge: 'Next.js 14 + Midtrans',
    title: 'Dedicious',
    subtitle: 'Modern E-commerce',
    description: 'A modern online store featuring product catalog, shopping cart, Midtrans payment integration, and an admin dashboard.',
    techIcons: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06b6d4' },
      { name: 'Midtrans', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqUjkPMyCCyT2bvjWXAewgxQnnARiQ1Nzxw&s', color: '#00a86b' }
    ],
    features: [
      '✅ Google OAuth authentication',
      '✅ Product catalog with filtering & search',
      '✅ Shopping cart system',
      '✅ Midtrans payment integration (CC, VA, QRIS)',
      '✅ Order history tracking',
      '✅ Admin panel (product CRUD)'
    ],
    type: 'Web App',
    name: 'Dedicious - Modern E-commerce',
    repo: '#'
  },
  {
    id: 3,
    thumbClass: 'thumb-blue',
    thumbImage: spmbThumb,
    badge: 'Laravel + Bootstrap',
    title: 'SPMB Online',
    subtitle: 'Student Admission System',
    description: 'A digital platform for managing student admissions with online registration, document verification, selection process, and result announcements.',
    techIcons: [
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#ff2d20' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952b3' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', color: '#0769ad' },
      { name: 'Midtrans', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqUjkPMyCCyT2bvjWXAewgxQnnARiQ1Nzxw&s', color: '#00a86b' }
    ],
    features: [
      '✅ Online registration with digital forms',
      '✅ Document upload system',
      '✅ Automated data validation',
      '✅ 3 roles: Admin, Staff, Applicant',
      '✅ Admission pathway management',
      '✅ Registration wave management',
      '✅ Document & payment verification',
      '✅ Selection & scoring process',
      '✅ Result announcements via dashboard',
      '✅ Export reports to Excel/PDF',
      '✅ Real-time dashboard with charts'
    ],
    type: 'Web App',
    name: 'SPMB Online - Student Admission System',
    repo: 'https://github.com/naufal-daffa/ppdb-site'
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="project-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;