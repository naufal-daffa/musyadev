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
    subtitle: 'Sistem Presensi Real-time',
    description: 'Aplikasi presensi karyawan modern dengan fitur foto selfie, validasi lokasi GPS, dan rekap presensi bulanan interaktif.',
    techIcons: [
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#ff2d20' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06b6d4' },
    ],
    features: [
      '✅ Presensi masuk/keluar dengan foto selfie',
      '✅ Validasi lokasi berbasis GPS',
      '✅ Rekap presensi per bulan',
      '✅ Pengajuan izin & sakit online',
      '✅ Export laporan ke Excel/PDF',
      '✅ Multi-role (Admin & Karyawan)'
    ],
    type: 'Web App',
    name: 'HR-Absen - Presensi Karyawan',
    repo: '#'
  },
  {
    id: 2,
    thumbClass: 'thumb-purple',
    thumbImage: dediciousThumb,
    badge: 'Next.js 14 + Midtrans',
    title: 'Dedicious',
    subtitle: 'Modern E-commerce',
    description: 'Toko online modern dengan fitur katalog produk, keranjang belanja, pembayaran Midtrans, dan admin panel.',
    techIcons: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06b6d4' },
      { name: 'Midtrans', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqUjkPMyCCyT2bvjWXAewgxQnnARiQ1Nzxw&s', color: '#00a86b' }
    ],
    features: [
      '✅ Autentikasi Google OAuth',
      '✅ Katalog produk + filter & search',
      '✅ Keranjang belanja',
      '✅ Pembayaran dengan Midtrans (CC, VA, QRIS)',
      '✅ Riwayat pesanan',
      '✅ Admin panel (CRUD produk)'
    ],
    type: 'Web App',
    name: 'Dedicious - E-commerce Modern',
    repo: '#'
  },
  {
    id: 3,
    thumbClass: 'thumb-blue',
    thumbImage: spmbThumb,
    badge: 'Laravel + Bootstrap',
    title: 'SPMB Online',
    subtitle: 'Sistem Penerimaan Murid Baru',
    description: 'Platform digital untuk manajemen pendaftaran siswa baru dengan fitur registrasi online, verifikasi dokumen, seleksi, dan pengumuman hasil.',
    techIcons: [
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#ff2d20' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952b3' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', color: '#0769ad' },
      { name: 'Midtrans', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqUjkPMyCCyT2bvjWXAewgxQnnARiQ1Nzxw&s', color: '#00a86b' }
    ],
    features: [
      '✅ Pendaftaran online dengan form digital',
      '✅ Upload dokumen persyaratan',
      '✅ Validasi data otomatis',
      '✅ 3 role: Admin, Staff, Pendaftar',
      '✅ Kelola jalur pendaftaran',
      '✅ Kelola gelombang registrasi',
      '✅ Verifikasi dokumen & pembayaran',
      '✅ Proses seleksi & scoring',
      '✅ Pengumuman hasil via dashboard',
      '✅ Generate laporan Excel/PDF',
      '✅ Dashboard realtime dengan chart'
    ],
    type: 'Web App',
    name: 'SPMB Online - Penerimaan Murid Baru',
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