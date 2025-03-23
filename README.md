# Company Profile Website - Fintech Project

## 📌 Informasi Kelompok

| NIM        | Nama                      |
|------------|---------------------------|
| 411231033  | Budi Purnomo              |
| 411231034  | Cornelia Septi Anita      |
| 411231059  | Mutiara Butet Lamria      |
| 411231104  | Zestianza Dwi Elzaputra   |
| 411231215  | Tri Juliana               |

## 📖 Deskripsi Project

Project ini merupakan pengembangan *Company Profile Website* berbasis *fintech* yang bertujuan untuk menampilkan informasi perusahaan, layanan yang ditawarkan, serta fitur-fitur lain yang relevan. Website ini juga memiliki fitur CRUD untuk admin guna mengelola konten dengan lebih mudah.

## 🎯 Fitur Website

1. **Beranda (Home)**
   - Menampilkan informasi tentang perusahaan, termasuk visi, misi, dan struktur organisasi.

2. **Layanan/Jasa**
   - Menampilkan layanan atau jasa yang ditawarkan oleh perusahaan.

3. **Admin Panel**
   - Mengelola seluruh konten dalam website (CRUD - Create, Read, Update, Delete).

4. **Kontak & Feedback**
   - Halaman untuk pengguna menghubungi perusahaan dan memberikan masukan.
   - Terletak di bagian paling bawah halaman.

5. **Berita**
   - Menampilkan berita atau informasi terkini yang berkaitan dengan perusahaan atau industri fintech.

6. **Master Data**
   - Mengelola berbagai data yang diperlukan dalam website.

## 📂 Struktur Folder

```
/ (Root Project)
│── public/          # Folder untuk aset publik (gambar, CSS, JS)
│── src/             # Folder utama untuk pengembangan aplikasi
│   ├── components/  # Komponen yang digunakan dalam website
│   ├── pages/       # Halaman-halaman website (Home, Layanan, dll.)
│   ├── admin/       # Halaman khusus untuk admin (CRUD Management)
│── database/        # Struktur database dan migrasi
│── config/          # Konfigurasi aplikasi
│── README.md        # Dokumentasi project
│── index.html       # File utama halaman depan
│── package.json     # Dependencies dan konfigurasi npm
```

## ⚙️ Teknologi yang Digunakan

- HTML, CSS, JavaScript (Frontend)
- PHP / Laravel (Backend)
- MySQL (Database)
- Bootstrap / Tailwind CSS (UI Framework)
- GitHub untuk kolaborasi

## 🚀 Cara Menjalankan Project

1. **Clone Repository**
   ```sh
   git clone https://github.com/[akun-github-pemilik-repository]/[nama-project-repository].git
   ```

2. **Masuk ke Folder Project**
   ```sh
   cd [nama-project-repository]
   ```

3. **Instalasi Dependencies**
   ```sh
   npm install  # Jika menggunakan Node.js
   composer install  # Jika menggunakan Laravel
   ```

4. **Konfigurasi Database**
   - Buat database baru di MySQL
   - Sesuaikan file `.env` dengan konfigurasi database
   
5. **Menjalankan Server**
   ```sh
   php artisan serve  # Jika menggunakan Laravel
   npm start  # Jika menggunakan React/Vue/Angular
   ```

6. **Akses Website**
   Buka browser dan akses `http://localhost:8000` (atau sesuai dengan konfigurasi server kalian).

## 🔗 Kolaborasi melalui GitHub

Agar lebih mudah dalam mengakses dan mengedit kode secara langsung, kalian bisa menggunakan fitur **GitHub1s** dengan cara menambahkan `1s` setelah `github` pada URL repository kalian.

**Contoh:**
```
https://github1s.com/[akun-github-pemilik-repository]/[nama-project-repository]
```
Dengan cara ini, kalian bisa melihat kode dalam mode VS Code langsung dari browser.

---

Semoga dokumentasi ini membantu! Jika ada pertanyaan, silakan diskusikan dalam grup. 🚀
