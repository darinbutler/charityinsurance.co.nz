'use client';

import { useRef, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import TurnstileWidget, { type TurnstileHandle } from './TurnstileWidget';

interface QuoteFormProps {
  compact?: boolean;
  orgType?: string;
}

export default function QuoteForm({ compact = false, orgType = '' }: QuoteFormProps) {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileHandle>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });
    setSubmitting(true);
    const cfToken = await turnstileRef.current?.execute();
    if (!cfToken) {
      setSubmitting(false);
      setError('Security check could not complete. Please try again.');
      return;
    }
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, cfTurnstileToken: cfToken }),
      });
      if (!res.ok) throw new Error('Submission failed');
      router.push('/thank-you/');
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="_subject" value="New Charity Insurance Quote — CharityInsurance.co.nz" />
        {orgType && <input type="hidden" name="org_type" value={orgType} />}
        <input type="text" name="name" required placeholder="Your name" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
        <input type="text" name="organisation" required placeholder="Organisation name" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
        <input type="email" name="email" required placeholder="Email address" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
        <input type="tel" pattern="[+]?[0-9\s\-().]{6,}" title="Please enter a valid phone number" minLength={6} name="phone" placeholder="Phone (optional)" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
        <TurnstileWidget ref={turnstileRef} />
        {error && <p className="text-xs bg-red-50 text-red-700 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
        <button type="submit" disabled={submitting} className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 disabled:opacity-60 transition text-sm">
          {submitting ? 'Sending…' : 'Get My Quote →'}
        </button>
        <p className="text-xs text-slate-500 text-center">No obligation. Brokers we personally know and trust.</p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-emerald-100 p-8 shadow-lg">
      <h3 className="text-xl font-bold text-slate-900 mb-2">Tell us about your organisation</h3>
      <p className="text-slate-500 text-sm mb-6">The more you share, the better we can match you. Plain-English options back within one business day — no hard sell, ever.</p>
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="New Charity Insurance Quote — CharityInsurance.co.nz" />
      {orgType && <input type="hidden" name="org_type" value={orgType} />}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name *</label>
          <input type="text" name="name" required placeholder="Jane Smith" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Organisation Name *</label>
          <input type="text" name="organisation" required placeholder="Hillside Community Trust" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address *</label>
          <input type="email" name="email" required placeholder="jane@hillsidetrust.org.nz" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
          <input type="tel" pattern="[+]?[0-9\s\-().]{6,}" title="Please enter a valid phone number" minLength={6} name="phone" placeholder="021 123 4567" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Organisation Type</label>
          <select name="org_type_select" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
            <option value="">Select type</option>
            <option>Registered Charity</option>
            <option>Sports Club / Association</option>
            <option>Church / Religious Organisation</option>
            <option>Community Group / Trust</option>
            <option>School / Education Board</option>
            <option>Aged Care Organisation</option>
            <option>Social Services</option>
            <option>Arts & Culture Organisation</option>
            <option>Environmental / Conservation Group</option>
            <option>Youth Organisation</option>
            <option>Animal Welfare Charity</option>
            <option>Disability Support Organisation</option>
            <option>Marae / Iwi Trust</option>
            <option>Foundation / Philanthropic Trust</option>
            <option>Other Not-for-Profit</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Annual Revenue (approx.)</label>
          <select name="revenue" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
            <option value="">Select range</option>
            <option>Under $100K</option>
            <option>$100K – $500K</option>
            <option>$500K – $2M</option>
            <option>$2M – $5M</option>
            <option>$5M+</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Cover You're Interested In</label>
        <select name="cover_interest" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
          <option value="">Select primary cover</option>
          <option>Public Liability</option>
          <option>Trustee / D&O Liability</option>
          <option>Volunteer Personal Accident</option>
          <option>Professional Indemnity</option>
          <option>Full Package (multiple covers)</option>
          <option>Not sure — need advice</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Current Insurance Status</label>
        <select name="current_cover" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
          <option value="">Select one</option>
          <option>No current cover — looking for first policy</option>
          <option>Yes, looking to compare / switch</option>
          <option>Yes, policy renewing soon</option>
          <option>Unsure what we currently have</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Anything else we should know?</label>
        <textarea name="message" rows={3} placeholder="e.g. main activities, number of volunteers, buildings or assets you need covered..." className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none" />
      </div>
      <TurnstileWidget ref={turnstileRef} />
      {error && <p className="text-sm bg-red-50 text-red-700 border border-red-200 rounded-lg px-3 py-2 mb-3">{error}</p>}
      <button type="submit" disabled={submitting} className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 disabled:opacity-60 transition text-lg">
        {submitting ? 'Sending…' : "Let's Sort Your Cover →"}
      </button>
      <p className="text-sm text-slate-500 mt-3 text-center">No obligation. Your details go to a broker we personally know and trust — back within one business day.</p>
    </form>
  );
}
