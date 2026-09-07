import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-3">
              <span className="font-extrabold text-white text-xl leading-tight">
                <span className="text-white">Charity</span><span className="text-emerald-500">Insurance</span><span className="text-slate-400 font-semibold text-base">.co.nz</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Specialist insurance comparison and broker referral for charities, not-for-profits, and community organisations across New Zealand.
            </p>
            <p className="text-xs text-slate-500">Operated by Cover4You, a trading style of GDS. NZ owned and operated.</p>
          </div>

          <div>
            <p className="font-bold text-white text-sm mb-3">Insurance Cover</p>
            <ul className="space-y-2 text-sm">
              {[
                ['Public Liability', '/coverage/'],
                ['Trustee & D&O Liability', '/coverage/'],
                ['Volunteer Personal Accident', '/coverage/'],
                ['Professional Indemnity', '/coverage/'],
                ['Cyber Insurance', '/coverage/'],
                ['Property & Contents', '/coverage/'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-emerald-400 transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-white text-sm mb-3">Organisation Types</p>
            <ul className="space-y-2 text-sm">
              {[
                ['Registered Charities', '/organisations/registered-charities/'],
                ['Sports Clubs', '/organisations/sports-clubs/'],
                ['Churches & Faith', '/organisations/churches-religious/'],
                ['Community Groups', '/organisations/community-groups-trusts/'],
                ['Schools & Education', '/organisations/schools-education-boards/'],
                ['View All Types', '/organisations/'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-emerald-400 transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-white text-sm mb-3">Information</p>
            <ul className="space-y-2 text-sm">
              {[
                ['About Us', '/about/'],
                ['Get a Quote', '/contact/'],
                ['Resources', '/blog/'],
                ['Making a Claim', '/claims/'],
                ['FAQ', '/faq/'],
                ['Terms of Use', '/terms/'],
                ['Privacy Policy', '/privacy/'],
                ['Disclaimer', '/disclaimer/'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="hover:text-emerald-400 transition">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800/60 rounded-xl p-4">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Regulatory Disclosure</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                CharityInsurance.co.nz is a comparison and broker referral service operated by Cover4You (a trading style of GDS). We are not an insurer or licensed financial advice provider. All financial advice is provided by the licensed insurance broker or adviser handling your enquiry, in accordance with the Financial Markets Conduct Act 2013. We may receive a referral fee when a policy is arranged.
              </p>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-4">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Claims Standards</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                All insurers we work with are appropriately licensed in New Zealand or are Lloyd's of London underwriters operating in NZ. We are committed to standards of transparency, fairness, and prompt claims handling.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} CharityInsurance.co.nz — Operated by Cover4You (GDS). All rights reserved.</p>
            <div className="flex gap-4 text-xs text-slate-500">
              <Link href="/terms/" className="hover:text-slate-300 transition">Terms</Link>
              <Link href="/privacy/" className="hover:text-slate-300 transition">Privacy</Link>
              <Link href="/disclaimer/" className="hover:text-slate-300 transition">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
