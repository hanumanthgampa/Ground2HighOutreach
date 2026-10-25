import { useState } from "react";

import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">



<section className="relative px-gutter py-space-xl overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface">

<div className="absolute top-0 right-0 w-[580px] h-[580px] rounded-full bg-secondary-container/10 blur-[130px] pointer-events-none -mr-40 -mt-20"></div>
<div className="absolute bottom-0 left-10 w-[480px] h-[480px] rounded-full bg-tertiary-fixed-dim/15 blur-[110px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full relative z-10">
<div className="max-w-3xl flex flex-col gap-space-sm mb-space-lg">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-tertiary-container/10 text-on-tertiary-container w-fit font-label-sm text-label-sm uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
          OUR CAPABILITIES &amp; SERVICES
        </div>
<h1 className="font-headline-2xl text-headline-2xl text-primary tracking-tight">
          End-to-end B2B pipeline generation, tailored to your sales motion.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          We don’t offer cookie-cutter lead lists. We deploy targeted outbound systems, qualified engagement workflows, and revenue analytics built to fill your reps’ calendars with conversations worth having.
        </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm border border-outline-variant/20 mb-space-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg. Connect-to-Meeting</span>
<span className="font-headline-lg text-headline-lg text-primary mt-1">28.4%</span>
<span className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[16px]">trending_up</span> B2B ICP Verified
          </span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Lead Deliverability SLA</span>
<span className="font-headline-lg text-headline-lg text-primary mt-1">99.2%</span>
<span className="font-body-sm text-body-sm text-on-tertiary-container flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[16px]">verified</span> SPF / DKIM / DMARC
          </span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Show-Up Reliability</span>
<span className="font-headline-lg text-headline-lg text-primary mt-1">87%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Pre-call brief dossiers</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Time to First Meeting</span>
<span className="font-headline-lg text-headline-lg text-secondary mt-1">&lt; 14 Days</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Rapid Launch Sprint</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
<button className={activeFilter === "all" ? "px-space-md py-space-xs rounded-full bg-primary text-surface font-label-md text-label-md shadow-sm transition-all" : "px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md transition-all"} data-filter-btn="" data-target-filter="all" onClick={() => setActiveFilter("all")}>
          All Services
        </button>
<button className={activeFilter === "outbound" ? "px-space-md py-space-xs rounded-full bg-primary text-surface font-label-md text-label-md shadow-sm transition-all" : "px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md transition-all"} data-filter-btn="" data-target-filter="outbound" onClick={() => setActiveFilter("outbound")}>
          Targeted Outbound
        </button>
<button className={activeFilter === "qualification" ? "px-space-md py-space-xs rounded-full bg-primary text-surface font-label-md text-label-md shadow-sm transition-all" : "px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md transition-all"} data-filter-btn="" data-target-filter="qualification" onClick={() => setActiveFilter("qualification")}>
          Lead Qualification &amp; Handoff
        </button>
<button className={activeFilter === "analytics" ? "px-space-md py-space-xs rounded-full bg-primary text-surface font-label-md text-label-md shadow-sm transition-all" : "px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md transition-all"} data-filter-btn="" data-target-filter="analytics" onClick={() => setActiveFilter("analytics")}>
          Pipeline Analytics &amp; CRM Ops
        </button>
</div>
</div>
</section>

<section className="px-gutter py-space-xl max-w-7xl mx-auto w-full flex flex-col gap-space-xl">

<div className="flex flex-col lg:flex-row gap-space-lg items-stretch bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300" data-service-pillar="outbound" hidden={activeFilter !== "all" && activeFilter !== "outbound"}>
<div className="absolute top-0 left-0 w-1.5 h-full bg-secondary-container"></div>

<div className="lg:w-7/12 flex flex-col justify-between gap-space-md">
<div className="space-y-space-sm">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/15 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">outgoing_mail</span>
            SERVICE PILLAR 01
          </div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
            Outbound That Doesn’t Feel Robotic
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Standard cold email blasting is broken. Buyers recognize generic automation within 3 seconds. G2H crafts bespoke multi-channel sequences that respect your prospect's intellect, highlighting precise enterprise pain points using tiered intelligence.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container flex items-center justify-center text-[11px] font-bold">✓</span>
              ICP Tiering &amp; Account Scoring
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Segment accounts into Tier 1 (hyper-personalized), Tier 2 (persona-focused), and Tier 3 (automated baseline) for optimal resource allocation.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container flex items-center justify-center text-[11px] font-bold">✓</span>
              Secondary Domain Security
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Complete isolated domain configuration with SPF, DKIM, DMARC, and gentle warm-up sequences to permanently shield your primary brand domain.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container flex items-center justify-center text-[11px] font-bold">✓</span>
              Tri-Channel Orchestration
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Seamlessly blends hyper-relevant email hooks, authentic LinkedIn social touches, and targeted executive phone discovery.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container flex items-center justify-center text-[11px] font-bold">✓</span>
              Continuous A/B Variant Testing
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Multivariate experiments testing value-proposition hooks, subject lines, social triggers, and call-to-actions weekly.
            </p>
</div>
</div>

<div className="pt-space-xs border-t border-outline-variant/10">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Exact Deliverables Included:</p>
<div className="flex flex-wrap gap-2">
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">500–1,500 Verified Decision-Makers / Mo</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Dedicated Cold Inboxes &amp; DNS Setup</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Bi-Weekly Angle Re-scripting</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Spam Trap &amp; Bounce Auditing</span>
</div>
</div>
</div>

<div className="lg:w-5/12 flex flex-col justify-between bg-surface-container-high rounded-xl p-space-md border border-outline-variant/20">
<div className="flex items-center justify-between mb-space-sm pb-space-xs border-b border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<span className="font-headline-sm text-headline-sm text-primary">Live Multi-Touch Sequence Flow</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest px-2 py-0.5 rounded">Tier 1 Target</span>
</div>

<div className="space-y-space-sm flex-1 flex flex-col justify-center py-space-xs">

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest shadow-sm">
<div className="w-8 h-8 rounded-full bg-primary text-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">person_search</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="font-label-md text-label-md text-primary font-semibold">Day 1: Account Intent Research</p>
<span className="text-on-tertiary-container font-label-sm text-label-sm">Verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Executive trigger identified: 10-K cloud modernization initiative.</p>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest shadow-sm">
<div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">alternate_email</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="font-label-md text-label-md text-primary font-semibold">Day 2: Bespoke Value Email</p>
<span className="text-secondary font-label-sm text-label-sm">54% Open Rate</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Zero fluff. Concise 65-word peer reference and quantitative insight.</p>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest shadow-sm">
<div className="w-8 h-8 rounded-full bg-on-tertiary-container text-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">share</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="font-label-md text-label-md text-primary font-semibold">Day 5: Executive LinkedIn Touch</p>
<span className="text-primary font-label-sm text-label-sm">Soft Touch</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Thoughtful commentary on VP’s recent talk, reinforcing value proposition.</p>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest shadow-sm">
<div className="w-8 h-8 rounded-full bg-tertiary text-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">call</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="font-label-md text-label-md text-primary font-semibold">Day 8: Warm Calling Engagement</p>
<span className="text-secondary font-label-sm text-label-sm">Conversion</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Leveraging prior opens to engage in high-context objection handling.</p>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container text-primary flex items-center justify-between mt-space-sm">
<span className="font-body-sm text-body-sm font-semibold">Sequence Efficiency Score:</span>
<span className="font-headline-sm text-headline-sm text-secondary">94.8 / 100</span>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-space-lg items-stretch bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300" data-service-pillar="qualification" hidden={activeFilter !== "all" && activeFilter !== "qualification"}>
<div className="absolute top-0 left-0 w-1.5 h-full bg-on-tertiary-container"></div>

<div className="lg:w-5/12 flex flex-col justify-between bg-surface-container-high rounded-xl p-space-md border border-outline-variant/20 order-2 lg:order-1">
<div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
<span className="font-headline-sm text-headline-sm text-primary">Pre-Call Briefing Dossier</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container/20 px-2 py-0.5 rounded font-semibold">Ready for AE</span>
</div>
<div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm my-space-sm space-y-space-xs">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm text-headline-sm text-primary">Prospect: VP of Engineering</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">SaaS (550 headcount)</span>
</div>
<div className="text-body-sm text-on-surface-variant space-y-1">
<p className=""><strong className="text-primary">Stated Pain:</strong> Current CI/CD pipeline builds bottleneck weekly deployments by 14 hours.</p>
<p className=""><strong className="text-primary">Decision Authority:</strong> Budget holder for technical tooling; co-evaluating with Head of DevOps.</p>
<p className=""><strong className="text-primary">Timeline:</strong> Implementation needed prior to Q3 board milestone.</p>
<p className=""><strong className="text-primary">CRM Tagged:</strong> Salesforce Account ID #88921 synced with meeting link.</p>
</div>
</div>
<div className="p-space-sm rounded-lg bg-tertiary-container text-surface flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[24px] text-tertiary-fixed">verified_user</span>
<div>
<p className="font-label-md text-label-md text-tertiary-fixed font-bold">Zero-Leakage Assurance</p>
<p className="font-body-sm text-body-sm text-on-primary-container">Every reply is qualified, tracked, and confirmed to prevent missed opportunities.</p>
</div>
</div>
</div>

<div className="lg:w-7/12 flex flex-col justify-between gap-space-md order-1 lg:order-2">
<div className="space-y-space-sm">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-on-tertiary-container/15 text-on-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">how_to_reg</span>
            SERVICE PILLAR 02
          </div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
            Lead Management with Real Follow-Through
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            The biggest waste in sales development isn't outreach—it's warm replies that decay into radio silence because of sloppy handoffs. We police the critical bridge between a prospect’s initial curiosity and your account executive’s Zoom call.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center text-[11px] font-bold">✓</span>
              Strict Qualification Protocols
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Custom scoring aligned with your BANT, MEDDIC, or proprietary sales criteria. No "curious students" or unqualified vendors booked.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center text-[11px] font-bold">✓</span>
              Synchronized Round-Robin Calendars
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Direct calendar bookings directly into your AEs' native calendars according to territory, vertical, or availability constraints.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center text-[11px] font-bold">✓</span>
              Prospect Briefing Dossiers
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Every meeting is paired with complete transcript logs, tech stack observations, LinkedIn history, and specific business pain points.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center text-[11px] font-bold">✓</span>
              Reschedule &amp; Attendance Protection
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Automated multi-channel meeting reminders and immediate proactive rescheduling protocol when a prospect cannot attend.
            </p>
</div>
</div>
<div className="pt-space-xs border-t border-outline-variant/10">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Exact Deliverables Included:</p>
<div className="flex flex-wrap gap-2">
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Bespoke AE Briefing Dossiers</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Calendar Scheduling Integration</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">No-Show Recovery Sequence</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Direct CRM Contact Enrichment</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-space-lg items-stretch bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/15 relative overflow-hidden transition-all duration-300" data-service-pillar="analytics" hidden={activeFilter !== "all" && activeFilter !== "analytics"}>
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>

<div className="lg:w-7/12 flex flex-col justify-between gap-space-md">
<div className="space-y-space-sm">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">insights</span>
            SERVICE PILLAR 03
          </div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
            Revenue Intelligence &amp; Continuous Optimization
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Lead generation shouldn’t be a black box where you wonder why campaigns spiked or stalled. We conduct structured weekly reviews, unpack prospect sentiment at the sub-industry level, and turn market feedback into messaging assets.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-primary text-surface flex items-center justify-center text-[11px] font-bold">✓</span>
              Weekly Live Pipeline Cadence
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Direct recurring syncs reviewing positive replies, qualified meetings, show rates, and pipeline progression by segment.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-primary text-surface flex items-center justify-center text-[11px] font-bold">✓</span>
              Objection &amp; Sentiment Tagging
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Every pushback is categorized (timing, budget, competitor, incumbent) so your product and marketing teams receive verbatim market signals.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-primary text-surface flex items-center justify-center text-[11px] font-bold">✓</span>
              Persona &amp; Sector Attribution
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Identify clearly which job titles and revenue brackets convert into actual enterprise revenue, not just soft vanity clicks.
            </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1">
<div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
<span className="w-5 h-5 rounded-full bg-primary text-surface flex items-center justify-center text-[11px] font-bold">✓</span>
              Dynamic Playbook Evolution
            </div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Bi-weekly messaging updates retiring stale sequence copy and doubling down on emerging customer triggers.
            </p>
</div>
</div>
<div className="pt-space-xs border-t border-outline-variant/10">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Exact Deliverables Included:</p>
<div className="flex flex-wrap gap-2">
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Executive Notion/Slack Dashboard</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Monthly Market Sentiment Audit</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Predictive Pipeline Run-Rate Modeling</span>
<span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm">Clean CRM Opportunity Syncing</span>
</div>
</div>
</div>

<div className="lg:w-5/12 flex flex-col justify-between bg-surface-container-high rounded-xl p-space-md border border-outline-variant/20">
<div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="font-headline-sm text-headline-sm text-primary">Cohort Conversion Pulse</span>
</div>
<span className="font-label-sm text-label-sm text-on-tertiary-container bg-tertiary-fixed/20 px-2 py-0.5 rounded font-semibold">+34% vs Last Month</span>
</div>
<div className="my-space-sm space-y-space-sm">

<div>
<div className="flex justify-between font-label-sm text-label-sm text-primary mb-1">
<span className="">Enterprise FinTech (CFO / VP Finance)</span>
<span className="font-bold">4.2% Booked Rate</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-secondary-container rounded-full" style={{ width: "82%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between font-label-sm text-label-sm text-primary mb-1">
<span className="">B2B Cloud Infrastructure (VP DevOps)</span>
<span className="font-bold">3.8% Booked Rate</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-on-tertiary-container rounded-full" style={{ width: "74%" }}></div>
</div>
</div>

<div>
<div className="flex justify-between font-label-sm text-label-sm text-primary mb-1">
<span className="">Supply Chain &amp; Logistics (COO / VP Ops)</span>
<span className="font-bold">2.9% Booked Rate</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{ width: "58%" }}></div>
</div>
</div>

<div className="p-space-sm bg-surface-container-lowest rounded-lg shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Qualified Pipeline Val.</span>
<span className="font-headline-sm text-headline-sm text-primary">$1,420,000</span>
</div>
<svg className="w-28 h-10 text-secondary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 100 35">
<path d="M0 30 Q 20 28, 35 18 T 65 12 T 100 4"></path>
</svg>
</div>
</div>
<div className="p-space-xs rounded bg-surface-container text-on-surface-variant text-center font-body-sm text-body-sm">
          Updated in real-time across synced CRM pipelines.
        </div>
</div>
</div>
</section>

<section className="px-gutter py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto w-full">
<div className="text-center max-w-2xl mx-auto mb-space-lg space-y-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-tertiary-container/10 text-on-tertiary-container font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px]">sync_alt</span>
          PLUG-AND-PLAY INTEGRATION
        </div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
          Works seamlessly with your existing revenue stack.
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          No new complex platforms to learn. We pipe verified meetings, contact intelligence, and conversation transcripts directly into your native tools.
        </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-space-sm">
<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-space-xs group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-[26px]">cloud</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary text-center">Salesforce</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Bi-directional CRM</span>
</div>
<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-space-xs group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary text-[26px]">hub</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary text-center">HubSpot</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Custom Stage Sync</span>
</div>
<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-space-xs group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-on-tertiary-container text-[26px]">forward_to_inbox</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary text-center">Salesloft</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Cadence Handover</span>
</div>
<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-space-xs group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-[26px]">campaign</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary text-center">Outreach</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Workflow Routing</span>
</div>
<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-space-xs group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary text-[26px]">rocket_launch</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary text-center">Apollo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Verified Sourcing</span>
</div>
<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-space-xs group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-on-tertiary-container text-[26px]">chat</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary text-center">Slack</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Realtime Lead Alerts</span>
</div>
<div className="flex flex-col items-center justify-center p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-space-xs group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-[26px]">database</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary text-center">ZoomInfo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Org Chart Depth</span>
</div>
</div>
</div>
</section>

<section className="px-gutter py-space-xl max-w-7xl mx-auto w-full">
<div className="max-w-3xl mb-space-lg space-y-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/15 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px]">timeline</span>
        PREDICTABLE DELIVERY LIFECYCLE
      </div>
<h2 className="font-headline-xl text-headline-xl text-primary tracking-tight">
        How we partner: 3 structured phases to pipeline velocity.
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
        No 12-month lock-in contracts. We prove commercial value fast, systematically validating messaging before compounding top-of-funnel output.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/15 flex flex-col justify-between relative overflow-hidden">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm bg-secondary-container/20 text-secondary px-space-xs py-0.5 rounded font-bold">WEEKS 1–2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Setup &amp; Foundations</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">Launch Sprint</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Technical setup, ICP deep dive, domain configurations, and copy blueprinting to guarantee zero bounce rates from day one.
          </p>
<ul className="space-y-2 pt-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center text-[10px]">✓</span>
              Dedicated sending infrastructure setup
            </li>
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center text-[10px]">✓</span>
              Initial 1,000 verified account target list
            </li>
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center text-[10px]">✓</span>
              Approval on 3 tailored sequence angles
            </li>
</ul>
</div>
<div className="mt-space-md pt-space-sm border-t border-outline-variant/10 font-label-sm text-label-sm text-on-surface-variant">
          Focus: Foundation, deliverability &amp; alignment.
        </div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md border-2 border-primary/20 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 bg-primary text-surface font-label-sm text-label-sm px-space-sm py-1 rounded-bl">
          CORE PHASE
        </div>
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm bg-primary text-surface px-space-xs py-0.5 rounded font-bold">MONTHS 1–3</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Validation &amp; Meetings</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">Execute &amp; Optimize</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Campaign activation across channels. Real conversations start, meetings hit your team's calendars, and message testing isolates high-yield hooks.
          </p>
<ul className="space-y-2 pt-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-on-tertiary-container/20 text-on-tertiary-container flex items-center justify-center text-[10px]">✓</span>
              Active multi-channel outreach live in market
            </li>
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-on-tertiary-container/20 text-on-tertiary-container flex items-center justify-center text-[10px]">✓</span>
              Weekly pipeline syncs &amp; objection mapping
            </li>
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-on-tertiary-container/20 text-on-tertiary-container flex items-center justify-center text-[10px]">✓</span>
              Rigorous prospect qualification before handoff
            </li>
</ul>
</div>
<div className="mt-space-md pt-space-sm border-t border-outline-variant/10 font-label-sm text-label-sm text-primary font-semibold">
          Focus: Consistent qualified meeting flow.
        </div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/15 flex flex-col justify-between relative overflow-hidden">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm bg-on-tertiary-container/20 text-on-tertiary-container px-space-xs py-0.5 rounded font-bold">MONTHS 3–6+</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Compounding Value</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">Scale &amp; Compound</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Expand into secondary verticals, international regions, or adjacent buyer personas with hardened, high-converting playbooks.
          </p>
<ul className="space-y-2 pt-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px]">✓</span>
              Increased account volume with zero quality drop
            </li>
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px]">✓</span>
              TAM expansion into new geographies / sub-niches
            </li>
<li className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px]">✓</span>
              Predictable CAC and pipeline forecasting
            </li>
</ul>
</div>
<div className="mt-space-md pt-space-sm border-t border-outline-variant/10 font-label-sm text-label-sm text-on-surface-variant">
          Focus: Maximum enterprise revenue efficiency.
        </div>
</div>
</div>
</section>

<section className="px-gutter py-space-xl bg-primary text-surface relative overflow-hidden">

<div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-container/20 blur-[100px] pointer-events-none"></div>
<div className="absolute left-10 top-0 w-80 h-80 rounded-full bg-tertiary-fixed-dim/10 blur-[90px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto w-full relative z-10 text-center flex flex-col items-center gap-space-md">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px]">verified</span>
        NO LONG-TERM CONTRACTS • PERFORMANCE-ALIGNED
      </div>
<h2 className="font-headline-2xl text-headline-2xl text-surface tracking-tight max-w-3xl">
        Ready to build a reliable outbound engine?
      </h2>
<p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
        Book your strategic pipeline consultation today. We’ll review your target accounts, evaluate your current deliverability setup, and map out a bespoke roadmap.
      </p>
<div className="flex flex-col sm:flex-row items-center gap-space-sm pt-space-xs">
<Link className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-secondary-container text-primary font-headline-sm text-label-md hover:brightness-105 active:scale-95 transition-all shadow-[0_8px_24px_rgba(254,152,50,0.35)]" to="/contact">
<span className="">Book a Strategy Call</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<a className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-lowest/10 text-surface hover:bg-surface-container-lowest/20 font-headline-sm text-label-md transition-all border border-surface/20" href="mailto:hello@g2hsolutions.com?subject=Request%20the%20G2H%20overview">
<span className="material-symbols-outlined text-[18px]">download</span>
<span className="">Request Overview (PPTX)</span>
</a>
</div>
<div className="flex items-center gap-space-md text-on-primary-container font-label-sm text-label-sm pt-space-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span> 30-Minute Executive Session</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span> ICP Benchmark Included</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span> Zero Sales Pressure</span>
</div>
</div>
</section>
</div>
    </main>
  );
}
