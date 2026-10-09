(function () {
  const C = window.SITE_CONTENT;
  if (!C) return;

  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), C);
  const isTodo = (v) => typeof v === "string" && v.trim().startsWith("TODO");

  // Set text on an element and flag placeholders.
  function setText(el, value) {
    el.textContent = value ?? "";
    el.classList.toggle("todo", isTodo(value));
  }

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) setText(n, text);
    return n;
  }

  function newTabLink(text, href, cls) {
    const a = el("a", cls, text);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    return a;
  }

  function initials(name) {
    if (isTodo(name)) return "?";
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  }

  // Simple bindings
  document.querySelectorAll("[data-bind]").forEach((n) => setText(n, get(n.dataset.bind)));
  if (!isTodo(C.team.name)) document.title = C.team.name + " · " + C.team.course;

  // Thesis
  const body = document.getElementById("thesis-body");
  (C.thesis.body || []).forEach((p) => body.appendChild(el("p", "", p)));

  const refs = C.thesis.references || [];
  const refBox = document.getElementById("thesis-refs");
  if (!refs.length) refBox.hidden = true;
  refs.forEach((r) => {
    const li = document.createElement("li");
    if (r.url) {
      li.appendChild(newTabLink(r.text, r.url));
    } else {
      setText(li, r.text);
    }
    refBox.querySelector("ol").appendChild(li);
  });

  // Lens
  const dsName = document.getElementById("dataset-name");
  if (C.lens.datasetUrl) {
    dsName.appendChild(newTabLink(C.lens.datasetName + " ↗", C.lens.datasetUrl));
  } else {
    setText(dsName, C.lens.datasetName);
  }
  const syn = C.lens.synthetic;
  if (!syn || (!syn.approach && !syn.justification)) {
    document.getElementById("synthetic-card").hidden = true;
  }

  // Parties
  const parties = document.getElementById("parties");
  C.posture.parties.forEach((p) => {
    const card = el("article", "party card");
    card.appendChild(el("span", "party-badge", p.short));
    card.appendChild(el("h3", "", p.name));
    card.appendChild(el("p", "", p.role));
    parties.appendChild(card);
  });

  // Demos
  const STATUS = { planned: "Planned", "in-progress": "In progress", complete: "Complete" };
  const demos = document.getElementById("demos");
  C.demos.forEach((d, i) => {
    const card = el("article", "demo card");
    const head = el("div", "demo-head");
    head.appendChild(el("span", "demo-num", String(i + 1).padStart(2, "0")));
    head.appendChild(el("span", "status status-" + d.status, STATUS[d.status] || d.status));
    card.appendChild(head);
    card.appendChild(el("h3", "", d.title));
    card.appendChild(el("p", "demo-concept", d.concept));
    if (d.date) card.appendChild(el("p", "muted small", d.date));
    if (d.findings) {
      card.appendChild(el("h4", "", "Findings"));
      card.appendChild(el("p", "", d.findings));
    }
    if (d.link) card.appendChild(newTabLink("View demo →", d.link, "demo-link"));
    demos.appendChild(card);
  });

  // Members
  const members = document.getElementById("members");
  C.members.forEach((m) => {
    const card = el("article", "member card");
    if (m.photo) {
      const img = el("img", "avatar");
      img.src = m.photo;
      img.alt = m.name;
      card.appendChild(img);
    } else {
      card.appendChild(el("div", "avatar", initials(m.name)));
    }
    card.appendChild(el("h3", "", m.name));
    if (m.role) card.appendChild(el("p", "muted", m.role));
    const links = el("div", "member-links");
    if (m.linkedin) links.appendChild(newTabLink("LinkedIn", m.linkedin));
    if (m.email) {
      const a = el("a", "", "Email");
      a.href = "mailto:" + m.email;
      links.appendChild(a);
    }
    if (links.children.length) card.appendChild(links);
    members.appendChild(card);
  });

  // Footer doc link
  const doc = document.getElementById("doc-link");
  if (C.team.googleDocUrl) {
    doc.href = C.team.googleDocUrl;
    doc.target = "_blank";
    doc.rel = "noopener";
  } else {
    doc.hidden = true;
  }

  // Mobile nav
  const nav = document.getElementById("nav");
  const toggle = nav.querySelector(".nav-toggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
    })
  );

  // Nav shadow on scroll + scroll-spy
  const links = [...nav.querySelectorAll(".nav-links a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href")));
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 10);
    let current = -1;
    sections.forEach((s, i) => {
      if (s.getBoundingClientRect().top < 120) current = i;
    });
    links.forEach((a, i) => a.classList.toggle("active", i === current));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
