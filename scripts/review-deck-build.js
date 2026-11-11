const pptxgen = require("pptxgenjs");

async function main() {
const C = {
  orange:    "E65C00",
  navy:      "0F172A",
  navyMid:   "1E293B",
  navyLight: "334155",
  white:     "FFFFFF",
  offWhite:  "F8F9FA",
  gray:      "64748B",
  grayLight: "CBD5E1",
  green:     "10B981",
  amber:     "F59E0B",
};

const makeShadow = () => ({ type: "outer", color: "000000", blur: 8, offset: 3, angle: 45, opacity: 0.14 });
const cardShadow = () => ({ type: "outer", color: "000000", blur: 6, offset: 2, angle: 45, opacity: 0.10 });

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Fandi Yulistian";
pres.title = "4-Month Performance Review — BNI Sitecore 2026";

// ── SLIDE 1: COVER ──────────────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.navy };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:0.18,h:5.625, fill:{color:C.orange},line:{color:C.orange} });
  sl.addShape(pres.shapes.OVAL, { x:7.8,y:-0.8,w:3.5,h:3.5, fill:{color:C.orange,transparency:90},line:{color:C.orange,transparency:70,width:1} });
  sl.addShape(pres.shapes.OVAL, { x:8.5,y:2.8,w:2.0,h:2.0, fill:{color:C.orange,transparency:94},line:{color:C.orange,transparency:80,width:1} });
  sl.addText("4-Month Performance Review", { x:0.45,y:0.7,w:9.1,h:1.1, fontSize:38,bold:true,color:C.white,fontFace:"Calibri",align:"left",margin:0 });
  sl.addShape(pres.shapes.RECTANGLE, { x:0.45,y:1.88,w:4.2,h:0.045, fill:{color:C.orange},line:{color:C.orange} });
  sl.addText("BNI 20: Website Company Sitecore – 2026", { x:0.45,y:1.98,w:8.5,h:0.55, fontSize:18,color:"CBD5E1",fontFace:"Calibri",align:"left",margin:0 });
  sl.addText("Fandi Yulistian  |  Backend Engineer, Aleph Labs", { x:0.45,y:2.72,w:7,h:0.45, fontSize:14,color:C.orange,fontFace:"Calibri",bold:true,align:"left",margin:0 });
  sl.addText("Review Period: March – June 2026", { x:0.45,y:3.22,w:5,h:0.38, fontSize:13,color:C.gray,fontFace:"Calibri",align:"left",margin:0 });
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.45,y:4.7,w:2.4,h:0.45, fill:{color:C.orange},line:{color:C.orange},rectRadius:0.08 });
  sl.addText("Aleph Labs  ·  2026", { x:0.45,y:4.7,w:2.4,h:0.45, fontSize:11,color:C.white,bold:true,fontFace:"Calibri",align:"center",margin:0 });
  sl.addNotes("Welcome and thank you for this opportunity. This deck covers my 4-month contributions to the BNI 20 Sitecore project from March through June 2026. I'll walk through key achievements, challenges navigated, skills gained, and what I'm focused on next.");
}

// ── SLIDE 2: TIMELINE ───────────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.offWhite };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.navy},line:{color:C.navy} });
  sl.addText("4-Month Journey at a Glance", { x:0.4,y:0,w:9.2,h:0.72, fontSize:22,bold:true,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  const railY = 2.5;
  sl.addShape(pres.shapes.RECTANGLE, { x:0.6,y:railY+0.08,w:8.8,h:0.06, fill:{color:C.orange},line:{color:C.orange} });
  const milestones = [
    { x:0.6,  label:"March – April", title:"Onboarding",   desc:"BNI codebase study\nHelix architecture\nDev environment prep" },
    { x:3.05, label:"April – May",   title:"Environment",  desc:"Sitecore XM 10.4.1\nCM+CD+IS+SQL+Solr\n9 blockers resolved" },
    { x:5.5,  label:"May",           title:"Integration",  desc:"SAML/ADSS SSO\nSitecore CLI 5.2.113\nMerged to main" },
    { x:7.95, label:"May – June",    title:"Components",   desc:"Scriban variants\nBNI Header (7 variants)\nSearch, 404, Locator" },
  ];
  milestones.forEach(m => {
    sl.addShape(pres.shapes.OVAL, { x:m.x,y:railY,w:0.22,h:0.22, fill:{color:C.orange},line:{color:C.orange} });
    sl.addText(m.label, { x:m.x-0.5,y:railY-0.55,w:1.22,h:0.38, fontSize:10,color:C.gray,fontFace:"Calibri",align:"center",margin:0 });
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:m.x-0.48,y:railY+0.42,w:1.92,h:1.55, fill:{color:C.white},line:{color:"E2E8F0",width:1},shadow:cardShadow(),rectRadius:0.08 });
    sl.addText(m.title, { x:m.x-0.44,y:railY+0.52,w:1.84,h:0.32, fontSize:13,bold:true,color:C.orange,fontFace:"Calibri",align:"center",margin:0 });
    sl.addText(m.desc, { x:m.x-0.44,y:railY+0.86,w:1.84,h:1.0, fontSize:10,color:C.navyMid,fontFace:"Calibri",align:"center",margin:0 });
  });
  sl.addNotes("This timeline shows how the 4 months unfolded. Each phase built on the previous — environment stability unlocked integration work, which in turn enabled full component development to begin.");
}

// ── SLIDE 3: ACHIEVEMENT 1 ──────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.navy };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.orange},line:{color:C.orange} });
  sl.addText("Key Achievement  1 of 3", { x:0.4,y:0,w:9.2,h:0.72, fontSize:12,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  sl.addText("Sitecore XM 10.4.1 — Full Environment Setup", { x:0.4,y:0.85,w:9.2,h:0.82, fontSize:26,bold:true,color:C.white,fontFace:"Calibri",align:"left",margin:0 });
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.4,y:1.72,w:2.1,h:0.32, fill:{color:C.green,transparency:20},line:{color:C.green},rectRadius:0.06 });
  sl.addText("✅  Done — May 25, 2026", { x:0.4,y:1.72,w:2.1,h:0.32, fontSize:10,color:C.green,bold:true,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });

  const statCards = [
    { stat:"9",   sub:"Blockers\nResolved",     col:C.orange },
    { stat:"11",  sub:"Solr Cores\nPopulated",  col:"0EA5E9" },
    { stat:"5+",  sub:"Services\nOperational",  col:C.green  },
  ];
  statCards.forEach((c,i) => {
    const cx = 0.4 + i*2.05;
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:cx,y:2.15,w:1.85,h:1.38, fill:{color:C.navyMid},line:{color:C.navyLight},rectRadius:0.1,shadow:makeShadow() });
    sl.addText(c.stat, { x:cx,y:2.22,w:1.85,h:0.72, fontSize:42,bold:true,color:c.col,fontFace:"Calibri",align:"center",margin:0 });
    sl.addText(c.sub, { x:cx,y:2.94,w:1.85,h:0.5, fontSize:11,color:"94A3B8",fontFace:"Calibri",align:"center",margin:0 });
  });
  sl.addText("Selected Blockers Resolved:", { x:0.4,y:3.72,w:4.5,h:0.3, fontSize:12,bold:true,color:C.orange,fontFace:"Calibri",align:"left",margin:0 });
  const blockers = [
    { text:"SQL LocalDB → full SQL Server 2022 Dev (TCP/IP + mixed auth)", options:{bullet:true,breakLine:true,paraSpaceAfter:3} },
    { text:"IIS-StaticContent missing → CSS/JS served without Content-Type", options:{bullet:true,breakLine:true,paraSpaceAfter:3} },
    { text:"Sitecore CLI plugins 6.0.23 → downgraded to 5.2.113 (OnPrem)", options:{bullet:true,breakLine:true,paraSpaceAfter:3} },
    { text:"Workflow Draft state blocked publish → approve + republish fix", options:{bullet:true,paraSpaceAfter:3} },
  ];
  sl.addText(blockers, { x:0.4,y:4.05,w:5.6,h:1.1, fontSize:11,color:"CBD5E1",fontFace:"Calibri",align:"left",margin:0 });
  const stack = ["CM  (cm.bni.local)","CD  (cd.bni.local)","Identity Server  (id.bni.local)","SQL Server 2022 Dev","Solr 9.8.1  (11 cores)"];
  stack.forEach((s,i) => {
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:6.55,y:2.1+i*0.62,w:3.05,h:0.5, fill:{color:i===0?C.orange:C.navyMid},line:{color:i===0?C.orange:C.navyLight},rectRadius:0.07 });
    sl.addText(s, { x:6.55,y:2.1+i*0.62,w:3.05,h:0.5, fontSize:11,color:i===0?C.white:"94A3B8",bold:i===0,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
  });
  sl.addText("Full Stack Operational", { x:6.55,y:5.22,w:3.05,h:0.28, fontSize:10,color:C.green,fontFace:"Calibri",align:"center",bold:true,margin:0 });
  sl.addNotes("Setting up from scratch on a new Windows laptop was the first major challenge. Every blocker was documented with its root cause and resolution in CLAUDE.md — this now serves as a reusable install guide. Getting all 11 Solr cores populated was the final milestone before moving to integration work.");
}

// ── SLIDE 4: ACHIEVEMENT 2 ──────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.offWhite };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.navy},line:{color:C.navy} });
  sl.addText("Key Achievement  2 of 3", { x:0.4,y:0,w:9.2,h:0.72, fontSize:12,color:"94A3B8",fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  sl.addText("SAML / ADSS Integration — Audit Trail Log", { x:0.4,y:0.85,w:9.2,h:0.72, fontSize:24,bold:true,color:C.navy,fontFace:"Calibri",align:"left",margin:0 });
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.4,y:1.64,w:2.2,h:0.32, fill:{color:"D1FAE5"},line:{color:C.green},rectRadius:0.06 });
  sl.addText("✅  Merged to main — May 21, 2026", { x:0.4,y:1.64,w:2.2,h:0.32, fontSize:10,color:C.green,bold:true,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });

  // Left card — My Contribution
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:2.1,w:4.5,h:2.98, fill:{color:C.white},line:{color:"E2E8F0",width:1},shadow:cardShadow(),rectRadius:0.1 });
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:2.1,w:4.5,h:0.38, fill:{color:C.orange,transparency:88},line:{color:C.orange,width:0.5},rectRadius:0.1 });
  sl.addText("My Contribution", { x:0.35,y:2.1,w:4.5,h:0.38, fontSize:12,bold:true,color:C.orange,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
  sl.addText("📋", { x:0.35,y:2.56,w:4.5,h:0.5, fontSize:26,fontFace:"Calibri",align:"center",margin:0 });
  sl.addText("Audit Trail Log", { x:0.5,y:3.1,w:4.2,h:0.38, fontSize:16,bold:true,color:C.navyMid,fontFace:"Calibri",align:"center",margin:0 });
  const myItems = [
    {text:"Designed and built AuditTrailLog module",options:{bullet:true,breakLine:true,paraSpaceAfter:4}},
    {text:"Tracks SAML auth events for compliance",options:{bullet:true,breakLine:true,paraSpaceAfter:4}},
    {text:"Merged to main — May 21, 2026",options:{bullet:true,paraSpaceAfter:4}},
  ];
  sl.addText(myItems, { x:0.5,y:3.52,w:4.2,h:1.38, fontSize:11,color:C.gray,fontFace:"Calibri",align:"left",margin:0 });

  // Right card — Team Contribution
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:5.15,y:2.1,w:4.5,h:2.98, fill:{color:C.white},line:{color:"E2E8F0",width:1},shadow:cardShadow(),rectRadius:0.1 });
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:5.15,y:2.1,w:4.5,h:0.38, fill:{color:"8B5CF6",transparency:88},line:{color:"8B5CF6",width:0.5},rectRadius:0.1 });
  sl.addText("Team Contribution", { x:5.15,y:2.1,w:4.5,h:0.38, fontSize:12,bold:true,color:"8B5CF6",fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
  sl.addText("🤝", { x:5.15,y:2.56,w:4.5,h:0.5, fontSize:26,fontFace:"Calibri",align:"center",margin:0 });
  sl.addText("Full SAML/ADSS Integration", { x:5.3,y:3.1,w:4.2,h:0.38, fontSize:14,bold:true,color:C.navyMid,fontFace:"Calibri",align:"center",margin:0 });
  const teamItems = [
    {text:"SamlSettings.cs — attribute mapping fix",options:{bullet:true,breakLine:true,paraSpaceAfter:4}},
    {text:"SamlClaimsTransformer.cs — DN logic",options:{bullet:true,breakLine:true,paraSpaceAfter:4}},
    {text:"Full SSO flow operational end-to-end",options:{bullet:true,paraSpaceAfter:4}},
  ];
  sl.addText(teamItems, { x:5.3,y:3.52,w:4.2,h:1.38, fontSize:11,color:C.gray,fontFace:"Calibri",align:"left",margin:0 });

  sl.addText("IdP: ManageEngine ADSelfService Plus  ·  admplusdev.bni.co.id  →  Sitecore Identity Server", { x:0.4,y:5.24,w:9.2,h:0.28, fontSize:10,color:C.gray,fontFace:"Calibri",align:"center",italic:true,margin:0 });
  sl.addNotes("My specific contribution to the SAML integration was designing and building the AuditTrailLog module — which tracks authentication events for compliance and debugging purposes. The full SAML/ADSS integration (SamlSettings.cs and SamlClaimsTransformer.cs) was delivered by my teammate. It's a good example of how the team collaborated — each person owning a distinct piece of a larger deliverable.");
}

// ── SLIDE 5: ACHIEVEMENT 3 ──────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.navy };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.orange},line:{color:C.orange} });
  sl.addText("Key Achievement  3 of 3", { x:0.4,y:0,w:9.2,h:0.72, fontSize:12,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  sl.addText("Scriban & Page Component Development", { x:0.4,y:0.82,w:9.2,h:0.66, fontSize:26,bold:true,color:C.white,fontFace:"Calibri",align:"left",margin:0 });

  // Status badges row
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.4,y:1.54,w:1.55,h:0.28, fill:{color:C.amber,transparency:20},line:{color:C.amber},rectRadius:0.06 });
  sl.addText("🔄  In Progress", { x:0.4,y:1.54,w:1.55,h:0.28, fontSize:10,color:C.amber,bold:true,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
  sl.addText("18 work topics  ·  15 active Scriban days  ·  source: activity/ folder", { x:2.1,y:1.54,w:7.5,h:0.28, fontSize:10,color:C.gray,fontFace:"Calibri",align:"left",valign:"middle",italic:true,margin:0 });

  // ── 3 phase columns ──────────────────────────────────────────
  const phases = [
    {
      title:"Apr — Page Integration",
      col:"8B5CF6",
      items:[
        "news-detail",
        "news-info",
        "investor-saham",
        "investor-presentasi",
        "keberlanjutan-sdm",
        "futures-page",
        "transactional-page",
        "workflows",
      ]
    },
    {
      title:"May — Infra + Integration",
      col:C.amber,
      items:[
        "INSTALL (Sitecore XM 10.4.1)",
        "ldap (SAML/Audit Trail)",
        "layout-custom-placeholders",
        "support-migration",
        "breadcrumb",
        "component",
      ]
    },
    {
      title:"May–Jun — Scriban Variants",
      col:C.orange,
      items:[
        "cc-detail (v1→v2)",
        "cc-landing (v1→v2)",
        "credit-card-landing",
        "location (Search + Bucketing)",
        "scriban (recurring patterns)",
        "img / debug work",
      ]
    },
  ];

  phases.forEach((p,i) => {
    const cx = 0.35 + i*3.2;
    // Column header
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:cx,y:1.96,w:3.0,h:0.38, fill:{color:p.col,transparency:80},line:{color:p.col,width:1},rectRadius:0.07 });
    sl.addText(p.title, { x:cx,y:1.96,w:3.0,h:0.38, fontSize:11,bold:true,color:p.col,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
    // Column card
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:cx,y:2.4,w:3.0,h:2.88, fill:{color:C.navyMid},line:{color:p.col,width:0.8},rectRadius:0.08 });
    const pills = p.items.map((item,j) => ({
      text:item,
      options:{ bullet:true, breakLine: j < p.items.length-1, paraSpaceAfter:4 }
    }));
    sl.addText(pills, { x:cx+0.14,y:2.5,w:2.72,h:2.68, fontSize:10.5,color:"CBD5E1",fontFace:"Calibri",align:"left",margin:0 });
  });

  // Bottom pattern bar
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:5.36,w:9.3,h:0.2, fill:{color:C.navyMid},line:{color:C.navyLight},rectRadius:0.05 });
  sl.addText("Patterns: 3-way General Link resolution  ·  Scriban null-guard  ·  Inline debug panel  ·  GlobalWrapper.cshtml shared view  ·  6 SXA placeholders", {
    x:0.35,y:5.36,w:9.3,h:0.2, fontSize:9,color:C.gray,fontFace:"Calibri",align:"center",valign:"middle",italic:true,margin:0
  });

  sl.addNotes("The activity folder data shows the full breadth — April was greenfield page integration (news, investor, keberlanjutan, futures), May was environment rebuild and SAML, and May-June shifted to Scriban rendering-variant migrations. All Scriban variants use the shared GlobalWrapper.cshtml rendering view (established 2026-06-10) — no per-component .cshtml needed unless Razor logic is required. 18 genuine work topics across 15 active Scriban days.");
}

// ── SLIDE 6: ARCHITECTURE ───────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.offWhite };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.navy},line:{color:C.navy} });
  sl.addText("BNI Site Architecture Contributions", { x:0.4,y:0,w:9.2,h:0.72, fontSize:22,bold:true,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });

  const layers = [
    { label:"Project Layer",    col:C.orange, items:"BNI site config  ·  Page designs  ·  Rendering registrations" },
    { label:"Feature Layer",    col:"0EA5E9", items:"Navigation module  ·  Search module  ·  Header components  ·  Scriban variant scripts" },
    { label:"Foundation Layer", col:"8B5CF6", items:"Base templates  ·  GlobalWrapper.cshtml (shared view)  ·  SXA extensions" },
  ];
  layers.forEach((l,i) => {
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.4,y:0.9+i*1.42,w:4.2,h:1.22, fill:{color:l.col,transparency:88},line:{color:l.col,width:1.5},rectRadius:0.08 });
    sl.addText(l.label, { x:0.55,y:0.94+i*1.42,w:3.9,h:0.32, fontSize:13,bold:true,color:l.col,fontFace:"Calibri",align:"left",margin:0 });
    sl.addText(l.items, { x:0.55,y:1.28+i*1.42,w:3.9,h:0.72, fontSize:11,color:C.navyMid,fontFace:"Calibri",align:"left",margin:0 });
  });

  const stats = [
    { n:"6",  label:"SXA Placeholders\nWired & Verified", col:C.orange },
    { n:"9",  label:"Locator Template\nFields (6 types)",  col:"0EA5E9" },
    { n:"3",  label:"Files Merged\nto Main",               col:C.green  },
  ];
  stats.forEach((r,i) => {
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:5.1+i*1.6,y:0.9,w:1.42,h:1.22, fill:{color:C.white},line:{color:"E2E8F0"},rectRadius:0.08,shadow:cardShadow() });
    sl.addText(r.n, { x:5.1+i*1.6,y:0.96,w:1.42,h:0.58, fontSize:34,bold:true,color:r.col,fontFace:"Calibri",align:"center",margin:0 });
    sl.addText(r.label, { x:5.1+i*1.6,y:1.55,w:1.42,h:0.52, fontSize:10,color:C.gray,fontFace:"Calibri",align:"center",margin:0 });
  });

  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:5.1,y:2.32,w:4.5,h:1.8, fill:{color:C.navyMid},line:{color:C.navyLight},rectRadius:0.1 });
  sl.addText("Sitecore CLI Serialization Workflow", { x:5.25,y:2.4,w:4.2,h:0.34, fontSize:12,bold:true,color:C.orange,fontFace:"Calibri",align:"left",margin:0 });
  const cliItems = [
    {text:"scs-push  →  sync repo .yaml to CM",options:{bullet:true,breakLine:true,paraSpaceAfter:3}},
    {text:"scs-sync  →  pull CM changes to repo",options:{bullet:true,breakLine:true,paraSpaceAfter:3}},
    {text:"Login: --allow-write true -k (self-signed cert)",options:{bullet:true,breakLine:true,paraSpaceAfter:3}},
    {text:"CLI 5.2.113 + .NET 6.0.36 coexisting with .NET 8",options:{bullet:true,paraSpaceAfter:3}},
  ];
  sl.addText(cliItems, { x:5.25,y:2.8,w:4.2,h:1.2, fontSize:11,color:"94A3B8",fontFace:"Calibri",align:"left",margin:0 });
  sl.addText("CLAUDE.md context  ·  dev-tracker journal  ·  5 Claude Code agents  ·  5 slash commands", { x:0.4,y:5.22,w:9.2,h:0.3, fontSize:10,color:C.gray,fontFace:"Calibri",align:"center",italic:true,margin:0 });
  sl.addNotes("Beyond features, I contributed to the overall BNI architecture by establishing and following Helix conventions. The Sitecore CLI workflow is fully operational — all templates are version-controlled. I also built a developer productivity system using CLAUDE.md and Claude Code agents to maintain consistency across sessions.");
}

// ── SLIDE 7: CHALLENGES & SOLUTIONS ─────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.offWhite };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.navy},line:{color:C.navy} });
  sl.addText("Challenges & Solutions", { x:0.4,y:0,w:9.2,h:0.72, fontSize:22,bold:true,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });

  const hdr = [
    {text:"Challenge",  options:{fill:{color:C.navyMid},color:C.white,bold:true,fontSize:12,fontFace:"Calibri",align:"left"}},
    {text:"Root Cause", options:{fill:{color:C.navyMid},color:C.white,bold:true,fontSize:12,fontFace:"Calibri",align:"left"}},
    {text:"Solution",   options:{fill:{color:C.navyMid},color:C.white,bold:true,fontSize:12,fontFace:"Calibri",align:"left"}},
    {text:"Outcome",    options:{fill:{color:C.navyMid},color:C.white,bold:true,fontSize:12,fontFace:"Calibri",align:"left"}},
  ];
  const rows = [
    [
      {text:"SQL LocalDB failure",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:C.white}}},
      {text:"LocalDB incompatible with XM",options:{fontSize:11,fontFace:"Calibri",color:C.gray,fill:{color:C.white}}},
      {text:"Full SQL Server 2022 Dev install",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:C.white}}},
      {text:"✅  Resolved",options:{fontSize:11,fontFace:"Calibri",color:C.green,fill:{color:"D1FAE5"},bold:true}},
    ],
    [
      {text:"IIS-StaticContent disabled",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:"F8FAFC"}}},
      {text:"Windows feature off by default",options:{fontSize:11,fontFace:"Calibri",color:C.gray,fill:{color:"F8FAFC"}}},
      {text:"Enable-WindowsOptionalFeature + reboot",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:"F8FAFC"}}},
      {text:"✅  Resolved",options:{fontSize:11,fontFace:"Calibri",color:C.green,fill:{color:"D1FAE5"},bold:true}},
    ],
    [
      {text:"CLI plugin version mismatch",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:C.white}}},
      {text:"Repo had XM Cloud plugins 6.0.23",options:{fontSize:11,fontFace:"Calibri",color:C.gray,fill:{color:C.white}}},
      {text:"Downgraded all 5 plugins to 5.2.113",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:C.white}}},
      {text:"✅  Resolved",options:{fontSize:11,fontFace:"Calibri",color:C.green,fill:{color:"D1FAE5"},bold:true}},
    ],
    [
      {text:"ADSS SAML non-standard attributes",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:"F8FAFC"}}},
      {text:"'username' not 'sAMAccountName'",options:{fontSize:11,fontFace:"Calibri",color:C.gray,fill:{color:"F8FAFC"}}},
      {text:"SamlSettings.cs + Transformer fix",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:"F8FAFC"}}},
      {text:"✅  Merged",options:{fontSize:11,fontFace:"Calibri",color:C.green,fill:{color:"D1FAE5"},bold:true}},
    ],
    [
      {text:"CD site returning 302",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:C.white}}},
      {text:"Items in Draft workflow state",options:{fontSize:11,fontFace:"Calibri",color:C.gray,fill:{color:C.white}}},
      {text:"Approve workflow then republish",options:{fontSize:11,fontFace:"Calibri",color:C.navyMid,fill:{color:C.white}}},
      {text:"✅  Resolved",options:{fontSize:11,fontFace:"Calibri",color:C.green,fill:{color:"D1FAE5"},bold:true}},
    ],
  ];
  sl.addTable([hdr,...rows], { x:0.4,y:0.88,w:9.2, rowH:0.74, colW:[2.2,2.4,2.9,1.7], border:{pt:0.5,color:"E2E8F0"} });
  sl.addNotes("Every blocker was approached methodically — diagnose root cause before applying a fix. Several were non-obvious and would have cost significant time without systematic debugging. All resolutions are documented in CLAUDE.md as institutional knowledge for future reference.");
}

// ── SLIDE 8: TECHNICAL DEPTH ────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.navy };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.navyMid},line:{color:C.navyMid} });
  sl.addText("Technical Depth — Systematic Problem Solving", { x:0.4,y:0,w:9.2,h:0.72, fontSize:18,bold:true,color:"94A3B8",fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  sl.addText("Sitecore CLI Plugin Version Mismatch", { x:0.4,y:0.85,w:9.2,h:0.6, fontSize:24,bold:true,color:C.white,fontFace:"Calibri",align:"left",margin:0 });

  const steps = [
    { num:"01",col:"F59E0B",title:"Discovery",  body:"scs-push failed\nsilently — no\nuseful error" },
    { num:"02",col:"EF4444",title:"Diagnosis",  body:"sitecore.json had\nplugins@6.0.23\n(XM Cloud ver.)" },
    { num:"03",col:"3B82F6",title:"Fix",        body:"Downgraded 5 plugins\nto @5.2.113\n+ .NET 6.0.36" },
    { num:"04",col:C.green, title:"Verified",   body:"sitecore login ✅\nscs-push ✅\nscs-sync ✅" },
  ];
  steps.forEach((s,i) => {
    const cx = 0.38 + i*2.35;
    if(i<3){ sl.addShape(pres.shapes.RECTANGLE, { x:cx+1.88,y:2.55,w:0.37,h:0.06, fill:{color:C.navyLight},line:{color:C.navyLight} }); }
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:cx,y:1.62,w:1.98,h:2.55, fill:{color:C.navyMid},line:{color:s.col,width:1.5},rectRadius:0.1 });
    sl.addShape(pres.shapes.OVAL, { x:cx+0.74,y:1.72,w:0.5,h:0.5, fill:{color:s.col},line:{color:s.col} });
    sl.addText(s.num, { x:cx+0.74,y:1.72,w:0.5,h:0.5, fontSize:14,bold:true,color:C.white,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
    sl.addText(s.title, { x:cx,y:2.3,w:1.98,h:0.38, fontSize:14,bold:true,color:s.col,fontFace:"Calibri",align:"center",margin:0 });
    sl.addText(s.body, { x:cx+0.1,y:2.74,w:1.78,h:1.28, fontSize:11,color:"CBD5E1",fontFace:"Calibri",align:"center",margin:0 });
  });
  sl.addText("Key Learning: XM OnPrem and XM Cloud use different CLI plugin versions — sitecore.json must be environment-aware.", { x:0.4,y:4.52,w:9.2,h:0.38, fontSize:11,color:C.orange,fontFace:"Calibri",align:"center",italic:true,margin:0 });
  sl.addText("This reproduce → isolate → verify pattern was applied consistently across all 9 environment blockers.", { x:0.4,y:4.95,w:9.2,h:0.3, fontSize:10,color:C.gray,fontFace:"Calibri",align:"center",margin:0 });
  sl.addNotes("This blocker illustrates the debugging methodology I applied throughout. The CLI would silently fail — requiring config tracing rather than log reading. Once identified, the fix was simple, but finding it required understanding the difference between XM Cloud and XM OnPrem toolchain requirements.");
}

// ── SLIDE 9: SKILL GROWTH ───────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.offWhite };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.navy},line:{color:C.navy} });
  sl.addText("Learning & Skill Growth", { x:0.4,y:0,w:9.2,h:0.72, fontSize:22,bold:true,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });

  const skillGroups = [
    { cat:"Platform",              col:C.orange, items:["Sitecore XM 10.4.1","SXA 10.4.0","Identity Server 8.0","Solr 9.8.1"] },
    { cat:"Language & Templating", col:"0EA5E9", items:["Scriban templating",".NET 8","PowerShell 5.1","SXA rendering patterns"] },
    { cat:"Integration",           col:"8B5CF6", items:["SAML 2.0 / SSO","ManageEngine ADSS","Sitecore CLI 5.2.113","SXA Search + Solr"] },
    { cat:"Architecture",          col:C.green,  items:["Helix conventions","SXA rendering variants","Placeholder system","YAML serialization"] },
    { cat:"Tooling & Process",     col:"EC4899", items:["Claude Code agents","dev-tracker workflow","Daily journal system","Prompt engineering"] },
  ];
  const positions = [
    {x:0.35,y:0.88},{x:3.55,y:0.88},{x:6.75,y:0.88},
    {x:0.95,y:2.98},{x:5.25,y:2.98},
  ];
  skillGroups.forEach((g,i) => {
    const pos = positions[i];
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:pos.x,y:pos.y,w:2.88,h:1.86, fill:{color:C.white},line:{color:"E2E8F0",width:1},shadow:cardShadow(),rectRadius:0.1 });
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:pos.x+0.12,y:pos.y+0.1,w:2.62,h:0.3, fill:{color:g.col,transparency:88},line:{color:g.col,width:0.5},rectRadius:0.05 });
    sl.addText(g.cat, { x:pos.x+0.12,y:pos.y+0.1,w:2.62,h:0.3, fontSize:11,bold:true,color:g.col,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
    const items = g.items.map((item,j)=>({text:item,options:{bullet:true,breakLine:j<g.items.length-1,paraSpaceAfter:2}}));
    sl.addText(items, { x:pos.x+0.14,y:pos.y+0.46,w:2.58,h:1.3, fontSize:11,color:C.navyMid,fontFace:"Calibri",align:"left",margin:0 });
  });
  sl.addNotes("This quarter was a steep but rewarding learning curve — Sitecore is complex and getting productive required deep architectural understanding. The most valuable learning was the combination of Helix conventions and SXA rendering variants. I also invested intentionally in tooling and productivity systems that compound in value over time.");
}

// ── SLIDE 10: DATA METRICS FROM DEV-TRACKER ─────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.navy };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.orange},line:{color:C.orange} });
  sl.addText("Work Metrics — dev-tracker Insights", { x:0.4,y:0,w:9.2,h:0.72, fontSize:22,bold:true,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  sl.addText("40 working days logged  ·  13 Apr → 23 Jun 2026  ·  ~10 working weeks", { x:0.4,y:0.82,w:9.2,h:0.34, fontSize:12,color:"94A3B8",fontFace:"Calibri",align:"left",italic:true,margin:0 });

  // ── ROW 1: 4 big stat cards ──────────────────────────────────
  const stats = [
    { n:"40",  sub:"Working Days\nLogged",        col:C.orange },
    { n:"90%", sub:"Days Rated\nGood or Better",  col:C.green  },
    { n:"~75%",sub:"Plan-Ahead\nCompletion Rate", col:"0EA5E9" },
    { n:"59",  sub:"Risk / Blocker\nEntries",      col:C.amber  },
  ];
  stats.forEach((s,i) => {
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35+i*2.38,y:1.28,w:2.1,h:1.28, fill:{color:C.navyMid},line:{color:s.col,width:1.5},rectRadius:0.1,shadow:makeShadow() });
    sl.addText(s.n, { x:0.35+i*2.38,y:1.34,w:2.1,h:0.66, fontSize:36,bold:true,color:s.col,fontFace:"Calibri",align:"center",margin:0 });
    sl.addText(s.sub, { x:0.35+i*2.38,y:2.0,w:2.1,h:0.48, fontSize:10,color:"94A3B8",fontFace:"Calibri",align:"center",margin:0 });
  });

  // ── ROW 2: Sentiment bar + Activity mix ─────────────────────
  // Sentiment card (left)
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:2.72,w:4.55,h:2.56, fill:{color:C.navyMid},line:{color:C.navyLight},rectRadius:0.1 });
  sl.addText("Daily Sentiment Distribution", { x:0.5,y:2.8,w:4.2,h:0.3, fontSize:12,bold:true,color:C.orange,fontFace:"Calibri",align:"left",margin:0 });

  const feelings = [
    { label:"✅ Good",       pct:53, days:21, col:C.green,  barW:3.6 },
    { label:"⭐ Great",      pct:25, days:10, col:C.orange, barW:1.67 },
    { label:"🎯 Focused",   pct:13, days:5,  col:"0EA5E9", barW:0.87 },
    { label:"⚠️ Struggling",pct:10, days:4,  col:C.amber,  barW:0.67 },
  ];
  feelings.forEach((f,i) => {
    const ry = 3.18 + i*0.5;
    sl.addText(f.label, { x:0.5,y:ry,w:1.42,h:0.34, fontSize:10,color:"CBD5E1",fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
    // bar bg
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:1.96,y:ry+0.06,w:2.0,h:0.22, fill:{color:C.navyLight},line:{color:C.navyLight},rectRadius:0.04 });
    // bar fill
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:1.96,y:ry+0.06,w:f.barW,h:0.22, fill:{color:f.col,transparency:20},line:{color:f.col},rectRadius:0.04 });
    sl.addText(f.pct+"% ("+f.days+"d)", { x:3.98,y:ry,w:0.88,h:0.34, fontSize:10,color:f.col,bold:true,fontFace:"Calibri",align:"right",valign:"middle",margin:0 });
  });
  sl.addText("All 4 Struggling days: 13–22 May install window only", { x:0.5,y:5.04,w:4.2,h:0.2, fontSize:9,color:C.gray,fontFace:"Calibri",align:"left",italic:true,margin:0 });

  // Activity mix card (right)
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:5.1,y:2.72,w:4.55,h:2.56, fill:{color:C.navyMid},line:{color:C.navyLight},rectRadius:0.1 });
  sl.addText("Activity Mix (days active)", { x:5.25,y:2.8,w:4.2,h:0.3, fontSize:12,bold:true,color:C.orange,fontFace:"Calibri",align:"left",margin:0 });

  const acts = [
    { label:"Bug fixing & regression", days:"23d", col:"EF4444" },
    { label:"Feature/page integration", days:"18d", col:"8B5CF6" },
    { label:"Scriban component dev",    days:"15d", col:C.orange },
    { label:"Environment & install",    days:"6d",  col:C.amber  },
    { label:"SAML / Audit Trail",       days:"2d",  col:C.green  },
    { label:"Docs & other",             days:"8d",  col:C.gray   },
  ];
  acts.forEach((a,i) => {
    const ay = 3.18 + i*0.38;
    sl.addShape(pres.shapes.OVAL, { x:5.25,y:ay+0.07,w:0.18,h:0.18, fill:{color:a.col},line:{color:a.col} });
    sl.addText(a.label, { x:5.52,y:ay,w:3.0,h:0.32, fontSize:10,color:"CBD5E1",fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
    sl.addText(a.days, { x:8.52,y:ay,w:0.88,h:0.32, fontSize:10,bold:true,color:a.col,fontFace:"Calibri",align:"right",valign:"middle",margin:0 });
  });

  sl.addNotes("These metrics come directly from 40 days of journal entries in the dev-tracker repo. 90% positive sentiment is a strong signal — and importantly, the only dip was tightly bounded to the 2-week install window in May, not a recurring pattern. The 75-80% plan-ahead rate reflects high follow-through; the misses were mostly environment-blocked items, not dropped work.");
}

// ── SLIDE 11: NEXT QUARTER ──────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.offWhite };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.navy},line:{color:C.navy} });
  sl.addText("Next Quarter Focus — Q3 2026", { x:0.4,y:0,w:9.2,h:0.72, fontSize:22,bold:true,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });

  const goals = [
    { n:"01",col:C.orange, title:"Complete Scriban Component Backlog",      target:"Target: All assigned page templates rendered & published",
      body:"Continue component work · Complete 404 + Search · Apply established patterns throughout" },
    { n:"02",col:"0EA5E9", title:"Full Sitecore CLI Serialization Coverage", target:"Target: All BNI templates + renderings tracked in repo",
      body:"Serialise Project-layer templates · Full scs-push coverage · Align .yaml across contributors" },
    { n:"03",col:C.green,  title:"Team Knowledge Sharing",                  target:"Target: Install guide + Scriban pattern guide published",
      body:"Publish Sitecore 10.4.1 install guide · Document Scriban conventions · Helix alignment session" },
  ];
  goals.forEach((g,i) => {
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:0.88+i*1.5,w:9.3,h:1.34, fill:{color:C.white},line:{color:"E2E8F0",width:1},shadow:cardShadow(),rectRadius:0.1 });
    sl.addShape(pres.shapes.OVAL, { x:0.48,y:0.98+i*1.5,w:0.5,h:0.5, fill:{color:g.col},line:{color:g.col} });
    sl.addText(g.n, { x:0.48,y:0.98+i*1.5,w:0.5,h:0.5, fontSize:14,bold:true,color:C.white,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
    sl.addText(g.title, { x:1.12,y:0.96+i*1.5,w:7.8,h:0.36, fontSize:14,bold:true,color:C.navyMid,fontFace:"Calibri",align:"left",margin:0 });
    sl.addText(g.target, { x:1.12,y:1.33+i*1.5,w:7.8,h:0.26, fontSize:11,color:g.col,fontFace:"Calibri",align:"left",bold:true,margin:0 });
    sl.addText(g.body, { x:1.12,y:1.6+i*1.5,w:7.8,h:0.5, fontSize:10.5,color:C.gray,fontFace:"Calibri",align:"left",margin:0 });
  });
  sl.addNotes("My Q3 priorities are sequenced deliberately: components first as the active deliverable, then serialization to ensure version control, then knowledge sharing to multiply contributions. The knowledge sharing goal is important — install lessons and Scriban patterns shouldn't live only in my personal CLAUDE.md.");
}

// ── SLIDE 12: SUPPORT NEEDED ────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.navy };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.orange},line:{color:C.orange} });
  sl.addText("Support Needed — Sitecore Mastery", { x:0.4,y:0,w:9.2,h:0.72, fontSize:22,bold:true,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  sl.addText("Infrastructure is in place — focus now shifts to deepening Sitecore expertise", { x:0.4,y:0.82,w:9.2,h:0.34, fontSize:12,color:"94A3B8",fontFace:"Calibri",align:"left",italic:true,margin:0 });

  // Context: what's already available
  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:1.26,w:9.3,h:0.62, fill:{color:C.navyMid},line:{color:C.green,width:1},rectRadius:0.08 });
  sl.addText("✅  Already Available:", { x:0.55,y:1.26,w:1.8,h:0.62, fontSize:11,bold:true,color:C.green,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  sl.addText("Staging CM: awscm-bid.equiw.com  ·  Staging CD: awscd-bid.equiw.com  ·  Storybook: awssb-bid.equiw.com  ·  Design repo: bni-corporate-web-html", { x:2.28,y:1.26,w:7.2,h:0.62, fontSize:10.5,color:"94A3B8",fontFace:"Calibri",align:"left",valign:"middle",margin:0 });

  // 3 skill growth asks
  const asks = [
    {
      icon:"🎓", col:C.orange, from:"Lead / Company",
      title:"Sitecore Certified Developer Training",
      body:"Formal Sitecore certification (SXA, Experience Platform, or Developer) would solidify architectural depth and fill gaps in advanced pipeline, caching, and publishing internals. Supports longer-term project ownership."
    },
    {
      icon:"🔬", col:"0EA5E9", from:"Lead",
      title:"Dedicated Sitecore Deep-Dive Time",
      body:"Allocated exploration time (e.g. 1 day/sprint) to study advanced Sitecore topics: custom pipelines, Solr faceted search, multisite configuration, and CD/CM publishing workflows beyond current day-to-day scope."
    },
    {
      icon:"🧑‍💻", col:"8B5CF6", from:"Team / Lead",
      title:"Code Review & Mentoring on Sitecore Patterns",
      body:"Regular review sessions from a senior Sitecore developer — specifically around Helix best practices, rendering variant architecture, and SXA extension patterns — to accelerate from competent to expert level."
    },
  ];

  asks.forEach((s,i) => {
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:2.04+i*1.1,w:9.3,h:0.98, fill:{color:C.navyMid},line:{color:s.col,width:1},rectRadius:0.1 });
    sl.addText(s.icon, { x:0.44,y:2.1+i*1.1,w:0.68,h:0.7, fontSize:22,fontFace:"Calibri",align:"center",margin:0 });
    sl.addText(s.title, { x:1.2,y:2.1+i*1.1,w:6.8,h:0.3, fontSize:13,bold:true,color:s.col,fontFace:"Calibri",align:"left",margin:0 });
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:8.08,y:2.12+i*1.1,w:1.45,h:0.26, fill:{color:s.col,transparency:82},line:{color:s.col,width:0.5},rectRadius:0.05 });
    sl.addText(s.from, { x:8.08,y:2.12+i*1.1,w:1.45,h:0.26, fontSize:9,bold:true,color:s.col,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
    sl.addText(s.body, { x:1.2,y:2.43+i*1.1,w:7.7,h:0.52, fontSize:10.5,color:"94A3B8",fontFace:"Calibri",align:"left",margin:0 });
  });

  sl.addNotes("The infrastructure blockers from earlier in the quarter are now resolved — staging environments and design references are all accessible. The focus for support shifts to skill depth: I want to move from being a capable Sitecore developer to a confident one. Certification, dedicated learning time, and senior code review are the three things that would accelerate that most meaningfully.");
}

// ── SLIDE 13: CLOSING ───────────────────────────────────────────
{
  let sl = pres.addSlide();
  sl.background = { color: C.navy };
  sl.addShape(pres.shapes.RECTANGLE, { x:0,y:0,w:10,h:0.72, fill:{color:C.orange},line:{color:C.orange} });
  sl.addText("Summary", { x:0.4,y:0,w:9.2,h:0.72, fontSize:22,bold:true,color:C.white,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });

  const recaps = [
    { icon:"✅",label:"Environment",  text:"Fully operational BNI-Sitecore stack — CM, CD, IS, SQL, Solr  ·  9 blockers resolved",   col:C.green },
    { icon:"✅",label:"Integration",  text:"Audit Trail Log built & merged  ·  SAML SSO operational (team)",                          col:C.green },
    { icon:"🔄",label:"Components",   text:"BNI Header, Search, 404, Locator, Fee & Interest (load-more)  ·  15 active Scriban days", col:C.amber },
    { icon:"✅",label:"Migrations",   text:"Savings Futures + Transactional pages migrated & published to CD  ·  load-more fix on STG", col:C.green },
    { icon:"🔄",label:"Architecture", text:"Helix + SXA patterns  ·  CLI workflow  ·  40 days logged, 90% positive sentiment",        col:C.amber },
  ];
  recaps.forEach((r,i) => {
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:0.84+i*0.62,w:9.3,h:0.54, fill:{color:C.navyMid},line:{color:C.navyLight},rectRadius:0.07 });
    sl.addText(r.icon+"  "+r.label, { x:0.5,y:0.84+i*0.62,w:1.7,h:0.54, fontSize:12,bold:true,color:r.col,fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
    sl.addShape(pres.shapes.RECTANGLE, { x:2.22,y:0.91+i*0.62,w:0.04,h:0.4, fill:{color:C.navyLight},line:{color:C.navyLight} });
    sl.addText(r.text, { x:2.42,y:0.84+i*0.62,w:7.1,h:0.54, fontSize:10.5,color:"CBD5E1",fontFace:"Calibri",align:"left",valign:"middle",margin:0 });
  });

  // Metric cards with description
  const pills = [
    {
      n:"40", label:"Days Logged", col:C.orange,
      desc:"13 Apr → 23 Jun 2026\nActual tracked work days\nacross all activity folders"
    },
    {
      n:"90%", label:"Positive Days", col:C.green,
      desc:"36 of 40 days rated Good,\nGreat, or Focused — only\n4 dips during May install"
    },
    {
      n:"~75%", label:"Plan Hit Rate", col:"0EA5E9",
      desc:"Notes checkboxes + journal\ncross-reference both converge\nat 75–80% completion"
    },
    {
      n:"10wk", label:"Span Covered", col:"8B5CF6",
      desc:"71 calendar days · 40 logged\n= 78% working day coverage\nacross the full quarter"
    },
  ];
  pills.forEach((p,i) => {
    const cx = 0.35 + i*2.35;
    sl.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x:cx, y:4.0, w:2.1, h:1.46,
      fill:{color:p.col,transparency:90},
      line:{color:p.col,width:1}, rectRadius:0.08
    });
    // Big number
    sl.addText(p.n, {
      x:cx, y:4.04, w:2.1, h:0.52,
      fontSize:28, bold:true, color:p.col,
      fontFace:"Calibri", align:"center", margin:0
    });
    // Label
    sl.addText(p.label, {
      x:cx, y:4.54, w:2.1, h:0.24,
      fontSize:10, bold:true, color:p.col,
      fontFace:"Calibri", align:"center", margin:0
    });
    // Divider
    sl.addShape(pres.shapes.RECTANGLE, {
      x:cx+0.3, y:4.8, w:1.5, h:0.03,
      fill:{color:p.col,transparency:60}, line:{color:p.col,transparency:60}
    });
    // Description
    sl.addText(p.desc, {
      x:cx+0.08, y:4.85, w:1.94, h:0.54,
      fontSize:8.5, color:"94A3B8",
      fontFace:"Calibri", align:"center", margin:0
    });
  });

  sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:0.35,y:5.54,w:9.3,h:0.32, fill:{color:C.navyMid},line:{color:C.orange,width:1},rectRadius:0.07 });
  sl.addText('"Committed to delivering quality, learning continuously, and building systems that make the whole team more effective."', { x:0.55,y:5.54,w:8.9,h:0.32, fontSize:10,color:C.white,italic:true,fontFace:"Calibri",align:"center",valign:"middle",margin:0 });
  sl.addText("Fandi Yulistian  ·  fandi@aleph-labs.com  ·  Backend Engineer, Aleph Labs", { x:0.35,y:5.88,w:9.3,h:0.2, fontSize:9.5,color:C.gray,fontFace:"Calibri",align:"center",margin:0 });
  sl.addNotes("The data from 40 days of logging backs every claim in this deck — 90% positive sentiment, 75-80% plan completion, full-stack breadth across 6 activity types. The only dip was a bounded 2-week install window that resolved quickly and permanently. I'm energised about Q3 and committed to knowledge-sharing. Thank you for your time.");
}

await pres.writeFile({ fileName: "output/Fandi_4Month_Review_2026.pptx" });
console.log("✅ Done: output/Fandi_4Month_Review_2026.pptx");
}

main().catch(e => { console.error(e); process.exit(1); });
