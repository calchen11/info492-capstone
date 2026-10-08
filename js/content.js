/*
 * ============================================================
 *  SITE CONTENT — edit this file to update the website.
 * ============================================================
 *  Any string starting with "TODO" is shown on the site with a
 *  dashed "placeholder" style so it's easy to spot what's missing.
 *  Replace it with real text and the styling goes away.
 *
 *  Empty strings ("") or empty lists ([]) hide optional blocks.
 */
window.SITE_CONTENT = {
  team: {
    name: "TODO: Team Name",
    tagline:
      "TODO: One-sentence version of our thesis — where construction information flow breaks down and what we'll test.",
    course: "INFO 492 Capstone",
    quarter: "Autumn 2026",
    googleDocUrl: "", // TODO: paste the Google Doc deliverable link
  },

  thesis: {
    // The single, testable claim, shown as a highlighted callout.
    claim:
      "TODO: Our testable claim, e.g. “RFI response latency is driven by ambiguity in reference documents, and agent-assisted reference resolution can cut it.”",
    // Full thesis (~500 words). Each string becomes its own paragraph.
    body: [
      "TODO: Paragraph 1: the problem. Where does construction information flow break down, and why does it matter?",
      "TODO: Paragraph 2: grounding in the readings and research. What does the literature say?",
      "TODO: Paragraph 3: our claim and how we will test it across four demos.",
      "TODO: Paragraph 4: what success looks like, i.e. which metrics would confirm or refute the claim.",
    ],
    // Sources cited in the thesis. { text, url } and url is optional.
    references: [
      { text: "TODO: Reference 1 (author, year, title)", url: "" },
      { text: "TODO: Reference 2", url: "" },
    ],
  },

  lens: {
    datasetName: "TODO: Public dataset name",
    datasetUrl: "", // TODO: link to the dataset
    description:
      "TODO: What the dataset contains, its size and coverage, and why it fits our thesis.",
    // Leave as "" if no synthetic data is needed (the block will hide).
    synthetic: {
      approach: "TODO: How we'll generate synthetic data (if needed).",
      justification: "TODO: Why synthetic data is needed and why this approach is valid.",
    },
  },

  posture: {
    intro:
      "TODO: One or two sentences on the coordination problem we're focused on and who it affects.",
    parties: [
      { name: "General Contractor", short: "GC", role: "TODO: GC's role in our scenario" },
      { name: "Subcontractors", short: "Subs", role: "TODO: Subs' role in our scenario" },
      { name: "Design Team", short: "A/E", role: "TODO: Design team's role in our scenario" },
      { name: "Owner", short: "Owner", role: "TODO: Owner's role in our scenario" },
    ],
    // Set inScope to true for the artifacts your team is working with.
    artifacts: [
      { name: "RFIs", inScope: true },
      { name: "Submittals", inScope: false },
      { name: "Change Orders", inScope: false },
      { name: "Daily Reports", inScope: false },
      { name: "Inspection Records", inScope: false },
    ],
  },

  // The four demos. status: "planned" | "in-progress" | "complete"
  demos: [
    {
      title: "Demo 1",
      concept: "TODO: One-line demo concept",
      status: "planned",
      date: "",
      findings: "",
      link: "",
    },
    {
      title: "Demo 2",
      concept: "TODO: One-line demo concept",
      status: "planned",
      date: "",
      findings: "",
      link: "",
    },
    {
      title: "Demo 3",
      concept: "TODO: One-line demo concept",
      status: "planned",
      date: "",
      findings: "",
      link: "",
    },
    {
      title: "Demo 4",
      concept: "TODO: One-line demo concept",
      status: "planned",
      date: "",
      findings: "",
      link: "",
    },
  ],

  // photo: path like "assets/jane.jpg" (optional; initials are used otherwise)
  members: [
    { name: "TODO: Member 1", role: "TODO: Role", photo: "", linkedin: "", email: "" },
    { name: "TODO: Member 2", role: "TODO: Role", photo: "", linkedin: "", email: "" },
    { name: "TODO: Member 3", role: "TODO: Role", photo: "", linkedin: "", email: "" },
    { name: "TODO: Member 4", role: "TODO: Role", photo: "", linkedin: "", email: "" },
  ],

  lastUpdated: "2026-10-08",
};
