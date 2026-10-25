import { useRef, useState } from "react";

export default function ContactPage() {
  const [selectedDay, setSelectedDay] = useState(8);
  const [selectedSlot, setSelectedSlot] = useState("1:30 PM");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
  };
  const resetForm = () => {
    formRef.current?.reset();
    setFormSubmitted(false);
  };

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">

<section className="relative w-full overflow-hidden pb-space-xl">

<div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-secondary-container/10 blur-[120px] rounded-full"></div>
<div className="pointer-events-none absolute top-48 right-12 w-[420px] h-[320px] bg-tertiary-fixed/15 blur-[100px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-gutter relative z-10 pt-space-lg">

<div className="max-w-3xl mb-space-xl">
<div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-tertiary-container text-on-tertiary-container shadow-sm mb-space-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Start a Conversation</span>
</div>
<h1 className="font-headline-2xl text-headline-2xl text-primary tracking-tight mb-space-sm">
          Let’s talk about your pipeline and growth goals.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Whether you want to explore outbound feasibility, discuss target accounts, or get an honest audit of your current top-of-funnel motion, we are ready to connect.
        </p>

<div className="mt-space-md flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-md text-label-md">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<span className="">No-pressure discovery</span>
</div>
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<span className="">Zero long-term lock-in</span>
</div>
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<span className="">100% confidential ICP review</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest/95 backdrop-blur-xl rounded-xl p-space-md shadow-xl flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-sm pb-space-sm">
<div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/15 text-secondary font-label-sm text-label-sm mb-1">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
<span className="">Direct Strategy Call</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Schedule a 30-Minute Call</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time calendar access. Pick your strategic time slot.</p>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm uppercase font-semibold">30 Min</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm">
<div className="flex items-center justify-between mb-space-xs px-1">
<span className="font-headline-sm text-headline-sm text-primary">October 2025</span>
<div className="flex items-center gap-1 text-on-surface-variant">
<button aria-label="Previous Month" className="p-1 rounded hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button aria-label="Next Month" className="p-1 rounded hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm mb-1 text-on-surface-variant/70">
<span className="">Mo</span><span className="">Tu</span><span className="">We</span><span className="">Th</span><span className="">Fr</span><span className="">Sa</span><span className="">Su</span>
</div>
<div className="grid grid-cols-7 gap-1 text-center font-label-md text-label-md" id="calendarDays">
<span className="py-1 text-on-surface-variant/30">29</span>
<span className="py-1 text-on-surface-variant/30">30</span>
<button onClick={() => setSelectedDay(1)} className={selectedDay === 1 ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm" : "py-1 rounded hover:bg-surface-container-high transition-colors"} type="button">1</button>
<button onClick={() => setSelectedDay(2)} className={selectedDay === 2 ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm" : "py-1 rounded hover:bg-surface-container-high transition-colors"} type="button">2</button>
<button onClick={() => setSelectedDay(3)} className={selectedDay === 3 ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm" : "py-1 rounded hover:bg-surface-container-high transition-colors"} type="button">3</button>
<span className="py-1 text-on-surface-variant/40">4</span>
<span className="py-1 text-on-surface-variant/40">5</span>
<button onClick={() => setSelectedDay(6)} className={selectedDay === 6 ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm" : "py-1 rounded hover:bg-surface-container-high transition-colors"} type="button">6</button>
<button onClick={() => setSelectedDay(7)} className={selectedDay === 7 ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm" : "py-1 rounded hover:bg-surface-container-high transition-colors"} type="button">7</button>
<button onClick={() => setSelectedDay(8)} className={selectedDay === 8 ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm" : "py-1 rounded hover:bg-surface-container-high transition-colors"} type="button">8</button>
<button onClick={() => setSelectedDay(9)} className={selectedDay === 9 ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm" : "py-1 rounded hover:bg-surface-container-high transition-colors"} type="button">9</button>
<button onClick={() => setSelectedDay(10)} className={selectedDay === 10 ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm" : "py-1 rounded hover:bg-surface-container-high transition-colors"} type="button">10</button>
<span className="py-1 text-on-surface-variant/40">11</span>
<span className="py-1 text-on-surface-variant/40">12</span>
</div>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Available Slots (Wed, Oct 8)</label>
<span className="font-label-sm text-label-sm text-secondary font-medium">Eastern Time (US)</span>
</div>
<div className="grid grid-cols-3 gap-2" id="slotPicker">
<button onClick={() => setSelectedSlot("10:00 AM")} className={selectedSlot === "10:00 AM" ? "py-2 px-1 text-center rounded-lg bg-secondary-container text-primary font-label-md text-label-md font-bold shadow-sm ring-2 ring-secondary-container" : "py-2 px-1 text-center rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm"} type="button">
                  10:00 AM
                </button>
<button onClick={() => setSelectedSlot("1:30 PM")} className={selectedSlot === "1:30 PM" ? "py-2 px-1 text-center rounded-lg bg-secondary-container text-primary font-label-md text-label-md font-bold shadow-sm ring-2 ring-secondary-container" : "py-2 px-1 text-center rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm"} type="button">
                  1:30 PM
                </button>
<button onClick={() => setSelectedSlot("3:00 PM")} className={selectedSlot === "3:00 PM" ? "py-2 px-1 text-center rounded-lg bg-secondary-container text-primary font-label-md text-label-md font-bold shadow-sm ring-2 ring-secondary-container" : "py-2 px-1 text-center rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm"} type="button">
                  3:00 PM
                </button>
</div>
</div>

<button className="w-full py-3 rounded-full bg-secondary-container text-primary font-headline-sm text-label-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(254,152,50,0.25)]" type="button">
<span className="">Lock Selected Time Slot</span>
<span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
</button>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-sm">
<h4 className="font-headline-sm text-headline-sm text-primary">Direct Contact Channels</h4>
<div className="space-y-space-xs font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs p-2 rounded-lg bg-surface-container-lowest/80 shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">mail</span>
</div>
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm text-on-surface-variant">General &amp; Strategic Inquiries</p>
<a className="text-primary font-semibold hover:text-secondary transition-colors truncate block" href="mailto:hello@g2hsolutions.com">hello@g2hsolutions.com</a>
</div>
</div>
<div className="flex items-center gap-space-xs p-2 rounded-lg bg-surface-container-lowest/80 shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
</div>
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm text-on-surface-variant">Campaign Architecture Desk</p>
<a className="text-primary font-semibold hover:text-secondary transition-colors truncate block" href="mailto:outreach@g2hsolutions.com">outreach@g2hsolutions.com</a>
</div>
</div>
<div className="flex items-center gap-space-xs p-2 rounded-lg bg-surface-container-lowest/80 shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">schedule</span>
</div>
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm text-on-surface-variant">SLA Response Window</p>
<p className="text-primary font-semibold">&lt; 2 hours during active market hours</p>
</div>
</div>
<div className="flex items-center gap-space-xs p-2 rounded-lg bg-surface-container-lowest/80 shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">public</span>
</div>
<div className="min-w-0 flex-1">
<p className="font-label-sm text-label-sm text-on-surface-variant">Operating Base</p>
<p className="text-primary font-semibold">North America &amp; Global Coverage</p>
</div>
</div>
</div>

<div className="pt-space-xs">
<a className="group block p-space-sm rounded-xl bg-primary text-on-primary hover:bg-primary-container transition-all shadow-md" href="mailto:hello@g2hsolutions.com?subject=Request%20the%20G2H%20overview">
<div className="flex items-center justify-between gap-space-xs">
<div className="space-y-0.5">
<span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider">Review Offline</span>
<p className="font-headline-sm text-headline-sm text-on-primary">Request the Executive Overview (PPTX)</p>
<p className="font-body-sm text-body-sm text-on-primary-container">Short, shareable summary of methodology and unit economics.</p>
</div>
<div className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center text-secondary-container group-hover:scale-110 transition-transform flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">download</span>
</div>
</div>
</a>
</div>
</div>

<div className="relative rounded-xl overflow-hidden shadow-lg h-48 bg-primary">
<img alt="Executives discussing pipeline strategy in a modern boardroom" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-500" src="/images/contact-boardroom.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent p-space-sm flex flex-col justify-end text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-container uppercase">Strategic Alignment</span>
<p className="font-headline-sm text-headline-sm text-on-primary leading-snug">From Ground 2 High-Growth Revenue.</p>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-surface-container-lowest/95 backdrop-blur-2xl rounded-2xl p-space-md md:p-space-lg shadow-2xl relative">

<div className="absolute top-space-md right-space-md hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span className="">Project Diagnostic Desk</span>
</div>
<div className="mb-space-md">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wide">Project Feasibility &amp; Briefing</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Tell us about your pipeline target.</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Provide basic details on your ICP and revenue goals. We’ll review account feasibility before we get on the phone.
              </p>
</div>

<form className="space-y-space-md" id="contactScopingForm" ref={formRef} onSubmit={handleSubmit}>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="fullName">
                    Full Name <span className="text-error">*</span>
</label>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="fullName" placeholder="e.g. Jordan Miller" required type="text" />
</div>
<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="businessEmail">
                    Business Email <span className="text-error">*</span>
</label>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="businessEmail" placeholder="jordan@company.com" required type="email" />
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="companyName">
                    Company Name <span className="text-error">*</span>
</label>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="companyName" placeholder="Acme Technologies" required type="text" />
</div>
<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="websiteUrl">
                    Website URL
                  </label>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="websiteUrl" placeholder="https://acme.io" type="url" />
</div>
</div>

<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="meetingTarget">
                  Current Monthly Qualified Meetings Goal <span className="text-error">*</span>
</label>
<div className="relative">
<select defaultValue="" className="w-full appearance-none px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all pr-10 cursor-pointer" id="meetingTarget" required>
<option disabled value="">Select your desired pipeline volume...</option>
<option value="5-10">5 – 10 high-value executive meetings / month</option>
<option value="10-25">10 – 25 mid-market / enterprise meetings / month</option>
<option value="25-50+">25 – 50+ scaled outbound pipeline / month</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
</div>

<div className="space-y-1">
<div className="flex items-center justify-between">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="targetIcp">
                    Target Market / ICP Description
                  </label>
<span className="font-label-sm text-label-sm text-on-surface-variant">e.g., Series B+ FinTech, VP of Risk</span>
</div>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="targetIcp" placeholder="Who are your ideal buyers? Industries, job titles, geography" type="text" />
</div>



<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="formMessage">
                  Specific Outbound Requirements or Context
                </label>
<textarea className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all resize-y" id="formMessage" placeholder="Tell us about your average deal size, past outbound tests, or specific timeline constraints..." rows={3}></textarea>
</div>

<div className="pt-2">
<button className="w-full py-3.5 px-space-md rounded-full bg-secondary-container text-primary font-headline-sm text-headline-sm hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-space-xs shadow-[0_10px_25px_rgba(254,152,50,0.32)]" type="submit">
<span className="">Submit &amp; Request Strategy Session</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>

<p className="font-body-sm text-body-sm text-center text-on-surface-variant/80">
                🔒 Enterprise confidentiality guaranteed. We never resell your ICP data or initiate outreach without formal mutual signoff.
              </p>
</form>

<div className={`absolute inset-0 bg-surface-container-lowest/98 backdrop-blur-md rounded-2xl p-space-lg flex flex-col items-center justify-center text-center ${formSubmitted ? "" : "hidden"}`} id="formSuccessMessage">
<div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary mb-space-sm">
<span className="material-symbols-outlined text-[36px]">check_circle</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary mb-2">Request Received</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-md leading-relaxed">
                Thank you! Our revenue architecture lead is analyzing your ICP targets and will follow up with initial market insights within 2 business hours.
              </p>
<button className="px-space-md py-2 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors" id="resetFormBtn" type="button" onClick={resetForm}>
                Submit Another Request
              </button>
</div>
</div>
</div>
</div>

<div className="mt-space-xl p-space-md rounded-2xl bg-surface-container-low shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-4 gap-space-md items-center">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase font-semibold text-secondary">Live System Benchmark</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary">Sample Mid-Market B2B Program</p>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Target Accounts Qualified</span>
<span className="font-headline-lg text-headline-lg text-primary font-extrabold">820</span>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Active In-Market Sequences</span>
<span className="font-headline-lg text-headline-lg text-primary font-extrabold">14 Active</span>
</div>
<div className="p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Warm Exec Dialogues</span>
<span className="font-headline-lg text-headline-lg text-secondary font-extrabold">39 in motion</span>
</div>
</div>
</div>

<div className="mt-space-xl pt-space-lg">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider">Predictable Process</span>
<h2 className="font-headline-xl text-headline-xl text-primary mt-1">What happens after you reach out?</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            No endless sales hurdles. We value your time with a structured, transparent three-stage onboarding ramp.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md relative">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md relative overflow-hidden flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-2xl text-headline-2xl text-primary/10 font-black leading-none">01</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">&lt; 2 Hours</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Same-Day Intelligence Reply</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                A senior revenue strategist checks your domain, market category, and verified TAM count. We review whether your average contract value aligns with outbound unit economics.
              </p>
</div>
<div className="mt-space-sm pt-space-sm flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="">Account Validation Passed</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md relative overflow-hidden flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-2xl text-headline-2xl text-secondary/20 font-black leading-none">02</span>
<span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">30 Min Call</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Targeting &amp; Strategy Diagnostic</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We dive into your past outbound experiments, current objection trends, and key value propositions. If outbound won’t work for your ICP, we’ll tell you directly.
              </p>
</div>
<div className="mt-space-sm pt-space-sm flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">analytics</span>
<span className="">Zero-Fluff Assessment</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md relative overflow-hidden flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-2xl text-headline-2xl text-primary/10 font-black leading-none">03</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">48h Delivery</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Custom Pipeline Projection</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Receive an actionable outbound rollout blueprint detailing addressable accounts, suggested sequence structures, and expected monthly meeting velocity.
              </p>
</div>
<div className="mt-space-sm pt-space-sm flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="">Clear ROI Math</span>
</div>
</div>
</div>
</div>

<div className="mt-space-xl p-space-lg rounded-2xl bg-primary text-on-primary shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="space-y-1 max-w-xl">
<p className="font-headline-md text-headline-md text-surface tracking-tight">
            “It finally felt like someone owned our top-of-funnel.”
          </p>
<p className="font-body-sm text-body-sm text-on-primary-container">
            — VP of Sales, B2B SaaS Enterprise Client (EMEA &amp; North America)
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-sm flex-shrink-0 w-full sm:w-auto">
<a className="w-full sm:w-auto px-space-md py-2.5 rounded-full bg-surface-container-low text-primary font-headline-sm text-label-md hover:bg-surface transition-all text-center" href="mailto:hello@g2hsolutions.com">
            Email Us Directly
          </a>
<a className="w-full sm:w-auto px-space-md py-2.5 rounded-full bg-secondary-container text-primary font-headline-sm text-label-md hover:brightness-105 transition-all text-center shadow-md" href="mailto:hello@g2hsolutions.com?subject=Request%20the%20G2H%20overview">
            Request Deck (.pptx)
          </a>
</div>
</div>
</div>
</section>


</div>
    </main>
  );
}
