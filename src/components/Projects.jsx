import React from 'react';
import ProjectCard from './ProjectCard';
import hrAbsenThumb from '../assets/Screenshot 2025-03-01 140131.png';
import dediciousThumb from '../assets/Screenshot 2025-03-01 140949.png';

const projects = [
  {
    id: 1,
    thumbClass: 'thumb-green',
    thumbImage: hrAbsenThumb,
    badge: 'Laravel + React',
    title: 'HR-Absen',
    subtitle: 'Sistem Presensi Real-time',
    description: 'Aplikasi presensi karyawan modern dengan fitur foto selfie, validasi lokasi GPS, dan rekap presensi bulanan interaktif.',
    longDescription: `
      HR-Absen adalah sistem manajemen presensi karyawan yang dibangun dengan arsitektur modern.
      Aplikasi ini memungkinkan karyawan melakukan presensi masuk dan pulang dengan foto selfie
      menggunakan webcam, dilengkapi validasi lokasi berbasis GPS untuk memastikan karyawan berada
      di area kantor. Admin dapat melihat rekap presensi dalam bentuk chart interaktif, mengelola
      pengajuan izin/sakit, serta mengekspor laporan ke Excel atau PDF. Sistem juga dilengkapi
      notifikasi realtime menggunakan Laravel Echo dan Pusher.
    `,
    techIcons: [
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#ff2d20' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', color: '#646cff' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06b6d4' },
    ],
    features: [
      '✅ Presensi masuk/keluar dengan foto selfie',
      '✅ Validasi lokasi berbasis GPS',
      '✅ Rekap presensi per bulan (chart.js)',
      '✅ Pengajuan izin & sakit online',
      '✅ Export laporan ke Excel/PDF',
      '✅ Notifikasi realtime (Laravel Echo)',
      '✅ Multi-role (Admin & Karyawan)',
      '✅ Dark mode support'
    ],
    type: 'Fullstack Web App',
    name: 'HR-Absen | Presensi Karyawan',
    repoLink: 'https://github.com/yourusername/hr-absen',
    demoLink: '#'
  },
  {
    id: 2,
    thumbClass: 'thumb-purple',
    thumbImage: dediciousThumb,
    badge: 'Next.js 14',
    title: 'Dedicious',
    subtitle: 'Modern E-commerce',
    description: 'Toko online modern dengan fitur lengkap: katalog produk, keranjang, pembayaran Midtrans, dan admin panel.',
    longDescription: `
      Dedicious adalah platform e-commerce modern yang dibangun dengan Next.js 14 App Router.
      Aplikasi ini menyediakan pengalaman belanja yang seamless dengan fitur autentikasi Google OAuth,
      katalog produk dengan filter dan search, sistem keranjang belanja yang tersimpan di database,
      serta integrasi pembayaran dengan Midtrans/Xendit. Admin dapat mengelola produk, kategori,
      dan melihat riwayat pesanan melalui dashboard admin yang intuitif. Setiap transaksi akan
      mengirimkan invoice otomatis ke email pelanggan.
    `,
    techIcons: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479a1' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06b6d4' },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', color: '#2d3748' },
      { name: 'Midtrans', icon: 'https://avatars.githubusercontent.com/u/34539978?s=200&v=4', color: '#00a86b' }
    ],
    features: [
      '✅ Autentikasi (Google OAuth + Credentials)',
      '✅ Katalog produk + filter & search',
      '✅ Keranjang belanja (database)',
      '✅ Checkout dengan Midtrans/Xendit',
      '✅ Riwayat pesanan pelanggan',
      '✅ Admin panel (CRUD produk & kategori)',
      '✅ Invoice otomatis via email',
      '✅ Review & rating produk',
      '✅ Responsive design'
    ],
    type: 'E-commerce Web App',
    name: 'Dedicious Store | Belanja Modern',
    repoLink: 'https://github.com/yourusername/dedicious-store',
    demoLink: '#'
  },
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