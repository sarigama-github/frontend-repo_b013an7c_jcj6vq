import { motion } from 'framer-motion'
import { Brain, Zap, Target } from 'lucide-react'

export default function Pillars() {
  const items = [
    { title: 'Built for Thinkers', desc: 'Intelligent primitives and analytics for system-level decision-makers.', icon: Brain },
    { title: 'Designed for Doers', desc: 'Lightning-fast UX that keeps you in flow.', icon: Zap },
    { title: 'Precision & Intent', desc: 'Trade with purpose; the protocol adapts to your goals.', icon: Target },
  ]

  return (
    <section className="relative bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Thinkers. Designed for Doers.</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0E0E0E] to-black p-6"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg border border-white/10 bg-black p-3 text-[#00E5FF]">
                <i.icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
