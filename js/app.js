// Logika interaktif aplikasi DoRehab Pro ID
let currentInjuryId = INJURIES_DATA[0].id;
let currentPhaseIdx = 0;
let searchQuery = "";
let regionFilter = "all";

const injurySelectorEl = document.getElementById("injurySelector");
const injuryDetailEl = document.getElementById("injuryDetailSection");
const searchInputEl = document.getElementById("searchInput");
const regionFilterEl = document.getElementById("regionFilter");

function getYoutubeUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function renderInjuryPills() {
  const filtered = INJURIES_DATA.filter((inj) => {
    const matchRegion = regionFilter === "all" || inj.region === regionFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      inj.name.toLowerCase().includes(q) ||
      inj.englishName.toLowerCase().includes(q) ||
      inj.phases.some((p) => p.exercises.some((ex) => ex.name.toLowerCase().includes(q)));
    return matchRegion && matchQuery;
  });

  if (filtered.length > 0 && !filtered.some((i) => i.id === currentInjuryId)) {
    currentInjuryId = filtered[0].id;
    currentPhaseIdx = 0;
  }

  injurySelectorEl.innerHTML = filtered
    .map((inj, idx) => {
      const active = inj.id === currentInjuryId;
      const numberLabel = INJURIES_DATA.findIndex((item) => item.id === inj.id) + 1;
      return `
        <button
          onclick="selectInjury('${inj.id}')"
          class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 border ${
            active
              ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20"
              : "bg-slate-950/80 text-slate-300 border-slate-800 hover:border-emerald-500/50 hover:text-white"
          }"
        >
          <span class="w-5 h-5 rounded-md text-[11px] font-extrabold flex items-center justify-center ${
            active ? "bg-slate-950/20 text-slate-950" : "bg-slate-800 text-emerald-400"
          }">${numberLabel}</span>
          <span>${inj.name.split(" (")[0]}</span>
        </button>
      `;
    })
    .join("");

  if (filtered.length === 0) {
    injurySelectorEl.innerHTML = `<p class="text-sm text-amber-400">Tidak ditemukan cedera atau latihan yang cocok dengan kata kunci "${searchQuery}".</p>`;
  }
}

function selectInjury(id) {
  currentInjuryId = id;
  currentPhaseIdx = 0;
  renderInjuryPills();
  renderInjuryDetail();
}

function selectPhase(idx) {
  currentPhaseIdx = idx;
  renderInjuryDetail();
}

function renderInjuryDetail() {
  const inj = INJURIES_DATA.find((i) => i.id === currentInjuryId) || INJURIES_DATA[0];
  const activePhase = inj.phases[currentPhaseIdx] || inj.phases[0];

  injuryDetailEl.innerHTML = `
    <!-- Header Info Cedera -->
    <div class="bg-clinic-card border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
            ${inj.regionLabel}
          </span>
          <span class="px-2.5 py-1 rounded-md bg-lime-500/15 border border-lime-500/30 text-lime-300 text-xs font-bold">
            ${inj.badge}
          </span>
        </div>
        <span class="text-xs text-slate-400 font-medium">${inj.englishName}</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-extrabold text-white">${inj.name}</h2>
      <p class="text-sm text-slate-300 mt-2 leading-relaxed">${inj.overview}</p>

      <!-- Derajat Keparahan (Grades) -->
      <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        ${inj.grades
          .map(
            (g, i) => `
          <div class="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/90">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-2 h-2 rounded-full ${
                i === 0 ? "bg-emerald-400" : i === 1 ? "bg-amber-400" : "bg-rose-400"
              }"></span>
              <span class="text-xs font-extrabold text-white">${g.grade}</span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">${g.desc}</p>
          </div>
        `
          )
          .join("")}
      </div>

      <!-- Prinsip Terapi Latihan Spesifik Cedera -->
      <div class="mt-6 pt-5 border-t border-slate-800/80">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-emerald-400 text-base">⚕️</span>
          <h3 class="text-sm sm:text-base font-extrabold text-white uppercase tracking-wide">
            Prinsip Terapi Latihan Spesifik (${inj.name.split(" (")[0]})
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${inj.principles
            .map(
              (p, idx) => `
            <div class="p-4 rounded-xl bg-gradient-to-br from-emerald-950/35 to-slate-950 border border-emerald-500/25">
              <div class="text-xs font-extrabold text-emerald-300 mb-1">Prinsip ${idx + 1}: ${p.title}</div>
              <p class="text-xs text-slate-300 leading-relaxed">${p.detail}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>

    <!-- Phase Tabs -->
    <div class="bg-clinic-card border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h3 class="text-lg font-extrabold text-white">Program Latihan Bertahap &amp; Dosis FITT</h3>
          <p class="text-xs text-slate-400">Pilih fase rehabilitasi untuk melihat foto gerakan, dosis FITT lengkap, dan video YouTube</p>
        </div>
        <span class="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start">
          Target Nyeri: VAS &le; 3/10
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
        ${inj.phases
          .map(
            (ph, idx) => `
          <button
            onclick="selectPhase(${idx})"
            class="p-3 rounded-xl text-left border transition ${
              idx === currentPhaseIdx
                ? "bg-emerald-500/15 border-emerald-400 text-white shadow-md shadow-emerald-500/10"
                : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
            }"
          >
            <div class="text-[11px] font-bold uppercase tracking-wider ${
              idx === currentPhaseIdx ? "text-emerald-400" : "text-slate-500"
            }">Tahap ${idx + 1}</div>
            <div class="text-xs sm:text-sm font-bold mt-0.5 line-clamp-2">${ph.phase.replace(/^Fase \d+:\s*/, "")}</div>
          </button>
        `
          )
          .join("")}
      </div>

      <!-- Active Phase Banner -->
      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div class="text-sm font-extrabold text-emerald-400">${activePhase.phase}</div>
          <p class="text-xs text-slate-300 mt-0.5"><strong class="text-white">Tujuan Klinis:</strong> ${activePhase.goal}</p>
        </div>
        <span class="text-xs text-slate-400 shrink-0">${activePhase.exercises.length} Latihan Terstruktur</span>
      </div>

      <!-- Exercise Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${activePhase.exercises
          .map(
            (ex, idx) => `
          <article class="exercise-card bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col">
            <!-- Real Exercise Image -->
            <div class="relative h-48 overflow-hidden bg-slate-900">
              <img
                src="${ex.img}"
                alt="${ex.name}"
                loading="lazy"
                onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80';"
                class="w-full h-full object-cover img-zoom"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-sm border border-slate-700 text-[11px] font-extrabold text-emerald-400">
                Latihan #${idx + 1} • ${ex.fitt.type}
              </span>
              <a
                href="${getYoutubeUrl(ex.youtubeQuery)}"
                target="_blank"
                rel="noopener noreferrer"
                class="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-lg flex items-center gap-1.5 transition"
              >
                <span>▶</span>
                <span>Video YouTube</span>
              </a>
            </div>

            <!-- Card Body -->
            <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 class="text-base sm:text-lg font-extrabold text-white">${ex.name}</h4>
                <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  <strong class="text-slate-200">Instruksi Teknik:</strong> ${ex.cue}
                </p>
              </div>

              <!-- FITT Dose Table -->
              <div class="mt-4 pt-3.5 border-t border-slate-800/90">
                <div class="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 mb-2">
                  Dosis Latihan (Konsep FITT)
                </div>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span class="text-[10px] font-bold uppercase text-emerald-400 block">F • Frequency</span>
                    <span class="text-slate-200 font-semibold">${ex.fitt.f}</span>
                  </div>
                  <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span class="text-[10px] font-bold uppercase text-lime-400 block">I • Intensity</span>
                    <span class="text-slate-200 font-semibold">${ex.fitt.i}</span>
                  </div>
                  <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span class="text-[10px] font-bold uppercase text-cyan-400 block">T • Time / Volume</span>
                    <span class="text-slate-200 font-semibold">${ex.fitt.t}</span>
                  </div>
                  <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span class="text-[10px] font-bold uppercase text-amber-400 block">T • Type</span>
                    <span class="text-slate-200 font-semibold">${ex.fitt.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// Event Listeners
searchInputEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderInjuryPills();
  renderInjuryDetail();
});

regionFilterEl.addEventListener("change", (e) => {
  regionFilter = e.target.value;
  renderInjuryPills();
  renderInjuryDetail();
});

// Modals
const principlesModal = document.getElementById("principlesModal");
const fittModal = document.getElementById("fittModal");

document.getElementById("openPrinciplesBtn").addEventListener("click", () => {
  principlesModal.classList.remove("hidden");
  principlesModal.classList.add("flex");
});
document.getElementById("closePrinciplesBtn").addEventListener("click", () => {
  principlesModal.classList.add("hidden");
  principlesModal.classList.remove("flex");
});

document.getElementById("openFittGuideBtn").addEventListener("click", () => {
  fittModal.classList.remove("hidden");
  fittModal.classList.add("flex");
});
document.getElementById("closeFittBtn").addEventListener("click", () => {
  fittModal.classList.add("hidden");
  fittModal.classList.remove("flex");
});

window.addEventListener("click", (e) => {
  if (e.target === principlesModal) {
    principlesModal.classList.add("hidden");
    principlesModal.classList.remove("flex");
  }
  if (e.target === fittModal) {
    fittModal.classList.add("hidden");
    fittModal.classList.remove("flex");
  }
});

// Initial Render
renderInjuryPills();
renderInjuryDetail();
