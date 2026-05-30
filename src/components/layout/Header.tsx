import { NavLink } from 'react-router-dom'

const navItems = [
  { label: '首页', to: '/' },
  { label: '题库', to: '/questions' },
  { label: 'AI Coding', to: '/ai-coding' },
]

function getNavLinkClass({ isActive }: { isActive: boolean }) {
  const baseClass =
    'rounded-md px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'

  if (isActive) {
    return `${baseClass} bg-blue-50 text-blue-700`
  }

  return `${baseClass} text-slate-600 hover:bg-slate-100 hover:text-slate-950`
}

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <NavLink
          className="text-base font-bold tracking-normal text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          to="/"
        >
          AI 前端面试宝典
        </NavLink>
        <nav aria-label="主导航" className="flex flex-wrap gap-1">
          {navItems.map((item) => (
            <NavLink
              className={getNavLinkClass}
              end={item.to === '/'}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
