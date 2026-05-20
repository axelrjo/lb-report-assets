// ── TABLE DATA ───────────────────────────────────────────────────
const rows = [
  { year:2016, cat:"vaccine", mechanism:"Multi-year tender / demand forecasting", product:"Pentavalent vaccine suppliers", url:"https://pharma.linksbridge.com/news/13620", partners:"UNICEF; Gavi; Gates Foundation", impact:"$388M in savings; 400M doses for Gavi-supported countries" },
  { year:2017, cat:"hiv", mechanism:"Volume-linked price buy-down", product:"OraSure OraQuick HIV self-test", url:"https://pharma.linksbridge.com/news/13904", partners:"Gates Foundation", impact:"Lower public-procurement price in 50 developing countries" },
  { year:2017, cat:"other", mechanism:"Order-threshold price commitment", product:"Shanghai Dahua Levoplant", url:"https://pharma.linksbridge.com/news/13915", partners:"FP2020 partners", impact:"Lower-cost contraceptive implant access in FP2020 countries" },
  { year:2017, cat:"hiv", mechanism:"Negotiated price agreement", product:"Mylan / Aurobindo TLD regimen", url:"https://pharma.linksbridge.com/news/14021", partners:"South Africa; Kenya; UNAIDS; CHAI; Gates Foundation; Unitaid; U.K.; U.S.; Global Fund", impact:"$75/person/year for generic TLD; accelerated access in 92 LMICs" },
  { year:2017, cat:"other", mechanism:"Minimum purchase contract", product:"Chembio Zika diagnostic", url:"https://pharma.linksbridge.com/news/14099", partners:"UNICEF", impact:"Demand signal for emergency diagnostic scale-up" },
  { year:2018, cat:"hiv", mechanism:"Multi-year procurement contracts", product:"14 HIV drug manufacturers", url:"https://pharma.linksbridge.com/news/14430", partners:"Global Fund", impact:"$324M projected savings by 2021; secured supply for 4M+ people" },
  { year:2018, cat:"hiv", mechanism:"All-inclusive access pricing", product:"Hologic molecular diagnostics", url:"https://pharma.linksbridge.com/news/14460", partners:"DFID; Unitaid; MedAccess; CHAI; PEPFAR; ASLM; Zambia", impact:"Supported viral-load scale-up in Malawi, Tanzania, Uganda, Zambia, Zimbabwe" },
  { year:2019, cat:"tb", mechanism:"Buy guarantee", product:"Sanofi rifapentine", url:"https://pharma.linksbridge.com/news/15129", partners:"Unitaid; Global Fund", impact:"Price cut $45→$15/three-month course; 100 LMICs" },
  { year:2019, cat:"vaccine", mechanism:"Stockpile financing", product:"Merck Ervebo Ebola vaccine", url:"https://pharma.linksbridge.com/news/15200", partners:"Gavi", impact:"$178M to build 500,000-dose stockpile; free access for Gavi LMICs" },
  { year:2020, cat:"vaccine", mechanism:"AMC supply agreement", product:"Serum Institute PCV10", url:"https://pharma.linksbridge.com/news/15444", partners:"Gavi", impact:"New market-low PCV price; increased supplier competition" },
  { year:2020, cat:"vaccine", mechanism:"Supplier pledges against Gavi demand target", product:"HPV vaccine manufacturers", url:"https://pharma.linksbridge.com/news/15441", partners:"Gavi; Merck; GSK; Innovax; Walvax; SII", impact:"Intended to relieve HPV supply constraints" },
  { year:2020, cat:"vaccine", mechanism:"De-risking investment / COVAX AMC", product:"Serum Institute Covid-19 vaccines", url:"https://pharma.linksbridge.com/news/15599", partners:"Gates Foundation; Gavi; COVAX AMC", impact:"Up to 200M AstraZeneca/Novavax doses at max $3 per dose" },
  { year:2020, cat:"other", mechanism:"Volume guarantees / pooled procurement", product:"Abbott and SD Biosensor Covid-19 antigen tests", url:"https://pharma.linksbridge.com/news/15607", partners:"Gates Foundation; Global Fund; Africa CDC; Unitaid", impact:"Rollout in up to 20 African countries" },
  { year:2020, cat:"hiv", mechanism:"Price agreement", product:"Viatris and Macleods pediatric dolutegravir", url:"https://pharma.linksbridge.com/news/15709", partners:"Unitaid; CHAI", impact:"$36/child/year, down from ~$400" },
  { year:2021, cat:"vaccine", mechanism:"Risk-sharing manufacturing finance", product:"GSK RTS,S malaria vaccine", url:"https://pharma.linksbridge.com/news/16172", partners:"Gavi; MedAccess", impact:"Avoided long production ramp-up; accelerated access after approval" },
  { year:2022, cat:"tb", mechanism:"Price agreement / volume guarantee", product:"Lupin and Macleods rifapentine / 3HP", url:"https://pharma.linksbridge.com/news/24037", partners:"CHAI; GDF; Unitaid; Aurum Institute", impact:"Lower-cost TB preventive therapy in 138 LMICs" },
  { year:2022, cat:"other", mechanism:"Volume guarantee", product:"SD Biosensor G6PD test", url:"https://pharma.linksbridge.com/news/24123", partners:"MedAccess; PATH", impact:"Supports safer tafenoquine use for P. vivax malaria" },
  { year:2023, cat:"tb", mechanism:"Negotiated price agreement", product:"Molbio Truenat TB test", url:"https://pharma.linksbridge.com/news/24757", partners:"Global Fund; Stop TB Partnership; USAID", impact:"First rapid molecular TB test under $8" },
  { year:2023, cat:"hiv", mechanism:"Follow-on price agreement", product:"Generic TLD manufacturers", url:"https://pharma.linksbridge.com/news/25219", partners:"Global Fund and partners", impact:"TLD price cut 25%, to below $45/person/year" },
  { year:2023, cat:"tb", mechanism:"GDF-negotiated price cuts", product:"J&J and Lupin bedaquiline", url:"https://pharma.linksbridge.com/news/25221", partners:"Stop TB Partnership; GDF", impact:"Up to 29% reduction in bedaquiline-containing DR-TB regimens" },
  { year:2023, cat:"tb", mechanism:"At-cost pricing agreement", product:"Cepheid Xpert MTB/RIF Ultra", url:"https://pharma.linksbridge.com/news/25269", partners:"Global Fund; Stop TB Partnership; USAID", impact:"TB diagnostic cartridge price cut 20% to $7.97" },
  { year:2024, cat:"vaccine", mechanism:"Pooled procurement mechanism", product:"African manufacturers", url:"https://pharma.linksbridge.com/news/25959", partners:"Africa CDC; AU; continental and global partners", impact:"Impact pending; intended to support viable African manufacturing ecosystem" },
  { year:2024, cat:"amr", mechanism:"Pooled procurement for antibiotics", product:"Shionogi cefiderocol", url:"https://pharma.linksbridge.com/news/26523", partners:"GDF; GARDP", impact:"Intended to lower prices and accelerate delivery of priority antibiotics" },
  { year:2024, cat:"vaccine", mechanism:"Emergency tender / conditional supply agreements", product:"Mpox vaccine manufacturers", url:"https://pharma.linksbridge.com/news/27790", partners:"UNICEF; Gavi; Africa CDC", impact:"Demand signal for mpox manufacturers; impact pending" },
  { year:2024, cat:"vaccine", mechanism:"Advance purchase agreement", product:"Bavarian Nordic Jynneos", url:"https://pharma.linksbridge.com/news/27809", partners:"Gavi; UNICEF", impact:"First use of Gavi emergency mechanism; mpox outbreak response" },
  { year:2024, cat:"vaccine", mechanism:"UNICEF supply agreement", product:"Bavarian Nordic Jynneos", url:"https://pharma.linksbridge.com/news/27960", partners:"UNICEF; Gavi", impact:"Up to 1M doses for 77 LMICs at lowest market price" },
  { year:2024, cat:"vaccine", mechanism:"UNICEF order", product:"EuBiologics Euvichol-S", url:"https://pharma.linksbridge.com/news/28528", partners:"UNICEF", impact:"72M OCV doses for 2025; deal worth over $100M" },
  { year:2025, cat:"other", mechanism:"Price agreement", product:"Silver Lake Research HemoTypeSC", url:"https://pharma.linksbridge.com/news/34228", partners:"CHAI; Open Philanthropy", impact:"Sickle cell rapid test at $1 in LMICs" },
  { year:2025, cat:"vaccine", mechanism:"Replenishment-linked price pledges", product:"GSK, Merck and SII vaccines", url:"https://pharma.linksbridge.com/news/34324", partners:"Gavi", impact:"Up to $200M savings for Gavi-supported programs by 2030" },
  { year:2025, cat:"hiv", mechanism:"Financial / technical / regulatory support", product:"Dr. Reddy's generic lenacapavir", url:"https://pharma.linksbridge.com/news/34603", partners:"CHAI; Unitaid; Wits RHI", impact:"$40/person/year target; supports affordable generic PrEP access" },
  { year:2025, cat:"vaccine", mechanism:"Procurement guarantee", product:"UNICEF Vaccine Independence Initiative", url:"https://pharma.linksbridge.com/news/34562", partners:"MedAccess; UNICEF", impact:"Faster supply bridge; part of MedAccess portfolio reaching 559M people" },
  { year:2025, cat:"other", mechanism:"Volume guarantee", product:"Hewatele and Synergy Gases medical oxygen", url:"https://pharma.linksbridge.com/news/34669", partners:"MedAccess; CHAI; PATH; EAPOA; Kenya; Tanzania", impact:"Supports resilient, affordable oxygen supply in East Africa" },
  { year:2025, cat:"vaccine", mechanism:"Advance payment / IFFIm financing", product:"Serum Institute R21 malaria vaccine", url:"https://pharma.linksbridge.com/news/34734", partners:"Gavi; UNICEF; IFFIm", impact:"Price cut $3.90→$2.99/dose; up to $90M in savings" },
  { year:2026, cat:"vaccine", mechanism:"Regional pooled procurement", product:"PAHO regional producers", url:"https://pharma.linksbridge.com/news/34944", partners:"PAHO Revolving Funds", impact:"23% of 2025 procurement from regional producers, up from 1.5% in 2020; 85M people reached" },
];

const PREVIEW = 8;
let showAll = false;
let activeFilter = "all";
let searchTerm = "";

function render() {
  const tbody = document.getElementById("tableBody");
  const filtered = rows.filter(r => {
    const matchCat = activeFilter === "all" || r.cat === activeFilter;
    const s = searchTerm.toLowerCase();
    const matchSearch = !s || r.product.toLowerCase().includes(s) || r.mechanism.toLowerCase().includes(s) || r.partners.toLowerCase().includes(s) || String(r.year).includes(s);
    return matchCat && matchSearch;
  });

  tbody.innerHTML = filtered.map((r, i) => {
    const hidden = (!showAll && i >= PREVIEW) ? ' class="hidden"' : '';
    const catLabels = { vaccine:"Vaccine", hiv:"HIV", tb:"TB", amr:"AMR", other:"Other" };
    return `<tr${hidden}>
      <td>${r.year}</td>
      <td>${r.mechanism}<br><span class="tag-chip">${catLabels[r.cat]}</span></td>
      <td><a href="${r.url}" target="_blank" rel="noopener">${r.product}</a></td>
      <td style="font-size:0.78rem;color:var(--ink-muted)">${r.partners}</td>
      <td>${r.impact}</td>
    </tr>`;
  }).join("");

  const toggle = document.getElementById("showToggle");
  const count = document.getElementById("tableCount");
  count.textContent = `Showing ${Math.min(showAll ? filtered.length : PREVIEW, filtered.length)} of ${filtered.length} entr${filtered.length === 1 ? "y" : "ies"}`;

  if (filtered.length <= PREVIEW) {
    toggle.style.display = "none";
  } else {
    toggle.style.display = "block";
    toggle.textContent = showAll ? "Show fewer ↑" : `Show all ${filtered.length} entries ↓`;
  }
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    showAll = false;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});

document.getElementById("tableSearch").addEventListener("input", e => {
  searchTerm = e.target.value;
  showAll = false;
  render();
});

document.getElementById("showToggle").addEventListener("click", () => {
  showAll = !showAll;
  render();
});

render();
