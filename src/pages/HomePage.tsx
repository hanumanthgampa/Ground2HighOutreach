import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [hiddenFaqs, setHiddenFaqs] = useState<Set<number>>(() => new Set());
  const toggleFaq = (index: number) => {
    setHiddenFaqs((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

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
<span className="font-body-sm text-body-sm font-semibold text-primary">No long-term contracts.</span>
<span className="font-body-sm text-body-sm">We grow only when you grow.</span>
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
<span className="">Why G2H Outreach Exists</span>
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
<div className="p-space-md rounded-xl bg-surface-container flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[28px]">speed</span>
<div>
<div className="font-headline-sm text-headline-sm text-primary">Think of us as the quiet engine.</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">We keep top-of-funnel velocity high and predictable while your closers focus entirely on deal velocity.</p>
</div>
</div>
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
<img alt="Enterprise Revenue Team Session" className="w-full h-44 object-cover" data-alt="Modern executive boardroom meeting where sales leaders and revenue strategists analyze pipeline charts on digital displays, natural soft lighting, warm wooden accents with subtle deep navy and saffron brand highlights, clean professional photography" src="/images/enterprise-revenue-session.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-space-sm">
<span className="font-label-sm text-label-sm text-surface-bright flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                    Weekly strategic pipeline review in session
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
<span className="">Core Capabilities</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
          From cold outreach to warm, ready-to-talk opportunities.
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          We design and run lead generation programs that match your specific sales motion, not someone else’s cookie-cutter playbook.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm flex flex-col justify-between group">
<div className="space-y-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[26px]">forward_to_inbox</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary font-bold">01 / Outbound Architecture</span>
<h3 className="font-headline-lg text-headline-lg text-primary mt-1">Outbound that doesn’t feel robotic</h3>
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
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">02 / Lead Orchestration</span>
<h3 className="font-headline-lg text-headline-lg text-primary mt-1">Lead management with real follow-through</h3>
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
<span className="font-label-sm text-label-sm text-primary font-bold">03 / Analytics &amp; Compounding</span>
<h3 className="font-headline-lg text-headline-lg text-primary mt-1">Clarity on what’s actually working</h3>
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
<span className="">Explore all specialized outbound services</span>
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
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-secondary-container/15 text-secondary font-semibold">
                Client Snapshot
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">B2B SaaS · North America</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">· Sales-led motion</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
              One team, one quiet pipeline, and a new rhythm of conversations.
            </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A revenue team came to us with a familiar enterprise challenge: a strong software solution, excellent close rates, but an erratic top of the funnel that produced unpredictable quarters.
            </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We clarified their high-conviction ICP, tore down generic messaging, and deployed a targeted multi-channel campaign into 800+ tier-1 accounts. Instead of chasing every lukewarm inbound, we zeroed in on high-fit organizations.
            </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-xl bg-surface-container-low">
<div className="flex items-center gap-space-xs text-secondary mb-1">
<span className="material-symbols-outlined text-[20px]">event_repeat</span>
<span className="font-headline-sm text-headline-sm text-primary">Consistent meetings</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  A predictable stream of validated sales discussions booked weekly, eliminating the boom-and-bust cycle.
                </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low">
<div className="flex items-center gap-space-xs text-on-tertiary-container mb-1">
<span className="material-symbols-outlined text-[20px]">filter_alt</span>
<span className="font-headline-sm text-headline-sm text-primary">Cleaner pipeline</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Fewer unqualified tire-kickers; prospects already grasp value proposition before demo day.
                </p>
</div>
</div>
<div className="pt-space-xs">
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
                Results look different in every vertical, but the core objective remains constant: a reliable, controllable pipeline your revenue leaders can budget on.
              </p>
</div>
</div>

<div className="lg:col-span-5 space-y-space-md">
<div className="rounded-2xl overflow-hidden shadow-md">
<img alt="Executive Sales Leadership Consultation" className="w-full h-64 object-cover" data-alt="Two senior enterprise technology executives reviewing quarterly sales pipeline dashboards on tablet in an airy, sunlit office, professional corporate styling with muted navy and amber palette, crisp focus" src="/images/executive-sales-consultation.jpg" />
</div>

<div className="p-space-md rounded-xl bg-primary text-on-primary flex items-center justify-between shadow-lg">
<div>
<span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">90-Day Conversion Result</span>
<div className="font-headline-lg text-headline-lg text-surface-bright mt-0.5">+184% Opportunity Lift</div>
</div>
<div className="w-12 h-12 rounded-full bg-secondary-container text-primary flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface">
<div className="max-w-4xl mx-auto px-gutter space-y-space-lg">
<div className="text-center space-y-space-xs">
<span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container text-on-surface-variant uppercase tracking-wider">
          Clarity &amp; Terms
        </span>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
          Common questions on pipeline partnership
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Everything you need to know about ramp timeline, tech integration, and lead qualification.
        </p>
</div>

<div className="space-y-space-sm" id="faq-list">

<div className="p-space-md rounded-xl bg-surface-container-low transition-colors duration-200">
<button onClick={() => toggleFaq(0)} className="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm text-primary focus:outline-none">
<span className="">How fast can G2H deploy and start producing meetings?</span>
<span className="material-symbols-outlined transition-transform duration-200 text-on-surface-variant">expand_more</span>
</button>
<div className={`mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed ${hiddenFaqs.has(0) ? "hidden" : ""}`}>
            Our onboarding and technical setup (domain warmup, account research, list enrichment, and sequence drafting) typically takes 10 to 14 business days. Initial outbound starts reaching target buyers in week two, with executive responses following shortly after.
          </div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low transition-colors duration-200">
<button onClick={() => toggleFaq(1)} className="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm text-primary focus:outline-none">
<span className="">Are we locked into an inflexible annual commitment?</span>
<span className="material-symbols-outlined transition-transform duration-200 text-on-surface-variant">expand_more</span>
</button>
<div className={`mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed ${hiddenFaqs.has(1) ? "hidden" : ""}`}>
            No. We operate strictly on 3-to-6 month sprint structures. We believe long-term contracts hide poor execution. We earn your continued engagement by delivering calendar volume and transparent pipeline metrics every single month.
          </div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low transition-colors duration-200">
<button onClick={() => toggleFaq(2)} className="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm text-primary focus:outline-none">
<span className="">How do you protect our brand reputation in cold outreach?</span>
<span className="material-symbols-outlined transition-transform duration-200 text-on-surface-variant">expand_more</span>
</button>
<div className={`mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed ${hiddenFaqs.has(2) ? "hidden" : ""}`}>
            We avoid generic volume blasting. Every outbound cadence is hand-tailored to the recipient's tier, role, and industry context. We employ rigorous deliverability standards, dedicated secondary subdomains, and human-crafted email language that respects your market standing.
          </div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low transition-colors duration-200">
<button onClick={() => toggleFaq(3)} className="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm text-primary focus:outline-none">
<span className="">How do meetings get handed over to our account executives?</span>
<span className="material-symbols-outlined transition-transform duration-200 text-on-surface-variant">expand_more</span>
</button>
<div className={`mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed ${hiddenFaqs.has(3) ? "hidden" : ""}`}>
            Directly onto their native calendars (Google / Outlook / Calendly) with pre-meeting briefs detailing company size, current tech stack, specific pain points verified during the exchange, and a full thread history synced cleanly into your CRM.
          </div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-gutter">
<div className="relative rounded-3xl bg-primary text-on-primary p-space-lg lg:p-space-xl overflow-hidden shadow-2xl">

<div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-20 -top-20 w-96 h-96 bg-tertiary-fixed-dim/15 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-8 space-y-space-sm">
<div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-container text-secondary-fixed-dim font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">file_present</span>
<span className="">Executive Briefing Document</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-surface-bright tracking-tight">
              G2H Outreach Overview (Deck)
            </h2>
<p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
              A short, shareable executive summary of who we are, our research methodology, past performance metrics, and what it feels like to partner with our outbound team.
            </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm items-stretch lg:items-end">
<a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-full bg-secondary-container text-primary font-headline-sm text-headline-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_8px_24px_rgba(254,152,50,0.35)]" href="mailto:hello@g2hsolutions.com?subject=Request%20the%20G2H%20overview">
<span className="material-symbols-outlined text-[20px]">download</span>
<span className="">Request Overview (PPTX)</span>
</a>
<Link className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-full bg-surface-container-lowest text-primary font-headline-sm text-headline-sm hover:bg-surface-container-high transition-all" to="/contact">
<span className="">Book a Strategy Call</span>
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
</Link>
</div>
</div>
</div>
</div>
</section>


</div>
    </main>
  );
}
