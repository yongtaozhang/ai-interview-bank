import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-blue-700">404</p>
      <h1 className="mt-3 text-3xl font-bold">页面不存在</h1>
      <p className="mt-3 text-slate-600">请返回首页或题库继续查看。</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          to="/"
        >
          返回首页
        </Link>
        <Link
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          to="/questions"
        >
          查看题库
        </Link>
      </div>
    </section>
  )
}
