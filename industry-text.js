// Industry-specific wording: process names, quotes, chains and headaches for each industry.
// Picked from the industry menu; anything not listed falls back to the general text.
window.INDUSTRY_TEXT = {
 "assembly": {
  "processes": {
   "1": {
    "title": "Handling enquiries",
    "today": "The BOM (bill of materials — the parts list) comes by email. The quantity comes on WhatsApp.",
    "help": "AI gathers the customer's needs from emails and messages into one place, finds earlier enquiries for the same board or product, and drafts the questions still open.",
    "friction": "BOM, PCB design files and test needs arrive in different messages. A repeat board can quietly come with a new revision.",
    "steps": [
     "Receive the enquiry",
     "Work out who the customer is and which product model they want",
     "Collect the BOM, PCB design files, drawings and test needs",
     "Confirm the revision, quantity and delivery date",
     "Ask about anything missing, such as approved part makes",
     "Hand it to costing"
    ],
    "causes": [
     "Details spread across messages",
     "BOM and drawings don't match",
     "Not every enquiry is serious"
    ]
   },
   "2": {
    "title": "Costing and quotations",
    "today": "One old component price or a forgotten test cost can ruin the quote.",
    "help": "AI checks the BOM against past jobs and recent part prices, and points out cost lines you may have missed. Your own costing sheet still does the calculations.",
    "friction": "Component prices and lead times change every week. Stencil, programming and test fixture costs get forgotten.",
    "steps": [
     "Cost each line of the BOM",
     "Add extra parts for losses on the SMT line (machine placement line)",
     "Get current component prices and lead times",
     "Estimate SMT, hand soldering, assembly and test time",
     "Add stencil, test fixture, packing and transport costs",
     "Approve the profit margin"
    ],
    "causes": [
     "Out-of-date component prices",
     "Stencil or fixture cost left out",
     "Wrong batch size assumed",
     "Part losses on the line ignored"
    ]
   },
   "3": {
    "title": "Checking the customer's order",
    "today": "The price matches. But the board revision, firmware version or test requirement may have changed.",
    "help": "AI compares the customer's order with the quote they accepted, and flags any changes for someone to approve.",
    "steps": [
     "Match the customer's order to our quote",
     "Check model, revision, quantity, prices and dates",
     "Check test, labelling and warranty terms",
     "Confirm the customer's credit limit or advance payment",
     "Confirm the order to the customer"
    ],
    "causes": [
     "Board revision changed",
     "Delivery split into lots",
     "Warranty terms nobody approved"
    ]
   },
   "4": {
    "title": "BOMs and product versions",
    "today": "An old BOM or firmware file can travel further on the floor than the new one.",
    "help": "AI finds duplicate part codes and shows which open jobs a BOM or revision change could affect.",
    "friction": "Duplicate part codes and old revisions give stores and the line the wrong parts list.",
    "steps": [
     "Create part codes and units",
     "Issue the BOM, assembly drawings, firmware and test instructions",
     "Approve alternate parts",
     "Send new revisions to stores, the line and testing",
     "Withdraw old documents and files"
    ],
    "causes": [
     "Revision changed",
     "Boards on the old revision still in stock",
     "Alternate part not approved",
     "Same component, two codes"
    ]
   },
   "5": {
    "title": "Planning the work",
    "today": "A promised date only holds if every part, the SMT line, test benches and people are all available.",
    "help": "AI brings all these limits together in one view, and explains in plain words the schedule options a planning tool comes up with.",
    "friction": "One short component can stop a whole kit. The promised date stays on paper anyway.",
    "steps": [
     "Separate confirmed orders from expected ones",
     "Check complete kits and free SMT line and test bench time",
     "Allow for maintenance and trained operators",
     "Promise delivery dates",
     "Review rush orders",
     "Re-plan when parts are short"
    ],
    "causes": [
     "One component short",
     "SMT line fully booked",
     "Rush orders keep arriving",
     "Changeover time depends on the previous board"
    ]
   },
   "6": {
    "title": "Buying components",
    "today": "A distributor says “tomorrow”. The buyer still needs a quantity, a date and the exact part number.",
    "help": "AI compares supplier quotes, pulls out what each supplier has actually promised, and drafts follow-up messages for short components.",
    "friction": "Long lead times, part shipments and parts from unknown sources hide how much production is really at risk.",
    "steps": [
     "Raise purchase requests from BOM shortages",
     "Find approved makes and distributors",
     "Compare price, lead time and minimum order quantity",
     "Look for approved alternate parts when one is short",
     "Approve the purchase order",
     "Get the supplier to confirm the order and dispatch date"
    ],
    "causes": [
     "Component shortage",
     "Long lead time",
     "Minimum order quantity too large",
     "Vague delivery promise"
    ]
   },
   "7": {
    "title": "Receiving components",
    "today": "The parcel has arrived. Part numbers, reel counts and condition still need checking.",
    "help": "AI reads the delivery documents and reel labels, and flags any differences from the purchase order.",
    "steps": [
     "Log the delivery and check its documents",
     "Unpack",
     "Check part numbers and makes on reel labels",
     "Count reels, trays and loose parts",
     "Check moisture-sensitive parts are still sealed",
     "Make the goods receipt entry",
     "Give it a location and inspection status"
    ],
    "causes": [
     "Wrong part number or make",
     "Short quantity",
     "Damaged packing",
     "Moisture seal broken"
    ]
   },
   "8": {
    "title": "Checking incoming components",
    "today": "Parts can sit in stores while a check or supplier certificate is still pending.",
    "help": "AI checks supplier certificates and labels against your approved makes, and lists any missing records.",
    "steps": [
     "Identify the batch and get the supplier's certificate",
     "Decide which checks to do",
     "Check sample parts for marking, value and soldering quality",
     "Record the results",
     "Accept, reject or put on hold",
     "Keep held parts apart and tell purchasing"
    ],
    "causes": [
     "Missing certificate",
     "Make not on the approved list",
     "Suspected fake parts",
     "Held parts get mixed in"
    ]
   },
   "9": {
    "title": "Stores and kitting",
    "today": "The sheet says 4,000 resistors. Some are on a part-used reel, some kept aside, some already on the line.",
    "help": "AI can match different names for the same part. It can also turn a reel barcode scan into a stock entry, which a person confirms.",
    "friction": "Part-used reels, unrecorded moves and parts kept aside make a kit look complete when it isn't.",
    "steps": [
     "Label and store parts, keeping moisture-sensitive ones sealed",
     "Keep stock aside for specific jobs",
     "Make kits from the BOM",
     "Issue kits to the line",
     "Take back part-used reels with their counts",
     "Count a few items regularly",
     "Check the count against the stock records"
    ],
    "causes": [
     "Part-used reel count unknown",
     "Parts kept aside for another job",
     "Loose parts lost on the line",
     "Parts supplied by the customer"
    ]
   },
   "10": {
    "title": "Getting the next build ready",
    "today": "The changeover starts. Then someone goes looking for a stencil, a feeder or the right program.",
    "help": "AI can check early whether the kit, stencil, fixtures and program are ready. It can also find the approved setup for that board.",
    "friction": "The SMT line waits for a stencil, feeder setup, program or first-board sign-off.",
    "steps": [
     "Check the kit is complete",
     "Get the stencil, feeders and test fixtures",
     "Load the approved placement program",
     "Set the reflow oven temperature profile",
     "Load feeders and check part positions",
     "Build the first board",
     "Get the first board checked and approved"
    ],
    "causes": [
     "Kit incomplete",
     "Stencil or fixture missing",
     "Wrong program version",
     "Waiting for approval"
    ]
   },
   "11": {
    "title": "Recording production",
    "today": "The boards are built now. The report often gets written at the end of the shift.",
    "help": "The operator speaks a short update. AI turns it into a draft entry linked to the job, and the operator confirms it.",
    "friction": "Reports are written late, so short stops, feeder errors and part losses never make it into the record.",
    "steps": [
     "Start the job",
     "Run SMT placement and reflow soldering",
     "Hand solder and assemble",
     "Top up reels and solder",
     "Record good, failed and repaired units",
     "Move units to testing",
     "Close the job"
    ],
    "causes": [
     "Part losses not reported",
     "Units split across stages",
     "Repairs not recorded",
     "Parts used differ from the BOM"
    ]
   },
   "12": {
    "title": "Shift handover",
    "today": "The next supervisor asks which units failed testing. The last shift already knew.",
    "help": "AI can draft the handover note from confirmed updates. It carries unfinished actions over to the next shift.",
    "steps": [
     "Report which jobs are running and how many units are left",
     "Report units waiting for repair or retest",
     "Report short parts and where the kits are",
     "Report machine and fixture problems",
     "Hand over actions that are still pending"
    ]
   },
   "13": {
    "title": "Inspection and testing",
    "today": "If a soldering fault is found late, hundreds of boards need checking or repair.",
    "help": "AI can flag missed checks. It can also bring test results, serial numbers and past failures together for the team to review.",
    "friction": "When test results sit on different benches, faulty boards keep moving on before anyone stops them.",
    "steps": [
     "Approve the first board",
     "Inspect solder joints, by eye or with a camera",
     "Run functional testing (checking the unit actually works)",
     "Record results against each serial number",
     "Spot failures that keep repeating",
     "Repair and retest",
     "Stop suspect boards from moving on"
    ],
    "causes": [
     "Test fixture worn",
     "Check missed",
     "Real change in the process",
     "Wrong firmware loaded"
    ]
   },
   "14": {
    "title": "Outsourced PCB and sub-assembly work",
    "today": "Boards go to an outside SMT shop or for coating. They come back in parts, so the balance is hard to follow.",
    "help": "AI can match what went out against what came back. It shows which customer orders are waiting for that work.",
    "steps": [
     "Send kits, files and instructions with a job-work challan",
     "Confirm the vendor received them",
     "Track the work",
     "Arrange the return",
     "Test what comes back",
     "Match failed boards, lost parts and the balance left",
     "Approve the vendor's bill"
    ],
    "causes": [
     "Parts lost at the vendor",
     "Unclear who pays for failed boards",
     "Boards returned in parts",
     "Leftover parts not returned"
    ]
   },
   "15": {
    "title": "Breakdowns and maintenance",
    "today": "The pick-and-place repair history is in one technician's head. The manual may be in a different folder.",
    "help": "AI can find the right manual and past repairs for the machine. It can also draft a fault report with the machine number.",
    "causes": [
     "Nozzle or feeder worn",
     "Spare part missing",
     "Same fault again",
     "Poor repair records"
    ]
   },
   "16": {
    "title": "Electricity, air and water",
    "today": "A reflow oven or compressor can waste power, and it never shows up in the production report.",
    "help": "AI can flag unusual readings. It can help compare usage across similar products and similar running conditions.",
    "causes": [
     "Air leaks",
     "Ovens left on with nothing running",
     "Change in product mix",
     "No meters installed"
    ]
   },
   "17": {
    "title": "Rejects, repairs and scrapped parts",
    "today": "We count the failed boards. But nobody adds up the repair hours, retests or parts thrown away.",
    "help": "AI can check parts issued against good units, and add repair costs back to the job that caused them.",
    "friction": "Repair time, extra parts and retests get hidden inside the cost of the original job.",
    "steps": [
     "Keep failed units and parts separate",
     "Count them",
     "Sort them: repair, reuse parts or scrap",
     "Get approval to repair or scrap",
     "Record parts that can be recovered",
     "Send electronic waste to an authorised recycler",
     "Check the numbers and costs add up"
    ],
    "causes": [
     "Parts issued and good units don't match",
     "Repairs hidden in job cost",
     "Warranty repairs not costed"
    ]
   },
   "18": {
    "title": "Ready to dispatch?",
    "today": "Production says the order is done. But a test record, an accessory or a manual may still be missing.",
    "help": "AI can check each order's requirements across all teams, and prepare test reports from approved results.",
    "steps": [
     "Finish all tests",
     "Sort out failed units",
     "Get the approvals",
     "Prepare the test reports",
     "Check serial numbers, accessories and manuals",
     "Approve the goods for dispatch",
     "Give the go-ahead to pack"
    ],
    "causes": [
     "Testing only partly done",
     "Accessories or manuals missing",
     "Firmware version not checked",
     "Held for payment or sales reasons"
    ]
   },
   "19": {
    "title": "Packing and transport",
    "today": "The units are ready. Then the label format changes, the cartons run out or a different truck turns up.",
    "help": "AI can check the packing instructions and gather the labels, serial number lists, photos and dispatch documents in one place.",
    "causes": [
     "Label format changed",
     "Serial list doesn't match the cartons",
     "Not enough cartons",
     "Vehicle changed"
    ]
   },
   "20": {
    "title": "Invoices and getting paid",
    "today": "Another reminder won't help if the customer disputes a warranty claim or has no proof of delivery.",
    "help": "AI can find what the dispute is about, pull together the supporting papers and draft the next follow-up.",
    "causes": [
     "Invoice not accepted",
     "No proof of delivery",
     "Money held back for failures or warranty claims",
     "Long payment terms"
    ]
   },
   "21": {
    "title": "Field failures and warranty returns",
    "today": "A unit fails at the customer's site. The team starts digging through test and dispatch records.",
    "help": "AI can collect the complaint details and look up that serial number's part batches, test results and dispatch.",
    "friction": "Warranty returns are kept apart from the records of which parts went into each unit and how it tested.",
    "steps": [
     "Find the model and serial number",
     "Collect photos, the returned unit and site details",
     "Stop more suspect units going out",
     "Check the part batches, test results and repairs for that serial number",
     "Find the cause",
     "Agree a repair, replacement or credit",
     "Check the fix worked"
    ],
    "causes": [
     "Serial number not linked to part batches",
     "Returned unit not properly tested",
     "Bad units not stopped in time"
    ]
   },
   "22": {
    "title": "People and know-how",
    "today": "When the experienced test engineer is on leave, failed boards pile up.",
    "help": "AI can find the approved work instructions and draft explanations in the team's own language, for a supervisor to check."
   },
   "23": {
    "title": "Safety records and audits",
    "today": "An audit is coming up. Electrical test certificates, static checks and action updates are scattered across folders.",
    "help": "AI can find the records and flag expired certificates, missing signatures and overdue actions.",
    "steps": [
     "Do safety inspections",
     "Check static protection: wrist straps, mats and earthing",
     "Record accidents and near misses",
     "Issue written permission for live electrical testing",
     "Collect instrument calibration and test certificates",
     "Give each action an owner",
     "Check each action is really done"
    ],
    "causes": [
     "Certificates out of date",
     "Static checks skipped",
     "Actions closed without checking"
    ]
   },
   "24": {
    "title": "Job costs and improvements",
    "today": "The month made money. But it is hard to say which product models lost money, and why.",
    "help": "AI can bring actual job costs together, including repairs and part losses, and flag the gaps worth looking into.",
    "causes": [
     "Wrong starting figures",
     "Repairs and retests not costed",
     "Product mix changed",
     "Hidden support costs"
    ]
   }
  },
  "links": {
   "1-2": "Customer needs, BOM and drawings",
   "3-4": "The confirmed product revision",
   "4-5": "The approved BOM and process route",
   "4-10": "Setup instructions and programs",
   "5-6": "Which parts are needed, and by when",
   "7-8": "Parts waiting to be checked",
   "8-9": "Parts approved for use",
   "9-10": "Kits issued to the line",
   "10-11": "The build starts",
   "11-13": "Boards and units for testing",
   "11-14": "Kits sent for outside assembly",
   "14-9": "Boards back from outside",
   "15-5": "A machine or line is down, so the plan changes",
   "13-17": "Failed units",
   "13-18": "Tested units approved to ship",
   "19-21": "Which serial numbers went to which customer",
   "21-13": "Lessons back into testing",
   "17-24": "The cost of repairs and losses"
  },
  "ripples": [
   {
    "title": "The missing capacitor",
    "path": [
     5,
     6,
     9,
     10,
     11,
     18
    ],
    "story": "One capacitor on the BOM has a 16-week lead time. Nobody checks until kitting. Boards are built without it and parked half-finished. Dispatch slips by three weeks, and the customer moves the next order elsewhere."
   },
   {
    "title": "The unapproved alternate",
    "path": [
     6,
     4,
     9,
     11,
     13,
     21
    ],
    "story": "A short part is swapped for a cheaper alternate to save the order. Engineering never approves it, and the BOM isn't updated. The boards pass functional testing in the factory. In summer, units start failing in the field and warranty returns pile up."
   },
   {
    "title": "The old firmware",
    "path": [
     3,
     4,
     10,
     13,
     18,
     21
    ],
    "story": "The customer's new firmware is emailed to one engineer. The test bench still loads the old file. Units pass testing and ship. The customer finds the wrong version on site, and 300 units come back for reprogramming."
   },
   {
    "title": "The repairs nobody costed",
    "path": [
     11,
     13,
     17,
     24,
     2
    ],
    "story": "One board model fails functional testing about one time in ten. Each unit is repaired and retested, but the hours go unrecorded. The job looks fine on paper and quietly loses money. The next quote uses the same price."
   }
  ],
  "headaches": {
   "breakdowns": {
    "title": "Lines stop without warning",
    "short": "A pick-and-place machine or reflow oven fails, and the whole SMT line stops.",
    "signs": [
     "Repairs happen after something breaks, not before.",
     "The same nozzles, feeders or pumps fail again and again.",
     "Spare parts are ordered in a rush, at a higher price."
    ],
    "before": "The pick-and-place machine's vacuum pump fails on a Tuesday night. The SMT line is down for 14 hours while a part is couriered in.",
    "after": "Pick-up errors slowly rise over 10 days. The maintenance lead gets an alert, checks the pump, and services it during Sunday's planned stop."
   },
   "defects": {
    "title": "Faulty boards are caught too late",
    "short": "Soldering and assembly faults are found at final test — or by the customer.",
    "signs": [
     "Repair benches are always full.",
     "Customers return units with the same fault.",
     "Solder inspection depends on one experienced person's eyes."
    ],
    "before": "A batch of 2,000 controller boards ships with a weak solder joint on one connector. Units fail at the customer's site, and the whole batch comes back.",
    "after": "Camera inspection after reflow flags the weak joint on the first 20 boards. AI groups the failures by position, and the engineer fixes the stencil before the batch is ruined."
   },
   "planning": {
    "title": "The production plan changes every day",
    "short": "The schedule lives in a spreadsheet — and in one planner's head.",
    "signs": [
     "Rush orders and short parts break the plan constantly.",
     "The SMT line sits idle while testing is overloaded, or the other way round.",
     "Only one person really knows how to plan, and everyone calls them."
    ],
    "before": "A big customer adds an urgent order. The planner spends half a day reshuffling kits and line time. Two other orders end up late without those customers being told.",
    "after": "The planner enters the urgent order. The tool shows two options, which kits are complete, and which orders each option would push back. The team picks one and tells the affected customers the same day."
   },
   "inventory": {
    "title": "Too many of some parts, not enough of others",
    "short": "The store is full of reels, yet the line stops for one small component.",
    "signs": [
     "Cash is tied up in parts for old models.",
     "Kits wait for a cheap part nobody noticed was running out.",
     "Reorder levels ignore how long parts take to arrive."
    ],
    "before": "The store holds 8 months of one microcontroller but runs out of a ₹2 resistor. A full shift is lost waiting.",
    "after": "The tool warns that the resistor will run short in 3 weeks based on open orders and lead time. Purchasing reorders in time — and holds back on the microcontroller."
   },
   "suppliers": {
    "title": "Chasing distributors takes the whole day",
    "short": "Your team spends hours asking “where is my part?” and “is there an alternate?”",
    "signs": [
     "Component shortages are a regular reason for delays.",
     "Supplier updates live in personal inboxes and phones.",
     "Nobody can quickly say which distributor is most reliable."
    ],
    "before": "A buyer starts every morning going through 40 open orders for components, calling distributors one by one.",
    "after": "The buyer opens a short list each morning: 4 orders at risk, each with the supplier's latest reply attached. The other 36 are on track."
   },
   "paperwork": {
    "title": "Typing the same information twice",
    "short": "People copy BOMs, orders, test results and serial numbers by hand.",
    "signs": [
     "Customer BOMs are retyped from Excel or PDF into your system.",
     "Test results are written on paper and typed up later — or never.",
     "Serial numbers are copied by hand onto dispatch lists."
    ],
    "before": "An engineer spends a day typing a 300-line BOM from the customer's PDF. A wrong resistor value slips through and is caught only at testing.",
    "after": "The BOM is read automatically and matched to your part codes. The engineer reviews it on one screen, fixes the 6 lines that are flagged, and is done in an hour."
   },
   "knowledge": {
    "title": "Know-how lives in a few people's heads",
    "short": "When your senior test or repair engineer is away, nobody knows the fix.",
    "signs": [
     "New operators take months to become useful.",
     "The same test failures puzzle people again and again.",
     "Work instructions are outdated, missing, or never read."
    ],
    "before": "On the night shift, a batch of units fails the same test. The only engineer who knows the fault is asleep. Units pile up until morning.",
    "after": "The operator asks the factory assistant on a tablet. It shows last year's repair note for the same failure, with a photo. The supervisor checks it, and repairs start within 20 minutes."
   },
   "energy": {
    "title": "Energy and material bills keep rising",
    "short": "Power and parts cost a lot — but nobody knows where they leak.",
    "signs": [
     "One monthly power bill, and no idea which oven or line uses what.",
     "Reflow ovens and compressors run when nothing is being built.",
     "Parts dropped and lost on the line are accepted as “normal”."
    ],
    "before": "The factory pays one large power bill. Everyone assumes the reflow oven is the problem.",
    "after": "Meters show the air compressor runs all weekend because of leaks. Fixing them saves more than any change to the oven."
   },
   "safety": {
    "title": "Safety risks are spotted only after an accident",
    "short": "Near-misses go unreported, and safety checks depend on someone remembering.",
    "signs": [
     "Live electrical testing is done without proper covers or permission.",
     "Static protection checks are skipped on busy days.",
     "Incident reports are written after the fact, if at all."
    ],
    "before": "A tester gets a small shock from an exposed terminal on a test bench. Nobody reports it. Two months later it happens again — and someone is hurt.",
    "after": "The daily bench checklist flags a missing safety cover. The supervisor gets an alert, the bench is fixed before use, and the near-miss is logged."
   },
   "quotes": {
    "title": "Quotes and order updates are slow",
    "short": "Customers wait days for a BOM quote or an order update — and some go elsewhere.",
    "signs": [
     "Only one or two people can cost a BOM.",
     "Customers call to ask “where is my order?”",
     "Sales doesn't know which parts are short."
    ],
    "before": "A customer sends a BOM for a new controller board. The quote takes 6 days because every part price is checked by hand. The customer has already ordered elsewhere.",
    "after": "The tool matches the BOM to parts you've bought before, flags 12 parts that need fresh prices, and drafts a quote within a day. The estimator checks it and sends it."
   }
  }
 },
 "chemicals": {
  "processes": {
   "1": {
    "title": "Handling enquiries and shade requests",
    "today": "A dealer sends a photo of a shade card on WhatsApp. The pack sizes come later by phone.",
    "help": "AI gathers the customer's needs from emails and messages into one place, finds past orders for the same product or shade, and drafts the questions still open.",
    "friction": "Product, shade, finish and pack sizes arrive in different messages. A 'repeat' order can quietly come with a new shade or a different surface to paint.",
    "steps": [
     "Receive the enquiry",
     "Work out the product, grade, shade and finish wanted",
     "Get the shade card, painted panel or sample",
     "Confirm pack sizes, quantity and delivery date",
     "Ask about anything missing, such as the surface or drying time needed",
     "Hand it to the lab or costing"
    ],
    "causes": [
     "Shade given only as a phone photo or a name",
     "Customer unsure which grade they need",
     "Not every enquiry is serious"
    ]
   },
   "2": {
    "title": "Costing and quotations",
    "today": "One old resin or solvent rate, or a forgotten container cost, can ruin the quote.",
    "help": "AI finds similar past formulations and quotes, and points out cost lines you may have missed. Your own costing sheet still does the calculations.",
    "friction": "Resin, pigment and solvent prices move often. Batch losses, tinting time and container costs often live only in someone's head.",
    "steps": [
     "Start from the formulation (recipe) for this product",
     "Work out raw material cost per kg or litre, including batch losses",
     "Get current prices for resins, pigments, solvents and additives",
     "Add mixing, grinding, tinting and lab time",
     "Add drums, pails, tins, labels, filling and freight",
     "Approve the margin"
    ],
    "causes": [
     "Out-of-date resin or solvent prices",
     "Batch losses and washings left out",
     "Tinting time for small shade batches ignored",
     "Wrong mix of pack sizes assumed"
    ]
   },
   "3": {
    "title": "Checking the customer's order",
    "today": "The price matches. But the shade, pack sizes or COA (certificate of analysis) needs may have changed.",
    "help": "AI compares the customer's order with the quote they accepted, and flags any changes for someone to approve.",
    "steps": [
     "Match the customer's order to our quote",
     "Check product code, shade, pack sizes, quantity, price and dates",
     "Check COA, labelling and shelf-life requirements",
     "Confirm the customer's credit limit or advance payment",
     "Confirm the order to the customer"
    ],
    "causes": [
     "Pack size mix changed",
     "Shade reference changed",
     "Terms nobody approved",
     "Customer wants a fresh batch, not stock"
    ]
   },
   "4": {
    "title": "Formulas and product specifications",
    "today": "An old batch sheet can stay on the mixing floor long after the lab has changed the formula.",
    "help": "AI finds duplicate product and raw material codes, and shows which open batches a formula change could affect.",
    "friction": "Old batch sheets and two codes for the same resin give the floor the wrong recipe.",
    "steps": [
     "Create product and raw material codes and units",
     "Issue the approved formula, batch sheet and QC test limits",
     "Approve alternate raw materials",
     "Send new formula versions to the floor and the QC lab",
     "Take back and destroy old batch sheets"
    ],
    "causes": [
     "Formula version changed",
     "Old batch sheet still on the floor",
     "Alternate resin or pigment not approved",
     "Same raw material, two codes"
    ]
   },
   "5": {
    "title": "Planning the batches",
    "today": "A promised date only holds if raw materials, mixers, the QC lab and the filling line are all free.",
    "help": "AI brings all these limits together in one view, and explains in plain words the batch plan options a planning tool comes up with.",
    "friction": "Shade changes need vessel cleaning. Lab holds and shade corrections are rarely allowed for in the plan.",
    "steps": [
     "Separate confirmed orders from expected ones",
     "Check approved raw materials and free mixer, mill and filling time",
     "Run batches from light shades to dark to cut cleaning",
     "Allow time for lab testing and shade correction",
     "Promise delivery dates",
     "Re-plan when a batch goes off-spec"
    ],
    "causes": [
     "An off-spec batch is blocking a vessel",
     "Bead mill or disperser fully booked",
     "Small tinting orders keep arriving",
     "Cleaning time depends on the previous shade"
    ]
   },
   "6": {
    "title": "Buying raw materials",
    "today": "A resin supplier says “tomorrow”. The buyer still needs a quantity, a date and the COA.",
    "help": "AI compares supplier quotes, pulls out what each supplier has actually promised, and drafts follow-up messages for critical resins, pigments and solvents.",
    "friction": "Vague promises, part loads and frequent price changes hide how much production is really at risk.",
    "steps": [
     "Raise a purchase request",
     "Find approved suppliers and grades",
     "Compare quotes per kg, including freight and drum costs",
     "Confirm the grade, pack type and COA needed",
     "Approve the purchase order",
     "Get the supplier to confirm the order and the dispatch date"
    ],
    "causes": [
     "Advance not yet paid",
     "Grade not clearly specified",
     "Solvent and resin prices change often",
     "Vague delivery promise"
    ]
   },
   "7": {
    "title": "Receiving raw materials",
    "today": "The tanker or drums have arrived. Weight, seals, labels and the COA still need checking.",
    "help": "AI reads the invoice, e-way bill and COA, and flags any differences from the purchase order.",
    "friction": "Material that has arrived, material entered in stock, and material cleared by the lab are three different things.",
    "steps": [
     "Log the vehicle at the gate and check the e-way bill and documents",
     "Check seals, labels and drum condition",
     "Weigh on the weighbridge, or count drums and bags",
     "Photograph any leaks or damage",
     "Make the goods receipt entry",
     "Give it a batch number, store location and 'waiting for QC' status"
    ],
    "causes": [
     "Supplier batches mixed in one load",
     "Short weight",
     "Leaking or dented drums",
     "Ordered in kg, received in litres"
    ]
   },
   "8": {
    "title": "Testing incoming raw materials",
    "today": "Resin drums can sit in stores while the lab test or the supplier's COA is still pending.",
    "help": "AI checks supplier COAs against your approved limits and lists any missing results.",
    "friction": "A missing COA, or a lab result not yet signed off, means material cannot go into a batch.",
    "steps": [
     "Identify the batch and get the supplier's COA",
     "Decide which tests to run, such as viscosity, solids or colour",
     "Take samples and test them",
     "Keep a retained sample",
     "Accept, reject or put on hold",
     "Keep held material apart and tell purchasing"
    ],
    "causes": [
     "Missing COA",
     "Supplier's test method differs from ours",
     "Retained sample not kept",
     "Held drums get used anyway"
    ]
   },
   "9": {
    "title": "Stores and moving stock",
    "today": "The sheet says 20 drums of solvent. Some are half-used, some are on hold, some are in the yard.",
    "help": "AI can match different names for the same raw material. It can also turn a barcode scan or a spoken note into a stock entry, which a person confirms.",
    "friction": "Part-used drums, unrecorded moves and expired stock make it look like material is available when it isn't.",
    "steps": [
     "Label material and store it by type, keeping flammables in the solvent store",
     "Keep stock aside for planned batches",
     "Weigh out and issue material to the batch",
     "Take back part-used drums and bags, with their weight",
     "Use the oldest stock first and watch shelf life",
     "Count stock regularly",
     "Check the count against the stock records"
    ],
    "causes": [
     "Part-used drums not recorded",
     "Expired material still on the shelf",
     "Kg and litres mixed up",
     "Solvent kept outside the approved store"
    ]
   },
   "10": {
    "title": "Getting the next batch ready",
    "today": "The batch should start. Then someone goes looking for the batch sheet, a clean vessel or the weighed pigments.",
    "help": "AI can check early whether the vessel, raw materials and batch sheet are ready. It can also find the approved charging order for that product.",
    "friction": "The disperser stands waiting for vessel cleaning, a missing raw material or a batch sheet sign-off.",
    "steps": [
     "Get the approved batch sheet",
     "Clean the vessel and disperser after the last shade",
     "Check the weighing scale",
     "Weigh out resins, pigments, solvents and additives",
     "Check earthing and that the area is clear of sparks and flames",
     "Charge the materials in the approved order"
    ],
    "causes": [
     "Vessel not cleaned",
     "Raw material not weighed out",
     "Scale not checked",
     "Waiting for batch sheet sign-off"
    ]
   },
   "11": {
    "title": "Making the batch and recording it",
    "today": "The batch is charged now. The batch sheet often gets filled in at the end of the shift.",
    "help": "The operator speaks a short update. AI turns it into a draft batch sheet entry, and the operator confirms it.",
    "friction": "Batch sheets are filled late, so extra additions, grinding time and waiting time never make it into the record.",
    "steps": [
     "Charge raw materials as per the batch sheet",
     "Disperse or grind to the right fineness",
     "Let down the batch (add the remaining resin and solvent)",
     "Record actual weights, times and temperatures",
     "Note any extra additions",
     "Send a sample to the QC lab",
     "Release the approved batch to filling"
    ],
    "causes": [
     "Extra additions not written down",
     "Actual weights differ from the formula",
     "Batch split across vessels",
     "Washings added without a record"
    ]
   },
   "12": {
    "title": "Shift handover",
    "today": "The next shift asks whether the batch in Mixer 2 was sampled. Nobody is sure.",
    "help": "AI can draft the handover note from confirmed updates. It carries unfinished actions over to the next shift.",
    "friction": "The next shift has to piece together which vessel holds what, and at what stage. Open problems drop out of the logbook.",
    "steps": [
     "Report which batch is in which vessel, and at what stage",
     "Report batches waiting for lab results or correction",
     "Report equipment problems",
     "Report any extra additions or temporary changes",
     "Hand over actions that are still pending"
    ],
    "causes": [
     "Nobody owns the batch",
     "Lab result not passed on",
     "Unclear which vessel holds what"
    ]
   },
   "13": {
    "title": "QC lab checks on each batch",
    "today": "If the lab finds the shade is off late, a whole vessel waits for correction.",
    "help": "AI can flag missed tests. It can also bring lab results, batch sheets and past corrections together for the lab team to review.",
    "friction": "When results sit in a register and on WhatsApp, an off-spec batch can reach filling before anyone stops it.",
    "steps": [
     "Take a sample at the right stage",
     "Test viscosity, fineness of grind, density and solids",
     "Check the shade against the standard panel",
     "Check drying time and gloss",
     "Advise tinting or thinning additions",
     "Retest after each correction",
     "Approve or hold the batch"
    ],
    "causes": [
     "Sample taken too early",
     "Shade judged under the wrong light",
     "Viscometer not checked",
     "Standard panel faded or lost"
    ]
   },
   "14": {
    "title": "Job-work and outside processing",
    "today": "Material goes to a job-worker for grinding or filling. It comes back in parts, so the balance is hard to follow.",
    "help": "AI can match what went out against what came back. It shows which customer orders are waiting for that work.",
    "friction": "Once material leaves the factory, it becomes unclear how much is where, and how much was lost.",
    "steps": [
     "Send material, formula and instructions with a job-work challan",
     "Confirm the job-worker received it",
     "Track the work",
     "Arrange the return",
     "Test what comes back",
     "Match losses, residues and the balance left",
     "Approve the job-worker's bill"
    ],
    "causes": [
     "Allowed losses not agreed in advance",
     "Sent in kg, returned in litres",
     "Returned in part lots",
     "Unclear who owns the residues"
    ]
   },
   "15": {
    "title": "Breakdowns and maintenance",
    "today": "The bead mill's seal history is in one fitter's head. The manual is in a different folder.",
    "help": "AI can find the right manual and past repairs for the mixer, mill or pump. It can also draft a fault report with the equipment number.",
    "friction": "Fault knowledge sits with one fitter. Spares listed under different names and the wrong manual slow the repair.",
    "steps": [
     "Report what is going wrong",
     "Make it safe: isolate power, drain the vessel and clear solvent vapour",
     "Find the cause, using past repairs and the manual",
     "Find the spare, such as a seal, impeller or grinding beads",
     "Repair the equipment",
     "Test it and get production to accept it",
     "Close the job"
    ],
    "causes": [
     "Worn mechanical seal",
     "Spare part missing",
     "Same fault again",
     "Poor repair records"
    ]
   },
   "16": {
    "title": "Electricity, air, water and heating",
    "today": "A chiller or boiler can waste power and fuel, and it never shows up in the batch report.",
    "help": "AI can flag unusual readings. It can help compare usage across similar batches and similar running conditions.",
    "steps": [
     "Run boilers or thermic fluid heaters, chillers, compressors and pumps",
     "Note down meter readings",
     "Check for leaks",
     "Treat the water",
     "Manage backup power",
     "Look into unusual usage"
    ],
    "causes": [
     "Leaks",
     "Mills and chillers running with no batch in",
     "Change in product mix",
     "No meters installed"
    ]
   },
   "17": {
    "title": "Off-spec batches, rework and blending back",
    "today": "We note the off-spec batch. But nobody adds up the extra vessel time, the tinting or the washings.",
    "help": "AI can check raw materials charged against litres filled, and add correction costs back to the batch that caused them.",
    "friction": "Extra lab time, additions and blending back get hidden inside the cost of the original batch.",
    "steps": [
     "Hold and label the off-spec batch",
     "Decide: correct it, blend it back into a later batch, or sell it as a lower grade",
     "Get QC approval for the decision",
     "Collect and label washings and residues that can be reused",
     "Mark expired stock for reprocessing or disposal",
     "Send waste to an authorised disposal agency",
     "Check that quantities and costs add up"
    ],
    "causes": [
     "Charged weight and filled litres don't match",
     "Correction cost hidden in batch cost",
     "Washings not reused or recorded",
     "Expired stock found too late"
    ]
   },
   "18": {
    "title": "Ready to dispatch?",
    "today": "Production says the batch is filled. But the COA, a label or the lab sign-off may still be missing.",
    "help": "AI can check each order's requirements across all teams, and prepare the COA from approved lab results.",
    "friction": "Filled stock can sit waiting for a lab sign-off, a COA, labels or a go-ahead from sales or accounts.",
    "steps": [
     "Finish all lab tests",
     "Sort out anything off-spec",
     "Get QC approval",
     "Prepare the COA",
     "Check the full order and pack sizes are there",
     "Approve the goods for dispatch",
     "Give the go-ahead to pack"
    ],
    "causes": [
     "Lab sign-off pending",
     "Labels or lids short",
     "COA missing",
     "Held for payment or sales reasons"
    ]
   },
   "19": {
    "title": "Packing and transport",
    "today": "The pails are filled. Then the labels run short, the cartons don't fit or the truck isn't fit for flammables.",
    "help": "AI can check the packing and hazard labelling instructions, and gather the labels, photos and dispatch documents in one place.",
    "friction": "Old label formats, missing hazard marks and last-minute vehicle changes hold up stock that is ready to go.",
    "steps": [
     "Find the customer's packing and labelling needs",
     "Check lids are sealed and drums are not leaking",
     "Label with product, shade, batch number and hazard marks",
     "Make the packing list, invoice and e-way bill",
     "Book a vehicle suitable for flammable goods",
     "Check the loading and documents, then load",
     "Record when the vehicle leaves"
    ],
    "causes": [
     "Label format changed",
     "Hazard labels missing",
     "Vehicle not suitable for flammables",
     "Count doesn't match documents"
    ]
   },
   "20": {
    "title": "Invoices and getting paid",
    "today": "Another reminder won't help if the dealer is waiting for a COA or disputing a shade.",
    "help": "AI can find what the dispute is about, pull together the supporting papers and draft the next follow-up.",
    "causes": [
     "Invoice not accepted",
     "No proof of delivery",
     "Money held back for shade or quality claims",
     "Long payment terms"
    ]
   },
   "21": {
    "title": "Complaints and batch history",
    "today": "A customer says the paint isn't drying or the shade is off. The team digs through batch sheets and dispatch records.",
    "help": "AI can collect the complaint details and look up that batch number's raw materials, lab results and deliveries.",
    "friction": "Complaint details are kept apart from the batch sheet, the raw material batches and the dispatch records.",
    "steps": [
     "Find which product and batch number it is",
     "Collect photos, site details and a sample from the customer",
     "Stop more of that batch going out",
     "Check the batch sheet, raw material batches and lab results",
     "Test the retained sample",
     "Find the cause, in the paint or in how it was applied",
     "Agree a replacement or credit"
    ],
    "causes": [
     "Retained sample not kept",
     "Batch number missing from dispatch records",
     "Problem was in application, not the paint"
    ]
   },
   "22": {
    "title": "People and know-how",
    "today": "When the senior shade matcher is on leave, tinting and corrections stop.",
    "help": "AI can find the approved batch instructions and draft explanations in the team's own language, for a supervisor to check.",
    "steps": [
     "Plan the shifts",
     "Check who can charge, grind, tint and fill, and cover for absent workers",
     "Train new joiners, including safe solvent handling",
     "Explain the approved way to do each job",
     "Test whether people can do the job",
     "Record the training",
     "Fix attendance problems"
    ]
   },
   "23": {
    "title": "Safety records and audits",
    "today": "A fire inspection or audit is coming up. Licences, drill records and permits are scattered across folders.",
    "help": "AI can find the records and flag expired licences, missing signatures and overdue actions.",
    "friction": "Expired licences under fire and explosives safety rules, and unfinished actions, only come to light during the inspection.",
    "steps": [
     "Inspect solvent stores and mixing areas",
     "Check earthing, fire extinguishers, hydrants and alarms",
     "Record spills, fires and near misses",
     "Issue written permits for hot work and vessel entry",
     "Keep safety data sheets up to date",
     "Give each action an owner",
     "Check each action is really done"
    ],
    "causes": [
     "Licence or certificate out of date",
     "Hot work done without a permit",
     "Actions closed without checking"
    ]
   },
   "24": {
    "title": "Batch costs and improvements",
    "today": "The month made money. But it's hard to say which products or shades lost money, and why.",
    "help": "AI can bring actual batch costs together and flag the gaps between formula cost and actual cost worth looking into.",
    "friction": "Losses hide in corrections, washings, filling losses and freight left out of the quote.",
    "causes": [
     "Formula cost used instead of actual cost",
     "Corrections and retests not costed",
     "Product mix changed",
     "Hidden support costs"
    ]
   }
  },
  "links": {
   "1-2": "Customer needs, shade and pack sizes",
   "3-4": "The confirmed product, grade and shade",
   "4-5": "The approved formula and batch sheet",
   "4-10": "The batch sheet and charging order",
   "5-6": "Which raw materials are needed, and by when",
   "5-10": "Which batch goes into which vessel next",
   "7-8": "Raw materials waiting for the lab",
   "8-9": "Raw materials cleared by the lab",
   "9-10": "Raw materials weighed out for the batch",
   "10-11": "The batch is charged",
   "11-12": "What's in each vessel",
   "11-13": "Batch sample for the lab",
   "11-14": "Material sent for job-work",
   "14-9": "Material back from job-work",
   "15-5": "A mixer or mill is down, so the plan changes",
   "16-24": "Energy cost per batch",
   "13-17": "Off-spec batches",
   "13-18": "Batches approved for filling and dispatch",
   "18-19": "Filled stock cleared to ship",
   "19-21": "Which batch went to which customer",
   "21-13": "Lessons back into lab checks",
   "22-10": "Batch instructions and skills",
   "22-11": "Trained batch operators",
   "17-24": "The cost of corrections and losses",
   "11-24": "Actual raw materials and time used"
  },
  "ripples": [
   {
    "title": "The old batch sheet",
    "path": [
     4,
     10,
     11,
     13,
     18,
     21
    ],
    "story": "The lab raised the anti-settling additive in an enamel formula. The old batch sheet stayed in the mixing room file. The batch was made to the old recipe, passed the viscosity check and was filled. Weeks later, a dealer complains of hard settling at the bottom of the tins."
   },
   {
    "title": "The drum without a COA",
    "path": [
     6,
     7,
     8,
     9,
     11,
     21
    ],
    "story": "Purchase switches to a cheaper resin supplier. The drums arrive without a COA, and the lab is told to test later. Stores issues them to a batch anyway. The resin's solids are low, the paint covers poorly, and a contractor rejects the whole order."
   },
   {
    "title": "The shade from a photo",
    "path": [
     1,
     4,
     13,
     5,
     18,
     20
    ],
    "story": "A dealer orders a custom shade from a WhatsApp photo, with no physical sample. The lab tints the batch three times and still can't agree a match. The vessel is tied up, and two other batches slip. The dealer's contractor waits a week, and payment is held back."
   },
   {
    "title": "The washings nobody counted",
    "path": [
     10,
     11,
     17,
     24,
     2
    ],
    "story": "Every shade change leaves solvent washings from cleaning the vessel. They go into a drum in the corner, unrecorded and never blended back. Charged weight and filled litres never match, but nobody asks why. Each quote ignores the loss, and the product quietly earns less."
   }
  ],
  "headaches": {
   "breakdowns": {
    "title": "Mixers and mills stop without warning",
    "short": "A disperser or bead mill fails mid-batch, and the vessel and the plan are stuck.",
    "signs": [
     "Repairs happen after something breaks, not before.",
     "The same mill seal or pump fails again and again.",
     "Spares like seals and impellers are bought in a rush, at a higher price."
    ],
    "before": "A bead mill's mechanical seal fails on a Tuesday night, halfway through grinding. The batch sits for 14 hours while a seal is couriered in.",
    "after": "The mill's motor load and seal temperature creep up over 10 days. The maintenance lead gets an alert, orders the seal, and changes it during Sunday's planned stop."
   },
   "defects": {
    "title": "Off-spec batches are caught too late",
    "short": "Shade or viscosity problems are found after filling — or by the customer.",
    "signs": [
     "Batches often need several rounds of tinting or thinning.",
     "Dealers complain about, or return, the same problem.",
     "Shade approval depends on one experienced person's eyes."
    ],
    "before": "A 2,000-litre enamel batch is filled and shipped. The dealer finds the shade doesn't match the card and sends back 400 tins.",
    "after": "The lab reads the shade with a colour-measuring instrument before filling. AI compares it with past batches and suggests a tinting addition. The shade matcher checks and approves it before a single tin is filled."
   },
   "planning": {
    "title": "The batch plan changes every day",
    "short": "The vessel schedule lives in a spreadsheet — and in one planner's head.",
    "signs": [
     "Small rush and tinting orders break the plan constantly.",
     "Some mixers sit idle while others wait for cleaning or lab results.",
     "Only one person knows which shades can follow which, and everyone calls them."
    ],
    "before": "A big dealer adds an urgent order for a dark shade. The planner reshuffles for half a day. Extra vessel cleaning creeps in, and two other orders end up late without those customers being told.",
    "after": "The planner enters the urgent order. The tool shows two options, keeping light-to-dark order where it can, and which orders each would push back. The team picks one and tells the affected customers the same day."
   },
   "inventory": {
    "title": "Too much of some raw materials, not enough of others",
    "short": "The store is full of drums, yet a batch stops because one small additive has run out.",
    "signs": [
     "Cash is tied up in resins and pigments that haven't moved in months.",
     "Batches wait for an additive nobody noticed was running low.",
     "Material goes past its shelf life before it is used."
    ],
    "before": "The store holds 8 months of one pigment but runs out of a drier (an additive that speeds drying). A full shift of batches waits.",
    "after": "The tool warns that the drier will run short in 9 days based on planned batches. Purchasing reorders in time — and holds back on the pigment."
   },
   "suppliers": {
    "title": "Chasing suppliers takes the whole day",
    "short": "Your team spends hours asking “where is my resin?” and “where is the COA?”",
    "signs": [
     "Late raw material is a regular reason for delays.",
     "Supplier updates and COAs sit in personal inboxes and phones.",
     "Nobody can quickly say which supplier is most reliable."
    ],
    "before": "A buyer starts every morning going through 40 open orders for resins, solvents, pigments and tins, calling suppliers one by one.",
    "after": "The buyer opens a short list each morning: 4 orders at risk, each with the supplier's latest reply and COA status attached. The other 36 are on track."
   },
   "paperwork": {
    "title": "Typing the same information twice",
    "short": "People copy details from dealer orders, batch sheets and lab registers into other systems by hand.",
    "signs": [
     "Dealer orders are typed in from WhatsApp, emails or PDFs.",
     "Batch sheets are filled on paper and typed up later — or never.",
     "COAs are retyped from the lab register, and mistakes creep in."
    ],
    "before": "The sales office spends the morning typing 60 dealer orders, each with shades and pack sizes. A wrong pack size slips through about once a week.",
    "after": "Orders are read and entered automatically. Staff review all 60 on one screen, fix the 3 that are flagged, and are done before 10am."
   },
   "knowledge": {
    "title": "Know-how lives in a few people's heads",
    "short": "When your senior shade matcher or batch chemist is away, nobody knows the fix.",
    "signs": [
     "New batch operators take months to become useful.",
     "The same tinting and thinning questions get asked again and again.",
     "Batch sheets don't say what to do when a batch goes wrong."
    ],
    "before": "On the night shift, a batch's viscosity comes out too high. The only person who knows the fix is asleep. The vessel waits until morning.",
    "after": "The operator asks the factory assistant on a tablet. It shows how a similar batch was corrected last year, as approved by the lab. The shift chemist checks it by phone, and the batch moves again within the hour."
   },
   "energy": {
    "title": "Energy and material losses keep rising",
    "short": "Power, fuel and raw materials cost a lot — but nobody knows where they leak.",
    "signs": [
     "One monthly power bill, and no idea which mill or mixer uses what.",
     "Mills and chillers keep running when no batch is in.",
     "Washings, spills and filling losses are accepted as “normal”."
    ],
    "before": "The factory pays one large power bill. Everyone assumes the bead mills are the problem.",
    "after": "Meters show the chiller runs all weekend with no batch in. Fixing its controls saves more than any change to the mills."
   },
   "safety": {
    "title": "Fire and spill risks are spotted only after an incident",
    "short": "Solvent spills and near-misses go unreported, and safety checks depend on someone remembering.",
    "signs": [
     "Earthing checks, hot-work permits and extinguisher checks are not always done.",
     "Spills and near-misses are written up after the fact, if at all.",
     "Fire and explosives safety rules are checked once a year, on paper."
    ],
    "before": "An operator pours solvent into a mixer without the earthing clip attached. A small static spark flashes. Nobody reports it. Two months later, the same mistake starts a fire.",
    "after": "A tablet checklist asks for an earthing check before each solvent charge. A missed check alerts the supervisor, and the near-miss is logged the same day."
   },
   "quotes": {
    "title": "Quotes and shade samples are slow",
    "short": "Customers wait days for a price or a shade sample — and some go elsewhere.",
    "signs": [
     "Only one or two people can cost a new formula.",
     "Dealers call to ask “where is my order?”",
     "Sales doesn't know what the lab and floor can actually do."
    ],
    "before": "A contractor sends a shade sample for 500 litres of exterior emulsion. The quote takes 6 days because the lab and costing are busy. The contractor has already ordered elsewhere.",
    "after": "The tool finds three close shades made last year, with their formulas and costs, and drafts a price within an hour. The lab checks the nearest match and costing checks the price. It goes out the same day."
   }
  }
 },
 "food": {
  "processes": {
   "1": {
    "title": "Customer enquiries",
    "today": "The product spec comes by email. The pack size and quantity come on WhatsApp. Someone has to put it all together.",
    "help": "AI gathers the customer's needs from emails and messages into one place, finds earlier orders for the same product, and drafts the questions still open.",
    "friction": "The customer's needs are spread across many messages. A repeat order can quietly come with a new label, pack size or shelf-life demand.",
    "steps": [
     "Receive the enquiry",
     "Work out who the customer is and which product they want",
     "Collect the spec, label artwork and pack details",
     "Confirm recipe, pack size, quantity, shelf life and delivery date",
     "Ask about anything missing, like allergen or private-label needs",
     "Hand it to costing"
    ]
   },
   "2": {
    "title": "Costing and quotations",
    "today": "One old ingredient rate or a forgotten packaging cost can ruin the quote.",
    "help": "AI finds similar past products and points out cost lines you may have missed. Your own costing sheet still does the sums.",
    "friction": "Old ingredient prices, cooking losses and cleaning time that live only in someone's head all make the cost wrong.",
    "steps": [
     "List each step: mixing, cooking, filling and packing",
     "Work out ingredients per batch, including process losses",
     "Get ingredient and packaging prices",
     "Add cleaning and changeover time",
     "Add testing, cold storage and freight",
     "Approve the margin"
    ],
    "causes": [
     "Yield (good output per batch) assumed too high",
     "Cleaning time left out",
     "Expiry returns not allowed for",
     "Out-of-date ingredient prices"
    ]
   },
   "3": {
    "title": "Checking the customer's order",
    "today": "The price matches. But the label, pack size or shelf-life terms may have changed.",
    "help": "AI compares the customer's order with the quote they accepted, and flags any changes for someone to approve.",
    "friction": "Customers change label or delivery terms after the quote. Packing often starts before these are sorted out.",
    "steps": [
     "Match the customer's order to our quote",
     "Check product, pack size, label, quantity, price and dates",
     "Check the minimum shelf life needed at delivery",
     "Confirm the credit limit or advance payment",
     "Confirm the order to the customer"
    ],
    "causes": [
     "Delivery schedule changed",
     "New label or artwork",
     "Shelf-life rule nobody checked"
    ]
   },
   "4": {
    "title": "Recipes, labels and specs",
    "today": "An old recipe sheet or label artwork can travel further on the floor than the new one.",
    "help": "AI finds duplicate ingredient codes and shows which open orders a recipe or label change could affect.",
    "friction": "Old recipe sheets, outdated labels and duplicate codes give the floor the wrong instructions.",
    "steps": [
     "Create ingredient and product codes",
     "Issue the recipe, process steps and checks",
     "Approve label artwork, including ingredients, allergens and FSSAI details",
     "Approve substitute ingredients or suppliers",
     "Send updated recipes and labels to everyone who needs them"
    ],
    "causes": [
     "Recipe changed",
     "Old labels still in stock",
     "Substitute changes the allergen list",
     "Same ingredient, two codes"
    ]
   },
   "5": {
    "title": "Planning production",
    "today": "A delivery date only holds if ingredients, lines, cleaning and people are all ready.",
    "help": "AI brings all these limits together in one view, and explains in plain words the schedule options a planning tool comes up with.",
    "friction": "A plan can ignore cleaning time, the right order for allergen products, or how close ingredients are to expiry.",
    "steps": [
     "Separate confirmed orders from expected ones",
     "Check usable stock and its expiry dates",
     "Check free line time and people",
     "Run allergen products last, before a full clean",
     "Promise delivery dates",
     "Re-plan when things change"
    ],
    "causes": [
     "Cleaning time underestimated",
     "Main line fully booked",
     "Ingredient close to expiry",
     "Rush orders keep arriving"
    ]
   },
   "6": {
    "title": "Buying ingredients and packaging",
    "today": "A supplier says “tomorrow”. The buyer still needs a quantity and a firm date.",
    "help": "AI compares supplier quotes, pulls out what each supplier has actually promised, and drafts follow-ups for critical ingredients and packaging.",
    "friction": "Vague promises, part deliveries and short shelf life hide how much production is really at risk.",
    "causes": [
     "Advance not yet paid",
     "Specification not clear",
     "Supplier not approved for food use",
     "Vague delivery promise"
    ]
   },
   "7": {
    "title": "Receiving ingredients and packaging",
    "today": "The truck has arrived. The paperwork, weight, temperature and expiry dates still need checking.",
    "help": "AI reads the delivery documents and flags differences from the purchase order, including short expiry dates.",
    "steps": [
     "Log the vehicle and check its documents",
     "Check the truck is clean, and the temperature of chilled goods",
     "Unload",
     "Weigh or count",
     "Check expiry dates and pack condition",
     "Make the goods receipt entry",
     "Give it a batch number, storage place and hold status"
    ],
    "causes": [
     "Short shelf life on arrival",
     "Chilled goods arrived warm",
     "Damaged or leaking packs",
     "Only part of the order came"
    ]
   },
   "8": {
    "title": "Checking incoming ingredients",
    "today": "Ingredients can sit in stores while a lab test or supplier certificate is still pending.",
    "help": "AI checks supplier certificates against your approved specs and lists any missing records.",
    "friction": "A missing certificate or a pending lab result means received ingredients cannot be used.",
    "steps": [
     "Identify the batch and get the supplier's COA (certificate of analysis)",
     "Decide which checks to do",
     "Take samples and test them, for example for moisture",
     "Record the results",
     "Accept, reject or put on hold",
     "Keep held stock apart and tell purchasing"
    ],
    "causes": [
     "Missing certificate",
     "Lab result still pending",
     "Pests or foreign matter found",
     "Held stock gets mixed in"
    ]
   },
   "9": {
    "title": "Stores, cold rooms and stock",
    "today": "The sheet says the stock is there. But some of it is on hold, near expiry or in another cold room.",
    "help": "AI can match different names for the same ingredient. It can also turn a barcode scan or a spoken note into a stock entry, which a person confirms.",
    "friction": "Unrecorded moves, open bags and held or expiring stock make it look like ingredients are available when they aren't.",
    "steps": [
     "Label incoming stock and put it in its place",
     "Keep allergen ingredients apart",
     "Issue the earliest expiry first",
     "Move stock between stores and cold rooms",
     "Take back unused ingredients",
     "Count a few items regularly",
     "Check the count against the stock records"
    ],
    "causes": [
     "Stock move not recorded",
     "Older stock not used first",
     "Bags and kg mixed up",
     "Cold room full"
    ]
   },
   "10": {
    "title": "Cleaning and changeover",
    "today": "The changeover starts. Then the line waits for cleaning sign-off, the right labels or the recipe sheet.",
    "help": "AI can check early whether ingredients, labels and cleaning sign-off are ready. It can also find the approved recipe and setup notes.",
    "friction": "During changeover, the line stands waiting for cleaning, line clearance or a sign-off.",
    "steps": [
     "Get the approved recipe and the right labels",
     "Bring weighed ingredients to the line",
     "Clean and sanitise the line",
     "Do line clearance (remove everything left from the last product)",
     "Set up the filler and date coder",
     "Run a trial and check fill weight and date code",
     "Get the first packs approved"
    ],
    "causes": [
     "Cleaning not finished",
     "Wrong labels or packing film",
     "Weighed ingredients not ready",
     "Waiting for QA sign-off"
    ]
   },
   "11": {
    "title": "Recording production",
    "today": "The batch is made now. The batch record often gets written at the end of the shift.",
    "help": "The operator speaks a short update. AI turns it into a draft batch entry, and the operator confirms it.",
    "friction": "Records are written late, so short stoppages and wasted product never make it into the record.",
    "steps": [
     "Start the batch",
     "Weigh and add the ingredients",
     "Cook, mix or process",
     "Fill and pack",
     "Record good packs, rejects and rework",
     "Move to the next stage or cold store",
     "Close the batch"
    ],
    "causes": [
     "Waste not reported",
     "Rework added but not recorded",
     "Ingredient use differs from recipe",
     "Batches split or combined"
    ]
   },
   "12": {
    "title": "Shift handover",
    "today": "The next supervisor asks which line was cleaned and which batch is on hold.",
    "help": "AI can draft the handover note from confirmed updates. It carries unfinished actions over to the next shift.",
    "friction": "The next shift has to piece together what happened. Cleaning status and held batches drop out of the logbook.",
    "steps": [
     "Report which batches are running and how much is left",
     "Report the cleaning status of each line",
     "Report batches on hold and where they are kept",
     "Report machine problems",
     "Report any temporary changes made during the shift",
     "Hand over actions that are still pending"
    ],
    "causes": [
     "Nobody takes ownership",
     "Cleaning status unclear",
     "Unclear where held stock is"
    ]
   },
   "13": {
    "title": "Quality and food-safety checks",
    "today": "If a check happens late, there are more packs to sort, rework or throw away.",
    "help": "AI can flag missed checks. It can also bring temperatures, weights and past problems together for the team to review.",
    "friction": "When checks are missed or kept in different registers, faulty packs keep moving before anyone stops them.",
    "steps": [
     "Approve the first packs",
     "Check cooking temperatures and times",
     "Check fill weights and seals at set times",
     "Check date codes and labels",
     "Record the results",
     "Hold suspect batches",
     "Fix the problem and restart"
    ],
    "causes": [
     "Thermometer or scale not checked",
     "Check missed",
     "Real change in the process",
     "Too few samples checked"
    ]
   },
   "14": {
    "title": "Outside stores and co-packers",
    "today": "Product goes to a cold store or co-packer (another unit that packs for you). It comes back in parts, so stock is hard to follow.",
    "help": "AI can match what went out against what came back. It shows which customer orders depend on that stock.",
    "friction": "Once product is outside, it becomes unclear how much is where, at what temperature, and how near expiry.",
    "steps": [
     "Send product or ingredients with instructions",
     "Confirm they were received",
     "Track stock and storage temperature",
     "Arrange the return or direct delivery",
     "Inspect what comes back",
     "Match packs, losses and the balance left",
     "Approve the bill"
    ],
    "causes": [
     "Unclear who pays for losses",
     "Sent in kg, returned in packs",
     "Temperature records missing",
     "Stock expiring at the outside store"
    ]
   },
   "15": {
    "title": "Breakdowns and maintenance",
    "today": "The repair history is in one technician's head. The filler manual may be in a different folder.",
    "help": "AI can find the right manual and past repairs for the machine. It can also draft a fault report with the machine number.",
    "friction": "Fault know-how sits with one technician. A broken chiller, filler or sealer puts product at risk, not just time.",
    "steps": [
     "Report what is going wrong",
     "Make it safe and cover or move open product",
     "Find the cause, using past repairs and the manual",
     "Find the spare part, food-grade where needed",
     "Repair the machine",
     "Clean the area and get QA sign-off",
     "Close the job"
    ]
   },
   "16": {
    "title": "Power, water, steam and cold",
    "today": "Chillers, boilers and cold rooms use a lot. It never shows up in the production report.",
    "help": "AI can flag unusual readings. It can help compare power and water per batch or per tonne made.",
    "friction": "Cold-room power and cleaning water sit outside production reports, so nobody links them to a product.",
    "steps": [
     "Run boilers, chillers, compressors and pumps",
     "Note meter readings and cold-room temperatures",
     "Check for leaks and doors left open",
     "Treat water for process and cleaning",
     "Manage backup power for cold rooms",
     "Look into unusual usage"
    ],
    "causes": [
     "Cold-room doors left open",
     "Leaks",
     "Cleaning uses more water than needed",
     "No meters installed"
    ]
   },
   "17": {
    "title": "Waste, rework and expired stock",
    "today": "We count rejected packs. But nobody adds up the wasted ingredients, extra hours or expired stock.",
    "help": "AI can check ingredients in against good packs out, and add waste costs back to the batch that caused them.",
    "friction": "Wasted ingredients, extra line time and expired stock get hidden inside the cost of the original batch.",
    "steps": [
     "Keep rejected product separate",
     "Weigh or count it",
     "Sort it: allowed rework, animal feed or disposal",
     "Get approval to rework or dispose",
     "Record any rework added back into batches",
     "Dispose of waste safely",
     "Check quantities and money add up"
    ],
    "causes": [
     "Ingredients in and packs out don't match",
     "Waste hidden in batch cost",
     "Expired stock not recorded"
    ]
   },
   "18": {
    "title": "Ready to dispatch?",
    "today": "Production says the batch is packed. But a lab result or QA release may still be pending.",
    "help": "AI can check each order's requirements across all teams, and prepare documents from approved test results.",
    "friction": "Packed product can sit waiting for a lab result, a QA release, a document or a go-ahead from accounts.",
    "steps": [
     "Finish lab tests, some of which take days",
     "Sort out batches that failed",
     "Get QA to release the batch",
     "Prepare the COA",
     "Check labels, batch codes and expiry dates",
     "Check the full order is there",
     "Give the go-ahead to load"
    ],
    "causes": [
     "Lab result pending",
     "Label or date code error",
     "Shelf life too short for the customer",
     "Held for payment"
    ]
   },
   "19": {
    "title": "Packing, cold chain and delivery",
    "today": "The product is ready. Then the reefer truck (refrigerated truck) is late or the cartons run out.",
    "help": "AI can check packing and temperature instructions and gather labels, photos and dispatch documents in one place.",
    "friction": "Late refrigerated trucks, missing cartons and label changes hold up product whose shelf life keeps ticking.",
    "steps": [
     "Find the customer's packing and storage instructions",
     "Get cartons and shrink wrap",
     "Label, count and weigh",
     "Make the packing list and e-way bill",
     "Book a refrigerated or clean truck",
     "Check truck temperature and cleanliness, then load",
     "Record when the vehicle leaves"
    ],
    "causes": [
     "Truck not cold enough",
     "Not enough cartons",
     "Vehicle changed",
     "Count doesn't match documents"
    ]
   },
   "20": {
    "title": "Invoices and getting paid",
    "today": "Another reminder won't help if the distributor deducted for expired returns or has no proof of delivery.",
    "help": "AI can find what the dispute is about, pull together the supporting papers and draft the next follow-up.",
    "causes": [
     "Expiry returns deducted",
     "No proof of delivery",
     "Damaged goods claim",
     "Long payment terms"
    ]
   },
   "21": {
    "title": "Complaints and recalls",
    "today": "A customer finds something wrong in a pack. The team starts digging through batch and dispatch records.",
    "help": "AI can collect the complaint details and trace the batch code through ingredients, production and dispatch.",
    "friction": "Complaint details are kept apart from the records of which ingredients went into each batch and where it went.",
    "steps": [
     "Find the product and batch code",
     "Collect photos, samples and details",
     "Hold remaining stock of that batch",
     "Trace the ingredient batches and process records",
     "Find the cause",
     "Decide on a withdrawal or recall — a person makes this call",
     "Check the fix worked"
    ],
    "causes": [
     "Can't trace batch codes to customers",
     "Ingredient batches not recorded",
     "Bad batch not stopped in time"
    ]
   },
   "22": {
    "title": "People and know-how",
    "today": "When the experienced cook or line lead is on leave, small questions can stop the batch.",
    "help": "AI can find the approved recipes and hygiene instructions, and draft explanations in the team's own language, for a supervisor to check.",
    "steps": [
     "Plan the shifts",
     "Check who has the right skills, and cover absences",
     "Train new joiners on hygiene first",
     "Explain the approved way to do each job",
     "Keep medical fitness records up to date",
     "Record the training",
     "Fix attendance problems"
    ],
    "causes": [
     "Seasonal and contract workers",
     "Language barriers on the floor",
     "Hygiene rules not understood",
     "Same data entered twice"
    ]
   },
   "23": {
    "title": "Food safety records and audits",
    "today": "An FSSAI inspection or customer audit is coming up. Licences, cleaning logs and pest control records are scattered.",
    "help": "AI can find the records and flag expired licences, missing signatures and overdue actions.",
    "friction": "Expired licences, gaps in logs and unfinished actions only come to light during the audit.",
    "steps": [
     "Do hygiene and safety inspections",
     "Record accidents, near misses and food-safety slips",
     "Keep cleaning and pest control logs",
     "Collect licences, water test reports and certificates",
     "Give each action an owner",
     "Get ready for the audit",
     "Check each action is really done"
    ],
    "causes": [
     "Licence or certificate expired",
     "Logs filled in from memory",
     "Actions closed without checking"
    ]
   },
   "24": {
    "title": "Product costs and improvements",
    "today": "The month made money. But it is hard to say which products or pack sizes lost money, and why.",
    "help": "AI can bring actual batch costs together and flag the gaps between plan and actual that are worth looking into.",
    "friction": "You can see losses in the total, but it is hard to trace them to waste, expiry returns or freight."
   }
  },
  "links": {
   "1-2": "Customer specs and pack details",
   "3-4": "The confirmed product and label",
   "4-5": "The approved recipe and process",
   "4-10": "Recipe and labels for the run",
   "5-6": "Ingredients and packaging needed, and by when",
   "5-10": "Which product runs next",
   "7-8": "Ingredients waiting to be checked",
   "8-9": "Ingredients approved for use",
   "9-10": "Ingredients issued to the batch",
   "10-11": "The batch starts",
   "11-13": "Batches and packs to be checked",
   "11-14": "Product sent to outside stores or co-packers",
   "14-9": "Stock back from outside",
   "13-17": "Rejected packs and batches",
   "13-18": "Batches passed by QA",
   "18-19": "Batches released to ship",
   "19-21": "Which batch went to which customer",
   "17-24": "The cost of waste and expiry",
   "11-24": "Actual ingredients and hours used",
   "16-24": "Energy and water cost per batch"
  },
  "ripples": [
   {
    "title": "The skipped line clearance",
    "path": [
     5,
     10,
     11,
     18,
     19,
     21
    ],
    "story": "A rush order squeezes the changeover, so line clearance is skipped. Old packing film stays at the packer. A batch of cashew cookies goes out in plain-cookie packs. A customer reacts to an undeclared nut, and the batch must be recalled."
   },
   {
    "title": "The warm delivery",
    "path": [
     6,
     7,
     9,
     11,
     19,
     21
    ],
    "story": "Chilled paneer arrives warm because the supplier's truck cooler failed. The gate team is busy and skips the temperature check. It goes straight into production. Customers complain it spoiled well before the expiry date."
   },
   {
    "title": "The sealer that kept tripping",
    "path": [
     15,
     11,
     13,
     17,
     18
    ],
    "story": "The pouch sealer trips a few times every shift. Each stop is short, so nobody records it. Weak seals start leaking in the cold store. Two batches are thrown away, and the order ships short."
   },
   {
    "title": "The yield that was guessed",
    "path": [
     2,
     11,
     17,
     24,
     2
    ],
    "story": "The quote assumed 95% yield (good output per batch). Cooking losses and line waste make it closer to 88%. Nobody connects the two numbers. The product loses money every batch, and the next quote repeats it."
   }
  ],
  "headaches": {
   "breakdowns": {
    "title": "Lines and cold rooms stop without warning",
    "short": "A filler, sealer or chiller breaks down, product sits waiting, and everyone scrambles.",
    "signs": [
     "Repairs happen after something breaks, not before.",
     "The same machine fails again and again.",
     "Spares are ordered in a rush, at a higher price, while product waits."
    ],
    "before": "A cold-room compressor fails on a Saturday night. By Monday morning, 2 tonnes of chilled stock are too warm to sell and must be thrown away.",
    "after": "The tool watches cold-room temperatures and compressor run times. It flags the compressor running longer each day. It is serviced on Thursday, before it fails."
   },
   "defects": {
    "title": "Bad batches are caught too late",
    "short": "Problems are found at final QA — or worse, by the customer.",
    "signs": [
     "Rework and waste bins are always full.",
     "Customers complain about the same problem, like leaking packs or short weight.",
     "Checks depend on one experienced person's eyes and taste."
    ],
    "before": "5,000 snack pouches ship with weak seals. They go stale on the shop shelf, and the distributor sends the lot back.",
    "after": "Seal checks every 30 minutes are logged on a tablet. The tool flags weak seals rising in the first hour. The operator adjusts the sealer before the batch is ruined."
   },
   "planning": {
    "title": "The production plan changes every day",
    "short": "The schedule lives in a spreadsheet — and in one planner's head.",
    "signs": [
     "Rush orders break the plan, and cleaning time gets squeezed.",
     "Some lines sit idle while others run overtime.",
     "Only one person knows the right order to run allergen and plain products."
    ],
    "before": "A big distributor adds an urgent order. The planner spends half a day reshuffling. An extra full clean is needed, and two orders go late without those customers being told.",
    "after": "The planner enters the urgent order. The tool shows two options, the cleaning each needs, and which orders each would push back. The team picks one and tells the affected customers the same day."
   },
   "inventory": {
    "title": "Too much of some stock, not enough of others",
    "short": "Ingredients expire in the store, yet production stops because one packing material is missing.",
    "signs": [
     "Ingredients are thrown away after their expiry date.",
     "Production waits for a film or label nobody noticed was running out.",
     "Reorder levels were set years ago and never changed."
    ],
    "before": "The store throws away 300 kg of expired spices. The same week, a line stops for a full shift waiting for printed pouches.",
    "after": "The tool warns that pouches will run short in 9 days, and lists ingredients expiring within a month. Purchasing reorders pouches in time, and planning uses the spices first."
   },
   "suppliers": {
    "title": "Chasing suppliers takes the whole day",
    "short": "Your team spends hours on calls and messages asking “where is my order?”",
    "signs": [
     "Late ingredients or packaging are a regular reason for delays.",
     "Supplier updates live in personal inboxes and phones.",
     "Nobody can quickly say which supplier often sends stock with short shelf life."
    ],
    "before": "A buyer starts every morning going through 40 open ingredient and packaging orders, calling suppliers one by one.",
    "after": "The buyer opens a short list each morning: 4 orders at risk, each with the supplier's latest reply attached. The other 36 are on track."
   },
   "paperwork": {
    "title": "Typing the same information twice",
    "short": "People copy details from orders, PDFs and paper batch records into other systems by hand.",
    "signs": [
     "Distributor orders are typed in from emails or WhatsApp.",
     "Batch records and temperature logs are filled on paper and typed up later — or never.",
     "Mistakes creep in when copying batch codes and quantities."
    ],
    "before": "The sales office spends the morning typing 60 distributor orders from WhatsApp and email. A wrong pack size slips through about once a week.",
    "after": "Orders are read and entered automatically. Staff review all 60 on one screen, fix the 3 that are flagged, and are done before 10am."
   },
   "knowledge": {
    "title": "Know-how lives in a few people's heads",
    "short": "When your head cook or senior technician is away, nobody knows the fix.",
    "signs": [
     "New workers take months to get batches right.",
     "The same questions about recipes and machine settings get asked again and again.",
     "Recipes, cleaning steps and manuals are outdated, missing or never read."
    ],
    "before": "On night shift, the sauce keeps coming out too thick. The head cook who knows the fix is asleep. The line waits until morning.",
    "after": "The operator asks the factory assistant on a tablet. It shows the approved fix from last year's batch notes. The supervisor checks it, and the line runs again in 20 minutes."
   },
   "energy": {
    "title": "Power, water and ingredient bills keep rising",
    "short": "Cold rooms, boilers, cleaning and ingredients cost a lot — but nobody knows where they leak.",
    "signs": [
     "One monthly power bill, and no idea which machine or cold room uses what.",
     "Chillers and compressors keep running when nothing is being made.",
     "Ingredient wastage is accepted as “normal”."
    ],
    "before": "The factory pays one large power bill. Everyone assumes the fryers are the problem.",
    "after": "Meters show one cold room running non-stop because of a torn door seal. Fixing it saves more than any change to the fryers."
   },
   "safety": {
    "title": "Safety and hygiene risks are spotted only after an incident",
    "short": "Near-misses go unreported, and hygiene checks depend on someone remembering.",
    "signs": [
     "Hairnets, gloves and handwashing rules are not always followed.",
     "Incident reports and food-safety slips are written after the fact, if at all.",
     "Hygiene and safety audits happen once a year, on paper."
    ],
    "before": "A worker slips on the wet floor near the washing area. Nobody reports it. Two months later it happens again — and someone is hurt.",
    "after": "The first slip is logged on a phone in a minute. The tool shows two earlier reports from the same spot. The drain is fixed and anti-slip mats go down that week."
   },
   "quotes": {
    "title": "Quotes and customer replies are slow",
    "short": "Customers wait days for a price or an order update — and some go elsewhere.",
    "signs": [
     "Only one or two people can cost a new product.",
     "Distributors call to ask “where is my order?”",
     "Sales doesn't know what's actually possible on the line."
    ],
    "before": "A retailer asks for a price on a private-label pickle in 200 g jars. The quote takes 6 days because the costing person is busy. The retailer has already gone elsewhere.",
    "after": "The tool finds three similar jar products made last year and drafts a price within an hour. The costing person checks it and sends it the same day."
   }
  }
 },
 "foundry": {
  "processes": {
   "1": {
    "title": "Handling enquiries",
    "today": "The casting drawing comes by email. The alloy and yearly quantity come on WhatsApp. Someone has to put it all together.",
    "help": "AI gathers the customer's needs from emails and messages into one place, finds earlier enquiries for the same casting, and drafts the questions still unanswered.",
    "friction": "Alloy, casting weight, machining allowance and test needs are spread across many messages. A repeat casting can quietly come with a new grade or drawing.",
    "steps": [
     "Receive the enquiry and casting drawing",
     "Work out who the customer is and which casting they want",
     "Check if the customer has a pattern or we must make one",
     "Confirm alloy grade, casting weight, quantity and test needs",
     "Ask the customer about anything missing",
     "Hand it to the person who costs it"
    ],
    "causes": [
     "Details spread across messages",
     "Only a machined drawing, no casting drawing",
     "Test needs not stated",
     "Not every enquiry is serious"
    ]
   },
   "2": {
    "title": "Costing and quotations",
    "today": "Pig iron and scrap prices move every month. One old rate or a forgotten core cost can ruin the quote.",
    "help": "AI finds similar past castings and points out cost lines you may have missed, like cores or radiography. Your own costing sheet still does the calculations.",
    "friction": "Old metal prices, guessed yield (good casting weight out of metal poured) and fettling hours that live in someone's head make the cost wrong.",
    "steps": [
     "Work out casting weight and poured weight with gates and risers",
     "Add charge metal, alloy additions and melting loss",
     "Get current pig iron, scrap or ingot prices",
     "Add moulding, cores, sand and power per tonne melted",
     "Add pattern cost, fettling, heat treatment, testing and transport",
     "Approve the profit margin"
    ],
    "causes": [
     "Yield guessed too high",
     "Core or pattern cost left out",
     "Unsure how many castings will be rejected",
     "Out-of-date metal prices"
    ]
   },
   "3": {
    "title": "Checking the customer's order",
    "today": "The price per kg matches. But the alloy grade or test requirement may have changed.",
    "help": "AI compares the customer's purchase order with the quote they accepted, and flags any changes for someone to approve.",
    "friction": "Customers change grade, machining allowance or test needs after the quote. Moulding often starts before these differences are sorted out.",
    "steps": [
     "Match the customer's purchase order to our quote",
     "Check drawing version, grade, quantities, prices, dates and test needs",
     "Check if the price moves with metal prices",
     "Confirm the customer's credit limit or advance payment",
     "Confirm the order to the customer"
    ],
    "causes": [
     "Delivery schedule changed",
     "Grade or test needs changed",
     "Metal price clause not agreed"
    ]
   },
   "4": {
    "title": "Patterns, drawings and methods",
    "today": "An old pattern or core box can stay in use long after the drawing changed.",
    "help": "AI finds duplicate casting codes and shows which open jobs a drawing or pattern change could affect.",
    "friction": "Duplicate casting codes, old drawings and unmarked pattern versions give the floor the wrong instructions.",
    "steps": [
     "Create casting codes and units",
     "Issue the casting drawing, method (gating and riser layout) and inspection plan",
     "Mark pattern and core box versions",
     "Record the approved pouring temperature and alloy additions",
     "Approve substitute grades or charge mixes",
     "Send new versions to everyone who needs them"
    ],
    "causes": [
     "Drawing changed but pattern not updated",
     "Castings made from old pattern",
     "Substitute grade not approved",
     "Same casting, two codes"
    ]
   },
   "5": {
    "title": "Planning heats and moulds",
    "today": "A promised date only holds if moulds, cores, charge and furnace time are all ready together.",
    "help": "AI brings all these limits together in one view, and explains in plain words the schedule options a planning tool comes up with.",
    "friction": "A heat stays on paper even after the cores were not ready or the charge metal didn't arrive.",
    "steps": [
     "Separate confirmed orders from expected ones",
     "Group castings of the same grade into one heat",
     "Check moulds, cores and charge for each heat",
     "Plan furnace time around power limits and maintenance",
     "Allow for cooling, fettling and outside machining",
     "Promise delivery dates and re-plan when things change"
    ],
    "causes": [
     "Cores not ready",
     "Not enough castings of one grade to fill a heat",
     "Rush orders keep arriving",
     "Furnace lining or power limits"
    ]
   },
   "6": {
    "title": "Buying charge and supplies",
    "today": "The scrap dealer says “tomorrow”. The buyer still needs the grade, quantity and a firm date.",
    "help": "AI compares supplier quotes, pulls out what each supplier has actually promised, and drafts follow-up messages for critical material.",
    "friction": "Vague promises on scrap, pig iron, alloys and sand hide how many heats are really at risk.",
    "steps": [
     "Raise a purchase request for charge, alloys, sand and binders",
     "Find approved suppliers and collect quotes",
     "Compare grades, units and what each quote leaves out",
     "Clear up doubts with suppliers",
     "Approve the purchase order",
     "Get the supplier to confirm the order and the dispatch date"
    ],
    "causes": [
     "Advance not yet paid",
     "Scrap grade not clear",
     "Alloy or binder in short supply",
     "Vague delivery promise"
    ]
   },
   "7": {
    "title": "Receiving material",
    "today": "The truck of scrap has arrived. The weight, grade and dirt still need checking.",
    "help": "AI reads the weighbridge slip and delivery challan, and flags any differences from the purchase order.",
    "steps": [
     "Log the vehicle at the gate and check the e-way bill and challan",
     "Weigh on the weighbridge, full and empty",
     "Unload scrap, pig iron, alloys or sand",
     "Photograph rust, oil, dirt or mixed scrap",
     "Make the goods receipt entry",
     "Note grade, batch, storage bay and check status"
    ],
    "causes": [
     "Scrap grades mixed together",
     "Only part of the order came",
     "Weighbridge weight doesn't match the bill",
     "Rusty, oily or wet material"
    ]
   },
   "8": {
    "title": "Checking incoming material",
    "today": "Alloys and sand can sit in stores while a certificate or a lab check is still pending.",
    "help": "AI checks supplier certificates against your approved grades and lists any missing records.",
    "friction": "A missing certificate, or unchecked sand or alloy, means received material cannot be used.",
    "steps": [
     "Identify the batch and get the supplier's certificate",
     "Decide which checks to do",
     "Test samples, like scrap chemistry or sand grain size",
     "Record the results",
     "Accept, reject or put on hold",
     "Keep held or rejected material apart and tell purchasing"
    ],
    "causes": [
     "Missing certificate",
     "Scrap with unwanted elements",
     "Sand too fine or too wet",
     "Held material gets mixed in"
    ]
   },
   "9": {
    "title": "Stores and charge yard",
    "today": "The sheet says the scrap is there. But it is mixed grades, and the foundry returns pile has no label.",
    "help": "AI can match different names for the same grade. It can also turn a weighbridge slip or a spoken note into a stock entry, which a person confirms.",
    "friction": "Unlabelled scrap piles, mixed returns and unrecorded issues make it look like charge is available when it isn't.",
    "steps": [
     "Keep each scrap grade, pig iron and alloy in its own bay",
     "Keep foundry returns apart by grade",
     "Weigh and issue charge for each heat",
     "Issue sand, binders and coatings to moulding",
     "Track castings waiting for fettling or testing",
     "Count or weigh a few items regularly",
     "Check the count against the stock records"
    ],
    "causes": [
     "Issue to furnace not recorded",
     "Returns of different grades mixed",
     "Weighed in kg, counted in pieces",
     "Customer's own pattern or metal"
    ]
   },
   "10": {
    "title": "Moulds, cores and charge ready",
    "today": "The furnace is ready to melt. Then someone finds the cores aren't baked or a mould box is missing.",
    "help": "AI can check early whether patterns, cores, moulds and charge are ready for the next heat. It can also find the approved method and pouring sheet.",
    "friction": "The furnace and pourers stand waiting for cores, a mould, a ladle or a sign-off.",
    "steps": [
     "Get the right pattern and core boxes from the pattern shop",
     "Make and dry the cores",
     "Make the moulds and set the cores",
     "Weigh out the charge for the heat",
     "Prepare and heat the ladles",
     "Check moulds before closing them",
     "Get the first casting from a new pattern checked and approved"
    ],
    "causes": [
     "Cores not dry or broken",
     "Pattern damaged",
     "Sand not mixed right",
     "Waiting for approval"
    ]
   },
   "11": {
    "title": "Melting, pouring and recording",
    "today": "The heat is poured at 2am. The heat sheet gets filled in at the end of the shift.",
    "help": "The melter speaks a short update. AI turns it into a draft heat record linked to the job, and the melter confirms it.",
    "friction": "Heat sheets are written late, so temperatures, additions and short stoppages never make it into the record.",
    "steps": [
     "Charge the furnace",
     "Melt and take a sample for chemistry",
     "Add alloys to bring the chemistry right",
     "Check the temperature and tap into the ladle",
     "Pour the moulds and record which moulds got which heat",
     "Knock out the castings once cooled",
     "Record castings poured, metal used and leftovers"
    ],
    "causes": [
     "Heat number not marked on castings",
     "Additions not recorded",
     "Metal left over in the ladle",
     "Charge used differs from plan"
    ]
   },
   "12": {
    "title": "Shift handover",
    "today": "The night melter had trouble with the furnace lining. The day shift finds out halfway through the next heat.",
    "help": "AI can draft the handover note from confirmed updates. It carries unfinished actions over to the next shift.",
    "steps": [
     "Report which heats were poured and what is next",
     "Report moulds and cores ready, and castings still cooling",
     "Report furnace, lining and ladle condition",
     "Report castings on hold and where they are kept",
     "Hand over actions that are still pending"
    ],
    "causes": [
     "Nobody takes ownership",
     "Furnace problem not passed on",
     "Unclear which castings are from which heat"
    ]
   },
   "13": {
    "title": "Checks on each heat and casting",
    "today": "If a chemistry or hardness problem is found late, a whole heat of castings is in doubt.",
    "help": "AI can flag missed checks. It can also bring chemistry, temperatures, test bars and past defects together for the team to review.",
    "friction": "When results are kept in different registers, doubtful castings keep moving to fettling and machining before anyone stops them.",
    "steps": [
     "Check chemistry on the spectrometer (metal chemistry tester) before pouring",
     "Pour and test bars for strength or hardness",
     "Check sand properties at set times",
     "Look over castings for blowholes, cracks and sand marks",
     "Record results against the heat number",
     "Stop doubtful castings from moving on",
     "Fix the problem and restart"
    ],
    "causes": [
     "Chemistry off target",
     "Pouring temperature too low",
     "Sand too wet or weak",
     "Check missed"
    ]
   },
   "14": {
    "title": "Work sent to outside workshops",
    "today": "Castings go out for machining, heat treatment or painting. They come back in lots, so the balance is hard to follow.",
    "help": "AI can match what went out against what came back. It shows which customer orders are waiting for that work.",
    "steps": [
     "Send castings with a job-work challan and instructions",
     "Confirm the workshop received them",
     "Track the work",
     "Arrange the return",
     "Inspect what comes back",
     "Match machining rejects, losses and the balance left",
     "Approve the workshop's bill"
    ],
    "causes": [
     "Unclear who pays for castings rejected at machining",
     "Sent by weight, returned in pieces",
     "Castings returned in lots",
     "Defects found only after machining"
    ]
   },
   "15": {
    "title": "Breakdowns and maintenance",
    "today": "The furnace repair history is in one technician's head. The moulding machine manual is in a different folder.",
    "help": "AI can find the right manual and past repairs for the furnace, sand plant or moulding line. It can also draft a fault report with the machine number.",
    "friction": "Knowledge of furnace, sand plant and crane faults sits with one technician. Spares under different names slow the repair.",
    "steps": [
     "Report what is going wrong",
     "Make the furnace or machine safe to work on",
     "Find the cause, using past repairs and the manual",
     "Find the spare part or lining material",
     "Repair it",
     "Test it and get production to accept it",
     "Close the job"
    ],
    "causes": [
     "Furnace cooling water problem",
     "Lining worn faster than expected",
     "Spare part missing",
     "Poor repair records"
    ]
   },
   "16": {
    "title": "Power, fuel, air and water",
    "today": "The furnace uses most of the power. But nobody knows the power used per tonne of good castings.",
    "help": "AI can flag unusual readings. It can help compare power or fuel per tonne across similar heats and grades.",
    "friction": "Furnace holding time, idle compressors and cooling water losses never appear in production reports.",
    "steps": [
     "Run furnaces, compressors, cooling towers and dust collectors",
     "Note down meter readings for each heat",
     "Check for air and water leaks",
     "Treat the furnace cooling water",
     "Manage backup power and demand limits",
     "Look into unusual usage"
    ],
    "causes": [
     "Metal held hot too long",
     "Furnace lid left open",
     "Change in grade mix",
     "No meters installed"
    ]
   },
   "17": {
    "title": "Rejects, returns and fettling",
    "today": "We count the rejected castings. But nobody adds up the metal, power and fettling hours lost with them.",
    "help": "AI can check metal melted against good casting weight, and add rejections and extra grinding back to the job that caused them.",
    "friction": "The extra melting, moulding and grinding get hidden inside the cost of the original job.",
    "steps": [
     "Cut off gates and risers and grind the castings (fettling)",
     "Keep rejected castings separate",
     "Weigh returns, rejects and spilled metal",
     "Sort them: repair, remelt or sell",
     "Get approval for any weld repair",
     "Send returns back to the charge yard by grade",
     "Check metal melted and metal accounted for add up"
    ],
    "causes": [
     "Metal melted and metal out don't match",
     "Rejected castings hidden in job cost",
     "Repair welding not recorded"
    ]
   },
   "18": {
    "title": "Ready to dispatch?",
    "today": "The castings are fettled. But the test certificate, radiography or customer's approval may still be missing.",
    "help": "AI can check each order's requirements across all teams, and prepare test certificates from approved results.",
    "friction": "Finished castings can still sit waiting for a test report, heat treatment, a document or a go-ahead from accounts.",
    "steps": [
     "Finish all tests for each heat",
     "Sort out any casting that didn't meet the spec",
     "Get the approvals",
     "Prepare test certificates with chemistry and test bar results",
     "Approve the castings for dispatch",
     "Check the full order is there",
     "Give the go-ahead to pack"
    ],
    "causes": [
     "Inspection only partly done",
     "Castings still at heat treatment or machining",
     "Test certificate missing",
     "Held for payment or sales reasons"
    ]
   },
   "19": {
    "title": "Packing and transport",
    "today": "The castings are ready. Then the rust-protection paint is missing, pallets run short or a different truck turns up.",
    "help": "AI can check the packing instructions and gather the labels, photos and dispatch documents in one place.",
    "steps": [
     "Find the customer's packing instructions",
     "Apply rust protection and get pallets or boxes",
     "Check heat marks, then count and weigh the castings",
     "Make the packing list",
     "Book the vehicle and prepare the e-way bill",
     "Check the loading order and documents, then load",
     "Record when the vehicle leaves"
    ],
    "causes": [
     "Marking or label format changed",
     "Not enough pallets",
     "Vehicle changed",
     "Weight or count doesn't match documents"
    ]
   },
   "20": {
    "title": "Invoices and getting paid",
    "today": "Another reminder won't help if the customer rejected castings after machining or wants a price cut.",
    "help": "AI can find what the dispute is about, pull together the supporting papers and draft the next follow-up.",
    "causes": [
     "Invoice not accepted",
     "No proof of delivery",
     "Money held back for machining rejections",
     "Metal price change not agreed"
    ]
   },
   "21": {
    "title": "Complaints and product history",
    "today": "A customer finds blowholes after machining. The team starts digging through heat sheets and dispatch records.",
    "help": "AI can collect the complaint details and trace the heat number through melting, moulding, fettling and dispatch.",
    "friction": "Complaint details are kept apart from the records of which heat, sand and pattern made each casting.",
    "steps": [
     "Find which casting and heat number it is",
     "Collect photos, samples and details",
     "Stop more castings from that heat going out",
     "Check the chemistry, temperature, sand and pattern used",
     "Find the cause",
     "Agree a return, replacement or credit",
     "Check the fix worked"
    ],
    "causes": [
     "Heat number missing on the casting",
     "Not enough evidence",
     "Doubtful castings not stopped in time"
    ]
   },
   "22": {
    "title": "People and know-how",
    "today": "When the senior melter or moulder is on leave, small questions can stop the heat.",
    "help": "AI can find the approved method sheets and work instructions, and draft explanations in the team's own language, for a supervisor to check.",
    "friction": "Melting, moulding and fettling know-how leaves when experienced people leave. Language and skill gaps slow the work.",
    "steps": [
     "Plan the shifts",
     "Check who can melt, mould or fettle, and cover for absent workers",
     "Train new joiners, starting with safety around molten metal",
     "Explain the approved way to do each job",
     "Test whether people can do the job",
     "Record the training",
     "Fix attendance problems"
    ]
   },
   "23": {
    "title": "Safety records and audits",
    "today": "An audit is coming up. Crane, furnace and fume extraction records are scattered across different folders.",
    "help": "AI can find the records and flag expired documents, missing signatures and overdue actions.",
    "friction": "Expired crane tests, missing protective gear and open actions only come to light during the audit.",
    "steps": [
     "Check furnace area, ladles, cranes and fume extraction",
     "Record burns, metal splashes and near misses",
     "Issue written permission for furnace relining and risky work",
     "Collect crane test reports and other certificates",
     "Give each action an owner",
     "Get ready for the audit",
     "Check each action is really done"
    ],
    "causes": [
     "Crane or lifting gear test out of date",
     "Protective gear not worn at pouring",
     "Actions closed without checking"
    ]
   },
   "24": {
    "title": "Job costs and improvements",
    "today": "The month made money. But it is hard to say which castings lost money, and why.",
    "help": "AI can bring actual metal, power, rejects and fettling hours together and flag the gaps between plan and actual that are worth looking into.",
    "friction": "You can see losses in the overall total, but it is hard to trace them to low yield, rejects or extra grinding.",
    "causes": [
     "Wrong starting figures",
     "Same gain counted twice",
     "Grade or casting mix changed",
     "Metal price moved mid-month"
    ]
   }
  },
  "links": {
   "1-2": "Customer needs, drawings and alloy grade",
   "3-4": "The confirmed drawing and grade",
   "4-5": "The approved pattern and method",
   "4-10": "Pattern, core box and method sheet",
   "5-6": "What charge and supplies are needed, and by when",
   "5-10": "Which moulds and heat come next",
   "7-8": "Charge, alloys and sand waiting to be checked",
   "8-9": "Material approved for use",
   "9-10": "Charge and sand issued for the heat",
   "10-11": "Moulds closed and the heat starts",
   "11-12": "What happened with each heat",
   "11-13": "Heat samples and castings to be checked",
   "11-14": "Castings sent for outside work",
   "14-9": "Castings returned from outside",
   "15-5": "A furnace or line is down, so the plan changes",
   "15-11": "Stoppages and delayed heats",
   "16-24": "Power or fuel per tonne",
   "13-17": "Rejected castings",
   "13-18": "Good castings approved to ship",
   "17-24": "The cost of rejects and lost metal",
   "19-21": "Which heats went to which customer",
   "11-24": "Actual metal, power and time used"
  },
  "ripples": [
   {
    "title": "The dirty scrap",
    "path": [
     7,
     8,
     9,
     11,
     13,
     21
    ],
    "story": "A scrap lot arrives with painted and oily pieces mixed in. Nobody checks it, and it goes into the charge. The heat passes a quick look, but the castings have hidden gas holes. The customer finds them after machining and rejects the lot."
   },
   {
    "title": "The cores that weren't ready",
    "path": [
     5,
     10,
     11,
     16,
     24
    ],
    "story": "The plan sets a heat for 10am. The cores for half the moulds are still drying. The furnace holds the metal hot for two extra hours. The power bill jumps, and that heat costs far more than the quote allowed."
   },
   {
    "title": "The machining rejection",
    "path": [
     13,
     14,
     18,
     20,
     24
    ],
    "story": "Castings pass the visual check and go out for machining. At the machine shop, sand holes show up on one face. A third are rejected, and the customer won't pay for the balance. Nobody can say who pays for the wasted machining."
   },
   {
    "title": "The cold pour",
    "path": [
     15,
     11,
     13,
     17,
     2
    ],
    "story": "A worn ladle lining makes metal cool faster than usual. Nobody records the temperature at pouring. Thin sections don't fill fully, and rejections double. The quote assumed normal yield, so the job loses money."
   }
  ],
  "headaches": {
   "breakdowns": {
    "title": "Furnaces and lines stop without warning",
    "short": "A furnace, sand plant or crane fails, the heat stops, and everyone scrambles.",
    "signs": [
     "Repairs happen after something breaks, not before.",
     "The same furnace or moulding machine fails again and again.",
     "Spares and lining material are ordered in a rush, at a higher price."
    ],
    "before": "The furnace cooling water pump fails during a night heat. The melt has to be stopped, and the furnace is down for 14 hours while a part is brought in.",
    "after": "Cooling water temperature slowly rises over 10 days. The maintenance lead gets an alert, orders the pump part, and fixes it during Sunday's planned stop."
   },
   "defects": {
    "title": "Bad castings are caught too late",
    "short": "Blowholes, cracks and shrinkage are found after machining — or by the customer.",
    "signs": [
     "Reject piles and weld repairs are always high.",
     "Customers complain about, or return, the same defect.",
     "Checking depends on one experienced person's eyes."
    ],
    "before": "A lot of 600 pump housings ships with hidden shrinkage. The customer finds it after machining and sends the whole lot back, with a bill for wasted machining.",
    "after": "Heat records show pouring temperature dropping on the last moulds of each ladle. The team changes the pouring order, and the shrinkage stops before the next lot ships."
   },
   "planning": {
    "title": "The heat plan changes every day",
    "short": "Which moulds go into which heat lives in a register — and in one person's head.",
    "signs": [
     "Rush orders break the plan constantly.",
     "Moulds wait for metal, or metal waits for moulds.",
     "Only one person really knows how to plan heats, and everyone calls them."
    ],
    "before": "A big customer adds an urgent order in a different grade. The planner spends half a day reshuffling heats, and two other orders end up late without those customers being told.",
    "after": "The planner enters the urgent order. The tool shows two options and which orders each would push back. The team picks one and tells the affected customers the same day."
   },
   "inventory": {
    "title": "Too much of some stock, not enough of others",
    "short": "The yard is full of scrap, yet a heat stops because one alloy or binder is missing.",
    "signs": [
     "Cash is tied up in scrap and pig iron that hasn't moved in months.",
     "A heat waits for an alloy nobody noticed was running out.",
     "Reorder levels were set years ago and never changed."
    ],
    "before": "The yard holds 3 months of steel scrap but runs out of a small alloy addition. A full shift of moulds waits for metal.",
    "after": "The tool warns the alloy will run short in 9 days based on planned heats. Purchasing reorders in time — and holds back on more scrap."
   },
   "suppliers": {
    "title": "Chasing suppliers takes the whole day",
    "short": "Your team spends hours on calls asking scrap dealers and alloy suppliers “where is my order?”",
    "signs": [
     "Late scrap, alloys or binders are a regular reason for delays.",
     "Supplier updates live in personal phones and WhatsApp.",
     "Nobody can quickly say which supplier is most reliable."
    ],
    "before": "A buyer starts every morning going through 30 open orders for scrap, alloys, sand and binders, calling suppliers one by one.",
    "after": "The buyer opens a short list each morning: 4 orders at risk, each with the supplier's latest reply attached. The other 26 are on track."
   },
   "paperwork": {
    "title": "Typing the same information twice",
    "short": "People copy orders, heat sheets and weighbridge slips into Tally or Excel by hand.",
    "signs": [
     "Customer orders are typed in from emails or PDFs.",
     "Heat sheets are filled on paper and typed up later — or never.",
     "Mistakes creep in when copying weights and numbers between systems."
    ],
    "before": "The office spends the morning typing heat sheets and weighbridge slips into the system. A wrong weight slips through about once a week.",
    "after": "Slips and sheets are read and entered automatically. Staff review them on one screen, fix the few that are flagged, and are done before 10am."
   },
   "knowledge": {
    "title": "Know-how lives in a few people's heads",
    "short": "When your senior melter or moulder is away, nobody knows how to fix the problem.",
    "signs": [
     "New moulders and melters take months to become useful.",
     "The same questions about additions and pouring get asked again and again.",
     "Method sheets are outdated, missing, or never read."
    ],
    "before": "A night-shift melter gets a chemistry result that's off target. The only person who knows the right addition is asleep. The heat is held, and the moulds wait.",
    "after": "The melter asks the factory assistant on a tablet. It shows the approved addition chart and last year's note on the same problem. A supervisor checks it, and the heat is poured 20 minutes later."
   },
   "energy": {
    "title": "Power and metal bills keep rising",
    "short": "Power, fuel and metal cost a lot — but nobody knows where they leak.",
    "signs": [
     "One monthly electricity bill, and no idea what each heat really used.",
     "Metal is held hot while moulds aren't ready.",
     "Low yield and melting loss are accepted as “normal”."
    ],
    "before": "The foundry pays one large power bill. Everyone blames the furnace itself.",
    "after": "Meters show metal is often held hot for an hour waiting for moulds. Better timing between moulding and melting saves more than any change to the furnace."
   },
   "safety": {
    "title": "Safety risks are spotted only after an accident",
    "short": "Near-misses at the furnace and pouring area go unreported, and safety checks depend on someone remembering.",
    "signs": [
     "Face shields, boots and protective clothing are not always worn at pouring.",
     "Incident reports are written after the fact, if at all.",
     "Crane and ladle checks happen once a year, on paper."
    ],
    "before": "Damp scrap goes into the furnace and metal splashes out. Nobody is hurt, so nobody reports it. Two months later it happens again — and a worker is burned.",
    "after": "The daily charge check flags wet scrap in the bay. The supervisor gets an alert, the scrap is dried before use, and the near miss is logged."
   },
   "quotes": {
    "title": "Quotes and customer replies are slow",
    "short": "Customers wait days for a price on a new casting — and some go elsewhere.",
    "signs": [
     "Only one or two people can prepare a quote.",
     "Customers call to ask “where is my order?”",
     "Sales doesn't know which grades and furnace slots are actually free."
    ],
    "before": "A customer sends a drawing for a new valve body. The quote takes 6 days because the owner is busy. The customer has already ordered elsewhere.",
    "after": "The tool finds three similar castings made last year, with their weights, yield and rejections, and drafts a price within an hour. The owner checks it and sends it the same day."
   }
  }
 },
 "machining": {
  "processes": {
   "1": {
    "title": "Handling enquiries",
    "today": "A drawing comes by email. The quantity and material grade come on WhatsApp. Someone has to put it all together.",
    "help": "AI gathers the customer's needs from emails and messages into one place, finds earlier enquiries for the same part, and drafts the questions still unanswered.",
    "friction": "Drawings, grades, tolerances and finish needs are spread across many messages. A repeat part can quietly come with a new drawing revision.",
    "steps": [
     "Receive the enquiry and drawings",
     "Work out who the customer is and which part they want",
     "Collect drawings, 3D files and attachments",
     "Confirm drawing revision, material grade, quantity and delivery date",
     "Ask about unclear tolerances, finish or welding needs",
     "Hand it to an estimator"
    ]
   },
   "2": {
    "title": "Costing and quotations",
    "today": "One old steel rate, a missed setup or forgotten plating charge can ruin the quote.",
    "help": "AI finds similar past jobs and points out cost lines you may have missed, like fixtures or outside plating. Your own costing sheet still does the calculations.",
    "friction": "Old steel prices, forgotten setup hours and machining times that live only in the setter's head all make the cost wrong.",
    "steps": [
     "List each operation the part goes through",
     "Work out bar, plate or sheet needed, including cutting loss",
     "Get current steel or aluminium prices",
     "Estimate setup and machining or welding hours",
     "Add fixtures, tool wear, inspection, outside treatment and transport",
     "Approve the profit margin"
    ],
    "causes": [
     "Wrong batch size assumed",
     "Setup or fixture cost left out",
     "Heat treatment or plating missed",
     "Out-of-date steel prices"
    ]
   },
   "3": {
    "title": "Checking the customer's order",
    "today": "The price matches. But the drawing revision or inspection report needed may have changed.",
    "help": "AI compares the customer's purchase order with the quote they accepted, and flags any changes for someone to approve.",
    "steps": [
     "Match the customer's purchase order to our quote",
     "Check drawing revision, quantities, prices, dates and inspection report needs",
     "Check if they supply their own material",
     "Confirm the customer's credit limit or advance payment",
     "Confirm the order to the customer"
    ],
    "causes": [
     "Delivery schedule changed",
     "Drawing revision changed",
     "Extra inspection reports asked for"
    ]
   },
   "4": {
    "title": "Drawings, programs and routes",
    "today": "An old drawing or CNC program can travel further on the shop floor than the new one.",
    "help": "AI finds duplicate part codes and shows which open jobs a drawing or program change could affect.",
    "friction": "Duplicate part codes, old drawings and old CNC programs on the machine give people the wrong instructions.",
    "steps": [
     "Create part codes and units",
     "Issue the drawing, process route and inspection plan",
     "Release the CNC programs and welding procedures for each operation",
     "Approve substitute material grades",
     "Send new revisions to everyone who needs them and pull back the old ones"
    ],
    "causes": [
     "Drawing revision changed",
     "Old program still on the machine",
     "Substitute grade not approved",
     "Same part, two codes"
    ]
   },
   "5": {
    "title": "Planning the work",
    "today": "A promised date only holds if the material, the machine, the fixture and a setter are all free.",
    "help": "AI brings all these limits together in one view, and explains in plain words the schedule options a planning tool comes up with.",
    "friction": "A date stays on paper even after the bar stock or the VMC time it depended on has fallen through.",
    "steps": [
     "Separate confirmed orders from expected ones",
     "Check usable stock and free machine and people time",
     "Allow for outside work like heat treatment or plating",
     "Allow for maintenance and who can set which machine",
     "Promise delivery dates",
     "Re-plan when things change"
    ],
    "causes": [
     "Missing fixture or skilled setter",
     "Slowest machine is fully booked",
     "Rush orders keep arriving",
     "Outside vendor slow to return parts"
    ]
   },
   "6": {
    "title": "Buying steel and supplies",
    "today": "The steel stockist says “tomorrow”. The buyer still needs the size, grade, test certificate and a firm date.",
    "help": "AI compares supplier quotes, pulls out what each supplier has actually promised, and drafts follow-up messages for critical material.",
    "causes": [
     "Advance not yet paid",
     "Grade or size not clear",
     "Odd size not in stock",
     "Vague delivery promise"
    ]
   },
   "7": {
    "title": "Receiving material",
    "today": "The truck of bars and plates has arrived. The heat number, size and weight still need checking.",
    "help": "AI reads the delivery challan and test certificate, and flags any differences from the purchase order.",
    "steps": [
     "Log the vehicle at the gate and check the e-way bill and challan",
     "Unload with the crane or forklift",
     "Count pieces and weigh",
     "Photograph rust or damage",
     "Make the goods receipt entry",
     "Mark the heat number (the steel mill's batch number), storage place and check status"
    ],
    "causes": [
     "Heat numbers mixed together",
     "Only part of the order came",
     "Ordered in kg, received in pieces",
     "Rusted or bent material"
    ]
   },
   "8": {
    "title": "Checking incoming material",
    "today": "Bars can sit in stores while the mill test certificate or a hardness check is still pending.",
    "help": "AI checks mill test certificates against the grade on the drawing and lists any missing records.",
    "friction": "A missing test certificate or an unchecked grade means received material cannot be used.",
    "steps": [
     "Match the heat number to the mill test certificate",
     "Check chemistry and strength values against the grade ordered",
     "Check size and do a hardness test if needed",
     "Record the results",
     "Accept, reject or put on hold",
     "Keep held or rejected material apart and tell purchasing"
    ],
    "causes": [
     "Missing test certificate",
     "Heat number doesn't match the certificate",
     "Wrong grade or size",
     "Held material gets mixed in"
    ]
   },
   "9": {
    "title": "Stores and moving stock",
    "today": "The sheet says the EN8 bar is there. But half of it is short offcuts, and some belongs to a customer.",
    "help": "AI can match different names for the same grade and size. It can also turn a barcode scan or a spoken note into a stock entry, which a person confirms.",
    "friction": "Unrecorded cuts, short offcuts and customer-supplied material make it look like material is available when it isn't.",
    "steps": [
     "Mark the grade and heat number on incoming material and put it in its rack",
     "Keep material aside for specific jobs",
     "Cut and issue bars, plates or sheets to the shop floor",
     "Mark and keep usable offcuts",
     "Take back unused material",
     "Count a few items regularly",
     "Check the count against the stock records"
    ],
    "causes": [
     "Cut not recorded",
     "Offcuts not marked",
     "Kg vs pieces vs metres mix-up",
     "Material owned by the customer"
    ]
   },
   "10": {
    "title": "Setting up the next job",
    "today": "The setup starts. Then someone goes looking for a fixture, an insert, the program or the gauge.",
    "help": "AI can check early whether fixtures, tools, programs and gauges are ready. It can also find the approved setup sheet for that job.",
    "friction": "During setup, the CNC or press brake stands waiting for a fixture, insert, gauge, program or first-piece sign-off.",
    "steps": [
     "Find the fixtures, tools, inserts and gauges",
     "Bring the cut material to the machine",
     "Load the approved CNC program",
     "Clean the machine table or chuck",
     "Set the tools and work offsets",
     "Run the first piece",
     "Get the first piece checked and approved"
    ]
   },
   "11": {
    "title": "Recording production",
    "today": "The machine runs all day. The count and rejects get written at the end of the shift.",
    "help": "The operator speaks a short update. AI turns it into a draft entry linked to the job and operation, and the operator confirms it.",
    "steps": [
     "Start the job and load the part",
     "Run the machine",
     "Change worn inserts and top up coolant",
     "Check sizes as you go",
     "Record good, rejected and reworked pieces",
     "Move half-finished parts to the next operation",
     "Close the operation"
    ],
    "causes": [
     "Rejects not reported",
     "Job only partly finished",
     "Lots split across machines",
     "Tool wear not noted"
    ]
   },
   "12": {
    "title": "Shift handover",
    "today": "The night operator changed a tool offset. The day operator finds out only when parts go oversize.",
    "help": "AI can draft the handover note from confirmed updates. It carries unfinished actions over to the next shift.",
    "steps": [
     "Report which jobs are running and how many are left",
     "Report tool changes, offsets and worn inserts",
     "Report parts on hold and where they are kept",
     "Report machine problems",
     "Hand over actions that are still pending"
    ],
    "causes": [
     "Nobody takes ownership",
     "Offset change not written down",
     "Unclear where parts are"
    ]
   },
   "13": {
    "title": "Quality checks during production",
    "today": "If a size drifts and nobody checks, there are more parts to sort or rework.",
    "help": "AI can flag missed checks. It can also bring measurements, tool changes and past defects together for the team to review.",
    "steps": [
     "Approve the first piece",
     "Measure key sizes at set times",
     "Note which gauge or instrument was used",
     "Record the results",
     "Spot sizes that are slowly moving off target",
     "Stop suspect parts from moving on",
     "Fix the problem and restart"
    ],
    "causes": [
     "Tool wear moving the size",
     "Check missed",
     "Gauge not calibrated",
     "Too few parts checked"
    ]
   },
   "14": {
    "title": "Work sent to outside vendors",
    "today": "Parts go out for heat treatment, plating or powder coating. They come back in lots, so the balance is hard to follow.",
    "help": "AI can match what went out against what came back. It shows which customer orders are waiting for that work.",
    "friction": "Once parts are at the plater or heat treater, it becomes unclear how many are where, and what that means for deliveries.",
    "steps": [
     "Send parts with a job-work challan and instructions",
     "Confirm the vendor received them",
     "Track the work",
     "Arrange the return",
     "Inspect what comes back, like hardness or coating thickness",
     "Match rejects, losses and the balance left",
     "Approve the vendor's bill"
    ],
    "causes": [
     "Unclear who pays for damaged parts",
     "Sent by weight, counted in pieces",
     "Parts returned in lots",
     "Parts lost or mixed at the vendor"
    ]
   },
   "15": {
    "title": "Breakdowns and maintenance",
    "today": "The spindle repair history is in one technician's head. The CNC manual is in a different folder.",
    "help": "AI can find the right manual, alarm code meaning and past repairs for the machine. It can also draft a fault report with the machine number.",
    "steps": [
     "Report what is going wrong, with the alarm code",
     "Make the machine safe to work on",
     "Find the cause, using past repairs and the manual",
     "Find the spare part",
     "Repair the machine",
     "Test cut a part and get production to accept it",
     "Close the job"
    ],
    "causes": [
     "Wrong machine model",
     "Spare part missing",
     "Same alarm again",
     "Poor repair records"
    ]
   },
   "16": {
    "title": "Power and compressed air",
    "today": "The compressor and idle machines waste power. It never shows up in the production report.",
    "help": "AI can flag unusual readings. It can help compare power used across similar jobs and running conditions.",
    "steps": [
     "Run compressors, coolant pumps and welding sets",
     "Note down meter readings",
     "Check for air leaks",
     "Look after coolant and its disposal",
     "Manage backup power",
     "Look into unusual usage"
    ],
    "causes": [
     "Air leaks",
     "Machines left on when idle",
     "Change in job mix",
     "No meters installed"
    ]
   },
   "17": {
    "title": "Scrap and rework",
    "today": "We count the rejected parts. But nobody adds up the extra machine hours, or what the chips and offcuts sell for.",
    "help": "AI can check material issued against good parts, and add rework costs back to the job that caused them.",
    "steps": [
     "Keep rejected parts separate",
     "Count them and weigh chips and offcuts",
     "Sort them: rework, use as offcut or scrap",
     "Get approval to rework or scrap",
     "Keep usable offcuts for later jobs",
     "Sell chips and scrap by grade",
     "Check the money and quantities add up"
    ]
   },
   "18": {
    "title": "Ready to dispatch?",
    "today": "Production says the parts are done. But a dimension report, the plating or the customer's approval may still be missing.",
    "help": "AI can check each order's requirements across all teams, and prepare documents from approved inspection results.",
    "steps": [
     "Finish final inspection",
     "Sort out any part that didn't meet the drawing",
     "Get the approvals",
     "Prepare dimension reports and material certificates",
     "Approve the parts for dispatch",
     "Check the full order is there",
     "Give the go-ahead to pack"
    ],
    "causes": [
     "Inspection only partly done",
     "Parts still at the plater",
     "Dimension report missing",
     "Held for payment or sales reasons"
    ]
   },
   "19": {
    "title": "Packing and transport",
    "today": "The parts are ready. Then the rust-protection oil runs out, there are no crates or a different truck turns up.",
    "help": "AI can check the packing instructions and gather the labels, photos and dispatch documents in one place.",
    "steps": [
     "Find the customer's packing instructions",
     "Apply rust protection and get crates or bins",
     "Mark, then count or weigh the parts",
     "Make the packing list",
     "Book the vehicle and prepare the e-way bill",
     "Check the loading order and documents, then load",
     "Record when the vehicle leaves"
    ],
    "causes": [
     "Label format changed",
     "Not enough crates or bins",
     "Vehicle changed",
     "Count doesn't match documents"
    ]
   },
   "20": {
    "title": "Invoices and getting paid",
    "today": "Another payment reminder won't help if the customer rejected parts at their gate or lost the inspection report.",
    "help": "AI can find what the dispute is about, pull together the supporting papers and draft the next follow-up.",
    "causes": [
     "Invoice not accepted",
     "No proof of delivery",
     "Money held back for rejections",
     "Long payment terms"
    ]
   },
   "21": {
    "title": "Complaints and product history",
    "today": "A customer reports cracked shafts. The team starts digging through heat numbers, job cards and dispatch records.",
    "help": "AI can collect the complaint details and trace the recorded heat numbers and job numbers through production and dispatch.",
    "friction": "Complaint details are kept apart from the records of which heat number, drawing revision and machine made each lot.",
    "causes": [
     "Can't link heat number to dispatch",
     "Not enough evidence",
     "Bad parts not stopped in time"
    ]
   },
   "22": {
    "title": "People and know-how",
    "today": "When the senior setter is on leave, a tricky setup can stop the machine for hours.",
    "help": "AI can find the approved setup sheets and work instructions, and draft explanations in the team's own language, for a supervisor to check.",
    "friction": "Setup and welding know-how leaves when experienced staff leave. Language and skill gaps slow the work.",
    "steps": [
     "Plan the shifts",
     "Check who can set, run or weld which job, and cover for absent workers",
     "Train new operators and helpers",
     "Explain the approved way to do each job",
     "Test whether people can do the job, including welder tests",
     "Record the training",
     "Fix attendance problems"
    ]
   },
   "23": {
    "title": "Safety records and audits",
    "today": "A customer audit is coming up. Crane, welding and fire safety records are scattered across folders.",
    "help": "AI can find the records and flag expired documents, missing signatures and overdue actions.",
    "steps": [
     "Check machine guards, cranes and lifting gear",
     "Record cuts, eye injuries and near misses",
     "Issue written permission for hot work and lifting",
     "Collect crane test reports and fire safety certificates",
     "Give each action an owner",
     "Get ready for the audit",
     "Check each action is really done"
    ],
    "causes": [
     "Lifting gear test out of date",
     "Unclear who approves hot work",
     "Actions closed without checking"
    ]
   },
   "24": {
    "title": "Job costs and improvements",
    "today": "The month made money. But it is hard to say which part numbers lost money, and why.",
    "help": "AI can bring actual machine hours and job costs together and flag the gaps between plan and actual that are worth looking into.",
    "friction": "You can see losses in the overall total, but it is hard to trace them to long setups, rework or outside work left out of the quote."
   }
  },
  "links": {
   "1-2": "Customer requirements, drawings and grades",
   "3-4": "The confirmed drawing revision",
   "4-10": "Setup sheets and CNC programs",
   "5-6": "What steel and supplies are needed, and by when",
   "9-10": "Cut material issued to the job",
   "10-11": "The first piece is approved and the job starts",
   "11-14": "Parts sent for heat treatment or plating",
   "14-9": "Parts returned from outside vendors",
   "13-18": "Good parts approved to ship",
   "19-21": "Which lots went to which customer",
   "11-24": "Actual machine hours and material used"
  },
  "ripples": [
   {
    "title": "The old program",
    "path": [
     3,
     4,
     10,
     11,
     13,
     21
    ],
    "story": "The customer moves one hole by 2 mm in a new drawing revision. The new drawing reaches the inspector, but the old program stays on the VMC. The setter checks the first piece against the old print and it passes. 400 brackets go out, and the customer rejects the lot."
   },
   {
    "title": "The plater's “next week”",
    "path": [
     11,
     14,
     9,
     18,
     20
    ],
    "story": "Machined parts go out for zinc plating. The plater says next week, then sends back only half. Nobody tracks the balance until dispatch day. The truck leaves short, and the customer holds payment for the full invoice."
   },
   {
    "title": "The missing certificate",
    "path": [
     6,
     7,
     8,
     9,
     10,
     5
    ],
    "story": "A local stockist sends EN19 bar without the mill test certificate. Stores keeps it on hold, but planning doesn't know. The setter is ready, the machine waits and the job slips by three days. Two other jobs get pushed back too."
   },
   {
    "title": "The forgotten setup hours",
    "path": [
     2,
     10,
     11,
     17,
     24,
     2
    ],
    "story": "The quote priced a 50-piece batch as if setup were free. The setup takes six hours and the first three pieces are scrapped. Nobody compares it with the estimate. The job loses money, and the repeat order is quoted at the same price."
   }
  ],
  "headaches": {
   "breakdowns": {
    "title": "Machines stop without warning",
    "short": "A spindle, ball screw or welding set fails, the job stops, and everyone scrambles.",
    "signs": [
     "Repairs happen after something breaks, not before.",
     "The same machine shows the same alarm again and again.",
     "Spare parts are ordered in a rush, at a higher price."
    ],
    "before": "The spindle bearing on the main VMC fails on a Tuesday night. The machine is down for 3 days while the part is couriered in.",
    "after": "Spindle vibration slowly rises over 10 days. The maintenance lead gets an alert, orders the bearing, and swaps it during Sunday's planned stop."
   },
   "defects": {
    "title": "Bad parts are caught too late",
    "short": "Out-of-size parts and weld defects are found at final inspection — or worse, by the customer.",
    "signs": [
     "Rework and reject bins are always full.",
     "Customers reject, or return, the same defect.",
     "Inspection depends on one experienced inspector."
    ],
    "before": "A lot of 800 turned shafts ships with one diameter slightly oversize after a worn insert. The customer finds it at assembly and sends the whole lot back.",
    "after": "Size readings logged every 25 parts show the diameter creeping up. The operator changes the insert before any part goes out of tolerance."
   },
   "planning": {
    "title": "The machine plan changes every day",
    "short": "Which job runs on which machine lives in a spreadsheet — and in one planner's head.",
    "signs": [
     "Rush orders break the plan constantly.",
     "Some machines sit idle while the 5-axis or laser runs day and night.",
     "Only one person really knows how to plan, and everyone calls them."
    ],
    "before": "A big customer adds an urgent order. The planner spends half a day reshuffling, and two other orders end up late without those customers being told.",
    "after": "The planner enters the urgent order. The tool shows two options and which orders each would push back. The team picks one and tells the affected customers the same day."
   },
   "inventory": {
    "title": "Too much of some stock, not enough of others",
    "short": "The yard is full of steel, yet a job stops because one bar size or insert is missing.",
    "signs": [
     "Cash is tied up in bar and plate that hasn't moved in months.",
     "A job waits for an insert or bar size nobody noticed was running out.",
     "Offcut racks are full, but nobody knows what's in them."
    ],
    "before": "The store holds 8 months of 40 mm EN8 bar but runs out of a common carbide insert. A full shift is lost waiting.",
    "after": "The tool warns that inserts will run short in 9 days based on current jobs. Purchasing reorders in time — and holds back on more bar."
   },
   "suppliers": {
    "title": "Chasing suppliers and vendors takes the whole day",
    "short": "Your team spends hours on calls asking steel stockists and platers “where is my material?”",
    "signs": [
     "Late steel or slow outside work is a regular reason for delays.",
     "Supplier and vendor updates live in personal phones and WhatsApp.",
     "Nobody can quickly say which vendor is most reliable."
    ],
    "before": "A buyer starts every morning going through 40 open orders and job-work challans, calling suppliers one by one.",
    "after": "The buyer opens a short list each morning: 4 orders at risk, each with the supplier's latest reply attached. The other 36 are on track."
   },
   "paperwork": {
    "title": "Typing the same information twice",
    "short": "People copy purchase orders, job cards and inspection reports into Tally or Excel by hand.",
    "signs": [
     "Customer purchase orders are typed in from emails or PDFs.",
     "Job cards are filled on paper and typed up later — or never.",
     "Mistakes creep in when copying numbers between systems."
    ],
    "before": "The office spends the morning typing 60 customer schedules from emailed PDFs. A wrong quantity slips through about once a week.",
    "after": "Orders are read and entered automatically. Staff review all 60 on one screen, fix the 3 that are flagged, and are done before 10am."
   },
   "knowledge": {
    "title": "Know-how lives in a few people's heads",
    "short": "When your senior setter or programmer is away, nobody knows how to run the tricky job.",
    "signs": [
     "New operators take months to become useful.",
     "The same setup questions get asked again and again.",
     "Setup sheets are outdated, missing, or never read."
    ],
    "before": "A night-shift operator hits an alarm on the CNC lathe. The only person who knows the fix is asleep. The machine waits until morning.",
    "after": "The operator asks the factory assistant on a tablet. It shows the 5-step fix from last year's repair note, with a photo. The machine is running again in 20 minutes."
   },
   "energy": {
    "title": "Power and material bills keep rising",
    "short": "Power, compressed air and steel cost a lot — but nobody knows where they leak.",
    "signs": [
     "One monthly electricity bill, and no idea which machine uses what.",
     "Machines and compressors keep running when nothing is being made.",
     "Cutting loss and offcut waste are accepted as “normal”."
    ],
    "before": "The factory pays one large power bill. Everyone assumes the big machining centres are the problem.",
    "after": "Meters show the air compressor runs all weekend because of leaks. Fixing them saves more than any change to the machines."
   },
   "safety": {
    "title": "Safety risks are spotted only after an accident",
    "short": "Near-misses go unreported, and safety checks depend on someone remembering.",
    "signs": [
     "Guards, goggles and welding screens are not always used.",
     "Incident reports are written after the fact, if at all.",
     "Crane and lifting gear checks happen once a year, on paper."
    ],
    "before": "A sling slips while a heavy plate is lifted. Nobody reports the near miss. Two months later a frayed sling breaks — and someone is hurt.",
    "after": "The weekly sling check is due and missed. The supervisor gets an alert, the frayed sling is taken out of use, and the near miss is logged."
   },
   "quotes": {
    "title": "Quotes and customer replies are slow",
    "short": "Customers wait days for a price on a new drawing — and some go elsewhere.",
    "signs": [
     "Only one or two people can prepare a quote.",
     "Customers call to ask “where is my order?”",
     "Sales doesn't know which machines are actually free."
    ],
    "before": "A customer sends a drawing for a new bracket. The quote takes 6 days because the estimator is busy. The customer has already ordered elsewhere.",
    "after": "The tool finds three similar brackets made last year and drafts a price within an hour. The estimator checks it and sends it the same day."
   }
  }
 },
 "plastics": {
  "processes": {
   "1": {
    "title": "Handling enquiries",
    "today": "A sample bottle arrives by courier. The colour and monthly quantity come later on WhatsApp.",
    "help": "AI gathers the customer's needs from emails and messages into one place, finds earlier enquiries for the same item, and drafts the questions still unanswered.",
    "friction": "Resin grade, colour, weight and packing needs are spread across many messages. A repeat item can quietly come with a new colour or wall thickness.",
    "steps": [
     "Receive the enquiry, sample or drawing",
     "Work out who the customer is and which item they want",
     "Check if it is moulded, extruded or converted packaging",
     "Confirm resin grade, colour, weight or thickness, and monthly quantity",
     "Ask the customer about anything missing",
     "Hand it to the person who costs it"
    ],
    "causes": [
     "Details spread across messages",
     "Only a physical sample, no drawing",
     "Colour or grade not stated",
     "Not every enquiry is serious"
    ]
   },
   "2": {
    "title": "Costing and quotations",
    "today": "Resin prices move every week. One old rate or a forgotten mould cost can ruin the quote.",
    "help": "AI finds similar past jobs and points out cost lines you may have missed, like masterbatch or start-up waste. Your own costing sheet still does the calculations.",
    "friction": "Old resin rates, forgotten mould or die costs, and cycle times that live only in the setter's head all make the price wrong.",
    "steps": [
     "Work out the part weight or film weight per metre",
     "Add resin, masterbatch and additives, including start-up waste",
     "Get current resin prices from suppliers",
     "Estimate cycle time, cavities or line speed",
     "Add mould or die cost, printing, packing and transport",
     "Approve the profit margin"
    ],
    "causes": [
     "Resin price out of date",
     "Cycle time guessed too short",
     "Colour change or start-up waste left out",
     "Mould or die cost not recovered"
    ]
   },
   "3": {
    "title": "Checking the customer's order",
    "today": "The price matches. But the colour, carton count or delivery schedule may have changed.",
    "help": "AI compares the customer's order with the quote they accepted, and flags any changes for someone to approve.",
    "friction": "Customers change colour, weight or print artwork after the quote. Moulding often starts before these differences are sorted out.",
    "steps": [
     "Match the customer's order to our quote",
     "Check item, colour, weight, quantity, price, dates and packing terms",
     "Check if the price is linked to resin price changes",
     "Confirm the customer's credit limit or advance payment",
     "Confirm the order to the customer"
    ],
    "causes": [
     "Delivery schedule changed",
     "Colour or artwork changed",
     "Resin price clause not agreed"
    ]
   },
   "4": {
    "title": "Drawings, samples and settings",
    "today": "The approved sample sits in the sales cabin. The setter on the floor works from an old one.",
    "help": "AI finds duplicate item codes and shows which open jobs a change to the drawing, artwork or approved sample could affect.",
    "friction": "Duplicate item codes, old artwork and missing machine settings give the floor the wrong instructions.",
    "steps": [
     "Create item codes for each size, colour and grade",
     "Record the approved sample, drawing, weight and resin grade",
     "Record the approved machine settings for each mould or die",
     "Approve substitute resin grades or masterbatch",
     "Send new versions to everyone who needs them"
    ],
    "causes": [
     "Artwork or drawing changed",
     "Old approved sample still in use",
     "Substitute resin not approved",
     "Same item, two codes"
    ]
   },
   "5": {
    "title": "Planning the work",
    "today": "A promised date only holds if resin, the mould, a free press and a setter are all ready.",
    "help": "AI brings all these limits together in one view, and explains in plain words the schedule options a planning tool comes up with.",
    "friction": "A date stays on paper even after the mould went for repair or the resin didn't arrive.",
    "steps": [
     "Separate confirmed orders from expected ones",
     "Check resin, masterbatch and packing stock",
     "Match moulds or dies to presses or lines that can take them",
     "Group colours to cut down changeovers",
     "Promise delivery dates",
     "Re-plan when a mould or machine goes down"
    ],
    "causes": [
     "Mould under repair",
     "Only one press can take this mould",
     "Rush orders keep arriving",
     "Colour changes take longer than planned"
    ]
   },
   "6": {
    "title": "Buying resin and supplies",
    "today": "The resin dealer says “tomorrow”. The buyer still needs a grade, a quantity and a firm date.",
    "help": "AI compares resin and supply quotes, pulls out what each supplier has actually promised, and drafts follow-up messages for critical material.",
    "causes": [
     "Advance not yet paid",
     "Grade or melt flow not clear",
     "Resin in short supply",
     "Vague delivery promise"
    ]
   },
   "7": {
    "title": "Receiving resin and supplies",
    "today": "The truck of resin bags has arrived. The grade, batch, bag count and weight still need checking.",
    "help": "AI reads the delivery challan and invoice, and flags any differences from the purchase order.",
    "steps": [
     "Log the vehicle at the gate and check the e-way bill and challan",
     "Unload the bags or boxes",
     "Count bags and weigh",
     "Photograph torn or wet bags",
     "Make the goods receipt entry",
     "Note grade, supplier batch, storage place and check status"
    ],
    "causes": [
     "Two grades or batches mixed",
     "Only part of the order came",
     "Bags short in weight",
     "Torn or wet bags"
    ]
   },
   "8": {
    "title": "Checking incoming material",
    "today": "Resin can sit in stores while the supplier's certificate or a moisture check is still pending.",
    "help": "AI checks supplier certificates, like melt flow and density, against your approved grades and lists any missing records.",
    "friction": "A missing certificate or an unchecked masterbatch shade means received material cannot be used.",
    "steps": [
     "Identify the batch and get the supplier's test certificate",
     "Check grade, melt flow (how easily it flows when hot) and density",
     "Check masterbatch shade against the approved sample",
     "Record the results",
     "Accept, reject or put on hold",
     "Keep held or rejected material apart and tell purchasing"
    ],
    "causes": [
     "Missing certificate",
     "Wrong grade delivered",
     "Shade of masterbatch off",
     "Held bags get mixed in"
    ]
   },
   "9": {
    "title": "Stores and moving stock",
    "today": "The sheet says 40 bags are there. But some are regrind, some are on hold, and some are at the other press.",
    "help": "AI can match different names for the same resin or item. It can also turn a barcode scan or a spoken note into a stock entry, which a person confirms.",
    "friction": "Half-used bags, unlabelled regrind and part-used film rolls make it look like material is available when it isn't.",
    "steps": [
     "Label incoming bags and put them in their place",
     "Keep resin aside for specific jobs",
     "Issue resin and masterbatch to the presses or lines",
     "Keep virgin resin, regrind and held bags apart",
     "Take back unused bags and part rolls",
     "Count a few items regularly",
     "Check the count against the stock records"
    ],
    "causes": [
     "Stock move not recorded",
     "Regrind not labelled",
     "Bags vs kg mix-up",
     "Customer's own resin mixed with ours"
    ]
   },
   "10": {
    "title": "Mould and die changeover",
    "today": "The mould change starts. Then someone goes looking for a clamp, the dried resin or the approved settings.",
    "help": "AI can check early whether the mould, dried resin and approved settings are ready. It can also find the setting sheet from the last good run.",
    "friction": "During the changeover, the press stands waiting for dried resin, a heater, a water line or the first-piece sign-off.",
    "steps": [
     "Check the mould or die is cleaned and ready",
     "Dry the resin for the right time",
     "Purge the old colour or material from the barrel",
     "Mount the mould or die and connect water and heaters",
     "Load the approved machine settings",
     "Run trial shots or start-up length",
     "Get the first pieces checked and approved"
    ],
    "causes": [
     "Resin not dried in time",
     "Mould not cleaned after last run",
     "Settings sheet missing",
     "Waiting for first-piece approval"
    ]
   },
   "11": {
    "title": "Recording production",
    "today": "The press runs all night. The shot count and rejects get written at the end of the shift.",
    "help": "The operator speaks a short update. AI turns it into a draft entry linked to the job, and the operator confirms it.",
    "friction": "Reports are written late, so short stoppages, blocked cavities and start-up waste never make it into the record.",
    "steps": [
     "Start the job and load the hopper",
     "Run the press or line",
     "Top up resin and masterbatch",
     "Check pieces, weight or film thickness",
     "Record good pieces or kg, rejects and start-up waste",
     "Move output to printing, assembly or packing",
     "Close the job"
    ],
    "causes": [
     "Rejects not reported",
     "Blocked cavity not noted",
     "Shot count and good count don't match",
     "Resin use differs from plan"
    ]
   },
   "12": {
    "title": "Shift handover",
    "today": "The night setter changed the barrel temperature. The day setter finds out only when parts start warping.",
    "help": "AI can draft the handover note from confirmed updates. It carries unfinished actions over to the next shift.",
    "steps": [
     "Report which jobs are running and how much is left",
     "Report setting changes and blocked cavities",
     "Report resin on hold and dryer status",
     "Report mould, heater or chiller problems",
     "Hand over actions that are still pending"
    ],
    "causes": [
     "Nobody takes ownership",
     "Setting change not written down",
     "Unclear where material is"
    ]
   },
   "13": {
    "title": "Quality checks during production",
    "today": "If a short shot or flash is spotted late, there are thousands of pieces to sort.",
    "help": "AI can flag missed checks. It can also bring weights, sizes, cavity numbers and past defects together for the team to review.",
    "friction": "When checks are missed or readings are kept on loose sheets, bad pieces keep going into the cartons before anyone stops them.",
    "steps": [
     "Approve the first pieces from each cavity",
     "Check look, weight and size at set times",
     "Check film thickness or seal strength where needed",
     "Record the results with cavity or roll number",
     "Spot readings that are slowly moving off target",
     "Stop suspect cartons or rolls from moving on",
     "Fix the problem and restart"
    ],
    "causes": [
     "Mould temperature drifting",
     "Check missed",
     "Wet resin or wrong regrind mix",
     "Too few samples checked"
    ]
   },
   "14": {
    "title": "Work sent to outside workshops",
    "today": "Moulds go out for repair and parts go out for printing. They come back in bits, and the balance is hard to follow.",
    "help": "AI can match what went out against what came back. It shows which customer orders are waiting for that work.",
    "friction": "Once a mould or a lot of parts is outside, it becomes unclear what is where and when it will be back.",
    "steps": [
     "Send the mould, parts or rolls with a job-work challan",
     "Confirm the workshop received it",
     "Track the work",
     "Arrange the return",
     "Inspect what comes back",
     "Match rejects, losses and the balance left",
     "Approve the workshop's bill"
    ],
    "causes": [
     "Mould repair takes longer than promised",
     "Converting kg to pieces",
     "Parts returned in lots",
     "Print rejects not counted"
    ]
   },
   "15": {
    "title": "Breakdowns and maintenance",
    "today": "The heater band history is in one technician's head. The press manual is in a different folder.",
    "help": "AI can find the right manual and past repairs for the press, mould or line. It can also draft a fault report with the machine number.",
    "friction": "Knowledge of press, mould and heater faults sits with one technician. Spares under different names slow the repair.",
    "steps": [
     "Report what is going wrong",
     "Make the press or line safe to work on",
     "Find the cause, using past repairs and the manual",
     "Find the spare heater, thermocouple or part",
     "Repair the press or mould",
     "Run test pieces and get production to accept it",
     "Close the job"
    ],
    "causes": [
     "Hydraulic oil leak",
     "Heater or thermocouple fails",
     "Mould water line blocked",
     "Poor repair records"
    ]
   },
   "16": {
    "title": "Power, chillers and air",
    "today": "Dryers, chillers and the air compressor run all day. Nobody knows their share of the power bill.",
    "help": "AI can flag unusual readings. It can help compare power used per kg across similar products and running conditions.",
    "steps": [
     "Run chillers, cooling towers, dryers and compressors",
     "Note down meter readings",
     "Check for air and water leaks",
     "Treat the cooling water",
     "Manage backup power",
     "Look into unusual usage"
    ],
    "causes": [
     "Leaks",
     "Barrel heaters left on during stops",
     "Dryers running with no job",
     "No meters installed"
    ]
   },
   "17": {
    "title": "Rejects, regrind and waste",
    "today": "We weigh the rejects. But nobody adds up the lost press hours, or what the runners and lumps could be worth.",
    "help": "AI can check resin issued against good output, and add rework and regrind losses back to the job that caused them.",
    "friction": "The extra press time and resin get hidden inside the cost of the original job.",
    "steps": [
     "Keep rejects, runners and purge lumps separate",
     "Weigh them",
     "Sort them: grind and reuse, sell or throw away",
     "Get approval for how much regrind can go back in",
     "Record what is reused",
     "Sell the scrap that can't be reused",
     "Check resin in and output out add up"
    ],
    "causes": [
     "Resin in and output out don't match",
     "Start-up waste hidden in job cost",
     "Sellable scrap not recorded"
    ]
   },
   "18": {
    "title": "Ready to dispatch?",
    "today": "Production says the order is moulded. But the printing, a lid or the test report may still be missing.",
    "help": "AI can check each order's requirements across all teams, and prepare documents from approved test results.",
    "friction": "Finished cartons can still sit waiting for a lid, a print approval, a test report or a go-ahead from accounts.",
    "causes": [
     "Inspection only partly done",
     "Lids, caps or inserts missing",
     "Test report missing",
     "Held for payment or sales reasons"
    ]
   },
   "19": {
    "title": "Packing and transport",
    "today": "The bottles are ready. Then the carton size changes, the poly bags run out or a smaller truck turns up.",
    "help": "AI can check the packing instructions and gather the labels, photos and dispatch documents in one place.",
    "friction": "Old carton labels, missing boxes and last-minute vehicle changes hold up goods that are ready to go.",
    "steps": [
     "Find the customer's packing instructions",
     "Get cartons, poly bags and pallets",
     "Label, then count or weigh the cartons or rolls",
     "Make the packing list",
     "Book the vehicle and prepare the e-way bill",
     "Check the loading order and documents, then load",
     "Record when the vehicle leaves"
    ],
    "causes": [
     "Carton label format changed",
     "Not enough cartons",
     "Vehicle too small for the bulky load",
     "Count doesn't match documents"
    ]
   },
   "20": {
    "title": "Invoices and getting paid",
    "today": "Another reminder won't help if the customer cut the payment for short cartons or a resin price difference.",
    "help": "AI can find what the dispute is about, pull together the supporting papers and draft the next follow-up.",
    "causes": [
     "Invoice not accepted",
     "No proof of delivery",
     "Money cut for shortage or rejects",
     "Resin price change not agreed"
    ]
   },
   "21": {
    "title": "Complaints and product history",
    "today": "A customer says the caps leak. The team starts digging through moulding and dispatch records.",
    "help": "AI can collect the complaint details and trace the batch through the mould, cavity, resin and dispatch records.",
    "friction": "Complaint details are kept apart from the records of which resin, mould and press made each batch.",
    "steps": [
     "Find which product and batch it is",
     "Collect photos, samples and details",
     "Stop more bad stock going out",
     "Check the resin, mould, cavity and settings used",
     "Find the cause",
     "Agree a return, replacement or credit",
     "Check the fix worked"
    ],
    "causes": [
     "Cartons not marked with batch or date",
     "Cavity number not readable",
     "Bad stock not stopped in time"
    ]
   },
   "22": {
    "title": "People and know-how",
    "today": "When the senior setter is on leave, nobody can get the new mould to run right.",
    "help": "AI can find the approved setting sheets and work instructions, and draft explanations in the team's own language, for a supervisor to check.",
    "friction": "Setting know-how leaves when experienced setters leave. Language and skill gaps slow the work.",
    "steps": [
     "Plan the shifts",
     "Check who can set which press or line, and cover for absent workers",
     "Train new operators and helpers",
     "Explain the approved way to run each job",
     "Test whether people can do the job",
     "Record the training",
     "Fix attendance problems"
    ]
   },
   "23": {
    "title": "Safety records and audits",
    "today": "A customer audit is coming up. Fire, electrical and safety records are scattered across different folders.",
    "help": "AI can find the records and flag expired documents, missing signatures and overdue actions.",
    "steps": [
     "Check press guards, safety gates and hot surfaces",
     "Record burns, cuts and near misses",
     "Issue written permission for mould lifting and electrical work",
     "Collect fire safety and test certificates",
     "Give each action an owner",
     "Get ready for the audit",
     "Check each action is really done"
    ]
   },
   "24": {
    "title": "Job costs and improvements",
    "today": "The month made money. But it is hard to say which moulds or items lost money, and why.",
    "help": "AI can bring actual resin use, cycle times and rejects together, and flag the gaps between plan and actual that are worth looking into.",
    "friction": "You can see losses in the overall total, but it is hard to trace them to long cycle times, start-up waste or resin price rises.",
    "causes": [
     "Wrong starting figures",
     "Same gain counted twice",
     "Product mix changed",
     "Resin price moved mid-month"
    ]
   }
  },
  "links": {
   "1-2": "Customer needs, samples and drawings",
   "3-4": "The confirmed colour, artwork and sample",
   "4-5": "The approved item, mould and settings",
   "4-10": "Approved machine settings",
   "5-6": "What resin and supplies are needed, and by when",
   "5-10": "Which mould or die goes on next",
   "7-8": "Resin waiting to be checked",
   "8-9": "Resin approved for use",
   "9-10": "Resin and masterbatch issued to the press",
   "10-11": "The press or line starts",
   "11-14": "Moulds or parts sent out for repair or printing",
   "14-9": "Moulds or parts returned from outside",
   "15-5": "A press or mould is down, so the plan changes",
   "16-24": "Power cost per kg",
   "13-17": "Rejected pieces and rolls",
   "13-18": "Good stock approved to ship",
   "17-24": "The cost of rejects and waste",
   "11-24": "Actual resin used and cycle times"
  },
  "ripples": [
   {
    "title": "The damp resin",
    "path": [
     7,
     9,
     10,
     11,
     13,
     21
    ],
    "story": "A resin lot arrives on a rainy day and sits near an open door. The dryer is cut short to save time at changeover. Parts come out with silver streaks and weak spots. The cartons pass a quick look, and the customer sends back two loads."
   },
   {
    "title": "The mould that never came back",
    "path": [
     15,
     14,
     5,
     18,
     20
    ],
    "story": "A cooling line in the cap mould gets blocked, so the mould goes out for repair. The toolroom says three days, then ten. The plan keeps the order in place until the last day. Dispatch misses the date, and the customer cuts the bill for late supply."
   },
   {
    "title": "The extra regrind",
    "path": [
     17,
     9,
     11,
     13,
     21,
     2
    ],
    "story": "To use up rejects, the floor mixes more regrind than the customer allows. Nobody writes the mix down. The containers crack on the customer's filling line. The claim wipes out the job's profit, and the next quote still assumes the same costs."
   },
   {
    "title": "The quiet cycle time",
    "path": [
     2,
     10,
     11,
     24,
     2
    ],
    "story": "The quote assumed an 18-second cycle. On the press it runs at 24 seconds because the mould runs hot. Nobody compares the two numbers. Every repeat order loses money, and the next price uses the same wrong cycle."
   }
  ],
  "headaches": {
   "breakdowns": {
    "title": "Presses and lines stop without warning",
    "short": "A heater, pump or mould fails, the press stops, and everyone scrambles.",
    "signs": [
     "Repairs happen after something breaks, not before.",
     "The same press or mould fails again and again.",
     "Heaters and spares are bought in a rush, at a higher price."
    ],
    "before": "The hydraulic pump on the main 250-tonne press fails on a Tuesday night. The press is down for 14 hours while a part is couriered in.",
    "after": "Oil temperature on the press slowly rises over 10 days. The maintenance lead gets an alert, orders the part, and fixes it during Sunday's planned stop."
   },
   "defects": {
    "title": "Bad pieces are caught too late",
    "short": "Short shots, flash or warping are found at packing — or worse, by the customer.",
    "signs": [
     "Reject bags and regrind piles are always full.",
     "Customers complain about, or return, the same defect.",
     "Checking depends on one experienced person's eyes."
    ],
    "before": "A batch of 5,000 moulded caps ships with a hairline crack. The customer finds it and sends the whole batch back.",
    "after": "A camera on the line flags cracked caps within the first 20 pieces. The operator adjusts the mould temperature before the batch is ruined."
   },
   "planning": {
    "title": "The moulding plan changes every day",
    "short": "Which mould goes on which press lives in a spreadsheet — and in one planner's head.",
    "signs": [
     "Rush orders break the plan constantly.",
     "Some presses sit idle while others run day and night.",
     "Only one person really knows which mould fits which press."
    ],
    "before": "A big customer adds an urgent order for containers. The planner spends half a day swapping moulds, and two other orders end up late without those customers being told.",
    "after": "The planner enters the urgent order. The tool shows two options and which orders each would push back. The team picks one and tells the affected customers the same day."
   },
   "inventory": {
    "title": "Too much of some resin, not enough of others",
    "short": "The store is full of bags, yet a press stops because one masterbatch or carton is missing.",
    "signs": [
     "Cash is tied up in resin grades that haven't moved in months.",
     "A press waits for a colour or carton nobody noticed was running out.",
     "Reorder levels were set years ago and never changed."
    ],
    "before": "The store holds 6 months of one resin grade but runs out of a blue masterbatch. A full shift is lost waiting.",
    "after": "The tool warns that blue masterbatch will run short in 9 days based on current orders. Purchasing reorders in time — and holds back on the extra resin."
   },
   "suppliers": {
    "title": "Chasing resin dealers takes the whole day",
    "short": "Your team spends hours on calls and WhatsApp asking “where is my resin?”",
    "signs": [
     "Late resin or masterbatch is a regular reason for delays.",
     "Supplier updates live in personal inboxes and phones.",
     "Nobody can quickly say which dealer is most reliable."
    ],
    "before": "A buyer starts every morning going through 30 open orders for resin, masterbatch and cartons, calling suppliers one by one.",
    "after": "The buyer opens a short list each morning: 4 orders at risk, each with the supplier's latest reply attached. The other 26 are on track."
   },
   "paperwork": {
    "title": "Typing the same information twice",
    "short": "People copy orders, challans and shift sheets into Tally or Excel by hand.",
    "signs": [
     "Customer orders are typed in from emails, PDFs or WhatsApp.",
     "Shot counts and rejects are written on paper and typed up later — or never.",
     "Mistakes creep in when copying numbers between systems."
    ],
    "before": "The sales office spends the morning typing 60 customer orders from emailed PDFs. A wrong carton count slips through about once a week.",
    "after": "Orders are read and entered automatically. Staff review all 60 on one screen, fix the 3 that are flagged, and are done before 10am."
   },
   "knowledge": {
    "title": "Setting know-how lives in a few people's heads",
    "short": "When your senior setter is away, nobody can get the tricky mould to run right.",
    "signs": [
     "New operators and setters take months to become useful.",
     "The same questions about settings get asked again and again.",
     "Setting sheets are outdated, missing, or never read."
    ],
    "before": "On the night shift, a new mould keeps giving flash. The only setter who knows the fix is asleep. The press waits until morning.",
    "after": "The operator asks the factory assistant on a tablet. It shows the settings from the last good run and last year's fix note, with a photo. The press is running again in 20 minutes."
   },
   "energy": {
    "title": "Power and resin bills keep rising",
    "short": "Heaters, chillers, dryers and resin cost a lot — but nobody knows where they leak.",
    "signs": [
     "One monthly power bill, and no idea which press or line uses what.",
     "Heaters, dryers and compressors keep running when nothing is being made.",
     "Start-up waste and rejects are accepted as “normal”."
    ],
    "before": "The factory pays one large power bill. Everyone assumes the big presses are the problem.",
    "after": "Meters show the dryers and the air compressor run all weekend with no job. Switching them off saves more than any change to the presses."
   },
   "safety": {
    "title": "Safety risks are spotted only after an accident",
    "short": "Near-misses at presses go unreported, and safety checks depend on someone remembering.",
    "signs": [
     "Safety gates are bypassed and hot moulds handled without gloves.",
     "Incident reports are written after the fact, if at all.",
     "Safety audits happen once a year, on paper."
    ],
    "before": "An operator reaches past a press gate whose switch was taped down. It is a near miss and nobody reports it. Two months later someone's hand is hurt.",
    "after": "The daily check flags the gate switch that isn't working. The supervisor gets an alert, the press is stopped until it is fixed, and the near-miss is logged."
   },
   "quotes": {
    "title": "Quotes and customer replies are slow",
    "short": "Customers wait days for a price on a new container or film — and some go elsewhere.",
    "signs": [
     "Only one or two people can prepare a quote.",
     "Customers call to ask “where is my order?”",
     "Sales doesn't know which mould or press is actually free."
    ],
    "before": "A customer sends a sample jar for a price. The quote takes 6 days because the costing person is busy. The customer has already ordered elsewhere.",
    "after": "The tool finds three similar jars made last year, with their weights and cycle times, and drafts a price within an hour. The owner checks it and sends it the same day."
   }
  }
 },
 "textiles": {
  "processes": {
   "1": {
    "title": "Buyer enquiries and tech packs",
    "today": "The tech pack (the buyer's style sheet) comes by email. The size mix and colours come on WhatsApp. Someone has to put it all together.",
    "help": "AI gathers the buyer's needs from emails and messages into one place, finds earlier orders for the same style or fabric, and drafts the questions still open.",
    "friction": "The buyer's needs are spread across tech packs, mails and calls. A repeat style can quietly come back with a changed fabric or trim.",
    "steps": [
     "Receive the enquiry",
     "Work out the buyer and the style or fabric quality",
     "Collect the tech pack, sample and swatches",
     "Confirm GSM (fabric weight in grams per square metre), shade, size mix, quantity and ship date",
     "Ask the buyer about anything missing",
     "Hand it to costing"
    ],
    "causes": [
     "Details spread across mails and messages",
     "Buyer still deciding fabric or colour",
     "Not every enquiry is serious"
    ]
   },
   "2": {
    "title": "Costing and price quotes",
    "today": "One old yarn rate or a forgotten washing charge can ruin the price.",
    "help": "AI finds similar past styles or fabric qualities and points out cost lines you may have missed. Your own costing sheet still does the sums.",
    "friction": "Old yarn and fabric rates, forgotten dyeing or printing charges, and fabric use per piece kept in one person's head all make the cost wrong.",
    "steps": [
     "List each process: knitting or weaving, dyeing, printing, stitching, washing",
     "Work out fabric per piece or yarn per kg, including cutting and process loss",
     "Get yarn, fabric, dye and trim prices",
     "Add job-work charges for outside processes",
     "Add testing, packing, freight and buyer charges",
     "Approve the margin"
    ],
    "causes": [
     "Fabric use per piece underestimated",
     "Shrinkage or process loss left out",
     "Size mix changed the fabric needed",
     "Out-of-date yarn or dye rates"
    ]
   },
   "3": {
    "title": "Checking the buyer's order",
    "today": "The price matches. But the size mix, shade or ship date may have changed.",
    "help": "AI compares the buyer's purchase order with the agreed price and approved sample, and flags any changes for someone to approve.",
    "friction": "Buyers change the size mix, colours or dates after the price is agreed. Cutting often starts before these are sorted out.",
    "steps": [
     "Match the buyer's order to our quote and approved sample",
     "Check style, colours, size mix, quantity, price and ship date",
     "Check the testing, labelling and inspection terms",
     "Confirm the advance or LC (bank payment guarantee)",
     "Confirm the order to the buyer"
    ],
    "causes": [
     "Size mix or colours changed",
     "Ship date moved earlier",
     "Penalty or inspection terms nobody approved"
    ]
   },
   "4": {
    "title": "Samples, patterns and specs",
    "today": "An old pattern or an unapproved sample can travel further on the floor than the approved one.",
    "help": "AI finds duplicate fabric and trim codes and shows which open orders a spec change could affect.",
    "friction": "Old patterns, unclear sample comments and duplicate codes give the cutting and stitching floors the wrong instructions.",
    "steps": [
     "Create fabric, trim and style codes",
     "Make samples and lab dips (small shade trials) for buyer approval",
     "Record the buyer's comments on fit, shade and finish",
     "Issue the approved sample, pattern, dye recipe and measurement chart",
     "Approve any substitute fabric or trim",
     "Send updated specs to everyone who needs them"
    ],
    "causes": [
     "Pattern or measurements changed",
     "Bulk started before final sample approval",
     "Substitute trim not approved",
     "Same fabric, two codes"
    ]
   },
   "5": {
    "title": "Planning production",
    "today": "A ship date only holds if fabric, trims, machines and operators are all ready.",
    "help": "AI brings these limits together in one view, and explains in plain words the schedule options a planning tool comes up with.",
    "friction": "A date stays on paper even after the fabric delivery or dyeing slot it depended on has slipped.",
    "steps": [
     "Separate confirmed orders from expected ones",
     "Check fabric, trims and free line or machine time",
     "Allow for dyeing slots, sample approval and outside processes",
     "Promise ship dates",
     "Fit in rush orders",
     "Re-plan when things change"
    ],
    "causes": [
     "Fabric or trims not in",
     "Dyeing machines or stitching lines fully booked",
     "Style changeover slows the line",
     "Rush orders keep arriving"
    ]
   },
   "6": {
    "title": "Buying yarn, fabric and trims",
    "today": "A mill says the fabric ships “tomorrow”. Your purchase team still needs the metres and a firm date.",
    "help": "AI compares supplier quotes, pulls out what each supplier has actually promised, and drafts follow-ups for fabric and trims that hold up cutting.",
    "friction": "Vague promises and part deliveries hide how much of each order is really at risk.",
    "causes": [
     "Advance not yet paid",
     "Count, GSM or shade not clearly specified",
     "Mill or dyer too busy",
     "Vague delivery promise"
    ]
   },
   "7": {
    "title": "Receiving fabric, yarn and trims",
    "today": "The truck has arrived. The rolls, metres and weight still need checking.",
    "help": "AI reads the delivery challan (delivery note) and invoice, and flags any differences from the purchase order.",
    "steps": [
     "Log the vehicle and check the challan and e-way bill",
     "Unload the rolls, yarn cones or trim cartons",
     "Weigh or measure each roll, or count the trims",
     "Photograph any damage or damp cartons",
     "Make the goods receipt entry",
     "Tag each roll with its dye lot and storage place"
    ],
    "causes": [
     "Dye lots mixed together",
     "Only part of the order came",
     "Ordered in metres, received in kg",
     "Damaged or damp rolls"
    ]
   },
   "8": {
    "title": "Fabric and trim inspection",
    "today": "Rolls can sit in stores while fabric inspection or shade approval is still pending.",
    "help": "AI checks supplier test reports against your buyer's requirements and lists any missing records.",
    "friction": "Until fault, shrinkage and shade checks are signed off, received rolls cannot be cut.",
    "steps": [
     "Identify the roll and dye lot, and get the supplier's test report",
     "Inspect a share of the rolls for faults on the inspection table",
     "Check GSM, width, shrinkage and shade against the approved standard",
     "Record the faults and results",
     "Accept, reject or put on hold",
     "Keep held rolls apart and tell purchasing"
    ],
    "causes": [
     "Shade varies from roll to roll",
     "Shrinkage or GSM out of spec",
     "Test report missing",
     "Held rolls get issued to cutting"
    ]
   },
   "9": {
    "title": "Fabric and trim stores",
    "today": "The sheet says the fabric is there. But some rolls are kept for another order, or are from a different dye lot.",
    "help": "AI can match different names for the same fabric or trim. It can also turn a barcode scan or a spoken note into a stock entry, which a person confirms.",
    "friction": "Unrecorded moves, part-used rolls and mixed dye lots make it look like fabric is available when it isn't.",
    "steps": [
     "Label rolls and trims and put them in their place",
     "Keep fabric and trims aside for specific orders",
     "Issue rolls to cutting, or greige fabric (unprocessed fabric) to dyeing",
     "Move stock between racks",
     "Take back leftover fabric and trims",
     "Count a few items regularly",
     "Check the counts against the stock records"
    ],
    "causes": [
     "Roll move not recorded",
     "Dye lots mixed on one shelf",
     "Metres and kg mixed up",
     "Buyer's own fabric mixed with ours"
    ]
   },
   "10": {
    "title": "Getting the next lot ready",
    "today": "The line changes style. Then someone goes looking for the pattern, the trims or the approved sample.",
    "help": "AI can check early whether fabric, trims, patterns and recipes are ready. It can also find the approved sample and the line setup notes.",
    "friction": "During changeover, the line or dyeing machine waits for a pattern, recipe, machine attachment or sign-off.",
    "steps": [
     "Get the approved pattern, marker (cutting layout) or dye recipe",
     "Issue cut bundles to the line, or fabric to the dyeing machine",
     "Set up sewing machines, folders and attachments",
     "Clean the dyeing machine between shades",
     "Run a trial piece or trial batch",
     "Get the first piece or first batch approved"
    ],
    "causes": [
     "Trims not issued",
     "Pattern or recipe not approved",
     "Machine attachment missing",
     "Waiting for first-piece approval"
    ]
   },
   "11": {
    "title": "Recording production",
    "today": "The work happens all day. The line report often gets written at the end of the shift.",
    "help": "The supervisor speaks a short update. AI turns it into a draft entry linked to the order and line, and the supervisor confirms it.",
    "friction": "Reports are written late, so short stoppages, re-dyes and alterations never make it into the record.",
    "steps": [
     "Start the lot on the machine or line",
     "Run the dyeing batch or stitching line",
     "Track pieces per hour or kg per batch",
     "Check the output at the end of the line",
     "Record good pieces, alterations and rejects",
     "Move bundles or rolls to the next stage",
     "Close the lot"
    ],
    "causes": [
     "Rejects and alterations not reported",
     "Bundles split or mixed across sizes",
     "Fabric use differs from plan",
     "Re-dyed batches not recorded"
    ]
   },
   "12": {
    "title": "Shift handover",
    "today": "The next supervisor asks which bundles are pending and which batch is still in the machine.",
    "help": "AI can draft the handover note from confirmed updates. It carries unfinished actions over to the next shift.",
    "friction": "The next shift has to piece together what happened. Shade problems and pending bundles drop out of the logbook."
   },
   "13": {
    "title": "In-line and end-line checks",
    "today": "If shade or stitching is checked late, there are more pieces to sort, re-dye or alter.",
    "help": "AI can flag missed checks. It can also bring shade readings, batch details and past faults together for the team to review.",
    "friction": "When checks are missed or kept in separate registers, faulty batches and bundles move on before anyone stops them.",
    "steps": [
     "Approve the first batch or first pieces",
     "Check shade against the standard in a light box",
     "Check stitching in-line at set times",
     "Check measurements and shrinkage",
     "Record faults by operation and operator",
     "Stop faulty bundles or batches moving on",
     "Fix the cause and restart"
    ],
    "causes": [
     "Shade drifting from batch to batch",
     "Check missed in a rush",
     "Operator or machine problem",
     "Too few pieces checked"
    ]
   },
   "14": {
    "title": "Work sent to job-workers",
    "today": "Fabric or cut pieces go out for dyeing, printing, embroidery or washing. They come back in parts, short or mixed.",
    "help": "AI can match what went out against what came back. It shows which buyer orders are waiting for that work.",
    "friction": "Once pieces are with a job-worker, it's unclear how many are where, and what that means for ship dates.",
    "steps": [
     "Send fabric or cut pieces with the challan and instructions",
     "Confirm the job-worker received them",
     "Track the work",
     "Arrange the return",
     "Inspect what comes back",
     "Match pieces, metres, rejects and shortages",
     "Approve the job-worker's bill"
    ],
    "causes": [
     "Process loss argued over",
     "Sent in kg, returned in metres or pieces",
     "Returned in parts",
     "Pieces lost or damaged"
    ]
   },
   "15": {
    "title": "Breakdowns and maintenance",
    "today": "The repair history is in one mechanic's head. The machine manual may be in a different folder.",
    "help": "AI can find the right manual and past repairs for the machine. It can also draft a fault report with the machine number.",
    "friction": "Fault know-how sits with one mechanic. Spares listed under different names slow repairs on looms, stenters (fabric drying machines) and sewing machines."
   },
   "16": {
    "title": "Water, steam, power and air",
    "today": "Boilers, the effluent plant and compressors use a lot. It never shows up in the production report.",
    "help": "AI can flag unusual readings. It can help compare water, steam and power per kg dyed or per piece made.",
    "friction": "Steam, water and effluent costs sit outside production reports, so nobody links them to a shade or batch.",
    "steps": [
     "Run boilers, compressors and pumps",
     "Note down meter readings",
     "Check for steam and water leaks",
     "Run the ETP (effluent treatment plant)",
     "Manage backup power",
     "Look into unusual usage"
    ],
    "causes": [
     "Leaks in steam lines",
     "Machines running idle",
     "More dark shades or re-dyes",
     "No separate meters"
    ]
   },
   "17": {
    "title": "Re-dyeing, alterations and waste",
    "today": "We count rejected pieces. But nobody adds up re-dye costs, alteration hours or what cutting waste could sell for.",
    "help": "AI can check fabric in against good pieces out, and add re-dyeing or alteration costs back to the order that caused them.",
    "friction": "Extra dyeing, stitching hours and fabric get hidden inside the cost of the original order.",
    "steps": [
     "Keep rejected pieces and seconds separate",
     "Count pieces or weigh fabric waste",
     "Sort them: re-dye, alter, sell as seconds or scrap",
     "Get approval to re-process or write off",
     "Record what can be recovered",
     "Sell cutting waste and seconds",
     "Check the fabric and money add up"
    ],
    "causes": [
     "Fabric in and pieces out don't match",
     "Re-dyeing hidden in order cost",
     "Seconds and cutting waste not recorded"
    ]
   },
   "18": {
    "title": "Ready to ship?",
    "today": "Production says the order is done. But a test report, the buyer's final inspection or a trim may still be missing.",
    "help": "AI can check each order's requirements across all teams, and prepare documents from approved test results.",
    "friction": "Finished goods can wait for a lab test, the buyer's final inspection, a document or a go-ahead from accounts.",
    "steps": [
     "Finish the lab tests the buyer asks for",
     "Sort out pieces that failed",
     "Book the buyer's final inspection",
     "Pass the AQL inspection (the buyer checks a sample to accept or reject the lot)",
     "Prepare test reports and packing list",
     "Check the full size mix is there",
     "Give the go-ahead to ship"
    ],
    "causes": [
     "Final inspection failed or not booked",
     "Size mix short",
     "Test report missing",
     "Held for payment"
    ]
   },
   "19": {
    "title": "Packing and shipping",
    "today": "The garments are ready. Then the buyer changes the carton label, cartons run short or a different container turns up.",
    "help": "AI can check the buyer's packing instructions and gather labels, photos and shipping documents in one place.",
    "friction": "Old label formats, size ratio mistakes and last-minute vehicle changes hold up goods that are ready to go.",
    "steps": [
     "Get the buyer's packing and size-ratio instructions",
     "Get polybags, cartons, hangtags and stickers",
     "Pack by size ratio, then count and weigh cartons",
     "Make the packing list",
     "Book the truck or container",
     "Check the documents, then load",
     "Record when the vehicle leaves"
    ],
    "causes": [
     "Carton label format changed",
     "Wrong size ratio in cartons",
     "Not enough cartons",
     "Count doesn't match the packing list"
    ]
   },
   "20": {
    "title": "Invoices and getting paid",
    "today": "Another reminder won't help if the buyer has deducted money for shade claims or short pieces.",
    "help": "AI can find what the deduction or dispute is about, pull together the supporting papers and draft the next follow-up.",
    "friction": "Reminders miss the real problem: a debit note, a missing document or a quantity the buyer disputes.",
    "causes": [
     "Debit note for shade or quality claims",
     "Short pieces against the packing list",
     "Late shipment penalty",
     "Long payment terms"
    ]
   },
   "21": {
    "title": "Buyer complaints and claims",
    "today": "A buyer reports shade variation or bad stitching. The team starts digging through dyeing and dispatch records.",
    "help": "AI can collect the claim details and trace the recorded dye lots and order numbers through production and dispatch.",
    "friction": "Claim details are kept apart from records of which dye lot and line made each carton.",
    "steps": [
     "Find the style, dye lot and cartons involved",
     "Collect photos, samples and inspection reports",
     "Hold any more stock from that lot",
     "Trace the fabric, dye lot and line used",
     "Find the cause",
     "Agree a return, rework or debit note",
     "Check the fix worked"
    ],
    "causes": [
     "Can't link cartons to dye lots",
     "Not enough evidence",
     "Bad lot not stopped in time"
    ]
   },
   "22": {
    "title": "Operators and know-how",
    "today": "When the master dyer or line supervisor is on leave, small questions can stop the work.",
    "help": "AI can find the approved work instructions and draft explanations in the team's own language, for a supervisor to check.",
    "friction": "Skilled tailors and dyers move between factories. Language gaps and seasonal hiring slow the work.",
    "causes": [
     "Operators leave often",
     "Language gaps on the floor",
     "Shared phones or computers",
     "Unclear reasons to record things"
    ]
   },
   "23": {
    "title": "Safety records and buyer audits",
    "today": "A buyer's audit is coming up. Fire certificates, ETP records and action updates are scattered across folders.",
    "help": "AI can find the records and flag expired certificates, missing signatures and overdue actions.",
    "friction": "Expired certificates and open audit points only come to light when the auditor arrives.",
    "steps": [
     "Do fire and building safety checks",
     "Record accidents and near misses",
     "Check dye and chemical storage and labels",
     "Collect ETP, boiler and fire certificates",
     "Give each action an owner",
     "Get ready for buyer audits",
     "Check each action is really done"
    ],
    "causes": [
     "Certificates out of date",
     "Chemical records incomplete",
     "Audit points closed without checking"
    ]
   },
   "24": {
    "title": "Order costs and improvements",
    "today": "The month made money. But it is hard to say which styles or shades lost money, and why.",
    "help": "AI can bring actual order costs together and flag the gaps between plan and actual that are worth looking into.",
    "friction": "Losses show in the total, but are hard to trace to re-dyes, air freight or fabric use above plan."
   }
  },
  "links": {
   "1-2": "Buyer's tech pack and samples",
   "3-4": "The approved sample and size mix",
   "4-5": "Approved specs and process route",
   "4-10": "Approved pattern, recipe and setup notes",
   "5-6": "Fabric and trims needed, and by when",
   "5-10": "Which lot or style runs next",
   "7-8": "Rolls waiting for inspection",
   "8-9": "Fabric approved for cutting or dyeing",
   "9-10": "Fabric and trims issued to the lot",
   "10-11": "The lot starts",
   "11-13": "Batches and bundles to be checked",
   "11-14": "Fabric or pieces sent to job-workers",
   "14-9": "Pieces back from job-work",
   "13-17": "Rejected pieces and off-shade batches",
   "13-18": "Pieces passed for packing",
   "19-21": "Which cartons went to which buyer",
   "21-13": "Claim lessons back into the checks",
   "17-24": "The cost of re-dyes and rejects",
   "11-24": "Actual fabric and hours used",
   "16-24": "Water, steam and power cost per order"
  },
  "ripples": [
   {
    "title": "The mixed dye lot",
    "path": [
     7,
     9,
     10,
     11,
     13,
     21
    ],
    "story": "Two dye lots arrive in one delivery and get stacked on one shelf. Cutting takes rolls from both for the same order. Panels of slightly different shades are stitched into one garment. The buyer spots shade variation in store and raises a claim."
   },
   {
    "title": "The size mix that changed",
    "path": [
     3,
     5,
     10,
     11,
     18,
     19
    ],
    "story": "The buyer changes the size mix by email after confirming the order. Planning never sees it, so cutting follows the old ratio. At packing, mediums are short and larges are extra. The shipment misses its date while the shortfall is cut and stitched."
   },
   {
    "title": "The dyer's “two more days”",
    "path": [
     11,
     14,
     9,
     10,
     18,
     19
    ],
    "story": "Knitted fabric goes to an outside dyeing unit. Every week they say “two more days”. It finally comes back 300 metres short. Cutting starts late, and the buyer insists on air freight at your cost."
   },
   {
    "title": "The re-dye nobody counted",
    "path": [
     2,
     11,
     17,
     24,
     2
    ],
    "story": "The price assumed every batch would be right first time. In practice, one batch in five needs re-dyeing for shade. Nobody adds the extra dye, steam and machine hours to the order. The style loses money, and the next price repeats the mistake."
   }
  ],
  "headaches": {
   "breakdowns": {
    "title": "Machines stop without warning",
    "short": "A loom, stenter or sewing machine breaks down, the order stops, and everyone scrambles.",
    "signs": [
     "Repairs happen after something breaks, not before.",
     "The same machine fails again and again.",
     "Spares like belts, bearings and needles are bought in a rush, at a higher price."
    ],
    "before": "The stenter's main fan motor fails on a Tuesday night. Finishing stops for 14 hours, and 20 dyed batches pile up waiting.",
    "after": "Vibration on the fan motor slowly rises over 10 days. The maintenance lead gets an alert, orders the bearing, and swaps it during Sunday's planned stop."
   },
   "defects": {
    "title": "Shade and stitching faults are caught too late",
    "short": "Faults are found at the buyer's final inspection — or worse, in the buyer's stores.",
    "signs": [
     "Re-dyeing and alteration piles are always full.",
     "Buyers raise claims for the same fault, like shade variation.",
     "Checking depends on one experienced checker's eyes."
    ],
    "before": "3,000 shirts fail the buyer's AQL inspection (a sample check to accept the lot) for open seams. Every carton must be opened, checked and repacked.",
    "after": "End-line faults are logged by operation on a tablet. The tool shows open seams rising at one operation by mid-morning. The supervisor fixes the machine and guides the operator before lunch."
   },
   "planning": {
    "title": "The production plan changes every day",
    "short": "The plan lives in a spreadsheet — and in one merchandiser's head.",
    "signs": [
     "Rush orders and sample changes break the plan constantly.",
     "Some lines sit idle while others work overtime.",
     "Only one person really knows the plan, and everyone calls them."
    ],
    "before": "A big buyer pulls a ship date forward by a week. The planner spends half a day moving styles between lines. Two other orders end up late, and those buyers aren't told.",
    "after": "The planner enters the new date. The tool shows two options and which orders each would push back. The team picks one and tells the affected buyers the same day."
   },
   "inventory": {
    "title": "Too much fabric, not enough trims",
    "short": "The store is full of fabric, yet the line stops because labels or buttons are missing.",
    "signs": [
     "Cash is tied up in leftover fabric from old orders.",
     "Lines wait for a trim nobody noticed was running short.",
     "Fabric and trim allowances were set years ago and never changed."
    ],
    "before": "The store holds 8,000 metres of leftover fabric from old orders. A line stops for a full shift waiting for care labels.",
    "after": "The tool warns that care labels for two styles will run short in 9 days. Purchasing reorders in time — and uses leftover fabric for samples instead of buying more."
   },
   "suppliers": {
    "title": "Chasing mills and job-workers takes the whole day",
    "short": "Your team spends hours on calls and messages asking “where is my fabric?”",
    "signs": [
     "Late fabric, yarn or trims are a regular reason for delays.",
     "Supplier updates live on personal phones and WhatsApp.",
     "Nobody can quickly say which mill or dyer is most reliable."
    ],
    "before": "A purchase executive starts every morning going through 40 open orders, calling mills, dyers and trim suppliers one by one.",
    "after": "The executive opens a short list each morning: 4 orders at risk, each with the supplier's latest reply attached. The other 36 are on track."
   },
   "paperwork": {
    "title": "Typing the same information twice",
    "short": "People copy details from buyer POs, tech packs and paper registers into other systems by hand.",
    "signs": [
     "Buyer purchase orders and size breakdowns are typed in from PDFs.",
     "Cutting and line registers are filled on paper and typed up later — or never.",
     "Mistakes creep in when copying sizes, colours and quantities."
    ],
    "before": "The merchandising team spends the morning typing size breakdowns from 25 buyer orders. A wrong size quantity slips through about once a week.",
    "after": "Size breakdowns are read and entered automatically. Staff review all 25 on one screen, fix the 2 that are flagged, and are done before 10am."
   },
   "knowledge": {
    "title": "Know-how lives in a few people's heads",
    "short": "When your master dyer or senior mechanic is away, nobody knows the fix.",
    "signs": [
     "New operators take months to reach target output.",
     "The same questions about recipes and machine settings get asked again and again.",
     "Work instructions are outdated, missing or never read."
    ],
    "before": "On night shift, a dyeing batch keeps coming out patchy. The only person who knows the fix is the master dyer, and he is asleep. Three batches are re-dyed the next day.",
    "after": "The operator asks the factory assistant on a tablet. It shows the master dyer's note on the same problem last year. The shift supervisor checks it, and the next batch comes out even."
   },
   "energy": {
    "title": "Water, steam and power bills keep rising",
    "short": "Dyeing and finishing use a lot of water, steam and power — but nobody knows where it leaks.",
    "signs": [
     "One monthly power bill, and no idea which machine uses what.",
     "Boilers and compressors keep running when nothing is being dyed or stitched.",
     "Fabric waste in cutting is accepted as “normal”."
    ],
    "before": "The factory pays large boiler fuel and water bills. Everyone blames the dark shades.",
    "after": "Meters show leaking steam lines and extra rinses on some machines. Fixing them saves more than any change to the shade mix."
   },
   "safety": {
    "title": "Safety risks are spotted only after an accident",
    "short": "Near-misses go unreported, and fire and chemical checks depend on someone remembering.",
    "signs": [
     "Exits and walkways get blocked by cartons and fabric rolls.",
     "Incident reports are written after the fact, if at all.",
     "Fire drills and chemical checks happen once a year, on paper."
    ],
    "before": "A worker in the dye house gets a chemical splash while mixing. Nobody reports it. Two months later it happens again — and this time it needs hospital care.",
    "after": "The first splash is logged on a phone in a minute. The tool flags that gloves and goggles were missing at that station. Proper kit is issued that week."
   },
   "quotes": {
    "title": "Prices and buyer replies are slow",
    "short": "Buyers wait days for a price or an order update — and some go elsewhere.",
    "signs": [
     "Only one or two people can prepare a costing.",
     "Buyers call to ask “where is my order?”",
     "Merchandising doesn't know what's actually possible on the floor."
    ],
    "before": "A buyer sends a tech pack for a new polo shirt. The price takes 6 days because the costing person is busy. The buyer has already placed it elsewhere.",
    "after": "The tool finds three similar polos made last season and drafts a costing within an hour. The costing person checks it and sends it the same day."
   }
  }
 }
};
