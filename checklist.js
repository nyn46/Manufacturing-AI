// The Factory AI Readiness Checklist. Edit the wording freely.
window.CHECKLIST = [
  {
    title: "Is the problem worth solving?",
    ai: "AI can read through your complaint emails, WhatsApp groups and breakdown notes and count which problem really comes up most. So you pick from facts, not gut feel. It can also give a rough cost from records you already keep.",
    note: "Pick one problem first. Everything below is about that one problem.",
    items: [
      "We can name one problem that costs us money or time every month.",
      "It happens often — every week, not once a year.",
      "We can roughly say what it costs us: hours, wasted material, late orders or lost customers.",
      "One person owns this problem and wants it fixed.",
      "We've already tried the simple fix (a checklist, a clearer rule, a better form).",
    ],
  },
  {
    title: "Do we have the records?",
    ai: "This is where AI helps most. It can turn photos of paper registers, scanned PDFs and WhatsApp chats into one clean table, and spot where the same part or machine is written three different ways. Someone still checks what it produces.",
    note: "AI learns from examples. Paper, WhatsApp and spreadsheets all count.",
    items: [
      "The work is written down somewhere — software, a spreadsheet, WhatsApp or paper.",
      "We have at least 6–12 months of these records.",
      "Items, machines and customers are named the same way each time.",
      "We can get the records out — as an export, photos or scans.",
      "We know which of our records are unreliable or often missing.",
    ],
  },
  {
    title: "Are our people ready?",
    ai: "AI can sum up what each operator says, even in Hindi or another local language, and draft a short, plain note telling the team what the trial is and what won't change. The decisions stay with people.",
    note: "The best AI projects are built with the people who do the work.",
    items: [
      "We've asked the people who do this work what goes wrong and why.",
      "Someone will check the AI's suggestions before anyone acts on them.",
      "The team can give a few hours a week to a trial.",
      "We've told the team openly what will change — and what won't.",
    ],
  },
  {
    title: "Are we set up to test it fairly?",
    ai: "AI can help you check what Tally, your ERP or Excel can already do, draft a simple 4 to 8 week trial plan, and track the before-and-after numbers every week, so the result is clear rather than a feeling.",
    note: "A small, measured trial beats a big promise.",
    items: [
      "We know which software we use (Tally, ERP, Excel) and who looks after it.",
      "We've checked whether our current software can already do this.",
      "We've set a small budget and a time limit for a trial — about 4 to 8 weeks.",
      "We've agreed how we'll measure the result before and after.",
    ],
  },
];

// How to work through the checklist, shown above the checks.
window.CHECKLIST_HOWTO = [
  ["Pick one problem", "Not \"use AI in the factory\". One problem, like \"Line 2 stops without warning\". Write it in the box above, with the person who owns it."],
  ["Tick only what's true today", "Go through it with that person, in about five minutes. Don't tick what you plan to do. The unticked boxes are the useful part."],
  ["Read your score", "The score tells you where you stand: fix the basics, get closer, or run a small trial. Each section also shows where AI can help with that step."],
  ["Work on the gaps, then check again", "Take the unticked boxes one at a time. Most need no AI at all. Come back in a month and tick again."],
];

window.CHECKLIST_BANDS = [
  { min: 0, title: "Not yet — fix the basics first", text: "Start by choosing one costly problem, giving it an owner, and recording it properly for a few weeks. That alone often pays off." },
  { min: 8, title: "Getting there", text: "You have a real problem and some records. Work on the boxes you left unticked, then plan a small trial on one machine, line or document type." },
  { min: 14, title: "Ready for a small trial", text: "You're ready to test AI on this problem. Keep it small, measure before and after, and keep a person in charge of decisions." },
];
