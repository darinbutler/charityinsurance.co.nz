import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About CharityInsurance.co.nz | Specialist NFP Insurance',
  description: 'CharityInsurance.co.nz is a specialist insurance comparison and broker referral service for NZ charities, sports clubs, churches, and community organisations. NZ owned and operated.',
  alternates: { canonical: 'https://www.charityinsurance.co.nz/about/' },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[580px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-24 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">About CharityInsurance.co.nz</h1>
          <p className="text-slate-200 text-lg">Making specialist insurance accessible for every charity and not-for-profit — without the complexity.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <h2>Who We Are</h2>
          <p>CharityInsurance.co.nz is a specialist insurance comparison and broker referral service for New Zealand charities, not-for-profits, sports clubs, churches, community groups, and incorporated societies. We are operated by Cover4You — a trading style of GDS, NZ owned and operated.</p>
          <p>We exist because the not-for-profit sector is systematically underinsured. Finding the right cover has traditionally meant navigating a complex market designed for large commercial organisations — not the charities, clubs, and community groups that actually need it most.</p>

          <h2>What We Do — and Why It Saves You Time and Money</h2>
          <p>We do the hard work of comparing the market for you. When you submit an enquiry through CharityInsurance.co.nz, your details are assessed by licensed insurance advisors who specialise in the not-for-profit sector. They compare policies from our panel — including Chubb, AIG, Zurich, Berkley Insurance, Concordia Underwriting, and other specialist charity underwriters — and present you with tailored options in plain, jargon-free language.</p>
          <p>We also personally vet the brokers we recommend. Not every broker who sells insurance understands the charity sector deeply — we only work with advisors who do. That's how we consistently find better cover at better prices than organisations find on their own.</p>

          <h2>The Sector We Serve</h2>
          <p>New Zealand has over 29,000 registered charities, tens of thousands of incorporated societies and community groups, and an estimated 1.2 million volunteers. These organisations run sports clubs, churches, community halls, food banks, hospices, marae, schools, conservation projects, and much more. They deliver essential services to New Zealand communities — and they deserve proper protection.</p>
          <p>Despite this, the majority of small charities and community organisations are either underinsured or have gaps in cover they're not aware of. The Incorporated Societies Act 2022 — the most significant reform to community organisation law in over a century — has made D&O and governance liability more important than ever for committee members and trustees.</p>

          <h2>Our Mission</h2>
          <p>Every charity and not-for-profit — from a sole volunteer running a community library to a large aged care trust — deserves access to expert insurance advice without the complexity or cost that typically surrounds it. Our mission is to demystify the insurance sector: making information accessible, removing jargon, and connecting organisations with the right adviser the first time.</p>

          <h2>Our Approach to Cover</h2>
          <p>The charity insurance market is more nuanced than most people realise. Specialist underwriters — including Concordia Underwriting and Lloyd's of London syndicates — have developed products specifically for faith communities, not-for-profits, aged care, and schools that price and cover these risks more accurately than generic commercial products. Our brokers know these markets and which products genuinely fit the not-for-profit risk profile.</p>

          <h2>Regulatory Information</h2>
          <p>CharityInsurance.co.nz is operated by Cover4You, a trading style of GDS. We are a comparison and referral service — not an insurer or licensed financial advice provider. We refer enquiries to licensed NZ insurance advisors and brokers who provide the financial advice and arrange cover on your behalf. Our referral service is free to use. We may receive a referral fee from insurers when a policy is arranged through our service. Broker fees may apply on some products and are disclosed upfront. All financial advice is provided by the licensed adviser handling your enquiry, in accordance with the Financial Markets Conduct Act 2013.</p>

          <h2>Claims Standards</h2>
          <p>All insurers we work with are appropriately licensed in New Zealand or are Lloyd's of London underwriters operating in NZ. We are committed to standards of transparency, fairness, and prompt claims handling.</p>
        </div>

        <div className="mt-12 bg-emerald-50 border-2 border-emerald-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Let's Find Your Cover</h2>
          <p className="text-slate-600 mb-6">Tell us about your organisation — we'll compare the market and come back with options that make sense for your sector and budget.</p>
          <Link href="/contact/" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition">Talk to a Specialist →</Link>
        </div>
      </main>
    </>
  );
}
