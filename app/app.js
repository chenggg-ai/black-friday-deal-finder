// Black Friday Price Check — renders the deals and runs the filters.
// Deals live in data.js; this file only builds the page and filters it.

import { DEALS, CHECKED_LABEL, CHECKED_DATE, artSvg } from "./data.js";

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function money(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });
}

function pct(d) {
  return Math.round((1 - d.sale / d.was) * 100);
}

function saved(d) {
  return Math.round((d.was - d.sale) * 100) / 100;
}

function verdictClass(v) {
  return v === "REAL DEAL" ? "v-real" : v === "GOOD DEAL" ? "v-good" : "v-weak";
}

function dealCard(d, hero) {
  const p = pct(d);
  return (
    '<article class="card' + (hero ? " hero" : "") +
    '" data-cat="' + esc(d.category) + '" data-store="' + esc(d.store) + '" data-disc="' + p +
    '" data-name="' + esc((d.product + " " + d.brand + " " + d.store).toLowerCase()) + '">' +
    '<div class="art">' + artSvg(d.art, hero) + '<span class="disc-badge">-' + p + '%</span></div>' +
    '<div class="card-body">' +
    '<div class="meta"><span class="store">' + esc(d.store) + '</span><span class="cat">' + esc(d.category) + '</span></div>' +
    "<h3>" + esc(d.product) + "</h3>" +
    '<p class="blurb">' + esc(d.blurb) + "</p>" +
    '<div class="prices"><span class="sale">' + money(d.sale) + '</span><span class="was">' + money(d.was) +
    '</span><span class="save">Save ' + money(saved(d)) + "</span></div>" +
    '<p class="verdict ' + verdictClass(d.verdict) + '">' + d.verdict + " — " + esc(d.verdictNote) + "</p>" +
    '<p class="checked">Price checked ' + CHECKED_LABEL + "</p>" +
    '<p class="source">Source: ' + esc(d.source) + "</p>" +
    '<a class="buy" href="' + esc(d.link) + '" target="_blank" rel="noopener" aria-label="View ' +
    esc(d.product) + " at " + esc(d.store) + '">View at ' + esc(d.store) + " &rarr;</a>" +
    "</div></article>"
  );
}

function render() {
  const totalSaved = DEALS.reduce((a, d) => a + saved(d), 0);
  const avgDisc = Math.round(DEALS.reduce((a, d) => a + pct(d), 0) / DEALS.length);
  const realCount = DEALS.filter((d) => d.verdict === "REAL DEAL").length;
  const stores = [...new Set(DEALS.map((d) => d.store))];

  document.getElementById("date-strip").textContent =
    "DATE CHECK: ALL PRICES CHECKED " + CHECKED_DATE.toUpperCase() + "  •  12 DEALS  •  4 STORES  •  $" +
    totalSaved.toLocaleString("en-US") + " TOTAL SAVINGS";
  document.getElementById("stat-deals").textContent = DEALS.length;
  document.getElementById("stat-real").textContent = realCount;
  document.getElementById("stat-avg").textContent = avgDisc + "%";
  document.getElementById("stat-saved").textContent = "$" + totalSaved.toLocaleString("en-US");
  document.getElementById("stat-stores").textContent = stores.length;
  document.getElementById("foot").textContent =
    "Black Friday Price Check — 12 real deals, checked " + CHECKED_LABEL + ". Prices subject to change; verify at checkout.";

  document.getElementById("heroes").innerHTML = DEALS.slice(0, 3).map((d) => dealCard(d, true)).join("");
  document.getElementById("grid").innerHTML = DEALS.slice(3).map((d) => dealCard(d, false)).join("");

  const ranked = [...DEALS].sort((a, b) => pct(b) - pct(a));
  document.getElementById("ranked").innerHTML = ranked
    .map(
      (d) =>
        "<li><b>" + esc(d.product) + "</b> — " + esc(d.store) +
        ' <span class="rprice"><b>' + money(d.sale) + "</b> was " + money(d.was) +
        " (-" + pct(d) + "%, save " + money(saved(d)) + ") — " + d.verdict + "</span><br>" +
        '<span class="rprice">Checked ' + CHECKED_LABEL + ". Source: " + esc(d.source) + "</span></li>"
    )
    .join("");
}

function applyFilters() {
  const q = document.getElementById("q").value.trim().toLowerCase();
  const cards = [...document.querySelectorAll(".card")];
  let shown = 0;
  cards.forEach((c) => {
    const ok =
      (state.cat === "All" || c.dataset.cat === state.cat) &&
      (state.store === "All" || c.dataset.store === state.store) &&
      +c.dataset.disc >= state.minD &&
      c.dataset.name.indexOf(q) > -1;
    c.style.display = ok ? "" : "none";
    if (ok) shown++;
  });
  document.getElementById("count").textContent = shown + " of 12 deals shown";
  const grid = document.getElementById("grid");
  const vis = cards.filter((c) => c.style.display !== "none" && c.parentElement === grid);
  vis.sort((a, b) => {
    if (state.sort === "disc") return b.dataset.disc - a.dataset.disc;
    if (state.sort === "save") return parseFloat(b.querySelector(".save").textContent.replace(/[^0-9.]/g, "")) - parseFloat(a.querySelector(".save").textContent.replace(/[^0-9.]/g, ""));
    return parseFloat(a.querySelector(".sale").textContent.replace(/[^0-9.]/g, "")) - parseFloat(b.querySelector(".sale").textContent.replace(/[^0-9.]/g, ""));
  });
  vis.forEach((c) => grid.appendChild(c));
}

const state = { cat: "All", store: "All", minD: 0, sort: "disc" };

function wireFilters() {
  const cats = [...new Set(DEALS.map((d) => d.category))];
  const stores = [...new Set(DEALS.map((d) => d.store))];
  const catRow = document.getElementById("cat-row");
  const storeRow = document.getElementById("store-row");
  catRow.innerHTML = '<button class="chip on" data-catbtn="All">All</button>' +
    cats.map((c) => '<button class="chip" data-catbtn="' + esc(c) + '">' + esc(c) + "</button>").join("");
  storeRow.innerHTML = '<button class="chip on" data-storebtn="All">All</button>' +
    stores.map((s) => '<button class="chip" data-storebtn="' + esc(s) + '">' + esc(s) + "</button>").join("");

  catRow.querySelectorAll("[data-catbtn]").forEach((b) => {
    b.addEventListener("click", () => {
      state.cat = b.dataset.catbtn;
      catRow.querySelectorAll("[data-catbtn]").forEach((x) => x.classList.toggle("on", x === b));
      applyFilters();
    });
  });
  storeRow.querySelectorAll("[data-storebtn]").forEach((b) => {
    b.addEventListener("click", () => {
      state.store = b.dataset.storebtn;
      storeRow.querySelectorAll("[data-storebtn]").forEach((x) => x.classList.toggle("on", x === b));
      applyFilters();
    });
  });
  document.getElementById("mind").addEventListener("change", (e) => { state.minD = +e.target.value; applyFilters(); });
  document.getElementById("sort").addEventListener("change", (e) => { state.sort = e.target.value; applyFilters(); });
  document.getElementById("q").addEventListener("input", applyFilters);
}

render();
wireFilters();
