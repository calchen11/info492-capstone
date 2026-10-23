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
    name: "BidGrid",
    tagline:
      "Public construction pricing is published but not usable. We're building an agent-assisted tool that turns past Caltrans bids into grounded, editable price ranges.",
    course: "INFO 492 Capstone",
    quarter: "Au 26 - Team 3",
    googleDocUrl:
      "https://docs.google.com/document/d/1dkDYg9ZpvF01frZfb1RdrT_merclshbYzT-S-lli5bg/edit?usp=sharing",
  },

  thesis: {
    // The single, testable claim, shown as a highlighted callout.
    claim:
      "We claim that an agent-assisted tool that retrieves comparable past bid items, adjusts them for location and site conditions, and presents them as editable price ranges, can measurably reduce estimate error on public heavy civil projects.",
    // Full thesis (~500 words). Each string becomes its own paragraph.
    body: [
      "Public agencies publish detailed construction pricing, but it rarely reaches estimators in a usable form. Caltrans releases item-level results for its contracts, including every bidder’s unit price and the engineer’s estimate, but one contract at a time, and largely as PDFs.",
      "Caltrans contract 05-1P2404, a bridge protection project in Santa Cruz County, shows the problem. The engineer’s estimate was $791,928.60, but the low bid was $508,374.40, or 35.81% under, and seven bids ranged up to $964K. The disagreement was uneven. Measured items were priced consistently: hydraulic biotic growth medium ranged from $0.82 to $1.35 per square foot. Loosely scoped items varied widely: temporary irrigation, a lump sum, ranged from $5,800 to $15,000, and time-related overhead from $250 to $7,110 per working day.",
      "Historical prices alone also miss context. A unit price reflects site access, terrain, local labor, and contractor travel. Existing services like RSMeans apply city-level cost indexes, which cannot distinguish a flat urban site from a creek bed on a mountain highway. The Boulder Creek project required a creek diversion and wildlife exclusion, and mobilization ranged from $35,000 to $185,000. A naive average would treat it like any job with the same item codes.",
      "Our claim is testable in two ways. First, for relevance, our agent builds an estimate from a project description using similar past bids, and we expect it to gather relevant historical bids faster and more easily than doing it by hand. For each test project, we will count how many of the agent’s top 3 suggested bids are actually relevant. We set our target before running anything: at least 80% of suggested bids must be relevant. Second, for usefulness, we will work with subcontractors to price their specialty items on past contracts, once with our tool and once with their usual process, and measure the time each takes. If fewer than 80% of suggested bids are relevant, or the tool does not save subcontractors time, the claim is weakened.",
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
    artifacts: [
      { name: "Bid Item Schedules", about: "The list of items to be priced." },
      { name: "Engineer’s Estimates", about: "Caltrans’s own cost estimate for the job." },
      { name: "Bid Results", about: "The published prices from every bidder." },
      { name: "Subcontractor Listings", about: "The subcontractors each bidder plans to use." },
      { name: "Bid-Phase RFIs", about: "Questions bidders ask Caltrans to clarify unclear work. Our thesis links price differences to vaguely defined items." },
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

  // Demo write-ups, each shown as its own section/tab. `id` must match the
  // section id in index.html. stats: [{ value, label }] (optional).
  demoReports: [
    {
      id: "demo-1",
      title: "Turning past bids into a priced estimate",
      stats: [],
      sections: [
        {
          heading: "What our demo tests",
          body: [
            "Our first demo focuses on the core of public pricing knowledge being published but not usable. We want to test if our tool can turn a pile of past bid tabs into a usable, location-adjusted unit price range for different bid items. Our tool BidGrid lets users find past Caltrans contracts on a map, study an item’s price history across years and districts, then build a new estimate. In the estimate builder we use plain language to catalog items and price each one from comparables within 50 miles and five years. For this demo we used synthetic data. We had a seeded generator produce 233 unique contracts across six districts from 2016 to 2026, modeling escalation, district cost factors, and bidder spread.",
          ],
        },
        {
          heading: "What happened",
          body: [
            "The demo starts on the map with options to filter by district, filter by item family, and zoom, to open existing contract summaries including details on dates, type of work, bidders, and line items. Dropping a pin on a specific location starts a bid estimation. Here users can provide a description of what they are building along with dimensions. From there they will be asked to confirm additional details and be suggested related items. After obtaining all necessary information a bid item table is returned with codes, quantities, unit prices and totals.",
            "Each bid item returned has a simple dropdown containing comparable bids with the corresponding contract’s information. Clicking on the item itself presents in-depth details on the item family’s current average price, price changes over time, a map of contracts with that item, and a line items list of that item with bidder information. From there, a bidder’s contract history, locations and pricing position can also be viewed. Once done, estimates can be saved as drafts and accessed later.",
          ],
        },
        {
          heading: "What it says about our thesis",
          body: [
            "The demo shows that the first half of our thesis can be addressed. Historical bid data that is hard to use as published tables becomes searchable, comparable, and location-adjusted in a few clicks. An estimator can go from a plain-language description to a priced bid item list without leaving the tool.",
            "However, we still need to show that these prices reduce estimate error. We have not measured accuracy, and because the data is synthetic, results would partly reflect our own generator’s assumptions. The tool also exposes a gap we expected. Lump-sum items such as mobilization often have no comparable projects of similar size, which matches the wide lump-sum spread we saw on Caltrans 05-1P2404.",
          ],
        },
        {
          heading: "Moving forward",
          body: [
            "We will iterate on the tool and test it against our claim. We will hold out past contracts, compare BidGrid’s prices to the low bid and the engineer’s estimate, and then repeat the test on real Caltrans Contract Cost Data.",
          ],
        },
      ],
    },
    {
      id: "demo-2",
      title: "Measuring bid relevance",
      stats: [
        { value: "45.8%", label: "AI run 1 (11 of 24)" },
        { value: "50%", label: "AI run 2 (12 of 24)" },
        { value: "25%", label: "Keyword search (6 of 24)" },
        { value: "80%", label: "Target relevance rate" },
      ],
      sections: [
        {
          heading: "What the demo tests",
          body: [
            "For Demo 2, our team focuses on evaluating how well BidGrid can find relevant historical construction bids using Caltrans data. Our goal is to help subcontractors find useful pricing information without spending too much time searching through different contracts and documents.",
            "In Demo 1, we showed how our tool could make historical bid data easier to search and compare. However, we did not have a clear way to measure how well the agent performed. For Demo 2, we wanted to test whether the AI agent could identify relevant bids for a specific construction project.",
          ],
        },
        {
          heading: "Evaluation method",
          body: [
            "We tested BidGrid using 10 different construction project examples with different locations and project types. We evaluated how many of the agent’s suggested bids matched our answer key. Our target was an 80% relevance rate.",
            "We ran the AI agent twice and compared its results with a basic keyword search without AI. The answer key was created manually based on project type, location, and bid date.",
          ],
        },
        {
          heading: "What happened",
          body: [
            "The first AI run found 11 out of 24 relevant bids (45.8%), and the second run found 12 out of 24 (50%). In comparison, the basic keyword search found only 6 out of 24 (25%). Although the AI performed better than the basic search method, it did not reach our 80% target.",
            "We also found some problems with the results. The agent sometimes suggested bids that looked similar but were not actually relevant. Other problems included outdated bids and bids from less relevant locations.",
            "One important limitation is that our ground truth was based on manual judgment. This means our evaluation results may not fully reflect the agent’s actual performance.",
          ],
        },
        {
          heading: "What this means for our thesis",
          body: [
            "The results partially support our idea that AI can help subcontractors find useful historical bid information. Both AI runs performed better than the basic keyword search, suggesting that considering project details and location may improve search results.",
            "However, the agent still made mistakes and did not meet our success target. We need to improve how it selects relevant bids before we can consider it reliable.",
          ],
        },
        {
          heading: "Next steps",
          body: [
            "For Demo 3, we plan to improve how the agent considers project type, location, and bid dates. We also want to improve our ground truth using more reliable historical data and collect feedback from a real stakeholder.",
          ],
        },
      ],
    },
  ],

  // photo: path like "assets/jane.jpg" (optional; initials are used otherwise)
  members: [
    { name: "Ethan Kawahara", role: "", photo: "", linkedin: "", email: "" },
    { name: "Calvin Chen", role: "", photo: "", linkedin: "", email: "" },
    { name: "Tony Wu", role: "", photo: "", linkedin: "", email: "" },
    { name: "Kaige Cheng", role: "", photo: "", linkedin: "", email: "" },
  ],

  lastUpdated: "2026-10-23",
};
