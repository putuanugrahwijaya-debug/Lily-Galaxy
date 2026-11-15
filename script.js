/* =========================================================
   1. KONFIGURASI
   ========================================================= */

// Nomor WhatsApp tujuan (format internasional, tanpa +, spasi, atau 0 di depan)
const WA_NUMBER = "6281246894030";

// Gambar cadangan jika URL gambar gagal dimuat
const FALLBACK_IMG =
  "https://placehold.co/800x500/0077b6/ffffff?text=Pesona+Nusantara";

/* =========================================================
   2. DATA DESTINASI (Array of Objects)
   Tambah destinasi baru: salin satu blok { ... }, ganti isinya,
   pastikan "id" unik. Kartu akan muncul otomatis.
   ========================================================= */
const destinations = [
  /* ---------- BALI ---------- */
  {
    id: 1,
    nama: "Pura Tanah Lot",
    wilayah: "Bali",
    lokasi: "Tabanan",
    kategori: "Budaya",
    harga: 600000,
    rating: 4.7,
    gambar: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Pura megah yang berdiri di atas batu karang di tepi laut. Tanah Lot terkenal dengan panorama matahari terbenam yang spektakuler dan menjadi salah satu pura laut paling sakral di Bali. Pengunjung dapat menikmati suasana sore sambil menyaksikan ombak menghantam karang.",
    fasilitas: ["Area Parkir", "Toilet", "Toko Suvenir", "Restoran", "Pemandu Wisata"],
  },
  {
    id: 2,
    nama: "Pantai Kuta",
    wilayah: "Bali",
    lokasi: "Badung",
    kategori: "Pantai",
    harga: 200000,
    rating: 4.5,
    gambar: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Pantai berpasir putih yang ramai dan legendaris, cocok untuk berselancar, berjemur, dan menikmati sunset. Di sekitarnya tersedia banyak kafe, pusat belanja, dan hiburan malam yang membuat Kuta tidak pernah sepi.",
    fasilitas: ["Sewa Papan Selancar", "Kafe & Restoran", "Toilet", "Area Parkir", "Penjaga Pantai"],
  },
  {
    id: 3,
    nama: "Gunung Batur",
    wilayah: "Bali",
    lokasi: "Bangli",
    kategori: "Gunung",
    harga: 450000,
    rating: 4.8,
    gambar: "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Gunung berapi aktif dengan jalur pendakian dini hari yang populer untuk menyaksikan matahari terbit di atas kaldera dan Danau Batur. Pendakian memakan waktu sekitar 2 jam dan cocok untuk pemula yang didampingi pemandu.",
    fasilitas: ["Pemandu Lokal", "Senter", "Sarapan di Puncak", "Transportasi Jemput", "Asuransi"],
  },

  /* ---------- JAWA ---------- */
  {
    id: 4,
    nama: "Gunung Bromo",
    wilayah: "Jawa",
    lokasi: "Probolinggo",
    kategori: "Gunung",
    harga: 3500000,
    rating: 4.9,
    gambar: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Ikon wisata Jawa Timur dengan lautan pasir luas dan kawah yang mengepulkan asap. Wisatawan biasanya memulai perjalanan dini hari menuju Penanjakan untuk melihat matahari terbit, lalu menyewa jip menyusuri lautan pasir hingga kawah Bromo.",
    fasilitas: ["Sewa Jip", "Homestay", "Pemandu Wisata", "Warung Makan", "Sewa Kuda"],
  },
  {
    id: 5,
    nama: "Candi Borobudur",
    wilayah: "Jawa",
    lokasi: "Magelang",
    kategori: "Budaya",
    harga: 500000,
    rating: 4.8,
    gambar: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Candi Buddha terbesar di dunia dari abad ke-9 yang termasuk Warisan Dunia UNESCO. Dindingnya dihiasi ribuan panel relief dan stupa berlonceng. Waktu terbaik berkunjung adalah saat pagi untuk menikmati kabut tipis di sekitar candi.",
    fasilitas: ["Pemandu Resmi", "Museum", "Toilet", "Area Parkir", "Pusat Oleh-oleh"],
  },
  {
    id: 6,
    nama: "Pantai Parangtritis",
    wilayah: "Jawa",
    lokasi: "Bantul, Yogyakarta",
    kategori: "Pantai",
    harga: 150000,
    rating: 4.3,
    gambar: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Pantai legendaris di selatan Yogyakarta dengan hamparan pasir gelap dan ombak besar. Terdapat juga gumuk pasir yang unik untuk aktivitas sandboarding serta wisata delman dan ATV di sekitar pantai.",
    fasilitas: ["Sewa ATV", "Delman", "Warung Seafood", "Toilet", "Penginapan"],
  },

  /* ---------- LOMBOK ---------- */
  {
    id: 7,
    nama: "Pantai Mandalika",
    wilayah: "Lombok",
    lokasi: "Lombok Tengah",
    kategori: "Pantai",
    harga: 250000,
    rating: 4.7,
    gambar: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Pantai berpasir putih bertekstur butiran merica dengan air laut jernih dan perbukitan hijau di sekelilingnya. Kawasan ini juga dekat dengan Sirkuit Mandalika dan beberapa pantai tersembunyi yang bisa dijelajah dengan motor.",
    fasilitas: ["Kafe Pantai", "Sewa Motor", "Toilet", "Area Parkir", "Penginapan"],
  },
  {
    id: 8,
    nama: "Gunung Rinjani",
    wilayah: "Lombok",
    lokasi: "Lombok Timur",
    kategori: "Gunung",
    harga: 1800000,
    rating: 4.9,
    gambar: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Gunung berapi tertinggi kedua di Indonesia dengan Danau Segara Anak di dalam kalderanya. Paket pendakian 2-3 hari sudah termasuk porter, pemandu, dan tenda. Cocok untuk pendaki berpengalaman yang menginginkan tantangan dan pemandangan luar biasa.",
    fasilitas: ["Porter & Pemandu", "Tenda & Sleeping Bag", "Makan 3x Sehari", "Izin Taman Nasional", "Transportasi"],
  },
  {
    id: 9,
    nama: "Desa Adat Sade",
    wilayah: "Lombok",
    lokasi: "Lombok Tengah",
    kategori: "Budaya",
    harga: 200000,
    rating: 4.4,
    gambar: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
    deskripsi:
      "Desa tradisional suku Sasak yang masih menjaga rumah adat beratap alang-alang dan lantai yang dipel dengan kotoran kerbau. Pengunjung dapat belajar menenun songket, melihat tradisi pernikahan Sasak, dan membeli kain tenun langsung dari pengrajin.",
    fasilitas: ["Pemandu Desa", "Pertunjukan Budaya", "Toko Kerajinan", "Toilet", "Area Parkir"],
  },
];

/* =========================================================
   3. STATE (kondisi filter yang sedang aktif)
   ========================================================= */
let activeRegion = "Semua"; // wilayah terpilih
let searchQuery = "";       // teks pencarian

/* =========================================================
   4. REFERENSI ELEMEN HTML
   ========================================================= */
const grid        = document.getElementById("destinationGrid");
const emptyState  = document.getElementById("emptyState");
const resultInfo  = document.getElementById("resultInfo");
const searchInput = document.getElementById("searchInput");
const filterTabs  = document.getElementById("filterTabs");

const modal       = document.getElementById("modal");
const modalClose  = document.getElementById("modalClose");

const navToggle   = document.getElementById("navToggle");
const navMenu     = document.getElementById("navMenu");
const searchBox     = document.getElementById("searchBox");
const suggestionBox = document.getElementById("suggestions");

/* =========================================================
   5. FUNGSI BANTU
   ========================================================= */

// Ubah angka jadi format rupiah. Contoh: 60000 -> "Rp 60.000"
function formatRupiah(angka) {
  if (angka === 0) return "Gratis";
  return "Rp " + angka.toLocaleString("id-ID");
}

// Jika gambar gagal dimuat, ganti dengan gambar cadangan
function handleImgError(img) {
  img.onerror = null; // cegah loop tak terbatas
  img.src = FALLBACK_IMG;
}

/* =========================================================
   6. RENDER KARTU DESTINASI
   ========================================================= */
function renderDestinations() {
  // 1) Filter data berdasarkan wilayah + kata kunci
  const keyword = searchQuery.trim().toLowerCase();

  const filtered = destinations.filter((item) => {
    const matchRegion = activeRegion === "Semua" || item.wilayah === activeRegion;

    // Pencarian mencakup nama, lokasi, kategori, dan wilayah
    const searchable = `${item.nama} ${item.lokasi} ${item.kategori} ${item.wilayah}`.toLowerCase();
    const matchSearch = searchable.includes(keyword);

    return matchRegion && matchSearch;
  });

  // 2) Buat HTML kartu dari data hasil filter
  grid.innerHTML = filtered
    .map(
      (item, index) => `
      <article class="card" style="animation-delay: ${index * 0.06}s">
        <div class="card__img-wrap">
          <img src="${item.gambar}" alt="${item.nama}" loading="lazy" onerror="handleImgError(this)" />
          <span class="card__wilayah">${item.wilayah}</span>
          <span class="card__rating">⭐ ${item.rating}</span>
        </div>
        <div class="card__body">
          <span class="badge">${item.kategori}</span>
          <h3>${item.nama}</h3>
          <p class="card__lokasi">📍 ${item.lokasi}</p>
          <div class="card__footer">
            <div class="card__harga">
              <small>Mulai dari</small>
              <strong>${formatRupiah(item.harga)}</strong>
            </div>
            <button class="btn btn--outline" data-id="${item.id}">Lihat Detail</button>
          </div>
        </div>
      </article>`
    )
    .join("");

  // 3) Tampilkan / sembunyikan pesan kosong & info jumlah
  emptyState.hidden = filtered.length > 0;
  resultInfo.textContent = `Menampilkan ${filtered.length} destinasi`;
}

/* =========================================================
   7. EVENT: FILTER WILAYAH & PENCARIAN
   ========================================================= */

/* =========================================================
   7b. SARAN PENCARIAN (AUTOCOMPLETE)
   ========================================================= */
let activeSuggestion = -1;   // posisi item yang disorot keyboard (-1 = belum ada)
let currentSuggestions = []; // data saran yang sedang tampil

// Ambil maksimal 6 destinasi yang cocok dengan kata kunci
function getSuggestions(keyword) {
  if (!keyword) return [];
  return destinations
    .filter((item) =>
      `${item.nama} ${item.lokasi} ${item.kategori} ${item.wilayah}`
        .toLowerCase()
        .includes(keyword)
    )
    .slice(0, 6);
}

// Beri tanda <mark> pada huruf yang cocok dengan ketikan
function highlight(text, keyword) {
  const i = text.toLowerCase().indexOf(keyword);
  if (i === -1) return text;
  return (
    text.slice(0, i) +
    "<mark>" + text.slice(i, i + keyword.length) + "</mark>" +
    text.slice(i + keyword.length)
  );
}

function hideSuggestions() {
  suggestionBox.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
  activeSuggestion = -1;
}

function renderSuggestions() {
  const keyword = searchQuery.trim().toLowerCase();

  // Input kosong -> sembunyikan saran
  if (!keyword) {
    hideSuggestions();
    return;
  }

  currentSuggestions = getSuggestions(keyword);
  activeSuggestion = -1;

  if (currentSuggestions.length === 0) {
    suggestionBox.innerHTML =
      `<li class="suggestions__empty">Tidak ada saran untuk "${keyword}"</li>`;
  } else {
    suggestionBox.innerHTML = currentSuggestions
      .map(
        (item, i) => `
        <li role="option" data-index="${i}">
          <img src="${item.gambar}" alt="" onerror="handleImgError(this)" />
          <div class="suggestions__text">
            <div class="suggestions__name">${highlight(item.nama, keyword)}</div>
            <div class="suggestions__meta">
              ${item.kategori} • ${item.lokasi}, ${item.wilayah}
            </div>
          </div>
        </li>`
      )
      .join("");
  }

  suggestionBox.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
}

// Saat saran dipilih: isi kolom, reset tab ke "Semua", tampilkan hasil
function selectSuggestion(item) {
  searchInput.value = item.nama;
  searchQuery = item.nama;

  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.wilayah === "Semua");
  });
  activeRegion = "Semua";

  hideSuggestions();
  renderDestinations();
  document.getElementById("destinasi").scrollIntoView({ behavior: "smooth" });
}

// Sorot item saran dengan keyboard
function highlightSuggestion(index) {
  const items = suggestionBox.querySelectorAll("li[data-index]");
  items.forEach((li) => li.classList.remove("active"));
  if (items[index]) {
    items[index].classList.add("active");
    items[index].scrollIntoView({ block: "nearest" });
  }
}

// Setiap ketikan: update kartu + saran
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderDestinations();
  renderSuggestions();
});

// Tampilkan lagi saran saat kolom diklik (jika sudah ada teks)
searchInput.addEventListener("focus", () => {
  if (searchQuery.trim()) renderSuggestions();
});

// Navigasi keyboard: panah atas/bawah, Enter, Esc
searchInput.addEventListener("keydown", (e) => {
  const total = currentSuggestions.length;

  if (e.key === "ArrowDown" && !suggestionBox.hidden && total) {
    e.preventDefault();
    activeSuggestion = (activeSuggestion + 1) % total;
    highlightSuggestion(activeSuggestion);
  } else if (e.key === "ArrowUp" && !suggestionBox.hidden && total) {
    e.preventDefault();
    activeSuggestion = (activeSuggestion - 1 + total) % total;
    highlightSuggestion(activeSuggestion);
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (activeSuggestion >= 0) {
      selectSuggestion(currentSuggestions[activeSuggestion]);
    } else {
      hideSuggestions();
      document.getElementById("destinasi").scrollIntoView({ behavior: "smooth" });
    }
  } else if (e.key === "Escape") {
    hideSuggestions();
  }
});

// Klik salah satu saran (mouse / sentuh)
suggestionBox.addEventListener("click", (e) => {
  const li = e.target.closest("li[data-index]");
  if (li) selectSuggestion(currentSuggestions[Number(li.dataset.index)]);
});

// Klik di luar kolom pencarian -> tutup saran
document.addEventListener("click", (e) => {
  if (!searchBox.contains(e.target)) hideSuggestions();
});

/* =========================================================
   8. MODAL DETAIL
   ========================================================= */
function openModal(id) {
  const item = destinations.find((d) => d.id === id);
  if (!item) return;

  // Isi konten modal dengan data destinasi terpilih
  const modalImg = document.getElementById("modalImg");
  modalImg.src = item.gambar;
  modalImg.alt = item.nama;
  modalImg.onerror = () => handleImgError(modalImg);

  document.getElementById("modalKategori").textContent = item.kategori;
  document.getElementById("modalNama").textContent = item.nama;
  document.getElementById("modalMeta").textContent =
    `📍 ${item.lokasi}, ${item.wilayah}  •  ⭐ ${item.rating}`;
  document.getElementById("modalDesc").textContent = item.deskripsi;
  document.getElementById("modalHarga").textContent = formatRupiah(item.harga);

  // Daftar fasilitas
  document.getElementById("modalFasilitas").innerHTML = item.fasilitas
    .map((f) => `<li>✔ ${f}</li>`)
    .join("");

  // Link WhatsApp otomatis dengan nama destinasi
  const pesan = `Halo, saya tertarik dengan destinasi *${item.nama}* (${item.lokasi}, ${item.wilayah}). Bisa tolong informasikan detail dan paket liburannya?`;
  document.getElementById("modalWa").href =
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;

  // Tampilkan modal & kunci scroll halaman
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Klik tombol "Lihat Detail" (event delegation karena kartu dibuat dinamis)
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-id]");
  if (btn) openModal(Number(btn.dataset.id));
});

// Tutup modal: tombol X, klik area gelap, atau tombol Esc
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* =========================================================
   9. NAVBAR MOBILE (hamburger)
   ========================================================= */
navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));

// Tutup menu otomatis setelah link diklik
navMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navMenu.classList.remove("open");
});

/* =========================================================
   10. INISIALISASI
   ========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
renderDestinations(); // tampilkan semua kartu saat halaman pertama dibuka