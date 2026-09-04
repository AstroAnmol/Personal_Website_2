/* ============================================================
   news-data.js — Single source of truth for all news items
   ============================================================
   To add a new item, prepend an object to the NEWS array below.
   The homepage automatically shows the first 5 items.
   news.html shows all of them.

   Fields:
     date    — Display date string (e.g. "Jul 24, 2026")
     sortKey — ISO date for sort order (e.g. "2026-07-24")
     emoji   — Optional leading emoji
     html    — Inner HTML for the news text (can include <em>, <strong>, <a>)
     tag     — Optional category tag: "paper" | "talk" | "award" | "milestone" | "service" | "misc"
   ============================================================ */

const NEWS = [
  {
    date: "Sep 4, 2026",
    sortKey: "2026-09-04",
    emoji: "🎉",
    tag: "paper",
    html: `Journal article <em>"Investigating the Role of Magnetic Cohesion in Avalanching on 16-Psyche: A Discrete Element Modeling Approach"</em> accepted for publication in <strong>The Planetary Science Journal (PSJ)</strong>!`
  },
  {
    date: "Aug 24, 2026",
    sortKey: "2026-08-24",
    emoji: "🚀",
    tag: "milestone",
    html: `Started as a <strong>Postdoctoral Associate</strong> in Aerospace Engineering at the University of Maryland (UMD), working with Prof. Christine Hartzell!`
  },
  {
    date: "Aug 20, 2026",
    sortKey: "2026-08-20",
    emoji: "✍️",
    tag: "milestone",
    html: `Launched <em><a href="https://smallbodies.substack.com/" target="_blank">Space Rocks</a></em> — an independent Substack publication dedicated to deep dives on small bodies, mission physics, orbital mechanics, and global planetary defense frameworks!`
  },
  {
    date: "May 13, 2026",
    sortKey: "2026-05-13",
    tag: "talk",
    html: `Presented my thesis work <em>"Beyond Gravity: How Magnetic Interactions Alter the Fluidity of Metallic Asteroid Regolith"</em> at the 2026 Research Symposium on Environmental and Applied Fuild Dynamics at JHU, MD.`

  },
  {
    date: "May 2026",
    sortKey: "2026-05-01",
    emoji: "📄",
    tag: "paper",
    html: `Journal article <em>"An Experimentally Validated Magnetic Force Model for Discrete Element Modeling of Paramagnetic Granular Media"</em> published in <strong>Granular Matter</strong>. <a href="https://doi.org/10.1007/s10035-026-01643-x" target="_blank">DOI →</a>`
  },
  {
    date: "Mar 25, 2026",
    sortKey: "2026-03-25",
    emoji: "🎓",
    tag: "milestone",
    html: `Successfully defended my dissertation titled <em>"Role of Magnetic Force in Avalanching on Metallic Asteroids"</em> and am now a Doctor of Philosophy!`
  },
  {
    date: "Jan 12, 2026",
    sortKey: "2026-01-12",
    emoji: "🎤",
    tag: "talk",
    html: `Gave a lightning talk on <em>"Unlocking Metallic Worlds: Granular Mechanics on Asteroid Psyche"</em> at NASA's Small Bodies Assessment Group (SBAG) January 2026 meeting.`
  },
  {
    date: "Jul 21, 2025",
    sortKey: "2025-07-21",
    emoji: "🎤",
    tag: "talk",
    html: `Gave an invited talk on my research at my alma mater, the Aerospace Department of <strong>IIT Bombay</strong>.`
  },
  {
    date: "Oct 8, 2024",
    sortKey: "2024-10-08",
    emoji: "🎤",
    tag: "talk",
    html: `Gave a talk on <em>"DEM Simulations of avalanching of metallic regolith under the influence of magnetic forces"</em> at the annual <strong>Division of Planetary Science (DPS)</strong> meeting of AAS.`
  },
  {
    date: "Oct 7, 2024",
    sortKey: "2024-10-07",
    emoji: "🪑",
    tag: "service",
    html: `Chaired the <em>"Lab Studies, Meteorites, and Instrument/Mission Development – Part 2"</em> session at DPS 2024.`
  },
  {
    date: "Jul 2024",
    sortKey: "2024-07-01",
    emoji: "🚀",
    tag: "milestone",
    html: `Selected for the <strong>JPL Planetary Science Summer School (PSSS)</strong> as Cost Lead for the CORA mission concept — a New Frontiers class lander/hopper to Ceres' Occator Crater.`
  },
  {
    date: "Feb 2023",
    sortKey: "2023-02-01",
    emoji: "🔭",
    tag: "milestone",
    html: `Deployed mobile telescopes to Kansas as part of the <strong>Lucy Stellar Occultation Campaign</strong> (Southwest Research Institute). Confirmed detection of Trojan asteroid Polymele via light-curve analysis.`
  },
  {
    date: "Jul 2023",
    sortKey: "2023-07-01",
    emoji: "📄",
    tag: "paper",
    html: `Journal article <em>"Development of an Empirical Model of the Force between Paramagnetic Particles in Uniform Magnetic Field on M-type Asteroids"</em> published in <strong>The Planetary Science Journal</strong>. <a href="https://doi.org/10.3847/PSJ/ace323" target="_blank">DOI →</a>`
  }
];

/* ── Helpers ─────────────────────────────────────────────────── */

const TAG_LABELS = {
  paper:     { label: "Publication", color: "#a53f5b" },
  talk:      { label: "Talk",        color: "#f47c33" },
  award:     { label: "Award",       color: "#f9a000" },
  milestone: { label: "Milestone",   color: "#ef5966" },
  service:   { label: "Service",     color: "#592651" },
  misc:      { label: "News",        color: "#302144" }
};


/**
 * Render news items into a container element.
 * @param {HTMLElement} container  — Target DOM element
 * @param {number|null} limit      — Max items to render (null = all)
 * @param {string|null} filterTag  — Only show items with this tag (null = all)
 */
function renderNews(container, limit = null, filterTag = null) {
  if (!container) return;

  // Sort by sortKey descending (newest first)
  let items = [...NEWS].sort((a, b) => b.sortKey.localeCompare(a.sortKey));

  if (filterTag) {
    items = items.filter(i => i.tag === filterTag);
  }

  if (limit) {
    items = items.slice(0, limit);
  }

  container.innerHTML = items.map(item => {
    const tagMeta = TAG_LABELS[item.tag] || TAG_LABELS.misc;
    const tagPill = item.tag
      ? `<span class="news-tag-pill" style="background: ${tagMeta.color}18; color: ${tagMeta.color}; border: 1px solid ${tagMeta.color}40;">${tagMeta.label}</span>`
      : "";

    return `
      <div class="news-item">
        <div class="news-date">${item.date}</div>
        <div class="news-body">
          ${tagPill}
          <p class="news-text">${item.emoji ? item.emoji + " " : ""}${item.html}</p>
        </div>
      </div>`;
  }).join("");
}
