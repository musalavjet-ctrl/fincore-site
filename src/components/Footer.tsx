export function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white/60 py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="text-lg font-bold text-white mb-2">
          Fin<span className="text-[#0071e3]">Core</span>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} ТОО «ФинКорКаз» &middot; Алматы, Казахстан</p>
      </div>
    </footer>
  )
}
