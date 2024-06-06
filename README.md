### Modul `Pancalyzer`

Modul `Pancalyzer` adalah alat untuk menganalisis teks berdasarkan nilai-nilai Pancasila, memberikan saran perbaikan, serta menganalisis penggunaan emoji dan karakter khusus dalam teks.

#### Instalasi

Instalasi modul `Pancalyzer` dapat dilakukan dengan menggunakan npm:

```
npm install pancalyzer
```

#### Penggunaan

```javascript
const Pancalyzer = require('pancalyzer');

// Inisialisasi Pancalyzer
const analyzer = new Pancalyzer();

// Analisis teks
const text = "Kemerdekaan adalah hak segala bangsa.";
analyzer.analyzeText(text)
    .then(analysis => {
        console.log("Hasil analisis:", analysis);
    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
    });
```

#### Kelas: Pancalyzer

##### Metode: analyzeText(text)

Metode untuk menganalisis teks berdasarkan nilai-nilai Pancasila, memberikan saran perbaikan, serta menganalisis penggunaan emoji dan karakter khusus dalam teks.

- **Parameter:**
    - `text` (string): Teks yang akan dianalisis.

- **Return:**
    - Promise\<Object>: Objek hasil analisis, termasuk nilai-nilai Pancasila, saran perbaikan, analisis emoji, dan analisis karakter.

##### Metode: analyzeComment(comment)

Metode untuk menganalisis komentar berdasarkan nilai-nilai Pancasila.

- **Parameter:**
    - `comment` (string): Komentar yang akan dianalisis.

- **Return:**
    - Object: Objek hasil analisis nilai-nilai Pancasila.

##### Metode: checkKeyword(comment, keywords)

Metode untuk memeriksa apakah komentar mengandung kata kunci tertentu.

- **Parameter:**
    - `comment` (string): Komentar yang akan diperiksa.
    - `keywords` (Array\<string>): Array kata kunci yang akan diperiksa.

- **Return:**
    - boolean: `true` jika komentar mengandung setidaknya satu kata kunci, `false` jika tidak.

##### Metode: calculatePancasilaScore(analysis)

Metode untuk menghitung skor Pancasila berdasarkan analisis komentar.

- **Parameter:**
    - `analysis` (Object): Objek hasil analisis nilai-nilai Pancasila.

- **Return:**
    - number: Skor Pancasila (dalam persentase).

##### Metode: generateSuggestions(text)

Metode untuk menghasilkan saran perbaikan untuk teks.

- **Parameter:**
    - `text` (string): Teks yang akan diperiksa.

- **Return:**
    - Promise\<string|null>: Saran perbaikan teks, atau `null` jika terjadi kesalahan.

##### Metode: analyzeEmojis(text)

Metode untuk menganalisis penggunaan emoji dalam teks.

- **Parameter:**
    - `text` (string): Teks yang akan dianalisis.

- **Return:**
    - Object: Objek yang berisi jumlah dan daftar emoji unik dalam teks.

##### Metode: analyzeCharacters(text)

Metode untuk menganalisis karakter khusus dalam teks.

- **Parameter:**
    - `text` (string): Teks yang akan dianalisis.

- **Return:**
    - Object: Objek yang berisi panjang teks, jumlah kata, dan jumlah karakter unik.

#### Contoh Penggunaan

```javascript
const Pancalyzer = require('pancalyzer');

// Inisialisasi Pancalyzer
const analyzer = new Pancalyzer();

// Teks yang akan dianalisis
const text = "Kemerdekaan adalah hak segala bangsa.";

// Analisis teks
analyzer.analyzeText(text)
    .then(analysis => {
        console.log("Hasil analisis:", analysis);
    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
    });
```

Dengan menggunakan modul `Pancalyzer`, Anda dapat dengan mudah menganalisis teks berdasarkan nilai-nilai Pancasila, memberikan saran perbaikan, serta menganalisis penggunaan emoji dan karakter khusus dalam teks.
