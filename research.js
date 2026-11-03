// Research data: 24 factory processes in 6 departments, industry notes and sources.
// Written in plain English for factory owners. Edit freely.
window.PHASES=["Sales & orders","Planning & purchase","On the floor","Quality & upkeep","Dispatch & money","People & improvement"];
window.INDUSTRIES={
 "all": {
  "name": "All manufacturing",
  "caption": "The everyday work that most factories have in common.",
  "route": [
   "Enquiry & order",
   "Plan & buy",
   "Make & check",
   "Pack & dispatch",
   "Invoice & payment"
  ],
  "examples": [
   "A customer changes the order after the quotation.",
   "A supplier has not confirmed the full delivery.",
   "A job is waiting for material or an instruction.",
   "The cause of a repeat rejection is unclear.",
   "Finished goods are waiting for release.",
   "A repeated problem needs a measured fix."
  ],
  "specific": "Use the shared stages below to find work worth checking in your own business.",
  "sources": [
   "erp",
   "tally",
   "nist"
  ]
 },
 "plastics": {
  "name": "Plastics & packaging",
  "caption": "Moulding, extrusion and packaging work differently, so start with the one you know.",
  "route": [
   "Prepare material",
   "Mould or die setup",
   "Mould or extrude",
   "Finish & check",
   "Pack & dispatch"
  ],
  "examples": [
   "Check the approved product specification and sample.",
   "Confirm resin, masterbatch and packaging availability.",
   "Link the job to its tool, material and approved setup.",
   "Review defects by lot, cavity or run window where recorded.",
   "Reconcile accepted output, held stock and pack count.",
   "Compare material use and rejects for similar runs."
  ],
  "specific": "Moulding and extrusion need separate production steps. Grade-specific preparation and approved settings still apply.",
  "sources": [
   "plastics",
   "arburg"
  ]
 },
 "machining": {
  "name": "Metal parts & fabrication",
  "caption": "For job shops making machined parts or fabricated work.",
  "route": [
   "Drawing & material",
   "Tool & fixture setup",
   "Machine or fabricate",
   "Treat & inspect",
   "Pack & dispatch"
  ],
  "examples": [
   "Compare the customer drawing revision with the quote.",
   "Check material, fixtures, gauges and outside capacity.",
   "Check the programme and approved job instructions.",
   "Follow parts sent for treatment and dimensional checks.",
   "Gather inspection records and customer packing requirements.",
   "Compare estimated setup and run time with actuals."
  ],
  "specific": "Machining, sheet metal and welding use different routes and approvals. Treat this as a starting point.",
  "sources": [
   "tools",
   "erp"
  ]
 },
 "foundry": {
  "name": "Castings & foundry",
  "caption": "Follow each heat, each batch of castings and the work around them.",
  "route": [
   "Charge, mould & core",
   "Melt & test",
   "Pour & cool",
   "Finish & inspect",
   "Approve & dispatch"
  ],
  "examples": [
   "Confirm the pattern and customer requirements.",
   "Check charge material, moulds and cores together.",
   "Keep the heat and casting-lot identity connected.",
   "Bring chemistry, test and defect records into an investigation.",
   "Check the release evidence for the casting lot.",
   "Reconcile charge, accepted output, returns and loss."
  ],
  "specific": "This is a broad sand-casting route. Other casting methods need their own process map and technical review.",
  "sources": [
   "foundry",
   "nist"
  ]
 },
 "textiles": {
  "name": "Textiles & garments",
  "caption": "Fabric processing and garment making share office work but follow different production steps.",
  "route": [
   "Fabric / yarn receipt",
   "Sample & approval",
   "Process or stitch",
   "Check & finish",
   "Pack & dispatch"
  ],
  "examples": [
   "Find the approved sample, shade or product specification.",
   "Check fabric, trims, chemicals or yarn for the actual route.",
   "Keep lot, roll or bundle identity through the work.",
   "Review reprocessing or defects against the approved sample.",
   "Check assortment, labels and customer packing requirements.",
   "Compare rework within similar products and processes."
  ],
  "specific": "Wet processing uses lot, recipe and shade records. Garment assembly uses cutting, bundles and sewing operations. Detailed examples below are shared business work.",
  "sources": [
   "textiles",
   "erp"
  ]
 },
 "food": {
  "name": "Food & beverages",
  "caption": "In food, batch codes, cleaning, shelf life and final approval are part of the daily work.",
  "route": [
   "Ingredients & storage",
   "Prepare & process",
   "Pack & label",
   "Test & approve",
   "Store & deliver"
  ],
  "examples": [
   "Check the product, pack size and customer requirements.",
   "Check ingredient lots, expiry and packaging availability.",
   "Link ingredients and approved processing records to the batch.",
   "Check cleaning, test and label records for the product.",
   "Trace released batches to the deliveries recorded.",
   "Review waste, expiry and recurring complaints."
  ],
  "specific": "The exact route and controls depend on the product. Food-safety and release decisions stay with qualified staff.",
  "sources": [
   "food",
   "fao"
  ]
 },
 "assembly": {
  "name": "Electrical & electronic products",
  "caption": "Keep kits, product versions, serial numbers and test results together.",
  "route": [
   "Parts & product version",
   "Prepare kits",
   "Assemble & set up",
   "Test & approve",
   "Serial number & pack"
  ],
  "examples": [
   "Confirm the approved product and component list.",
   "Check complete kits and approved substitutions.",
   "Link configuration and work instructions to the unit.",
   "Keep test, repair and retest history with the serial number.",
   "Check labels and pack-out against the accepted order.",
   "Trace field complaints to recorded components and tests."
  ],
  "specific": "A broad assembly route is shown here. PCB assembly, electrical equipment and mechanical assembly need their own operations and tests.",
  "sources": [
   "serial",
   "erp"
  ]
 },
 "chemicals": {
  "name": "Chemicals, paints & coatings",
  "caption": "Formula versions, batch records and lab decisions need a clear record.",
  "route": [
   "Material & formula",
   "Weigh & charge",
   "Mix / process",
   "Sample & approve",
   "Fill & dispatch"
  ],
  "examples": [
   "Confirm the approved specification and formula version.",
   "Check material identity and vessel availability.",
   "Keep the charge record and approved adjustments with the batch.",
   "Distinguish processing time from waiting for laboratory results.",
   "Prepare certificates from approved results and check labels.",
   "Review batch corrections and repeat quality complaints."
  ],
  "specific": "Blending and reaction chemistry are different processes. This overview does not prescribe formulas, settings or safety controls.",
  "sources": [
   "chemical",
   "nist"
  ]
 }
};
window.CHECKPOINTS={
 "all": [
  "Which product type and which customer need matter most to you?",
  "Do you price per piece, per kg or per metre, and what is your usual batch size?",
  "Who agrees to changes the customer makes after ordering?",
  "How does the latest approved drawing or specification reach the shop floor?",
  "Which machine, line or team decides how fast you can deliver?",
  "Which bought-in item, if it arrives late, would stop the next job?",
  "Is material received in the same unit you ordered it in?",
  "Which incoming materials must be held until they are checked?",
  "When your team says something is 'in stock', what exactly do they mean?",
  "What must be ready before this type of job can start?",
  "How do you count good output and losses?",
  "What does the next shift really need to know?",
  "Where do doubtful parts go until someone decides what happens to them?",
  "Do you send any production work to outside vendors?",
  "Which breakdown hurts your deliveries the most?",
  "Do electricity, compressed air and water each have their own meter?",
  "Before you put a value on scrap, check how it is reused or sold.",
  "What shows that this quantity is approved for dispatch?",
  "Check the customer's packing and labelling requirements.",
  "Why was your last overdue invoice not paid?",
  "What number or code do you use to trace a product back?",
  "Which work stops when one key person is away?",
  "Confirm which safety and legal requirements apply to your plant.",
  "Pick similar jobs before you compare their costs."
 ],
 "plastics": [
  "Is the enquiry for moulded parts, extruded product or converted packaging?",
  "Does your quote cover resin grade, colour changes, mould cost and start-up waste?",
  "Have you written down the customer's sample, look and packing needs?",
  "How do you mark resin grades, moulds, dies and approved machine settings?",
  "Does your plan allow time for drying, mould availability, changeover and cooling?",
  "Do you have the right grade of resin, masterbatch, additives and packaging?",
  "Do receipt records show resin grade, supplier batch and weight received?",
  "Who checks the supplier certificate and material condition against the grade ordered?",
  "Are virgin resin, regrind and held batches marked and kept apart?",
  "Are the mould or die, dried material and approved settings ready?",
  "Do shots, cavities or line output match the good pieces or weight you got?",
  "Are cavity problems, setting changes and material changes passed to the next shift?",
  "Can you compare rejects by mould, cavity, batch and time of the run?",
  "If mould repair or finishing is done outside, how do you track moulds and parts?",
  "Do you record mould, barrel, heater and other equipment faults separately?",
  "Can you separate the power used by the press or line from dryers, chillers and compressors?",
  "Do you keep runners, purging material, rejects and reusable regrind apart?",
  "Are look, size, count and any required test approvals complete?",
  "Does the packed count match the good pieces, weight or length?",
  "Do price changes, short supplies or missing approvals explain the customer's deductions?",
  "Can you trace each finished batch back to its resin and mould or line records?",
  "Can the next setter find the approved settings and past problems?",
  "Do approved procedures cover material handling, hot surfaces and equipment checks?",
  "Can you compare start-up scrap and changeovers between similar products?"
 ],
 "machining": [
  "Are the latest drawing, material grade, tolerance and finish clear?",
  "Does the quote include setup, fixtures, tool wear, inspection and outside work?",
  "Did the customer's order change the drawing version, inspection or delivery dates?",
  "How do you keep drawings, CNC programs, welding procedures and gauge needs up to date?",
  "Are fixtures, tools, gauges, skilled people and outside vendors available?",
  "Have you confirmed material size, grade, test certificate and outside vendors' capacity?",
  "Do the heat number, grade, size and weight match what was received?",
  "Which material test certificates and incoming checks do you need?",
  "Are usable offcuts and the customer's own material marked separately?",
  "Are the fixture, program, tool list and first-piece inspection ready?",
  "Can finished pieces and rework be linked to the right operation?",
  "Are tool wear, offsets and half-finished jobs clearly handed over?",
  "If a size goes out of tolerance, can you find which parts made around then are doubtful?",
  "Do quantities back from heat treatment, plating or outside machining match what you sent?",
  "Can you tell machine, spindle, fixture and tool problems apart?",
  "Do your meter readings show compressed-air waste and power used by idle machines?",
  "Do you count chips, cutting losses and rejected parts separately from their scrap sale value?",
  "Are dimension reports and the customer's approval requirements complete?",
  "Have rust protection, part marking and packing instructions been checked?",
  "Are rejections, missing inspection papers or quantity differences holding up payment?",
  "Can you trace the complaint to the material heat number, drawing version and operations?",
  "Who can run or inspect the job if the usual setter is absent?",
  "Do qualified staff cover lifting, welding and machine safety checks?",
  "Can you compare estimated setup and machining hours with actual hours for good parts?"
 ],
 "foundry": [
  "Are the alloy, casting drawing, pattern and test needs clear?",
  "Does the quote cover pattern or core cost, metal lost in melting, finishing and testing?",
  "Did the customer change the alloy, machining allowance or inspection needs?",
  "How do you mark versions of patterns, core boxes and approved process settings?",
  "Are charge, moulds, cores, furnace time and finishing capacity ready at the same time?",
  "Do you have enough alloy additions, sand, binders and other small supplies?",
  "Can you identify charge materials and additions by grade and batch?",
  "Which incoming materials must be checked before use?",
  "Are charge material, foundry returns and held material kept apart?",
  "Are moulds and cores checked as ready before you plan a heat?",
  "Can you trace a heat to its castings, returns and accepted output?",
  "Are open problems with the heat, moulds, furnace and finishing passed to the next shift?",
  "Are chemistry, temperature, test and defect records linked to the heat?",
  "Do quantities back from outside machining or treatment match what you sent?",
  "Which furnace, handling or moulding breakdown stops the work?",
  "Can you fairly compare fuel or power used against good castings made?",
  "Do gates, risers, returns and lost metal add up to what was melted?",
  "Are all required tests and approvals for each casting batch complete?",
  "Have casting marking, rust protection and delivery quantities been checked?",
  "Are test records, rejection claims or short supplies holding up acceptance?",
  "Can you trace affected shipments back to heats and casting batches?",
  "Who holds the hands-on know-how for charging, moulding and finishing?",
  "Who is responsible for safety checks on molten metal, lifting and fume extraction?",
  "Can you compare good casting weight per melt, finishing effort and rejects across similar castings?"
 ],
 "textiles": [
  "Is this yarn, fabric processing or garment work, and is the approved sample clear?",
  "Does the price include the process steps, fabric use, re-processing and size/colour mix?",
  "Are shade, fabric construction, size mix and delivery dates agreed?",
  "How do you keep approved samples, recipes, patterns and specifications up to date?",
  "Which line, machine, batch size or skill really slows this order down?",
  "Are fabric, yarn, dyes, trims and packing material checked for this process?",
  "Can you identify each roll, yarn batch, shade and length or weight received?",
  "Which fabric or yarn defects mean incoming material must be held?",
  "Can you find the rolls, batches, bundles and trims set aside for each order?",
  "Are approved recipes or patterns, machines and materials ready?",
  "How do you track rolls, batches or bundles through the steps they actually go through?",
  "Are shade problems, machine settings and unfinished bundles handed over?",
  "Are shade, shrinkage, strength or stitching checks linked to the right batch?",
  "Do pieces back from outside dyeing, printing, embroidery or washing match what you sent?",
  "Which machine or utility breakdown hurts this work the most?",
  "For dyeing and washing, can you compare water, steam and power per kg or per metre?",
  "Do you record cutting waste, seconds and re-processing separately?",
  "Are shade, test, size-mix and buyer approvals complete?",
  "Are size ratios, labels, carton contents and packing lists checked?",
  "Do shade claims, size-mix differences or missing records explain the buyer's deductions?",
  "Can you trace affected rolls or garments to their processing batches and deliveries?",
  "Can operators easily find the approved sample and instructions?",
  "Do safety checks cover chemicals, steam, machines and the work environment for this process?",
  "Can you compare re-processing and material loss within the same process and product?"
 ],
 "food": [
  "Are the product, pack size, shelf life and customer needs clear?",
  "Does the price allow for ingredient losses, packaging, cleaning, waste and storage?",
  "Are the label, shelf life left at delivery and customer acceptance terms agreed?",
  "How do you keep approved recipes, labels and process instructions up to date?",
  "Does the plan allow for cleaning, allergen changeovers, shelf life and storage limits?",
  "Do you have ingredient batches with enough shelf life, and food-safe packaging?",
  "Can you record each ingredient, its condition on arrival and its expiry date?",
  "Who checks certificates, temperatures and incoming test results?",
  "Can you see expiry dates, held stock, allergens and storage conditions separately?",
  "Are cleaning, line clearance (nothing left from the last product), ingredients and instructions ready?",
  "Can you trace the ingredients used and rework added to each finished batch?",
  "Are cleaning status, held batches and open problems handed over?",
  "Are process, packing and food-safety checks recorded for each batch?",
  "If storage or processing is done outside, can you still trace batches and storage conditions?",
  "Which breakdowns affect safe storage, processing or sealed packs?",
  "Can you compare power and water use against output, cleaning and idle time?",
  "Do you record waste, expired stock and allowed rework separately?",
  "Who checks the required results and approves the product for dispatch?",
  "Are labels, batch codes, delivery conditions and quantities checked?",
  "Are returns, expiry claims or missing proof of delivery holding up payment?",
  "In a practice recall, can you trace ingredients and finished deliveries?",
  "Can staff easily find approved hygiene, allergen and process instructions?",
  "Who checks which food-safety rules apply and confirms the actions are done?",
  "Can you compare good output from ingredients and expiry losses within the same product and pack?"
 ],
 "assembly": [
  "Are the product model, approved parts list and test needs clear?",
  "Does the price include parts, testing, repairs and expected warranty costs?",
  "Are settings, allowed substitute parts and acceptance tests agreed?",
  "How do you keep the parts list, firmware and work instructions on the right version?",
  "Are complete kits, test capacity, fixtures and trained operators available?",
  "Have you checked key parts, approved alternatives and supplier lead times?",
  "Do part batch, part code and quantity match the receipt records?",
  "Which part checks or certificates are needed before use?",
  "Can you tell reserved kits, substitute parts and held parts apart?",
  "Are the kit, fixture, program and test instructions ready?",
  "Can settings and parts used be linked to the batch or serial number?",
  "Are test failures, missing parts and unfinished units handed over?",
  "Are test, repair and retest results kept with each unit?",
  "Can outsourced PCB or sub-assembly work be tracked by batch and quantity?",
  "Which assembly or test fixture breakdown limits output?",
  "Can you compare power used by test benches or lines in similar running conditions?",
  "Do you count scrapped parts, repeat repairs and final rejects separately?",
  "Are all required tests and setting checks approved before dispatch?",
  "Are serial numbers, accessories, manuals and labels checked against the order?",
  "Are test records, warranty disputes or setting differences holding up payment?",
  "Can a field fault be traced to its serial number, part batch and test history?",
  "Who is trained to assemble, inspect, repair or approve a substitute part?",
  "Are electrical testing and equipment checks done by qualified staff?",
  "Can you compare first-time test pass rates and repair effort by product model?"
 ],
 "chemicals": [
  "Is this a blend, paint, coating or reaction product, and is its specification clear?",
  "Does the price cover formula cost, batch losses, vessel time, lab work and packing?",
  "Are the product specification, certificate of analysis and packing terms agreed?",
  "How do you track versions of formulas, labels and approved adjustments?",
  "Have you checked vessel suitability, cleaning, lab capacity and material availability?",
  "Do you have approved grades, packaging and materials that can be stored safely together?",
  "Can you identify each incoming material's grade, batch, weight and condition?",
  "Who checks identity, certificates and lab results before material is used?",
  "Can you see safe storage, held stock and what each container holds?",
  "Are the vessel, cleaning and approved charging instructions confirmed ready?",
  "Can weighed additions and approved adjustments be traced to the batch?",
  "Are vessel status, lab holds and pending batch work handed over?",
  "Can each sample, result, adjustment and retest be linked to the correct batch?",
  "If job-work processing or testing is done outside, how are quantities and samples tracked?",
  "Which mixer, pump, vessel or instrument breakdown stops the work?",
  "Can you compare heating, cooling and mixing energy for similar batches?",
  "Do you keep batch corrections, reusable leftovers and waste for disposal separate?",
  "Who approves lab results and any change from the specification?",
  "Are product identity, required labels, seals and shipping conditions checked?",
  "Are certificate differences, quality claims or returns holding up acceptance?",
  "Can a complaint be traced to formula version, raw materials, lab results and deliveries?",
  "Can staff find the approved instructions without relying on memory?",
  "Who is responsible for chemical compatibility, work permits and safety checks?",
  "Can you fairly compare differences from the formula, lab waiting time and batch corrections?"
 ]
};
window.SOURCES={
 "erp": [
  "ERPNext: job cards & recorded work",
  "https://docs.frappe.io/erpnext/job-card"
 ],
 "tally": [
  "TallyPrime: job-work records",
  "https://help.tallysolutions.com/job-worker/"
 ],
 "nist": [
  "NIST: AI in manufacturing",
  "https://www.nist.gov/programs-projects/artificial-intelligence-ai-manufacturing"
 ],
 "plastics": [
  "TERI: plastics process routes",
  "https://sameeeksha.org/pdf/clusterprofile/Balasore_Plastics_Orissa.pdf"
 ],
 "arburg": [
  "ARBURG: production efficiency",
  "https://www.arburg.com/media/daten/publications/brochures/ARBURG_production_efficiency_680243_en_GB.pdf"
 ],
 "tools": [
  "Sandvik: tool planning & management",
  "https://www.digitalmanufacturing.sandvik/en/our-offering/tool-management-solutions/"
 ],
 "foundry": [
  "BEE: foundry processes",
  "https://sidhiee.beeindia.gov.in/AboutUs/foundry"
 ],
 "textiles": [
  "BEE / PCRA: Pali textile processes",
  "https://www.sameeeksha.org/pdf/dpr/Pali_Textile.pdf"
 ],
 "food": [
  "FSSAI: processed fruit & vegetable guidance",
  "https://www.fssai.gov.in/upload/uploadfiles/files/FSMS_Guidance_Document_FruitsVegetable_15_03_2019.pdf"
 ],
 "fao": [
  "FAO: traceability & recalls",
  "https://www.fao.org/food-safety/food-control-systems/traceability---recalls/en"
 ],
 "serial": [
  "Siemens: lot & serial traceability",
  "https://www.siemens.com/en-us/technology/lot-traceability/"
 ],
 "chemical": [
  "TERI / BEE: chemical process examples",
  "https://sameeeksha.org/pdf/clusterprofile/Karnal%20chemical%20cluster.pdf"
 ],
 "outside": [
  "ERPNext: subcontracting",
  "https://docs.frappe.io/erpnext/subcontracting"
 ],
 "integration": [
  "TallyPrime: XML integration",
  "https://help.tallysolutions.com/xml-integration/"
 ]
};
window.PROCESSES=[
 {
  "n": 1,
  "phase": 0,
  "flow": "information",
  "title": "Handling enquiries",
  "people": "Sales team, estimator, technical engineer",
  "today": "A drawing comes by email. The quantity comes on WhatsApp. Someone has to put it all together.",
  "help": "AI gathers the customer's needs from emails and messages into one place, finds earlier enquiries for the same part, and drafts the questions still unanswered.",
  "workflow": "Assemble an enquiry packet, find similar jobs, compare revisions and draft missing-information questions.",
  "better": "Fewer back-and-forth calls, and a clearer place to start the quote.",
  "friction": "The customer's needs are spread across many messages. A repeat part can quietly come with changed specifications.",
  "causes": [
   "Details spread across messages",
   "Customer unsure what they need",
   "Not every enquiry is serious"
  ],
  "inputs": "Customer emails, drawings, past quotes, and the different names used for the same part.",
  "tools": [
   "WhatsApp / email",
   "Excel enquiry log",
   "CRM (customer list software) / ERP (main business software) sales screen"
  ],
  "alternative": "Assign enquiry ownership and a completeness checklist",
  "boundary": "Engineer reviews geometry and tolerance changes.",
  "metric": "How long it takes to complete an enquiry, and how often a customer requirement is missed.",
  "questions": [
   "Where do enquiries come in, and who is responsible for each one?",
   "What do we need to know before we can quote?",
   "Show me the last enquiry where we had to go back to the customer again and again."
  ],
  "question": "For this quote, which drawing version, quantity, delivery date and customer requirement are we working to?",
  "steps": [
   "Receive the enquiry",
   "Work out who the customer is and which part they want",
   "Collect the drawings and attachments",
   "Confirm the drawing version, quantity and delivery date",
   "Ask the customer about anything missing",
   "Hand it to an estimator"
  ]
 },
 {
  "n": 2,
  "phase": 0,
  "flow": "information",
  "title": "Costing and quotations",
  "people": "Estimator, purchase team, commercial head",
  "today": "One old material rate or a forgotten setup charge can ruin the quote.",
  "help": "AI finds similar past jobs and points out cost lines you may have missed. Your own costing sheet still does the calculations.",
  "workflow": "Prepare a sourced costing draft; flag omitted cost lines; compare completed-job actuals with estimates.",
  "better": "Less time spent hunting for prices and past jobs.",
  "friction": "Old prices, forgotten minimum charges, and machine times that live only in someone's head all make the cost wrong.",
  "causes": [
   "Wrong batch size assumed",
   "Setup cost left out",
   "Unsure how much will be scrapped",
   "Out-of-date prices"
  ],
  "inputs": "Your costing sheet, supplier quotes, and what past jobs actually cost.",
  "tools": [
   "Excel costing sheet",
   "PDF quotations",
   "ERP (main business software) price lists"
  ],
  "alternative": "Repair the costing workbook and controlled price sources",
  "boundary": "Use explicit formulas; never invent costs or cycle times.",
  "metric": "How long it takes to send a quote, and how far the actual cost ends up from the quote.",
  "questions": [
   "How do we price material, setup, waste, testing and transport?",
   "Who checks that our rates and assumptions are still up to date?",
   "Which finished job cost more than we estimated, and why?"
  ],
  "question": "Do we cost material, setup, tool wear, testing and transport separately, so we can see how each one changes with the order quantity?",
  "steps": [
   "List each step the part goes through",
   "Work out the material needed, including waste",
   "Get prices from suppliers",
   "Estimate machine setup time and running time",
   "Add tooling, testing, packing and transport costs",
   "Approve the profit margin"
  ]
 },
 {
  "n": 3,
  "phase": 0,
  "flow": "information",
  "title": "Checking the customer's order",
  "people": "Sales team, accounts, planning, quality",
  "today": "The price matches. But the delivery date or inspection requirement may have changed.",
  "help": "AI compares the customer's order with the quote they accepted, and flags any changes for someone to approve.",
  "workflow": "Compare PO against quote; create obligations with owners; track unresolved terms to approval.",
  "better": "Changed terms are caught before work begins.",
  "friction": "Customers change terms after the quote. Work often starts before these differences are sorted out.",
  "causes": [
   "Delivery schedule changed",
   "Terms nobody approved",
   "Customer's own part-delivery rules"
  ],
  "inputs": "The quote, the customer's order, any later changes to it, and your approved credit rules.",
  "tools": [
   "Email and signed PDF",
   "Excel order register",
   "ERP (main business software) sales orders"
  ],
  "alternative": "Use ERP order amendments and a deviation approval register",
  "boundary": "Authorised people accept commercial deviations.",
  "metric": "Mistakes made when entering orders, and how many open issues are still unsorted when work starts.",
  "questions": [
   "Who compares the customer's order with the quote they accepted?",
   "Who approves changed dates, quantities and terms, and how?",
   "Can work start while a price, terms or technical question is still open?"
  ],
  "question": "Which order lines and changes have been properly approved?",
  "steps": [
   "Match the customer's order to our quote",
   "Check drawing version, quantities, prices, dates, terms and inspection requirements",
   "Confirm the customer's credit limit or advance payment",
   "Confirm the order to the customer"
  ]
 },
 {
  "n": 4,
  "phase": 0,
  "flow": "information",
  "title": "Drawings and specifications",
  "people": "Design engineer, process engineer, person who maintains item codes",
  "today": "An old drawing can travel further on the shop floor than the new one.",
  "help": "AI finds duplicate item codes and shows which open jobs a drawing change could affect.",
  "workflow": "Suggest duplicate items; trace change impact across stock and open jobs; check release completeness.",
  "better": "People get the right instructions for the job in front of them.",
  "friction": "Duplicate item codes and out-of-date drawings split the records and give people the wrong instructions.",
  "causes": [
   "Drawing version changed",
   "Half-finished work on old version",
   "Substitute not approved",
   "Same item, two codes"
  ],
  "inputs": "Parts lists, process routes, the history of drawing versions, and open purchase orders and jobs.",
  "tools": [
   "CAD (drawing software) / drawing PDFs",
   "Excel parts list (BOM)",
   "ERP (main business software) parts lists and process routes"
  ],
  "alternative": "Control revisions, identifiers and engineering release",
  "boundary": "Approved engineering data remains the source of truth.",
  "metric": "How often the wrong drawing version is used, and how often a part is issued with missing documents.",
  "questions": [
   "Where do we keep the approved specification?",
   "How do people know which drawing version applies to an open job?",
   "After a change, what happens to material already bought, half-finished work and stock?"
  ],
  "question": "Which stock, jobs, tools and purchases does the new drawing version affect?",
  "steps": [
   "Create item codes and units",
   "Issue the parts list, process route, drawings and inspection plan",
   "Approve substitute materials or parts",
   "Send new drawing versions to everyone who needs them"
  ]
 },
 {
  "n": 5,
  "phase": 1,
  "flow": "information",
  "title": "Planning the work",
  "people": "Planner, sales team, production manager",
  "today": "A promised date only holds if material, machines, tools and people are all available.",
  "help": "AI brings all these limits together in one view, and explains in plain words the schedule options a planning tool comes up with.",
  "workflow": "Explain delivery constraints; model rush-order impact; flag events that invalidate the plan.",
  "better": "You can see what else is affected when an urgent order comes in.",
  "friction": "A date stays on paper even after the material or machine time it depended on has fallen through.",
  "causes": [
   "Missing tools or skilled people",
   "Slowest machine is fully booked",
   "Rush orders keep arriving",
   "Setup time depends on previous job"
  ],
  "inputs": "Order book, stock, machine and people time available, work calendars, and breakdown time.",
  "tools": [
   "Whiteboard / Excel",
   "Phone calls by the planner",
   "ERP (main business software) planning screen"
  ],
  "alternative": "Validate route, calendars, buffers and scheduling rules",
  "boundary": "Use a constraint model or optimiser for scheduling.",
  "metric": "How many deliveries are on time, how closely the plan is followed, and how often you re-plan.",
  "questions": [
   "What really decides the delivery date we can promise?",
   "How do we check material, tooling, people and outside work before scheduling?",
   "When an urgent job comes in, who decides what gets moved?"
  ],
  "question": "What limits this particular customer order, and what moves if priorities change?",
  "steps": [
   "Separate confirmed orders from expected ones",
   "Check usable stock and free machine and people time",
   "Allow for maintenance and who has the right skills",
   "Promise delivery dates",
   "Review rush orders",
   "Re-plan when things change"
  ]
 },
 {
  "n": 6,
  "phase": 1,
  "flow": "information",
  "title": "Purchasing and suppliers",
  "people": "Buyer, purchase manager, engineer who approves the material",
  "today": "A supplier says “tomorrow”. The buyer still needs a quantity and a firm date.",
  "help": "AI compares supplier quotes, pulls out what each supplier has actually promised, and drafts follow-up messages for critical material.",
  "workflow": "Normalise offers; extract quantity/date commitments; prioritise follow-up by production impact.",
  "better": "Buyers spend their chasing time on the shortages that really matter.",
  "friction": "Vague promises and part deliveries hide how much production is really at risk.",
  "causes": [
   "Advance not yet paid",
   "Specification not clear",
   "Supplier too busy",
   "Vague delivery promise"
  ],
  "inputs": "Supplier quotes, purchase orders, supplier replies, and which customer orders need each item.",
  "tools": [
   "Email / WhatsApp",
   "Excel quote comparison",
   "ERP (main business software) purchase orders"
  ],
  "alternative": "Resolve commercial blocks and record approved commitments",
  "boundary": "An uncertain promise must remain visibly uncertain.",
  "metric": "Time buyers spend following up, how much material arrives late, and how many urgent purchases you make.",
  "questions": [
   "Which shortages could stop an order we have promised a customer?",
   "Does the supplier confirm a quantity and a date, or just say they got the order?",
   "Is the delay with the supplier, a payment, or an approval inside our company?"
  ],
  "question": "What exactly is missing: a firm supplier promise, a payment, a technical approval, or the material itself?",
  "steps": [
   "Raise a purchase request",
   "Find approved suppliers and collect quotes",
   "Compare units and what each quote leaves out",
   "Clear up doubts with suppliers",
   "Approve the purchase order",
   "Get the supplier to confirm the order and the dispatch date"
  ]
 },
 {
  "n": 7,
  "phase": 1,
  "flow": "physical",
  "title": "Receiving material",
  "people": "Security, weighbridge operator, stores team, receiving team",
  "today": "The truck has arrived. The paperwork, count and condition still need checking.",
  "help": "AI reads the delivery documents and flags any differences from the purchase order.",
  "workflow": "Read challans and slips; reconcile PO vs receipt; assemble damage or shortage evidence; track arrival to release.",
  "better": "Less typing the same data twice, and a clear record of shortages or damage.",
  "friction": "Material that has arrived, material recorded as received, and material ready to use are three different things.",
  "causes": [
   "Batches mixed together",
   "Only part of the order came",
   "Units don't match",
   "Damaged delivery"
  ],
  "inputs": "Purchase order, invoice, delivery challan, weights and photos.",
  "tools": [
   "Gate register",
   "Weighbridge slips",
   "ERP (main business software) goods receipt"
  ],
  "alternative": "Use receipt controls, weighing and discrepancy ownership",
  "boundary": "Verify physical quantity before updating stock.",
  "metric": "How long trucks wait, how much effort data entry takes, and how many differences stay unsorted.",
  "questions": [
   "Who checks the quantity, condition and identity of material when it arrives?",
   "How do we record part deliveries and differences?",
   "How soon can stores and planning see what actually arrived?"
  ],
  "question": "What arrived, where is it kept, which unit is it counted in, and how much can we accept?",
  "steps": [
   "Log the vehicle at the gate and check its documents",
   "Unload",
   "Count or weigh",
   "Photograph any damage",
   "Make the goods receipt entry",
   "Give it a batch number, storage place and inspection status"
  ]
 },
 {
  "n": 8,
  "phase": 1,
  "flow": "physical",
  "title": "Checking incoming material",
  "people": "Inspector, lab, supplier quality team, stores",
  "today": "Material can sit in stores while a test or supplier certificate is still pending.",
  "help": "AI checks supplier certificates against your approved requirements and lists any missing records.",
  "workflow": "Read certificates; compare approved limits; flag missing evidence; retrieve supplier defect history.",
  "better": "The reason material is on hold is easier to find.",
  "friction": "A missing certificate, or a test result not yet signed off, means received material cannot be used.",
  "causes": [
   "Missing certificate",
   "Wrong test method used",
   "Measurements not reliable enough",
   "Held material gets mixed in"
  ],
  "inputs": "Batch details, certificates, test results and acceptance limits.",
  "tools": [
   "Paper inspection sheet",
   "Excel test log",
   "QMS (quality software) / ERP inspection screen"
  ],
  "alternative": "Fix inspection and physical segregation first",
  "boundary": "Rules check limits; authorised quality staff release lots.",
  "metric": "How long it takes to release material for use, certificate errors, and repeat rejections.",
  "questions": [
   "Which tests and certificates does this material need?",
   "How do we keep unapproved material apart from usable stock?",
   "Who can release it, and what proof do they need?"
  ],
  "question": "For this batch, are the sampling, the measuring instrument, the limits and the person releasing it all right?",
  "steps": [
   "Identify the batch and get the supplier's test certificate",
   "Decide which checks to do",
   "Take samples and test them",
   "Record the results",
   "Accept, reject or put on hold",
   "Keep held or rejected material apart and tell purchasing"
  ]
 },
 {
  "n": 9,
  "phase": 2,
  "flow": "physical",
  "title": "Stores and moving stock",
  "people": "Store keeper, material handler, planner",
  "today": "The sheet says the stock is there. But some of it is kept aside, on hold or sitting in another rack.",
  "help": "AI can match different names for the same item. It can also turn a barcode scan or a spoken note into a stock entry, which a person confirms.",
  "workflow": "Resolve approved aliases; combine barcode scans and voice capture; distinguish physical from usable stock.",
  "better": "Less time searching for material, and fewer surprises when it reaches the machine.",
  "friction": "Moves that nobody writes down, part-used rolls, and stock kept aside or on hold make it look like material is available when it isn't.",
  "causes": [
   "Stock move not recorded",
   "Stock kept aside for a job",
   "Wrong unit of measure",
   "Material owned by the customer"
  ],
  "inputs": "Your item list, labels, barcode scans, and which stock is on hold or kept aside.",
  "tools": [
   "Bin cards and labels",
   "Barcode scanner",
   "ERP (main business software) stock records"
  ],
  "alternative": "Barcode/bin discipline, stock reconciliation and reservation controls",
  "boundary": "A missing movement record cannot be inferred reliably.",
  "metric": "Time spent searching for material, how often stock records need correcting, and how often machines stop for lack of material.",
  "questions": [
   "Can the team tell which stock is free to use, kept aside, on hold, or owned by the customer?",
   "When and how do we record each stock move?",
   "Show me a recent case where the physical count did not match the stock records."
  ],
  "question": "For each item, what is actually here, what is usable, what is kept aside or on hold, and who owns it?",
  "steps": [
   "Label incoming material and put it in its place",
   "Keep stock aside for specific jobs",
   "Pick material and issue it to the shop floor",
   "Move stock between racks or locations",
   "Take back unused material",
   "Count a few items regularly",
   "Check the count against the stock records"
  ]
 },
 {
  "n": 10,
  "phase": 2,
  "flow": "physical",
  "title": "Getting the next job ready",
  "people": "Setter, toolroom, operator, quality team",
  "today": "The changeover starts. Then someone goes looking for a tool, an instruction or a sign-off.",
  "help": "AI can check early whether everything for the next job is ready. It can also find the approved setup instructions for that job.",
  "workflow": "Check next-job readiness before the current run ends; retrieve approved setups; classify changeover waiting.",
  "better": "You find missing items while there is still time to fix the gap.",
  "friction": "During the changeover, the machine stands waiting for a fixture, gauge, programme or sign-off.",
  "causes": [
   "Tool not available",
   "Gauge not ready",
   "Slow manual adjustments",
   "Waiting for approval"
  ],
  "inputs": "Your tool and gauge register, the kit list for each job, and records of past approved setups.",
  "tools": [
   "Setup checklist",
   "Tool register",
   "CNC programme or machine settings sheet"
  ],
  "alternative": "Stage the next job and improve the actual changeover method",
  "boundary": "Machine settings require technical approval.",
  "metric": "Time from machine stop to the first approved piece, and how much of that time is spent waiting.",
  "questions": [
   "What must be ready before the machine or line stops for the changeover?",
   "Which delays are real setup work, and which are searching or waiting for approval?",
   "Who checks that the instructions, tools and gauges are the latest version?"
  ],
  "question": "How many minutes go on waiting for things, and how many on actual setup work?",
  "steps": [
   "Find the tools, holding fixtures and measuring gauges",
   "Bring the material to the machine",
   "Get the approved machine programme",
   "Clean the machine",
   "Change the tooling",
   "Run trial pieces",
   "Get the first piece checked and approved"
  ]
 },
 {
  "n": 11,
  "phase": 2,
  "flow": "physical",
  "title": "Recording production",
  "people": "Operator, supervisor, production manager",
  "today": "The work happens now. The report often gets written at the end of the shift.",
  "help": "The operator speaks a short update. AI turns it into a draft entry linked to the job, and the operator confirms it.",
  "workflow": "Turn local-language voice updates into job-linked drafts; capture downtime reasons; compare recorded output with plan.",
  "better": "Less writing the same thing twice, and earlier warning when a machine stops.",
  "friction": "Reports are written late, so short stoppages never make it into the record.",
  "causes": [
   "Scrap not reported",
   "Job only partly finished",
   "Batches split or combined",
   "Material use differs from plan"
  ],
  "inputs": "Job cards, start and stop times, machine counters, and updates from operators.",
  "tools": [
   "Paper job cards",
   "Excel production report",
   "MES (shop-floor tracking software) or ERP (main business software)"
  ],
  "alternative": "Capture job and lot events with confirmed quantities and units",
  "boundary": "Confirm job identity and quantities before posting.",
  "metric": "Time spent on reporting, how complete the records are, and how late the team hears about a problem.",
  "questions": [
   "Which quantities, losses and stoppages do we record during the shift?",
   "How do we handle split jobs, rework and jobs that are only partly finished?",
   "Who corrects a wrong entry, and is the original entry still kept?"
  ],
  "question": "Do the good, on-hold, reworked, scrapped and unfinished quantities add up to what we started with?",
  "steps": [
   "Start the job and load the machine",
   "Run the machine",
   "Top up consumables",
   "Check the output",
   "Record good, rejected and reworked pieces",
   "Move half-finished work to the next stage",
   "Close the operation"
  ]
 },
 {
  "n": 12,
  "phase": 2,
  "flow": "information",
  "title": "Shift handover",
  "people": "Outgoing and incoming supervisors, maintenance team, quality team",
  "today": "The next supervisor asks the same questions the last shift already answered.",
  "help": "AI can draft the handover note from confirmed updates. It carries unfinished actions over to the next shift.",
  "workflow": "Create a structured handover from conversation; carry open actions forward; request critical acknowledgement.",
  "better": "Open problems stay visible from one shift to the next.",
  "friction": "The next shift has to piece together what happened. Problems that were not solved drop out of the logbook.",
  "causes": [
   "Nobody takes ownership",
   "Temporary change not closed",
   "Unclear where material is"
  ],
  "inputs": "The shift logbook, open jobs, material on hold, and the list of pending actions.",
  "tools": [
   "Shift logbook",
   "WhatsApp voice notes",
   "MES (shop-floor tracking software) downtime log"
  ],
  "alternative": "Agree a handover protocol and critical acknowledgement",
  "boundary": "Critical instructions need a named receiving owner.",
  "metric": "How many actions get missed, how often things are explained twice, and problems caused by poor handover.",
  "questions": [
   "What does the next shift need to know before taking over?",
   "Who takes charge of each open problem and its next step?",
   "Show me a problem that was explained twice or lost between shifts."
  ],
  "question": "Who takes charge of each problem, and what will show us it is truly fixed?",
  "steps": [
   "Report which jobs are running and how much is left",
   "Report material on hold and where material is kept",
   "Report machine problems",
   "Report any temporary changes made during the shift",
   "Hand over actions that are still pending"
  ]
 },
 {
  "n": 13,
  "phase": 3,
  "flow": "physical",
  "title": "Quality checks during production",
  "people": "Operator, line inspector, quality engineer",
  "today": "If a quality check happens late, there are more pieces to sort or rework.",
  "help": "AI can flag missed checks. It can also bring readings, batch details and past defects together for the team to review.",
  "workflow": "Capture validated readings; flag overdue checks; investigate defects against lots, tools, cavities and time.",
  "better": "The team can investigate problems and stop bad parts earlier.",
  "friction": "When checks are missed or readings are kept in different places, suspect parts keep moving on before anyone stops them.",
  "causes": [
   "Gauge reading drifting",
   "Check missed",
   "Real change in the process",
   "Too few samples checked"
  ],
  "inputs": "Your inspection plan, the measurements, and what was happening in the process at the time.",
  "tools": [
   "Gauges and measuring instruments",
   "Spreadsheet with charts that flag unusual readings",
   "Quality software or inspection app"
  ],
  "alternative": "Validate measurements, checks and containment procedures",
  "boundary": "Correlation is not root cause; vision needs validation.",
  "metric": "How many defects reach the customer, how many checks are done on time, and how long it takes to stop suspect parts.",
  "questions": [
   "Which checks are due, and how do we know when one was missed?",
   "How do we find suspect parts and stop them moving on?",
   "Can we trust our instruments, our checking methods and our pass/fail limits?"
  ],
  "question": "Which period of production is suspect, and how will we stop those parts moving on?",
  "steps": [
   "Approve the first pieces",
   "Do checks at set times",
   "Note which measuring instrument was used",
   "Record the results",
   "Spot readings that are slowly moving off target",
   "Stop suspect parts from moving on",
   "Fix the problem and restart"
  ]
 },
 {
  "n": 14,
  "phase": 3,
  "flow": "physical",
  "title": "Work sent to outside workshops",
  "people": "Outside work coordinator, store keeper, buyer, quality team",
  "today": "Material goes out for treatment or processing. It comes back in parts, so the balance is hard to follow.",
  "help": "AI can match what went out against what came back. It shows which customer orders are waiting for that work.",
  "workflow": "Track vendor-held material; reconcile partial returns; identify customer orders exposed to delays.",
  "better": "You can see stock held at each workshop, and late work, in one place.",
  "friction": "Once material is outside the factory, it becomes unclear how much is where, and what that means for customer deliveries.",
  "causes": [
   "Unclear who owns the scrap",
   "Converting kg to pieces",
   "Material returned in parts",
   "Material lost in processing"
  ],
  "inputs": "Records of what was sent and returned, the units used, and your rules for expected processing loss.",
  "tools": [
   "Delivery challans and spreadsheets",
   "Phone calls to the workshop",
   "ERP (main business software) outside-work module"
  ],
  "alternative": "Configure subcontract stock, ownership and loss rules",
  "boundary": "Conversions and permitted losses are process-specific.",
  "metric": "How much work is late, how much material cannot be accounted for, and how much time the coordinator spends chasing.",
  "questions": [
   "How do we track material sent out, part returns and loss in processing?",
   "Who owns the material, and any scrap, while it is at the workshop?",
   "Which outside job is putting a customer delivery at risk?"
  ],
  "question": "For each load sent out, can we match what went out, what came back, what was used up and what is still there?",
  "steps": [
   "Send material and instructions",
   "Confirm the workshop received it",
   "Track the work",
   "Arrange the return",
   "Inspect what comes back",
   "Match rejects, losses, scrap and the balance left",
   "Approve the workshop's bill"
  ]
 },
 {
  "n": 15,
  "phase": 3,
  "flow": "physical",
  "title": "Breakdowns and maintenance",
  "people": "Operator, fitter, electrician, maintenance planner, machine maker",
  "today": "The repair history is in one technician's head. The manual may be in a different folder.",
  "help": "AI can find the right manual and past repairs for the machine. It can also draft a fault report with the machine number.",
  "workflow": "Structure fault intake; retrieve source-linked manuals and repairs; track tested handback separately from repair completion.",
  "better": "Less time spent piecing together what happened last time.",
  "friction": "Knowledge of faults sits with one technician. Spares listed under different names and the wrong manual slow the repair.",
  "causes": [
   "Wrong machine model",
   "Spare part missing",
   "Same fault again",
   "Poor repair records"
  ],
  "inputs": "The machine number, its alarms, manuals, and past repair and spare-part records.",
  "tools": [
   "Machine manuals",
   "Breakdown register",
   "CMMS (maintenance software) or maintenance app"
  ],
  "alternative": "Improve preventive maintenance, spares and repair capture",
  "boundary": "Predictive maintenance needs reliable histories and sensors.",
  "metric": "Time to find the cause and repair, how often the same fault comes back, and delays waiting for spares.",
  "questions": [
   "Which machines matter most for our deliveries?",
   "Where do we keep fault details, past repairs and spare-part records?",
   "How do we tell a fault that keeps showing up from one whose cause we have proved?"
  ],
  "question": "Which machine is most critical, and what facts support the cause we found and the decision to restart?",
  "steps": [
   "Report what is going wrong",
   "Make the machine safe to work on",
   "Find the cause, using past repairs and the manual",
   "Find the spare part",
   "Repair the machine",
   "Test it and get production to accept it",
   "Close the job"
  ]
 },
 {
  "n": 16,
  "phase": 3,
  "flow": "physical",
  "title": "Electricity, air and water",
  "people": "Utility operator, maintenance team, energy manager",
  "today": "A compressor or chiller can waste power and water, and it never shows up in the production report.",
  "help": "AI can flag unusual readings. It can help compare usage across similar products and similar running conditions.",
  "workflow": "Compare energy per good unit with product-mix context; flag unusual idle use; verify repairs against measurements.",
  "better": "The team gets a measured problem to investigate, not a guess.",
  "friction": "Usage outside shift hours and faults in the electricity, air and water systems never appear in production reports.",
  "causes": [
   "Leaks",
   "Machines running idle",
   "Change in product mix",
   "No meters installed"
  ],
  "inputs": "Meter readings, output, product mix, shift timings and repair logs.",
  "tools": [
   "Meter logbooks",
   "Electricity and water bills",
   "SCADA (plant monitoring system) with stored readings"
  ],
  "alternative": "Meter appropriately and inspect/repair the physical system",
  "boundary": "Metering and physical repairs remain necessary.",
  "metric": "Energy used per good piece, time lost to electricity, air or water problems, and savings that have been checked.",
  "questions": [
   "Can we compare electricity, air and water use with good output?",
   "What happens to usage during idle time, changeovers and breakdowns?",
   "Which readings do we have, and are they taken often enough to spot a loss?"
  ],
  "question": "Is the extra usage due to more output, how the machines were running, or a fault in the system itself?",
  "steps": [
   "Run compressors, boilers, chillers and pumps",
   "Note down meter readings",
   "Check for leaks",
   "Treat the water",
   "Manage backup power",
   "Look into unusual usage"
  ]
 },
 {
  "n": 17,
  "phase": 4,
  "flow": "physical",
  "title": "Scrap and rework",
  "people": "Production, quality, stores, accounts",
  "today": "We count the rejected pieces. But nobody adds up the extra hours, the repeat work or what the scrap could sell for.",
  "help": "AI can check material in against good output, and add rework costs back to the job that caused them.",
  "workflow": "Reconcile input, output, WIP and loss; assign rework costs; match scrap approval, gate weight, bill and payment.",
  "better": "You see what a rejection really cost you.",
  "friction": "The extra machine time and material get hidden inside the cost of the original job.",
  "causes": [
   "Material in and out don't match",
   "Rework hidden in job cost",
   "Sellable scrap not recorded"
  ],
  "inputs": "Material in and out, scrap weights, time spent on rework, and scrap sale records.",
  "tools": [
   "Scrap weight slips",
   "Rework spreadsheet",
   "ERP (main business software) stock and cost records"
  ],
  "alternative": "Agree units, process-loss allowances and disposition ownership",
  "boundary": "Account for moisture, evaporation and unit conversions.",
  "metric": "How much good output you get from the material, what rework costs, and how much material goes missing with no explanation.",
  "questions": [
   "Where do we record scrap, rework and material we can recover?",
   "Can we trace a rejected quantity back to its job and its process step?",
   "Do we count extra labour, power and scrap sale value in the job cost?"
  ],
  "question": "Of all the material we put in, how much became good product, half-finished work, sellable scrap or real loss?",
  "steps": [
   "Keep rejected material separate",
   "Weigh or count it",
   "Sort it: rework, reuse or scrap",
   "Get approval to rework or throw away",
   "Record what can be recovered",
   "Sell the scrap or reuse it",
   "Check the money and quantities add up"
  ]
 },
 {
  "n": 18,
  "phase": 4,
  "flow": "physical",
  "title": "Ready to dispatch?",
  "people": "Quality, production, sales, dispatch",
  "today": "Production says the order is finished. But a test, an accessory or an approval may still be missing.",
  "help": "AI can check each order's requirements across all teams, and prepare documents from approved test results.",
  "workflow": "Check order prerequisites across teams; assemble certificates from approved results; flag missing kits and quantities.",
  "better": "You quickly find what is holding up the shipment.",
  "friction": "Finished goods can still sit waiting for a test, an accessory, a document or a go-ahead from sales or accounts.",
  "causes": [
   "Inspection only partly done",
   "Accessories or parts missing",
   "Document missing",
   "Held for payment or sales reasons"
  ],
  "inputs": "The order checklist, dispatch approvals, test results and payment status.",
  "tools": [
   "Quality checklist for approving dispatch",
   "Certificate PDFs",
   "ERP (main business software) hold and approve screens"
  ],
  "alternative": "Configure explicit release and dispatch prerequisites",
  "boundary": "Only authorised staff approve product release.",
  "metric": "How long goods wait between finishing and leaving the factory, and how long each hold-up has been open.",
  "questions": [
   "What has to be true before finished goods can be dispatched?",
   "Who approves sending part of an order, and how do we keep the held goods separate?",
   "Show me the last finished order that could not leave. What stopped it?"
  ],
  "question": "Which exact quantities have passed every check needed before dispatch?",
  "steps": [
   "Finish all tests",
   "Sort out anything that didn't meet the spec",
   "Get the approvals",
   "Prepare the test certificates",
   "Approve the goods for dispatch",
   "Check the full order is there",
   "Give the go-ahead to pack"
  ]
 },
 {
  "n": 19,
  "phase": 4,
  "flow": "physical",
  "title": "Packing and transport",
  "people": "Packers, dispatch clerk, transporter, security",
  "today": "The goods are ready. Then the label format changes, the crates run out or a different truck turns up.",
  "help": "AI can check the packing instructions and gather the labels, photos and dispatch documents in one place.",
  "workflow": "Check customer packing rules; assemble photo/seal/document packet; track pickup, damage and refusal exceptions.",
  "better": "Less last-minute hunting for documents.",
  "friction": "Old label formats, missing crates and last-minute vehicle changes hold up goods that are ready to go.",
  "causes": [
   "Label format changed",
   "Not enough crates",
   "Vehicle changed",
   "Quantity doesn't match documents"
  ],
  "inputs": "Customer packing instructions, labels, packing lists and vehicle records.",
  "tools": [
   "Packing list in Excel",
   "Label printing software",
   "Transporter's website"
  ],
  "alternative": "Customer packing rules, count verification and transport coordination",
  "boundary": "Confirm physical pack count and shipment identity.",
  "metric": "How many dispatch mistakes, how long loading is delayed, and how many damage or loss claims come in.",
  "questions": [
   "Where do we keep each customer's packing, label and transport rules?",
   "Who checks that the packs on the truck match the documents?",
   "What happens when the vehicle, the quantity or the packing instruction changes?"
  ],
  "question": "Is the approved quantity packed correctly, and is it cleared to ship?",
  "steps": [
   "Find the customer's packing instructions",
   "Get the packing material",
   "Label, then count or weigh the packs",
   "Make the packing list",
   "Book the vehicle",
   "Check the loading order and documents, then load",
   "Record when the vehicle leaves"
  ]
 },
 {
  "n": 20,
  "phase": 4,
  "flow": "money",
  "title": "Invoices and getting paid",
  "people": "Accounts team, sales, dispatch, customer's accounts team",
  "today": "Another payment reminder won't help if the customer rejected the invoice or has no proof of delivery.",
  "help": "AI can find what the dispute is about, pull together the supporting papers and draft the next follow-up.",
  "workflow": "Check submission packet; classify quantity/quality/price/POD disputes; prepare next action with evidence and owner.",
  "better": "Accounts gets a specific problem to fix, not just a chase list.",
  "friction": "Reminders miss the real problem: the customer hasn't accepted the invoice, or a document is missing.",
  "causes": [
   "Invoice not accepted",
   "No proof of delivery",
   "Money held back for price or quality",
   "Long payment terms"
  ],
  "inputs": "Invoices, proof of delivery, status on the customer's website, disputes and payments received.",
  "tools": [
   "Tally or other accounting software",
   "Customer's supplier website",
   "Email and bank statements"
  ],
  "alternative": "Correct submission, reconcile receipts and assign dispute authority",
  "boundary": "Humans approve settlement, credits and payment changes.",
  "metric": "How long customers take to accept invoices, how long disputes stay open, and how much money is overdue.",
  "questions": [
   "Is this invoice accepted, overdue or disputed?",
   "What documents does the customer need before they accept it?",
   "Who is responsible for the next step when money is held back or delivery proof is missing?"
  ],
  "question": "Has the customer accepted this amount and is it due, or is a specific dispute blocking it?",
  "steps": [
   "Confirm the goods were delivered",
   "Get proof of delivery",
   "Upload the documents the customer needs",
   "Send the invoice",
   "Sort out any rejected invoice",
   "Match payments and amounts held back",
   "Collect what is still owed"
  ]
 },
 {
  "n": 21,
  "phase": 5,
  "flow": "physical",
  "title": "Complaints and product history",
  "people": "Customer service, quality, production, engineering",
  "today": "A customer reports a defect. The team starts digging through production and dispatch records.",
  "help": "AI can collect the complaint details and trace the recorded batch or serial numbers through production and dispatch.",
  "workflow": "Assemble complaint case; trace potentially affected lots/customers; track actions through recurrence checks.",
  "better": "The investigation starts with the right history in hand.",
  "friction": "Complaint details are kept apart from the records of what went into each batch and where it was shipped.",
  "causes": [
   "Can't trace batches to customers",
   "Not enough evidence",
   "Bad parts not stopped in time"
  ],
  "inputs": "Batch and serial number records, inspection results, dispatch records and complaints.",
  "tools": [
   "Complaints kept in email",
   "8D report form (standard problem-solving report)",
   "Quality software that tracks batches"
  ],
  "alternative": "Capture lot/serial links and corrective-action ownership",
  "boundary": "Missing genealogy cannot be reconstructed with certainty.",
  "metric": "How long it takes to trace a complaint, how long until it is closed, and how often the same complaint comes back.",
  "questions": [
   "Can we trace a complaint to the batches or serial numbers we supplied?",
   "Can we find other shipments that might have the same problem?",
   "Who checks that the fix worked and that the fault doesn't come back?"
  ],
  "question": "Can we trace the faulty product back to its materials and forward to every customer, without guessing?",
  "steps": [
   "Find which product and batch it is",
   "Collect photos, samples and details",
   "Stop more bad parts going out",
   "Trace the materials and process steps used",
   "Find the cause",
   "Agree a return, replacement or credit",
   "Check the fix worked"
  ]
 },
 {
  "n": 22,
  "phase": 5,
  "flow": "information",
  "title": "People and know-how",
  "people": "Supervisors, workers, HR, trainers",
  "today": "When the experienced person is on leave, small questions can stop the work.",
  "help": "AI can find the approved work instructions and draft explanations in the team's own language, for a supervisor to check.",
  "workflow": "Suggest qualified cover; explain approved instructions in local languages; draft instructions from expert demonstrations.",
  "better": "Know-how becomes easier to share and teach.",
  "friction": "Know-how leaves when experienced staff leave. Language and skill gaps slow the work.",
  "causes": [
   "Same data entered twice",
   "Language barriers and noisy floors",
   "Shared phones or computers",
   "Unclear reasons to record things"
  ],
  "inputs": "Who has which skills, approved work instructions, training records and shift data.",
  "tools": [
   "Attendance or HR software",
   "Skills chart in Excel",
   "Work instruction files and videos"
  ],
  "alternative": "Co-design capture and skill assessment with users",
  "boundary": "Assess process constraints before attributing worker fault.",
  "metric": "How long a new person takes to do the job well, how much time training takes, and where skills are missing.",
  "questions": [
   "Which jobs depend on just one experienced person?",
   "Do workers understand the instructions in their own language, on a noisy shop floor?",
   "How do we check skills, arrange cover and fix wrong records?"
  ],
  "question": "Who records it, who gains from it, and who can correct a mistake?",
  "steps": [
   "Plan the shifts",
   "Check who has the right skills, and cover for absent workers",
   "Train new joiners",
   "Explain the approved way to do each job",
   "Test whether people can do the job",
   "Record the training",
   "Fix attendance problems"
  ]
 },
 {
  "n": 23,
  "phase": 5,
  "flow": "information",
  "title": "Safety records and audits",
  "people": "Safety team, quality, maintenance, lab, approvers",
  "today": "An audit is coming up. Certificates and action updates are scattered across different folders.",
  "help": "AI can find the records and flag expired documents, missing signatures and overdue actions.",
  "workflow": "Retrieve source records; track findings and escalation; flag absent signatures, date conflicts and expired documents.",
  "better": "Less searching before an audit.",
  "friction": "Expired certificates and unfinished actions only come to light during the audit.",
  "causes": [
   "Certificates out of date",
   "Unclear who approves risky work",
   "Actions closed without checking"
  ],
  "inputs": "Approved rules, work permissions, logs and certificates.",
  "tools": [
   "Register of work permissions and audits",
   "Certificates in folders",
   "Safety or quality software"
  ],
  "alternative": "Fix permit, inspection and action-control procedures",
  "boundary": "Qualified people own safety and statutory decisions.",
  "metric": "How long it takes to gather audit papers, how many actions are overdue, and how often the same audit issues come back.",
  "questions": [
   "Which inspections, work permissions and certificates do we legally need?",
   "Who goes and checks on the floor that an audit action is really done?",
   "How do we find expired records, missing signatures and overdue actions?"
  ],
  "question": "Which trained person can approve this, and what on-site check is needed?",
  "steps": [
   "Do safety inspections",
   "Record accidents and near misses",
   "Issue written permission for risky work",
   "Collect test reports and certificates",
   "Give each action an owner",
   "Get ready for the audit",
   "Check each action is really done"
  ]
 },
 {
  "n": 24,
  "phase": 5,
  "flow": "information",
  "title": "Job costs and improvements",
  "people": "Owner, accounts, plant head, engineering, purchase",
  "today": "The month made money. But it is hard to say which jobs lost money, and why.",
  "help": "AI can bring actual job costs together and flag the gaps between plan and actual that are worth looking into.",
  "workflow": "Investigate job margin; track baseline/intervention/result; compare equipment utilities, tooling, service and acceptance terms.",
  "better": "You choose improvements based on costs you can explain.",
  "friction": "You can see losses in the overall total, but it is hard to trace them to rework, freight or costs left out of the quote.",
  "causes": [
   "Wrong starting figures",
   "Same gain counted twice",
   "Product mix changed",
   "Hidden support costs"
  ],
  "inputs": "Actual job costs, 'before' figures and quotes for new machines.",
  "tools": [
   "Job costing in Excel",
   "Accounting software",
   "Sheet comparing machine quotes"
  ],
  "alternative": "Reconcile actual costs and maintain a benefit register",
  "boundary": "Measure realised results; do not promise unsupported ROI.",
  "metric": "Profit on each job, gains you have measured and checked, and how long it takes to sign off a new machine.",
  "questions": [
   "Can we explain the actual profit for each job or product group?",
   "What else changed, apart from the improvement we made?",
   "Who checks the full cost, and that we are not counting the same gain twice?"
  ],
  "question": "After counting every extra cost, did the change really make the business better?",
  "steps": [
   "Close each finished job",
   "Check actual costs against plan, and explain the gaps",
   "Find where work gets stuck",
   "Compare quotes for new machines",
   "Install and start up the machine",
   "Get it running properly",
   "Check that the promised gains really happened"
  ]
 }
];
