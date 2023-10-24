*: Selector universal yang memilih semua elemen dalam dokumen.

css
Copy code
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
margin: 0;: Menghilangkan margin default pada semua elemen.
padding: 0;: Menghilangkan padding default pada semua elemen.
box-sizing: border-box;: Mengatur model kotak elemen menjadi "border-box".
font-family: 'Open Sans', sans-serif;: Mengatur jenis font default untuk teks.
body: Gaya untuk elemen <body>.

css
Copy code
body {
    height: 100vh;
    background-color: #000;
    background-image: linear-gradient(115deg, rgba(0, 0, 0, 0.671), rgba(0, 0, 0, 0.782)),
        url('https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1800&t=st=1690999663~exp=1691000263~hmac=90385b49edc6ed76e90252dd139012b1dc955896a6920909c9f045f80eb124c1');
    background-size: cover;
    background-position: center;
}
height: 100vh;: Mengatur tinggi elemen <body> menjadi 100% dari tinggi viewport.
background-color: #000;: Mengatur warna latar belakang menjadi hitam.
background-image: Menetapkan gambar latar belakang dan gradient linear.
background-size: cover;: Membuat latar belakang mencakup seluruh elemen <body>.
background-position: center;: Menyusun latar belakang ke tengah elemen.
li: Gaya untuk elemen daftar (<li>).

css
Copy code
li {
    list-style: none;
}
list-style: none;: Menghilangkan gaya daftar default pada elemen <li>.
a: Gaya untuk elemen tautan (<a>).

css
Copy code
a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
}
text-decoration: none;: Menghilangkan dekorasi teks pada tautan.
color: #fff;: Mengatur warna teks tautan menjadi putih.
font-size: 1rem;: Mengatur ukuran font tautan.
a:hover: Gaya untuk tautan saat dihover.

css
Copy code
a:hover {
    color: orange;
}
color: orange;: Mengatur warna teks tautan menjadi oranye saat dihover.
header: Gaya untuk elemen header.

css
Copy code
header {
    position: relative;
    padding: 0 2rem;
}
position: relative;: Menetapkan posisi elemen header menjadi relatif.
padding: 0 2rem;: Memberikan padding pada elemen header.
.navbar: Gaya untuk elemen dengan kelas "navbar".

css
Copy code
.navbar {
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
width: 100%;: Mengatur lebar elemen navbar menjadi 100% dari lebar induknya.
height: 60px;: Mengatur tinggi elemen navbar.
max-width: 1200px;: Mengatur lebar maksimum elemen navbar.
margin: 0 auto;: Memberikan margin otomatis untuk memusatkan elemen.
display: flex;: Menggunakan flexbox untuk tata letak.
align-items: center;: Menyusun elemen secara vertikal di tengah.
justify-content: space-between;: Memberikan ruang sekitar elemen di dalamnya.
.navbar .logo a: Gaya untuk tautan di dalam elemen dengan kelas "logo" di dalam elemen navbar.

css
Copy code
.navbar .logo a {
    font-size: 1.5rem;
    font-weight: bold;
}
font-size: 1.5rem;: Mengatur ukuran font tautan di dalam logo.
font-weight: bold;: Mengatur ketebalan font menjadi tebal.
.navbar .links: Gaya untuk elemen dengan kelas "links" di dalam elemen navbar.

css
Copy code
.navbar .links {
    display: flex;
    gap: 2rem;
}
display: flex;: Menggunakan flexbox untuk tata letak elemen di dalam "links".
gap: 2rem;: Menetapkan jarak antara elemen-elemen anak di dalam "links".
.navbar .toggle_btn: Gaya untuk tombol toggle di dalam elemen navbar.

css
Copy code
.navbar .toggle_btn {
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
}
color: #fff;: Mengatur warna ikon tombol toggle.
font-size: 1.5rem;: Mengatur ukuran ikon tombol toggle.
cursor: pointer;: Mengubah kursor menjadi tanda tangan saat diarahkan ke tombol toggle.
display: none;: Menyembunyikan tombol toggle pada tata letak desktop.
