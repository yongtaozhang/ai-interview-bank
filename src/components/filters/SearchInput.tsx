import { Search } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">关键词搜索</span>
      <span className="relative mt-2 block">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          aria-label="搜索题目标题、标签、关键点和口述答案"
          className="h-11 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          onChange={(event) => onChange(event.target.value)}
          placeholder="搜索闭包、React 性能、事件循环..."
          type="search"
          value={value}
        />
      </span>
    </label>
  )
}
