import { useState } from 'react'
import { Menu, X, BookOpen, Twitter, Github, MessageSquare } from 'lucide-react'

const navLinks = [
  { name: 'Docs', href: '#docs', icon: BookOpen },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'Discord', href: 'https://discord.com', icon: MessageSquare },
  { name: 'GitHub', href: 'https://github.com', icon: Github },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#0047FF] to-[#00E5FF]" />
            <span className="text-white font-semibold tracking-wide">CypherDex</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <l.icon size={16} />
                {l.name}
              </a>
            ))}
            <a
              href="#trade"
              className="ml-2 inline-flex items-center rounded-md bg-[#00E5FF] px-4 py-2 text-sm font-semibold text-black shadow-sm hover:brightness-90 transition"
            >
              Start Trading
            </a>
          </nav>

          <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2">
              {navLinks.map((l) => (
                <a key={l.name} href={l.href} className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:bg-white/5">
                  <l.icon size={16} />
                  {l.name}
                </a>
              ))}
              <a href="#trade" className="mt-2 inline-flex items-center justify-center rounded-md bg-[#00E5FF] px-4 py-2 text-sm font-semibold text-black hover:brightness-90">
                Start Trading
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
