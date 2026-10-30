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
      title: "Map and Estimate Builder",
      concept:
        "Find past contracts on a map, study an item’s price history, and turn a plain-language project description into a priced bid item list.",
      status: "complete",
      date: "",
      findings:
        "Historical bids became searchable, comparable, and location-adjusted in a few clicks. Accuracy is not yet measured, and lump-sum items often lack comparables.",
      link: "#demo-1",
    },
    {
      title: "Bid Relevance Evaluation",
      concept:
        "Test whether the agent can find relevant historical bids for 10 example projects, compared against a manual answer key and a keyword search.",
      status: "complete",
      date: "",
      findings:
        "The agent found 46% and 50% of relevant bids across two runs, versus 25% for keyword search, short of our 80% target.",
      link: "#demo-2",
    },
    {
      title: "Relevance Improvements",
      concept:
        "Improve how the agent weighs project type, location, and bid date, rebuild the answer key from real Caltrans data, and rerun the Demo 2 test on top-3 suggestions.",
      status: "in-progress",
      date: "",
      findings: "",
      link: "",
    },
    {
      title: "Subcontractor Pricing Test",
      concept:
        "Subcontractors price specialty items on past contracts with BidGrid and with their usual process. We compare the time taken, and check BidGrid’s prices against the low bid and engineer’s estimate.",
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
    {
      id: "midquarter",
      title: "Midquarter analysis",
      stats: [],
      sections: [
        {
          heading: "First two experiments",
          body: [
            "In Week 2 we claimed that an agent-assisted tool that retrieves comparable past bid items, adjusts them for location and site conditions, and presents them as editable price ranges can measurably reduce estimate error on public heavy civil projects. We proposed two tests for this claim: relevance, and usefulness as measured by time saved. For relevance, we aimed for at least 80% of the agent’s suggested bids to be relevant, meaning they matched the bids we picked by hand. We judged relevance first by type of work, preferring projects with similar tasks. Then location: preferring bids in the same cluster, then nearby bids, and at minimum the same region (North, South, etc.). Then when too few relevant bids existed, giving distance less weight. For usefulness, subcontractors would price their specialty items on past contracts with our tool and with their usual process, and we would compare the time each took.",
            "Demo 1 showed that the tool itself could be built. Our tool, BidGrid, turned bid tabs into a searchable map that takes a plain-language project description and returns a priced item list that uses comparables within 50 miles and five years. However, we ran this on 233 synthetic contracts from our own seeded generator, so there was no testing for relevance or accuracy.",
            "Demo 2 tested relevance directly. For 10 project locations, we hand-picked the two or three most relevant past bids and ran the agent twice to gauge how many of those same bids it would find on its own. In the first run the agent matched 11 of 24 (45.8%) and 12 of 24 on the second (50%), while a keyword search matched 6 of 24 (25%). The agent doubled the baseline simple search but fell well short of the 80% target, so by our own criterion the claim is weakened. We concluded that agent failures include bids that were too old, bids from less relevant locations or with less comparable items, bids that were simply irrelevant, and bids that were superficially similar but irrelevant.",
            "As of now, the relevance claim is not supported and the time-savings claim is untested. Our experiments show that we have a usable tool, but not yet a reliable way to judge it, since our answer key rested on our own judgment and our tool still ran on synthetic data. Looking ahead, we will work to incorporate real Caltrans bid results to replace the synthetic data and score the agent against historical bids.",
          ],
        },
        {
          heading: "Industry practitioner feedback",
          body: ["TODO: Summarize feedback from an industry practitioner."],
        },
        {
          heading: "Class feedback",
          body: [
            "While the feedback we received praised one part of our evaluation strategy, the keyword-search baseline comparison, our ground truth was the subject of much criticism, as we initially feared. The main problem pointed out was that our own team’s judgement was being used to determine the ground truth of what was considered a “relevant” bid. Despite attempting to adhere to a grading criteria, the method is fraught with subjectivity and variance and the self-grading results in a lack of independent evaluation of our model.",
            "This criticism heavily impacts the ability of our demo’s ability to argue in favor of our thesis, that being that our model can provide relevant bids in a manner faster and, most importantly, more accurately than a human. For this reason we unfortunately have to conclude that while we believe our model to be promising, the flaws in our evaluation method means we must defer to the null hypothesis of our thesis, that being there is not significant evidence our model achieves better than human accuracy.",
            "To address this feedback we’ll be moving our evaluation methodology to be backed by historical data and a mathematical scoring method as opposed to loose judgement based on a grading rubric. Enabled by our next model being able to ingest real data, we will be able to evaluate the model’s results by looking at real historical bids. This provides the basis for our ground truth. We’ll be comparing the bid-items and their prices of the input bid and comparing them against the items of our model’s suggested bids. This way, we can use a mathematical scoring method to assign each suggestion a score as a proxy for relevance. We hope that this evaluation model will be more accurate, repeatable, understandable, and relevant to the needs of our stakeholders and allow us to concretely assess whether or not our thesis holds true or false.",
          ],
        },
        {
          heading: "Human factors in the coordination problem",
          body: [
            "One problem with construction cost estimation is that different people may have different ideas about which past projects are useful. Even if two projects have similar materials, their costs can be different because of location, size, or working conditions. Engineers and subcontractors need to use their own experience when comparing prices. This can also make communication harder when people working on the same project have different opinions.",
            "Another issue is whether people can trust the results from our tool. In Demo 2, we found that BidGrid sometimes suggested projects that looked similar but were not actually relevant. If this happens often, users may not trust the tool or want to use it. We think it is important that users can see where the prices come from and decide whether those prices make sense for their own projects.",
            "When working with our initial evidence, we mainly looked at the differences between historical bid prices and engineer estimates. At that time, we thought having access to more historical data would help people make better estimates. But after our two demos, we realized that having more data does not always mean better results. We still need to improve how we select relevant projects and test whether our tool is actually helpful. We believe BidGrid could make the process easier, but it should support engineers’ decisions rather than replace their experience.",
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

  lastUpdated: "2026-10-29",
};
