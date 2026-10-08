# INFO 492 Capstone Team Site

A one-page static site that presents our team, thesis, project lens, coordination posture, and four demos. It uses plain HTML/CSS/JS, so there's nothing to build.

## Editing content

**All content lives in [`js/content.js`](js/content.js).** You don't need to touch the HTML or CSS to update the site.

- Any string that starts with `TODO` shows up on the site with a dashed yellow "placeholder" style. Replace the text and the styling goes away.
- Optional fields left as `""` are hidden, for example the dataset link, demo findings, member photos, and the Google Doc link.
- Demo `status` can be `"planned"`, `"in-progress"`, or `"complete"`.
- Member photos go in `assets/` and are referenced as `"assets/name.jpg"`. Without a photo, the card shows the member's initials.

## Previewing locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

You can also open `index.html` directly in a browser.

## Deploying (GitHub Pages)

1. Push this folder to a GitHub repo.
2. Go to **Settings → Pages → Build and deployment** and choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site goes live at `https://<username>.github.io/<repo>/`.
