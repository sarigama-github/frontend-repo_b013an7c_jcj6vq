import { motion } from 'framer-motion'
import { Network, Route, Gauge, Vote } from 'lucide-react'

const features = [
  {
    title: 'Omnichain Liquidity',
    description: 'Seamless cross-chain trading without bridges.',
    icon: Network,
  },
  {
    title: 'Intelligent Routing',
    description: 'AI-optimized swap paths across Ethereum, Base, BSC, Polygon.',
    icon: Route,
  },
  {
    title: 'Trader Dashboard',
    description: 'Advanced margin, position tracking, whale monitoring.',
    icon: Gauge,
  },
  {
    title: 'Governance & Rewards',
    description: 'Stake $CYPHER, earn yield, vote on protocol direction.',
    icon: Vote,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered for Pros</h2>
          <p className="mt-3 text-gray-400 max-w-2xl">Institutional-grade infrastructure with consumer-grade UX.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#0E0E0E] to-black p-5 hover:border-[#0047FF]/60 transition"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-white/10 bg-black p-3 text-[#00E5FF]">
                  <f.icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{f.description}</p>
                </div>
              </div>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0047FF]/20 blur-2xl group-hover:bg-[#00E5FF]/25 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
