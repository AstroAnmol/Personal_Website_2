/* ============================================================
   projects-data.js — Single source of truth for research projects
   ============================================================
   To add a new project, append an object to the PROJECTS array below.
   The page automatically renders 2-column grid cards, modals, and category filters.

   Fields:
     id          — Unique identifier string (e.g. "psyche-dem")
     category    — Category key: "planetary" | "mission" | "smallsat"
     catLabel    — Card category label (e.g. "PhD Dissertation · University of Maryland")
     title       — Full project title (with emoji prefix)
     desc        — Card short summary text
     image       — Optional 16:9 thumbnail image path (e.g. "assets/img/projects/psyche.jpg"). Set to null for gradient banner.
     archived    — Boolean flag (set to true to exclude project from public website display)
     tags        — Array of topic tag strings

     // Optional Modal Details (omit or set to null if no modal)
     modal: {
       mediaIcon:  FontAwesome icon class (e.g. "fa-film", "fa-satellite-dish")
       mediaText:  Placeholder title text
       mediaHint:  Placeholder hint instruction text
       heading:    Heading for details section (e.g. "Key Methodology & Contributions")
       bullets:    Array of bullet point strings (supports HTML formatting like <strong>)
       links:      Array of action link objects [{ label, url, primary, icon }]
     }

     // Action links shown on grid card
     cardLinks: Array of link objects [{ label, url, primary, icon, target }]
   ============================================================ */

const PROJECTS = [
  // ──────────────────────────────────────────────────────────
  // 1. PLANETARY SCIENCE & DEFENSE
  // ──────────────────────────────────────────────────────────
  
  // 1.1 PhD Dissertation
  {
    id: "psyche-dem",
    category: "planetary",
    catLabel: "PhD Dissertation · University of Maryland",
    title: "🧲 Role of Magnetic Force in Avalanching on Metallic Asteroids",
    desc: "Developed and experimentally validated the first open-source DEM framework in LIGGGHTS to simulate paramagnetic granular media under uniform magnetic fields on M-type asteroids like 16-Psyche.",
    image: null,
    archived: false,
    tags: ["DEM", "Magnetic Cohesion", "LIGGGHTS", "Asteroid Psyche"],
    cardLinks: [
      { label: "GitHub v1.0.0 ↗", url: "https://github.com/AstroAnmol/LIGGGHTS-Public-Mag/releases/tag/v1.0.0", primary: true, icon: "fa-brands fa-github", external: true },
      { label: "Paper DOI", url: "https://doi.org/10.1007/s10035-026-01643-x", primary: false, icon: "fa-newspaper", external: true }
    ],
    modal: {
      mediaIcon: "fa-film",
      mediaText: "DEM Avalanching Simulation Video / Animation",
      mediaHint: "[ Media Placeholder: Add MP4 video or GIF to assets/media/psyche_avalanche.mp4 ]",
      heading: "Key Methodology & Contributions",
      bullets: [
        "<strong>Analytical Modeling:</strong> Formulated an empirical force model for inter-particle magnetic interactions between paramagnetic grains in uniform fields.",
        "<strong>Open-Source Code Release (v1.0.0):</strong> Developed and published <a href='https://github.com/AstroAnmol/LIGGGHTS-Public-Mag/releases/tag/v1.0.0' target='_blank'>LIGGGHTS-Public-Mag v1.0.0</a> on GitHub, delivering the first experimentally validated modeling tool for paramagnetic granular media on M-type asteroids.",
        "<strong>Numerical Stability:</strong> Derived explicit time-step stability constraints for integration under steep magnetic force gradients.",
        "<strong>Geophysical Mapping:</strong> Conducted multi-scenario avalanching simulations to map the conditions on asteroid 16-Psyche where magnetic forces govern surface morphology."
      ],
      links: [
        { label: "Download LIGGGHTS v1.0.0 ↗", url: "https://github.com/AstroAnmol/LIGGGHTS-Public-Mag/releases/tag/v1.0.0", primary: true, icon: "fa-brands fa-github" },
        { label: "Granular Matter (2026)", url: "https://doi.org/10.1007/s10035-026-01643-x", primary: false, icon: "fa-file-lines" },
        { label: "PSJ Article (2023)", url: "https://doi.org/10.3847/PSJ/ace323", primary: false, icon: "fa-file-lines" }
      ]
    }

  },

  // 1.2 NEOWARP Planetary Defense
  {
    id: "neowarp-recon",
    category: "planetary",
    catLabel: "Planetary Defense · NASA Technical Working Group",
    title: "🌍 Near-Earth Object Reconnaissance for Planetary Defense",
    desc: "Contributed to the NASA-sponsored NEOWARP working group final report outlining reconnaissance architectures and rapid-response spacecraft trajectories for planetary defense scenarios against threatening NEOs.",
    image: null,
    archived: false,
    tags: ["Planetary Defense", "NEO", "Mission Architecture"],
    cardLinks: [
      { label: "NASA NTRS Report ↗", url: "https://ntrs.nasa.gov/citations/20250005751", primary: false, icon: "fa-file-pdf", external: true }
    ],
    modal: null
  },

  // 1.3 Polymele Occultation
  {
    id: "polymele-occultation",
    category: "planetary",
    catLabel: "Observational Astronomy · NASA Lucy Mission",
    title: "⭐ Polymele Stellar Occultation Campaign",
    desc: "Deployed CPC1100 mobile telescopes to Kansas as part of the Southwest Research Institute (SwRI) observer network, confirming stellar occultation detection of Trojan Asteroid Polymele to constrain its shape model.",
    image: null,
    archived: false,
    tags: ["Occultation", "Trojan Asteroids", "Lucy Mission", "Telescope Ops"],
    cardLinks: [],
    modal: {
      mediaIcon: "fa-chart-line",
      mediaText: "Occultation Light Curve & Field Site Operations",
      mediaHint: "[ Media Placeholder: Add light-curve plot or field photo to assets/media/polymele_occultation.jpg ]",
      heading: "Campaign Highlights",
      bullets: [
        "<strong>Remote Field Deployment:</strong> Operated mobile optical telescopes in Kansas under time-critical observation windows.",
        "<strong>Light-Curve Analysis:</strong> Extracted high-precision photometric light curves in Python to determine chords and asteroid silhouette."
      ],
      links: []
    }
  },

  // ──────────────────────────────────────────────────────────
  // 2. SPACECRAFT MISSION CONCEPTS
  // ──────────────────────────────────────────────────────────

  // 2.1 CORA Mission Concept (JPL PSSS)
  {
    id: "cora-mission",
    category: "mission",
    catLabel: "Mission Cost Lead · NASA JPL Planetary Science Summer School",
    title: "🌊 CORA: Ceres Ocean Reconnaissance and Analysis",
    desc: "Designed a New Frontiers class mission concept to explore the habitability of Ceres' Occator crater. Cost Lead managing NASA Work Breakdown Structure (WBS) budgets alongside JPL Team X.",
    image: null,
    archived: false,
    tags: ["Ceres Lander", "New Frontiers", "JPL Team X", "Cost Engineering"],
    cardLinks: [
      { label: "JPL PSSS ↗", url: "https://www.jpl.nasa.gov/edu/internships/apply/nasa-science-mission-design-schools/", primary: false, icon: "fa-arrow-up-right-from-square", external: true }
    ],
    modal: {
      mediaIcon: "fa-shuttle-space",
      mediaText: "CORA Mission Fact Sheet & Architecture",
      mediaHint: "[ Media Placeholder: Add fact sheet or graphic to assets/img/CORA/PSSS_S2_2024_CORA Fact Sheet.Final_URS329489-1.png ]",
      heading: "Mission Highlights & Responsibilities",
      bullets: [
        "<strong>JPL Team X Collaboration:</strong> Worked alongside JPL Team X engineers during the culminating week at JPL to finalize mission point design and cost trade-offs.",
        "<strong>Science Traceability Matrix (STM):</strong> Converted science objectives into mission subsystem cost caps and Work Breakdown Structure (WBS) items using JPL Institutional Cost Models (ICM).",
        "<strong>Target Destination:</strong> Focused on Occator Crater to analyze active brine extrusion and search for potential organics on Ceres."
      ],
      links: [
        { label: "JPL PSSS Program Page ↗", url: "https://www.jpl.nasa.gov/edu/internships/apply/nasa-science-mission-design-schools/", primary: true, icon: "fa-arrow-up-right-from-square" }
      ]
    }
  },

  // 2.2 SIZLE Mission Concept
  {
    id: "sizle-mission",
    category: "mission",
    catLabel: "Mission Concept · Cornell SmallSat Design School",
    title: "☀️ SIZLE — SmallSat to Image Zodiacal Light Above Ecliptic",
    desc: "Systems engineer for a 20-person NASA Astrophysics Pioneers solar-sail SMEX concept designed to map zodiacal light above the ecliptic plane and characterize interplanetary dust distribution.",
    image: null,
    archived: false,
    tags: ["Solar Sail", "Zodiacal Light", "Mission Architecture"],
    cardLinks: [
      { label: "ASCEND Paper", url: "https://doi.org/10.2514/6.2023-4782", primary: false, icon: "fa-newspaper", external: true }
    ],
    modal: {
      mediaIcon: "fa-solar-panel",
      mediaText: "SIZLE Solar Sail Trajectory & Spacecraft CAD",
      mediaHint: "[ Media Placeholder: Add CAD model / solar sail diagram to assets/media/sizle_concept.jpg ]",
      heading: "Systems Engineering Highlights",
      bullets: [
        "<strong>Science Traceability Matrix:</strong> Translated scientific instruments requirements into bus subsystem margins and delta-V budgets.",
        "<strong>Solar Sail Propulsion:</strong> Modeled non-Keplerian trajectories above the ecliptic plane using solar radiation pressure."
      ],
      links: [
        { label: "ASCEND 2023 Paper ↗", url: "https://doi.org/10.2514/6.2023-4782", primary: false, icon: "fa-newspaper" }
      ]
    }
  },

  // ──────────────────────────────────────────────────────────
  // 3. SMALLSAT ENGINEERING & OPERATIONS
  // ──────────────────────────────────────────────────────────

  // 3.1 NASA NIAC Phase II Sub-cm Debris
  {
    id: "niac-debris",
    category: "smallsat",
    catLabel: "Graduate Researcher · NASA NIAC Phase II",
    title: "🛰️ Mapping Sub-cm Orbital Debris in LEO via Plasma Soliton Detection",
    desc: "Modeling 12U CubeSat sensor placement and field-of-view using Monte Carlo simulations to detect non-trackable sub-cm space debris via precursor plasma soliton shockwaves in Low Earth Orbit.",
    image: null,
    archived: false,
    tags: ["Space Debris", "Plasma Solitons", "12U CubeSat", "Monte Carlo"],
    cardLinks: [
      { label: "NASA NIAC Study ↗", url: "https://www.nasa.gov/directorates/stmd/niac/niac-studies/addressing-key-challenges-to-mapping-sub-cm-orbital-debris-in-leo-via-plasma-soliton-detection/", primary: false, icon: "fa-arrow-up-right-from-square", external: true }
    ],
    modal: {
      mediaIcon: "fa-satellite",
      mediaText: "NIAC Phase II Concept & Debris Sensing Architecture",
      mediaHint: "[ Media Placeholder: Add NIAC concept graphic to assets/img/project_preview/niac25ph2-hartzell.webp ]",
      heading: "Research Highlights & Approach",
      bullets: [
        "<strong>Precursor Soliton Detection:</strong> Space debris traveling at orbital speeds generates precursor plasma shockwaves (solitons) detectable via Langmuir probes before physical impact.",
        "<strong>Monte Carlo Sensor Optimization:</strong> Modeling Langmuir probe fields-of-view and 12U satellite orbital constellations to maximize sub-cm (1 mm to 10 cm) debris detection rates.",
        "<strong>Space Situational Awareness:</strong> Fills a critical tracking gap between un-trackable sub-cm debris and Earth-based radar capabilities (> 10 cm)."
      ],
      links: [
        { label: "NASA NIAC Study Page ↗", url: "https://www.nasa.gov/directorates/stmd/niac/niac-studies/addressing-key-challenges-to-mapping-sub-cm-orbital-debris-in-leo-via-plasma-soliton-detection/", primary: true, icon: "fa-arrow-up-right-from-square" }
      ]
    }
  },

  // 3.2 IIT Bombay Student Satellite Program
  {
    id: "iitb-ssp",
    category: "smallsat",
    catLabel: "Project Manager & Systems Engineer · IIT Bombay",
    title: "🛰️ IIT Bombay Student Satellite Program",
    desc: "Led a 50+ member interdisciplinary team following the successful launch of Pratham aboard ISRO's PSLV C-35. Managed systems integration, environmental qualification, and mission design for follow-on CubeSats.",
    image: null,
    archived: false,
    tags: ["Systems Engineering", "CubeSat", "ISRO PSLV", "TVAC & Shaker"],
    cardLinks: [
      { label: "SatLab Website ↗", url: "https://www.aero.iitb.ac.in/satlab/", primary: false, icon: "fa-arrow-up-right-from-square", external: true }
    ],
    modal: {
      mediaIcon: "fa-satellite-dish",
      mediaText: "Satellite Shaker Table & Thermal-Vacuum Testing Media",
      mediaHint: "[ Media Placeholder: Add vibration / TVAC test video to assets/media/pratham_test.mp4 ]",
      heading: "Flight Hardware & Qualification Highlights",
      bullets: [
        "<strong>Environmental Testing:</strong> Conducted vibration testing on shaker tables at URSC Bengaluru and authored thermal-vacuum (TVAC) profiles (-60°C to +100°C).",
        "<strong>Program Leadership:</strong> Managed 1.5M INR annual competitive funding and instituted ISRO-verified Quality Assurance protocols.",
        "<strong>Advitiy Payload:</strong> Formulated mission requirements for Advitiy, a CubeSat broadcasting SSTV images to rural India."
      ],
      links: [
        { label: "Visit IITB SatLab Website ↗", url: "https://www.aero.iitb.ac.in/satlab/", primary: true, icon: "fa-arrow-up-right-from-square" }
      ]
    }
  },


  // 3.3 Sanket Tech Demo
  {
    id: "sanket-demo",
    category: "smallsat",
    catLabel: "Technology Demonstration · ISRO PS4-OP",
    title: "📡 Sanket — Antenna Deployment System on PSLV Stage 4",
    desc: "Team member for Sanket, a technology demonstration payload to qualify a deployable UHF antenna mechanism in Low Earth Orbit aboard ISRO's PSLV Stage 4 Orbital Platform.",
    image: null,
    archived: false,
    tags: ["TRL-7", "Antenna Deployment", "ISRO PS4"],
    cardLinks: [
      { label: "Springer Paper ↗", url: "https://doi.org/10.1007/978-981-19-7474-8_8", primary: false, icon: "fa-newspaper", external: true }
    ],
    modal: null
  },

  // 3.4 Satellite 101 Wiki
  {
    id: "satellite-wiki",
    category: "smallsat",
    catLabel: "Educational Resource · Open Access",
    title: "📚 Satellite 101 Wiki",
    desc: "Co-authored and maintained an open-access educational wiki covering satellite subsystem design, attitude determination, orbital mechanics, environmental testing, and mission management for student teams worldwide.",
    image: null,
    archived: false,
    tags: ["Science Communication", "Open Access", "Systems Engineering"],
    cardLinks: [
      { label: "Visit Satellite 101 Wiki ↗", url: "https://www.aero.iitb.ac.in/satelliteWiki/", primary: true, icon: "fa-arrow-up-right-from-square", external: true }
    ],
    modal: null
  },

  // ──────────────────────────────────────────────────────────
  // ARCHIVED PROJECTS (Preserved in code, hidden from public rendering)
  // ──────────────────────────────────────────────────────────

  // Archived 1. Reentry Launch Vehicle Optimal Control
  {
    id: "rlv-reentry",
    category: "smallsat",
    catLabel: "Master's Thesis · IIT Bombay & ISRO RLV-TD",
    title: "🚀 Reentry Launch Vehicle Optimal Control (ISRO RLV-TD)",
    desc: "Formulated winged launch-vehicle re-entry glide trajectories as optimal control problems to minimize aerodynamic thermal flux for ISRO's Reusable Launch Vehicle (RLV-TD) project.",
    image: null,
    archived: true, // Archived
    tags: ["Optimal Control", "Trajectory Optimization", "CasADi", "ISRO RLV-TD"],
    cardLinks: [],
    modal: null
  },

  // Archived 2. Low-Thrust Trajectory Optimization
  {
    id: "low-thrust-trajectory",
    category: "mission",
    catLabel: "Astrodynamics & Optimal Trajectories",
    title: "☄️ Low-Thrust Trajectory Design to Outer Planets",
    desc: "Built a C++ trajectory optimization framework utilizing indirect calculus of variations and genetic algorithms to compute fuel-optimal low-thrust gravity-assist trajectories to outer solar system targets.",
    image: null,
    archived: true, // Archived
    tags: ["Low-Thrust", "Gravity Assist", "C++", "Genetic Algorithm"],
    cardLinks: [],
    modal: null
  }
];

/* ── Section Metadata Mapping ───────────────────────────────── */
const CATEGORY_SECTIONS = [
  { key: "planetary", label: "Planetary Science & Defense", title: "Small Body & Asteroid Physics" },
  { key: "mission",   label: "Spacecraft Mission Concepts", title: "Mission Architecture & Systems Design" },
  { key: "smallsat",  label: "SmallSat Engineering & Operations", title: "Flight Hardware & Satellite Operations" }
];

/* ── Rendering Engine ────────────────────────────────────────── */

/**
 * Render grid cards and modal overlays automatically.
 * @param {HTMLElement} gridContainer   — Container for research sections/cards
 * @param {HTMLElement} modalsContainer — Container for modal overlay elements
 * @param {string|null} activeFilter    — Active category filter key ("all", "planetary", etc.)
 */
function renderProjects(gridContainer, modalsContainer, activeFilter = "all") {
  if (!gridContainer) return;

  const sectionsToRender = CATEGORY_SECTIONS.filter(sec => 
    activeFilter === "all" || activeFilter === sec.key
  );

  let gridHtml = "";
  let modalsHtml = "";

  sectionsToRender.forEach((sec, idx) => {
    // Exclude archived projects
    const secProjects = PROJECTS.filter(p => !p.archived && p.category === sec.key);
    if (secProjects.length === 0) return;

    if (idx > 0 && activeFilter === "all") {
      gridHtml += `<hr class="divider">`;
    }

    gridHtml += `
      <div class="section-header" style="margin-bottom: 2rem; ${idx > 0 ? 'margin-top: 1rem;' : ''}">
        <p class="section-label">${sec.label}</p>
        <h2 class="section-title">${sec.title}</h2>
      </div>
      <div class="cards-grid" style="margin-bottom: 4rem;">
    `;

    secProjects.forEach(proj => {
      // Tags
      const tagsHtml = proj.tags
        .map(t => `<span class="tag">${t}</span>`)
        .join("\n");

      // Action Links on Card
      let cardActionsHtml = "";
      if (proj.modal) {
        cardActionsHtml += `
          <button class="btn btn-primary" data-open-modal="modal-${proj.id}" style="font-size: 0.82rem; padding: 0.45rem 1rem;">
            <i class="fa-solid fa-circle-play"></i> View Media &amp; Details
          </button>
        `;
      }

      if (proj.cardLinks && proj.cardLinks.length > 0) {
        proj.cardLinks.forEach(link => {
          const btnClass = link.primary ? "btn btn-primary" : "btn btn-outline";
          const targetAttr = link.external ? 'target="_blank"' : '';
          cardActionsHtml += `
            <a href="${link.url}" ${targetAttr} class="${btnClass}" style="font-size: 0.82rem; padding: 0.45rem 0.9rem;">
              <i class="fa-solid ${link.icon}"></i> ${link.label}
            </a>
          `;
        });
      }

      // Thumbnail Image or Gradient Fallback Header
      const headerMediaHtml = proj.image
        ? `<div class="card-img-wrap"><img src="${proj.image}" alt="${proj.title}" class="card-img"></div>`
        : `<div class="card-img-gradient"></div>`;

      gridHtml += `
        <article class="card fade-up" data-category="${proj.category}">
          ${headerMediaHtml}
          <div class="card-body">
            <p class="card-cat">${proj.catLabel}</p>
            <h3 class="card-title">${proj.title}</h3>
            <p class="card-desc">${proj.desc}</p>
            <div class="card-footer">
              <div class="tag-list" style="margin: 0;">
                ${tagsHtml}
              </div>
              <div class="card-action-bar">
                ${cardActionsHtml}
              </div>
            </div>
          </div>
        </article>
      `;

      // Build Modal HTML if modal exists
      if (proj.modal) {
        const m = proj.modal;
        const bulletsHtml = m.bullets
          .map(b => `<li>${b}</li>`)
          .join("\n");

        let modalActionsHtml = "";
        if (m.links && m.links.length > 0) {
          modalActionsHtml = `
            <div class="modal-actions">
              ${m.links.map(l => `
                <a href="${l.url}" target="_blank" class="${l.primary ? 'btn btn-primary' : 'btn btn-outline'}" style="font-size: 0.82rem; padding: 0.45rem 1rem;">
                  <i class="fa-solid ${l.icon}"></i> ${l.label}
                </a>
              `).join('')}
            </div>
          `;
        }

        modalsHtml += `
          <div class="modal-overlay" id="modal-${proj.id}" aria-hidden="true">
            <div class="modal-container">
              <button class="modal-close" aria-label="Close modal">&times;</button>
              <span class="modal-cat">${proj.catLabel}</span>
              <h3 class="modal-title">${proj.title}</h3>

              <div class="modal-body">
                <div class="media-placeholder-box">
                  <i class="fa-solid ${m.mediaIcon} media-placeholder-icon"></i>
                  <div class="media-placeholder-text">${m.mediaText}</div>
                  <div class="media-placeholder-hint">${m.mediaHint}</div>
                </div>

                <h4 class="drawer-details-title">${m.heading}</h4>
                <ul class="drawer-bullets">
                  ${bulletsHtml}
                </ul>

                ${modalActionsHtml}
              </div>
            </div>
          </div>
        `;
      }
    });

    gridHtml += `</div>`;
  });

  gridContainer.innerHTML = gridHtml;
  if (modalsContainer) {
    modalsContainer.innerHTML = modalsHtml;
  }

  wireModalEvents();
}

/**
 * Helper to wire up click, backdrop, and Escape events for rendered modals.
 */
function wireModalEvents() {
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.dataset.openModal;
      openModal(modalId);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.querySelectorAll('.modal-close').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => closeModal(modal));
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
}
