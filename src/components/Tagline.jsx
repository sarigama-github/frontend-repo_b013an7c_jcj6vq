import { motion } from 'framer-motion'

export default function Tagline() {
  return (
    <section className="relative bg-black pt-24 pb-8">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
        >
          CypherDex – The Intelligent Omnichain DEX
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-300 max-w-3xl mx-auto"
        >
          CypherDex is a next-gen DEX fusing AMM swaps, perpetuals, and cross-chain liquidity built for speed, security, and community ownership.
        </motion.p>
      </div>
    </section>
  )
}
