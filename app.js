(() => {
  const W = window;
  const { SITE, PROBLEMS, CHECKS, GLOSSARY, STEPS, WORRIES, PHASES, INDUSTRIES, CHECKPOINTS, SOURCES, PROCESSES, PLAIN, LINKS, RIPPLES, PROBLEM_PROCESSES, PHASE_IMAGES } = W;
  const CHECKLIST = W.CHECKLIST || [], BANDS = W.CHECKLIST_BANDS || [], STATS = W.STATS || [], HOWTO = W.CHECKLIST_HOWTO || [];
  const main = document.getElementById("main");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const img = (id) => `assets/${id}.webp`;
  const byId = Object.fromEntries(PROBLEMS.map((p, i) => [p.id, { ...p, i }]));
  const proc = Object.fromEntries(PROCESSES.map((p) => [p.n, p]));
  const firstName = SITE.author.split(" ")[0];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const questionCount = PROBLEMS.reduce((a, p) => a + p.questions.length, 0) + PROCESSES.reduce((a, p) => a + p.questions.length + 1, 0);
  const checklistCount = CHECKLIST.reduce((a, s) => a + s.items.length, 0);

  /* ---------- Storage ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };
  let industry = store.get("wai-industry", "all");
  if (!INDUSTRIES[industry]) industry = "all";
  let phase = store.get("wai-phase", 0);

  /* ---------- Industry-aware text ---------- */
  // Each industry can override process names, quotes, chains and headaches (see industry-text.js).
  const T = () => (W.INDUSTRY_TEXT || {})[industry] || {};
  const P = (n) => ({ ...proc[n], ...((T().processes || {})[n] || {}) });
  const H = (p) => ({ ...p, ...((T().headaches || {})[p.id] || {}) });
  const linkLabel = (a, b, w) => (T().links || {})[`${a}-${b}`] || w;
  const ripples = () => (T().ripples && T().ripples.length ? T().ripples : RIPPLES);
  const indName = () => INDUSTRIES[industry].name;
  const forInd = () => industry === "all" ? "" : ` <span class="for-ind">for ${esc(indName())}</span>`;

  const industryOptions = () => Object.entries(INDUSTRIES)
    .map(([k, v]) => `<option value="${k}" ${k === industry ? "selected" : ""}>${esc(v.name)}</option>`).join("");
  const procsIn = (n) => LINKS.filter((l) => l[1] === n);
  const procsOut = (n) => LINKS.filter((l) => l[0] === n);
  const problemsFor = (n) => Object.entries(PROBLEM_PROCESSES).filter(([, list]) => list.includes(n)).map(([id]) => H(byId[id]));

  /* ---------- Footer + global industry picker ---------- */
  document.getElementById("author").textContent = SITE.author;
  document.getElementById("role").textContent = SITE.role;
  document.getElementById("contact").innerHTML = [
    SITE.email && `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`,
    SITE.instagram && `<a href="${esc(SITE.instagram)}" target="_blank" rel="noopener">Instagram @${esc(SITE.instagram.replace(/\/+$/, "").split("/").pop())}</a>`,
  ].filter(Boolean).join("");
  const globalSel = document.getElementById("global-industry");
  if (globalSel) {
    globalSel.innerHTML = industryOptions();
    globalSel.addEventListener("change", () => setIndustry(globalSel.value));
  }
  function setIndustry(k) {
    if (!INDUSTRIES[k] || k === industry) return;
    industry = k;
    store.set("wai-industry", k);
    document.querySelectorAll("select.ind-select").forEach((s) => (s.value = k));
    if (globalSel) globalSel.value = k;
    rerender();
    toast(`Showing ${indName()}`);
  }
  const indSelect = (id) => `<select id="${id}" class="ind-select">${industryOptions()}</select>`;
  function bindIndSelects() {
    main.querySelectorAll("select.ind-select").forEach((s) => s.addEventListener("change", () => setIndustry(s.value)));
  }

  document.addEventListener("click", async (e) => {
    if (!e.target.closest(".copy-email")) return;
    try { await navigator.clipboard.writeText(SITE.email); toast(`Copied ${SITE.email}`); }
    catch { toast(`Email: ${SITE.email}`); }
  });
  const hasContact = !!(SITE.email || SITE.instagram);
  const cta = () => hasContact ? `
    <div class="cta" data-reveal>
      <div class="in">
        <h2>Want help with your factory?</h2>
        <p>Bring your answers to these questions. Together we'll find the one place where AI pays off first — and how to try it small. Email ${esc(firstName)} or send a DM on Instagram.</p>
        <div class="cta-actions">
          ${SITE.email ? `<a class="btn" href="mailto:${esc(SITE.email)}?subject=${encodeURIComponent("AI for my factory")}">Email ${esc(SITE.email)}</a>` : ""}
          ${SITE.email ? `<button type="button" class="btn btn-ghost copy-email">Copy email</button>` : ""}
          ${SITE.instagram ? `<a class="btn btn-ghost" href="${esc(SITE.instagram)}" target="_blank" rel="noopener">DM on Instagram →</a>` : ""}
        </div>
      </div>
      <img src="${img("together")}" alt="" loading="lazy" />
    </div>` : "";

  const head = (eyebrow, title, text) => `
    <div class="section-head split" data-reveal>
      <div><p class="eyebrow">${eyebrow}</p><h2 style="margin-top:12px">${title}</h2></div>
      <p>${text}</p>
    </div>`;

  /* ---------- Motion ---------- */
  let observer, instant = false;
  function reveal(root = main) {
    const els = root.querySelectorAll("[data-reveal]:not(.in), [data-count]:not(.counted)");
    if (instant || reduceMotion || !("IntersectionObserver" in W)) {
      els.forEach((el) => { el.classList.add("in"); if (el.dataset.count) finishCount(el); });
      return;
    }
    observer ||= new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        if (e.target.dataset.count) countUp(e.target);
        observer.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    els.forEach((el) => observer.observe(el));
    // Anything already on screen shows straight away, even if the observer is slow to fire.
    setTimeout(() => els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0 && !el.classList.contains("in")) {
        el.classList.add("in");
        if (el.dataset.count && !el.classList.contains("counted")) countUp(el);
        observer.unobserve(el);
      }
    }), 60);
  }
  function finishCount(el) { el.textContent = el.dataset.count; el.classList.add("counted"); }
  function countUp(el) {
    const to = +el.dataset.count, t0 = performance.now(), dur = 1400;
    el.classList.add("counted");
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(to * e);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  function swapIn() { main.classList.remove("swap"); void main.offsetWidth; main.classList.add("swap"); }

  /* ---------- Home ---------- */
  function home() {
    const ind = INDUSTRIES[industry];
    main.innerHTML = `
      <section class="hero wrap">
        <div>
          <p class="eyebrow rise">For factory owners &amp; managers</p>
          <h1 class="rise" style="animation-delay:.05s">Everyone says AI can help your factory. <em>Nobody says where.</em></h1>
          <p class="lede rise" style="animation-delay:.1s">A field guide to <strong>24 everyday factory processes</strong> — how the work really happens, where it goes wrong, the questions to ask, and where AI can help. In plain English.</p>
          <div class="hero-pick rise" style="animation-delay:.12s">
            <label for="hero-industry">What do you make?</label>
            ${indSelect("hero-industry")}
            <span class="hint">The whole guide adjusts to your industry.</span>
          </div>
          <div class="hero-actions rise" style="animation-delay:.15s">
            <a class="btn btn-primary" href="#/processes">Explore the 24 processes ↓</a>
            <a class="btn" href="#/checklist">Take the readiness checklist</a>
          </div>
        </div>
        <figure class="hero-art rise" style="animation-delay:.1s; margin:0">
          <div class="kb"><img src="${img("factory")}" alt="An illustrated workshop: material racks, cutting, a machining centre, inspection and packing" /></div>
          <figcaption>Start with the work your people already do.</figcaption>
        </figure>
      </section>

      <section class="wrap stats" aria-label="What's inside this guide">
        ${[
          [PROCESSES.length, "factory processes, mapped step by step"],
          [LINKS.length, "hand-offs between processes"],
          [questionCount, "questions to ask your team"],
          [Object.keys(INDUSTRIES).length - 1, "industries, each in its own words"],
          [Object.keys(SOURCES).length + STATS.length, "references and published figures"],
        ].map(([n, t], i) => `
          <div class="stat" data-reveal style="--d:${i * 80}ms"><b data-count="${n}">0</b><span>${t}</span></div>`).join("")}
      </section>

      <section class="section wrap" id="about">
        <div class="about">
          <div class="about-pic" data-reveal><img src="${img("together")}" alt="An experienced supervisor and a younger colleague reviewing a sheet together at a workbench" loading="lazy" /></div>
          <div data-reveal style="--d:120ms">
            <hr class="rule" />
            <h2>Why I made <em>this guide</em></h2>
            ${(SITE.about || []).map((t) => `<p>${t}</p>`).join("")}
            <p class="sign">— ${esc(SITE.author)}</p>
          </div>
        </div>
      </section>

      <section class="section wrap" id="processes">
        ${head("The factory, in 6 departments", `Where does work <em>get stuck?</em>`, "Every factory runs on the same chain of work — from the first enquiry to the final payment. Pick a department to see its processes.")}
        <div class="industry-bar" data-reveal>
          <label for="dept-industry">Showing:</label>
          ${indSelect("dept-industry")}
          <p class="industry-caption">${esc(ind.caption)}</p>
        </div>
        <div class="route" aria-label="A typical production route">${ind.route.map((r, i) =>
          `<span class="route-step" style="--d:${i * 90}ms">${esc(r)}</span>${i < ind.route.length - 1 ? `<span class="route-arrow" style="--d:${i * 90 + 45}ms" aria-hidden="true">→</span>` : ""}`).join("")}</div>
        <div class="depts" role="tablist" aria-label="Departments">
          ${PHASES.map((name, i) => `
            <button type="button" role="tab" class="dept" data-phase="${i}" aria-selected="${i === phase}" data-reveal style="--d:${i * 60}ms">
              <span class="dept-pic"><img src="${img(PHASE_IMAGES[i])}" alt="" loading="lazy" /></span>
              <span class="dept-name">${esc(name)}</span>
              <span class="dept-count">4 processes</span>
            </button>`).join("")}
        </div>
        <div id="dept-panel" role="tabpanel"></div>
      </section>

      <section class="section wrap" id="map">
        ${head("How the work connects", `One slip <em>travels far.</em>`, "Processes hand work to each other. A small problem early on often shows up three departments later — which is why fixing the right spot matters. Tap any process to see what it receives and passes on.")}
        <div class="industry-bar" data-reveal>
          <label for="map-industry">Chains for:</label>
          ${indSelect("map-industry")}
        </div>
        <div class="ripples" data-reveal>
          <span class="label-sm">Play a real-world chain:</span>
          ${ripples().map((r, i) => `<button type="button" class="chip" data-ripple="${i}" aria-pressed="false">${esc(r.title)}</button>`).join("")}
        </div>
        <div class="map-layout">
          <div class="map-scroll" data-reveal><div id="map-svg"></div></div>
          <aside class="map-side" id="map-side" aria-live="polite"></aside>
        </div>
        <p class="hint map-hint">On a phone, swipe the map sideways.</p>
      </section>

      <section class="section wrap" id="problems">
        ${head("The 10 most common headaches", `Start with what <em>hurts.</em>${forInd()}`, "These are the problems owners describe most often. Each one pulls together the processes behind it, the questions to ask, and what AI can actually do.")}
        <div class="grid">
          ${PROBLEMS.map((raw, i) => { const p = H(raw); return `
            <a class="pcard" href="#/p/${p.id}" data-reveal style="--d:${(i % 3) * 80}ms">
              <div class="pic"><img src="${img(p.id)}" alt="" loading="lazy" /></div>
              <div class="body">
                <span class="num">${pad(i + 1)}<span class="area">${esc(p.area)}</span></span>
                <h3>${esc(p.title)}</h3>
                <p>${esc(p.short)}</p>
                <span class="go">Questions &amp; AI ideas →</span>
              </div>
            </a>`; }).join("")}
        </div>
      </section>

      <section class="section wrap" id="check">
        ${head("2-minute self-check", `What's true in <em>your factory?</em>`, "Tick anything that sounds familiar. No sign-up, nothing is sent anywhere — it just points you to where to look first.")}
        <div class="check-layout">
          <div class="checks" role="group" aria-label="Statements about your factory">
            ${CHECKS.map(([text], i) => `
              <button type="button" class="check" data-i="${i}" aria-pressed="false" data-reveal style="--d:${i * 30}ms">
                <span class="box" aria-hidden="true"></span><span>${esc(text)}</span>
              </button>`).join("")}
          </div>
          <aside class="results" aria-live="polite"></aside>
        </div>
      </section>

      <section class="section wrap" id="start">
        ${head("How to start", `Start small. <em>Prove it.</em> Then grow.`, "Most AI projects in factories fail for one reason: they start too big. Here's a safer way.")}
        <div class="steps">
          ${STEPS.map(([h, p], i) => `
            <div class="step" data-reveal style="--d:${i * 100}ms"><span class="n">${i + 1}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("")}
        </div>
        <div class="worries">
          ${WORRIES.map(([h, p], i) => `<div class="worry" data-reveal style="--d:${i * 100}ms"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("")}
        </div>
        ${checklistCount ? `
        <a class="checklist-promo" href="#/checklist" data-reveal>
          <span class="eyebrow">Free tool</span>
          <h3>The Factory AI Readiness Checklist</h3>
          <p>${checklistCount} yes-or-no checks that tell you whether a problem is ready for an AI trial, what to fix first, and where AI can help at each step. Tick it on screen or save it as a PDF.</p>
          <span class="go">Open the checklist →</span>
        </a>` : ""}
      </section>

      ${STATS.length ? `
      <section class="section wrap" id="numbers">
        ${head("Why this matters", `The numbers behind <em>the headaches.</em>`, "Published figures from industry studies and government reports. Each one links to its source.")}
        <div class="figures">
          ${STATS.map((s, i) => `
            <figure class="figure" data-reveal style="--d:${(i % 3) * 90}ms">
              <b>${esc(s.number)}</b>
              <p>${esc(s.plain)}</p>
              <figcaption><span>${esc(s.scope || "")}</span><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.source)} ↗</a></figcaption>
            </figure>`).join("")}
        </div>
        <p class="hint figures-note">Figures come from the studies linked. Many are averages from large or international companies — your factory's numbers will differ, which is exactly why the questions in this guide matter.</p>
      </section>` : ""}

      <section class="section wrap" id="words">
        ${head("AI words in plain English", `The words you'll hear, <em>explained.</em>`, "So nobody can confuse you in a sales meeting.")}
        <dl class="glossary">
          ${GLOSSARY.map(([t, d], i) => `<div data-reveal style="--d:${(i % 3) * 60}ms"><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join("")}
        </dl>
      </section>

      <section class="section wrap" id="sources">
        ${head("How this guide was built", `Research, <em>not guesswork.</em>`, "The process map follows how work actually moves through small and mid-sized factories, checked against software manuals, industry studies and government cluster reports.")}
        <div class="method">
          ${[
            ["Mapped the work", `${PROCESSES.length} processes, each broken into the real steps, the people involved and the tools they use today.`],
            ["Found where it breaks", "For every process: the usual friction, its common causes, and how it spreads to the next department."],
            ["Spoke each industry's language", `${Object.keys(INDUSTRIES).length - 1} industries, each with its own process names, real-world chains and tips.`],
            ["Kept people in charge", "AI only where it fits, a simpler non-AI fix listed first, and a named decision that stays with a person."],
          ].map(([h, t], i) => `<div class="method-step" data-reveal style="--d:${i * 90}ms"><span>${i + 1}</span><h3>${h}</h3><p>${t}</p></div>`).join("")}
        </div>
        <h3 class="sources-title" data-reveal>References</h3>
        <ul class="sources">
          ${Object.values(SOURCES).map(([t, u], i) => `<li data-reveal style="--d:${(i % 4) * 40}ms"><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} <span aria-hidden="true">↗</span></a></li>`).join("")}
          ${STATS.map((s) => `<li data-reveal><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.source)} <span aria-hidden="true">↗</span></a></li>`).join("")}
        </ul>
      </section>

      ${hasContact ? `<section class="wrap" style="padding-bottom:24px">${cta()}</section>` : ""}
    `;
    main.querySelectorAll(".dept").forEach((b) => b.addEventListener("click", () => {
      phase = +b.dataset.phase; store.set("wai-phase", phase);
      main.querySelectorAll(".dept").forEach((x) => x.setAttribute("aria-selected", x === b));
      renderDept(true);
    }));
    renderDept(false);
    setupMap();
    setupChecks();
  }

  function renderDept(animate) {
    const panel = main.querySelector("#dept-panel");
    const list = PROCESSES.filter((p) => p.phase === phase).map((p) => P(p.n));
    panel.innerHTML = `
      <div class="proc-grid ${animate ? "stagger" : ""}">
        ${list.map((p, i) => `
          <a class="proc" href="#/process/${p.n}" style="--d:${i * 70}ms">
            <span class="proc-n">${pad(p.n)}</span>
            <h3>${esc(p.title)}</h3>
            <p class="proc-today">“${esc(p.today)}”</p>
            <div class="proc-help"><strong>Where AI helps</strong>${esc(p.help)}</div>
            <p class="proc-check"><strong>Ask:</strong> ${esc(CHECKPOINTS[industry][p.n - 1])}</p>
            <span class="go">Full breakdown →</span>
          </a>`).join("")}
      </div>`;
  }

  /* ---------- Process map ---------- */
  const MAP = { colW: 186, rowH: 104, nodeW: 158, nodeH: 64, top: 54, left: 14 };
  const nodePos = (n) => {
    const p = proc[n], col = p.phase, row = PROCESSES.filter((x) => x.phase === col).indexOf(p);
    const x = MAP.left + col * MAP.colW, y = MAP.top + row * MAP.rowH;
    return { x, y, cx: x + MAP.nodeW / 2, cy: y + MAP.nodeH / 2 };
  };
  function edgePath(a, b) {
    const A = nodePos(a), B = nodePos(b);
    if (proc[b].phase > proc[a].phase) {
      const x1 = A.x + MAP.nodeW, y1 = A.cy, x2 = B.x, y2 = B.cy, dx = (x2 - x1) * 0.5;
      return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
    }
    if (proc[b].phase === proc[a].phase) {
      const x = A.x + MAP.nodeW, y1 = A.cy, y2 = B.cy;
      return `M${x},${y1} C${x + 34},${y1} ${x + 34},${y2} ${x},${y2}`;
    }
    const y = MAP.top + 4 * MAP.rowH + 6;
    return `M${A.cx},${A.y + MAP.nodeH} C${A.cx},${y + 30} ${B.cx},${y + 30} ${B.cx},${B.y + MAP.nodeH}`;
  }
  function setupMap() {
    const w = MAP.left * 2 + PHASES.length * MAP.colW - (MAP.colW - MAP.nodeW);
    const h = MAP.top + 4 * MAP.rowH + 50;
    const wrap = (t, max = 15) => { const words = t.split(" "), lines = [""]; words.forEach((wd) => { const l = lines[lines.length - 1]; (l + " " + wd).trim().length > max ? lines.push(wd) : (lines[lines.length - 1] = (l + " " + wd).trim()); }); return lines.slice(0, 4); };
    const lineY = (count, j) => count === 1 ? 37 : count === 2 ? 28 + j * 17 : count === 3 ? 19 + j * 16 : 15 + j * 13.5;
    main.querySelector("#map-svg").innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="Map of how the 24 factory processes hand work to each other">
        <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="arrowhead"/></marker></defs>
        ${PHASES.map((name, i) => `<text class="map-phase" x="${MAP.left + i * MAP.colW + MAP.nodeW / 2}" y="26" text-anchor="middle">${esc(name)}</text>`).join("")}
        <g class="edges">${LINKS.map(([a, b], i) => `<path class="edge" data-i="${i}" d="${edgePath(a, b)}" marker-end="url(#arrow)"/>`).join("")}</g>
        <g class="ripple-layer"></g>
        <g class="nodes">${PROCESSES.map((raw) => { const p = P(raw.n); const { x, y } = nodePos(p.n); const lines = wrap(p.title); return `
          <g class="node" data-n="${p.n}" tabindex="0" role="button" aria-label="${pad(p.n)} ${esc(p.title)}" transform="translate(${x},${y})">
            <title>${esc(p.title)}</title>
            <rect width="${MAP.nodeW}" height="${MAP.nodeH}" rx="9"/>
            <text class="node-n" x="12" y="24">${pad(p.n)}</text>
            ${lines.map((l, j) => `<text class="node-t${lines.length > 3 ? " sm" : ""}" x="40" y="${lineY(lines.length, j)}">${esc(l)}</text>`).join("")}
          </g>`; }).join("")}</g>
      </svg>`;
    main.querySelectorAll("#map-svg .node").forEach((g) => {
      const n = +g.dataset.n;
      g.addEventListener("click", () => focusNode(n));
      g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); focusNode(n); } });
    });
    main.querySelectorAll("[data-ripple]").forEach((b) => b.addEventListener("click", () => playRipple(+b.dataset.ripple)));
    sideDefault();
  }
  let rippleTimers = [];
  function clearMap() {
    rippleTimers.forEach(clearTimeout); rippleTimers = [];
    const svg = main.querySelector("#map-svg svg");
    svg.classList.remove("focus");
    svg.querySelectorAll(".on, .lit").forEach((el) => el.classList.remove("on", "lit"));
    svg.querySelector(".ripple-layer").innerHTML = "";
    main.querySelectorAll("[data-ripple]").forEach((b) => b.setAttribute("aria-pressed", "false"));
  }
  function sideDefault() {
    main.querySelector("#map-side").innerHTML = `
      <p class="eyebrow">Read the map</p>
      <h3>From left to right, work flows from the first enquiry to the final payment.</h3>
      <p>Lines show what one process hands to the next. Curves underneath show work that loops back — like real costs feeding the next quote.</p>
      <p class="hint">Tap a box, or play one of the ${esc(industry === "all" ? "" : indName().toLowerCase() + " ")}chains above.</p>`;
  }
  function focusNode(n) {
    clearMap();
    const svg = main.querySelector("#map-svg svg");
    svg.classList.add("focus");
    svg.querySelector(`.node[data-n="${n}"]`).classList.add("on");
    LINKS.forEach(([a, b], i) => {
      if (a === n || b === n) {
        svg.querySelector(`.edge[data-i="${i}"]`).classList.add("on");
        svg.querySelector(`.node[data-n="${a === n ? b : a}"]`).classList.add("lit");
      }
    });
    const p = P(n), ins = procsIn(n), outs = procsOut(n);
    main.querySelector("#map-side").innerHTML = `
      <p class="eyebrow">${esc(PHASES[p.phase])} · ${pad(n)}</p>
      <h3>${esc(p.title)}</h3>
      <p class="side-today">“${esc(p.today)}”</p>
      ${ins.length ? `<p class="side-label">Receives</p><ul class="flowlist">${ins.map(([a, b, w]) => `<li><b>${esc(P(a).title)}</b>${esc(linkLabel(a, b, w))}</li>`).join("")}</ul>` : ""}
      ${outs.length ? `<p class="side-label">Passes on</p><ul class="flowlist">${outs.map(([a, b, w]) => `<li><b>${esc(P(b).title)}</b>${esc(linkLabel(a, b, w))}</li>`).join("")}</ul>` : ""}
      <a class="btn btn-small" href="#/process/${n}">Open the full breakdown →</a>`;
  }
  function playRipple(i) {
    clearMap();
    const r = ripples()[i], svg = main.querySelector("#map-svg svg"), layer = svg.querySelector(".ripple-layer");
    main.querySelector(`[data-ripple="${i}"]`).setAttribute("aria-pressed", "true");
    svg.classList.add("focus");
    main.querySelector("#map-side").innerHTML = `
      <p class="eyebrow">A real-world chain${industry === "all" ? "" : " · " + esc(indName())}</p>
      <h3>${esc(r.title)}</h3>
      <p>${esc(r.story)}</p>
      <ol class="ripple-steps">${r.path.map((n, k) => `<li style="--d:${k * 550}ms"><a href="#/process/${n}">${pad(n)} · ${esc(P(n).title)}</a></li>`).join("")}</ol>`;
    const step = reduceMotion ? 0 : 550;
    r.path.forEach((n, k) => {
      rippleTimers.push(setTimeout(() => {
        svg.querySelector(`.node[data-n="${n}"]`)?.classList.add("on");
        if (k > 0) {
          const A = nodePos(r.path[k - 1]), B = nodePos(n);
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          const mx = (A.cx + B.cx) / 2, my = Math.min(A.cy, B.cy) - 40;
          path.setAttribute("d", `M${A.cx},${A.cy} Q${mx},${my} ${B.cx},${B.cy}`);
          path.setAttribute("class", "ripple-path");
          layer.append(path);
          const len = path.getTotalLength();
          path.style.strokeDasharray = len; path.style.strokeDashoffset = reduceMotion ? 0 : len;
          requestAnimationFrame(() => (path.style.strokeDashoffset = 0));
        }
      }, k * step));
    });
  }

  /* Self-check */
  function setupChecks() {
    const picked = new Set(store.get("wai-checks", []));
    const buttons = main.querySelectorAll(".check");
    const results = main.querySelector(".results");
    const render = () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", picked.has(+b.dataset.i)));
      const score = {};
      picked.forEach((i) => CHECKS[i] && CHECKS[i][1].forEach((id) => (score[id] = (score[id] || 0) + 1)));
      const ranked = Object.entries(score).sort((a, b) => b[1] - a[1] || byId[a[0]].i - byId[b[0]].i).slice(0, 3);
      if (!ranked.length) {
        results.innerHTML = `
          <img src="${img("inspection")}" alt="" />
          <div class="in"><h3>Your starting point</h3><p class="hint">Tick anything that sounds familiar. Your top matches will show up here.</p></div>`;
        return;
      }
      results.innerHTML = `
        <div class="in">
          <h3>Start looking here</h3>
          <p class="hint">Based on what you ticked. Open one to see the questions to ask.</p>
          <ol>${ranked.map(([id, n], k) => `
            <li style="--d:${k * 80}ms"><a href="#/p/${id}"><img src="${img(id)}" alt="" />${esc(H(byId[id]).title)}<span class="score">${n} match${n > 1 ? "es" : ""}</span></a></li>`).join("")}
          </ol>
          <button type="button" class="reset">Clear my answers</button>
        </div>`;
      results.querySelector(".reset").onclick = () => { picked.clear(); store.set("wai-checks", []); render(); };
    };
    buttons.forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.i;
      picked.has(i) ? picked.delete(i) : picked.add(i);
      store.set("wai-checks", [...picked]);
      render();
    }));
    render();
  }

  /* ---------- Process page ---------- */
  function processPage(n) {
    const p = P(n), plain = PLAIN[n] || {};
    const prev = P(n === 1 ? 24 : n - 1), next = P(n === 24 ? 1 : n + 1);
    const ins = procsIn(n), outs = procsOut(n), related = problemsFor(n);
    const questions = [...p.questions, p.question].filter(Boolean);
    const generic = proc[n].title !== p.title ? `<p class="aka">Also called: ${esc(proc[n].title)}</p>` : "";
    main.innerHTML = `
      <div class="narrow">
        <div class="ptop">
          <a class="back" href="#/processes">← All 24 processes</a>
          <span class="ptop-ind"><label for="p-industry">Industry:</label>${indSelect("p-industry")}</span>
        </div>

        <header class="phero">
          <div>
            <span class="num rise">${pad(n)}<span>${esc(PHASES[p.phase])} · process ${n} of ${PROCESSES.length}</span></span>
            <h1 class="rise" style="animation-delay:.05s">${esc(p.title)}</h1>
            ${generic}
            <p class="quote rise" style="animation-delay:.1s">“${esc(p.today)}”</p>
            <p class="people rise" style="animation-delay:.15s"><strong>Who's involved:</strong> ${esc(p.people.replace(/ \/ /g, ", "))}</p>
          </div>
          <div class="phero-pic rise" style="animation-delay:.1s"><img src="${img(PHASE_IMAGES[p.phase])}" alt="" /></div>
        </header>

        <section class="block" data-reveal>
          <h2>How the work happens today</h2>
          <p class="sub">The usual steps, in order.</p>
          <ol class="flow">${p.steps.map((s, i) => `<li style="--d:${i * 70}ms"><span>${i + 1}</span>${esc(s)}</li>`).join("")}</ol>
          <p class="tools"><strong>Tools most factories use:</strong> ${p.tools.map((t) => `<span class="chip static">${esc(t)}</span>`).join("")}</p>
        </section>

        <section class="block" data-reveal>
          <h2>Where it goes wrong</h2>
          <p class="sub">What owners and supervisors usually describe.</p>
          <p class="big">${esc(p.friction)}</p>
          <p class="side-label" style="margin-top:20px">Common causes</p>
          <ul class="causes">${p.causes.map((c) => `<li>${esc(c[0].toUpperCase() + c.slice(1))}</li>`).join("")}</ul>
        </section>

        <section class="block" data-reveal>
          <h2>Fix this first</h2>
          <p class="sub">Often the cheapest win needs no AI at all.</p>
          <div class="fixbox"><span class="tag">No AI needed</span>${esc(plain.fix || p.alternative)}</div>
        </section>

        <section class="block" data-reveal>
          <h2>Where AI can help</h2>
          <p class="sub">Once the basics are in place.</p>
          <div class="help lead-help"><h3>${esc(p.help)}</h3><p>${esc(plain.kind || "")}</p></div>
          <div class="ba" style="margin-top:14px">
            <div class="before"><span class="tag">What improves</span>${esc(p.better)}</div>
            <div class="after"><span class="tag">Where a person stays in charge</span>${esc(plain.human || p.boundary)}</div>
          </div>
        </section>

        <section class="block" data-reveal>
          <h2>Questions to ask</h2>
          <p class="sub">Walk the floor with these. The answers tell you whether this process is worth fixing — and how.</p>
          <ol class="questions">${questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ol>
          <div class="industry-note">
            <span class="tag">For ${esc(indName())}</span>
            <p>${esc(CHECKPOINTS[industry][n - 1])}</p>
          </div>
          <div class="qtools">
            <button type="button" class="btn btn-small" id="copyq">Copy questions</button>
            <span class="note">Paste them into your next team meeting.</span>
          </div>
        </section>

        <section class="block" data-reveal>
          <h2>What you'll need</h2>
          <p class="sub">The records AI would learn from — and how to know it's working.</p>
          <div class="ba">
            <div class="before"><span class="tag">Information to gather</span>${esc(p.inputs)}</div>
            <div class="before"><span class="tag">Measure before and after</span>${esc(p.metric)}</div>
          </div>
        </section>

        <section class="block" data-reveal>
          <h2>How it connects</h2>
          <p class="sub">What this process receives, and what it passes on. A problem here travels.</p>
          <div class="connect">
            <div class="connect-col">${ins.length ? ins.map(([a, b, w]) => `<a href="#/process/${a}"><small>${pad(a)} · ${esc(P(a).title)}</small>${esc(linkLabel(a, b, w))}</a>`).join("") : `<p class="hint">Starts the chain</p>`}</div>
            <div class="connect-mid"><span>${pad(n)}</span>${esc(p.title)}</div>
            <div class="connect-col">${outs.length ? outs.map(([a, b, w]) => `<a href="#/process/${b}"><small>${pad(b)} · ${esc(P(b).title)}</small>${esc(linkLabel(a, b, w))}</a>`).join("") : `<p class="hint">End of the chain</p>`}</div>
          </div>
        </section>

        ${related.length ? `
        <section class="block" data-reveal>
          <h2>Related headaches</h2>
          <p class="sub">Common problems this process is part of.</p>
          <div class="mini-cards">${related.map((r) => `<a href="#/p/${r.id}"><img src="${img(r.id)}" alt="" />${esc(r.title)}</a>`).join("")}</div>
        </section>` : ""}

        ${hasContact ? `<section class="block">${cta()}</section>` : ""}

        <nav class="pager" aria-label="More processes">
          <a href="#/process/${prev.n}"><span class="pager-n">${pad(prev.n)}</span><span><small>← Previous</small>${esc(prev.title)}</span></a>
          <a class="next" href="#/process/${next.n}"><span class="pager-n">${pad(next.n)}</span><span><small>Next →</small>${esc(next.title)}</span></a>
        </nav>
      </div>`;
    copyButton(p.title, questions);
  }

  /* ---------- Headache page ---------- */
  function problemPage(raw) {
    const p = H(raw);
    const prev = H(PROBLEMS[(raw.i - 1 + PROBLEMS.length) % PROBLEMS.length]);
    const next = H(PROBLEMS[(raw.i + 1) % PROBLEMS.length]);
    const procs = (PROBLEM_PROCESSES[p.id] || []).map((n) => P(n));
    main.innerHTML = `
      <div class="narrow">
        <div class="ptop">
          <a class="back" href="#/problems">← All 10 headaches</a>
          <span class="ptop-ind"><label for="h-industry">Industry:</label>${indSelect("h-industry")}</span>
        </div>
        <header class="phero">
          <div>
            <span class="num rise">${pad(raw.i + 1)}<span>${esc(p.area)}</span></span>
            <h1 class="rise" style="animation-delay:.05s">${esc(p.title)}</h1>
            <p class="lede rise" style="animation-delay:.1s">${esc(p.short)}</p>
          </div>
          <div class="phero-pic rise" style="animation-delay:.1s"><img src="${img(p.id)}" alt="" /></div>
        </header>

        <section class="block" data-reveal>
          <h2>Sounds familiar?</h2>
          <p class="sub">The signs you'll notice on the floor.</p>
          <ul class="signs">${p.signs.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
          <div class="costbox"><strong>What it costs you</strong>${esc(p.cost)}</div>
        </section>

        ${procs.length ? `
        <section class="block" data-reveal>
          <h2>Where it starts</h2>
          <p class="sub">The processes behind this headache. Open one for the full breakdown.</p>
          <div class="proc-mini">${procs.map((x) => `<a href="#/process/${x.n}"><span>${pad(x.n)}</span><b>${esc(x.title)}</b><small>${esc(PHASES[x.phase])}</small></a>`).join("")}</div>
        </section>` : ""}

        <section class="block" data-reveal>
          <h2>Questions to ask</h2>
          <p class="sub">Ask these with your team before anyone talks about technology.</p>
          <ol class="questions">${p.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ol>
          <div class="qtools">
            <button type="button" class="btn btn-small" id="copyq">Copy questions</button>
            <span class="note">Paste them into your next team meeting.</span>
          </div>
        </section>

        <section class="block" data-reveal>
          <h2>How AI can help</h2>
          <p class="sub">What it actually does — in plain words.</p>
          <div class="helps">${p.ai.map(([h, d]) => `<div class="help"><h3>${esc(h)}</h3><p>${esc(d)}</p></div>`).join("")}</div>
        </section>

        <section class="block" data-reveal>
          <h2>Before and after</h2>
          <p class="sub">An example to picture it${industry === "all" ? "" : " in " + esc(indName().toLowerCase())}.</p>
          <div class="ba">
            <div class="before"><span class="tag">Today</span>${esc(p.before)}</div>
            <div class="after"><span class="tag">With AI</span>${esc(p.after)}</div>
          </div>
        </section>

        <section class="block" data-reveal>
          <h2>What you need to begin</h2>
          <p class="sub">You probably have more of this than you think.</p>
          <ul class="needs">${p.needs.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="startbox"><h3>Start small</h3><p>${esc(p.start)}</p></div>
          <p class="caution"><strong>Keep in mind:</strong> ${esc(p.caution)}</p>
        </section>

        <section class="block" data-reveal>
          <h2>Words on this page</h2>
          <p class="sub">In case anyone uses them on you.</p>
          <dl class="words">${p.words.map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join("")}</dl>
        </section>

        ${hasContact ? `<section class="block">${cta()}</section>` : ""}

        <nav class="pager" aria-label="More problems">
          <a href="#/p/${prev.id}"><img src="${img(prev.id)}" alt="" /><span><small>← Previous</small>${esc(prev.title)}</span></a>
          <a class="next" href="#/p/${next.id}"><img src="${img(next.id)}" alt="" /><span><small>Next →</small>${esc(next.title)}</span></a>
        </nav>
      </div>`;
    copyButton(p.title, p.questions);
  }

  /* ---------- Readiness checklist ---------- */
  function checklistPage() {
    // ?pdf=1 renders a blank copy for the downloadable PDF.
    const blankPdf = new URLSearchParams(location.search).has("pdf");
    const ticks = new Set(blankPdf ? [] : store.get("wai-ready", []));
    const notes = store.get("wai-ready-notes", { problem: "", owner: "" });
    let k = 0;
    main.innerHTML = `
      <div class="narrow checklist">
        <div class="ptop no-print"><a class="back" href="#/">← Back to the guide</a></div>
        <header class="cl-head">
          <p class="eyebrow rise">Free tool · ${checklistCount} checks · 5 minutes</p>
          <h1 class="rise" style="animation-delay:.05s">The Factory AI <em>Readiness Checklist</em></h1>
          <p class="lede rise" style="animation-delay:.1s">Before you spend money on AI, check whether the problem — and your factory — is ready for a small trial. Tick what's true today. Be honest; the unticked boxes are your to-do list.</p>
          <div class="cl-fields rise" style="animation-delay:.15s">
            <label>The problem we're checking<input id="cl-problem" type="text" maxlength="140" placeholder="e.g. Machines stop without warning on Line 2" value="${esc(notes.problem)}" /></label>
            <label>Who owns it<input id="cl-owner" type="text" maxlength="80" placeholder="e.g. Maintenance head" value="${esc(notes.owner)}" /></label>
          </div>
        </header>
        ${HOWTO.length ? `
          <section class="cl-howto" data-reveal>
            <h2>How to use it</h2>
            <ol>${HOWTO.map(([h, t], i) => `<li><span class="n">${i + 1}</span><div><h3>${esc(h)}</h3><p>${esc(t)}</p></div></li>`).join("")}</ol>
          </section>` : ""}
        ${CHECKLIST.map((sec, si) => `
          <section class="cl-section" data-reveal>
            <h2><span>${si + 1}</span>${esc(sec.title)}</h2>
            <p class="sub">${esc(sec.note)}</p>
            <div class="cl-items">${sec.items.map((t) => { const i = k++; return `
              <button type="button" class="check cl-item" data-k="${i}" aria-pressed="${ticks.has(i)}"><span class="box" aria-hidden="true"></span><span>${esc(t)}</span></button>`; }).join("")}
            </div>
            ${sec.ai ? `<div class="cl-ai"><strong>How AI can help here</strong>${esc(sec.ai)}</div>` : ""}
          </section>`).join("")}
        ${blankPdf ? "" : `<section class="cl-result" id="cl-result" aria-live="polite"></section>`}
        <section class="cl-key">
          <h3>Score yourself</h3>
          <p class="sub">Count your ticks.</p>
          <ul>${BANDS.map((b, i) => `<li><b>${b.min}–${BANDS[i + 1] ? BANDS[i + 1].min - 1 : checklistCount}</b><span><strong>${esc(b.title)}.</strong> ${esc(b.text)}</span></li>`).join("")}</ul>
        </section>
        <div class="cl-actions no-print">
          ${window.claude ? "" : `<button type="button" class="btn btn-primary" id="cl-print">Save as PDF / print</button>`}
          <a class="btn${window.claude ? " btn-primary" : ""}" id="cl-pdf" href="assets/factory-ai-readiness-checklist.pdf" download>Download the blank PDF</a>
          <button type="button" class="btn btn-small cl-reset" id="cl-reset">Clear</button>
        </div>
        <p class="cl-foot">Made by ${esc(SITE.author)} · ${esc(SITE.role)}${SITE.email ? ` · ${esc(SITE.email)}` : ""}${SITE.instagram ? ` · Instagram @${esc(SITE.instagram.replace(/\/+$/, "").split("/").pop())}` : ""}</p>
        ${hasContact ? `<section class="block no-print">${cta()}</section>` : ""}
      </div>`;
    const result = main.querySelector("#cl-result");
    const paint = () => {
      if (!result) return;
      main.querySelectorAll(".cl-item").forEach((b) => b.setAttribute("aria-pressed", ticks.has(+b.dataset.k)));
      const score = ticks.size;
      const band = [...BANDS].reverse().find((b) => score >= b.min) || BANDS[0];
      const pct = Math.round((score / checklistCount) * 100);
      result.innerHTML = `
        <div class="cl-score"><b>${score}</b><span>of ${checklistCount}</span></div>
        <div class="cl-bar"><i style="width:${pct}%"></i></div>
        <h3>${esc(band.title)}</h3>
        <p>${esc(band.text)}</p>`;
    };
    main.querySelectorAll(".cl-item").forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.k; ticks.has(i) ? ticks.delete(i) : ticks.add(i);
      store.set("wai-ready", [...ticks]); paint();
    }));
    ["problem", "owner"].forEach((f) => main.querySelector(`#cl-${f}`).addEventListener("input", (e) => { notes[f] = e.target.value; store.set("wai-ready-notes", notes); }));
    const pr = main.querySelector("#cl-print"); if (pr) pr.onclick = () => window.print();
    main.querySelector("#cl-pdf").addEventListener("click", async (e) => {
      if (!window.claude || !window.claude.use) return; // plain link works on a normal website
      e.preventDefault();
      try {
        const dl = await window.claude.use("downloads");
        if (!dl) { toast("Downloads aren't available here"); return; }
        const blob = await (await fetch("assets/factory-ai-readiness-checklist.pdf")).blob();
        await dl.save({ filename: "factory-ai-readiness-checklist.pdf", data: blob });
      } catch (err) { if (!err || err.code !== "declined") toast("Couldn't download — please try again"); }
    });
    main.querySelector("#cl-reset").onclick = () => { ticks.clear(); store.set("wai-ready", []); paint(); };
    paint();
  }

  function copyButton(title, qs) {
    document.getElementById("copyq").onclick = async () => {
      const text = `${title}\n\n` + qs.map((q, i) => `${i + 1}. ${q}`).join("\n");
      try { await navigator.clipboard.writeText(text); toast("Questions copied"); }
      catch { toast("Couldn't copy — select the text instead"); }
    };
  }
  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.append(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 1800);
  }

  /* ---------- Router ---------- */
  let lastView = "";
  const parse = () => location.hash.replace(/^#\/?/, "").split("/");
  function render(view, id) {
    if (view === "p" && byId[id]) { problemPage(byId[id]); document.title = `${H(byId[id]).title} · Where AI Fits`; return "p" + id; }
    if (view === "process" && proc[+id]) { processPage(+id); document.title = `${P(+id).title} · Where AI Fits`; return "process" + id; }
    if (view === "checklist") { checklistPage(); document.title = "Factory AI Readiness Checklist · Where AI Fits"; return "checklist"; }
    home(); document.title = "Where AI Fits"; return "home";
  }
  function route() {
    const [view, id] = parse();
    const nav = document.querySelectorAll(".topnav a");
    nav.forEach((a) => a.removeAttribute("aria-current"));
    const isPage = (view === "p" && byId[id]) || (view === "process" && proc[+id]) || view === "checklist";
    if (isPage) {
      lastView = render(view, id);
      window.scrollTo(0, 0); main.focus({ preventScroll: true }); swapIn(); reveal(); bindIndSelects();
      return;
    }
    if (lastView !== "home") { lastView = render(); swapIn(); reveal(); bindIndSelects(); }
    const target = view && document.getElementById(view);
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }));
      nav.forEach((a) => a.getAttribute("href") === `#/${view}` && a.setAttribute("aria-current", "true"));
    } else {
      window.scrollTo(0, 0);
    }
  }
  // Re-draw the current page in place (used when the industry changes).
  function rerender() {
    const y = scrollY, [view, id] = parse();
    instant = true;
    lastView = render(view, id);
    reveal(); bindIndSelects();
    instant = false;
    window.scrollTo(0, y);
  }
  window.addEventListener("hashchange", route);
  route();

  const bar = document.querySelector(".topbar");
  addEventListener("scroll", () => bar.classList.toggle("scrolled", scrollY > 8), { passive: true });
})();
