import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedRouteVisualizer(){
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      const { width } = canvas.getBoundingClientRect()
      const height = width * 0.5
      canvas.width = width * DPR
      canvas.height = height * DPR
      canvas.style.height = height + 'px'
      ctx.scale(DPR, DPR)
    }
    const nodes = Array.from({length: 6}).map((_,i)=>({
      x: 60 + i*120,
      y: 60 + ((i%2)*80),
      r: 6,
    }))
    const routes = Array.from({length: 24}).map(()=>({
      a: Math.floor(Math.random()*nodes.length),
      b: Math.floor(Math.random()*nodes.length),
      t: Math.random()*Math.PI*2,
      speed: 0.008 + Math.random()*0.01
    }))

    const draw = () => {
      const { width } = canvas.getBoundingClientRect()
      const height = width * 0.5
      ctx.clearRect(0,0,width,height)

      // gradient bg
      const g = ctx.createLinearGradient(0,0,width,height)
      g.addColorStop(0, 'rgba(0,231,255,0.08)')
      g.addColorStop(1, 'rgba(0,71,255,0.08)')
      ctx.fillStyle = g
      ctx.fillRect(0,0,width,height)

      // connections
      ctx.lineWidth = 1.25
      routes.forEach(r=>{
        const n1 = nodes[r.a]
        const n2 = nodes[r.b]
        ctx.strokeStyle = 'rgba(0,229,255,0.35)'
        ctx.beginPath()
        ctx.moveTo(n1.x, n1.y)
        ctx.lineTo(n2.x, n2.y)
        ctx.stroke()

        // moving orb
        const px = n1.x + (n2.x-n1.x)*((Math.sin(r.t)+1)/2)
        const py = n1.y + (n2.y-n1.y)*((Math.sin(r.t)+1)/2)
        ctx.fillStyle = 'rgba(0,231,255,0.9)'
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI*2)
        ctx.fill()

        r.t += r.speed
      })

      // nodes
      nodes.forEach(n=>{
        ctx.fillStyle = 'rgba(255,255,255,0.9)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2)
        ctx.fill()
        ctx.strokeStyle = 'rgba(255,255,255,0.2)'
        ctx.stroke()
      })

      raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      ctx.setTransform(1,0,0,1,0,0)
      resize()
    }

    resize()
    draw()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <motion.h3 initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl md:text-4xl font-semibold">
            See Omnichain Routing In Motion
          </motion.h3>
          <motion.p initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="text-white/70 max-w-2xl mt-3">
            Animated paths show how CypherDex orchestrates cross-chain liquidity with precision and speed.
          </motion.p>
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3">
          <canvas ref={canvasRef} className="w-full block rounded-xl overflow-hidden" />
        </div>
      </div>
    </section>
  )
}
