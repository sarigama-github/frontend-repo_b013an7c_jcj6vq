import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck, Award, Building2 } from 'lucide-react'

const logos = [
  { name: 'SolidityScan', url: '#'},
  { name: 'CertiK', url: '#'},
  { name: 'QuantStamp', url: '#'},
  { name: 'OpenZeppelin', url: '#'},
  { name: 'Chainlink', url: '#'},
  { name: 'LayerZero', url: '#'},
]

export default function SocialProof() {
  return (
    <section className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center gap-3">
          <motion.div initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-sm tracking-widest text-white/60">TRUSTED BY BUILDERS</motion.div>
          <motion.h3 initial={{opacity:0, y: 12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="text-2xl md:text-4xl font-semibold">
            Security-first. Ecosystem-ready.
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 w-full">
            {logos.map((l, i) => (
              <motion.a key={l.name} href={l.url} target="_blank" rel="noreferrer"
                className="group bg-black/40 border border-white/5 rounded-xl py-4 px-3 flex items-center justify-center text-white/70 hover:text-white hover:border-white/10 transition"
                initial={{opacity:0, y: 8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}}
              >
                <span className="text-sm md:text-base font-medium">{l.name}</span>
              </motion.a>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <InfoCard icon={<ShieldCheck className="w-5 h-5"/>} title="Audited Contracts" desc="Independent security reviews and continuous monitoring."/>
            <InfoCard icon={<BadgeCheck className="w-5 h-5"/>} title="MEV Protection" desc="Transaction flow engineered to minimize extractable value."/>
            <InfoCard icon={<Award className="w-5 h-5"/>} title="Transparent Governance" desc="On-chain proposals, public discussions, and recorded votes."/>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({icon, title, desc}){
  return (
    <motion.div initial={{opacity:0, y: 8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="bg-black/40 rounded-2xl border border-white/5 p-5">
      <div className="flex items-center gap-3 text-cyan-300">
        {icon}
        <span className="text-sm tracking-wide">{title}</span>
      </div>
      <p className="text-white/70 mt-2 text-sm">{desc}</p>
    </motion.div>
  )
}
