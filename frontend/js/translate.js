const translations = {
    id: {
        'email': '✉️ cs@bacotzgroup.com',
        'phone': '📞 (021) 1234-5678',
        'nav-home': 'Beranda',
        'nav-services': 'Layanan',
        'nav-news': 'Berita',
        'nav-contact': 'Kontak',
        'contact-btn': 'Hubungi Kami',
        'services-title': 'Layanan Kami',
        'company-tagline': 'Bringing Advanced Cashflow Optimization Through Zeal',
        'company-desc': 'Dengan semangat inovasi dan pertumbuhan berkelanjutan, PT. Bacotz Group Fintech hadir sebagai solusi keuangan berbasis teknologi yang mengoptimalkan arus kas dan mendukung kemajuan finansial masyarakat di era digital.',
        'company-history': 'Sejak didirikan pada tahun 2025, Bacotz Group telah berkembang dari skala kecil dengan satu produk menjadi perusahaan fintech yang kompetitif, menghadirkan layanan yang lebih luas dan infrastruktur berbasis teknologi modern. Kami berkomitmen untuk terus memberikan solusi keuangan yang cepat, aman dan efisien, membantu individu serta bisnis dalam mengelola dan mengoptimalkan arus kas mereka.',
        'company-license': 'Sebagai penyedia layanan keuangan berbasis teknologi yang terpercaya, PT. Bacotz Group Fintech telah memperoleh izin resmi dari Otoritas Jasa Keuangan (OJK) berdasarkan Keputusan Dewan Komisioner OJK KEP - XXX/D.05/20XX tanggal XX XXXX 20XX.',
        'company-mission': 'Dengan pendekatan berbasis teknologi dan semangat inovasi, kami terus menghadirkan solusi finansial yang lebih cerdas, mempercepat pertumbuhan bisnis, serta memudahkan akses ke layanan keuangan bagi masyarakat luas.',
        'why-choose': 'Mengapa Memilih Bacotz Group Fintech?',
        'bacotz-meaning': '💡 B.A.C.O.T.Z → Bringing Advanced Cashflow Optimization Through Zeal (Membawa optimasi arus kas yang canggih dengan semangat inovasi)',
        'bringing-solutions': 'Kami menghadirkan solusi keuangan digital yang inovatif untuk membantu individu dan bisnis mengelola keuangan dengan lebih baik.',
        'advanced-tech': 'Dengan teknologi canggih, proses pembiayaan menjadi lebih cepat, aman, dan efisien tanpa hambatan yang tidak perlu.',
        'cashflow-opt': 'Layanan kami dirancang untuk mengoptimalkan arus kas, memastikan kestabilan keuangan, dan mendukung pertumbuhan bisnis Anda.',
        'security': 'Keamanan data adalah prioritas utama kami. Setiap transaksi dilindungi dengan sistem enkripsi tinggi dan diawasi oleh OJK.',
        'innovation': 'Kami terus berinovasi untuk memberikan pengalaman keuangan yang lebih fleksibel dan sesuai dengan kebutuhan zaman.',
        'commitment': 'Dengan semangat dan dedikasi tinggi, Bacotz Group Fintech berkomitmen memberikan layanan terbaik yang terpercaya dan mudah diakses oleh semua orang.',
        'footer-copyright': '© Copyright 2025. Bacotz Group. All Rights Reserved',
        'footer-ojk': 'Terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK)',
        'register-title': 'Daftar - Bacotz Group',
        'register-heading': 'Pendaftaran',
        'register-name': 'Nama Lengkap',
        'register-email': 'Email',
        'register-phone': 'No. Telepon',
        'register-company': 'Nama Perusahaan',
        'register-submit': 'Kirim',
        'register-info': 'Silakan isi informasi dibawah dan tim ahli kami akan segera menghubungi Anda.'
    },
    en: {
        'email': '✉️ cs@bacotzgroup.com',
        'phone': '📞 (021) 1234-5678',
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-news': 'News',
        'nav-contact': 'Contact',
        'contact-btn': 'Contact Us',
        'about-title': 'About Us',
        'services-title': 'Our Services',
        'company-tagline': 'Bringing Advanced Cashflow Optimization Through Zeal',
        'company-desc': 'With a spirit of innovation and sustainable growth, PT. Bacotz Group Fintech presents technology-based financial solutions that optimize cash flow and support financial advancement in the digital era.',
        'company-history': 'Since its establishment in 2025, Bacotz Group has grown from a small-scale operation with a single product to become a competitive fintech company, offering broader services and modern technology infrastructure. We are committed to continuously providing fast, secure, and efficient financial solutions, helping individuals and businesses manage and optimize their cash flow.',
        'company-license': 'As a trusted technology-based financial service provider, PT. Bacotz Group Fintech has obtained official license from the Financial Services Authority (OJK) based on OJK Board of Commissioners Decree KEP - XXX/D.05/20XX dated XX XXXX 20XX.',
        'company-mission': 'With our technology-based approach and spirit of innovation, we continue to deliver smarter financial solutions, accelerate business growth, and facilitate access to financial services for the broader community.',
        'why-choose': 'Why Choose Bacotz Group Fintech?',
        'bacotz-meaning': '💡 B.A.C.O.T.Z → Bringing Advanced Cashflow Optimization Through Zeal',
        'bringing-solutions': 'We deliver innovative digital financial solutions to help individuals and businesses better manage their finances.',
        'advanced-tech': 'With advanced technology, financing processes become faster, more secure, and efficient without unnecessary obstacles.',
        'cashflow-opt': 'Our services are designed to optimize cash flow, ensure financial stability, and support your business growth.',
        'security': 'Data security is our top priority. Every transaction is protected with high-level encryption and supervised by OJK.',
        'innovation': 'We continuously innovate to provide more flexible financial experiences that meet modern needs.',
        'commitment': 'With high spirit and dedication, Bacotz Group Fintech is committed to providing the best, trusted services accessible to everyone.',
        'footer-copyright': '© Copyright 2025. Bacotz Group. All Rights Reserved',
        'footer-ojk': 'Registered and supervised by Financial Services Authority (OJK)',
        'register-title': 'Register - Bacotz Group',
        'register-heading': 'Registration',
        'register-name': 'Full Name',
        'register-email': 'Email',
        'register-phone': 'Phone Number',
        'register-company': 'Company Name',
        'register-submit': 'Send',
        'register-info': 'Please fill in the information below and our expert team will contact you shortly.'
    }
};

// Create global translation handler
const TranslationManager = {
    init() {
        const savedLang = localStorage.getItem('preferred-lang') || 'id';
        this.changeLang(savedLang);
        this.bindLanguageSwitcher();
    },

    bindLanguageSwitcher() {
        document.querySelectorAll('[data-lang]').forEach(btn => {
            btn.addEventListener('click', () => this.changeLang(btn.dataset.lang));
        });
    },

    changeLang(lang) {
        if (!translations[lang]) return;
        
        document.documentElement.setAttribute('lang', lang);
        this.updateTranslations(lang);
        localStorage.setItem('preferred-lang', lang);
    },

    updateTranslations(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = translations[lang][key];
            
            if (translation) {
                this.updateElement(element, translation);
            }
        });
    },

    updateElement(element, translation) {
        if (element.hasAttribute('placeholder')) {
            element.placeholder = translation;
        } else {
            element.innerHTML = translation;
        }
    }
};

// Initialize translation system
TranslationManager.init();
