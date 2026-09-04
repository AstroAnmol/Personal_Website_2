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
    image: "assets/img/project_preview/mag-avalanching.png",
    imageFit: "contain",
    detailUrl: "psyche-dem.html",
    archived: false,
    tags: ["DEM", "Magnetic Cohesion", "LIGGGHTS", "Asteroid Psyche"],
    cardLinks: [
      { label: "Read Full Case Study ↗", url: "psyche-dem.html", primary: true, icon: "fa-book-open" },
      { label: "GitHub v1.0.0 ↗", url: "https://github.com/AstroAnmol/LIGGGHTS-Public-Mag/releases/tag/v1.0.0", primary: false, icon: "fa-brands fa-github", external: true }
    ],
    modal: null

  },

  // 1.2 NEOWARP Planetary Defense
  {
    id: "neowarp-recon",
    category: "planetary",
    catLabel: "Planetary Defense · NASA Technical Working Group",
    title: "🌍 Near-Earth Object Reconnaissance for Planetary Defense",
    desc: "Contributed to the NASA-sponsored NEOWARP working group final report outlining reconnaissance architectures and rapid-response spacecraft trajectories for planetary defense scenarios against threatening NEOs.",
    image: "assets/img/publication_preview/neowarp.png",
    imageFit: "contain",
    archived: false,
    tags: ["Planetary Defense", "NEO", "Mission Architecture"],
    cardLinks: [
      { label: "NASA NTRS Report ↗", url: "https://ntrs.nasa.gov/citations/20250005751", primary: true, icon: "fa-file-pdf", external: true }
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
    youtubeId: "PZ_gi4IgD5k",
    archived: false,
    tags: ["Occultation", "Trojan Asteroids", "Lucy Mission", "Telescope Ops"],
    cardLinks: [
      { label: "Watch Campaign Video ↗", url: "https://www.youtube.com/watch?v=PZ_gi4IgD5k", primary: true, icon: "fa-brands fa-youtube", external: true }
    ],
    modal: {
      youtubeId: "PZ_gi4IgD5k",
      mediaIcon: "fa-circle-play",
      mediaText: "NASA Lucy Mission: Polymele Stellar Occultation Campaign",
      heading: "Campaign Highlights",
      bullets: [
        "<strong>Remote Field Deployment:</strong> Operated mobile optical telescopes in Kansas under time-critical observation windows.",
        "<strong>Light-Curve Analysis:</strong> Extracted high-precision photometric light curves in Python to determine chords and asteroid silhouette."
      ],
      links: [
        { label: "Watch on YouTube ↗", url: "https://www.youtube.com/watch?v=PZ_gi4IgD5k", primary: true, icon: "fa-brands fa-youtube" }
      ]
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
    image: "assets/img/project_preview/CORA-logo.png",
    imageFit: "contain",
    archived: false,
    tags: ["Ceres Lander", "New Frontiers", "JPL Team X", "Cost Engineering"],
    cardLinks: [
      { label: "JPL PSSS ↗", url: "https://www.jpl.nasa.gov/edu/internships/apply/nasa-science-mission-design-schools/", primary: true, icon: "fa-arrow-up-right-from-square", external: true }
    ],
    modal: {
      modalImage: "assets/img/CORA/PSSS_S2_2024_CORA Fact Sheet.Final_URS329489-1.png",
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
    image: "assets/img/project_preview/SIZLE_MissionPatch_Ver2a.png",
    imageFit: "contain",
    archived: false,
    tags: ["Solar Sail", "Zodiacal Light", "Mission Architecture"],
    cardLinks: [
      { label: "ASCEND Paper ↗", url: "https://doi.org/10.2514/6.2023-4782", primary: true, icon: "fa-newspaper", external: true }
    ],
    modal: null
  },

  // ──────────────────────────────────────────────────────────
  // 3. SMALLSAT ENGINEERING & OPERATIONS
  // ──────────────────────────────────────────────────────────

  // 3.1 NASA NIAC Phase II Sub-cm Debris
  {
    id: "niac-debris",
    category: "smallsat",
    catLabel: "Postdoctoral &amp; Graduate Researcher · NASA NIAC Phase II",
    title: "🛰️ Mapping Sub-cm Orbital Debris in LEO via Plasma Soliton Detection",
    desc: "Applying orbital mechanics to model satellite trajectories and probable debris populations, optimizing 12U CubeSat sensor placement and field-of-view via Monte Carlo simulations to maximize sub-cm space debris detection in LEO.",
    image: "assets/img/project_preview/niac25ph2-hartzell.webp",
    archived: false,
    tags: ["Space Debris", "Orbital Mechanics", "12U CubeSat", "Monte Carlo"],
    cardLinks: [
      { label: "NASA NIAC Study ↗", url: "https://www.nasa.gov/directorates/stmd/niac/niac-studies/addressing-key-challenges-to-mapping-sub-cm-orbital-debris-in-leo-via-plasma-soliton-detection/", primary: false, icon: "fa-arrow-up-right-from-square", external: true }
    ],
    modal: {
      modalImage: "assets/img/project_preview/niac25ph2-hartzell.webp",
      mediaIcon: "fa-satellite",
      mediaText: "NIAC Phase II Concept & Debris Sensing Architecture",
      mediaHint: "[ Media Placeholder: Add NIAC concept graphic to assets/img/project_preview/niac25ph2-hartzell.webp ]",
      heading: "Research Highlights & Approach",
      bullets: [
        "<strong>Precursor Soliton Detection:</strong> Space debris traveling at orbital speeds generates precursor plasma shockwaves (solitons) detectable via Langmuir probes before physical impact.",
        "<strong>Orbital Mechanics & Debris Modeling:</strong> Modeling satellite orbits and probable orbital debris sample trajectories to simulate relative encounter dynamics in Low Earth Orbit.",
        "<strong>Monte Carlo Sensor Optimization:</strong> Optimizing Langmuir probe placement, field-of-view, and satellite configurations via Monte Carlo simulations to maximize detection rates for untrackable sub-cm (1 mm to 10 cm) debris.",
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
    image: "assets/img/IITBSSP/logo.jpeg",
    imageFit: "contain",
    archived: false,
    tags: ["Systems Engineering", "CubeSat", "ISRO PSLV", "TVAC & Shaker"],
    cardLinks: [
      { label: "AIAA SciTech Paper ↗", url: "https://arc.aiaa.org/doi/abs/10.2514/6.2021-0691", primary: true, icon: "fa-newspaper", external: true },
      { label: "SatLab Website ↗", url: "https://www.aero.iitb.ac.in/satlab/", primary: false, icon: "fa-arrow-up-right-from-square", external: true }
    ],
    modal: null
  },

  // 3.3 Pratham Student Satellite
  {
    id: "pratham-satellite",
    category: "smallsat",
    catLabel: "Flight Mission · ISRO PSLV-C35 Launch",
    title: "📡 Pratham — IIT Bombay's First Student Satellite",
    desc: "First student satellite of IIT Bombay, launched aboard ISRO's PSLV-C35 in September 2016. Measured Total Electron Content (TEC) of the ionosphere over India and France.",
    image: "assets/img/IITBSSP/pratham.jpg",
    archived: false,
    tags: ["CubeSat", "ISRO PSLV-C35", "Ionospheric TEC", "Ground Station Network"],
    cardLinks: [
      { label: "SatLab Website ↗", url: "https://www.aero.iitb.ac.in/satlab/", primary: false, icon: "fa-arrow-up-right-from-square", external: true }
    ],
    modal: {
      youtubeId: "aaAPB7YyVh8",
      mediaIcon: "fa-circle-play",
      mediaText: "Pratham Satellite — IIT Bombay Student Satellite Mission Video",
      heading: "Mission & Launch Highlights",
      bullets: [
        "<strong>First Student Satellite of IIT Bombay:</strong> Conceived, designed, built, and qualified by an interdisciplinary team of undergraduate and graduate students.",
        "<strong>Ionospheric TEC Measurement:</strong> Transmitted TEC data at 145.980 MHz to measure ionospheric electron density over India and France.",
        "<strong>ISRO PSLV-C35 Launch:</strong> Successfully launched into a 670 km sun-synchronous orbit on September 26, 2016 aboard ISRO's PSLV-C35."
      ],
      links: [
        { label: "Watch on YouTube ↗", url: "https://www.youtube.com/watch?v=aaAPB7YyVh8", primary: true, icon: "fa-brands fa-youtube" },
        { label: "Visit SatLab Website ↗", url: "https://www.aero.iitb.ac.in/satlab/", primary: false, icon: "fa-arrow-up-right-from-square" }
      ]
    }
  },

  // 3.4 Satellite 101 Wiki
  {
    id: "satellite-wiki",
    category: "smallsat",
    catLabel: "Educational Resource · Open Access",
    title: "📚 Satellite 101 Wiki",
    desc: "Co-authored and maintained an open-access educational wiki covering satellite subsystem design, attitude determination, orbital mechanics, environmental testing, and mission management for student teams worldwide.",
    image: "assets/img/project_preview/pratham_logo.png",
    imageFit: "contain",
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
    tags: ["Trajectory Optimization", "Astrodynamics", "C++", "Genetic Algorithms"],
    cardLinks: [],
    modal: null
  }
];

/* ── Helper: Render Research Projects ────────────────────────── */

function renderProjects(gridContainer, modalsContainer, activeFilter = "all") {
  if (!gridContainer) return;

  const categories = [
    { key: "planetary", title: "Planetary Science &amp; Defense" },
    { key: "mission",   title: "Spacecraft Mission Concepts" },
    { key: "smallsat",   title: "SmallSat Engineering &amp; Operations" }
  ];

  let gridHtml = "";
  let modalsHtml = "";

  categories.forEach(sec => {
    // Filter out archived projects
    let secProjects = PROJECTS.filter(p => !p.archived && p.category === sec.key);
    if (activeFilter !== "all") {
      secProjects = secProjects.filter(p => p.category === activeFilter);
    }

    if (secProjects.length === 0) return;

    gridHtml += `
      <div class="section-header" style="margin-top: 1rem; margin-bottom: 1.8rem;">
        <p class="section-label">${sec.title}</p>
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

      // Video, Thumbnail Image or Gradient Fallback Header
      const cardYoutubeId = proj.youtubeId;
      const imgClass = proj.imageFit === "contain" ? "card-img card-img-contain" : "card-img";
      const headerMediaHtml = cardYoutubeId
        ? `<div class="card-video-wrap" style="position: relative; aspect-ratio: 16 / 9; width: 100%; overflow: hidden; background: #000; border-bottom: 1px solid var(--cream-border); cursor: pointer;" onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/${cardYoutubeId}?autoplay=1\' title=\'${proj.title.replace(/'/g, "&#39;")}\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' referrerpolicy=\'strict-origin-when-cross-origin\' allowfullscreen style=\'position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;\'></iframe>'">
            <img src="https://i.ytimg.com/vi/${cardYoutubeId}/hqdefault.jpg" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);">
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.25);">
              <div style="width: 52px; height: 52px; border-radius: 50%; background: #ff0000; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                <i class="fa-solid fa-play" style="color: #ffffff; font-size: 1.25rem; margin-left: 3px;"></i>
              </div>
            </div>
            <span style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.85); color: #ffffff; font-size: 0.72rem; font-weight: 600; padding: 3px 8px; border-radius: 4px; display: flex; align-items: center; gap: 5px;">
              <i class="fa-brands fa-youtube" style="color: #ff0000; font-size: 0.85rem;"></i> Play Video
            </span>
           </div>`
        : (proj.image
            ? (proj.detailUrl
                ? `<a href="${proj.detailUrl}" class="card-img-wrap"><img src="${proj.image}" alt="${proj.title}" class="${imgClass}"></a>`
                : `<div class="card-img-wrap"><img src="${proj.image}" alt="${proj.title}" class="${imgClass}"></div>`)
            : `<div class="card-img-gradient"></div>`);

      const cardTitleHtml = proj.detailUrl
        ? `<h3 class="card-title"><a href="${proj.detailUrl}" style="color: inherit; text-decoration: none;">${proj.title}</a></h3>`
        : `<h3 class="card-title">${proj.title}</h3>`;

      gridHtml += `
        <article class="card fade-up" data-category="${proj.category}">
          ${headerMediaHtml}
          <div class="card-body">
            <p class="card-cat">${proj.catLabel}</p>
            ${cardTitleHtml}
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
        const modalYoutubeId = m.youtubeId || proj.youtubeId;
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
                ${modalYoutubeId ? `
                  <div class="video-embed-box" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; margin-bottom: 1.25rem; background: #000; cursor: pointer;" onclick="this.innerHTML='<iframe src=\'https://www.youtube.com/embed/${modalYoutubeId}?autoplay=1\' title=\'${proj.title.replace(/'/g, "&#39;")}\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\' referrerpolicy=\'strict-origin-when-cross-origin\' allowfullscreen style=\'position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;\'></iframe>'">
                    <img src="https://i.ytimg.com/vi/${modalYoutubeId}/hqdefault.jpg" alt="${proj.title}" style="width: 100%; height: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); object-fit: cover; filter: brightness(0.85);">
                    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3);">
                      <div style="width: 58px; height: 58px; border-radius: 50%; background: #ff0000; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,0.6);">
                        <i class="fa-solid fa-play" style="color: #ffffff; font-size: 1.4rem; margin-left: 4px;"></i>
                      </div>
                    </div>
                    <span style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.85); color: #ffffff; font-size: 0.75rem; font-weight: 600; padding: 4px 10px; border-radius: 4px; display: flex; align-items: center; gap: 6px;">
                      <i class="fa-brands fa-youtube" style="color: #ff0000; font-size: 0.9rem;"></i> Click to Play Video
                    </span>
                  </div>
                ` : (m.modalImage ? `
                  <div class="modal-media-image-wrap" style="width: 100%; border-radius: 8px; overflow: hidden; margin-bottom: 1.25rem; border: 1px solid var(--cream-border); background: #ffffff;">
                    <a href="${m.modalImage}" target="_blank" title="Click to view full image in new tab">
                      <img src="${m.modalImage}" alt="${proj.title}" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                    </a>
                  </div>
                ` : `
                  <div class="media-placeholder-box">
                    <i class="fa-solid ${m.mediaIcon} media-placeholder-icon"></i>
                    <div class="media-placeholder-text">${m.mediaText}</div>
                    <div class="media-placeholder-hint">${m.mediaHint || ''}</div>
                  </div>
                `)}

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
