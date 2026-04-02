# MUSYADEV - Portfolio Website

Portfolio website modern untuk **Naufal Daffa Musyava**, seorang **Full Stack Developer** yang passionate dalam mengembangkan solusi digital. Website ini menampilkan project-project terbaru, resume, dan informasi kontak.

![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.1-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.2.2-cyan?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Tech Stack](#-tech-stack)
- [Instalasi](#-instalasi)
- [Cara Menjalankan](#-cara-menjalankan)
- [Struktur Folder](#-struktur-folder)
- [Komponen Utama](#-komponen-utama)
- [Kontribusi](#-kontribusi)
- [Kontak](#-kontak)

---

## Fitur Utama

- **Hero Section** - Presentasi profesional dengan informasi kontak  
- **Navigation Bar** - Menu navigasi dengan toggle tema (Dark/Light)  
- **Tab Navigation** - Navigasi antar section (Projects, Resume, Contact)  
- **Projects Showcase** - Pameran project dengan detail lengkap  
- **Resume Section** - Pendidikan, pengalaman, dan skill showcase  
- **Contact Form** - Form kontak dengan integrasi Formspree  
- **Dark Mode** - Support tema gelap dan terang  
- **Responsive Design** - Optimal di semua ukuran layar  
- **Social Links** - Link ke GitHub, LinkedIn, dan Instagram  

---

## Tech Stack

### Frontend
- **React** 19.2.4 - UI Library
- **Vite** 8.0.1 - Build tool & Dev server
- **Tailwind CSS** 4.2.2 - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

### Tools & Services
- **Font Awesome** - Icon library
- **Formspree** - Email form service
- **ESLint** - Code linting

---

## Instalasi

### Prasyarat
- Node.js >= 16.x
- npm atau yarn

### Langkah-langkah

1. **Clone repository**
```bash
git clone <repository-url>
cd port-proyek
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

---

## Cara Menjalankan

### Development Server
```bash
npm run dev
```
Server akan berjalan di `http://localhost:5173`

### Production Build
```bash
npm run build
```
Output akan disimpan di folder `dist/`

### Preview Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

---

## Struktur Folder

```
port-proyek/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation header
│   │   ├── Hero.jsx             # Hero section dengan avatar
│   │   ├── Sidebar.jsx          # Sidebar about section
│   │   ├── Tabs.jsx             # Tab navigation
│   │   ├── Projects.jsx         # Project list
│   │   ├── ProjectCard.jsx      # Project card component
│   │   ├── Resume.jsx           # Resume section
│   │   ├── SkillsMarquee.jsx    # Animated skills
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer
│   ├── assets/
│   │   ├── avatar.jpeg          # Avatar image
│   │   └── Screenshot...png     # Project screenshots
│   ├── App.jsx                  # Root component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/                      # Static files
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

---

## Komponen Utama

### **Navbar**
Menampilkan logo "MUSYADEV" dan tombol toggle tema

### **Hero**
Menampilkan avatar, nama, role, dan informasi kontak

### **Tabs**
Navigation untuk berpindah antar section (Projects, Resume, Contact)

### **Projects**
Showcase 2 project utama:
1. **HR-Absen** - Sistem presensi dengan Laravel + React
2. **Dedicious** - E-commerce dengan Next.js

### **Resume**
Menampilkan:
- Education timeline
- Skills showcase (SkillsMarquee)

### **Contact**
Form kontak yang terintegrasi dengan Formspree untuk menerima pesan

### **Sidebar**
Menampilkan bio singkat dan informasi lokasi

### **Footer**
Credit, social links, dan copyright

---

## Fitur Dark Mode

Aplikasi dilengkapi dengan toggle tema yang menyimpan preference di class `body`:

```javascript
// Dark mode (default)
document.body.classList.remove('light');

// Light mode
document.body.classList.add('light');
```

---

## Project Details

### HR-Absen
**Tech Stack:** Laravel + React + MySQL + Tailwind CSS

**Fitur:**
- Presensi dengan foto selfie
- Validasi GPS
- Rekap presensi bulanan
- Export ke Excel/PDF
- Multi-role system

### Dedicious
**Tech Stack:** Next.js 14 + MySQL + Prisma + Tailwind CSS

**Fitur:**
- Autentikasi Google OAuth
- Katalog produk
- Keranjang belanja
- Pembayaran Midtrans
- Admin dashboard
- Review & rating

---

## Kontak

- **Email:** [naufaldaffamusyava@gmail.com](mailto:naufaldaffamusyava@gmail.com)
- **Phone:** [+6285719699395](tel:+6285719699395)
- **GitHub:** [naufal-daffa](https://github.com/naufal-daffa)
- **LinkedIn:** [Naufal Daffa Musyava](https://www.linkedin.com/in/naufal-daffa-musyava-b4ba81323/)
- **Instagram:** [@paall.2hiigh](https://www.instagram.com/paall.2hiigh/)

---

## Lisensi

Project ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detail lebih lanjut.

---

## Kontribusi

Kontribusi sangat diterima! Untuk perubahan besar, silakan buka issue terlebih dahulu untuk mendiskusikan perubahan yang ingin Anda buat.

---

## Performance & SEO

- Lightning-fast dengan Vite
- Mobile-first responsive design
- Accessible HTML structure
- Optimized images dengan fallback

---

**Dibuat dengan oleh Naufal Daffa Musyava**