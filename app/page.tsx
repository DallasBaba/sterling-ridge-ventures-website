"use client";

import { FormEvent, useState } from "react";

const buyerReasons = [
  ["01", "Reliable Arrival & Site Readiness", "Work orders are reviewed before dispatch, access requirements are confirmed, and the required tools and documentation are prepared before arrival."],
  ["02", "Dispatcher-Friendly Communication", "Clear acceptance, ETA, check-in, progress, escalation, and close-out updates reduce follow-up work for coordinators and project managers."],
  ["03", "Remote-Team Collaboration", "Comfortable following detailed scopes, joining bridge calls, working with NOCs and engineers, and validating each step before moving forward."],
  ["04", "Documented Close-Out", "Organized completion notes, validation results, asset details, and useful before-and-after photos support fast buyer approval."],
];

const projectTypes = [
  ["Network & Smart Hands", "Switch, router, firewall, circuit, access-point and rack support coordinated with remote engineering teams."],
  ["Retail & POS Technology", "POS, payment terminal, self-checkout, back-office, kiosk and in-store technology installation and refresh work."],
  ["Workstations & Peripherals", "Desktop deployments, hardware replacement, printer and multifunction-device service, testing and validation."],
  ["Rollouts & Site Programs", "Repeatable execution for multi-location deployments, scheduled refreshes, surveys, inventory and decommissioning."],
];

const recentProjects = [
  {
    image: "/field-work/network-rack.jpg",
    label: "NETWORK INFRASTRUCTURE",
    title: "Rack, Switching & Connectivity Support",
    copy: "Onsite identification, cabling, connection validation and guided troubleshooting inside active business network environments.",
    tags: ["Smart hands", "Remote engineer support", "Close-out photos"],
  },
  {
    image: "/field-work/package-lockers.jpg",
    label: "CONNECTED DEVICES",
    title: "Package Locker Installation & Validation",
    copy: "Physical installation support, network connectivity, device startup and functional validation for unattended customer-facing systems.",
    tags: ["Hardware install", "Connectivity", "Functional testing"],
  },
  {
    image: "/field-work/printer-service.jpg",
    label: "BUSINESS EQUIPMENT",
    title: "Printer & Multifunction Device Service",
    copy: "Component access, supply and hardware replacement, connectivity checks, test output and operational confirmation.",
    tags: ["Hardware service", "Testing", "User validation"],
  },
  {
    image: "/field-work/hardware-repair.jpg",
    label: "WORKPLACE TECHNOLOGY",
    title: "Workstation Hardware Repair",
    copy: "Internal component access, replacement support, cable reconnection, startup testing and coordination with remote support.",
    tags: ["Workstations", "Component replacement", "Post-repair test"],
  },
];

const standards = [
  ["Before arrival", "Review scope, confirm access and tools, acknowledge scheduling requirements, and communicate ETA."],
  ["At check-in", "Follow buyer and site procedures, confirm onsite contact, document starting conditions, and contact remote support as directed."],
  ["During work", "Provide meaningful progress updates, protect the work area, follow change instructions, and escalate blockers immediately."],
  ["At close-out", "Validate functionality, clean the work area, submit required photos and notes, and confirm completion before departure."],
];

const tools = [
  "Laptop with remote-support capability",
  "Mobile phone, charger and hotspot access",
  "Network cable tester and patch cables",
  "Console and common connectivity adapters",
  "Screwdrivers, Torx bits, pliers and side cutters",
  "Labeling and cable-management supplies",
  "Basic electrical and mounting hand tools",
  "Project-specific PPE and access equipment",
];

const supportTeams = [
  ["Field Nation Buyers", "Direct-routing support for buyers who need dependable Dallas-Fort Worth coverage without reopening every assignment to the marketplace."],
  ["Dispatch Coordinators", "Fast scope review, clear ETA communication, milestone updates, and complete close-out documentation."],
  ["Project Managers", "Repeatable execution for scheduled rollouts, refreshes, multi-day work, and coordinated site programs."],
  ["MSPs & NOCs", "Onsite smart hands that follow remote direction, protect escalation paths, and validate before disconnecting."],
  ["National Deployers", "A consistent DFW field resource for retail, workplace, network, kiosk, printer, and connected-device projects."],
  ["Recruiting Teams", "A provider profile built around readiness, communication, documented experience, and repeat routing."],
];

const providerPromise = [
  "We review the complete scope before accepting.",
  "We do not disappear after assignment confirmation.",
  "We report access issues and blockers when they happen.",
  "We follow the buyer's communication and escalation process.",
  "We document completed work for approval, not just attendance.",
  "We leave the site orderly and confirm close-out before departure.",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [legal, setLegal] = useState<"privacy" | "terms" | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitServiceRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New buyer dispatch inquiry - Sterling Ridge Ventures");
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_url", "https://sterlingridgeventures.com/#contact");
    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@sterlingridgeventures.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sterling Ridge Ventures home">
          <span className="brand-mark"><i/><i/><i/></span>
          <span><b>STERLING RIDGE</b><small>VENTURES LLC</small></span>
        </a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#why-us">Why Us</a><a href="#experience">Experience</a><a href="#dispatch">Dispatch Standards</a><a href="#tools">Tools</a><a href="#coverage">Coverage</a>
          <a className="button header-cta" href="/become-a-dispatch-partner">Become a Dispatch Partner <span>↗</span></a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span/> DALLAS–FORT WORTH FIELD SERVICE PROVIDER</p>
            <h1>Route Dallas-Fort Worth Work to a Provider Who <em>Keeps Dispatch Informed.</em></h1>
            <p className="hero-text">Sterling Ridge Ventures LLC provides onsite field IT execution for buyers who need the scope followed, the remote team supported, problems escalated promptly, and every work order closed with useful notes and photos.</p>
            <div className="hero-actions"><a className="button primary" href="/become-a-dispatch-partner">Add Us as a Routing Partner <span>↗</span></a><a className="button ghost" href="/capability-statement.pdf" download>Download Capability Statement <span>↓</span></a></div>
            <div className="hero-proof"><span>✓ Scope reviewed before acceptance</span><span>✓ Milestone updates to dispatch</span><span>✓ Documented close-out</span></div>
          </div>
          <div className="hero-photo">
            <img src="/field-work/network-validation.jpg" alt="Onsite network switch validation during a completed field service assignment"/>
            <div className="hero-photo-card"><small>BUYER PRIORITY</small><b>Clear updates from acceptance through close-out.</b></div>
          </div>
        </section>

        <section className="buyer-strip" aria-label="Buyer service summary">
          <span><b>ROUTING AREA</b> Dallas-Fort Worth and approved travel projects</span>
          <span><b>AVAILABILITY</b> Scheduled · Emergency · After-Hours · Weekends</span>
          <span><b>PROJECT FORMAT</b> Single Dispatch · Multi-Site Rollout · Multi-Day</span>
        </section>

        <section className="intro section" id="why-us">
          <p className="section-label">WHY NATIONAL FIELD SERVICE COMPANIES CHOOSE US</p>
          <h2>Reduce Dispatcher Follow-Up <span>Without Losing Site Visibility.</span></h2>
          <p>Every assignment is handled as an extension of the buyer's operation: review the scope, confirm requirements, arrive prepared, communicate at required milestones, escalate blockers, validate the result, and submit an approval-ready close-out.</p>
          <div className="reason-grid">{buyerReasons.map(item => <article key={item[0]}><b>{item[0]}</b><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
        </section>

        <section className="support section" id="who-we-support">
          <div className="section-head dark"><div><p className="section-label">WHO WE SUPPORT</p><h2>Built for the Teams Responsible<br/><span>for Getting the Site Closed.</span></h2></div><p>The site contact sees the technician. Your internal team carries the schedule, client communication, SLA, and approval responsibility. Our workflow supports both.</p></div>
          <div className="support-grid">{supportTeams.map((item, index) => <article key={item[0]}><b>0{index + 1}</b><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
        </section>

        <section className="services section" id="services">
          <div className="section-head"><div><p className="section-label light">AVAILABLE WORK TYPES</p><h2>Ready for the Assignments<br/><span>Your Queue Needs Covered.</span></h2></div><p>Available for emergency dispatch, smart hands, scheduled rollouts, multi-day projects, and repeat DFW site coverage.</p></div>
          <div className="service-grid">{projectTypes.map((item, index) => <article key={item[0]}><b>0{index + 1}</b><h3>{item[0]}</h3><p>{item[1]}</p><a href="#contact">Check availability →</a></article>)}</div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-head dark"><div><p className="section-label">RECENT PROJECT EXPERIENCE</p><h2>Field Work Shown.<br/><span>Not Stock Photography.</span></h2></div><p>Selected assignment photos are presented without customer-identifying information. Experience spans business networks, retail systems, workplace hardware, connected devices, and commercial equipment.</p></div>
          <div className="project-grid">{recentProjects.map(project => <article key={project.title}><div className="project-photo"><img src={project.image} alt={project.title}/><span>{project.label}</span></div><div className="project-copy"><h3>{project.title}</h3><p>{project.copy}</p><ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
        </section>

        <section className="dispatch section" id="dispatch">
          <div className="dispatch-photo"><img src="/field-work/enterprise-rack.jpg" alt="Enterprise network rack supported during a field service assignment"/></div>
          <div className="dispatch-copy"><p className="section-label light">WHY DISPATCH TEAMS WORK WITH US</p><h2>Communication That Protects <span>Your Client Relationship.</span></h2><p>Our role is to represent the buyer professionally onsite. That means following the scope, respecting escalation paths, keeping the coordinator informed, and never leaving the project manager guessing about status.</p><div className="dispatch-points"><span>✓ Scope reviewed before travel</span><span>✓ ETA and access coordination</span><span>✓ Timely blocker escalation</span><span>✓ Remote bridge-call participation</span><span>✓ Clean work-area standards</span><span>✓ Complete close-out package</span></div><a className="button primary" href="#contact">Route a DFW Dispatch <span>↗</span></a></div>
        </section>

        <section className="standards section" id="standards">
          <div className="section-head dark"><div><p className="section-label">RESPONSE TIME & COMMUNICATION STANDARDS</p><h2>A Predictable Workflow<br/><span>From Assignment to Approval.</span></h2></div><p>Project-specific instructions always take priority. These operating standards are designed to keep dispatchers, remote engineers, and client contacts aligned.</p></div>
          <div className="standards-grid">{standards.map((item, index) => <article key={item[0]}><b>0{index + 1}</b><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
        </section>

        <section className="promise section">
          <div className="promise-copy"><p className="section-label light">PREFERRED PROVIDER PROMISE</p><h2>What Dispatch Can Expect <span>On Every Accepted Assignment.</span></h2><p>Acceptance means responsibility for the agreed scope and communication process. If site conditions change, dispatch hears about it while there is still time to act.</p><a className="button primary" href="/become-a-dispatch-partner">Start a Routing Relationship <span>↗</span></a></div>
          <div className="promise-list">{providerPromise.map((item, index) => <article key={item}><b>0{index + 1}</b><p>{item}</p></article>)}</div>
        </section>

        <section className="tools section" id="tools">
          <div className="tools-copy"><p className="section-label light">PROFESSIONAL EQUIPMENT & TOOLS</p><h2>Prepared for More Than a <span>Basic Dispatch.</span></h2><p>Assignments are reviewed for tool, access, safety, connectivity, and documentation requirements before arrival. Project-specific equipment is confirmed with the buyer in advance.</p><div className="tool-list">{tools.map(tool => <span key={tool}>✓ {tool}</span>)}</div></div>
          <div className="tools-gallery"><img src="/field-work/switch-validation.jpg" alt="Network switches and labeled patch connections"/><img src="/field-work/cable-routing.jpg" alt="Organized structured cabling routed into a network rack"/></div>
        </section>

        <section className="coverage" id="coverage">
          <div className="coverage-copy"><p className="section-label light">COVERAGE & RESPONSE STANDARDS</p><h2>Clear Availability Before <span>Your Schedule Is at Risk.</span></h2><p>Based in Dallas and serving the Dallas-Fort Worth metroplex. New requests are reviewed against scope, location, schedule, access, tools, and remote-support requirements before acceptance. Emergency, after-hours, weekend, rollout, and multi-day availability must be confirmed for each assignment. Out-of-state projects can be considered when approved travel and accommodations are provided.</p><div className="market-grid">{["Dallas","Fort Worth","Plano","Irving","Arlington","Frisco","McKinney","Richardson","Garland","Carrollton","Denton","Grapevine"].map(city => <span key={city}>• {city}</span>)}</div><a className="button primary" href="#contact">Submit Work for Review <span>↗</span></a></div>
          <div className="coverage-photo"><img src="/field-work/network-rack.jpg" alt="Completed commercial network rack field assignment"/><div><small>BEST FIT</small><b>Buyers seeking consistent DFW coverage without returning every assignment to the open marketplace.</b></div></div>
        </section>

        <section className="partnership section" id="partnership">
          <div><p className="section-label">DIRECT ROUTING PARTNERSHIP</p><h2>Keep a DFW Provider Ready <span>Before the Next Work Order Posts.</span></h2></div>
          <div className="partnership-copy"><p>Share your common scopes, service area, check-in process, documentation standards, and escalation contacts once. Future Dallas-Fort Worth assignments can then begin with an established operating expectation instead of restarting provider qualification.</p><a className="button primary" href="/become-a-dispatch-partner">Become a Dispatch Partner <span>↗</span></a><a className="capability-link" href="/capability-statement.pdf" download>Download Capability Statement PDF</a><small>Provider-network inquiries: <a href="mailto:partners@sterlingridgeventures.com">partners@sterlingridgeventures.com</a></small></div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-lead"><p className="section-label light">SEND A DISPATCH OR PROJECT INQUIRY</p><h2>Need Dependable DFW <span>Field Coverage?</span></h2><p>Share the location, scope, schedule, required tools, and remote-support expectations. We will review the assignment and respond regarding availability.</p><div className="contact-info"><span><small>HOME BASE</small>Dallas, Texas</span><a href="mailto:contact@sterlingridgeventures.com"><small>DISPATCH & SERVICE REQUESTS</small>contact@sterlingridgeventures.com</a><a href="tel:+16129877874"><small>BUSINESS PHONE</small>612-987-7874</a></div></div>
          <form className="request-form" onSubmit={submitServiceRequest} aria-label="Buyer dispatch inquiry form">
            <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
            <h3>Submit a Work Order for Review</h3><p>Provide enough operational detail to confirm fit and availability.</p>
            <div className="form-grid"><label>Buyer / Company<input required name="company" placeholder="Company or dispatch organization"/></label><label>Dispatcher / Project Manager<input required name="name" placeholder="Primary coordinator"/></label><label>Business Email<input required type="email" name="email" placeholder="name@company.com"/></label><label>Direct Phone<input required type="tel" name="phone" placeholder="Escalation contact number"/></label><label>Work Order Number<input name="work_order" placeholder="WO, ticket or project ID"/></label><label>Site Location<input required name="location" placeholder="City, state or site area"/></label><label>Assignment Format<select required name="assignment_format" defaultValue=""><option value="" disabled>Select assignment format</option><option>Standard Scheduled Dispatch</option><option>Emergency Dispatch</option><option>After-Hours Dispatch</option><option>Weekend Dispatch</option><option>Multi-Site Rollout</option><option>Multi-Day Project</option></select></label><label>Work Type<select required name="service" defaultValue=""><option value="" disabled>Select work type</option><option>Smart Hands / Network Support</option><option>Retail / POS Technology</option><option>Workstation / Printer Support</option><option>Kiosk / Connected Device</option><option>Inventory / Decommission</option><option>Other Field Service</option></select></label><label>Requested Date<input required type="date" name="date"/></label><label>Arrival Window<input name="arrival_window" placeholder="Hard start or arrival range"/></label><label className="full">Scope, Tools & Check-In Requirements<textarea required name="details" rows={5} placeholder="Scope of work, required tools, access procedure, remote support contact, deliverables and escalation instructions"/></label></div>
            <button className="button form-button" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending Inquiry..." : "Submit Dispatch Inquiry"} <span>↗</span></button>
            <div className="form-status" aria-live="polite">{formStatus === "success" && <p className="form-success">Your inquiry was submitted. We will review the assignment details and follow up regarding availability.</p>}{formStatus === "error" && <p className="form-error">The form could not be submitted. Please email contact@sterlingridgeventures.com.</p>}</div>
            <small className="privacy-note">Submission does not confirm assignment acceptance. Scope, schedule, access, travel, pricing, and required tools must be agreed in writing.</small>
          </form>
        </section>
      </div>

      <footer>
        <div className="footer-brand"><a className="brand inverse" href="#home"><span className="brand-mark"><i/><i/><i/></span><span><b>STERLING RIDGE</b><small>VENTURES LLC</small></span></a><p>Buyer-focused field IT coverage for Dallas–Fort Worth dispatches, rollouts, and projects.</p></div>
        <div><h3>Buyer Resources</h3><a href="#why-us">Why Choose Us</a><a href="#experience">Project Experience</a><a href="#dispatch">Dispatch Standards</a></div>
        <div><h3>Work Types</h3><a href="#services">Smart Hands</a><a href="#services">Retail & POS</a><a href="#services">Rollouts</a><a href="#services">Multi-Day Projects</a></div>
        <div><h3>Coverage</h3><a href="#coverage">Dallas–Fort Worth</a><a href="#contact">Emergency Dispatch</a><a href="#partnership">Preferred Provider Network</a></div>
        <div><h3>Contact</h3><span>Dallas, Texas</span><a href="mailto:contact@sterlingridgeventures.com">Dispatch Inquiry</a><a href="mailto:partners@sterlingridgeventures.com">Provider Partnership</a><a href="tel:+16129877874">612-987-7874</a></div>
        <div className="footer-bottom"><span>© 2026 Sterling Ridge Ventures LLC. All rights reserved.</span><span><button onClick={() => setLegal("privacy")}>Privacy Policy</button><button onClick={() => setLegal("terms")}>Terms of Use</button><a href="#contact">Accessibility</a></span></div>
      </footer>

      {legal && <div className="modal-backdrop" role="presentation" onClick={() => setLegal(null)}><section className="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-title" onClick={event => event.stopPropagation()}><button className="modal-close" aria-label="Close" onClick={() => setLegal(null)}>×</button>{legal === "privacy" ? <><h2 id="legal-title">Privacy Policy</h2><p>Last updated: July 16, 2026</p><h3>Information we collect</h3><p>We may collect the business contact and project information you voluntarily submit through this website.</p><h3>How information is used</h3><p>Information is used to review inquiries, coordinate assignments, respond to buyers, and maintain business records. We do not sell personal information.</p><h3>Project photography</h3><p>Website photography is selected from completed field assignments and presented without intentionally identifying customer records, confidential ticket details, or private site information.</p><h3>Questions</h3><p>Email <a href="mailto:info@sterlingridgeventures.com">info@sterlingridgeventures.com</a> for privacy or general-information questions.</p></> : <><h2 id="legal-title">Terms of Use</h2><p>Last updated: July 16, 2026</p><h3>Website information</h3><p>This website summarizes field-service capabilities and selected project experience. Content may change without notice.</p><h3>No assignment guarantee</h3><p>Submitting an inquiry does not create a service agreement or confirm acceptance. Scope, schedule, access, pricing, travel, and terms must be confirmed in writing.</p><h3>Third-party relationships</h3><p>References to platforms, equipment categories, or project types do not imply endorsement, agency, or an exclusive relationship.</p></>}</section></div>}
    </main>
  );
}
