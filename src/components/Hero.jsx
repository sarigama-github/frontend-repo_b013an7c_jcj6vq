import { useEffect, useState, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        {mounted && (
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-black via-black/80 to-black" />}> 
            <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </Suspense>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          The Intelligent Omnichain DEX
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-gray-300"
        >
          Unified liquidity. One platform. Infinite routing.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#trade"
            className="rounded-md bg-[#00E5FF] px-6 py-3 text-sm md:text-base font-semibold text-black shadow-[0_0_0_1px_rgba(0,0,0,0.2)] hover:brightness-95 transition"
          >
            Start Trading
          </a>
          <a href="#features" className="text-sm md:text-base text-[#00E5FF] hover:text-white transition">Explore features</a>
        </motion.div>
      </div>
    </section>
  )
}
