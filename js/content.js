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
    name: "Sub Team 3",
    tagline:
      "Public construction pricing is published but not usable. We're building an agent-assisted tool that turns past Caltrans bids into grounded, editable price ranges.",
    course: "INFO 492 Capstone",
    quarter: "Autumn 2026",
    googleDocUrl:
      "https://docs.google.com/document/d/1dkDYg9ZpvF01frZfb1RdrT_merclshbYzT-S-lli5bg/edit?usp=sharing",
  },

  thesis: {
    // The single, testable claim, shown as a highlighted callout.
    claim:
      "An agent-assisted tool that retrieves comparable past bid items, adjusts them for location and site conditions, and presents them as editable price ranges can measurably reduce estimate error on public heavy civil projects.",
    // Full thesis (~500 words). Each string becomes its own paragraph.
    body: [
      "Public agencies publish detailed construction pricing, but it rarely reaches estimators in a usable form. Caltrans releases item-level results for its contracts, including every bidder’s unit price and the engineer’s estimate, but one contract at a time, and largely as PDFs.",
      "Caltrans contract 05-1P2404, a bridge protection project in Santa Cruz County, shows the problem. The engineer’s estimate was $791,928.60, but the low bid was $508,374.40, or 35.81% under, and seven bids ranged up to $964K. The disagreement was uneven. Measured items were priced consistently: hydraulic biotic growth medium ranged from $0.82 to $1.35 per square foot. Loosely scoped items varied widely: temporary irrigation, a lump sum, ranged from $5,800 to $15,000, and time-related overhead from $250 to $7,110 per working day.",
      "Historical prices alone also miss context. A unit price reflects site access, terrain, local labor, and contractor travel. Existing services like RSMeans apply city-level cost indexes, which cannot distinguish a flat urban site from a creek bed on a mountain highway. The Boulder Creek project required a creek diversion and wildlife exclusion, and mobilization ranged from $35,000 to $185,000. A naive average would treat it like any job with the same item codes.",
      "Our claim is testable in two ways. First, for accuracy, we will hold out past Caltrans contracts and compare our estimates to each contract’s three lowest bids. Our baselines are the engineer’s estimate and unadjusted historical averages, and we will report lump sum and unit-priced items separately. Second, for usefulness, we will work with subcontractors to price their specialty items on past contracts, once with our tool and once with their usual process, and measure the time each takes. If our approach does not beat both accuracy baselines, or does not save subcontractors time, the claim is weakened.",
      "We recognize that these are estimates, not exact prices. Contractors sometimes shift money between items for strategic reasons, so item prices are noisy, and Caltrans data may not transfer to local or private work. The tool’s value is speed and grounding: it gives estimators fast ballpark numbers rooted in real bid data, which they accept, edit, or reject using their own judgment.",
    ],
    // Sources cited in the thesis. { text, url } and url is optional.
    references: [
      { text: "Caltrans Contract Cost Data", url: "https://sv08data.dot.ca.gov/" },
      { text: "Caltrans Bid Summary Results", url: "https://ppmoe.dot.ca.gov/" },
      { text: "Caltrans contract 05-1P2404, bridge protection, Santa Cruz County", url: "" },
    ],
  },

  lens: {
    datasetName: "Caltrans Contract Cost Data + Bid Summary Results",
    datasetUrl: "https://sv08data.dot.ca.gov/",
    description:
      "The Contract Cost Data database holds over 3 million item-level bid prices from 1993 to the present, searchable by item code, district, year, quantity, and unit. The Bid Summary Results page publishes each contract's description, location code, engineer's estimate, every bidder's item prices, and listed subcontractors. We will parse the bid summaries into tables, join them to the cost database by item code, and derive location features (district, county, route, terrain, distance to population centers) from each contract's location code.",
    // Leave as "" if no synthetic data is needed (the block will hide).
    synthetic: {
      approach:
        "Caltrans project descriptions are only one line long, such as “Place bridge scour protection.” To test item suggestions, we will use a language model to generate richer descriptions from held-out contracts' actual item lists, then measure how well our tool recovers the true items.",
      justification:
        "Pricing needs no synthetic data, since there are plenty of real bids. Only project descriptions are generated. Because generated descriptions may be clearer than real ones, we will also test on the original Caltrans text.",
    },
  },

  posture: {
    intro:
      "We focus on the bidding stage, before construction starts. A shared source of historical item prices helps general contractors and subcontractors prepare competitive, defensible numbers.",
    parties: [
      {
        name: "General Contractor",
        short: "GC",
        role: "Primary user. Prices the full bid schedule and checks subcontractor quotes against historical prices.",
      },
      {
        name: "Subcontractors",
        short: "Subs",
        role: "Primary user. Prices only specialty items such as traffic control, erosion control, or landscaping, often quoting the same work to several GCs on one job.",
      },
      {
        name: "Design Team",
        short: "A/E",
        role: "Agency engineers and consultants who prepare the plans, specifications, and quantities that define scope.",
      },
      {
        name: "Owner",
        short: "Caltrans",
        role: "Publishes the bid items, quantities, and engineer’s estimate.",
      },
    ],
  },

  // The four demos. status: "planned" | "in-progress" | "complete"
  demos: [
    {
      title: "Historical Price Lookup",
      concept:
        "Provide an item code, quantity, and project details to get the historical prices most relevant to the project.",
      status: "planned",
      date: "",
      findings: "",
      link: "",
    },
    {
      title: "Map-Based Lookup",
      concept: "Input a location to find and compare similar nearby past projects and their costs.",
      status: "planned",
      date: "",
      findings: "",
      link: "",
    },
    {
      title: "Estimate Review",
      concept: "Flag items that fall outside their expected ranges based on historical data.",
      status: "planned",
      date: "",
      findings: "",
      link: "",
    },
    {
      title: "Bid Builder",
      concept: "Describe the project to get a drafted bid item breakdown that the estimator edits.",
      status: "planned",
      date: "",
      findings: "",
      link: "",
    },
  ],

  // photo: path like "assets/jane.jpg" (optional; initials are used otherwise)
  members: [
    { name: "Ethan Kawahara", role: "", photo: "", linkedin: "", email: "" },
    { name: "Calvin Chen", role: "", photo: "", linkedin: "", email: "" },
    { name: "Tony Wu", role: "", photo: "", linkedin: "", email: "" },
    { name: "Kaige Cheng", role: "", photo: "", linkedin: "", email: "" },
  ],

  lastUpdated: "2026-10-08",
};
