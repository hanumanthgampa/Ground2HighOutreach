import { useEffect, useRef, useState, type FormEvent } from "react";

const meetingTimeZone = "Asia/Singapore";
const meetingSlots = ["10:00 AM", "1:30 PM", "3:00 PM"];
const singaporeDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: meetingTimeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function getSingaporeDateKey(date = new Date()) {
  const parts = singaporeDateFormatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;
  return `${year}-${month}-${day}`;
}

function dateFromKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function dateKeyFromDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(dateKey: string, days: number) {
  const date = dateFromKey(dateKey);
  date.setUTCDate(date.getUTCDate() + days);
  return dateKeyFromDate(date);
}

function monthStart(date: Date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}

function monthKey(date: Date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

function formatCalendarDate(dateKey: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-SG", { ...options, timeZone: "UTC" }).format(
    dateFromKey(dateKey),
  );
}

function getCalendarCells(month: Date) {
  const year = month.getUTCFullYear();
  const monthIndex = month.getUTCMonth();
  const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  const mondayOffset = (new Date(Date.UTC(year, monthIndex, 1)).getUTCDay() + 6) % 7;
  const cells: Array<{ dateKey: string; day: number } | null> = Array(mondayOffset).fill(null);

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({
      dateKey: dateKeyFromDate(new Date(Date.UTC(year, monthIndex, day))),
      day,
    });
  }

  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function ContactPage() {
  const [todayDateKey] = useState(getSingaporeDateKey);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [calendarMonth, setCalendarMonth] = useState(() =>
    monthStart(dateFromKey(getSingaporeDateKey())),
  );
  const [meetingPreferenceAdded, setMeetingPreferenceAdded] = useState(false);
  const maxDateKey = addDays(todayDateKey, 90);
  const calendarCells = getCalendarCells(calendarMonth);
  const earliestMonth = monthStart(dateFromKey(todayDateKey));
  const latestMonth = monthStart(dateFromKey(maxDateKey));
  const canGoToPreviousMonth = monthKey(calendarMonth) > monthKey(earliestMonth);
  const canGoToNextMonth = monthKey(calendarMonth) < monthKey(latestMonth);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const changeCalendarMonth = (monthOffset: number) => {
    const nextMonth = new Date(
      Date.UTC(
        calendarMonth.getUTCFullYear(),
        calendarMonth.getUTCMonth() + monthOffset,
        1,
      ),
    );
    setCalendarMonth(nextMonth);
    if (selectedDate && monthKey(dateFromKey(selectedDate)) !== monthKey(nextMonth)) {
      setSelectedDate("");
      setSelectedSlot("");
      setMeetingPreferenceAdded(false);
    }
  };
  const addMeetingPreferenceToRequest = () => {
    setMeetingPreferenceAdded(true);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitError("The contact form is not configured yet. Please email us directly.");
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...Object.fromEntries(formData.entries()),
          timezone: "Singapore Time (SGT / MYT, UTC+8)",
          subject: "New G2H Outreach contact request",
          from_name: "G2H Outreach Website",
        }),
      });
      const result: unknown = await response.json();
      const succeeded =
        typeof result === "object" &&
        result !== null &&
        "success" in result &&
        result.success === true;
      const providerMessage =
        typeof result === "object" &&
        result !== null &&
        "message" in result &&
        typeof result.message === "string"
          ? result.message
          : "";

      if (!response.ok || !succeeded) {
        setSubmitError(providerMessage || "We couldn't send your request. Please try again.");
        return;
      }

      formRef.current?.reset();
      setShowSuccessToast(true);
    } catch (error: unknown) {
      setSubmitError(
        error instanceof TypeError
          ? "We couldn't connect to the form service. Please try again."
          : "We received an unreadable response from the form service. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    if (!showSuccessToast) return;

    const timeoutId = window.setTimeout(() => setShowSuccessToast(false), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [showSuccessToast]);

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      {showSuccessToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/35 p-4 backdrop-blur-sm">
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-white via-[#fff8ee] to-[#fff0dc] px-7 py-10 text-center shadow-[0_24px_80px_rgba(4,21,52,0.28)] sm:px-12 sm:py-14"
            role="status"
            aria-live="polite"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary-container/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-tertiary-container/20 blur-3xl" />
            <button
              className="absolute right-4 top-4 rounded-full p-2 text-on-surface-variant transition-colors hover:bg-primary/5"
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setShowSuccessToast(false)}
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                close
              </span>
            </button>
            <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#fe9832] to-[#ffbd66] text-white shadow-lg shadow-[#fe9832]/30">
              <span className="material-symbols-outlined text-[44px]" aria-hidden="true">
                check
              </span>
            </div>
            <p className="relative mb-2 font-label-sm text-label-sm font-bold uppercase tracking-[0.2em] text-secondary">
              Message delivered
            </p>
            <h2 className="relative font-headline-xl text-headline-xl text-primary">
              Thank you for reaching out!
            </h2>
            <p className="relative mx-auto mt-3 max-w-sm font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Your request has been sent. If you included a preferred time, our team will confirm availability by email.
            </p>
          </div>
        </div>
      )}
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
<p className="font-body-sm text-body-sm text-on-surface-variant">Choose a preferred time. We’ll confirm availability by email.</p>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm uppercase font-semibold">30 Min</span>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm">
<div className="flex items-center justify-between mb-space-xs px-1">
<span className="font-headline-sm text-headline-sm text-primary" aria-live="polite">
  {new Intl.DateTimeFormat("en-SG", { month: "long", year: "numeric", timeZone: "UTC" }).format(calendarMonth)}
</span>
<div className="flex items-center gap-1 text-on-surface-variant">
<button
  aria-label="Previous Month"
  className="p-1 rounded hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
  disabled={!canGoToPreviousMonth}
  onClick={() => changeCalendarMonth(-1)}
  type="button"
>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button
  aria-label="Next Month"
  className="p-1 rounded hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
  disabled={!canGoToNextMonth}
  onClick={() => changeCalendarMonth(1)}
  type="button"
>
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-1 text-center font-label-sm text-label-sm mb-1 text-on-surface-variant/70">
<span className="">Mo</span><span className="">Tu</span><span className="">We</span><span className="">Th</span><span className="">Fr</span><span className="">Sa</span><span className="">Su</span>
</div>
<div className="grid grid-cols-7 gap-1 text-center font-label-md text-label-md" id="calendarDays">
{calendarCells.map((cell, index) => {
  if (!cell) return <span aria-hidden="true" className="py-1" key={`empty-${index}`} />;
  const weekday = dateFromKey(cell.dateKey).getUTCDay();
  const unavailable =
    cell.dateKey <= todayDateKey ||
    cell.dateKey > maxDateKey ||
    weekday === 0 ||
    weekday === 6;
  const isSelected = selectedDate === cell.dateKey;

  return (
    <button
      aria-label={formatCalendarDate(cell.dateKey, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
      aria-pressed={isSelected}
      className={
        isSelected
          ? "py-1 rounded bg-primary text-on-primary font-semibold shadow-sm"
          : "py-1 rounded hover:bg-surface-container-high transition-colors disabled:text-on-surface-variant/30 disabled:hover:bg-transparent disabled:cursor-not-allowed"
      }
      disabled={unavailable}
      key={cell.dateKey}
      onClick={() => {
        setSelectedDate(cell.dateKey);
        setSelectedSlot("");
        setMeetingPreferenceAdded(false);
      }}
      type="button"
    >
      {cell.day}
    </button>
  );
})}
</div>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
  {selectedDate ? `Preferred time (${formatCalendarDate(selectedDate, { weekday: "short", day: "numeric", month: "short" })})` : "Select a date first"}
</label>
<span className="font-label-sm text-label-sm text-secondary font-medium">SGT / MYT (UTC+8)</span>
</div>
<div className="grid grid-cols-3 gap-2" id="slotPicker">
{meetingSlots.map((slot) => (
  <button
    aria-pressed={selectedSlot === slot}
    className={
      selectedSlot === slot
        ? "py-2 px-1 text-center rounded-lg bg-secondary-container text-primary font-label-md text-label-md font-bold shadow-sm ring-2 ring-secondary-container"
        : "py-2 px-1 text-center rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all active:scale-95 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
    }
    disabled={!selectedDate}
    key={slot}
    onClick={() => {
      setSelectedSlot(slot);
      setMeetingPreferenceAdded(false);
    }}
    type="button"
  >
    {slot}
  </button>
))}
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
  This is a preferred time request, not a confirmed booking.
</p>
</div>

<button
  className="w-full py-3 rounded-full bg-secondary-container text-primary font-headline-sm text-label-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(254,152,50,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={!selectedDate || !selectedSlot}
  onClick={addMeetingPreferenceToRequest}
  type="button"
>
<span>{meetingPreferenceAdded ? "Preferred Time Added" : "Add Preferred Time to Request"}</span>
<span className="material-symbols-outlined text-[18px]">{meetingPreferenceAdded ? "check_circle" : "calendar_add_on"}</span>
</button>
{meetingPreferenceAdded && (
  <p className="font-body-sm text-body-sm text-secondary text-center" role="status">
    {formatCalendarDate(selectedDate, { weekday: "long", day: "numeric", month: "long", year: "numeric" })} at {selectedSlot} SGT / MYT added to your request.
  </p>
)}
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
<a className="text-primary font-semibold hover:text-secondary transition-colors truncate block" href="mailto:sales@g2houtreach.com">sales@g2houtreach.com</a>
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
<p className="text-primary font-semibold">Singapore, Malaysia &amp; Global Coverage</p>
</div>
</div>
</div>

</div>

<div className="relative rounded-xl overflow-hidden shadow-lg h-48 bg-primary">
<img alt="Executives discussing business growth in a modern boardroom" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-500" src="/images/contact-boardroom.webp" width="512" height="279" loading="lazy" decoding="async" />
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
<h2 className="font-headline-lg text-headline-lg text-primary mt-1">Tell us about your ICP target.</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Provide basic details on your ICP and revenue goals. We’ll review account feasibility before we get on the phone.
              </p>
</div>

<form className="space-y-space-md" id="contactScopingForm" ref={formRef} onSubmit={handleSubmit}>
<input className="hidden" name="botcheck" tabIndex={-1} type="checkbox" />
<input
  name="preferred_meeting_date"
  type="hidden"
  value={
    meetingPreferenceAdded
      ? formatCalendarDate(selectedDate, {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Not requested"
  }
/>
<input
  name="preferred_meeting_time"
  type="hidden"
  value={meetingPreferenceAdded ? selectedSlot : "Not requested"}
/>
<input name="preferred_meeting_timezone" type="hidden" value="Singapore Time (SGT / MYT, UTC+8)" />
{meetingPreferenceAdded && (
  <div className="rounded-lg bg-secondary-container/20 px-space-sm py-2 text-primary font-body-sm text-body-sm" role="status">
    Preferred call time: {formatCalendarDate(selectedDate, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })} at {selectedSlot} SGT / MYT. We’ll confirm availability after receiving your request.
  </div>
)}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="fullName">
                    Full Name <span className="text-error">*</span>
</label>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="fullName" name="name" placeholder="e.g. Jordan Miller" required type="text" />
</div>
<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="businessEmail">
                    Business Email <span className="text-error">*</span>
</label>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="businessEmail" name="email" placeholder="jordan@company.com" required type="email" />
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="companyName">
                    Company Name <span className="text-error">*</span>
</label>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="companyName" name="company" placeholder="Acme Technologies" required type="text" />
</div>
<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="websiteUrl">
                    Website URL
                  </label>
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="websiteUrl" name="website" placeholder="https://acme.io" type="url" />
</div>
</div>

<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="meetingTarget">
                  Current Monthly Qualified Meetings Goal <span className="text-error">*</span>
</label>
<div className="relative">
<select defaultValue="" className="w-full appearance-none px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all pr-10 cursor-pointer" id="meetingTarget" name="meetings_goal" required>
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
<input className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all" id="targetIcp" name="target_market" placeholder="Who are your ideal buyers? Industries, job titles, geography" type="text" />
</div>



<div className="space-y-1">
<label className="block font-label-md text-label-md text-primary font-semibold" htmlFor="formMessage">
                  Specific Outbound Requirements or Context
                </label>
<textarea className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container-low text-primary font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface focus:shadow-[0_0_0_2px_#fe9832] transition-all resize-y" id="formMessage" name="message" placeholder="Tell us about your average deal size, past outbound tests, or specific timeline constraints..." rows={3}></textarea>
</div>

{submitError && (
  <p className="font-body-sm text-body-sm text-error" role="alert">
    {submitError}
  </p>
)}
<div className="pt-2">
<button className="w-full py-3.5 px-space-md rounded-full bg-secondary-container text-primary font-headline-sm text-headline-sm hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-space-xs shadow-[0_10px_25px_rgba(254,152,50,0.32)] disabled:cursor-wait disabled:opacity-60" disabled={isSubmitting} type="submit">
<span className="">{isSubmitting ? "Sending your request..." : "Submit & Request Strategy Session"}</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>

<p className="font-body-sm text-body-sm text-center text-on-surface-variant/80">
                We’ll use your details to review your request and get back to you.
              </p>
</form>

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
<span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">Discovery Call</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Availability &amp; Exploration Call</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Based on your availability, we schedule a discovery call to connect, understand your current scenario, and identify potential areas where we can collaborate.
              </p>
</div>
<div className="mt-space-sm pt-space-sm flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="">Mutual Alignment Check</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md relative overflow-hidden flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-2xl text-headline-2xl text-secondary/20 font-black leading-none">02</span>
<span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">Kick-Off</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Kick-Off Meeting</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Once you are ready to move forward, we align on service terms and dive into your requirements to thoroughly understand your buyers’ pain points.
              </p>
</div>
<div className="mt-space-sm pt-space-sm flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">analytics</span>
<span className="">Requirement Blueprint</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md relative overflow-hidden flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-headline-2xl text-headline-2xl text-primary/10 font-black leading-none">03</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">&lt; 20 Days</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Project Onboarding</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                As soon as you agree to our terms, we fast-track your onboarding and start generating high-quality, qualified meetings in less than 20 days.
              </p>
</div>
<div className="mt-space-sm pt-space-sm flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="">Swift Meeting Generation</span>
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
            — VP of Sales, B2B SaaS Enterprise Client (Singapore &amp; Malaysia)
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-sm flex-shrink-0 w-full sm:w-auto">
<a className="w-full sm:w-auto px-space-md py-2.5 rounded-full bg-surface-container-low text-primary font-headline-sm text-label-md hover:bg-surface transition-all text-center" href="mailto:sales@g2houtreach.com">
            Email Us Directly
          </a>
</div>
</div>
</div>
</section>


</div>
    </main>
  );
}
