import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MicroInteractions(){
  return (
    <section className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <MagneticCard title="Smart Routing" desc="Buttons and cards feel alive with subtle magnetic pull and parallax."/>
          <MagneticCard title="Gamified Actions" desc="Hover glow and tilt effects make interactions delightful."/>
          <MagneticCard title="Precision UI" desc="Micro-speed animations reinforce CypherDex's accuracy."/>
        </div>
      </div>
    </section>
  )
}

function MagneticCard({title, desc}){
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(y, { stiffness: 300, damping: 40 })
  const ry = useSpring(x, { stiffness: 300, damping: 40 })

  useEffect(()=>{
    const el = ref.current
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - rect.left - rect.width/2
      const dy = e.clientY - rect.top - rect.height/2
      x.set(dx/20)
      y.set(dy/20)
    }
    const onLeave = () => { x.set(0); y.set(0) }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <motion.div ref={ref} style={{ rotateX: rx, rotateY: ry }} className="relative bg-black/40 border border-white/10 rounded-2xl p-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,229,255,0.12),transparent_40%)]" />
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-white/70 mt-2 text-sm">{desc}</p>
      <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-4 bg-gradient-to-r from-[#00E5FF] to-[#0047FF] text-black font-semibold px-4 py-2 rounded-lg">
        Try it
      </motion.button>
    </motion.div>
  )
}
