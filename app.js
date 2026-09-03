const businesses = [
  {
    id: 1,
    name: "Seblak Teh Yuni",
    category: "Jajanan",
    distance: 180,
    status: "Buka",
    price: "Mulai Rp10.000",
    address: "Gang Bambu Kuning II No.01, RT.04/02",
    description: "Seblak rumahan dengan pilihan level pedas dan topping yang bisa dipilih.",
    whatsapp: "6281234567890",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Seblak Original", "Rp10.000"],
      ["Seblak Ceker", "Rp13.000"],
      ["Seblak Komplit", "Rp15.000"]
    ]
  },
  {
    id: 2,
    name: "Warung Pak Budi",
    category: "Warung",
    distance: 320,
    status: "Buka",
    price: "Mulai Rp5.000",
    address: "Gang Bambu Kuning II No.02, RT.04/02",
    description: "Warung kebutuhan harian dan makanan sederhana untuk warga sekitar.",
    whatsapp: "6281234567891",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Nasi Telur", "Rp10.000"],
      ["Indomie Telur", "Rp9.000"],
      ["Kopi Sachet", "Rp5.000"]
    ]
  },
  {
    id: 3,
    name: "Es Teh Mang Ujang",
    category: "Minuman",
    distance: 410,
    status: "Buka",
    price: "Mulai Rp4.000",
    address: "Gang Bambu Kuning II No.03, RT.04/02",
    description: "Es teh, lemon tea, dan minuman segar untuk menemani sore.",
    whatsapp: "6281234567892",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Es Teh Manis", "Rp4.000"],
      ["Lemon Tea", "Rp7.000"],
      ["Es Jeruk", "Rp6.000"]
    ]
  },
  {
    id: 4,
    name: "Mie Ayam Bu Sari",
    category: "Makanan",
    distance: 520,
    status: "Buka",
    price: "Mulai Rp12.000",
    address: "Jl. Kenanga No. 8, RT 04",
    description: "Mie ayam rumahan dengan topping ayam melimpah.",
    whatsapp: "6281234567893",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Mie Ayam", "Rp12.000"],
      ["Mie Ayam Bakso", "Rp16.000"],
      ["Bakso Kuah", "Rp14.000"]
    ]
  },
  {
    id: 5,
    name: "Cireng Kang Asep",
    category: "Jajanan",
    distance: 650,
    status: "Tutup",
    price: "Mulai Rp5.000",
    address: "Gang Dahlia No. 2, RT 04",
    description: "Cireng isi dengan sambal rujak homemade.",
    whatsapp: "6281234567894",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Cireng Original", "Rp5.000"],
      ["Cireng Ayam", "Rp8.000"],
      ["Cireng Keju", "Rp8.000"]
    ]
  },
  {
    id: 6,
    name: "Kedai Nasi Teh Ina",
    category: "Makanan",
    distance: 730,
    status: "Buka",
    price: "Mulai Rp10.000",
    address: "Jl. Melati No. 17, RT 04",
    description: "Menu rumahan untuk sarapan dan makan siang.",
    whatsapp: "6281234567895",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Nasi Ayam", "Rp15.000"],
      ["Nasi Telur", "Rp10.000"],
      ["Nasi Ikan", "Rp14.000"]
    ]
  },
  {
    id: 7,
    name: "Pisang Coklat Dika",
    category: "Jajanan",
    distance: 850,
    status: "Buka",
    price: "Mulai Rp8.000",
    address: "Gang Mawar No. 6, RT 04",
    description: "Pisang crispy dengan cokelat dan berbagai topping.",
    whatsapp: "6281234567896",
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Pisang Coklat", "Rp8.000"],
      ["Pisang Keju", "Rp9.000"],
      ["Pisang Mix", "Rp10.000"]
    ]
  },
  {
    id: 8,
    name: "Warung Madura Jaya",
    category: "Warung",
    distance: 1100,
    status: "Buka",
    price: "Mulai Rp3.000",
    address: "Jl. Mawar Raya No. 20",
    description: "Warung kebutuhan sehari-hari yang buka sampai malam.",
    whatsapp: "6281234567897",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d7b0b?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Air Mineral", "Rp3.000"],
      ["Mi Instan", "Rp4.000"],
      ["Telur", "Rp3.000"]
    ]
  },
  {
    id: 9,
    name: "Kopi Sudut RT",
    category: "Minuman",
    distance: 1200,
    status: "Buka",
    price: "Mulai Rp8.000",
    address: "Dekat Lapangan RT 04",
    description: "Kopi susu dan minuman sederhana untuk nongkrong warga.",
    whatsapp: "6281234567898",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Kopi Susu", "Rp10.000"],
      ["Americano", "Rp8.000"],
      ["Cokelat", "Rp10.000"]
    ]
  },
  {
    id: 10,
    name: "Ayam Geprek Rian",
    category: "Makanan",
    distance: 1400,
    status: "Tutup",
    price: "Mulai Rp14.000",
    address: "Jl. Kenanga No. 31",
    description: "Ayam geprek dengan pilihan sambal level 1 sampai 5.",
    whatsapp: "6281234567899",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    menu: [
      ["Ayam Geprek", "Rp14.000"],
      ["Ayam Geprek Keju", "Rp17.000"],
      ["Ayam Crispy", "Rp15.000"]
    ]
  }
];

let currentPage = "home";
let activeCategory = "Semua";
let searchTerm = "";
let savedIds = JSON.parse(localStorage.getItem("sirkelanSaved") || "[]");

const app = document.getElementById("app");
const toast = document.getElementById("toast");

function formatDistance(meters) {
  return meters < 1000 ? `${meters} m` : `${(meters / 1000).toFixed(1)} km`;
}

function getFilteredBusinesses() {
  return businesses
    .filter(b => activeCategory === "Semua" || b.category === activeCategory)
    .filter(b => {
      const q = searchTerm.toLowerCase().trim();
      if (!q) return true;
      return `${b.name} ${b.category} ${b.description}`.toLowerCase().includes(q);
    })
    .sort((a, b) => a.distance - b.distance);
}

function isSaved(id) {
  return savedIds.includes(id);
}

function toggleSaved(id, event) {
  event.stopPropagation();
  savedIds = isSaved(id)
    ? savedIds.filter(savedId => savedId !== id)
    : [...savedIds, id];

  localStorage.setItem("sirkelanSaved", JSON.stringify(savedIds));
  showToast(isSaved(id) ? "Disimpan ke Saved" : "Dihapus dari Saved");
  render();
}

function businessCard(b) {
  return `
    <article class="business-card" onclick="openDetail(${b.id})">
      <img class="business-image" src="${b.image}" alt="${b.name}">
      <div class="business-content">
        <div class="business-top">
          <h3 class="business-name">${b.name}</h3>
          <button class="favorite ${isSaved(b.id) ? "saved" : ""}" onclick="toggleSaved(${b.id}, event)" aria-label="Simpan">
            ${isSaved(b.id) ? "♥" : "♡"}
          </button>
        </div>
        <p class="business-category">${b.category}</p>
        <div class="meta">
          <span>📍 ${formatDistance(b.distance)}</span>
          <span>•</span>
          <span class="${b.status === "Buka" ? "status-open" : "status-closed"}">${b.status}</span>
        </div>
        <div class="price">${b.price}</div>
      </div>
    </article>
  `;
}

function renderHome() {
  const nearby = businesses.slice().sort((a, b) => a.distance - b.distance).slice(0, 5);

  return `
    <section class="hero">
      <h1>Temukan hidden gem di sekitar kamu!</h1>
      <p>Warung, jajanan, dan usaha lokal di sekitar RT.04/02!.</p>
      <label class="search-box">
        <span>⌕</span>
        <input id="homeSearch" placeholder="Cari warung, jajanan..." value="${searchTerm}">
      </label>
    </section>

    <div class="section-head">
      <h2>Cari berdasarkan kategori</h2>
    </div>

    <div class="categories">
  <button class="category" onclick="goCategory('Makanan')">
    <span class="category-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 11h16"/>
        <path d="M5 11c.6 5 3.6 8 7 8s6.4-3 7-8"/>
        <path d="M7 8c1.5-2 3.5-3 5-3s3.5 1 5 3"/>
      </svg>
    </span>
    <small>Makanan</small>
  </button>

  <button class="category" onclick="goCategory('Minuman')">
    <span class="category-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 7h10l-1 13H8L7 7Z"/>
        <path d="M9 4h6"/>
        <path d="M12 4v3"/>
      </svg>
    </span>
    <small>Minuman</small>
  </button>

  <button class="category" onclick="goCategory('Jajanan')">
    <span class="category-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="8"/>
        <circle cx="9" cy="9" r="1"/>
        <circle cx="14.5" cy="10" r="1"/>
        <circle cx="11" cy="14.5" r="1"/>
        <circle cx="16" cy="15" r="1"/>
      </svg>
    </span>
    <small>Jajanan</small>
  </button>

  <button class="category" onclick="goCategory('Warung')">
    <span class="category-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 10h16"/>
        <path d="M5 10v10h14V10"/>
        <path d="M4 10l2-5h12l2 5"/>
        <path d="M9 20v-6h6v6"/>
      </svg>
    </span>
    <small>Warung</small>
  </button>
</div>
    </div>

    <div class="ai-card">
      <div class="label">SIRKELAN AI · SOON</div>
      <h3>Nanti cukup bilang apa yang kamu cari.</h3>
      <p>Contoh: “Gue pengen jajanan pedes di bawah 15 ribu yang deket.”</p>
    </div>

    <div class="section-head">
      <h2>DEKAT DARI KAMU</h2>
      <button onclick="navigate('explore')">Lihat semua</button>
    </div>

    <div class="business-list">
      ${nearby.map(businessCard).join("")}
    </div>
  `;
}

function renderExplore() {
  const results = getFilteredBusinesses();

  return `
    <div class="page-title">
      <h1>Explore</h1>
      <p>Temukan usaha lokal di sekitar kamu.</p>
    </div>

    <label class="search-box">
      <span>⌕</span>
      <input id="exploreSearch" placeholder="Cari usaha..." value="${searchTerm}">
    </label>

    <div class="filter-row" style="margin-top:14px">
      ${["Semua", "Makanan", "Minuman", "Jajanan", "Warung"].map(c => `
        <button class="filter ${activeCategory === c ? "active" : ""}" onclick="setCategory('${c}')">${c}</button>
      `).join("")}
    </div>

    <div class="section-head">
      <h2>${results.length} usaha ditemukan</h2>
      <span style="font-size:11px;color:var(--muted)">Terdekat dulu</span>
    </div>

    <div class="business-list">
      ${results.length ? results.map(businessCard).join("") : `
        <div class="empty">
          <strong>Nggak ketemu.</strong>
          Coba kata pencarian atau kategori lain.
        </div>
      `}
    </div>
  `;
}

function renderSaved() {
  const saved = businesses.filter(b => savedIds.includes(b.id));

  return `
    <div class="page-title">
      <h1>Saved</h1>
      <p>Usaha yang kamu simpan.</p>
    </div>

    <div class="business-list">
      ${saved.length ? saved.map(businessCard).join("") : `
        <div class="empty">
          <strong>Belum ada yang disimpan.</strong>
          Tekan ♡ pada usaha yang ingin kamu simpan.
        </div>
      `}
    </div>
  `;
}

function renderProfile() {
  return `
    <div class="page-title">
      <h1>Profile</h1>
      <p>Prototype akun Sirkelan.</p>
    </div>

    <div class="profile-card">
      <div class="profile-row">
        <small>Lokasi</small>
        <strong>📍 Rumah · RT 04, Bogor</strong>
      </div>
      <div class="profile-row">
        <small>Usaha tersimpan</small>
        <strong>${savedIds.length} usaha</strong>
      </div>
      <div class="profile-row">
        <small>Versi</small>
        <strong>Sirkelan V0.1 Prototype</strong>
      </div>
    </div>
  `;
}

function renderDetail(id) {
  const b = businesses.find(item => item.id === id);
  if (!b) return;

  app.innerHTML = `
    <button class="detail-back" onclick="navigate('${currentPage === "detail" ? "home" : currentPage}')">← Kembali</button>

    <img class="detail-hero" src="${b.image}" alt="${b.name}">

    <section class="detail-header">
      <div class="detail-category">${b.category}</div>
      <h1>${b.name}</h1>
      <div class="detail-meta">
        <span>📍 ${formatDistance(b.distance)} dari kamu</span>
        <span class="${b.status === "Buka" ? "status-open" : "status-closed"}">● ${b.status}</span>
      </div>
    </section>

    <div class="action-grid">
      <button class="action-button" onclick="openMaps('${encodeURIComponent(b.address)}')">📍 Lihat Lokasi</button>
      <button class="action-button secondary" onclick="openWhatsApp('${b.whatsapp}', '${encodeURIComponent(b.name)}')">💬 WhatsApp</button>
    </div>

    <section class="info-box">
      <h2>Tentang usaha</h2>
      <p>${b.description}</p>
      <p style="margin-top:9px">📍 ${b.address}</p>
    </section>

    <section class="info-box">
      <h2>Menu</h2>
      ${b.menu.map(item => `
        <div class="menu-row">
          <strong>${item[0]}</strong>
          <span>${item[1]}</span>
        </div>
      `).join("")}
    </section>
  `;
}

function render() {
  if (currentPage === "detail") return;

  if (currentPage === "home") app.innerHTML = renderHome();
  if (currentPage === "explore") app.innerHTML = renderExplore();
  if (currentPage === "saved") app.innerHTML = renderSaved();
  if (currentPage === "profile") app.innerHTML = renderProfile();

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.page === currentPage);
  });

  const homeSearch = document.getElementById("homeSearch");
  const exploreSearch = document.getElementById("exploreSearch");

  if (homeSearch) {
    homeSearch.addEventListener("input", e => {
      searchTerm = e.target.value;
      navigate("explore");
    });
  }

  if (exploreSearch) {
    exploreSearch.addEventListener("input", e => {
      searchTerm = e.target.value;
      render();
      const input = document.getElementById("exploreSearch");
      if (input) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    });
  }
}

function navigate(page) {
  currentPage = page;
  if (page !== "explore") {
    searchTerm = page === "home" ? searchTerm : "";
    activeCategory = "Semua";
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDetail(id) {
  currentPage = "detail";
  renderDetail(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goCategory(category) {
  activeCategory = category;
  searchTerm = "";
  currentPage = "explore";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setCategory(category) {
  activeCategory = category;
  render();
}

function openMaps(address) {
  window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank");
}

function openWhatsApp(number, businessName) {
  window.open(`https://wa.me/${number}?text=Halo%20${businessName},%20saya%20mau%20tanya%20tentang%20usaha%20Anda.`, "_blank");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => navigate(item.dataset.page));
});

document.getElementById("locationButton").addEventListener("click", () => {
  showToast("Prototype: lokasi masih menggunakan data dummy.");
});

render();
