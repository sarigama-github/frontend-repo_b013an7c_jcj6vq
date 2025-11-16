import { motion } from 'framer-motion'
import { Route, Trophy, Network, Gamepad2, LayoutDashboard } from 'lucide-react'

const features = [
  {
    title: 'Smart Routing',
    description: 'Trade across pools engineered for efficiency. The system routes you through the smartest path always.',
    icon: Route,
  },
  {
    title: 'Engagement Model',
    description: 'Stake, farm, or play. Every engagement earns you XP, badges, and protocol dividends.',
    icon: Trophy,
  },
  {
    title: 'Omnichain',
    description: 'No bridges. No friction. One pool spanning every major chain.',
    icon: Network,
  },
  {
    title: 'Gamification',
    description: 'Your trades become quests. Your consistency ranks you higher. Your presence defines prestige.',
    icon: Gamepad2,
  },
  {
    title: 'Dashboard',
    description: 'Visualize flows, track whales, manage margins, and monitor rewards from a singular, immersive cockpit.',
    icon: LayoutDashboard,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Thinkers. Designed for Doers.</h2>
          <p className="mt-3 text-gray-400 max-w-3xl">A platform where every trade contributes to the intelligence of the whole.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
