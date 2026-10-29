export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      {/* Harsh owns STM-16: contact form implementation. Do not replace this handoff
          placeholder until the team agrees how to integrate his work. */}
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center sm:p-12">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-700" aria-hidden="true">✉</span>
        <p className="mt-5 text-sm font-bold uppercase tracking-widest text-blue-700">Contact</p>
        <h1 className="mt-2 text-3xl font-bold">We'd love to hear from you.</h1>
        <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">The contact form will be integrated after its implementation task is completed. Tejas will then test submission and validation under STM-17.</p>
        <p className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500">Team handoff placeholder — not the final contact form.</p>
      </div>
    </section>
  );
}
