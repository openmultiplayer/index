---
title: Berkontribusi
description: Cara berkontribusi untuk wiki SA-MP dan dokumentasi open.mp.
---

Sumber dokumentasi ini terbuka bagi siapa saja untuk memberi kontribusi perubahan! Yang Anda butuhkan adalah sebuah akun [GitHub](https://github.com) dan waktu luang. Anda tidak diharuskan mengerti Git, Anda dapat melakukan semuanya dari _Web UI_ (antarmuka web).

Jika Anda ingin membantu mempertahankan wiki ini dalam Bahasa Indonesia, buka sebuah _pull request_ (PR) terhadap file [`CODEOWNERS`](https://github.com/openmultiplayer/web/blob/master/CODEOWNERS) dan tambahkan direktori untuk bahasa Anda dengan _username_ GitHub Anda.

## Menyunting Konten

Di setiap halaman, ada sebuah tombol yang mengarahkan Anda ke halaman GitHub untuk penyuntingan:

![Link 'Sunting halaman ini' ada di setiap halaman Wiki](/images/contributing/edit-this-page.png)

Sebagai contoh, klik di [SetVehicleAngularVelocity](../scripting/functions/SetVehicleAngularVelocity) akan mengarahkan Anda ke [halaman ini](https://github.com/openmultiplayer/web/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md) yang di mana akan memunculkan sebuah _text editor_ untuk membuat perubahan ke file tersebut (asumsikan Anda sudah _login_ ke GitHub).

Lakukan penyuntingan Anda and kirimkan sebuah "Pull Request" yang artinya pengelola Wiki ini dan anggota komunitas lainnya dapat mengulas (me-_review_) perubahan Anda, diskusikas apakah perlu ada perubahan dan kemudian gabungkan.

## Menambah Konten Baru

Menambah konten baru sedikit lebih rumit. Anda dapat melakukannya dengan dua cara:

### Antarmuka GitHub

Ketika menjelajahi sebuah direktori di GitHub, ada sebuah tombol Add file terletak di sudut kanan atas daftar file (_file list_):

![Tombol Add file](/images/contributing/add-new-file.png)

Anda bisa meng-_upload_ file Markdown yang sudah Anda tulis atau menulisnya langsung ke _text editor_ GitHub.

_File_ harus memiliki ekstensi `.md` dan mengandung Markdown. Untuk informasi lebih lanjut tentang Markdown silakan lihat [panduan ini](https://guides.github.com/features/mastering-markdown/).

Setelah selesai, tekan "Propose new file" dan sebuah Pull Request akan terbuka untuk diulas.

### Git

Jika Anda ingin menggunakan Git, yang Anda harus lakukan adalah _clone_ _repository_ Wiki dengan:

```sh
git clone https://github.com/openmultiplayer/wiki.git
```

Buka dengan editor favorit Anda. Saya merekomendasikan Visual Studio Code karena memiliki peralatan yang bagus untuk menyunting dan _formatting_ _file_ Markdown. Yang Anda lihat, saya sedang menulis ini menggunakan Visual Studio Code!

![Pratinjau markdown di Visual Studio Code](/images/contributing/vscode.png)

Saya merekomendasikan dua ekstension untuk membuat pengalaman Anda menjadi lebih baik:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) oleh David Anson - ini adalah sebuah ekstensi yang memastikan Markdown Anda telah di-_format_ dengan benar. Hal ini untuk mencegah beberapa kesalahan secara sintaks dan semantik. Tidak semua peringatan itu penting, tapi beberapa dapat membantu meningkatkan dalam pembacaan. Gunakan penilai terbaik Anda dan jika ragu, tanyakan saja kepada pengulas!
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oleh Tim Prettier.js - ini adalah sebuah _formatter_ yang akan mem-_format_ Markdown Anda secara otomatis, sehingga Markdown Anda menggunakan gaya yang konsisten. _Repository_ _Wiki_ memiliki beberapa pengaturan di dalam file `package.json` yang harus digunakan secara otomatis. Pastikan Anda menyalakan pengaturan "Format On Save" di pengaturan _editor_ Anda, sehingga _file_ Markdown Anda akan menjadi ter-_format_ secara otomatis setiap kali Anda menyimpan!

## Catatan, Tips, dan Konvensi

### Tautan Internal

Jangan gunakan URL absolut untuk tautan antarsitus. Gunakan _relative paths_.

- ❌

  ```md
  Untuk digunakan dengan [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)
  ```

- ✔

  ```md
  Untuk digunakan dengan [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)
  ```

`../` artinya "naik satu direktori", sehingga ketika _file_ yang Anda sunting di dalam direktori `functions` dan Anda menghubungkan ke `callbacks`, Anda menggunakan `../` untuk ke `scripting/`, kemudian `callbacks` untuk masuk ke direktori `callbacks`, kemudian nama _file_ _callback_ (tanpa `.md`) yang ingin Anda hubungkan.

### Gambar

Gambar-gambar ada di dalam subdirektori `/static/images`. Lalu, ketika Anda ingin menghubungkan gambar dengan `![]()`, Anda cukup menggunakan `/images/` sebagai jalur dasarnya (tidak perlu menambahkan `static`).

Jika ragu, bacalah halaman lain yang menggunakan gambar dan salin bagian memuat gambar.

### Metadata

Hal pertama di dokumen _apapun_ di sini adalah metadata:

```mdx
---
title: Dokumentasi
description: Ini adalah sebuah halaman tentang apapun yang berhubungan dengan burger. Nyam nyam~
---
```

Setiap halaman harus disertakan sebuah judul dan deskripsi.

Untuk daftar lengkap yang bisa disertakan di antara `---`, lihat [dokumentasi Docusaurus](https://v2.docusaurus.io/docs/markdown-features#markdown-headers).

### Judul

Jangan membuat heading level 1 (`<h1>`) dengan `#` yang akan di-_generate_ secara otomatis. Judul pertama Anda harus selalu menggunakan `##`

- ❌

  ```md
  # Ini Judul

  Dokumentasi ini untuk ...

  # Perincian
  ```

- ✔

  ```md
  Dokumentasi ini untuk ...

  ## Perincian
  ```

### Gunakan `Code` Snippets untuk Referensi Teknis

Ketika menulis sebuah paragraf yang mengandung nama-nama fungsi, angka, ekspresi, atau apapun yang bukan standar penulisan bahasa, apitkan dengan \`backtick\` (letaknya di bawah tombol ESC pada _keyboard_). Hal ini mempermudah untuk memisahkan bahasa untuk deskripsi dengan elemen teknis, seperti nama fungsi dan potongan kode.

- ❌

  > Fungsi fopen akan mengembalikan sebuah nilai dengan sebuah tag dengan tipe File:, tidak ada masalah pada baris tersebut, selama baris tersebut nilai baliknya disimpan ke variabel dengan tag File: (perhatikan bahwa kasusnya juga sama). Namun, pada baris selanjutnya, nilai 4 ditambahkan ke handle file. 4 tidak memiliki tag [...]

- ✔

  > Fungsi `fopen` akan mengembalikan sebuah nilai dengan sebuah tag dengan tipe `File:`, tidak ada masalah pada baris tersebut, selama baris tersebut nilai baliknya disimpan ke variabel dengan tag `File:` (perhatikan bahwa kasusnya juga sama). Namun, pada baris selanjutnya, nilai `4` ditambahkan ke handle file. `4` tidak memiliki tag [...]

Seperti contoh di atas, `fopen` adalah sebuah nama fungsi, bukan kata bahasa Inggris, jadi apitkan dengan penanda `code` snippet untuk membantu membedakan dengan konten lainnya.

Selain itu, jika paragraf merujuk ke sekumpulan kode, ini membantu pembaca mengaitkan kata dengan contoh tersebut.

### Tabel

Jika tabel memiliki judul, letakkan di bagian atas:

- ❌

  ```md
  |         |                                            |
  | ------- | ------------------------------------------ |
  | Darah   | Status Mesin                               |
  | 650     | Tidak Rusak                                |
  | 650-550 | Berasap Putih                              |
  | 550-390 | Berasap Abu-abu                            |
  | 390-250 | Berasap Hitam                              |
  | < 250   | Terbakar (akan meledak beberapa saat lagi) |
  ```

- ✔

  ```md
  | Darah   | Status Mesin                               |
  | ------- | ------------------------------------------ |
  | 650     | Tidak Rusak                                |
  | 650-550 | Berasap Putih                              |
  | 550-390 | Berasap Abu-abu                            |
  | 390-250 | Berasap Hitam                              |
  | < 250   | Terbakar (akan meledak beberapa saat lagi) |
  ```

## Migrasi dari Wiki SA-MP

Hampir seluruh konten dari Wiki SA-MP telah dipindahkan, namun jika Anda menemukan sebuah halaman yang hilang, ini pandungan singkat untuk konversi kontennya menjadi Markdown.

### Getting the HTML

1. Klik tombol ini

   (Firefox)

   ![image](/images/contributing/04f024579f8d.png)

   (Chrome)

   ![image](/images/contributing/f62bb8112543.png)

2. Arahkan ke sudut kiri atas dari halaman utama wiki, di margin kiri atau sudut hingga Anda menemukan `#content`

   ![image](/images/contributing/65761ffbc429.png)

   Atau cari `<div id=content>`

   ![image](/images/contributing/77befe2749fd.png)

3. Salin kode HTML pada elemen tersebut

   ![image](/images/contributing/8c7c75cfabad.png)

   Sekarang Anda **hanya** memiliki memiliki kode HTML yang berisi **konten** aktual pada halaman tersebut, hal-hal yang kami minati, dan Anda bisa konversikan menjadi Markdown.

### Mengkonversi HTML menjadi Markdown

Untuk mengkonversi HTML dasar (tanpa tabel), ke Markdown, gunakan:

[https://domchristie.github.io/turndown/](https://domchristie.github.io/turndown/)

![image](/images/contributing/77f4ea555bbb.png)

^^ Perhatikan sekarang. Hasil konversi mengacaukan tabel seluruhnya...

### Tabel HTML ke Tabel Markdown

Karena _tool_ di atas tidak mendukung tabel, gunakan _tool_ ini:

[https://jmalarcon.github.io/markdowntables/](https://jmalarcon.github.io/markdowntables/)

Dan salin hanya elemen `<table>` di:

![image](/images/contributing/57f171ae0da7.png)

### Merapikan

Hasil konversi tidak selalu sempurna, Jadi, Anda diharuskan merapikan beberapa bagian secara manual. Daftar ektensi untuk _formatting_ yang telah disebutkan di atas seharusnya dapat membantu, tapi mungkin Anda tetap membutuhkan meluangkan waktu untuk melakukannya secara manual.

Jika Anda tidak ada waktu, jangan khawatir. Kirim draf yang belum diselesaikan dan orang lain dapat melanjutkan yang telah Anda kerjakan!

## Perjanjian Lisensi

Seluruh proyek open.mp memiliki sebuah [Contributor License Agreement](https://cla-assistant.io/openmultiplayer/homepage). Ini pada dasarnya berarti Anda menyetujui kami menggunakan karya Anda, dan meletakannya di bawah lisensi sumber terbuka (_open-source_). Ketika Anda membuka sebuah Pull Request untuk pertama kalinya, bot CLA-Assistant akan mem-posting sebuah tautan tempat Anda bisa menandatangani perjanjian.
