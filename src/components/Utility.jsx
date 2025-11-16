import { motion } from 'framer-motion'
import { Coins, Vote, Percent } from 'lucide-react'

export default function Utility() {
  const items = [
    { title: 'Protocol Fuel', desc: 'Every action, reward, and governance vote flows through $CYPHER.', icon: Coins },
    { title: 'Stake to Earn', desc: 'Stake to earn yield and unlock elevated rewards.', icon: Percent },
    { title: 'Govern & Save', desc: 'Hold to reduce fees. Vote to steer evolution.', icon: Vote },
  ]

  return (
    <section className="relative bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Token Utility</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0E0E0E] to-black p-6"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg border border-white/10 bg-black p-3 text-[#00E5FF]">
                <it.icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
