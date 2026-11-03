// The Factory AI Readiness Checklist. Edit the wording freely.
window.CHECKLIST = [
  {
    title: "Is the problem worth solving?",
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
    note: "A small, measured trial beats a big promise.",
    items: [
      "We know which software we use (Tally, ERP, Excel) and who looks after it.",
      "We've checked whether our current software can already do this.",
      "We've set a small budget and a time limit for a trial — about 4 to 8 weeks.",
      "We've agreed how we'll measure the result before and after.",
    ],
  },
];

window.CHECKLIST_BANDS = [
  { min: 0, title: "Not yet — fix the basics first", text: "Start by choosing one costly problem, giving it an owner, and recording it properly for a few weeks. That alone often pays off." },
  { min: 8, title: "Getting there", text: "You have a real problem and some records. Work on the boxes you left unticked, then plan a small trial on one machine, line or document type." },
  { min: 14, title: "Ready for a small trial", text: "You're ready to test AI on this problem. Keep it small, measure before and after, and keep a person in charge of decisions." },
];
