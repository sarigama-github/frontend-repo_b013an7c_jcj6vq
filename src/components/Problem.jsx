import { motion } from 'framer-motion'

export default function Problem() {
  const lines = [
    'DeFi was born to free finance. But fragmentation fractured its power.',
    'Liquidity trapped in silos. Traders fighting for yield. Ecosystems isolated.'
  ]

  return (
    <section className="relative bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          The Problem
        </motion.h2>
        <div className="mt-6 grid gap-4">
          {lines.map((t, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-gray-300 text-lg"
            >
              {t}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
