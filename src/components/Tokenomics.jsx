import { motion } from 'framer-motion'

const items = [
  { label: 'Total Supply', value: '1,000,000,000 CYPHER' },
  { label: 'Chain', value: 'Base' },
  { label: 'Buy/Sell Tax', value: '0%' },
  { label: 'Liquidity', value: 'Locked at TGE' },
]

const allocations = [
  { label: 'Community Rewards', pct: 35, color: '#00E5FF' },
  { label: 'Liquidity & MM', pct: 25, color: '#0047FF' },
  { label: 'Ecosystem & Partnerships', pct: 20, color: '#22d3ee' },
  { label: 'Team & Contributors', pct: 15, color: '#60a5fa' },
  { label: 'Treasury', pct: 5, color: '#93c5fd' },
]

export default function Tokenomics(){
  return (
    <section className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h3 initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl md:text-4xl font-semibold">
              Tokenomics at a Glance
            </motion.h3>
            <motion.p initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="text-white/70 mt-3">
              Transparent, utility-driven design aligns incentives for builders, traders, and long-term governance.
            </motion.p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((it,i)=> (
                <motion.div key={it.label} initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="bg-black/40 border border-white/5 rounded-xl p-4">
                  <div className="text-white/60 text-xs tracking-wider">{it.label}</div>
                  <div className="text-white text-base mt-1">{it.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <RadialChart data={allocations} />
          </div>
        </div>
      </div>
    </section>
  )
}

function RadialChart({data}){
  const size = 280
  const radius = size/2 - 12
  const total = data.reduce((a,b)=> a+b.pct, 0)
  let acc = 0
  const segments = data.map((d)=>{
    const start = (acc/total) * Math.PI*2
    acc += d.pct
    const end = (acc/total) * Math.PI*2
    return { ...d, start, end }
  })

  const describeArc = (cx, cy, r, start, end) => {
    const x1 = cx + r*Math.cos(start)
    const y1 = cy + r*Math.sin(start)
    const x2 = cx + r*Math.cos(end)
    const y2 = cy + r*Math.sin(end)
    const largeArc = end - start > Math.PI ? 1 : 0
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`
  }

  return (
    <motion.div initial={{opacity:0, scale:0.96}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="relative w-full flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="drop-shadow-[0_0_30px_rgba(0,229,255,0.15)]">
        {segments.map((s, i)=> (
          <motion.path key={i} d={describeArc(size/2, size/2, radius, s.start, s.end)} fill={s.color} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} />
        ))}
      </svg>
      <div className="absolute text-center">
        <div className="text-xs tracking-widest text-white/60">CYPHER</div>
        <div className="text-3xl font-semibold">Tokenomics</div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-2 absolute -bottom-14 w-full px-4">
        {data.map((d)=> (
          <div key={d.label} className="flex items-center gap-2 text-xs text-white/70">
            <span className="inline-block w-3 h-3 rounded-sm" style={{background:d.color}} />
            {d.label} • {d.pct}%
          </div>
        ))}
      </div>
    </motion.div>
  )
}
