# Sub Team 3: Public Pricing Knowledge, Made Usable

**Live site: https://calchen11.github.io/info492-capstone/**

This is the team site for Sub Team 3's INFO 492 capstone (Autumn 2026). It presents our thesis, the data we work from, who our tool serves, and the four demos we're building over the quarter.

## The problem

Public agencies publish detailed construction pricing, but it rarely reaches estimators in a usable form. Caltrans releases item-level results for every contract it awards, including each bidder's unit prices and the engineer's estimate. That data comes out one contract at a time, largely as PDFs, and raw historical prices miss context like site access, terrain, and local labor.

## Our thesis

> An agent-assisted tool that retrieves comparable past bid items, adjusts them for location and site conditions, and presents them as editable price ranges can measurably reduce estimate error on public heavy civil projects.

We test this two ways:

- **Accuracy.** Hold out past Caltrans contracts and compare our estimates to each contract's three lowest bids. Our baselines are the engineer's estimate and unadjusted historical averages.
- **Usefulness.** Have subcontractors price their specialty items with our tool and with their usual process, and measure the time each takes.

## Data

- [Caltrans Contract Cost Data](https://sv08data.dot.ca.gov/): over 3 million item-level bid prices from 1993 to the present.
- [Caltrans Bid Summary Results](https://ppmoe.dot.ca.gov/): per-contract descriptions, locations, engineer's estimates, every bidder's item prices, and listed subcontractors.

## Demos

| # | Demo | What it does |
|---|------|--------------|
| 1 | Historical Price Lookup | Enter an item code, quantity, and project details to get the most relevant historical prices. |
| 2 | Map-Based Lookup | Pick a location to compare similar nearby past projects and their costs. |
| 3 | Estimate Review | Flag items priced outside their expected historical ranges. |
| 4 | Bid Builder | Describe a project to get a drafted bid item breakdown the estimator can edit. |

Progress and findings for each demo are posted on the [live site](https://calchen11.github.io/info492-capstone/#experiments).

## Team

Ethan Kawahara · Calvin Chen · Tony Wu · Kaige Cheng

---

## About this repo

The site is plain HTML, CSS, and JavaScript, with no build step. All page content lives in [`js/content.js`](js/content.js).

To run it locally:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Changes pushed to `main` are deployed automatically through GitHub Pages.
