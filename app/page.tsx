"use client";

import { FormEvent, useState } from "react";

const services = [
  ["01", "Network & Connectivity", "Router, switch, firewall and circuit deployments supported by remote engineering teams."],
  ["02", "Smart Hands & Technical Support", "Dependable onsite troubleshooting, validation and close-out for distributed technical teams."],
  ["03", "Hardware & Workplace Technology", "Workstation refreshes, peripherals, printers, audits and business technology installations."],
  ["04", "Retail, POS & Digital Signage", "Store technology rollouts, kiosks, point-of-sale systems and commercial display support."],
  ["05", "Structured Cabling & Infrastructure", "CAT5e/CAT6 installation, termination, testing, labeling and rack organization."],
];

const solutions = [
  ["Network Deployments", "Router, switch, firewall, Meraki and connectivity installations—coordinated with your remote engineering team.", "Circuit turn-ups", "Static IP testing"],
  ["Technology Rollouts", "Multi-location deployments, workstation refreshes and coordinated onsite project support.", "Hardware refreshes", "Multi-site coordination"],
  ["Retail Technology Support", "POS systems, kiosks, printers, digital signage and store technology services.", "POS & peripherals", "Display validation"],
  ["Smart Hands", "Onsite support for remote engineers, service desks, network teams and managed service providers.", "Guided diagnostics", "Close-out documentation"],
];

const industries = ["Retail", "Restaurants & Hospitality", "Professional Offices", "Healthcare Offices", "Financial Services", "Warehousing & Distribution", "Managed Service Providers", "Technology Deployment Companies"];
const markets = ["Dallas", "Fort Worth", "Plano", "Garland", "Richardson", "Irving", "Arlington", "Frisco", "McKinney", "Carrollton", "Addison", "Mesquite", "Grand Prairie", "Lewisville", "Grapevine", "Denton"];
const capabilities = [
  ["Network Circuit Cutovers", "Connectivity activation, static IP testing, equipment connection and remote-engineer validation."],
  ["Workstation Refresh Projects", "Computer replacement, peripheral reconnection and user-functionality validation."],
  ["Retail POS Support", "Installation, connection, troubleshooting and validation of point-of-sale technology."],
  ["Printer & Multifunction Support", "Hardware diagnostics, component replacement, paper-path testing and remote collaboration."],
  ["Digital Signage", "Installing, reconnecting, securing and validating commercial display equipment."],
  ["Structured Cabling", "CAT5e/CAT6 installation, termination, labeling, organization and testing support."],
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
    formData.append("_subject", "New Sterling Ridge Ventures service request");
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
          <span className="brand-mark"><i /><i /><i /></span>
          <span><b>STERLING RIDGE</b><small>VENTURES LLC</small></span>
        </a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {["Services", "Solutions", "Industries", "Coverage", "About", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="button header-cta" href="#contact" onClick={() => setMenuOpen(false)}>Request Service <span>↗</span></a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> DFW-BASED FIELD IT SERVICES</p>
            <h1>Dependable Technology Support. <em>Delivered Onsite.</em></h1>
            <p className="hero-text">Sterling Ridge Ventures LLC provides professional field IT services, network deployments, smart-hands support, hardware installations, POS services, structured cabling, and technology rollout assistance throughout Dallas–Fort Worth.</p>
            <div className="hero-actions"><a className="button primary" href="#contact">Request Onsite Support <span>↗</span></a><a className="button ghost" href="#services">Explore Our Services <span>↓</span></a></div>
            <p className="location-line"><b>●</b> Based in Dallas, Texas. Out-of-state projects are available when travel and accommodations are provided.</p>
          </div>
          <div className="network-art" aria-label="Abstract network infrastructure illustration" role="img">
            <div className="rack rack-a"><span /><span /><span /><span /><span /></div>
            <div className="rack rack-b"><span /><span /><span /><span /></div>
            <div className="signal s1" /><div className="signal s2" /><div className="signal s3" />
            <div className="connection c1" /><div className="connection c2" /><div className="connection c3" />
            <div className="status-card"><small>FIELD STATUS</small><b><i /> DEPLOYMENT READY</b><span>DFW · NORTH TEXAS</span></div>
          </div>
        </section>

        <section className="intro section" id="about-intro">
          <p className="section-label">THE STERLING RIDGE STANDARD</p>
          <h2>Technology Field Services Built Around <span>Reliable Execution.</span></h2>
          <p>We help project managers, managed service providers, technology companies, and local businesses complete onsite technology work with professional communication, detailed documentation, and dependable technical support.</p>
          <a className="text-link" href="#about">About Sterling Ridge <b>→</b></a>
          <div className="trust-row">
            {[["01","Reliable Onsite Coverage","Punctual arrivals and responsive local support."],["02","Professional Communication","Proactive updates from check-in through close-out."],["03","Detailed Documentation","Organized notes and before-and-after records."],["04","Flexible Project Support","Single dispatches, recurring work and rollouts."]].map(x => <article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-head"><div><p className="section-label light">CORE SERVICES</p><h2>Onsite Capability.<br/><span>Enterprise Discipline.</span></h2></div><p>Practical technical support delivered with clear communication, careful execution and complete close-out documentation.</p></div>
          <div className="service-grid">
            {services.map(s => <article className="service-card" key={s[0]}><span className="service-number">{s[0]}</span><div className="service-icon" aria-hidden="true">{s[0] === "01" ? "⌁" : s[0] === "02" ? "◎" : s[0] === "03" ? "▣" : s[0] === "04" ? "▥" : "⌗"}</div><h3>{s[1]}</h3><p>{s[2]}</p><a href="#contact" aria-label={`Learn more about ${s[1]}`}>Learn More <b>→</b></a></article>)}
          </div>
        </section>

        <section className="solutions section" id="solutions">
          <div className="section-head dark"><div><p className="section-label">PRACTICAL SOLUTIONS</p><h2>Built for the Work<br/>That Happens <span>Onsite.</span></h2></div><p>We operate as a reliable extension of your technical team—aligning field execution with remote expertise.</p></div>
          <div className="solution-list">
            {solutions.map((s, i) => <article key={s[0]} className="solution-row"><div className={`solution-visual visual-${i+1}`}><div className="mini-rack"><i/><i/><i/><i/></div><span className="visual-tag">0{i+1} / FIELD SOLUTION</span></div><div className="solution-copy"><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p><ul><li>{s[2]}</li><li>{s[3]}</li></ul><a href="#contact">Discuss this solution <b>→</b></a></div></article>)}
          </div>
        </section>

        <section className="industries section" id="industries">
          <div className="section-head dark"><div><p className="section-label">INDUSTRIES WE SUPPORT</p><h2>Technology Support Across<br/><span>Business Environments.</span></h2></div><p>Equipped to support technology projects across a range of operating environments throughout North Texas.</p></div>
          <div className="industry-grid">{industries.map((x,i) => <article key={x}><b>{String(i+1).padStart(2,"0")}</b><span>{x}</span><i>↗</i></article>)}</div>
        </section>

        <section className="coverage" id="coverage">
          <div className="coverage-copy"><p className="section-label light">LOCAL EXPERTISE</p><h2>Dallas Based.<br/><span>Available Beyond Texas.</span></h2><p>Sterling Ridge Ventures LLC is based in Dallas, Texas and provides responsive onsite technology support throughout Dallas–Fort Worth and surrounding communities. We are also available for out-of-state projects when project-approved travel and accommodations are provided.</p><div className="market-grid">{markets.map(x => <span key={x}>• {x}</span>)}</div><a className="button primary" href="#contact">Check Project Availability <span>↗</span></a></div>
          <div className="metro-map" aria-label="Schematic Dallas Fort Worth service area" role="img"><div className="map-grid"/><span className="map-line l1"/><span className="map-line l2"/><span className="map-line l3"/><div className="map-node dallas"><i/>DALLAS<small>PRIMARY MARKET</small></div><div className="map-node fortworth"><i/>FORT WORTH<small>PRIMARY MARKET</small></div><div className="map-node plano"><i/>PLANO</div><div className="map-node denton"><i/>DENTON</div><div className="map-node arlington"><i/>ARLINGTON</div><div className="map-label">NORTH TEXAS<br/><b>SERVICE AREA</b></div></div>
        </section>

        <section className="capabilities section">
          <div className="section-head dark"><div><p className="section-label">FEATURED CAPABILITIES</p><h2>Prepared for the<br/><span>Project in Front of You.</span></h2></div><p>Focused technical services for field assignments, coordinated deployments and business technology environments.</p></div>
          <div className="capability-grid">{capabilities.map((c,i) => <article key={c[0]}><div className={`cap-img cap-${i+1}`}><span>CAPABILITY / {String(i+1).padStart(2,"0")}</span></div><div><h3>{c[0]}</h3><p>{c[1]}</p></div></article>)}</div>
        </section>

        <section className="credibility section"><p className="section-label">HOW WE WORK</p><h2>Professional from Check-In<br/>Through <span>Close-Out.</span></h2><div className="cred-grid">{["Dallas–Fort Worth Based","Professional Check-In & Close-Out","Detailed Before-and-After Documentation","Remote Engineering Collaboration","Flexible Scheduling","Multi-Site Project Support"].map((x,i)=><article key={x}><b>0{i+1}</b><span>{x}</span></article>)}</div></section>

        <section className="about section" id="about">
          <div className="about-art"><div className="field-panel"><span>ONSITE / DFW</span><div className="tech-lines"><i/><i/><i/><i/></div><b>YOUR TEAM.<br/>OUR FIELD<br/>EXECUTION.</b></div></div>
          <div className="about-copy"><p className="section-label">ABOUT STERLING RIDGE</p><h2>A Reliable Onsite Extension of <span>Your Technical Team.</span></h2><p>Sterling Ridge Ventures LLC is a Texas-based technology services company supporting onsite IT projects throughout Dallas–Fort Worth. We work alongside project managers, dispatch teams, remote engineers, managed service providers, and business customers to complete technical assignments safely, professionally, and efficiently.</p><p>We emphasize punctuality, proactive communication, careful execution, complete documentation, and respect for every client environment.</p><div className="about-points"><span>✓ Field IT Support</span><span>✓ Network Deployments</span><span>✓ Smart Hands</span><span>✓ POS Systems</span><span>✓ Hardware Refreshes</span><span>✓ Structured Cabling</span><span>✓ Site Surveys</span><span>✓ After-Hours Support</span></div></div>
        </section>

        <section className="partnership section" id="partnership">
          <div><p className="section-label">BECOME A PARTNER</p><h2>Build the Future of Field Service <span>Together.</span></h2></div>
          <div className="partnership-copy"><p>Strong partnerships help us deliver dependable technology services across more locations and more complex projects. We welcome relationships with managed service providers, technology deployment companies, project managers, vendors, and organizations seeking a reliable field-services partner.</p><p>Our goal is to build long-term relationships grounded in dependable execution, transparent communication, shared growth, and a commitment to serving every client professionally.</p><a className="button primary" href="mailto:partners@sterlingridgeventures.com">Discuss a Partnership <span>↗</span></a><small>Partnership arrangements: <a href="mailto:partners@sterlingridgeventures.com">partners@sterlingridgeventures.com</a></small></div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-lead"><p className="section-label light">START A CONVERSATION</p><h2>Let&apos;s Support Your Next <span>Technology Project.</span></h2><p>Based in Dallas, Texas, with out-of-state project availability when travel and accommodations are provided.</p><div className="contact-info"><span><small>HOME BASE</small>Dallas, Texas</span><a href="mailto:contact@sterlingridgeventures.com"><small>SERVICE REQUESTS</small>contact@sterlingridgeventures.com</a><a href="tel:+16129877874"><small>BUSINESS PHONE</small>612-987-7874</a></div></div>
          <form className="request-form" onSubmit={submitServiceRequest} aria-label="Request service form">
            <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <h3>Request Onsite Service</h3><p>Tell us about your project and desired service date.</p>
            <div className="form-grid"><label>Full Name<input required name="name" placeholder="Your full name"/></label><label>Company<input name="company" placeholder="Company name"/></label><label>Business Email<input required type="email" name="email" placeholder="name@company.com"/></label><label>Phone<input type="tel" name="phone" placeholder="(000) 000-0000"/></label><label>Project Location<input required name="location" placeholder="City or site address"/></label><label>Service Needed<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s[1]}>{s[1]}</option>)}</select></label><label>Preferred Service Date<input type="date" name="date"/></label><label className="full">Project Details<textarea required name="details" rows={5} placeholder="Scope, equipment, timing and site requirements"/></label></div>
            <button className="button form-button" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending Request..." : "Submit Service Request"} <span>↗</span></button>
            <div className="form-status" aria-live="polite">{formStatus === "success" && <p className="form-success">Thank you. Your service request was submitted successfully. Our team will follow up with you shortly.</p>}{formStatus === "error" && <p className="form-error">We could not submit your request. Please try again or email contact@sterlingridgeventures.com.</p>}</div>
            <small className="privacy-note">By submitting this form, you agree that Sterling Ridge Ventures LLC may contact you regarding your service request. Your information will not be sold. The request is submitted securely without leaving this website.</small>
          </form>
        </section>
      </div>

      <footer>
        <div className="footer-brand"><a className="brand inverse" href="#home"><span className="brand-mark"><i/><i/><i/></span><span><b>STERLING RIDGE</b><small>VENTURES LLC</small></span></a><p>Dallas-based onsite technology support with out-of-state project availability.</p></div>
        <div><h3>Company</h3><a href="#about">About</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a></div>
        <div><h3>Services</h3><a href="#services">Network & Connectivity</a><a href="#services">Smart Hands</a><a href="#services">Hardware Deployment</a><a href="#services">POS & Retail Technology</a><a href="#services">Structured Cabling</a></div>
        <div><h3>Industries</h3><a href="#industries">Retail</a><a href="#industries">Hospitality</a><a href="#industries">Professional Offices</a><a href="#industries">Healthcare Offices</a><a href="#industries">Managed Service Providers</a></div>
        <div><h3>Contact</h3><span>Dallas, Texas</span><a href="mailto:contact@sterlingridgeventures.com">Service Requests</a><a href="#partnership">Become a Partner</a><a href="tel:+16129877874">612-987-7874</a></div>
        <div className="footer-bottom"><span>© 2026 Sterling Ridge Ventures LLC. All rights reserved.</span><span><button onClick={()=>setLegal("privacy")}>Privacy Policy</button><button onClick={()=>setLegal("terms")}>Terms of Use</button><a href="#contact">Accessibility</a></span></div>
      </footer>

      {legal && <div className="modal-backdrop" role="presentation" onClick={()=>setLegal(null)}><section className="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-title" onClick={e=>e.stopPropagation()}><button className="modal-close" aria-label="Close" onClick={()=>setLegal(null)}>×</button>{legal === "privacy" ? <><h2 id="legal-title">Privacy Policy</h2><p>Last updated: July 16, 2026</p><h3>Information we collect</h3><p>When you submit a service request, Sterling Ridge Ventures LLC may collect the contact and project information you voluntarily provide.</p><h3>How information is used</h3><p>Information is used to respond to inquiries, evaluate service requests, coordinate projects, and maintain business records. We do not sell personal information.</p><h3>Data handling</h3><p>Reasonable safeguards will be used, but no internet transmission is completely secure. Contact us to request access, correction, or deletion where applicable.</p><h3>Privacy questions and general information</h3><p>For questions about this policy, your information, or general company information, email <a href="mailto:info@sterlingridgeventures.com">info@sterlingridgeventures.com</a>.</p><p><em>This is general website information and not legal advice.</em></p></> : <><h2 id="legal-title">Terms of Use</h2><p>Last updated: July 16, 2026</p><h3>Website information</h3><p>This website provides general information about Sterling Ridge Ventures LLC and its available capabilities. Content may change without notice.</p><h3>No service guarantee</h3><p>Submitting an inquiry does not create a service agreement. Scope, availability, pricing, and terms must be confirmed in writing.</p><h3>Acceptable use</h3><p>You may not misuse the website, interfere with its operation, or attempt unauthorized access.</p><p><em>This is general website information and not legal advice.</em></p></>}</section></div>}
    </main>
  );
}
