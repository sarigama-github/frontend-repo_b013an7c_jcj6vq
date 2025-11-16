import { motion } from 'framer-motion'

export default function Stats() {
  return (
    <section className="relative bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{k:'TVL',v:'$2.4B'}, {k:'Daily Traders',v:'128K'}, {k:'Chains',v:'12'}, {k:'Routes',v:'3.1M+'}].map((s,i)=> (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-black p-6 text-center"
            >
              <div className="text-sm uppercase tracking-widest text-gray-400">{s.k}</div>
              <div className="mt-2 text-3xl md:text-4xl font-extrabold text-white">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
