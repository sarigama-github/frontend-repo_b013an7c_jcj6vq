export default function CTA() {
  return (
    <section id="trade" className="relative bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-[#0B0B0B] to-black p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#0047FF]/30 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#00E5FF]/20 blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Early Explorer Badge</h2>
              <p className="mt-3 text-gray-400 max-w-xl">Claim exclusive recognition for the first wave of cross-chain traders. Limited-time onchain badge.</p>
            </div>
            <div className="flex md:justify-end items-center gap-4">
              <a href="#" className="rounded-md bg-[#00E5FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-95 transition">Join Community</a>
              <a href="#" className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition">Read Docs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
