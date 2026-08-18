import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  id: {
    translation: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        portfolio: 'Portofolio',
        skills: 'Keahlian',
        experience: 'Pengalaman',
        contact: 'Kontak',
      },
      hero: {
        hi: 'Hi, nama saya',
        im: 'Saya merancang',
        desc: 'Saya seorang mahasiswa Teknik Informatika dengan fokus sebagai Full-stack Web Developer & AI Enthusiast. Saya senang merancang aplikasi web modern dan mengintegrasikannya dengan teknologi machine learning.',
        btn_projects: 'Lihat Proyek',
        btn_cv: 'Unduh CV',
        seq1: 'solusi Web Modern.',
        seq2: 'model Artificial Intelligence.',
        seq3: 'sistem Backend yang tangguh.',
      },
      about: {
        title: 'Tentang Saya',
        desc1: 'Halo! Saya Adji Setyawan Saputra, seorang pengembang yang bersemangat dalam menciptakan solusi digital yang efisien dan memukau. Ketertarikan saya pada dunia pemrograman dimulai sejak masa kuliah, di mana saya menyadari potensi besar teknologi untuk memecahkan masalah dunia nyata.',
        desc2: 'Fokus utama saya saat ini adalah membangun aplikasi web modern yang responsif dan mengintegrasikan model Machine Learning ke dalam arsitektur backend yang kokoh. Saya selalu antusias mempelajari teknologi baru dan siap menghadapi tantangan teknis berikutnya.',
      },
      portfolio: {
        title: 'Project Saya',
      },
      skills: {
        title: 'Keahlian',
      },
      experience: {
        title: 'Pengalaman',
      },
      contact: {
        subtitle: 'Apa Selanjutnya?',
        title: 'Mulai Terhubung',
        desc: 'Saya saat ini terbuka untuk peluang baru, baik itu proyek kolaborasi, pekerjaan lepas (freelance), maupun posisi penuh waktu (full-time). Silakan isi formulir di bawah ini atau sapa saya melalui Email maupun media sosial.',
        name: 'Nama Anda',
        email: 'Email Anda',
        msg: 'Pesan',
        send: 'Kirim Pesan',
        sending: 'Mengirim...',
      },
      articles: {
        title: 'Blog / Artikel',
        read_more: 'Baca Selengkapnya',
        close: 'Tutup',
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        skills: 'Skills',
        experience: 'Experience',
        contact: 'Contact',
      },
      hero: {
        hi: 'Hi, my name is',
        im: 'I build',
        desc: 'I am an Informatics Engineering student with a focus on Full-stack Web Development & AI Enthusiast. I love designing modern web applications and integrating them with machine learning technologies.',
        btn_projects: 'View Projects',
        btn_cv: 'Download CV',
        seq1: 'Modern Web solutions.',
        seq2: 'Artificial Intelligence models.',
        seq3: 'robust Backend systems.',
      },
      about: {
        title: 'About Me',
        desc1: 'Hello! I am Adji Setyawan Saputra, a developer passionate about creating efficient and stunning digital solutions. My interest in programming started during college, where I realized the immense potential of technology in solving real-world problems.',
        desc2: 'My main focus today is building responsive modern web applications and integrating Machine Learning models into solid backend architectures. I am always eager to learn new technologies and ready to tackle the next technical challenge.',
      },
      portfolio: {
        title: 'My Projects',
      },
      skills: {
        title: 'Skills',
      },
      experience: {
        title: 'Experience',
      },
      contact: {
        subtitle: 'What\'s Next?',
        title: 'Get In Touch',
        desc: 'I am currently open to new opportunities, whether it\'s collaborative projects, freelance work, or full-time positions. Please fill out the form below or say hello via Email or social media.',
        name: 'Your Name',
        email: 'Your Email',
        msg: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
      },
      articles: {
        title: 'Blog / Articles',
        read_more: 'Read More',
        close: 'Close',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'id',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
