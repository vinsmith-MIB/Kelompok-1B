Laporan stylecss

*: Selector universal yang memilih semua elemen dalam dokumen.

css

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

Gaya dasar untuk tombol aksi (.action_btn):

css
Copy code
.action_btn {
    color: #fbfcfd;
    padding: 10px 20px;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    line-height: 80px;
}
color: #fbfcfd;: Mengatur warna teks tombol aksi menjadi putih.
padding: 10px 20px;: Menetapkan padding untuk tombol aksi.
background: transparent;: Mengatur latar belakang tombol aksi menjadi transparan.
border: 1px solid #fff;: Menetapkan border (garis tepi) untuk tombol aksi dengan warna putih.
border-radius: 20px;: Memberikan border-radius (radius sudut) pada tombol aksi sehingga memiliki sudut yang lebih lembut.
outline: none;: Menghilangkan garis fokus (outline) pada tombol aksi saat di-klik.
cursor: pointer;: Mengubah kursor menjadi tanda tangan saat diarahkan ke tombol aksi.
line-height: 80px;: Memberikan tinggi garis pada tombol aksi sehingga teksnya berada di tengah tombol.
Gaya untuk saat tombol aksi dihover:

css
Copy code
.action_btn:hover {
    scale: 1.05;
    color: #00e5ff;
}
scale: 1.05;: Menggunakan transformasi skala untuk membuat efek membesar 5% pada tombol saat dihover.
color: #00e5ff;: Mengubah warna teks tombol aksi menjadi biru muda saat dihover.
Gaya untuk saat tombol aksi ditekan (active):

css
Copy code
.action_btn:active {
    scale: 0.95;
}
scale: 0.95;: Menggunakan transformasi skala untuk membuat efek menciut 5% pada tombol saat ditekan.

Gaya dasar untuk menu dropdown (.dropdown_menu):

css
Copy code
.dropdown_menu {
    display: none;
    position: absolute;
    right: 2rem;
    top: 60px;
    height: 0px;
    width: 300px;
    background: rgba(255, 255, 255, 0.148);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    overflow: hidden;
    transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
display: none;: Menyembunyikan menu dropdown secara default.
position: absolute;: Menetapkan posisi menu dropdown sebagai posisi absolut, yang tergantung pada elemen orang tua yang memiliki posisi relatif.
right: 2rem;: Menetapkan jarak dari tepi kanan elemen orang tua ke menu dropdown.
top: 60px;: Menetapkan jarak dari tepi atas elemen orang tua ke menu dropdown.
height: 0px;: Menetapkan tinggi awal menu dropdown menjadi 0 sehingga tersembunyi.
width: 300px;: Menetapkan lebar menu dropdown.
background: rgba(255, 255, 255, 0.148);: Memberikan latar belakang semi-transparan dengan efek blur.
backdrop-filter: blur(15px);: Memberikan efek blur pada latar belakang menu dropdown.
border-radius: 10px;: Memberikan sudut lengkung pada menu dropdown.
overflow: hidden;: Menyembunyikan konten yang melampaui batas menu dropdown.
transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);: Menambahkan efek transisi saat menu dropdown berubah tinggi.
Gaya untuk menu dropdown terbuka (.dropdown_menu.open):

css
Copy code
.dropdown_menu.open {
    height: 135px;
}
.open: Kelas yang ditambahkan ketika menu dropdown dibuka.
height: 135px;: Menetapkan tinggi menu dropdown saat terbuka.
Gaya untuk setiap elemen daftar dalam menu dropdown (.dropdown_menu li):

css
Copy code
.dropdown_menu li {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
padding: 0.7rem;: Memberikan padding pada setiap elemen daftar di dalam menu dropdown.
display: flex;: Menggunakan flexbox untuk mengatur tata letak elemen daftar.
align-items: center;: Menyusun elemen daftar secara vertikal di tengah.
justify-content: center;: Menyusun elemen daftar secara horizontal di tengah.
Gaya untuk tombol aksi di dalam menu dropdown (.dropdown_menu .action_btn):

css
Copy code
.dropdown_menu .action_btn {
    width: 100%;
    display: flex;
    justify-content: center;
}
width: 100%;: Menetapkan lebar tombol aksi agar sesuai dengan lebar menu dropdown.
display: flex;: Menggunakan flexbox untuk mengatur tata letak tombol aksi.
justify-content: center;: Menyusun tombol aksi secara horizontal di tengah.

Gaya untuk bagian hero (.section#hero):

css
Copy code
section#hero {
    color: #fbfcfd;
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translateY(-50%);
    z-index: 2;
}
color: #fbfcfd;: Mengatur warna teks pada bagian hero menjadi putih.
position: absolute;: Menetapkan posisi elemen sebagai posisi absolut.
top: 50%;: Menetapkan posisi atas elemen ke 50% tinggi dari elemen orang tua.
left: 8%;: Menetapkan posisi kiri elemen ke 8% lebar dari elemen orang tua.
transform: translateY(-50%);: Menggunakan transformasi untuk menyesuaikan elemen secara vertikal sehingga berada di tengah (menggunakan translateY dengan nilai negatif setengah dari tinggi elemen).
z-index: 2;: Menetapkan indeks z untuk menentukan tumpukan elemen.
Gaya untuk elemen heading (h1) dalam bagian hero (#hero h1):

css
Copy code
#hero h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
}
font-size: 5rem;: Mengatur ukuran font heading menjadi 5 rem.
margin-bottom: 1rem;: Memberikan margin pada bagian bawah heading.
Gaya untuk elemen paragraf (p) dalam bagian hero:

css
Copy code
p {
    font-style: italic;
}
font-style: italic;: Mengatur gaya font paragraf menjadi italik.
Gaya untuk elemen heading (h1) tanpa konteks spesifik (di luar bagian hero):

css
Copy code
h1 {
    font-size: 80px;
    margin: 10px 0 30px;
    line-height: 80px;
}
font-size: 80px;: Mengatur ukuran font heading tanpa spesifik id atau class.
margin: 10px 0 30px;: Memberikan margin pada bagian atas (10px), bawah (30px), dan tidak ada pada sisi kiri dan kanan.
line-height: 80px;: Mengatur tinggi garis untuk membuat garis lebih tinggi dari ukuran font, menciptakan spasi antarbaris.

Media query untuk lebar layar maksimum 992px:

css
Copy code
@media (max-width: 992px) {
    .navbar .links,
    .navbar .action_btn {
        display: none;
    }

    .navbar .toggle_btn {
        display: block;
    }

    .dropdown_menu {
        display: block;
    }
}
Ketika lebar layar maksimum mencapai 992px, elemen-elemen berikut mendapatkan gaya baru:
.navbar .links dan .navbar .action_btn akan disembunyikan (display: none;).
.navbar .toggle_btn akan ditampilkan (display: block;).
.dropdown_menu juga akan ditampilkan (display: block;).
Media query untuk lebar layar maksimum 576px:

css
Copy code
@media (max-width: 576px) {
    .dropdown_menu {
        left: 2rem;
        width: unset;
    }
}
Ketika lebar layar maksimum mencapai 576px, elemen .dropdown_menu mendapatkan gaya baru:
left: 2rem;: Menetapkan jarak dari tepi kiri elemen orang tua ke .dropdown_menu menjadi 2 rem.
width: unset;: Menghilangkan nilai lebar yang diatur sebelumnya, membiarkan lebar mengikuti kontennya.

Gaya untuk elemen gambar bintang di dalam elemen stars (.stars img):

css
Copy code
.stars img {
    width: 50px;
    animation: stars 7s linear infinite;
}
width: 50px;: Mengatur lebar gambar bintang menjadi 50 piksel.
animation: stars 7s linear infinite;: Menetapkan animasi bernama stars dengan durasi 7 detik, fungsi pemulusan linear, dan berulang tanpa batas (infinite).
Gaya untuk elemen stars:

css
Copy code
.stars {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 70px;
}
width: 100%;: Menetapkan lebar elemen stars menjadi 100% dari lebar elemen orang tua.
display: flex;: Menggunakan flexbox untuk mengatur tata letak elemen-elemen di dalam stars.
align-items: center;: Menyusun elemen-elemen secara vertikal di tengah.
justify-content: space-around;: Menyusun elemen-elemen secara horizontal dengan ruang sekitar setiap elemen.
position: absolute;: Menetapkan posisi elemen stars sebagai posisi absolut.
bottom: 70px;: Menetapkan jarak dari tepi bawah elemen orang tua ke elemen stars menjadi 70 piksel.
Keyframes untuk animasi bintang (@keyframes stars):

css
Copy code
@keyframes stars {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    70% {
        opacity: 1;
    }
    100% {
        transform: translateY(80vh);
        opacity: 0;
    }
}
0%: Pada awal animasi, elemen akan memiliki transformasi translasi nol (tidak tergeser vertikal) dan opasitas nol (elemen tidak terlihat).
50%: Pada setengah durasi animasi, elemen mencapai opasitas penuh (1).
70%: Opasitas tetap pada level penuh.
100%: Pada akhir animasi, elemen akan tergeser ke bawah sejauh 80% tinggi viewport (dengan translateY(80vh)) dan opasitas menjadi nol (elemen tidak terlihat).

Elemen gambar bintang pertama:

css
Copy code
.stars img:nth-child(1) {
    animation-delay: 2s;
    width: 25px;
}
animation-delay: 2s;: Menetapkan keterlambatan animasi sebesar 2 detik pada elemen gambar bintang pertama.
width: 25px;: Mengatur lebar elemen gambar bintang pertama menjadi 25 piksel.
Elemen gambar bintang kedua:

css
Copy code
.stars img:nth-child(2) {
    animation-delay: 1s;
}
animation-delay: 1s;: Menetapkan keterlambatan animasi sebesar 1 detik pada elemen gambar bintang kedua.
Elemen gambar bintang ketiga:

css
Copy code
.stars img:nth-child(3) {
    animation-delay: 3s;
    width: 25px;
}
animation-delay: 3s;: Menetapkan keterlambatan animasi sebesar 3 detik pada elemen gambar bintang ketiga.
width: 25px;: Mengatur lebar elemen gambar bintang ketiga menjadi 25 piksel.
Dan seterusnya untuk elemen gambar bintang keempat hingga kesepuluh. Penerapan ini memberikan keterlambatan yang berbeda dan ukuran yang berbeda untuk setiap elemen gambar bintang, menciptakan variasi dalam efek animasi bintang pada halaman web.
