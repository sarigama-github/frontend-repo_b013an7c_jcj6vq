import { ShieldCheck, LockKeyhole, Scale } from 'lucide-react'

const items = [
  { title: 'Audited smart contracts', desc: 'Independent audits with continuous monitoring.', icon: ShieldCheck },
  { title: 'MEV-protected routing', desc: 'Private orderflow and anti-sandwich protections.', icon: LockKeyhole },
  { title: 'Transparent governance', desc: 'On-chain proposals and verifiable votes.', icon: Scale },
]

export default function Security() {
  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Security & Trust</h2>
          <p className="mt-3 text-gray-400 max-w-2xl">Defense-in-depth architecture built for high-stakes trading.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="relative rounded-xl border border-white/10 bg-gradient-to-b from-[#0E0E0E] to-black p-6">
              <div className="mb-3 inline-flex items-center justify-center rounded-lg border border-white/10 bg-black p-3 text-[#00E5FF]">
                <i.icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
