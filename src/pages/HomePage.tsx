import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const pipelineHighlights = [
  {
    title: "Start with the right accounts",
    description:
      "Define your ideal customer profile, research relevant accounts, and shape outreach around the people and signals that matter to your sales team.",
    icon: "manage_search",
  },
  {
    title: "Make each handoff useful",
    description:
      "Give your sales team helpful context about the account, the prospect, and the conversation so they can prepare for the next step.",
    icon: "handshake",
  },
  {
    title: "Learn and refine over time",
    description:
      "Review responses and campaign signals to understand what resonates, improve messaging, and focus effort on promising segments.",
    icon: "query_stats",
  },
];

export default function HomePage() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHighlight((current) => (current + 1) % pipelineHighlights.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-secondary-container/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute top-[480px] -right-36 w-[640px] h-[520px] bg-tertiary-fixed/20 blur-[140px] rounded-full pointer-events-none -z-10"></div>

<section className="max-w-7xl mx-auto px-gutter pt-space-lg pb-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">

<div className="lg:col-span-7 space-y-space-md">

<div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-tertiary-container/10 text-on-tertiary-container font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span className="">From Ground 2 High-Growth Pipeline</span>
</div>

<h1 className="font-headline-2xl text-headline-2xl text-primary tracking-tight">
            Turn quiet pipelines into <span className="text-secondary">steady, qualified demand.</span>
</h1>

<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            G2H Outreach plugs into your sales team as a hands-on lead generation partner. We help you isolate high-value enterprise accounts, spark authentic conversations, and fill calendars with meetings that are actually worth taking.
          </p>

<div className="pt-space-xs flex flex-wrap items-center gap-space-sm">
<Link className="inline-flex items-center gap-space-xs px-space-lg py-3.5 rounded-full bg-secondary-container text-primary font-headline-sm text-headline-sm hover:brightness-105 active:scale-95 transition-all shadow-[0_12px_24px_rgba(254,152,50,0.32)]" to="/contact">
<span className="">Book a strategy call</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</Link>
<Link className="inline-flex items-center gap-space-xs px-space-md py-3.5 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm hover:bg-surface-container-highest transition-all shadow-sm" to="/approach">
<span className="material-symbols-outlined text-[20px] text-primary">explore</span>
<span className="">See how we generate leads</span>
</Link>
</div>

<div className="flex items-center gap-space-xs pt-space-xs text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
<span className="font-body-sm text-body-sm font-semibold text-primary">We grow only when you grow.</span>
<span className="font-body-sm text-body-sm"></span>
</div>

<div className="pt-space-sm grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-surface-container-highest text-primary">
<span className="material-symbols-outlined text-[22px]">calendar_today</span>
</div>
<div className="min-w-0">
<div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Typical Programs</div>
<div className="font-headline-md text-headline-md text-primary mt-0.5">3–6 months</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                  Enough time to test, learn, and scale what works.
                </p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-start gap-space-sm">
<div className="p-2 rounded-lg bg-secondary-fixed text-secondary">
<span className="material-symbols-outlined text-[22px]">event_available</span>
</div>
<div className="min-w-0">
<div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">What We Focus On</div>
<div className="font-headline-md text-headline-md text-primary mt-0.5">Meetings booked</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                  Not clicks or vanity leads—real executive conversations.
                </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-secondary-container/20 to-tertiary-fixed-dim/20 rounded-2xl blur-xl -z-10"></div>

<div className="p-space-md lg:p-space-lg rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_24px_48px_-8px_rgba(27,42,74,0.12)] space-y-space-md">

<div className="flex items-center justify-between gap-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-ping"></span>
<span className="font-label-md text-label-md text-primary font-bold">Live pipeline snapshot</span>
</div>
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant">
                Mid-market B2B program
              </span>
</div>

<div className="grid grid-cols-2 gap-space-sm">
<div className="p-space-sm rounded-xl bg-surface-container-low">
<div className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between">
<span className="">Target Accounts</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">domain</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary mt-1">820</div>
<div className="flex items-center gap-1 mt-1 text-on-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="">100% verified ICP</span>
</div>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low">
<div className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between">
<span className="">Outreach in Market</span>
<span className="material-symbols-outlined text-[16px] text-secondary">alt_route</span>
</div>
<div className="font-headline-lg text-headline-lg text-secondary mt-1">14 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">seq</span></div>

<div className="mt-2 h-4 w-full">
<svg className="w-full h-full text-secondary" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 100 24">
<polyline points="0,18 20,14 40,16 60,8 80,12 100,4"></polyline>
</svg>
</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low space-y-space-xs">
<div className="flex items-center justify-between">
<div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Warm Conversations</div>
<div className="font-headline-md text-headline-md text-primary mt-0.5">39 in motion</div>
</div>
<span className="px-2 py-1 rounded bg-tertiary-container/10 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
                  Active Dialogue
                </span>
</div>

<div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden flex">
<div className="bg-tertiary-container h-full w-[45%]"></div>
<div className="bg-secondary-container h-full w-[35%]"></div>
<div className="bg-primary h-full w-[20%]"></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-1">
<span className="">Account engagement: 68%</span>
<span className="font-semibold text-primary">3.2x vs avg baseline</span>
</div>
</div>

<div className="p-space-sm rounded-xl bg-primary text-on-primary flex items-center justify-between">
<div>
<div className="font-label-sm text-label-sm text-on-primary-container">Forecasted Pipeline</div>
<div className="font-headline-sm text-headline-sm text-surface-bright mt-0.5">Growing weekly</div>
</div>
<div className="text-right">
<span className="inline-flex items-center gap-1 font-headline-md text-headline-md text-secondary-fixed-dim">
<span className="material-symbols-outlined text-[20px]">trending_up</span>
                  +34%
                </span>
<div className="font-label-sm text-label-sm text-on-primary-container">MoM Conversion</div>
</div>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[24px]">format_quote</span>
<div>
<p className="font-body-sm text-body-sm text-primary italic leading-relaxed">
                  "It finally felt like someone owned our top-of-funnel."
                </p>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  VP of Sales · High-Growth B2B SaaS
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">

<div className="lg:col-span-7 space-y-space-md">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/15 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">psychology</span>
<span className="">Why G2H Outreach</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
            Built for teams who are tired of “leads” that never become conversations.
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            If you’ve ever opened an inbound lead export or agency handover sheet and quietly thought, <em className="text-primary font-medium">“Who are these people and why are we talking to them?”</em>, you’re not alone. G2H Outreach was created to eliminate exactly that friction point.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We combine rigorous account profiling, disciplined multi-touch orchestration, and thoughtful copy written for decision-makers. No spray-and-pray email blasts. No inflated vanity click metrics. Just consistent outbound execution into the accounts that move your enterprise needle.
          </p>
<div>
<Link className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors group" to="/approach">
<span className="">See our structured approach</span>
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>

<div className="lg:col-span-5">
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-[0_16px_36px_rgba(27,42,74,0.06)] space-y-space-md">
<div>
<span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider">The Day-to-Day Reality</span>
<h3 className="font-headline-lg text-headline-lg text-primary mt-1">What it feels like to work with us</h3>
</div>
<ul className="space-y-space-sm">
<li className="flex items-start gap-space-sm">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-tertiary-container/10 text-on-tertiary-container flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</span>
<span className="font-body-md text-body-md text-primary font-medium">Your sales team logs in and sees real meetings on the calendar.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-tertiary-container/10 text-on-tertiary-container flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</span>
<span className="font-body-md text-body-md text-primary font-medium">Your outbound doesn’t sound like a generic AI template everyone else is using.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-tertiary-container/10 text-on-tertiary-container flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</span>
<span className="font-body-md text-body-md text-primary font-medium">You know with complete precision which segments and angles are pulling weight.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-tertiary-container/10 text-on-tertiary-container flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</span>
<span className="font-body-md text-body-md text-primary font-medium">Marketing and sales leadership finally look at and agree on the exact same pipeline numbers.</span>
</li>
</ul>

<div className="pt-space-xs">
<div className="relative rounded-xl overflow-hidden shadow-sm">
<img alt="Enterprise revenue team meeting in a modern boardroom" className="w-full h-44 object-cover" src="/images/enterprise-revenue-session.webp" width="512" height="279" loading="lazy" decoding="async" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-space-sm">
<span className="font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                    Your next growth conversation starts here
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-gutter space-y-space-xl">

<div className="max-w-3xl space-y-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-tertiary-container/10 text-on-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">tune</span>
<span className="">Core Expertise</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
          From cold outreach to warm, ready-to-talk opportunities.
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          We design and run lead generation programs that match your sales motion, not someone else’s template. Here’s a quick glimpse before you dive into the details.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm flex flex-col justify-between group">
<div className="space-y-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[26px]">forward_to_inbox</span>
</div>
<div>
<h3 className="font-headline-lg text-headline-lg text-primary">Outbound that doesn’t feel robotic</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Carefully researched outbound campaigns that respect your buyer’s time, attention, and executive inbox.
            </p>
<ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-primary">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">done</span>
<span className="">Account and contact research based on your ICP</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">done</span>
<span className="">Email and LinkedIn sequences tuned to each persona</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">done</span>
<span className="">Call support when it makes tactical sense for your vertical</span>
</li>
</ul>
</div>
<div className="pt-space-md">
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-secondary-container"></div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm flex flex-col justify-between group">
<div className="space-y-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/15 text-on-tertiary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[26px]">explore</span>
</div>
<div>
<h3 className="font-headline-lg text-headline-lg text-primary">Lead management with real follow-through</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Leads are tracked, warmed, and handed over with rich tactical context—never dumped as a cold, contextless spreadsheet.
            </p>
<ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-primary">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">done</span>
<span className="">Lightweight qualification before handoff</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">done</span>
<span className="">Crystal clear rules of engagement with your AE team</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">done</span>
<span className="">Single shared view of meetings, notes, and milestones</span>
</li>
</ul>
</div>
<div className="pt-space-md">
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-on-tertiary-container"></div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm flex flex-col justify-between group">
<div className="space-y-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[26px]">insights</span>
</div>
<div>
<h3 className="font-headline-lg text-headline-lg text-primary">Clarity on what’s actually working</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Regular cadence reviews that clearly answer the strategic question: <em className="font-medium text-primary">“What do we double down on next month?”</em>
</p>
<ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-primary">
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">done</span>
<span className="">Segment-level conversion and attribution learnings</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">done</span>
<span className="">Unfiltered objection feedback from prospects in field</span>
</li>
<li className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">done</span>
<span className="">Agile adjustments to keep pipeline ROI compounding</span>
</li>
</ul>
</div>
<div className="pt-space-md">
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-5/6 h-full bg-primary"></div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center pt-space-xs">
<Link className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-surface-container-high text-primary font-headline-sm text-headline-sm hover:bg-secondary-container hover:text-primary transition-all shadow-sm" to="/services">
<span className="">Explore all services</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</Link>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-gutter">

<div className="p-space-lg lg:p-space-xl rounded-3xl bg-surface-container-lowest shadow-[0_20px_50px_rgba(27,42,74,0.06)]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">

<div className="lg:col-span-7 space-y-space-md">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-secondary-container/15 text-secondary font-semibold">
                Client Success Story
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Enterprise AI Agents · Singapore &amp; Malaysia · B2B Lead Generation</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
              From targeted outreach to 3 successful client onboardings in just 30 days.
            </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              An enterprise AI agent solution provider wanted to connect with high-value enterprise prospects across Singapore and Malaysia. G2H Outreach supported their growth through targeted B2B lead generation, identifying relevant decision-makers and initiating conversations with organizations exploring enterprise AI solutions.
            </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Through focused prospect research and personalized outreach, we generated 7 qualified leads in one month, resulting in 3 successful client onboardings.
            </p>

<div className="pt-space-xs">
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                At G2H Outreach, we turn targeted B2B outreach into meaningful conversations and measurable business outcomes.
              </p>
</div>
</div>

<div className="lg:col-span-5 space-y-space-md">
<div className="p-space-md lg:p-space-lg rounded-2xl bg-primary text-on-primary shadow-lg">
<div className="mb-space-sm">
<span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">Results in 30 days</span>
<h3 className="font-headline-md text-headline-md text-surface-bright mt-1">Focused outreach. Measurable outcomes.</h3>
</div>
<div className="divide-y divide-surface/15">
<div className="py-space-sm first:pt-0 flex items-center justify-between gap-space-sm">
<div>
<div className="font-headline-lg text-headline-lg text-surface-bright">7</div>
<p className="font-body-sm text-body-sm text-on-primary-container">Qualified leads</p>
</div>
<span className="material-symbols-outlined text-[24px] text-secondary-container" aria-hidden="true">person_search</span>
</div>
<div className="py-space-sm flex items-center justify-between gap-space-sm">
<div>
<div className="font-headline-lg text-headline-lg text-surface-bright">3</div>
<p className="font-body-sm text-body-sm text-on-primary-container">Successful client onboardings</p>
</div>
<span className="material-symbols-outlined text-[24px] text-secondary-container" aria-hidden="true">handshake</span>
</div>
<div className="py-space-sm last:pb-0 flex items-center justify-between gap-space-sm">
<div>
<div className="font-headline-md text-headline-md text-surface-bright">Pilot to full-time</div>
<p className="font-body-sm text-body-sm text-on-primary-container">Impressed with our pilot results, the client (founder and CEO) chose G2H Outreach as their long-term lead generation partner.</p>
</div>
<span className="material-symbols-outlined text-[24px] text-secondary-container" aria-hidden="true">handshake</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface">
<div className="max-w-5xl mx-auto px-gutter">
<div className="text-center space-y-space-xs mb-space-lg">
<span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-secondary-container/20 text-secondary uppercase tracking-wider">
          Our approach
        </span>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
          How we support your pipeline
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          A considered process from account research through campaign learning and refinement.
        </p>
</div>

<div
  className="relative overflow-hidden rounded-3xl bg-primary p-space-lg text-on-primary shadow-xl sm:p-space-xl"
  aria-roledescription="carousel"
  aria-label="How G2H Outreach supports your pipeline"
>
  <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-secondary-container/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-28 -left-12 h-64 w-64 rounded-full bg-tertiary-fixed-dim/15 blur-3xl" />
  <div className="relative flex min-h-64 flex-col items-center justify-center text-center sm:min-h-56">
    <span className="material-symbols-outlined text-5xl text-secondary-container" aria-hidden="true">
      {pipelineHighlights[activeHighlight].icon}
    </span>
    <div
      key={activeHighlight}
      className="mx-auto mt-space-sm max-w-3xl"
      aria-live="polite"
    >
      <h3 className="font-headline-lg text-headline-lg leading-snug text-surface">
        {pipelineHighlights[activeHighlight].title}
      </h3>
      <p className="mt-space-sm font-body-lg text-body-lg leading-relaxed text-on-primary-container">
        {pipelineHighlights[activeHighlight].description}
      </p>
    </div>
  </div>

  <div className="relative mt-space-lg flex items-center justify-center gap-space-sm">
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/10 text-surface transition-colors hover:bg-surface/20 focus:outline-none focus:ring-2 focus:ring-secondary-container"
      type="button"
      aria-label="Previous highlight"
      onClick={() =>
        setActiveHighlight(
          (current) => (current - 1 + pipelineHighlights.length) % pipelineHighlights.length,
        )
      }
    >
      <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
    </button>
    <div className="flex items-center gap-2" aria-label="Choose a highlight">
      {pipelineHighlights.map((highlight, index) => (
        <button
          key={highlight.title}
          className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary-container focus:ring-offset-2 focus:ring-offset-primary ${
            index === activeHighlight
              ? "w-8 bg-secondary-container"
              : "w-2.5 bg-surface/40 hover:bg-surface/70"
          }`}
          type="button"
          aria-label={`Show highlight ${index + 1}`}
          aria-current={index === activeHighlight ? "true" : undefined}
          onClick={() => setActiveHighlight(index)}
        />
      ))}
    </div>
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/10 text-surface transition-colors hover:bg-surface/20 focus:outline-none focus:ring-2 focus:ring-secondary-container"
      type="button"
      aria-label="Next highlight"
      onClick={() =>
        setActiveHighlight((current) => (current + 1) % pipelineHighlights.length)
      }
    >
      <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
    </button>
  </div>
</div>
</div>
</section>

</div>
    </main>
  );
}
