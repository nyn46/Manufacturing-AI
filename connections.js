// Plain-English notes for each of the 24 processes, keyed by process number.
// fix   = what to fix first, often with no AI at all
// human = where a person must stay in charge
// kind  = what kind of AI this is, in plain words
window.PLAIN = {
  1:  { fix: "Give every enquiry one owner and a simple checklist of what must be known before quoting.", human: "An engineer checks any change to the drawing, size or tolerance.", kind: "Reads emails and attachments, and finds similar past enquiries." },
  2:  { fix: "Clean up the costing spreadsheet and keep one up-to-date price list.", human: "The calculations use your own formulas. AI never makes up a cost or a machine time.", kind: "Finds similar past jobs and spots cost lines that were left out." },
  3:  { fix: "Record every change to an order in one place, with who approved it.", human: "Only an authorised person accepts a change in price, date or terms.", kind: "Compares the customer's order with your quote, line by line." },
  4:  { fix: "Control drawing versions: one official copy, clearly numbered, released by engineering.", human: "The approved engineering drawing is always the final word.", kind: "Matches part names and codes, and finds every job a drawing change affects." },
  5:  { fix: "Check that machine routes, shift calendars and planning rules are correct first.", human: "The planner chooses the plan. The tool only shows options and what each one delays.", kind: "A planning tool that tests many schedules, plus AI to explain them in plain words." },
  6:  { fix: "Sort out payment or approval blocks, and write down every supplier promise.", human: "If a supplier's promise is uncertain, it stays marked as uncertain until confirmed.", kind: "Reads supplier emails and pulls out quantities and dates they've committed to." },
  7:  { fix: "Weigh or count everything at the gate, and name who handles any difference.", human: "Someone checks the physical quantity before stock records change.", kind: "Reads delivery papers and compares them with your purchase order." },
  8:  { fix: "Keep unchecked material physically separate, with a clear inspection routine.", human: "Rules check the limits. Only quality staff release the material.", kind: "Reads test certificates and checks the numbers against your limits." },
  9:  { fix: "Use barcodes and fixed bin locations, and count stock regularly.", human: "If a stock movement was never recorded, AI can't reliably guess it.", kind: "Scans barcodes and matches different names for the same item." },
  10: { fix: "Prepare the next job before the machine stops, and improve how changeovers are done.", human: "Machine settings need sign-off from a technical person.", kind: "Checklists that flag what's missing, plus quick access to setup instructions." },
  11: { fix: "Record job progress as it happens, with confirmed quantities.", human: "The operator confirms the job and quantity before anything is saved.", kind: "Turns a short spoken update into a written job record." },
  12: { fix: "Agree a simple handover routine where the next shift confirms they've read it.", human: "Every critical instruction has a named person who received it.", kind: "Summarises the shift's updates and carries open actions forward." },
  13: { fix: "Make sure measuring tools, check routines and hold procedures are reliable.", human: "Spotting a pattern isn't proof of the cause. Camera checks must be tested before you rely on them.", kind: "Charts that flag unusual readings, and cameras that spot visible defects." },
  14: { fix: "Set up proper records of what's sent out, what's returned and what loss is allowed.", human: "Allowed losses differ by process and must be agreed, not assumed.", kind: "Matches quantities sent and returned, and flags gaps to chase." },
  15: { fix: "Improve routine maintenance, keep critical spares, and write down every repair.", human: "Predicting breakdowns needs good repair history and sensors first.", kind: "Finds answers in manuals and past repairs, and logs new faults clearly." },
  16: { fix: "Add meters where needed, and physically fix leaks and waste.", human: "Data only finds the waste. Someone still has to repair it.", kind: "Watches meter readings and flags unusual use." },
  17: { fix: "Agree how losses are measured and who decides what happens to scrap.", human: "Account for things like moisture, evaporation and unit changes before blaming anyone.", kind: "Compares material in with good product out, and flags gaps." },
  18: { fix: "Write down exactly what must be done before an order can ship.", human: "Only authorised staff approve product for release.", kind: "Checklists that show what's still missing, and drafts certificates." },
  19: { fix: "Keep each customer's packing rules in one place, and verify counts before loading.", human: "Someone confirms the physical pack count and shipment before it leaves.", kind: "Checks shipping documents against the order and packing rules." },
  20: { fix: "Send invoices correctly, match payments received, and name who handles disputes.", human: "People approve any settlement, credit note or payment change.", kind: "Sorts payment disputes by reason and finds the supporting documents." },
  21: { fix: "Record which batch or serial number went to which customer, and who owns each fix.", human: "If batch links were never recorded, they can't be rebuilt with certainty.", kind: "Traces a complaint back through batch records and finds related shipments." },
  22: { fix: "Build instructions together with the people who do the job, and check skills.", human: "Look at the process before blaming the worker.", kind: "An assistant that answers from your approved instructions, in the worker's language." },
  23: { fix: "Fix how permits, inspections and safety actions are tracked.", human: "Qualified people own all safety and legal decisions.", kind: "Finds records quickly and warns before certificates expire." },
  24: { fix: "Compare actual job costs with estimates, and keep a list of real, measured gains.", human: "Measure actual results. Don't promise savings you can't show.", kind: "Matches actual costs to jobs and compares improvement ideas." },
};

// How the 24 processes hand work to each other: [from, to, what passes along].
window.LINKS = [
  [1, 2, "Customer requirements and drawings"],
  [2, 3, "The quote the customer accepted"],
  [3, 4, "The confirmed drawing version"],
  [3, 5, "The confirmed order and due date"],
  [4, 5, "The approved drawing and process route"],
  [4, 10, "Setup instructions"],
  [5, 6, "What material is needed, and by when"],
  [5, 10, "Which job runs next"],
  [6, 7, "The purchase order and supplier's promised date"],
  [7, 8, "Material waiting to be checked"],
  [8, 9, "Material approved for use"],
  [9, 10, "Material issued to the job"],
  [10, 11, "The job starts"],
  [11, 12, "What happened this shift"],
  [11, 13, "Output to be checked"],
  [11, 14, "Parts sent for outside work"],
  [14, 9, "Parts returned from outside"],
  [15, 5, "A machine is down, so the plan changes"],
  [15, 11, "Stoppages and lost time"],
  [16, 24, "Energy cost per job"],
  [13, 17, "Rejected pieces"],
  [13, 18, "Good parts approved to ship"],
  [18, 19, "Goods cleared to ship"],
  [19, 20, "Proof of delivery"],
  [19, 21, "What went to which customer"],
  [21, 13, "Lessons back into the checks"],
  [22, 10, "Instructions and skills"],
  [22, 11, "Trained operators"],
  [23, 15, "Inspections and permits"],
  [17, 24, "The cost of losses"],
  [20, 24, "Money received and disputes"],
  [11, 24, "Actual time and material used"],
  [24, 2, "Real costs fed back into future quotes"],
];

// Real-world chains: one small slip upstream turns into a big problem downstream.
window.RIPPLES = [
  {
    title: "The old drawing",
    path: [3, 4, 10, 11, 13, 21],
    story: "A customer changes one dimension in a revised order. The old drawing is still in the folder on the floor. The machine is set up from it, a full batch is made, checks pass against the wrong drawing — and the customer complains.",
  },
  {
    title: "The supplier's “tomorrow”",
    path: [5, 6, 7, 9, 10, 18],
    story: "The plan assumes material arrives Monday. The supplier said “tomorrow” — but never confirmed a quantity. Half arrives. The job can't start on time, and a promised dispatch slips.",
  },
  {
    title: "The quiet breakdown",
    path: [15, 11, 5, 18, 20],
    story: "A pump on the main line keeps tripping. Each stop is short, so nobody records it. Output falls behind, the plan is reshuffled every day, deliveries slip — and late-delivery penalties appear on the invoice.",
  },
  {
    title: "The quote that lost money",
    path: [2, 11, 17, 24, 2],
    story: "The quote assumed a 2% scrap rate. On the floor it's closer to 8%, but nobody connects the two numbers. The job loses money — and the next quote uses the same wrong assumption.",
  },
];

// Which of the 24 processes each of the 10 headline problems touches.
window.PROBLEM_PROCESSES = {
  breakdowns: [15, 11, 5],
  defects: [13, 8, 17, 21],
  planning: [5, 10, 15],
  inventory: [9, 6, 7],
  suppliers: [6, 7, 14],
  paperwork: [1, 3, 7, 20],
  knowledge: [22, 12, 10],
  energy: [16, 17, 24],
  safety: [23, 22],
  quotes: [1, 2, 24],
};

// One illustration per department.
window.PHASE_IMAGES = ["quotes", "inventory", "knowledge", "inspection", "paperwork", "together"];
