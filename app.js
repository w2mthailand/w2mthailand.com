const programGroups = [
  {
    title: "Chiang Mai Tours",
    items: [
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E01 - Doi Suthep & Chiang Mai Ancient Temples Tour.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E02 - Ethical Elephant Sanctuary Half-Day Experience.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E03 - Chiang Mai Old City Ancient Temples Tour.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E04 - Mae Taeng Elephant Camp & Bamboo Rafting Adventure.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E05 - Doi Inthanon National Park - Roof of Thailand, Royal Pagodas & Waterfall.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E06 - Chiang Rai White Temple, Blue Temple & Black House Day Tour.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E07 - Doi Inthanon, Mae Klang Luang Trek & Karen Coffee Village.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E08 - Chiang Rai White Temple, Golden Triangle & Mae Sai Border Day Tour.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E09 - Chiang Mai Street Food & Night Market Hopping Tour.docx",
      "./+2_Itineraries_2027/01_Chiang_Mai_Tours/WTH-CNX-E10 - Khum Khantoke Lanna Dinner & Cultural Show.docx"
    ]
  },
  {
    title: "Chiang Rai Tours",
    items: [
      "./+2_Itineraries_2027/02_Chiang_Rai_Tours/WTH-CEI-E01 - Chiang Rai White Temple, Blue Temple & Black House Tour.docx",
      "./+2_Itineraries_2027/02_Chiang_Rai_Tours/WTH-CEI-E02 - Golden Triangle, Mae Sai Border Market & Opium Museum Tour.docx",
      "./+2_Itineraries_2027/02_Chiang_Rai_Tours/WTH-CEI-E03 - Doi Tung Royal Villa & Mae Fah Luang Garden Tour.docx",
      "./+2_Itineraries_2027/02_Chiang_Rai_Tours/WTH-CEI-E04 - Doi Tung Royal Villa & Doi Mae Salong Tea Plantation with Akha Village.docx"
    ]
  },
  {
    title: "Bangkok & Central Thailand Tours",
    items: [
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-BKK-E01 - Bangkok Grand Palace, Emerald Buddha & Wat Pho Half-Day Tour.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-BKK-E02 - Bangkok Grand Palace, Emerald Buddha & Thonburi Canal Tour.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-BKK-E03 - Bangkok Three Temples Tour - Wat Pho, Wat Arun & Marble Temple.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-BKK-E04 - Damnoen Saduak Floating Market & Maeklong Railway Market Tour.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-BKK-E05 - Bangkok Highlights Full-Day Tour - Grand Palace, Wat Pho, Wat Arun & Canals.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-BKK-E06 - Bangkok by Night Tuk Tuk Tour - Temples, Markets & Street Food.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-BKK-E07 - Wonderful Pearl Chao Phraya River Dinner Cruise.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-CEN-E01 - Ayutthaya UNESCO World Heritage & Bang Pa-In Royal Palace Tour.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-CEN-E02 - Kanchanaburi River Kwai Bridge & Death Railway Full-Day Tour.docx",
      "./+2_Itineraries_2027/03_Bangkok_Tours/WTH-CEN-E03 - Kanchanaburi River Kwai Bridge & Erawan Waterfall Full-Day Tour.docx"
    ]
  },
  {
    title: "Package Tours",
    items: [
      "./+2_Itineraries_2027/04_Package_Tours/WTH-BKK-P01 - Bangkok Classic Grand Palace, Temples & Canal Tour (3D2N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-BKK-P02 - Bangkok Experience - Grand Palace, Floating Market, Railway Market & Dinner Cruise (4D3N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-CEI-P01 - Chiang Rai Signature - White Temple, Doi Tung & Golden Triangle (4D3N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-CEN-P01 - River Kwai & Ayutthaya UNESCO Heritage Discovery (5D4N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-CNX-P01 - Chiang Mai Classic - Doi Suthep, Elephant Camp & Bamboo Rafting (3D2N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-CNX-P02 - Chiang Mai Highlights - Doi Suthep & Doi Inthanon (4D3N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-NTH-P01 - Chiang Mai & Chiang Rai Highlights - White Temple & Golden Triangle (5D4N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-NTH-P02 - Bangkok to Chiang Mai Heritage Route - Ayutthaya & Sukhothai (3D2N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-SOU-P01 - Phuket & Phi Phi Islands Experience Maya Bay, Pileh Lagoon & Old Town (4D3N).docx",
      "./+2_Itineraries_2027/04_Package_Tours/WTH-THA-P01 - Classic Thailand Overland - Bangkok to Chiang Mai & Golden Triangle (8D7N).docx"
    ]
  }
];

const itineraryMap = Object.fromEntries(
  programGroups.flatMap((group) =>
    group.items.map((path) => [path.split("/").pop().split(" - ")[0], path])
  )
);

const serviceNotes = {
  transfer: {
    remark: [
      "All rates are quoted in Thai Baht (THB).",
      "This rate includes transfer service with driver only.",
      "All transfer services are subject to prior confirmation and vehicle availability."
    ],
    included: [
      "Private air-conditioned vehicle with an experienced driver.",
      "Fuel or electric charging costs.",
      "Bottled drinking water.",
      "All expressway and motorway toll fees.",
      "One baby car seat available upon request.",
      "All government taxes included without any hidden service charges."
    ],
    excluded: [
      "All entrance fees.",
      "All meals and drinks.",
      "All personal items / expenses."
    ]
  }
};

function formatValue(value) {
  const text = String(value ?? "").trim();
  if (!text) return "-";
  if (/^\d+(\.\d+)?$/.test(text)) {
    return Number(text).toLocaleString("en-US");
  }
  return text;
}

function headerClass(header) {
  const normalized = header.toLowerCase();
  if (normalized.includes("code")) return "col-code";
  if (normalized.includes("description") || normalized.includes("route")) return "col-description";
  if (normalized.includes("pax") || normalized.includes("rate")) return "col-price";
  if (normalized.includes("vehicle")) return "col-vehicle";
  if (normalized.includes("duration")) return "col-duration";
  if (normalized.includes("meal")) return "col-meal";
  if (normalized.includes("program")) return "col-program";
  return "";
}

function filteredDataset(dataset, query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return dataset;
  return {
    ...dataset,
    sections: dataset.sections
      .map((section) => ({
        ...section,
        rows: section.rows.filter((row) =>
          row.some((cell) => String(cell).toLowerCase().includes(needle))
        )
      }))
      .filter((section) => section.rows.length)
  };
}

function safeHref(path) {
  return encodeURI(path);
}

function labelFromPath(path) {
  const filename = path.split("/").pop().replace(".docx", "");
  const parts = filename.split(" - ");
  const code = parts[0];
  const title = parts.slice(1).join(" - ");
  return { code, title: title || filename };
}

function makeActionLinks(path) {
  const href = safeHref(path);
  return `
    <div class="card-actions">
      <a class="action-link primary" href="${href}" target="_blank" rel="noreferrer">Open</a>
      <a class="action-link" href="${href}" download>Download</a>
    </div>
  `;
}

function renderServiceNotes(targetId, noteSet) {
  const target = document.getElementById(targetId);
  if (!target || !noteSet) return;
  target.innerHTML = buildServiceNotesHtml(noteSet);
}

function buildServiceNotesHtml(noteSet) {
  if (!noteSet) return "";
  const groups = [
    { label: "Remark:", items: noteSet.remark },
    { label: "Included:", items: noteSet.included },
    { label: "Excluded:", items: noteSet.excluded }
  ];
  return `
    <section class="notes-panel">
      ${groups.map((group) => `
        <article class="note-block">
          <h2>${group.label}</h2>
          <div class="note-lines">
            ${group.items.map((item) => `<p>- ${item}</p>`).join("")}
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderRateView(targetId, dataset, type, query = "") {
  const target = document.getElementById(targetId);
  if (!target || !dataset) return;
  const visibleDataset = filteredDataset(dataset, query);

  const sections = visibleDataset.sections
    .filter((section) => Array.isArray(section.rows) && section.rows.length > 0)
    .map((section) => {
    const headers = [
      ...section.headers,
      ...(type === "excursion" ? ["Program"] : [])
    ].map((header) => `<th class="${headerClass(header)}">${header}</th>`).join("");
    const rows = section.rows.map((row) => {
      const cells = row.map((cell, index) => {
        const header = section.headers[index] || "";
        const klass = headerClass(header);
        const display = formatValue(cell);
        const titleAttr = ` title="${String(display).replace(/"/g, "&quot;")}"`;
        if (index === 0) {
          return `<td class="${klass}"${titleAttr}><strong>${display}</strong></td>`;
        }
        return `<td class="${klass}"${titleAttr}>${display}</td>`;
      }).join("");
      const programCell = type === "excursion"
        ? `<td class="col-program">${itineraryMap[row[0]]
            ? `<a class="inline-link" href="${safeHref(itineraryMap[row[0]])}" target="_blank" rel="noreferrer">View</a>`
            : `<span class="muted">-</span>`}</td>`
        : "";
      return `<tr>${cells}${programCell}</tr>`;
    }).join("");
    const notesAfterSection = type === "transfer" && section.name.toLowerCase().includes("krabi")
      ? buildServiceNotesHtml(serviceNotes.transfer)
      : "";

    return `
      <section class="rate-section">
        <div class="rate-section-header">
          <h3>${section.name}</h3>
          <span class="pill">${section.rows.length} items</span>
        </div>
        <div class="rate-table-wrap">
          <table class="rate-table ${type}-table">
            <thead><tr>${headers}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        ${notesAfterSection}
      </section>
    `;
  }).join("");

  const noteLabel = type === "excursion"
    ? "Rate rule"
    : "Rate basis";

  const terms = (dataset.terms || [])
    .filter((item) => item.body && item.body.trim())
    .map((item) => `
    <details class="terms-item">
      <summary>${item.heading}</summary>
      <p>${item.body}</p>
    </details>
  `).join("");

  target.innerHTML = `
    <div class="rate-intro">
      <div class="rate-meta">
        <h2>${dataset.title}</h2>
        <p>${dataset.validity}</p>
        ${type === "transfer" ? `<p class="rate-inline-note"><strong>${noteLabel}:</strong> ${dataset.note}</p>` : ``}
      </div>
      ${type === "transfer" ? `` : `<div class="rate-meta">
        <h2>${noteLabel}</h2>
        <p>${dataset.note}</p>
      </div>`}
    </div>
    ${sections || `<div class="empty-state">No matching rates found.</div>`}
    <p class="table-note">All rates are shown in THB (Thai Baht) exactly as listed in the uploaded contract workbook.</p>
    <section class="terms-panel">
      <h2>Terms &amp; Conditions</h2>
      <div class="terms-list">${terms}</div>
    </section>
  `;
}

function renderPrograms(filterText = "") {
  const target = document.getElementById("program-groups");
  if (!target) return;
  const query = filterText.trim().toLowerCase();

  const sections = programGroups.map((group) => {
    const visibleItems = group.items.filter((path) => !query || path.toLowerCase().includes(query));
    if (!visibleItems.length) return "";

    const cards = visibleItems.map((path) => {
      const { code, title } = labelFromPath(path);
      return `
        <article class="program-card">
          <div class="file-meta">
            <span class="pill">DOCX</span>
            <span class="muted">${code}</span>
          </div>
          <h3>${title}</h3>
          ${makeActionLinks(path)}
        </article>
      `;
    }).join("");

    return `
      <section class="program-group">
        <div class="program-group-header">
          <h3>${group.title}</h3>
          <span class="program-count">${visibleItems.length}</span>
        </div>
        <div class="program-list">${cards}</div>
      </section>
    `;
  }).join("");

  target.innerHTML = sections || `
    <div class="empty-state">
      No matching programs found.
    </div>
  `;
}

renderRateView("excursion-rate-view", window.RATE_DATA?.excursion, "excursion");
renderRateView("transfer-rate-view", window.RATE_DATA?.transfer, "transfer");
renderPrograms();

const programSearch = document.getElementById("program-search");
if (programSearch) {
  programSearch.addEventListener("input", (event) => {
    renderPrograms(event.target.value);
  });
}

const excursionSearch = document.getElementById("excursion-search");
if (excursionSearch) {
  excursionSearch.addEventListener("input", (event) => {
    renderRateView("excursion-rate-view", window.RATE_DATA?.excursion, "excursion", event.target.value);
  });
}

const transferSearch = document.getElementById("transfer-search");
if (transferSearch) {
  transferSearch.addEventListener("input", (event) => {
    renderRateView("transfer-rate-view", window.RATE_DATA?.transfer, "transfer", event.target.value);
  });
}
