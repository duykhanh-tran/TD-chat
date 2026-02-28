import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4 lg:px-20 transition-all duration-300">
      <div className="flex items-center gap-3">
        <img
          src="/logo.svg"
          alt="logo"
          
        />
        <a href="/"><h2 className="text-2xl font-extrabold tracking-tight text-[#7C3AED]">Moji</h2></a>
      </div>
      <nav className="hidden md:flex flex-1 justify-center gap-10">
        <Link className="text-sm font-semibold text-slate-600 hover:text-[#7C3AED] transition-colors" to="/features">Tính năng</Link>
        <Link className="text-sm font-semibold text-slate-600 hover:text-[#7C3AED] transition-colors" to="/guide">Hướng dẫn</Link>
        <Link className="text-sm font-semibold text-slate-600 hover:text-[#7C3AED] transition-colors" to="/contact">Liên hệ</Link>
      </nav>
      <div className="flex items-center gap-4">
        <a className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-primary" href="/signin">Đăng nhập</a>
        <a className="flex items-center justify-center rounded-2xl bg-linear-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899] px-6 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30" href="/signup">
          Bắt đầu miễn phí
        </a>
      </div>
    </header>
  );
}