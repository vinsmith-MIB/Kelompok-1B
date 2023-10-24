Berikut laporan CSS surveyweb

1\. \*\*Import Font:\*\*

\`\`\`css

\@import
url(\'https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&display=swap\');

\`\`\`

\- Ini mengimpor dua jenis font dari Google Fonts, yaitu \'Open Sans\'
dan \'Poppins\', yang akan digunakan dalam halaman web.

2\. \*\*Background Image:\*\*

\`\`\`css

body::before {

content: \'\';

background-image: linear-gradient(115deg, rgba(58, 58, 158, 0.8),
rgba(136, 136, 206, 0.7)),

url(https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1800&t=st=1690999663\~exp=1691000263\~hmac=90385b49edc6ed76e90252dd139012b1dc955896a6920909c9f045f80eb124c1);

background-size: cover;

background-position: center;

top: 0;

left: 0;

z-index: -1;

position: fixed;

height: 100%;

width: 100%;

}

\`\`\`

\- Membuat latar belakang dengan gradient linear dan gambar latar
belakang dari URL yang diberikan.

\- Latar belakang ini ditetapkan sebagai elemen sebelumnya (before) pada
halaman dengan posisi tetap (fixed) sehingga menciptakan efek parallax.

3\. \*\*Body Styling:\*\*

\`\`\`css

body {

margin: 0;

padding: 0 0 3rem 0;

font-family: \'Poppins\', sans-serif;

color: #ffffff;

font-size: 1rem;

}

\`\`\`

\- Mengatur margin, padding, font-family, warna teks, dan ukuran font
pada seluruh halaman web. Terdapat padding bawah sebesar 3rem untuk
memberikan ruang di bagian bawah halaman.

4\. \*\*Styling Tautan (Links):\*\*

\`\`\`css

a {

text-decoration: none;

color: #fff;

font-size: 1rem;

}

\`\`\`

\- Menghapus dekorasi (underline) pada tautan, mengatur warna teks, dan
ukuran font.

5\. \*\*Efek Hover pada Tautan:\*\*

\`\`\`css

a:hover {

color: orange;

}

\`\`\`

\- Ketika kursor mouse berada di atas tautan, warna teks akan berubah
menjadi oranye.

6\. \*\*Header Styling:\*\*

\- Mendefinisikan tampilan header yang umumnya berisi navbar dan judul
halaman.

7\. \*\*Navbar Styling:\*\*

\- Mengatur tampilan navbar, termasuk logo, tautan, tombol toggle, dan
tombol aksi.

8\. \*\*Responsif Design:\*\*

\- Media queries untuk mengubah tampilan navbar saat lebar layar kurang
dari 992px atau 576px.

\- Ketika lebar layar cukup kecil, tautan dan tombol aksi pada navbar
disembunyikan, dan tombol toggle akan muncul.

9\. \*\*Container dan Form Styling:\*\*

\- Mengatur tampilan wadah (container) yang umumnya digunakan untuk
mengelompokkan elemen-elemen halaman.

\- Membuat latar belakang dengan tingkat transparansi dan memberikan
padding serta ukuran font pada elemen form.

10\. \*\*Styling Form Elements:\*\*

\- Mengatur tampilan elemen-elemen form seperti label, input, textarea,
dan tombol.

\- Menyediakan beberapa aturan CSS untuk elemen-elemen tersebut seperti
lebar, tinggi, margin, dan padding.

11\. \*\*Styling Pindah Halaman (Pagination):\*\*

\- Mengatur tampilan elemen yang digunakan untuk navigasi antar halaman.

\- Membuat tombol, tautan, dan aturan hover untuk elemen ini.

Kode ini digunakan untuk merancang dan mengatur tampilan halaman web
dengan tampilan latar belakang menarik, elemen-elemen responsif, dan
gaya yang konsisten untuk elemen-elemen seperti teks, tautan, dan
tombol.
