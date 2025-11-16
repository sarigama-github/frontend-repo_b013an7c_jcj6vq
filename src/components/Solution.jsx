import { motion } from 'framer-motion'

export default function Solution() {
  const headline = 'CypherDex changes the game merging liquidity across chains, markets, and minds.'
  const sub = 'A platform where every trade contributes to the intelligence of the whole.'

  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          The Solution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 text-gray-300 text-lg max-w-3xl"
        >
          {headline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-2 text-gray-400"
        >
          {sub}
        </motion.p>
      </div>
    </section>
  )
}
