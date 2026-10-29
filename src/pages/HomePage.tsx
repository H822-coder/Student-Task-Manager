import { Link } from "react-router-dom";

const features = [
  { number: "01", title: "Know what matters", description: "Keep coursework, deadlines, and personal goals in one organized place." },
  { number: "02", title: "Plan your next step", description: "Break bigger assignments into smaller actions you can complete." },
  { number: "03", title: "Build steady habits", description: "Make progress visible and celebrate the work you finish." },
];

export default function HomePage() {
  return (
    <div>
      {/* STM-13: responsive homepage implementation by Tejas.
          Coordinate the visual direction with Harsh, who owns the homepage design task STM-12. */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">A calmer way to study</span>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your semester, <span className="text-blue-600">under control.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Organize your tasks, stay aware of deadlines, and make progress one step at a time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/register" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700">Create an account <span className="ml-2" aria-hidden="true">→</span></Link>
              <Link to="/login" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">I already have an account</Link>
            </div>
            <p className="mt-4 text-xs text-slate-500">A student project designed around simple, practical organization.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div><p className="text-sm font-semibold text-slate-500">YOUR WEEK</p><h2 className="mt-1 text-xl font-bold">Small steps add up</h2></div>
              <span className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">Preview</span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { label: "Review lecture notes", detail: "Today · 30 min", done: true },
                { label: "Prepare project outline", detail: "Tomorrow · 45 min", done: false },
                { label: "Practice coding problems", detail: "Friday · 1 hour", done: false },
              ].map((task) => (
                <div key={task.label} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${task.done ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 bg-white"}`} aria-hidden="true">{task.done ? "✓" : ""}</span>
                  <div className="min-w-0 flex-1"><p className={`truncate text-sm font-semibold ${task.done ? "text-slate-500 line-through" : "text-slate-800"}`}>{task.label}</p><p className="mt-1 text-xs text-slate-500">{task.detail}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-blue-600 p-5 text-white">
              <p className="text-sm text-blue-100">A little progress is still progress.</p>
              <p className="mt-1 text-2xl font-bold">One task at a time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-wider text-blue-700">Designed for students</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Less juggling. More learning.</h2><p className="mt-3 leading-7 text-slate-600">A simple starting point for keeping your academic life organized.</p></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {features.map((feature) => <article key={feature.number} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-md"><p className="text-sm font-bold text-blue-600">{feature.number}</p><h3 className="mt-4 text-lg font-bold">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>)}
          </div>
        </div>
      </section>
    </div>
  );
}
