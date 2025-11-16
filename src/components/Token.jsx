import { motion } from 'framer-motion'

export default function Token() {
  const info = [
    { k: 'Token Name', v: 'CypherDex Token' },
    { k: 'Ticker', v: 'CYPHER' },
    { k: 'Total Supply', v: '100,000,000 CYPHER' },
    { k: 'Chain', v: 'Ethereum (ERC-20)' },
    { k: 'Tax', v: '5% Buy / 5% Sell' },
    { k: 'Notes', v: 'Fair launch, no hidden fees' },
  ]

  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">$CYPHER Token</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.map((row, i) => (
            <motion.div
              key={row.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6"
            >
              <div className="text-xs uppercase tracking-widest text-gray-400">{row.k}</div>
              <div className="mt-2 text-white font-semibold">{row.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
