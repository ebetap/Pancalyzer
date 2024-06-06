# Pancalyzer
Analisis komentar jahatmu nganggo chatGPT berdasarkan nilai asas adab pada pancasila

Berikut adalah dokumentasi lengkap untuk modul `Pancalyzer`:

Modul `Pancalyzer` adalah sebuah alat untuk menganalisis teks dan menilai sejauh mana teks tersebut mencerminkan nilai-nilai Pancasila. Modul ini menggunakan model bahasa ChatGPT untuk menganalisis teks.

## Instalasi

Untuk menggunakan `Pancalyzer`, Anda perlu menginstalasi paket `chatgpt`:

```bash
npm install chatgpt
```

Setelah menginstalasi `chatgpt`, Anda dapat menyertakan modul `Pancalyzer` di dalam proyek Anda dengan cara yang berikut:

```javascript
const Pancalyzer = require('./Pancalyzer');
```

## Penggunaan

### Membuat Instance Pancalyzer

Untuk menggunakan `Pancalyzer`, Anda perlu membuat instance baru dari kelas `Pancalyzer`:

```javascript
const pancalyzer = new Pancalyzer();
```

### Menganalisis Teks

Anda dapat menggunakan metode `analyzeText` untuk menganalisis teks:

```javascript
const text = "Teks yang akan dianalisis.";
pancalyzer.analyzeText(text)
    .then(analysisResult => {
        console.log(analysisResult);
    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
    });
```

Metode `analyzeText` akan mengembalikan objek yang berisi hasil analisis teks terhadap nilai-nilai Pancasila. Objek tersebut memiliki properti berikut:

- `ketuhanan`: Menyatakan apakah teks mencerminkan nilai ketuhanan.
- `kemanusiaan`: Menyatakan apakah teks mencerminkan nilai kemanusiaan.
- `persatuan`: Menyatakan apakah teks mencerminkan nilai persatuan.
- `kerakyatan`: Menyatakan apakah teks mencerminkan nilai kerakyatan.
- `keadilan`: Menyatakan apakah teks mencerminkan nilai keadilan.
- `pancasilaScore`: Persentase sejauh mana teks mencerminkan semua nilai-nilai Pancasila.

---

Dengan dokumentasi ini, Anda dapat menggunakan modul `Pancalyzer` dengan mudah dan efektif. Jika Anda memiliki pertanyaan lebih lanjut atau memerlukan bantuan tambahan, jangan ragu untuk bertanya!
