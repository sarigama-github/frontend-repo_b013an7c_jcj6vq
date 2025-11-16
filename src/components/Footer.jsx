import { BookOpen, Twitter, Github, MessageSquare } from 'lucide-react'

export default function Footer() {
  const links = [
    { name: 'Docs', href: '#docs', icon: BookOpen },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'Discord', href: 'https://discord.com', icon: MessageSquare },
    { name: 'GitHub', href: 'https://github.com', icon: Github },
  ]

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#0047FF] to-[#00E5FF]" />
            <span className="text-white font-semibold">CypherDex</span>
          </div>
          <nav className="flex items-center gap-5">
            {links.map(l => (
              <a key={l.name} href={l.href} className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
                <l.icon size={16} />{l.name}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} CypherDex. All rights reserved.</p>
      </div>
    </footer>
  )
}
