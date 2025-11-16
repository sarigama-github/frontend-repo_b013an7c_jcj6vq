import { motion } from 'framer-motion'

export default function Messaging() {
  const themes = [
    'Intelligence & algorithmic superiority',
    'Community ownership & governance',
    'Gamification & engagement',
    'Omnichain simplicity (no bridges)',
    'MEV protection & security',
    'Early-mover prestige'
  ]

  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Key Messaging Themes</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {themes.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 text-gray-300"
            >
              • {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
