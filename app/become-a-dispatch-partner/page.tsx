"use client";

import { FormEvent, useState } from "react";

const onboardingItems = [
  ["Service alignment", "Share your common scopes, client environments, required tools, coverage expectations, and scheduling patterns."],
  ["Dispatch process", "Define assignment delivery, acceptance, check-in, escalation, remote-support, and close-out requirements."],
  ["Routing contacts", "Identify the people responsible for dispatch, project delivery, technical escalation, and invoice or approval questions."],
  ["First assignment", "Begin with a clearly scoped DFW work order and use the close-out to establish the repeat-routing standard."],
];

export default function DispatchPartnerPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New dispatch partnership inquiry - Sterling Ridge Ventures");
    data.append("_captcha", "false");
    data.append("_template", "table");
    try {
      const response = await fetch("https://formsubmit.co/ajax/partners@sterlingridgeventures.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="partner-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Sterling Ridge Ventures home"><span className="brand-mark"><i/><i/><i/></span><span><b>STERLING RIDGE</b><small>VENTURES LLC</small></span></a>
        <nav className="partner-nav"><a href="/#experience">Project Experience</a><a href="/#standards">Dispatch Standards</a><a href="/capability-statement.pdf" download>Capability Statement</a><a className="button header-cta" href="#partner-form">Start Partner Review <span>↗</span></a></nav>
      </header>

      <section className="partner-hero">
        <div><p className="eyebrow"><span/> DALLAS-FORT WORTH DIRECT ROUTING</p><h1>Establish Your DFW Field Provider <em>Before the Next Dispatch.</em></h1><p>Use this page to begin a direct-routing relationship with Sterling Ridge Ventures LLC. The objective is operational alignment: known scopes, known contacts, known communication standards, and a provider who is ready to review DFW work without repeating the qualification process.</p><div className="hero-actions"><a className="button primary" href="#partner-form">Begin Partner Review <span>↗</span></a><a className="button ghost" href="/capability-statement.pdf" download>Download Capability Statement <span>↓</span></a></div></div>
        <div className="partner-hero-photo"><img src="/field-work/network-rack.jpg" alt="Commercial network rack supported by Sterling Ridge Ventures"/><div><small>PARTNERSHIP FIT</small><b>Field Nation buyers, MSPs, dispatch organizations, project managers, and national deployment companies.</b></div></div>
      </section>

      <section className="partner-value section">
        <p className="section-label">WHAT A ROUTING PARTNERSHIP SOLVES</p>
        <h2>Fewer Provider Searches. <span>Faster Operational Alignment.</span></h2>
        <div className="partner-value-grid"><article><b>01</b><h3>Known DFW Coverage</h3><p>A provider already familiar with your dispatch process and documentation expectations.</p></article><article><b>02</b><h3>Direct Communication</h3><p>A business contact for availability review, assignment coordination, and escalation.</p></article><article><b>03</b><h3>Repeatable Close-Out</h3><p>Notes, photos, validation, and completion steps aligned to your approval workflow.</p></article></div>
      </section>

      <section className="partner-process section">
        <div><p className="section-label light">PARTNER ONBOARDING</p><h2>A Practical Four-Step <span>Routing Setup.</span></h2><p>No exclusive commitment is required. The purpose is to exchange the operational information needed to route suitable assignments efficiently.</p></div>
        <div>{onboardingItems.map((item, index) => <article key={item[0]}><b>0{index + 1}</b><span><h3>{item[0]}</h3><p>{item[1]}</p></span></article>)}</div>
      </section>

      <section className="partner-form-section section" id="partner-form">
        <div><p className="section-label">DISPATCH PARTNER REVIEW</p><h2>Tell Us How Your Team <span>Routes Field Work.</span></h2><p>We will review your service model, common assignment types, and DFW coverage needs, then follow up to discuss fit and the next suitable work order.</p><a href="mailto:partners@sterlingridgeventures.com">partners@sterlingridgeventures.com</a><a href="tel:+16129877874">612-987-7874</a></div>
        <form className="request-form" onSubmit={submit}>
          <h3>Partner Information</h3><p>For buyers, dispatch teams, MSPs, and deployment organizations.</p>
          <div className="form-grid">
            <label>Company<input required name="company" placeholder="Buyer or deployment company"/></label>
            <label>Your Name<input required name="name" placeholder="Primary contact"/></label>
            <label>Business Email<input required type="email" name="email" placeholder="name@company.com"/></label>
            <label>Direct Phone<input required type="tel" name="phone" placeholder="Contact number"/></label>
            <label>Your Role<select required name="role" defaultValue=""><option value="" disabled>Select role</option><option>Field Nation Buyer / Recruiter</option><option>Dispatcher / Coordinator</option><option>Project Manager</option><option>MSP / NOC</option><option>National Deployment Company</option><option>Other Operations Role</option></select></label>
            <label>Expected DFW Volume<select name="volume" defaultValue=""><option value="" disabled>Select expected volume</option><option>Occasional Dispatches</option><option>Monthly Recurring Work</option><option>Active Rollout</option><option>Ongoing Preferred Coverage</option><option>Not Yet Determined</option></select></label>
            <label className="full">Common Work Types<input required name="work_types" placeholder="Network, POS, workstation, printer, kiosk, rollout, inventory, other"/></label>
            <label className="full">Routing & Documentation Requirements<textarea required name="requirements" rows={5} placeholder="Scheduling, check-in, remote support, update cadence, required photos, close-out and escalation process"/></label>
          </div>
          <button className="button form-button" disabled={status === "sending"}>{status === "sending" ? "Submitting..." : "Submit Partner Review"} <span>↗</span></button>
          <div className="form-status" aria-live="polite">{status === "success" && <p className="form-success">Your partner information was submitted. We will review it and follow up to discuss operational fit.</p>}{status === "error" && <p className="form-error">The form could not be submitted. Please email partners@sterlingridgeventures.com.</p>}</div>
        </form>
      </section>

      <footer className="partner-footer"><span>© 2026 Sterling Ridge Ventures LLC</span><a href="/">Return to Main Website</a><a href="/capability-statement.pdf" download>Capability Statement PDF</a></footer>
    </main>
  );
}
