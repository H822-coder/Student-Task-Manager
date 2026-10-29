import {useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [message, setMessage] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const newErrors: Record<string, string> = {};

      if (!name.trim()) {
        newErrors.name = "Full name is required.";
      } else if (name.trim().length < 2 || /\d/.test(name)) {
        newErrors.name = "Enter a valid full name.";
      }

      if (!email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        newErrors.email = "Enter a valid email address.";
      }

      if (!password) {
        newErrors.password = "Password is required.";
      } else if (
        password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password)
      ) {
        newErrors.password =
        "Use 8+ characters with uppercase, lowercase and a number.";
      }

      setErrors(newErrors);
      setMessage("");

      if (Object.keys(newErrors).length === 0) {
        setMessage(
          "Validation successful. Account creation requires backend integration."
      );
   }
 }
    <section className="mx-auto grid min-h-[65vh] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
      <div className="hidden rounded-3xl bg-blue-600 p-10 text-white lg:block">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">Get organized</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight">Make space for your next big thing.</h1>
        <p className="mt-4 max-w-md leading-7 text-blue-100">Create your student account to get started with a more organized semester.</p>
        <div className="mt-10 rounded-2xl bg-white/10 p-5"><p className="text-lg font-semibold">One place for your plans.</p><p className="mt-1 text-sm text-blue-100">Your goals start with a clear next step.</p></div>
      </div>
      <div className="mx-auto w-full max-w-md">
        {/* STM-6: UI only. Thalesh owns registration logic and validation in STM-7. */}
        <p className="text-sm font-semibold text-blue-700">CREATE YOUR ACCOUNT</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Join Student Task Manager</h2>
        <p className="mt-2 text-slate-600">Enter your details to get started.</p>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div><label htmlFor="register-name" className="mb-2 block text-sm font-medium text-slate-700">Full name</label><input id="register-name" name="name" type="text" autoComplete="name" placeholder="Your full name" value={name} onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: "" })); setMessage(""); }} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />{errors.name && ( <p className="mt-2 text-sm text-red-600">{errors.name}</p> )}</div>
          <div><label htmlFor="register-email" className="mb-2 block text-sm font-medium text-slate-700"> Email address </label> <input id="register-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: "" })); setMessage(""); }} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /> {errors.email && <p className="mt-2 text-sm text-red-600"> {errors.email} </p )} </div>
          <div><label htmlFor="register-password" className="mb-2 block text-sm font-medium text-slate-700">Password</label><input id="register-password" name="password" type="password" autoComplete="new-password" placeholder="Create a password" value={password} onChange={(e) => { setPassword(e.target.value); setErrors((prev) => ({ ...prev, password: "" })); setMessage(""); }} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /><p className="mt-2 text-xs text-slate-500">Use at least 8 characters, including uppercase, lowercase and a number.</p>{errors.password && (<p className="mt-2 text-sm text-red-600">{errors.password}</p>)}</div>
          <button type="submit" className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">Create account</button>{message && <p className="rounded-xl bg-green-50 p-3 text-sm text-green-800">{message}</p>}</form>
        <p className="mt-6 text-center text-sm text-slate-600">Already registered? <Link to="/login" className="font-semibold text-blue-700 hover:text-blue-800">Log in</Link></p>
      </div>
    </section>
  );
}
