import { motion } from 'framer-motion'
import { Wallet, ArrowsLeftRight, CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Connect wallet', icon: Wallet, desc: 'Link your preferred wallet in seconds.' },
  { title: 'Select chains and amounts', icon: ArrowsLeftRight, desc: 'Pick origin/destination with precision quotes.' },
  { title: 'Execute trade', icon: CheckCircle2, desc: 'MEV-protected, gas-optimized settlement.' },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-gray-400 max-w-2xl">Three simple steps to route liquidity across chains.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-xl border border-white/10 bg-gradient-to-b from-[#0E0E0E] to-black p-6"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg border border-white/10 bg-black p-3 text-[#00E5FF]">
                <s.icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#0047FF]/20 blur-2xl" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-[#0A0A0A]">
            <h4 className="text-white font-semibold">Multi-chain flow</h4>
            <p className="mt-2 text-sm text-gray-400">Visual path of a cross-chain swap showing source, relayers, and destination settlement.</p>
            <div className="mt-4 h-40 rounded-lg bg-gradient-to-tr from-[#0047FF]/20 to-[#00E5FF]/10 border border-white/10" />
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-[#0A0A0A]">
            <h4 className="text-white font-semibold">Execution guarantees</h4>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-400 space-y-1">
              <li>Price-time priority and slippage controls</li>
              <li>MEV-protected routing</li>
              <li>Finality-aware settlement across chains</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
