// Database lengkap 11 Cedera Olahraga, Prinsip Terapi Latihan, Dosis FITT, Foto Nyata & Tautan YouTube
const INJURIES_DATA = [
  {
    id: "hip-subluxation",
    name: "Subluksasi Sendi Panggul",
    englishName: "Hip Joint Subluxation",
    region: "lower",
    regionLabel: "Panggul & Ekstremitas Bawah",
    badge: "BARU • Cedera ke-11",
    overview: "Pergeseran parsial kaput femur dari asetabulum akibat trauma berenergi tinggi atau hipermobilitas kapsulolabral yang memicu ketidakstabilan dan nyeri lipat paha dalam.",
    grades: [
      { grade: "Derajat I (Ringan)", desc: "Mikro-instabilitas kapsul anterior/posterior tanpa robekan labrum mayor; nyeri saat rotasi ekstrem." },
      { grade: "Derajat II (Sedang)", desc: "Subluksasi traumatik akut dengan robekan parsial labrum/ligamen iliofemoral serta efusi sendi." },
      { grade: "Derajat III (Berat)", desc: "Subluksasi berulang dengan cedera kondral asetabulum atau impaksi kaput femur; perlu evaluasi ortopedi." }
    ],
    principles: [
      { title: "Proteksi Kapsul Anterior & Posterior", detail: "Hindari ekstensi-rotasi eksternal berlebihan atau fleksi-adduksi-rotasi internal (FADIR) ekstrem pada fase awal." },
      { title: "Sentralisasi Dinamis Kaput Femur", detail: "Aktivasi otot deep hip rotators (piriformis, obturator, quadratus femoris) dan gluteus medius menjaga kaput femur tetap terpusat." },
      { title: "Kontrol Lumbopelvik Terintegrasi", detail: "Stabilitas inti (core) mencegah kemiringan pelvis kompensatoris saat menumpu berat badan satu tungkai." }
    ],
    phases: [
      {
        phase: "Fase 1: Proteksi & Kontrol Nyeri (Minggu 1–2)",
        goal: "Menurunkan spasme otot panggul, menjaga sentralisasi sendi, dan memulihkan pola jalan bebas pincang.",
        exercises: [
          {
            name: "Isometric Glute Set & Pelvic Tilt",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "isometric glute squeeze posterior pelvic tilt physical therapy",
            fitt: { f: "2–3x / hari", i: "RPE 3–4 (40% MVIC, bebas nyeri)", t: "3 set × 10 rep (tahan 6 dtk)", type: "Isometrik Stabilisasi" },
            cue: "Kontraksikan otot bokong secara simetris tanpa mendorong panggul ke depan secara berlebihan."
          },
          {
            name: "Supine Hip Abduction Isometric (Belt)",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "supine hip abduction isometric belt exercise",
            fitt: { f: "2x / hari", i: "RPE 4 (VAS ≤ 2/10)", t: "4 set × 8 rep (tahan 8 dtk)", type: "Isometrik Abduktor" },
            cue: "Dorong paha ke arah luar melawan sabuk non-elastis pada posisi netral panggul."
          },
          {
            name: "Quadruped Rocking (Range Terbatas)",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "quadruped hip rocking mobility physical therapy",
            fitt: { f: "1–2x / hari", i: "RPE 3 (Mobilitas lembut)", t: "3 set × 12 rep (tempo 2-1-2)", type: "Mobilitas ROM Terkontrol" },
            cue: "Ayunkan panggul ke belakang perlahan hingga batas nyaman sebelum muncul rasa menjepit di lipat paha."
          },
          {
            name: "Short-Lever Side-Lying Clamshell",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "clamshell exercise hip stability physical therapy",
            fitt: { f: "1x / hari", i: "RPE 4–5 (Berat badan)", t: "3 set × 12 rep (istirahat 45 dtk)", type: "Isotonik Deep Rotator" },
            cue: "Jaga tulang panggul tetap menghadap ke depan, jangan biarkan pinggul terguling ke belakang."
          }
        ]
      },
      {
        phase: "Fase 2: Stabilitas Kapsul & Penguatan Dasar (Minggu 3–6)",
        goal: "Meningkatkan kekuatan gluteus medius/maximus dan toleransi beban rantai kinetik tertutup.",
        exercises: [
          {
            name: "Glute Bridge dengan Mini-Band",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "glute bridge with resistance band physical therapy",
            fitt: { f: "3–4x / minggu", i: "RPE 6 (Band sedang)", t: "3 set × 12 rep (tempo 2-2-2)", type: "Isotonik Rantai Tertutup" },
            cue: "Pertahankan tekanan lutut ke luar melawan band saat mengangkat panggul."
          },
          {
            name: "Side-Lying Hip Abduction (Neutral)",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "side lying hip abduction proper form physical therapy",
            fitt: { f: "3–4x / minggu", i: "RPE 6–7 (Ankle weight 1–2 kg)", t: "3 set × 15 rep (istirahat 60 dtk)", type: "Isotonik Abduktor" },
            cue: "Angkat tungkai lurus sedikit ke belakang (5° ekstensi) untuk mengisolasi gluteus medius."
          },
          {
            name: "Pallof Press dengan Split Stance",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "pallof press anti rotation core exercise",
            fitt: { f: "3x / minggu", i: "RPE 6 (Anti-rotasi)", t: "3 set × 10 rep / sisi (tahan 3 dtk)", type: "Stabilitas Core & Pelvis" },
            cue: "Tahan tarikan kabel/band di tengah dada agar panggul dan batang tubuh tidak berputar."
          },
          {
            name: "Box Squat Terkontrol",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "box squat physical therapy hip rehab",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Beban tubuh / goblet ringan)", t: "3 set × 10 rep (tempo 3-1-1)", type: "Penguatan Rantai Tertutup" },
            cue: "Dorong panggul ke belakang menuju bangku, jaga lutut sejajar jari kaki kedua."
          }
        ]
      },
      {
        phase: "Fase 3: Penguatan Dinamis & Propriosepsi (Minggu 7–10)",
        goal: "Memulihkan kontrol satu tungkai, keseimbangan dinamis, dan daya tahan otot panggul.",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift (RDL)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg romanian deadlift hip stability",
            fitt: { f: "3x / minggu", i: "RPE 7 (Dumbbell ringan–sedang)", t: "3 set × 8–10 rep / sisi", type: "Eksentrik & Proprioseptif" },
            cue: "Jaga kedua sisi panggul sejajar lantai (tidak miring) saat menurunkan beban."
          },
          {
            name: "Lateral Monster Walk (Mini-Band)",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral band walk monster walk glute medius",
            fitt: { f: "3x / minggu", i: "RPE 7 (Band berat)", t: "3 set × 12 langkah / arah", type: "Daya Tahan Abduktor" },
            cue: "Posisi setengah jongkok (athletic stance), melangkah menyamping tanpa menyeret kaki."
          },
          {
            name: "Bulgarian Split Squat (Kedalaman Terkontrol)",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "bulgarian split squat form hip rehab",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (70% 1RM)", t: "3 set × 8 rep / sisi (tempo 3-1-1)", type: "Penguatan Unilateral" },
            cue: "Turunkan lutut belakang vertikal sambil menjaga batang tubuh tegak."
          },
          {
            name: "Star Excursion Balance Reach",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "star excursion balance test exercise hip stability",
            fitt: { f: "3x / minggu", i: "RPE 6 (Kontrol neuromuskular)", t: "3 set × 6 arah / tungkai", type: "Proprioseptif Dinamis" },
            cue: "Sentuhkan ujung kaki bebas ke berbagai arah tanpa kehilangan keseimbangan lutut tumpu."
          }
        ]
      },
      {
        phase: "Fase 4: Kembali ke Olahraga / Return to Sport (Minggu 11+)",
        goal: "Kesiapan akselerasi, deselerasi, dan perubahan arah multi-planar tanpa instabilitas.",
        exercises: [
          {
            name: "Lateral Skater Bound & Stick",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral skater bounds landing stability exercise",
            fitt: { f: "2x / minggu", i: "RPE 8 (Daya ledak terkontrol)", t: "4 set × 6 rep / sisi (tahan 2 dtk)", type: "Pliometrik & Deselerasi" },
            cue: "Mendarat lembut dengan panggul dan lutut tertekuk, tahan posisi diam selama 2 detik."
          },
          {
            name: "Copenhagen Plank (Short/Long Lever)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "copenhagen plank progression hip adductor",
            fitt: { f: "2–3x / minggu", i: "RPE 8 (Tinggi)", t: "3 set × 20–30 dtk / sisi", type: "Isometrik Adduktor & Core" },
            cue: "Jaga garis lurus dari kepala hingga tumit tanpa membiarkan panggul turun."
          },
          {
            name: "45° Cutting & Deceleration Drill",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "45 degree cutting agility drill rehab",
            fitt: { f: "2x / minggu", i: "RPE 8–9 (85–95% kecepatan)", t: "4 set × 4 repetisi / arah", type: "Agilitas Spesifik Olahraga" },
            cue: "Rendahkan pusat gravitasi sebelum mengubah arah untuk melindungi kapsul panggul."
          },
          {
            name: "Single-Leg Drop Landing",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg drop jump landing mechanics",
            fitt: { f: "2x / minggu", i: "RPE 8 (Box 20–30 cm)", t: "3 set × 6 rep / tungkai", type: "Kontrol Impak Pliometrik" },
            cue: "Hindari lutut jatuh ke dalam (dynamic valgus) saat mendarat dari boks."
          }
        ]
      }
    ]
  },
  {
    id: "acl-sprain",
    name: "ACL Sprain (Cedera Ligamen Krusiatum Anterior)",
    englishName: "Anterior Cruciate Ligament Sprain",
    region: "lower",
    regionLabel: "Lutut & Ekstremitas Bawah",
    badge: "Cedera Lutut Utama",
    overview: "Robekan parsial atau total pada ligamen ACL akibat mekanisme pivoting, deselerasi mendadak, atau pendaratan valgus lutut.",
    grades: [
      { grade: "Derajat I", desc: "Peregangan mikro serabut ACL tanpa kelemahan (laxity) sendi bermakna." },
      { grade: "Derajat II", desc: "Robekan parsial ACL dengan tes Lachman positif ringan dan efusi sendi." },
      { grade: "Derajat III", desc: "Ruptur total ACL dengan ketidakstabilan rotasional (pivot shift positif)." }
    ],
    principles: [
      { title: "Pemulihan Ekstensi Penuh Dini", detail: "Mencapai ekstensi lutut 0° pada 2 minggu pertama mencegah artrofibrosis dan pincang." },
      { title: "Proteksi Graft / Ligamen terhadap Shear Anterior", detail: "Batasi ekstensi lutut rantai terbuka sudut 30°–0° dengan beban berat pada fase awal." },
      { title: "Dominasi Hamstring & Kontrol Valgus", detail: "Penguatan hamstring sebagai agonis ACL dan gluteus medius untuk mencegah kolaps lutut ke dalam." }
    ],
    phases: [
      {
        phase: "Fase 1: Kontrol Efusi & Ekstensi Penuh (Minggu 1–2)",
        goal: "Menghilangkan bengkak, mengaktifkan quadriceps (VMO), dan mencapai ekstensi penuh 0°.",
        exercises: [
          {
            name: "Quad Sets dengan Handuk Bawah Tumit",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "quad sets towel under heel acl rehab",
            fitt: { f: "3–4x / hari", i: "RPE 4 (Kontraksi maksimal nyaman)", t: "4 set × 10 rep (tahan 6 dtk)", type: "Isometrik Quadriceps" },
            cue: "Tekan bagian belakang lutut ke arah matras hingga tempurung lutut tertarik ke atas."
          },
          {
            name: "Heel Slides (Fleksi Aktif Terbantu)",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "heel slides knee flexion acl physical therapy",
            fitt: { f: "3x / hari", i: "RPE 3 (Regangan ringan VAS ≤ 3)", t: "3 set × 12 rep (tahan 5 dtk)", type: "Mobilitas ROM Fleksi" },
            cue: "Geser tumit perlahan mendekati bokong tanpa mengangkat panggul."
          },
          {
            name: "Straight Leg Raise (SLR) 4 Arah",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "straight leg raise acl rehab no quad lag",
            fitt: { f: "2x / hari", i: "RPE 5 (Tanpa extensor lag)", t: "3 set × 10 rep / arah", type: "Isotonik Rantai Terbuka" },
            cue: "Kunci lutut lurus penuh sebelum mengangkat tungkai setinggi 30 cm."
          },
          {
            name: "Prone Hang (Pasif Ekstensi Lutut)",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "prone hang knee extension acl rehab",
            fitt: { f: "3x / hari", i: "RPE 2 (Gravitasi pasif)", t: "3 set × 2–3 menit", type: "Peregangan Kapsul Posterior" },
            cue: "Biarkan tungkai bawah menggantung di tepi bed untuk meluruskan lutut secara bertahap."
          }
        ]
      },
      {
        phase: "Fase 2: Penguatan Rantai Tertutup & Keseimbangan (Minggu 3–8)",
        goal: "Membangun kekuatan quadriceps dan hamstring secara simetris serta kontrol satu tungkai.",
        exercises: [
          {
            name: "Mini Wall Squat (0°–60° Fleksi)",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "wall squat acl rehab physical therapy",
            fitt: { f: "3–4x / minggu", i: "RPE 6 (Berat badan)", t: "3 set × 12 rep (tempo 3-1-2)", type: "Isotonik Rantai Tertutup" },
            cue: "Sandarkan punggung di dinding, turunkan hingga 60° dan dorong tumit saat berdiri."
          },
          {
            name: "Hamstring Bridge dengan Swiss Ball",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "swiss ball hamstring curl bridge acl rehab",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Kontrol eksentrik)", t: "3 set × 10 rep (istirahat 60 dtk)", type: "Isotonik Hamstring" },
            cue: "Angkat panggul lalu tarik bola mendekati bokong dan luruskan kembali perlahan."
          },
          {
            name: "Forward & Lateral Step-Up (Box 15–20 cm)",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "step up exercise knee alignment acl",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Kontrol lutut)", t: "3 set × 12 rep / tungkai", type: "Fungsional Rantai Tertutup" },
            cue: "Pastikan lutut tetap sejajar dengan jari kaki kedua saat naik dan turun."
          },
          {
            name: "Single-Leg Balance di Bosu / Bantalan Busa",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg balance foam pad acl proprioception",
            fitt: { f: "4x / minggu", i: "RPE 5–6 (Permukaan labil)", t: "4 set × 30–45 dtk / sisi", type: "Proprioseptif Statis" },
            cue: "Tekuk lutut sedikit (15°) dan pertahankan stabilitas pergelangan kaki serta panggul."
          }
        ]
      },
      {
        phase: "Fase 3: Hipertrofi & Penguatan Berat (Minggu 9–16)",
        goal: "Mencapai Limb Symmetry Index (LSI) kekuatan quadriceps dan hamstring >85%.",
        exercises: [
          {
            name: "Single-Leg Leg Press",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg press acl strengthening",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (75% 1RM)", t: "4 set × 8–10 rep / tungkai", type: "Hipertrofi Quadriceps" },
            cue: "Dorong pelat menggunakan seluruh telapak kaki tanpa mengunci lutut secara kasar."
          },
          {
            name: "Nordic Hamstring Curl (Eksentrik Terbantu)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "nordic hamstring curl progression acl rehab",
            fitt: { f: "2x / minggu", i: "RPE 8 (Eksentrik tinggi)", t: "3 set × 5–6 rep (turun 4 dtk)", type: "Eksentrik Hamstring" },
            cue: "Jaga panggul tetap lurus, tahan tubuh turun selambat mungkin menggunakan hamstring."
          },
          {
            name: "Rear-Foot Elevated Split Squat",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "rear foot elevated split squat knee rehab",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (Dumbbell)", t: "3 set × 8 rep / sisi", type: "Penguatan Unilateral" },
            cue: "Fokus pada distribusi beban di kaki depan dengan kontrol lutut yang stabil."
          },
          {
            name: "Seated Knee Extension (90°–45° aman)",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "seated knee extension acl rehab progression",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (70% 1RM)", t: "3 set × 10 rep (tempo 2-1-3)", type: "Isolasi Quadriceps" },
            cue: "Angkat beban secara terkontrol dan turunkan perlahan selama 3 detik."
          }
        ]
      },
      {
        phase: "Fase 4: Pliometrik & Return to Sport (Minggu 17+)",
        goal: "LSI >90% pada tes hop, kontrol pendaratan valgus, dan kesiapan olahraga pivot.",
        exercises: [
          {
            name: "Double-to-Single Leg Box Jump & Stick",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "box jump single leg landing acl return to sport",
            fitt: { f: "2x / minggu", i: "RPE 8 (Box 30–40 cm)", t: "4 set × 5 rep / sisi", type: "Pliometrik Pendaratan" },
            cue: "Tolak dengan dua kaki, mendarat dengan satu kaki secara senyap dan stabil."
          },
          {
            name: "Triple Hop for Distance",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "triple hop test training acl rehab",
            fitt: { f: "2x / minggu", i: "RPE 8–9 (85–95% usaha)", t: "3 set × 3 lompatan / sisi", type: "Daya Ledak Horizontal" },
            cue: "Minimalkan waktu kontak tanah antar lompatan sambil menjaga alignment lutut."
          },
          {
            name: "T-Test Agility & Pivoting",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "t test agility drill acl return to sport",
            fitt: { f: "2x / minggu", i: "RPE 8–9 (Kecepatan tinggi)", t: "4 set × 2 repetisi (istirahat 90 dtk)", type: "Agilitas Multi-Arah" },
            cue: "Lakukan shuffle menyamping tanpa menyilangkan kaki dan jaga panggul rendah."
          },
          {
            name: "Perturbation & Reactive Catch Single-Leg",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg reactive ball catch acl neuromuscular",
            fitt: { f: "2–3x / minggu", i: "RPE 7 (Reaktif)", t: "3 set × 45 dtk / tungkai", type: "Kontrol Neuromuskular" },
            cue: "Tangkap bola dari berbagai arah sambil mempertahankan posisi lutut fleksi 25°."
          }
        ]
      }
    ]
  },
  {
    id: "meniscal-tear",
    name: "Meniscal Tear (Robekan Meniskus Lutut)",
    englishName: "Knee Meniscal Tear",
    region: "lower",
    regionLabel: "Lutut & Ekstremitas Bawah",
    badge: "Bantalan Sendi Lutut",
    overview: "Cedera tulang rawan fibrosa (meniskus medial atau lateral) akibat puntiran lutut saat kaki menapak, menyebabkan nyeri garis sendi dan sensasi mengunci.",
    grades: [
      { grade: "Derajat I (Degeneratif / Intrasubstansi)", desc: "Perubahan sinyal internal meniskus tanpa robekan permukaan artikular." },
      { grade: "Derajat II (Robekan Parsial / Longitudinal)", desc: "Robekan pada zona merah-merah atau merah-putih tanpa fragmen tidak stabil." },
      { grade: "Derajat III (Bucket-Handle / Kompleks)", desc: "Robekan penuh yang dapat bergeser ke celah sendi dan menyebabkan mechanical locking." }
    ],
    principles: [
      { title: "Hindari Deep Squat & Puntiran Beban Awal", detail: "Fleksi lutut >90° dengan beban aksial meningkatkan tekanan kompresi pada tanduk posterior meniskus." },
      { title: "Distribusi Beban melalui Penguatan Quadriceps & Glutes", detail: "Otot paha dan bokong yang kuat menyerap gaya reaksi tanah sehingga mengurangi stres geser meniskus." },
      { title: "Progresi Beban Aksial Bertahap", detail: "Tingkatkan volume berdiri, berjalan, dan latihan tertutup sesuai respons efusi 24 jam." }
    ],
    phases: [
      {
        phase: "Fase 1: Reduksi Nyeri Garis Sendi & Aktivasi Otot (Minggu 1–2)",
        goal: "Mengurangi efusi sendi, mempertahankan ekstensi penuh, dan mencegah atrofi quadriceps.",
        exercises: [
          {
            name: "Isometric Quadriceps Setting",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "quadriceps setting exercise meniscus tear",
            fitt: { f: "3x / hari", i: "RPE 4 (VAS ≤ 2/10)", t: "3 set × 12 rep (tahan 5 dtk)", type: "Isometrik Analgetik" },
            cue: "Kencangkan otot paha depan selama 5 detik lalu rilekskan penuh."
          },
          {
            name: "Gentle Seated Knee Flexion-Extension",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "seated knee flexion extension meniscus rehab",
            fitt: { f: "2–3x / hari", i: "RPE 3 (Tanpa beban)", t: "3 set × 15 rep (tempo lambat)", type: "Mobilitas ROM Rantai Terbuka" },
            cue: "Tekuk dan luruskan lutut dalam rentang bebas nyeri tanpa memaksa sudut akhir."
          },
          {
            name: "Side-Lying Hip Abduction",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "side lying hip abduction meniscus physical therapy",
            fitt: { f: "1x / hari", i: "RPE 5 (Berat badan)", t: "3 set × 12 rep / sisi", type: "Penguatan Proksimal" },
            cue: "Jaga lutut tetap lurus dan angkat tungkai ke atas sejajar garis tubuh."
          },
          {
            name: "Standing Calf Raises (Dua Kaki)",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "standing calf raises knee rehabilitation",
            fitt: { f: "1x / hari", i: "RPE 5 (Kontrol penuh)", t: "3 set × 15 rep (tempo 2-1-2)", type: "Isotonik Distal" },
            cue: "Angkat tumit setinggi mungkin sambil menjaga lutut lurus nyaman."
          }
        ]
      },
      {
        phase: "Fase 2: Penguatan Rantai Tertutup Sudut Aman (Minggu 3–6)",
        goal: "Melatih kontrol lutut pada sudut 0°–60° serta meningkatkan toleransi menumpu.",
        exercises: [
          {
            name: "Mini Squat (0°–60°)",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "mini squat meniscus tear rehab",
            fitt: { f: "3x / minggu", i: "RPE 6 (Berat badan)", t: "3 set × 12 rep (istirahat 60 dtk)", type: "Isotonik Rantai Tertutup" },
            cue: "Hentikan gerakan turun pada sudut 60° untuk menghindari kompresi meniskus posterior."
          },
          {
            name: "Terminal Knee Extension (TKE) dengan Band",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "terminal knee extension resistance band",
            fitt: { f: "3–4x / minggu", i: "RPE 6 (Band sedang)", t: "3 set × 15 rep (tahan 2 dtk)", type: "Isotonik VMO" },
            cue: "Luruskan lutut melawan tarikan band di belakang lutut hingga kontraksi penuh."
          },
          {
            name: "Glute Bridge",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "glute bridge physical therapy knee pain",
            fitt: { f: "3x / minggu", i: "RPE 6 (Berat badan)", t: "3 set × 15 rep (tahan 2 dtk)", type: "Penguatan Rantai Posterior" },
            cue: "Dorong melalui tumit dan hindari hiperekstensi punggung bawah."
          },
          {
            name: "Stationary Cycling (Sadel Tinggi)",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "stationary bike seat height knee rehab",
            fitt: { f: "3–4x / minggu", i: "RPE 5–6 (Resistensi ringan)", t: "15–20 menit kontinu", type: "Aerobik & Lubrikasi Sendi" },
            cue: "Atur tinggi sadel agar sudut fleksi lutut puncak tidak melebihi 90°."
          }
        ]
      },
      {
        phase: "Fase 3: Kekuatan Unilateral & Stabilitas Dinamis (Minggu 7–10)",
        goal: "Meningkatkan kekuatan tungkai tunggal dan koordinasi proprioseptif.",
        exercises: [
          {
            name: "Step-Down Eksentrik dari Box 15 cm",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "eccentric step down exercise knee rehab",
            fitt: { f: "3x / minggu", i: "RPE 7 (Kontrol 3 detik)", t: "3 set × 10 rep / tungkai", type: "Eksentrik Quadriceps" },
            cue: "Sentuhkan tumit kaki bebas ke lantai perlahan tanpa menjatuhkan panggul."
          },
          {
            name: "Reverse Lunge (Rentang Terkontrol)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "reverse lunge knee friendly physical therapy",
            fitt: { f: "3x / minggu", i: "RPE 7 (Dumbbell ringan)", t: "3 set × 10 rep / sisi", type: "Isotonik Unilateral" },
            cue: "Melangkah ke belakang menjaga tulang kering depan tetap vertikal."
          },
          {
            name: "Romanian Deadlift (RDL)",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "romanian deadlift form hamstring glutes",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (70% 1RM)", t: "3 set × 10 rep", type: "Penguatan Posterior Chain" },
            cue: "Engsel pada panggul dengan lutut sedikit tertekuk (15°–20°) tetap."
          },
          {
            name: "Single-Leg Balance dengan Rotasi Kepala",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg balance head turns proprioception",
            fitt: { f: "3x / minggu", i: "RPE 6 (Tantangan vestibular)", t: "3 set × 30 dtk / sisi", type: "Proprioseptif" },
            cue: "Pertahankan lengkung telapak kaki dan stabilitas lutut saat menoleh kanan-kiri."
          }
        ]
      },
      {
        phase: "Fase 4: Impak & Kembali ke Olahraga (Minggu 11+)",
        goal: "Toleransi lari, lompatan, dan perubahan arah bebas efusi.",
        exercises: [
          {
            name: "Pogo Hops (Dua Kaki)",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "pogo jumps ankle knee stiffness plyometrics",
            fitt: { f: "2x / minggu", i: "RPE 7 (Kontak tanah singkat)", t: "3 set × 15 lompatan", type: "Pliometrik Ringan" },
            cue: "Gunakan elastisitas pergelangan kaki dengan lutut sedikit lentur."
          },
          {
            name: "Lateral Shuffle & Deceleration",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral shuffle deceleration drill knee rehab",
            fitt: { f: "2x / minggu", i: "RPE 8 (80% kecepatan)", t: "4 set × 10 meter / arah", type: "Agilitas Lateral" },
            cue: "Rem gerakan menggunakan sisi luar kaki sambil menekuk panggul dan lutut."
          },
          {
            name: "Goblet Squat (Kedalaman Penuh Bertahap)",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "goblet squat mobility strength knee",
            fitt: { f: "2x / minggu", i: "RPE 7–8 (Beban sedang)", t: "3 set × 8 rep (tempo 3-1-1)", type: "Kekuatan Rentang Penuh" },
            cue: "Turun perlahan ke kedalaman penuh hanya jika bebas nyeri garis sendi."
          },
          {
            name: "Walk-Jog Interval Progression",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "return to running walk jog program knee",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Zona aerobik)", t: "20 menit (2 mnt jog / 1 mnt jalan)", type: "Kondisi Lari Bertahap" },
            cue: "Tingkatkan rasio lari hanya jika tidak ada bengkak keesokan paginya."
          }
        ]
      }
    ]
  },
  {
    id: "mcl-sprain",
    name: "MCL Sprain (Cedera Ligamen Kolateral Medial)",
    englishName: "Medial Collateral Ligament Sprain",
    region: "lower",
    regionLabel: "Lutut & Ekstremitas Bawah",
    badge: "Stabilisator Medial Lutut",
    overview: "Cedera ligamen sisi dalam lutut akibat benturan dari sisi luar (valgus stress) atau gerakan memotong mendadak.",
    grades: [
      { grade: "Derajat I", desc: "Robekan mikro serabut MCL, nyeri tekan lokal tanpa celah valgus (opening <5 mm)." },
      { grade: "Derajat II", desc: "Robekan parsial MCL dengan celah valgus 5–10 mm pada fleksi 30°, titik akhir masih terasa." },
      { grade: "Derajat III", desc: "Ruptur total MCL (>10 mm opening), sering disertai cedera meniskus medial atau ACL." }
    ],
    principles: [
      { title: "Proteksi Stres Valgus", detail: "Gunakan hinged knee brace pada derajat II–III untuk mencegah tarikan ke arah dalam selama fase penyembuhan kolagen." },
      { title: "Penguatan Adduktor & Pes Anserinus", detail: "Otot adduktor magnus, gracilis, dan sartorius bekerja sebagai stabilisator dinamis sisi medial lutut." },
      { title: "Kontrol Pinggul Anti-Valgus", detail: "Gluteus medius dan maximus mencegah femur berotasi ke dalam yang membebani MCL." }
    ],
    phases: [
      {
        phase: "Fase 1: Proteksi Valgus & Mobilitas Bebas Nyeri (Minggu 1–2)",
        goal: "Melindungi ligamen yang sedang menyembuh dan mengembalikan ROM fleksi-ekstensi.",
        exercises: [
          {
            name: "Isometric Adductor Squeeze (Bola Bawah Lutut)",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "isometric adductor ball squeeze knee rehab",
            fitt: { f: "3x / hari", i: "RPE 4 (VAS ≤ 2/10)", t: "3 set × 10 rep (tahan 6 dtk)", type: "Isometrik Adduktor" },
            cue: "Tekan bola lembut di antara kedua lutut secara perlahan tanpa nyeri di sisi dalam lutut."
          },
          {
            name: "Quad Sets & Straight Leg Raise",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "quad sets and straight leg raise mcl sprain",
            fitt: { f: "2–3x / hari", i: "RPE 4–5 (Kontrol penuh)", t: "3 set × 12 rep", type: "Isometrik & Rantai Terbuka" },
            cue: "Pertahankan lutut terkunci lurus selama mengangkat tungkai."
          },
          {
            name: "Supine Heel Slides",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "heel slides mcl sprain physical therapy",
            fitt: { f: "3x / hari", i: "RPE 3 (Mobilitas lembut)", t: "3 set × 12 rep", type: "Mobilitas ROM" },
            cue: "Geser tumit lurus sejajar garis tengah tanpa memutar telapak kaki keluar."
          },
          {
            name: "Clamshell dengan Lutut Tertekuk 45°",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "clamshell exercise mcl knee rehabilitation",
            fitt: { f: "1–2x / hari", i: "RPE 5 (Berat badan)", t: "3 set × 15 rep / sisi", type: "Penguatan Gluteus" },
            cue: "Buka lutut atas tanpa menggeser panggul ke belakang."
          }
        ]
      },
      {
        phase: "Fase 2: Penguatan Dasar & Kontrol Alignment (Minggu 3–5)",
        goal: "Meningkatkan kekuatan quadriceps, hamstring medial, dan stabilitas panggul.",
        exercises: [
          {
            name: "Double-Leg Squat dengan Mini-Band",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "squat with mini band knee valgus correction",
            fitt: { f: "3x / minggu", i: "RPE 6 (Band di atas lutut)", t: "3 set × 12 rep (tempo 3-1-1)", type: "Isotonik Korektif" },
            cue: "Dorong lutut ke arah luar melawan band agar tidak kolaps ke dalam (valgus)."
          },
          {
            name: "Side-Lying Hip Adduction",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "side lying hip adduction exercise mcl",
            fitt: { f: "3x / minggu", i: "RPE 6 (Berat tungkai)", t: "3 set × 12 rep (tahan 2 dtk)", type: "Isotonik Adduktor" },
            cue: "Angkat tungkai bawah lurus ke atas dengan pergelangan kaki netral."
          },
          {
            name: "Hamstring Curl dengan Slider / Handuk",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "hamstring curl slider exercise knee rehab",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Kontrol eksentrik)", t: "3 set × 10 rep", type: "Isotonik Hamstring" },
            cue: "Jaga panggul terangkat stabil saat meluruskan tumit perlahan."
          },
          {
            name: "Step-Up Depan Terkontrol",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "step up knee alignment mcl rehab",
            fitt: { f: "3x / minggu", i: "RPE 6 (Box 20 cm)", t: "3 set × 12 rep / tungkai", type: "Fungsional Rantai Tertutup" },
            cue: "Pastikan tempurung lutut mengarah lurus ke jari kaki tengah."
          }
        ]
      },
      {
        phase: "Fase 3: Penguatan Multi-Planar (Minggu 6–8)",
        goal: "Mempersiapkan ligamen medial terhadap beban menyamping dan rotasi terkontrol.",
        exercises: [
          {
            name: "Lateral Lunge (Rentang Bertahap)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral lunge form mcl sprain rehab",
            fitt: { f: "3x / minggu", i: "RPE 7 (Berat badan / kettlebell ringan)", t: "3 set × 8 rep / sisi", type: "Penguatan Frontal Plane" },
            cue: "Dorong panggul ke belakang pada sisi kaki yang melangkah, jaga kaki tumpu rata di lantai."
          },
          {
            name: "Copenhagen Plank (Lutut di Bangku)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "short lever copenhagen plank adductor strength",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (Isometrik tinggi)", t: "3 set × 20–25 dtk / sisi", type: "Stabilitas Medial Dinamis" },
            cue: "Topang lutut atas di bangku dan angkat panggul hingga tubuh sejajar."
          },
          {
            name: "Single-Leg Romanian Deadlift",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg rdl knee stability exercise",
            fitt: { f: "3x / minggu", i: "RPE 7 (Dumbbell)", t: "3 set × 10 rep / tungkai", type: "Proprioseptif & Posterior Chain" },
            cue: "Pertahankan lengkung kaki dan cegah lutut berputar ke dalam."
          },
          {
            name: "Lateral Band Walk",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral band walk glute medius activation",
            fitt: { f: "3x / minggu", i: "RPE 7 (Band berat)", t: "3 set × 12 langkah / arah", type: "Daya Tahan Abduktor" },
            cue: "Jaga jarak kedua lutut tetap lebar sepanjang langkah."
          }
        ]
      },
      {
        phase: "Fase 4: Kembali ke Olahraga (Minggu 9+)",
        goal: "Kesiapan cutting, pivoting, dan kontak lapangan bebas nyeri medial.",
        exercises: [
          {
            name: "Lateral Skater Hop & Hold",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral skater hop stick mcl return to sport",
            fitt: { f: "2x / minggu", i: "RPE 8 (Daya ledak lateral)", t: "4 set × 6 rep / sisi", type: "Pliometrik Frontal" },
            cue: "Mendarat stabil tanpa gerakan valgus lutut."
          },
          {
            name: "Figure-8 Running & Cutting",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "figure 8 running agility drill knee rehab",
            fitt: { f: "2x / minggu", i: "RPE 8 (80–90% kecepatan)", t: "4 set × 3 putaran", type: "Agilitas Melengkung" },
            cue: "Persempit radius belokan secara bertahap seiring meningkatnya kepercayaan diri."
          },
          {
            name: "Single-Leg Hop for Distance",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg hop for distance test training",
            fitt: { f: "2x / minggu", i: "RPE 8–9 (Maksimal terkontrol)", t: "3 set × 5 rep / tungkai", type: "Pliometrik Unilateral" },
            cue: "Serap benturan pendaratan melalui panggul, lutut, dan pergelangan kaki secara bersamaan."
          },
          {
            name: "Reactive Side-Step Cut (Partner / Cue)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "reactive side step cutting drill sports rehab",
            fitt: { f: "2x / minggu", i: "RPE 9 (Simulasi pertandingan)", t: "4 set × 4 rep / arah", type: "Agilitas Reaktif" },
            cue: "Tanamkan kaki luar dengan kuat dan dorong ke arah berlawanan secara eksplosif."
          }
        ]
      }
    ]
  },
  {
    id: "ankle-sprain",
    name: "Ankle Sprain (Keseleo Pergelangan Kaki Lateral)",
    englishName: "Lateral Ankle Sprain (ATFL/CFL)",
    region: "lower",
    regionLabel: "Pergelangan Kaki & Kaki",
    badge: "Cedera Olahraga Tersering",
    overview: "Peregangan atau robekan ligamen lateral pergelangan kaki (ATFL dan CFL) akibat mekanisme inversi dan plantarfleksi berlebihan.",
    grades: [
      { grade: "Derajat I", desc: "Peregangan ringan ATFL, bengkak minimal, mampu menumpu berat badan penuh." },
      { grade: "Derajat II", desc: "Robekan parsial ATFL, bengkak dan memar sedang, nyeri saat berjalan." },
      { grade: "Derajat III", desc: "Ruptur total ATFL & CFL dengan ketidakstabilan mekanis berat." }
    ],
    principles: [
      { title: "PEACE & LOVE Protocol", detail: "Proteksi awal, elevasi, hindari anti-inflamasi dosis tinggi di 48 jam pertama, lalu pembebanan optimal (Optimal Loading)." },
      { title: "Pemulihan Dorsifleksi Pergelangan Kaki", detail: "Keterbatasan dorsifleksi memicu kompensasi lutut dan meningkatkan risiko keseleo berulang." },
      { title: "Re-edukasi Proprioseptif & Otot Peroneus", detail: "Otot peroneus longus/brevis adalah pertahanan dinamis utama melawan gerakan inversi mendadak." }
    ],
    phases: [
      {
        phase: "Fase 1: Kontrol Bengkak & Mobilitas Dini (Hari 1–7)",
        goal: "Menurunkan edema, mengembalikan ROM bebas nyeri, dan memulai pembebanan bertahap.",
        exercises: [
          {
            name: "Ankle Alphabet & Pumps",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "ankle alphabet exercise sprained ankle rehab",
            fitt: { f: "3–4x / hari", i: "RPE 2–3 (Bebas nyeri)", t: "2 set × A–Z / sesi", type: "Mobilitas ROM Aktif" },
            cue: "Gerakkan hanya sendi pergelangan kaki untuk menulis huruf A sampai Z di udara."
          },
          {
            name: "Isometric Eversion (Melawan Dinding/Tangan)",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "isometric ankle eversion exercise physical therapy",
            fitt: { f: "3x / hari", i: "RPE 4 (VAS ≤ 2/10)", t: "4 set × 8 rep (tahan 6 dtk)", type: "Isometrik Peroneus" },
            cue: "Dorong sisi luar telapak kaki ke arah luar tanpa menggerakkan lutut."
          },
          {
            name: "Seated Towel Scrunches (Intrinsik Kaki)",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "towel scrunches foot intrinsic exercise ankle",
            fitt: { f: "2x / hari", i: "RPE 4 (Daya tahan otot kaki)", t: "3 set × 15 rep", type: "Penguatan Intrinsik Kaki" },
            cue: "Remas handuk menggunakan jari-jari kaki sambil menjaga tumit tetap menempel di lantai."
          },
          {
            name: "Weight-Shifting Standing (2 Kaki)",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "weight shifting exercise ankle sprain rehab",
            fitt: { f: "2–3x / hari", i: "RPE 3–4 (Toleransi beban)", t: "3 set × 10 rep / arah", type: "Pembebanan Bertahap" },
            cue: "Pindahkan berat badan ke sisi cedera secara perlahan dan terkontrol."
          }
        ]
      },
      {
        phase: "Fase 2: Mobilitas Dorsifleksi & Penguatan Dasar (Minggu 2–3)",
        goal: "Memulihkan mobilitas dorsifleksi penuh dan memperkuat otot peroneus serta betis.",
        exercises: [
          {
            name: "Knee-to-Wall Dorsiflexion Mobilization",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "knee to wall ankle dorsiflexion mobility",
            fitt: { f: "2–3x / hari", i: "RPE 4 (Regangan kapsul posterior)", t: "3 set × 12 rep (tahan 3 dtk)", type: "Mobilitas Dorsifleksi" },
            cue: "Sentuhkan lutut ke dinding tanpa mengangkat tumit dari lantai."
          },
          {
            name: "Resistance Band Eversion & Dorsiflexion",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "resistance band ankle eversion strengthening",
            fitt: { f: "1x / hari", i: "RPE 6 (Band sedang)", t: "3 set × 15 rep (tempo 2-1-3)", type: "Isotonik Peroneus" },
            cue: "Tarik sisi luar kaki ke arah luar dan atas, kembalikan perlahan selama 3 detik."
          },
          {
            name: "Double-Leg Heel Raises (Lantai)",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "calf raises ankle sprain physical therapy",
            fitt: { f: "3–4x / minggu", i: "RPE 6 (Berat badan)", t: "3 set × 15 rep (tempo 2-1-2)", type: "Isotonik Gastrocnemius" },
            cue: "Tekan pangkal ibu jari kaki agar pergelangan kaki tidak terguling ke luar saat berjinjit."
          },
          {
            name: "Single-Leg Stance (Mata Terbuka → Tertutup)",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg balance eyes closed ankle proprioception",
            fitt: { f: "1x / hari", i: "RPE 5–6 (Neuromuskular)", t: "4 set × 30 dtk / sisi", type: "Proprioseptif Statis" },
            cue: "Jaga tripod kaki (tumit, pangkal ibu jari, pangkal kelingking) tetap menapak rata."
          }
        ]
      },
      {
        phase: "Fase 3: Propriosepsi Lanjut & Kekuatan Unilateral (Minggu 4–6)",
        goal: "Meningkatkan stabilitas dinamis pada permukaan tidak rata dan kekuatan betis satu kaki.",
        exercises: [
          {
            name: "Single-Leg Heel Raises (Tepi Anak Tangga)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg calf raise deficit ankle strength",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (Berat badan)", t: "3 set × 12 rep / sisi", type: "Isotonik Rentang Penuh" },
            cue: "Turunkan tumit sedikit di bawah anak tangga lalu dorong naik penuh."
          },
          {
            name: "Wobble Board / Bosu Balance Perturbation",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "wobble board ankle balance exercises",
            fitt: { f: "4x / minggu", i: "RPE 7 (Permukaan labil)", t: "3 set × 45 dtk / sisi", type: "Proprioseptif Dinamis" },
            cue: "Kontrol kemiringan papan keseimbangan agar tepinya tidak menyentuh lantai."
          },
          {
            name: "Y-Balance / Clock Reach Single-Leg",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "y balance ankle rehab exercise",
            fitt: { f: "3x / minggu", i: "RPE 7 (Kontrol multi-arah)", t: "3 set × 5 putaran / sisi", type: "Stabilitas Dinamis" },
            cue: "Jangkau sejauh mungkin ke depan, posteromedial, dan posterolateral."
          },
          {
            name: "Lateral Band Walk dengan Forefoot Bias",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral band walk ankle peroneal strength",
            fitt: { f: "3x / minggu", i: "RPE 7 (Band di telapak depan)", t: "3 set × 12 langkah / arah", type: "Penguatan Peroneus & Hip" },
            cue: "Pasang mini-band di sekitar telapak kaki depan untuk mengaktifkan eversi."
          }
        ]
      },
      {
        phase: "Fase 4: Pliometrik & Return to Sport (Minggu 7+)",
        goal: "Kesiapan lompatan multi-arah, sprint, dan pencegahan cedera berulang.",
        exercises: [
          {
            name: "Single-Leg Hop & Stick (4 Arah)",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg 4 way hop ankle stability",
            fitt: { f: "2–3x / minggu", i: "RPE 8 (Daya ledak terkontrol)", t: "3 set × 4 arah / sisi", type: "Pliometrik Multi-Arah" },
            cue: "Mendarat dengan pergelangan kaki kaku-elastis tanpa goyangan inversi."
          },
          {
            name: "Lateral Zig-Zag Hops",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral zig zag hops ankle return to sport",
            fitt: { f: "2x / minggu", i: "RPE 8 (Kontak cepat)", t: "4 set × 8 lompatan", type: "Reaktivitas Tendon & Ligamen" },
            cue: "Lompat menyamping melewati garis dengan ritme cepat dan stabil."
          },
          {
            name: "Carioca / Grapevine Agility Drill",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "carioca agility drill ankle rehab",
            fitt: { f: "2x / minggu", i: "RPE 7–8 (85% kecepatan)", t: "4 set × 15 meter / arah", type: "Agilitas Rotasional" },
            cue: "Gerakkan kaki lincah menyilang depan dan belakang dengan koordinasi panggul."
          },
          {
            name: "Sport-Specific Cutting & Deceleration",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "cutting and deceleration drills ankle rehab",
            fitt: { f: "2x / minggu", i: "RPE 9 (Kecepatan pertandingan)", t: "4 set × 4 rep / sisi", type: "Simulasi Olahraga" },
            cue: "Gunakan ankle taping/brace profilaksis saat awal kembali ke latihan tim."
          }
        ]
      }
    ]
  },
  {
    id: "achilles-tendinopathy",
    name: "Achilles Tendinopathy (Tendinopati Achilles)",
    englishName: "Mid-Portion / Insertional Achilles Tendinopathy",
    region: "lower",
    regionLabel: "Tendon Achilles & Betis",
    badge: "Beban Tendon & HSR",
    overview: "Nyeri dan kekakuan pada tendon Achilles akibat beban mekanis berulang yang melampaui kapasitas adaptasi tendon.",
    grades: [
      { grade: "Fase Reaktif", desc: "Penebalan tendon akut akibat lonjakan volume latihan mendadak; nyeri saat mulai bergerak." },
      { grade: "Fase Tendon Disrepair", desc: "Disorganisasi matriks kolagen dan peningkatan vaskularisasi ringan." },
      { grade: "Fase Degeneratif", desc: "Perubahan struktural kronis dengan kelemahan daya ledak plantarflexor." }
    ],
    principles: [
      { title: "Tidak Ada Istirahat Total (Load Management)", detail: "Tendon membutuhkan stimulus mekanis terukur untuk merangsang sintesis kolagen; istirahat total justru menurunkan kapasitas tendon." },
      { title: "Heavy Slow Resistance (HSR) & Alfredson Protocol", detail: "Pembebanan lambat berintensitas tinggi meremodeling matriks kolagen secara lebih efektif daripada peregangan pasif." },
      { title: "Aturan Nyeri 24 Jam (VAS ≤ 3/10)", detail: "Nyeri ringan saat latihan diizinkan asalkan tidak memburuk pada pagi hari berikutnya." }
    ],
    phases: [
      {
        phase: "Fase 1: Analgesia Isometrik & Modifikasi Beban (Minggu 1–2)",
        goal: "Menurunkan iritabilitas tendon dan mempertahankan aktivasi gastrocnemius-soleus.",
        exercises: [
          {
            name: "Standing Isometric Heel Raise Hold (2 Kaki)",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "isometric heel raise hold achilles tendinopathy",
            fitt: { f: "2x / hari", i: "RPE 6–7 (Tahanan tengah)", t: "5 set × 45 dtk (istirahat 2 mnt)", type: "Isometrik Analgetik" },
            cue: "Angkat tumit 3–4 cm dari lantai dan tahan diam tanpa gemetar berlebihan."
          },
          {
            name: "Seated Isometric Soleus Hold (Lutut 90°)",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "seated soleus isometric exercise achilles",
            fitt: { f: "2x / hari", i: "RPE 6 (Beban di atas lutut)", t: "4 set × 45 dtk (istirahat 90 dtk)", type: "Isometrik Soleus" },
            cue: "Tekan pangkal jari kaki ke lantai dengan lutut tertekuk 90° untuk menargetkan soleus."
          },
          {
            name: "Gentle Ankle Dorsiflexion-Plantarflexion",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "gentle ankle pumps achilles morning stiffness",
            fitt: { f: "Setiap pagi", i: "RPE 2 (Sebelum turun tempat tidur)", t: "2 set × 20 rep", type: "Mobilitas Pagi" },
            cue: "Lakukan sebelum langkah pertama di pagi hari untuk mengurangi kekakuan tendon."
          },
          {
            name: "Glute Bridge (Menjaga Rantai Posterior)",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "glute bridge exercise achilles rehab",
            fitt: { f: "3x / minggu", i: "RPE 6 (Berat badan)", t: "3 set × 15 rep", type: "Penguatan Proksimal" },
            cue: "Pertahankan kekuatan panggul saat volume lari dikurangi sementara."
          }
        ]
      },
      {
        phase: "Fase 2: Heavy Slow Resistance (HSR) Dasar (Minggu 3–6)",
        goal: "Meningkatkan kekakuan mekanis tendon dan kekuatan otot betis secara bertahap.",
        exercises: [
          {
            name: "Slow Double-Leg Heel Raises (Lantai Datar)",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "heavy slow resistance calf raise achilles",
            fitt: { f: "3x / minggu (selang 1 hari)", i: "RPE 7 (Beban tubuh / ransel)", t: "4 set × 12 rep (3 dtk naik, 3 dtk turun)", type: "HSR Gastrocnemius" },
            cue: "Gunakan lantai datar (tanpa defisit tangga) jika nyeri berada di insersi tumit."
          },
          {
            name: "Seated Calf Raise (Soleus HSR)",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "seated calf raise soleus strength achilles",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (75% 1RM)", t: "4 set × 10–12 rep (tempo 3-1-3)", type: "HSR Soleus" },
            cue: "Turunkan tumit perlahan selama 3 detik dan dorong penuh ke atas."
          },
          {
            name: "Eccentric Heel Drop (Alfredson — Mid-Portion)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "alfredson protocol eccentric heel drop achilles",
            fitt: { f: "1–2x / hari", i: "RPE 7 (VAS ≤ 3/10)", t: "3 set × 15 rep (turun 3–4 dtk)", type: "Eksentrik Tendon" },
            cue: "Naik menggunakan dua kaki, turunkan tumit dengan satu kaki cedera secara lambat."
          },
          {
            name: "Spanish Squat / Wall Sit",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "wall sit lower body strength runner",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Isometrik paha)", t: "3 set × 45 dtk", type: "Daya Tahan Rantai Bawah" },
            cue: "Jaga tulang kering tegak lurus lantai dan dorong punggung ke dinding."
          }
        ]
      },
      {
        phase: "Fase 3: Kekuatan Berat Unilateral & Energy Storage (Minggu 7–11)",
        goal: "Membangun kapasitas beban tinggi satu tungkai dan memulai siklus regang-pendek (SSC) ringan.",
        exercises: [
          {
            name: "Single-Leg Weighted Calf Raise",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg weighted calf raise achilles rehab",
            fitt: { f: "3x / minggu", i: "RPE 8 (Dumbbell / Smith machine)", t: "4 set × 8 rep / sisi (tempo 3-1-3)", type: "HSR Unilateral" },
            cue: "Targetkan beban tambahan 15–25% berat badan secara progresif."
          },
          {
            name: "Bent-Knee Single-Leg Calf Raise",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "bent knee single leg calf raise soleus",
            fitt: { f: "3x / minggu", i: "RPE 8 (Lutut fleksi 25°)", t: "3 set × 10 rep / sisi", type: "HSR Soleus Unilateral" },
            cue: "Pertahankan sudut tekukan lutut tetap sepanjang gerakan naik dan turun."
          },
          {
            name: "Two-Leg Pogo Hops (Low Amplitude)",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "low amplitude pogo jumps achilles energy storage",
            fitt: { f: "2x / minggu", i: "RPE 6–7 (Kontak cepat)", t: "3 set × 20 lompatan (istirahat 90 dtk)", type: "Energy Storage Ringan" },
            cue: "Lompat rendah seperti memantul di atas pegas tanpa membiarkan tumit menyentuh lantai keras."
          },
          {
            name: "Skipping A-Skip Drill",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "a skip running drill achilles tendon rehab",
            fitt: { f: "2x / minggu", i: "RPE 6 (Ritmis)", t: "3 set × 20 meter", type: "Koordinasi Lari" },
            cue: "Mendarat di telapak kaki bagian tengah-depan dengan postur tegak."
          }
        ]
      },
      {
        phase: "Fase 4: Energy Storage & Release / Return to Run (Minggu 12+)",
        goal: "Kapasitas pliometrik penuh, lari interval, dan sprint tanpa kekakuan pagi hari.",
        exercises: [
          {
            name: "Single-Leg Pogo Hops",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg pogo hops achilles return to sport",
            fitt: { f: "2x / minggu", i: "RPE 8 (Elastisitas tinggi)", t: "3 set × 12 rep / tungkai", type: "Pliometrik Unilateral" },
            cue: "Jaga waktu kontak tanah <250 milidetik dan ritme pantulan konsisten."
          },
          {
            name: "Bounding / Alternating Single-Leg Bounds",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "running bounds plyometric achilles rehab",
            fitt: { f: "2x / minggu", i: "RPE 8–9 (Daya dorong horizontal)", t: "4 set × 20 meter", type: "Pliometrik Lari" },
            cue: "Dorong kuat dari pergelangan kaki ke depan dengan ayunan lengan aktif."
          },
          {
            name: "Drop Jump (Box 20–30 cm)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "drop jump reactive strength index achilles",
            fitt: { f: "2x / minggu", i: "RPE 8 (Reaktif cepat)", t: "3 set × 6 rep", type: "Reactive Strength" },
            cue: "Melangkah turun dari boks dan langsung memantul vertikal setinggi mungkin."
          },
          {
            name: "Progressive Return-to-Run Program",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "return to running progression achilles tendinopathy",
            fitt: { f: "3x / minggu (selang 1 hari)", i: "RPE 6–7 (Kecepatan mudah)", t: "20–30 menit interval", type: "Beban Lari Bertahap" },
            cue: "Hindari lari menanjak dan sprint pada 2 minggu pertama kembali berlari."
          }
        ]
      }
    ]
  },
  {
    id: "hamstring-strain",
    name: "Hamstring Strain (Robekan Otot Hamstring)",
    englishName: "Acute Hamstring Muscle Strain",
    region: "lower",
    regionLabel: "Paha Belakang",
    badge: "Eksentrik Panjang Otot",
    overview: "Cedera serabut otot biceps femoris, semitendinosus, atau semimembranosus saat fase akhir ayunan sprint (late swing) atau peregangan ekstrem.",
    grades: [
      { grade: "Derajat I", desc: "Robekan mikro serabut otot (<10%), rasa kencang di paha belakang tanpa kehilangan kekuatan nyata." },
      { grade: "Derajat II", desc: "Robekan parsial serabut otot dengan nyeri tajam saat berjalan cepat atau menekuk lutut melawan tahanan." },
      { grade: "Derajat III", desc: "Ruptur total otot/tendon proksimal dengan hematoma dan defisit kekuatan berat." }
    ],
    principles: [
      { title: "Pembebanan Eksentrik pada Panjang Otot Maksimal", detail: "Latihan seperti Extender dan Diver menstimulasi sarkomer secara longitudinal untuk mencegah cedera berulang." },
      { title: "Kontrol Pelvik Anterior Tilt", detail: "Stabilitas lumbopelvik mencegah tarikan berlebih pada origo hamstring di tuber ischiadicum." },
      { title: "Eksposur Sprint Bertahap (>95% Kecepatan)", detail: "Atlet tidak siap bertanding sebelum menyelesaikan progresi lari kecepatan tinggi tanpa rasa menarik." }
    ],
    phases: [
      {
        phase: "Fase 1: Proteksi & Isometrik Sudut Aman (Hari 1–7)",
        goal: "Mengendalikan nyeri akut, mencegah atrofi, dan memulihkan pola jalan normal.",
        exercises: [
          {
            name: "Supine Heel Dig Isometric (Lutut 30° & 60°)",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "heel dig isometric hamstring strain rehab",
            fitt: { f: "2–3x / hari", i: "RPE 4–5 (VAS ≤ 3/10)", t: "4 set × 8 rep (tahan 6 dtk)", type: "Isometrik Hamstring" },
            cue: "Tekan tumit ke lantai seolah ingin menariknya ke arah bokong tanpa menggeser kaki."
          },
          {
            name: "Active Knee Extension (Supine 90/90)",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "supine active knee extension hamstring mobility",
            fitt: { f: "2x / hari", i: "RPE 3 (Batas rasa regang ringan)", t: "3 set × 12 rep", type: "Mobilitas Dinamis" },
            cue: "Pegang paha pada sudut 90° lalu luruskan lutut hingga batas nyaman sebelum nyeri."
          },
          {
            name: "Glute Bridge (Kaki Dekat Bokong)",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "glute bridge hamstring strain phase 1",
            fitt: { f: "1–2x / hari", i: "RPE 4–5 (Dominan gluteus)", t: "3 set × 12 rep", type: "Aktivasi Gluteus" },
            cue: "Letakkan tumit dekat bokong agar beban lebih banyak ditopang otot gluteus."
          },
          {
            name: "Dead Bug Core Stabilization",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "dead bug exercise pelvic stability hamstring",
            fitt: { f: "1x / hari", i: "RPE 5 (Kontrol lumbopelvik)", t: "3 set × 10 rep / sisi", type: "Stabilitas Core" },
            cue: "Tempelkan punggung bawah ke matras saat meluruskan lengan dan tungkai berlawanan."
          }
        ]
      },
      {
        phase: "Fase 2: Penguatan Isotonik & Panjang Otot Menengah (Minggu 2–3)",
        goal: "Meningkatkan toleransi beban pada sudut fleksi panggul dan lutut yang lebih luas.",
        exercises: [
          {
            name: "The Extender (Askling L-Protocol)",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "askling l protocol the extender hamstring",
            fitt: { f: "1x / hari", i: "RPE 6 (Kontrol panjang otot)", t: "3 set × 12 rep / tungkai", type: "Eksentrik Panjang Otot" },
            cue: "Pegang paha ke arah dada lalu luruskan lutut perlahan hingga mencapai regangan terkontrol."
          },
          {
            name: "Long-Lever Glute Bridge (Tumit Jauh)",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "long lever glute bridge hamstring rehab",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Fleksi lutut 30°)", t: "3 set × 10 rep (tahan 3 dtk)", type: "Isotonik / Isometrik Panjang" },
            cue: "Majukan tumit ke depan sehingga sudut lutut ~30° untuk menantang hamstring."
          },
          {
            name: "Romanian Deadlift (RDL) Ringan",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "romanian deadlift hamstring rehab progression",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Dumbbell ringan)", t: "3 set × 10 rep (tempo 3-1-1)", type: "Eksentrik Hip-Dominant" },
            cue: "Jaga punggung netral, dorong panggul ke belakang hingga terasa tarikan lembut."
          },
          {
            name: "Slider Eccentric Hamstring Curl (2 Kaki)",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "eccentric hamstring slider curl physical therapy",
            fitt: { f: "3x / minggu", i: "RPE 7 (3 detik turun)", t: "3 set × 8–10 rep", type: "Eksentrik Knee-Dominant" },
            cue: "Angkat panggul lalu luruskan kedua tumit perlahan selama 3 detik."
          }
        ]
      },
      {
        phase: "Fase 3: Eksentrik Berat & Dinamis (Minggu 4–6)",
        goal: "Membangun kekuatan eksentrik tinggi dan memulai lari progresif.",
        exercises: [
          {
            name: "The Diver (Askling L-Protocol)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "askling l protocol the diver hamstring",
            fitt: { f: "3x / minggu", i: "RPE 7 (Kontrol dinamis)", t: "3 set × 6 rep / sisi (lambat)", type: "Eksentrik & Keseimbangan" },
            cue: "Condongkan tubuh ke depan dengan satu tungkai sementara tungkai belakang terangkat sejajar."
          },
          {
            name: "Nordic Hamstring Lowering",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "nordic hamstring curl exercise proper form",
            fitt: { f: "2x / minggu", i: "RPE 8 (Eksentrik maksimal)", t: "3 set × 5–6 rep (turun 4 dtk)", type: "Eksentrik Supramaksimal" },
            cue: "Tahan tubuh turun selambat mungkin menggunakan hamstring sebelum menopang dengan tangan."
          },
          {
            name: "Single-Leg RDL dengan Kettlebell",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg kettlebell rdl hamstring strength",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (Beban sedang)", t: "3 set × 8 rep / sisi", type: "Kekuatan Unilateral" },
            cue: "Pertahankan panggul sejajar lantai dan dorong kuat melalui tumit saat kembali tegak."
          },
          {
            name: "The Glider (Askling L-Protocol)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "askling l protocol the glider hamstring",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (Kontrol split)", t: "3 set × 4 rep / sisi", type: "Eksentrik Kecepatan Sedang" },
            cue: "Geser kaki belakang di atas slider sambil menjaga berat badan pada tumit depan."
          }
        ]
      },
      {
        phase: "Fase 4: Sprint Progression & Return to Sport (Minggu 7+)",
        goal: "Eksposur kecepatan lari >95% dan deselerasi eksplosif tanpa nyeri.",
        exercises: [
          {
            name: "Build-Up Sprints (60% → 80% → 95%)",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "hamstring return to sprinting progression",
            fitt: { f: "2–3x / minggu", i: "RPE 8–9 (Bertahap)", t: "6 set × 40–60 meter (istirahat 2 mnt)", type: "Akselerasi & Kecepatan Puncak" },
            cue: "Gunakan jarak akselerasi 20m dan deselerasi 20m agar tidak mengerem mendadak."
          },
          {
            name: "B-Skip & Pawback Sprint Drills",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "b skip sprint mechanics hamstring rehab",
            fitt: { f: "2x / minggu", i: "RPE 7 (Mekanika late swing)", t: "3 set × 20 meter", type: "Neuromuskular Sprint" },
            cue: "Ekstensikan tungkai ke depan lalu tarik aktif ke bawah menyapu tanah."
          },
          {
            name: "Single-Leg Switch on Box (Fast Eccentric)",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "single leg hamstring switch drill plyometric",
            fitt: { f: "2x / minggu", i: "RPE 8 (Kecepatan kontraksi)", t: "3 set × 8 rep / sisi", type: "Pliometrik Hamstring" },
            cue: "Ganti kaki tumpu di atas boks rendah dengan gerakan cepat dan reaktif."
          },
          {
            name: "Curved Sprint & Multi-Directional Agility",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "curved sprint agility drill sports rehab",
            fitt: { f: "2x / minggu", i: "RPE 9 (Simulasi laga)", t: "4 set × 30 meter", type: "Spesifik Olahraga" },
            cue: "Lakukan sprint melengkung dan pengambilan bola rendah secara bertahap."
          }
        ]
      }
    ]
  },
  {
    id: "adductor-strain",
    name: "Adductor / Groin Strain (Cedera Otot Pangkal Paha)",
    englishName: "Adductor-Related Groin Pain / Strain",
    region: "lower",
    regionLabel: "Lipat Paha & Panggul",
    badge: "Protokol Holmich & Copenhagen",
    overview: "Cedera pada kompleks otot adduktor (terutama adductor longus) akibat gerakan menendang, perubahan arah cepat, atau split.",
    grades: [
      { grade: "Derajat I", desc: "Nyeri lokal di origo adductor longus saat adduksi melawan tahanan tanpa kelemahan." },
      { grade: "Derajat II", desc: "Robekan parsial dengan nyeri saat berlari menyamping dan kelemahan adduksi." },
      { grade: "Derajat III", desc: "Avulsi tendon atau ruptur luas dengan nyeri berat saat menumpu." }
    ],
    principles: [
      { title: "Progresi Beban Adduktor Bertahap (Copenhagen Protocol)", detail: "Dimulai dari isometrik ringan hingga Copenhagen plank tuas panjang untuk membangun kekuatan eksentrik." },
      { title: "Sinergi Core & Oblique Abdominal", detail: "Otot perut bagian bawah menstabilkan simfisis pubis sehingga mengurangi tarikan pada tendon adduktor." },
      { title: "Keseimbangan Abduktor vs Adduktor (>80%)", detail: "Rasio kekuatan adduktor terhadap abduktor harus dipulihkan minimal 80% sebelum kembali bertanding." }
    ],
    phases: [
      {
        phase: "Fase 1: Isometrik Analgetik & Core Dasar (Hari 1–7)",
        goal: "Menurunkan nyeri lipat paha saat kontraksi dan mengaktifkan stabilisator panggul.",
        exercises: [
          {
            name: "Supine Ball Squeeze (Lutut 90° & 0°)",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "isometric adductor squeeze groin strain rehab",
            fitt: { f: "3x / hari", i: "RPE 4–5 (VAS ≤ 3/10)", t: "4 set × 8 rep (tahan 8 dtk)", type: "Isometrik Adduktor" },
            cue: "Tekan bola di antara kedua lutut secara bertahap dan rilekskan perlahan."
          },
          {
            name: "Pelvic Curl / Glute Bridge",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "glute bridge pelvic stability groin pain",
            fitt: { f: "2x / hari", i: "RPE 5 (Kontrol panggul)", t: "3 set × 12 rep", type: "Stabilitas Pelvis" },
            cue: "Angkat panggul sejajar tanpa membiarkan kedua lutut melebar keluar."
          },
          {
            name: "Low-Amplitude Alternating Dead Bug",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "dead bug exercise groin rehab core",
            fitt: { f: "1–2x / hari", i: "RPE 5 (Stabilisasi pubis)", t: "3 set × 10 rep / sisi", type: "Core Abdominal" },
            cue: "Kunci panggul netral di matras agar simfisis pubis tidak bergeser."
          },
          {
            name: "Gentle Hip Pendulum / Circumduction",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "gentle hip mobility pendulum exercise",
            fitt: { f: "2x / hari", i: "RPE 2 (Relaksasi sendi)", t: "2 set × 15 lingkaran / arah", type: "Mobilitas Bebas Nyeri" },
            cue: "Ayunkan tungkai ringan sambil berpegangan pada dinding."
          }
        ]
      },
      {
        phase: "Fase 2: Penguatan Isotonik & Tuas Pendek (Minggu 2–3)",
        goal: "Membangun kekuatan konsentrik dan eksentrik adduktor pada rentang gerak menengah.",
        exercises: [
          {
            name: "Side-Lying Hip Adduction",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "side lying hip adduction groin strain rehab",
            fitt: { f: "3–4x / minggu", i: "RPE 6 (Berat tungkai)", t: "3 set × 12 rep / sisi (tempo 2-1-3)", type: "Isotonik Adduktor" },
            cue: "Silangkan kaki atas ke depan, angkat kaki bawah lurus ke arah langit-langit."
          },
          {
            name: "Short-Lever Copenhagen Plank (Lutut di Bangku)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "short lever copenhagen plank progression",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (VAS ≤ 3/10)", t: "3 set × 15–20 dtk / sisi", type: "Isometrik Tuas Pendek" },
            cue: "Letakkan lutut kaki atas di bangku rendah dan angkat panggul lurus."
          },
          {
            name: "Standing Cable / Band Hip Adduction",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "standing resistance band hip adduction",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Band sedang)", t: "3 set × 12 rep / sisi", type: "Isotonik Berdiri" },
            cue: "Tarik kaki melintasi garis tengah tubuh lalu kembalikan perlahan selama 3 detik."
          },
          {
            name: "Goblet Squat Stance Sedang",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "goblet squat groin rehab exercise",
            fitt: { f: "3x / minggu", i: "RPE 6 (Beban ringan)", t: "3 set × 10 rep", type: "Penguatan Rantai Tertutup" },
            cue: "Jaga lutut sejajar jari kaki dan kontrol kedalaman jongkok."
          }
        ]
      },
      {
        phase: "Fase 3: Penguatan Tuas Panjang & Eksentrik (Minggu 4–6)",
        goal: "Mencapai kekuatan adduktor >85% dan toleransi beban menyamping lebar.",
        exercises: [
          {
            name: "Long-Lever Copenhagen Adduction (Dinamis)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "copenhagen adduction exercise dynamic full lever",
            fitt: { f: "2–3x / minggu", i: "RPE 8 (Eksentrik tinggi)", t: "3 set × 6–8 rep / sisi (3 dtk turun)", type: "Eksentrik Tuas Panjang" },
            cue: "Topang pergelangan kaki atas di bangku, turunkan dan angkat panggul secara terkontrol."
          },
          {
            name: "Lateral Cossack Squat / Side Lunge",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "side lunge adductor eccentric strengthening",
            fitt: { f: "3x / minggu", i: "RPE 7 (Panjang otot maksimal)", t: "3 set × 8 rep / sisi", type: "Eksentrik Panjang Otot" },
            cue: "Melangkah lebar ke samping, rasakan regangan terkontrol pada kaki yang lurus."
          },
          {
            name: "Slider Lateral Split Pull-In",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "sliding lateral lunge adductor pull in",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (Kontrol penuh)", t: "3 set × 8 rep / sisi", type: "Eksentrik-Konsentrik" },
            cue: "Geser kaki ke samping menggunakan slider lalu tarik kembali ke tengah."
          },
          {
            name: "Oblique Side Plank dengan Hip Flexion",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "side plank with hip flexion core groin",
            fitt: { f: "3x / minggu", i: "RPE 7 (Stabilitas core)", t: "3 set × 10 rep / sisi", type: "Core & Panggul" },
            cue: "Tahan posisi side plank sambil mengangkat lutut bawah ke arah dada."
          }
        ]
      },
      {
        phase: "Fase 4: Menendang, Cutting & Return to Sport (Minggu 7+)",
        goal: "Kesiapan menendang bola kecepatan penuh, slide tackle, dan sprint zig-zag.",
        exercises: [
          {
            name: "Band-Resisted Kicking Motion",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "resistance band soccer kicking motion rehab",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (Kecepatan progresif)", t: "3 set × 10 ayunan / sisi", type: "Spesifik Tendangan" },
            cue: "Latih fase backswing dan follow-through menendang melawan tahanan band."
          },
          {
            name: "Lateral Skater Bounds",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "lateral skater bounds groin return to sport",
            fitt: { f: "2x / minggu", i: "RPE 8 (Daya ledak lateral)", t: "4 set × 6 rep / sisi", type: "Pliometrik Frontal" },
            cue: "Tolak kuat ke samping dan serap pendaratan pada satu tungkai."
          },
          {
            name: "90° Sharp Cutting & Re-Acceleration",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "90 degree cutting drill groin rehab",
            fitt: { f: "2x / minggu", i: "RPE 9 (85–95% usaha)", t: "4 set × 4 rep / arah", type: "Agilitas Kecepatan Tinggi" },
            cue: "Mulai dengan intensitas 75% dan naikkan hingga 100% bila bebas nyeri."
          },
          {
            name: "Progressive Ball Passing & Shooting",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "return to kicking progression groin strain",
            fitt: { f: "3x / minggu", i: "RPE 7–9 (Jarak bertahap)", t: "20–30 tendangan bertahap", type: "Keterampilan Lapangan" },
            cue: "Mulai dari umpan pendek 10m sebelum melakukan umpan panjang atau tembakan keras."
          }
        ]
      }
    ]
  },
  {
    id: "lumbar-strain",
    name: "Lumbar Strain (Cedera Otot Punggung Bawah)",
    englishName: "Acute Lumbar Muscle / Ligament Strain",
    region: "spine",
    regionLabel: "Tulang Belakang Lumbal",
    badge: "Stabilitas Core McGill",
    overview: "Peregangan atau robekan mikro pada otot paraspinal lumbal (erector spinae, multifidus) atau ligamen interspinosus akibat gerakan mengangkat atau rotasi eksplosif.",
    grades: [
      { grade: "Derajat I", desc: "Spasme otot lokal ringan tanpa keterbatasan gerak bermakna atau penjalaran nyeri ke tungkai." },
      { grade: "Derajat II", desc: "Robekan parsial serabut otot paraspinal dengan nyeri tajam saat fleksi/ekstensi batang tubuh." },
      { grade: "Derajat III", desc: "Robekan luas dengan spasme protektif berat dan kesulitan berdiri tegak." }
    ],
    principles: [
      { title: "Spine-Sparing Motor Control (McGill Big 3)", detail: "Membangun kekakuan (stiffness) inti yang protektif tanpa beban fleksi-rotasi berulang pada tulang belakang." },
      { title: "Hip-Hinge Dissociation", detail: "Mengajarkan gerakan membungkuk dari sendi panggul (hip hinge), bukan melengkungkan segmen lumbal." },
      { title: "Gradual Load Tolerance", detail: "Mengembalikan toleransi beban aksial dan rotasional secara bertahap menuju gerakan olahraga." }
    ],
    phases: [
      {
        phase: "Fase 1: De-loading & Aktivasi Stabilisator Dalam (Hari 1–7)",
        goal: "Meredakan spasme otot paraspinal dan mengaktifkan transversus abdominis serta multifidus.",
        exercises: [
          {
            name: "90/90 Psoas Relief & Diaphragmatic Breathing",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "90 90 breathing low back pain relief",
            fitt: { f: "3x / hari", i: "RPE 2 (Relaksasi spasme)", t: "3 set × 8 napas dalam", type: "De-loading & Pernapasan" },
            cue: "Letakkan betis di atas kursi, tarik napas ke perut bawah untuk merilekskan punggung."
          },
          {
            name: "Cat-Camel Gentle Spinal Mobility",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "cat camel exercise mcgill low back pain",
            fitt: { f: "2–3x / hari", i: "RPE 2–3 (Tanpa memaksa ujung)", t: "2 set × 10 siklus lambat", type: "Mobilitas Tanpa Beban" },
            cue: "Gerakkan tulang belakang perlahan untuk melumasi sendi faset tanpa menekan batas akhir."
          },
          {
            name: "Abdominal Bracing dengan Heel Taps",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "abdominal bracing heel taps low back rehab",
            fitt: { f: "2x / hari", i: "RPE 4 (VAS ≤ 2/10)", t: "3 set × 10 rep / sisi", type: "Stabilitas Core Dasar" },
            cue: "Kencangkan dinding perut 20–30% sambil menurunkan satu tumit menyentuh matras."
          },
          {
            name: "Supine Glute Bridge",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "glute bridge proper form low back pain",
            fitt: { f: "1–2x / hari", i: "RPE 5 (Ekstensi panggul)", t: "3 set × 12 rep (tahan 2 dtk)", type: "Penguatan Gluteus" },
            cue: "Angkat panggul menggunakan otot bokong tanpa melengkungkan punggung bawah."
          }
        ]
      },
      {
        phase: "Fase 2: Daya Tahan Core McGill Big 3 (Minggu 2–3)",
        goal: "Membangun ketahanan isometrik otot inti untuk melindungi tulang belakang.",
        exercises: [
          {
            name: "McGill Modified Curl-Up",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "mcgill curl up proper form low back",
            fitt: { f: "1x / hari", i: "RPE 6 (Tulang belakang netral)", t: "3 set × 6 rep (tahan 8–10 dtk)", type: "Isometrik Anterior Core" },
            cue: "Letakkan tangan di bawah lengkung lumbal, angkat kepala dan bahu hanya 2–3 cm."
          },
          {
            name: "Side Plank (Lutut / Kaki Lurus)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "mcgill side plank progression low back",
            fitt: { f: "1x / hari", i: "RPE 6–7 (Quadratus lumborum)", t: "3 set × 20–30 dtk / sisi", type: "Isometrik Lateral Core" },
            cue: "Jaga bahu, panggul, dan lutut/pergelangan kaki dalam satu garis lurus."
          },
          {
            name: "Bird-Dog (Kontrol Anti-Rotasi)",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "bird dog exercise mcgill form",
            fitt: { f: "1x / hari", i: "RPE 6 (Multifidus & glutes)", t: "3 set × 8 rep / sisi (tahan 6 dtk)", type: "Stabilitas Posterior" },
            cue: "Luruskan lengan dan kaki berlawanan sejajar lantai tanpa mengayun pinggul."
          },
          {
            name: "Dowel Hip-Hinge Drill",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "dowel hip hinge drill low back rehab",
            fitt: { f: "4x / minggu", i: "RPE 4 (Pola gerak)", t: "3 set × 12 rep", type: "Re-edukasi Pola Gerak" },
            cue: "Pertahankan tongkat menyentuh kepala, punggung atas, dan tulang ekor saat membungkuk."
          }
        ]
      },
      {
        phase: "Fase 3: Penguatan Fungsional & Anti-Rotasi (Minggu 4–6)",
        goal: "Meningkatkan kapasitas angkat beban dan ketahanan rotasional.",
        exercises: [
          {
            name: "Kettlebell Deadlift (Dari Blok)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "kettlebell deadlift from blocks low back rehab",
            fitt: { f: "3x / minggu", i: "RPE 7 (Beban sedang)", t: "3 set × 10 rep (tempo 2-1-2)", type: "Penguatan Hip-Hinge" },
            cue: "Kunci core sebelum mengangkat beban dan dorong lantai menjauh dengan kaki."
          },
          {
            name: "Suitcase Carry (Beban Satu Sisi)",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "suitcase carry exercise core stability",
            fitt: { f: "3x / minggu", i: "RPE 7 (Anti-lateral flexion)", t: "3 set × 25 meter / sisi", type: "Stabilitas Berjalan" },
            cue: "Berjalan tegak tanpa membiarkan tubuh miring ke sisi beban."
          },
          {
            name: "Half-Kneeling Pallof Press",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "half kneeling pallof press core rehab",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Band/kabel)", t: "3 set × 10 rep / sisi", type: "Anti-Rotasi" },
            cue: "Dorong pegangan lurus ke depan dada sambil mengencangkan otot bokong belakang."
          },
          {
            name: "Stir-the-Pot pada Swiss Ball",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "stir the pot exercise swiss ball mcgill",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (Core tingkat lanjut)", t: "3 set × 8 lingkaran / arah", type: "Stabilitas Dinamis" },
            cue: "Pertahankan posisi plank pada lengan bawah di bola sambil membuat lingkaran kecil."
          }
        ]
      },
      {
        phase: "Fase 4: Daya Ledak Rotasional & Return to Sport (Minggu 7+)",
        goal: "Kesiapan gerakan melempar, memukul, dan beban aksial eksplosif.",
        exercises: [
          {
            name: "Medicine Ball Rotational Slam / Wall Throw",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "medicine ball rotational wall throw core power",
            fitt: { f: "2x / minggu", i: "RPE 8 (Daya ledak terkontrol)", t: "3 set × 8 rep / sisi", type: "Pliometrik Rotasional" },
            cue: "Hasilkan tenaga dari rotasi panggul dan toraks, jaga lumbal tetap terkendali."
          },
          {
            name: "Trap Bar Deadlift",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "trap bar deadlift form lower back friendly",
            fitt: { f: "2x / minggu", i: "RPE 8 (75–80% 1RM)", t: "3 set × 6–8 rep", type: "Kekuatan Maksimal Aman" },
            cue: "Pusat beban sejajar garis tengah tubuh sehingga mengurangi gaya geser lumbal."
          },
          {
            name: "Farmer's Walk (Beban Bilateral)",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "farmers walk exercise spinal stability",
            fitt: { f: "2x / minggu", i: "RPE 8 (Beban berat)", t: "4 set × 30 meter", type: "Daya Tahan Beban Aksial" },
            cue: "Langkah pendek dan cepat dengan bahu ditarik ke belakang."
          },
          {
            name: "Sport-Specific Deceleration & Pick-Up",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "agility deceleration ground ball pickup drill",
            fitt: { f: "2x / minggu", i: "RPE 8–9 (Simulasi laga)", t: "4 set × 5 rep", type: "Transisi Lapangan" },
            cue: "Gunakan pola split-squat atau hip-hinge saat mengambil bola rendah di lapangan."
          }
        ]
      }
    ]
  },
  {
    id: "hnp-c1-l5",
    name: "HNP C1–L5 (Hernia Nukleus Pulposus Servikal & Lumbal)",
    englishName: "Cervical & Lumbar Disc Herniation (C1–L5)",
    region: "spine",
    regionLabel: "Servikal & Lumbal (C1–L5)",
    badge: "Sentralisasi McKenzie",
    overview: "Penonjolan nukleus pulposus diskus intervertebralis pada segmen servikal (C1–C7) atau lumbal (L1–L5) yang dapat mengiritasi akar saraf dan memicu nyeri menjalar.",
    grades: [
      { grade: "Derajat I (Bulging / Protrusion)", desc: "Penonjolan diskus lokal dengan anulus fibrosus masih utuh; gejala membaik dengan posisi ekstensi/netral." },
      { grade: "Derajat II (Extrusion)", desc: "Nukleus menembus anulus luar disertai radikulopati (nyeri menjalar ke lengan atau tungkai)." },
      { grade: "Derajat III (Sequestration)", desc: "Fragmen diskus terlepas ke kanal spinal; waspada red flags (kelemahan motorik progresif / cauda equina)." }
    ],
    principles: [
      { title: "Fenomena Sentralisasi (McKenzie Principle)", detail: "Pilih arah gerakan (umumnya ekstensi berulang atau retraksi servikal) yang menarik nyeri menjalar kembali ke garis tengah tulang belakang." },
      { title: "Hindari Fleksi + Rotasi Berbeban", detail: "Kombinasi membungkuk dan memutar meningkatkan tekanan intradiskal posterior secara signifikan." },
      { title: "Neurodinamika Lembut (Nerve Gliding)", detail: "Mobilisasi saraf medianus/ulnaris (servikal) atau ischiadicus (lumbal) dilakukan tanpa tarikan berlebihan (flossing, bukan stretching)." }
    ],
    phases: [
      {
        phase: "Fase 1: Sentralisasi Gejala & De-loading Diskus (Minggu 1–2)",
        goal: "Mengurangi iritasi akar saraf dan memusatkan nyeri dari ekstremitas ke garis tengah.",
        exercises: [
          {
            name: "Cervical Chin Tucks (Retraksi Servikal C1–C7)",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "chin tucks cervical disc herniation mckenzie",
            fitt: { f: "4–5x / hari", i: "RPE 3 (Sentralisasi gejala)", t: "3 set × 10 rep (tahan 3 dtk)", type: "Sentralisasi Servikal" },
            cue: "Tarik dagu lurus ke belakang seperti membuat double chin tanpa menundukkan kepala."
          },
          {
            name: "Prone Press-Up / Cobra (McKenzie Lumbal L1–L5)",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "mckenzie prone press up lumbar disc herniation",
            fitt: { f: "4–5x / hari", i: "RPE 3 (Panggul tetap di matras)", t: "3 set × 10 rep (tahan 2 dtk)", type: "Sentralisasi Lumbal" },
            cue: "Dorong bahu naik menggunakan tangan sambil membiarkan otot bokong dan punggung rileks."
          },
          {
            name: "Gentle Sciatic / Median Nerve Slider",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "sciatic nerve floss slider physical therapy",
            fitt: { f: "2x / hari", i: "RPE 2 (Tanpa memicu kesemutan)", t: "2 set × 10 rep lambat", type: "Neurodinamika" },
            cue: "Gerakkan sendi proksimal dan distal secara bergantian agar saraf bergeser mulus."
          },
          {
            name: "Supported Walking (Interval Pendek)",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "walking therapy lumbar disc herniation",
            fitt: { f: "3x / hari", i: "RPE 3–4 (Langkah ayun alami)", t: "10–15 menit / sesi", type: "Aerobik De-loading" },
            cue: "Berjalan dengan ayunan lengan alami untuk menjaga kurva lordosis lumbal dan servikal."
          }
        ]
      },
      {
        phase: "Fase 2: Stabilitas Segmen Netral C1–L5 (Minggu 3–5)",
        goal: "Mengaktifkan deep neck flexors dan stabilisator lumbopelvik dalam posisi netral.",
        exercises: [
          {
            name: "Deep Neck Flexor Activation (Supine)",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "deep neck flexor exercise craniocervical flexion",
            fitt: { f: "2x / hari", i: "RPE 4–5 (Kontrol halus)", t: "3 set × 8 rep (tahan 8 dtk)", type: "Stabilitas Servikal Dalam" },
            cue: "Angguk ringan dan angkat kepala 1 cm dari handuk tanpa mengencangkan otot leher depan luar."
          },
          {
            name: "Bird-Dog (Posisi Netral Terkendali)",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "bird dog exercise lumbar disc rehab",
            fitt: { f: "1x / hari", i: "RPE 5–6 (Tanpa ekstensi berlebih)", t: "3 set × 8 rep / sisi (tahan 5 dtk)", type: "Stabilitas Multifidus" },
            cue: "Jaga punggung tetap rata seperti meja saat meluruskan lengan dan tungkai."
          },
          {
            name: "Scapular Retraction dengan Resistance Band",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "band rows scapular retraction neck posture",
            fitt: { f: "3–4x / minggu", i: "RPE 6 (Band ringan–sedang)", t: "3 set × 15 rep (tahan 2 dtk)", type: "Postur Torakal-Servikal" },
            cue: "Tarik belikat ke belakang dan bawah untuk mengurangi beban kompresi pada C5–C7."
          },
          {
            name: "Modified Side Plank",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "modified side plank lumbar disc safe core",
            fitt: { f: "1x / hari", i: "RPE 6 (Anti-lateral shear)", t: "3 set × 20 dtk / sisi", type: "Stabilitas Core Lateral" },
            cue: "Pertahankan kurva alami punggung bawah sepanjang durasi tahanan."
          }
        ]
      },
      {
        phase: "Fase 3: Penguatan Fungsional & Postural (Minggu 6–9)",
        goal: "Meningkatkan toleransi beban aksial, mobilitas toraks, dan kekuatan ekstremitas tanpa gejala radikuler.",
        exercises: [
          {
            name: "Wall Angel dengan Chin Tuck",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "wall angels with chin tuck cervical thoracic",
            fitt: { f: "3–4x / minggu", i: "RPE 5–6 (Kontrol postural)", t: "3 set × 10 rep (tempo lambat)", type: "Mobilitas Toraks & Servikal" },
            cue: "Tempelkan kepala belakang, punggung atas, dan punggung tangan ke dinding."
          },
          {
            name: "Goblet Squat (Spine-Neutral)",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "goblet squat neutral spine disc herniation",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Beban di depan dada)", t: "3 set × 10 rep", type: "Penguatan Rantai Tertutup" },
            cue: "Beban di depan dada membantu menjaga batang tubuh tegak dan melindungi L4–L5."
          },
          {
            name: "Prone Y-T-W Scapular Strengthening",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "prone ytw exercise cervical thoracic stability",
            fitt: { f: "3x / minggu", i: "RPE 6 (Tanpa beban / 1 kg)", t: "3 set × 8 rep / huruf", type: "Daya Tahan Punggung Atas" },
            cue: "Pertahankan dahi bertumpu pada handuk gulung agar leher tetap netral."
          },
          {
            name: "Pallof Press Anti-Rotation",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "pallof press anti rotation disc herniation",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Stabilitas penuh)", t: "3 set × 10 rep / sisi", type: "Anti-Rotasi Lumbal" },
            cue: "Cegah puntiran pada segmen lumbal dengan mengencangkan core."
          }
        ]
      },
      {
        phase: "Fase 4: Kembali ke Aktivitas Atletik (Minggu 10+)",
        goal: "Toleransi impak, lari, dan aktivitas olahraga bebas nyeri menjalar maupun kesemutan.",
        exercises: [
          {
            name: "Farmer's Carry Postural",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "farmers carry posture cervical lumbar rehab",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (Beban sedang)", t: "3 set × 30 meter", type: "Integrasi C1–L5" },
            cue: "Jaga pandangan lurus ke depan (telinga sejajar bahu) saat membawa beban."
          },
          {
            name: "Split Squat dengan Dumbbell",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "split squat dumbbell spine neutral",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (Unilateral)", t: "3 set × 8 rep / sisi", type: "Kekuatan Ekstremitas Bawah" },
            cue: "Turun vertikal tanpa membungkukkan leher maupun punggung bawah."
          },
          {
            name: "Low-Impact Jogging / Elliptical Progression",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "return to jogging after disc herniation",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Permukaan rata)", t: "20–25 menit", type: "Kondisi Aerobik" },
            cue: "Hentikan segera jika muncul sensasi kesemutan atau nyeri menjalar ke lengan/kaki."
          },
          {
            name: "Landmine Press (Anti-Shear Overhead)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "half kneeling landmine press shoulder spine",
            fitt: { f: "2x / minggu", i: "RPE 7 (Sudut 45° aman)", t: "3 set × 8 rep / sisi", type: "Penguatan Bahu-Toraks" },
            cue: "Sudut dorongan diagonal mengurangi kompresi langsung pada servikal dan lumbal."
          }
        ]
      }
    ]
  },
  {
    id: "rotator-cuff",
    name: "Rotator Cuff Bahu (Cedera Manset Rotator)",
    englishName: "Rotator Cuff Tendinopathy / Strain",
    region: "upper",
    regionLabel: "Bahu & Ekstremitas Atas",
    badge: "Stabilitas Glenohumeral",
    overview: "Iritasi atau robekan parsial tendon supraspinatus, infraspinatus, teres minor, atau subscapularis akibat gerakan overhead berulang.",
    grades: [
      { grade: "Derajat I (Tendinopati Reaktif)", desc: "Nyeri busur (painful arc 60°–120°) saat mengangkat lengan tanpa kelemahan struktural." },
      { grade: "Derajat II (Robekan Parsial)", desc: "Robekan sisi bursal atau artikular (<50% ketebalan tendon) dengan nyeri malam hari." },
      { grade: "Derajat III (Robekan Penuh / Full-Thickness)", desc: "Diskontinuitas tendon penuh dengan kesulitan elevasi aktif (shrug sign positif)." }
    ],
    principles: [
      { title: "Depresi Kaput Humerus & Kontrol Skapula", detail: "Penguatan infraspinatus, subscapularis, serta lower/middle trapezius menjaga ruang subakromial tetap terbuka." },
      { title: "Latihan di Bidang Skapula (Scaption 30°)", detail: "Mengangkat lengan 30° ke depan bidang frontal menyelaraskan kaput humerus dengan fossa glenoid." },
      { title: "Progresi Isometrik → Isotonik → Overhead Plyometric", detail: "Kurangi nyeri tendon terlebih dahulu sebelum melatih kecepatan tinggi seperti melempar atau smash." }
    ],
    phases: [
      {
        phase: "Fase 1: Analgesia Isometrik & Mobilitas Ringan (Minggu 1–2)",
        goal: "Menurunkan nyeri subakromial dan memulihkan mobilitas pasif/aktif berbantu.",
        exercises: [
          {
            name: "Isometric External Rotation di Dinding",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "isometric shoulder external rotation wall",
            fitt: { f: "2–3x / hari", i: "RPE 4–5 (VAS ≤ 3/10)", t: "4 set × 30–45 dtk", type: "Isometrik Analgetik" },
            cue: "Tekuk siku 90° dengan handuk kecil di ketiak, dorong punggung tangan ke dinding."
          },
          {
            name: "Pendulum Codman Exercise",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "codman pendulum exercise rotator cuff",
            fitt: { f: "2–3x / hari", i: "RPE 2 (Dekompresi sendi)", t: "2 set × 45 dtk / arah", type: "Mobilitas Pasif" },
            cue: "Bungkukkan badan bertumpu pada tangan sehat dan biarkan lengan cedera berayun pasif."
          },
          {
            name: "Supine Cane-Assisted Shoulder Flexion",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "supine wand shoulder flexion rotator cuff",
            fitt: { f: "2x / hari", i: "RPE 3 (Batas nyaman)", t: "3 set × 10 rep (tahan 3 dtk)", type: "Mobilitas ROM Terbantu" },
            cue: "Gunakan lengan sehat mendorong tongkat ke atas perlahan."
          },
          {
            name: "Scapular Setting (Retraksi & Depresi)",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "scapular setting exercise shoulder physical therapy",
            fitt: { f: "2x / hari", i: "RPE 4 (Kontrol belikat)", t: "3 set × 12 rep (tahan 5 dtk)", type: "Aktivasi Skapula" },
            cue: "Tarik bahu sedikit ke belakang dan turunkan menjauh dari telinga tanpa menjepit keras."
          }
        ]
      },
      {
        phase: "Fase 2: Penguatan Rotator Cuff & Periskapular (Minggu 3–6)",
        goal: "Membangun kekuatan rotasi eksternal/internal dan stabilitas serratus anterior.",
        exercises: [
          {
            name: "Side-Lying External Rotation (Handuk Ketiak)",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "side lying shoulder external rotation towel roll",
            fitt: { f: "3–4x / minggu", i: "RPE 6–7 (Dumbbell 1–2 kg)", t: "3 set × 12–15 rep (tempo 2-1-3)", type: "Isotonik Infraspinatus" },
            cue: "Gulungan handuk di ketiak meningkatkan aliran darah tendon dan mencegah kompensasi deltoid."
          },
          {
            name: "Full-Can Scaption Raise (0°–90°)",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "full can scaption exercise rotator cuff",
            fitt: { f: "3x / minggu", i: "RPE 6 (Ibu jari mengarah ke atas)", t: "3 set × 12 rep", type: "Isotonik Supraspinatus" },
            cue: "Angkat lengan 30° ke depan bidang bahu setinggi bahu dengan ibu jari menunjuk ke atas."
          },
          {
            name: "Serratus Wall Slide dengan Foam Roller",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "serratus wall slide foam roller shoulder rehab",
            fitt: { f: "3x / minggu", i: "RPE 6 (Rotasi atas skapula)", t: "3 set × 10 rep (tempo 3-1-2)", type: "Stabilitas Skapula" },
            cue: "Dorong lengan bawah ke depan dinding sambil menggulirkan roller ke atas."
          },
          {
            name: "Band External Rotation at 0° Abduction",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "resistance band shoulder external rotation",
            fitt: { f: "3–4x / minggu", i: "RPE 6–7 (Band sedang)", t: "3 set × 15 rep", type: "Daya Tahan Rotator" },
            cue: "Jaga pergelangan tangan lurus dan siku menempel di sisi tubuh."
          }
        ]
      },
      {
        phase: "Fase 3: Penguatan Elevasi Tinggi & Rantai Kinetik (Minggu 7–10)",
        goal: "Memulihkan kontrol rotator cuff pada sudut abduksi 90° dan integrasi batang tubuh.",
        exercises: [
          {
            name: "90/90 External Rotation (Kabel / Band)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "90 90 shoulder external rotation band exercise",
            fitt: { f: "3x / minggu", i: "RPE 7 (Posisi melempar)", t: "3 set × 12 rep (tempo 2-1-3)", type: "Isotonik Sudut Fungsional" },
            cue: "Pertahankan siku setinggi bahu saat memutar lengan bawah ke belakang."
          },
          {
            name: "Prone Y-T-W pada Bench",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "prone ytw shoulder exercise lower trapezius",
            fitt: { f: "3x / minggu", i: "RPE 7 (Dumbbell 1–2 kg)", t: "3 set × 8 rep / posisi", type: "Lower & Middle Trapezius" },
            cue: "Inisiasi gerakan dari tulang belikat sebelum mengangkat lengan."
          },
          {
            name: "Push-Up Plus (Tangan di Bangku → Lantai)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "push up plus serratus anterior exercise",
            fitt: { f: "3x / minggu", i: "RPE 7 (Rantai tertutup)", t: "3 set × 12 rep (tahan puncak 2 dtk)", type: "Serratus & Propriosepsi" },
            cue: "Di posisi puncak push-up, dorong lantai lebih jauh hingga punggung atas membulat ringan."
          },
          {
            name: "Half-Kneeling Single-Arm Landmine Press",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "half kneeling landmine press rotator cuff rehab",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (Beban sedang)", t: "3 set × 8 rep / sisi", type: "Penguatan Overhead Aman" },
            cue: "Dorong beban mengikuti lintasan diagonal alami dan biarkan belikat berputar bebas."
          }
        ]
      },
      {
        phase: "Fase 4: Pliometrik Bahu & Return to Overhead Sport (Minggu 11+)",
        goal: "Daya ledak eksentrik-konsentrik untuk renang, tenis, bulu tangkis, dan bola voli.",
        exercises: [
          {
            name: "90/90 Plyometric Ball Drops / Catch",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "90 90 plyometric ball drops rotator cuff",
            fitt: { f: "2x / minggu", i: "RPE 8 (Bola 0.5–1 kg)", t: "3 set × 20 dtk cepat", type: "Pliometrik Deselerasi" },
            cue: "Lepas dan tangkap bola kecil cepat di posisi 90/90 untuk melatih rem eksentrik infraspinatus."
          },
          {
            name: "Overhead Medicine Ball Wall Slams",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "overhead medicine ball wall throw shoulder",
            fitt: { f: "2x / minggu", i: "RPE 8 (Bola 2–3 kg)", t: "3 set × 10 rep", type: "Daya Ledak Rantai Kinetik" },
            cue: "Transfer tenaga dari kaki dan core menuju lemparan cepat ke dinding."
          },
          {
            name: "Ball Stabilization on Wall (Circles)",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "wall ball circles shoulder proprioception",
            fitt: { f: "2–3x / minggu", i: "RPE 7 (Daya tahan tinggi)", t: "3 set × 30 dtk / arah", type: "Proprioseptif Tinggi" },
            cue: "Tekan bola kecil di dinding setinggi bahu sambil menggambar lingkaran cepat."
          },
          {
            name: "Interval Throwing / Overhead Stroke Program",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "interval throwing program shoulder return to sport",
            fitt: { f: "3x / minggu (selang 1 hari)", i: "RPE 7–9 (Intensitas bertahap)", t: "20–30 menit terstruktur", type: "Spesifik Olahraga" },
            cue: "Mulai dari jarak dekat/kecepatan 60% dan tingkatkan bertahap bebas nyeri."
          }
        ]
      }
    ]
  },
  {
    id: "tennis-elbow",
    name: "Tennis Elbow (Epikondilitis Lateral Siku)",
    englishName: "Lateral Epicondylalgia (Tennis Elbow)",
    region: "upper",
    regionLabel: "Siku & Lengan Bawah",
    badge: "Tendinopati Ekstensor",
    overview: "Tendinopati pada origo otot ekstensor pergelangan tangan (terutama ECRB) di epikondilus lateral humerus akibat beban genggaman dan ekstensi berulang.",
    grades: [
      { grade: "Derajat I (Reaktif Akut)", desc: "Nyeri lokal di sisi luar siku saat menggenggam atau mengangkat benda dengan telapak menghadap ke bawah." },
      { grade: "Derajat II (Tendinopati Subakut)", desc: "Penurunan kekuatan genggaman (pain-free grip strength) dan nyeri saat aktivitas harian." },
      { grade: "Derajat III (Degeneratif Kronis)", desc: "Perubahan kolagen kronis yang memerlukan program HSR 8–12 minggu." }
    ],
    principles: [
      { title: "Isometrik Analgetik & Heavy Slow Resistance (HSR)", detail: "Tahanan isometrik ekstensi pergelangan tangan menurunkan nyeri kortikal, diikuti HSR untuk remodeling tendon ECRB." },
      { title: "Posisi Pergelangan Tangan Netral Saat Menggenggam", detail: "Latih koordinasi ekstensor untuk menstabilkan pergelangan tangan pada 15°–20° ekstensi saat menggenggam." },
      { title: "Evaluasi Bahu & Skapula (Kinetic Chain)", detail: "Kelemahan rotator cuff atau skapula memaksa otot lengan bawah bekerja berlebihan saat memukul atau melempar." }
    ],
    phases: [
      {
        phase: "Fase 1: Analgesia Isometrik & Mobilitas Saraf (Minggu 1–2)",
        goal: "Meredakan nyeri epikondilus lateral dan menjaga fleksibilitas lengan bawah.",
        exercises: [
          {
            name: "Isometric Wrist Extension Hold",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "isometric wrist extension tennis elbow physical therapy",
            fitt: { f: "2–3x / hari", i: "RPE 5–6 (VAS ≤ 3/10)", t: "5 set × 45 dtk (istirahat 2 mnt)", type: "Isometrik Analgetik" },
            cue: "Sangga lengan bawah di meja, tahan pergelangan tangan netral melawan tekanan tangan sehat."
          },
          {
            name: "Gentle Wrist Extensor Stretch (Siku Lurus)",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "wrist extensor stretch tennis elbow gentle",
            fitt: { f: "2–3x / hari", i: "RPE 3 (Tarikan lembut)", t: "3 set × 20–30 dtk", type: "Mobilitas Jaringan Lunak" },
            cue: "Luruskan siku dan tekuk pergelangan tangan ke bawah secara perlahan tanpa memicu nyeri tajam."
          },
          {
            name: "Radial Nerve Glide (Mobilisasi Saraf)",
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "radial nerve glide tennis elbow physical therapy",
            fitt: { f: "2x / hari", i: "RPE 2 (Halus tanpa kesemutan)", t: "2 set × 10 rep lambat", type: "Neurodinamika" },
            cue: "Kombinasikan depresi bahu, rotasi internal lengan, dan fleksi pergelangan secara ritmis."
          },
          {
            name: "Soft Ball Pain-Free Grip Squeeze",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "grip strengthening tennis elbow rehab",
            fitt: { f: "2x / hari", i: "RPE 4 (VAS ≤ 2/10)", t: "3 set × 12 rep (tahan 5 dtk)", type: "Isometrik Genggaman" },
            cue: "Jaga pergelangan tangan sedikit ekstensi (15°) saat meremas bola busa."
          }
        ]
      },
      {
        phase: "Fase 2: Penguatan Eksentrik & HSR Dasar (Minggu 3–6)",
        goal: "Merangsang remodeling kolagen tendon ECRB melalui beban lambat terukur.",
        exercises: [
          {
            name: "Tyler Twist dengan FlexBar",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "tyler twist exercise flexbar tennis elbow",
            fitt: { f: "1x / hari", i: "RPE 6–7 (VAS ≤ 3/10)", t: "3 set × 15 rep (turun 4 dtk)", type: "Eksentrik Tendon ECRB" },
            cue: "Puntir FlexBar dengan tangan sehat lalu lepaskan putaran perlahan menggunakan tangan cedera."
          },
          {
            name: "Slow Dumbbell Wrist Extension (HSR)",
            img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "eccentric wrist extension dumbbell tennis elbow",
            fitt: { f: "3x / minggu (selang 1 hari)", i: "RPE 7 (Dumbbell 1–3 kg)", t: "4 set × 10–12 rep (3 dtk naik, 3 dtk turun)", type: "HSR Ekstensor" },
            cue: "Sangga lengan bawah di atas paha/meja sehingga hanya pergelangan tangan yang bergerak."
          },
          {
            name: "Forearm Supination & Pronation (Hammer/Dumbbell)",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "forearm supination pronation dumbbell tennis elbow",
            fitt: { f: "3x / minggu", i: "RPE 6–7 (Kontrol rotasi)", t: "3 set × 12 rep / arah", type: "Isotonik Lengan Bawah" },
            cue: "Tekuk siku 90° menempel di sisi tubuh, putar telapak ke atas dan ke bawah perlahan."
          },
          {
            name: "Band Scapular Rows (Integrasi Bahu)",
            img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "resistance band rows kinetic chain tennis elbow",
            fitt: { f: "3x / minggu", i: "RPE 6 (Band sedang)", t: "3 set × 15 rep", type: "Penguatan Proksimal" },
            cue: "Tarik dari otot punggung dan belikat, hindari menggenggam pegangan terlalu keras."
          }
        ]
      },
      {
        phase: "Fase 3: Kekuatan Lanjut & Siku Lurus (Minggu 7–10)",
        goal: "Meningkatkan toleransi beban pada posisi siku ekstensi penuh seperti saat backhand.",
        exercises: [
          {
            name: "Straight-Elbow Wrist Extension (Band / Cable)",
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "straight arm wrist extension tennis elbow progression",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (Siku lurus penuh)", t: "3 set × 10 rep (tempo 3-1-3)", type: "HSR Posisi Fungsional" },
            cue: "Luruskan siku di depan tubuh saat melakukan ekstensi pergelangan melawan band."
          },
          {
            name: "Wrist Roller (Ekstensi & Fleksi)",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "wrist roller exercise forearm endurance",
            fitt: { f: "2–3x / minggu", i: "RPE 7 (Beban 1–2.5 kg)", t: "3 set × 2 gulungan naik-turun", type: "Daya Tahan Lengan Bawah" },
            cue: "Gulung tali ke atas dan turunkan perlahan tanpa menjatuhkan beban."
          },
          {
            name: "Farmer's Hold (Thick Grip / Handuk)",
            img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "farmers hold grip strength elbow rehab",
            fitt: { f: "3x / minggu", i: "RPE 7–8 (Genggaman netral)", t: "3 set × 30 dtk", type: "Isometrik Genggaman Berat" },
            cue: "Pertahankan pergelangan tangan netral (tidak menekuk ke bawah) saat menahan beban."
          },
          {
            name: "Quadruped Weight Shifts (Wrist Loading)",
            img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "quadruped wrist loading mobility exercise",
            fitt: { f: "3x / minggu", i: "RPE 6 (Rantai tertutup)", t: "3 set × 12 rep", type: "Stabilitas Rantai Tertutup" },
            cue: "Tumpukan berat badan secara bertahap pada telapak tangan yang terbuka lebar."
          }
        ]
      },
      {
        phase: "Fase 4: Pliometrik & Return to Racket Sport (Minggu 11+)",
        goal: "Kesiapan pukulan backhand, forehand, smash, dan beban genggaman kompetitif.",
        exercises: [
          {
            name: "Plyometric Wrist Flips (Dumbbell Ringan / Bola)",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "plyometric wrist flip tennis elbow return to sport",
            fitt: { f: "2x / minggu", i: "RPE 7–8 (Kecepatan reaktif)", t: "3 set × 15 dtk", type: "Pliometrik Lengan Bawah" },
            cue: "Lepas dan tangkap kembali beban ringan dengan gerakan ekstensi pergelangan cepat."
          },
          {
            name: "Band-Resisted Backhand & Forehand Swings",
            img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "resistance band tennis backhand swing rehab",
            fitt: { f: "2–3x / minggu", i: "RPE 7–8 (Integrasi tubuh)", t: "3 set × 12 ayunan / sisi", type: "Spesifik Olahraga Raket" },
            cue: "Hasilkan tenaga dari rotasi pinggul dan bahu, kunci pergelangan tangan saat kontak."
          },
          {
            name: "Medicine Ball Chest & Overhead Pass",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "medicine ball pass upper body power rehab",
            fitt: { f: "2x / minggu", i: "RPE 8 (Bola 2–3 kg)", t: "3 set × 10 rep", type: "Daya Ledak Ekstremitas Atas" },
            cue: "Dorong bola eksplosif tanpa menghentakkan siku ke posisi hiperekstensi."
          },
          {
            name: "Gradual On-Court Hitting Progression",
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            youtubeQuery: "return to tennis hitting progression tennis elbow",
            fitt: { f: "3x / minggu (selang 1 hari)", i: "RPE 7–9 (Durasi bertahap)", t: "20–40 menit bertahap", type: "Simulasi Pertandingan" },
            cue: "Mulai dari mini-tennis forehand sebelum memasukkan pukulan one-handed backhand dan servis."
          }
        ]
      }
    ]
  }
];
