import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Vision</h2>
        <div className="mt-6 grid gap-4 max-w-3xl text-gray-300">
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            Imagine a world where liquidity is alive, adaptive, intelligent, collaborative.
          </motion.p>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.06}}>
            Where traders are citizens, not users.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
