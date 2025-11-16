import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Sparkles } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Waitlist(){
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${BACKEND}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'waitlist-section' })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', message: 'You\'re on the list! Check your inbox for a welcome.' })
        setEmail('')
      } else {
        setStatus({ type: 'error', message: data.detail || 'Something went wrong.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1">
              <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="inline-flex items-center gap-2 text-cyan-300">
                <Sparkles className="w-4 h-4" /> Early Explorer Badge
              </motion.div>
              <motion.h3 initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="text-2xl md:text-4xl font-semibold mt-2">
                Claim early access and unlock drops
              </motion.h3>
              <motion.p initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="text-white/70 mt-2">
                Join the waitlist to receive your Early Explorer Badge, pre-release invites, and governance previews.
              </motion.p>
            </div>
            <form onSubmit={submit} className="flex-1 w-full">
              <div className="bg-black/50 border border-white/10 rounded-xl p-2 flex items-center">
                <Mail className="w-5 h-5 text-white/60 ml-2" />
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 bg-transparent outline-none px-3 py-3 text-white placeholder-white/40" required />
                <button disabled={loading} className="bg-gradient-to-r from-[#00E5FF] to-[#0047FF] text-black font-semibold px-4 py-2 rounded-lg disabled:opacity-60">
                  {loading ? 'Submitting...' : 'Join Waitlist'}
                </button>
              </div>
              {status && (
                <div className={`mt-3 text-sm ${status.type==='success' ? 'text-emerald-400' : 'text-rose-400'}`}>{status.message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
