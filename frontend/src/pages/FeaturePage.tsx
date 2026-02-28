import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FeaturesPage() {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-['Manrope',sans-serif] antialiased selection:bg-[#7C3AED]/30 selection:text-[#7C3AED]">
      {/* Import Fonts & Icons */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
      `}} />

      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 lg:py-32 overflow-hidden bg-[#FDFBFF] dark:bg-[#0F0716]">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] dark:bg-purple-900/20"></div>
              <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-400/10 rounded-full blur-[100px] dark:bg-fuchsia-900/10"></div>
            </div>
            <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1] font-['Manrope',sans-serif]">
                Tính năng của <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#C084FC]">Moji</span> 
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Tất cả những gì bạn cần để chat realtime mượt mà. Kết nối bạn bè, trò chuyện nhóm và chia sẻ khoảnh khắc ngay lập tức.
              </p>
            </div>
          </section>

          {/* Core Features */}
          <section className="py-24 bg-white dark:bg-[#0B1120]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-16 max-w-2xl">
                <h2 className="text-base font-bold uppercase tracking-wider text-[#7C3AED]">Cốt lõi</h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Chat Realtime</p>
                <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">Công nghệ WebSocket tiên tiến giúp tin nhắn của bạn được chuyển đi ngay lập tức.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative flex flex-col gap-6 rounded-3xl border border-slate-100 bg-[#f8fafc] p-8 transition-all hover:border-[#7C3AED]/30 hover:shadow-2xl hover:shadow-[#7C3AED]/5 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-[#7C3AED]/30">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-white/5 dark:ring-white/10 text-[#7C3AED]">
                    <span className="material-symbols-outlined text-3xl">send</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Nhắn tin tức thì</h3>
                    <p className="mt-3 text-base text-slate-600 dark:text-slate-400">Không còn phải chờ đợi. Tin nhắn được gửi và nhận chỉ trong tích tắc &lt;100ms.</p>
                  </div>
                </div>
                <div className="group relative flex flex-col gap-6 rounded-3xl border border-slate-100 bg-[#f8fafc] p-8 transition-all hover:border-[#7C3AED]/30 hover:shadow-2xl hover:shadow-[#7C3AED]/5 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-[#7C3AED]/30">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-white/5 dark:ring-white/10 text-[#7C3AED]">
                    <span className="material-symbols-outlined text-3xl">edit_note</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Trạng thái soạn thảo</h3>
                    <p className="mt-3 text-base text-slate-600 dark:text-slate-400">Biết chính xác khi nào bạn bè đang gõ phản hồi với chỉ báo thời gian thực mượt mà.</p>
                  </div>
                </div>
                <div className="group relative flex flex-col gap-6 rounded-3xl border border-slate-100 bg-[#f8fafc] p-8 transition-all hover:border-[#7C3AED]/30 hover:shadow-2xl hover:shadow-[#7C3AED]/5 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-[#7C3AED]/30">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-white/5 dark:ring-white/10 text-[#7C3AED]">
                    <span className="material-symbols-outlined text-3xl">done_all</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Đã xem</h3>
                    <p className="mt-3 text-base text-slate-600 dark:text-slate-400">Xác nhận tin nhắn quan trọng đã được đọc để bạn yên tâm hơn trong mọi cuộc hội thoại.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Network Section */}
          <section className="py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-3xl bg-gradient-to-br from-[#7C3AED]/10 to-purple-600/5 p-12 dark:from-[#7C3AED]/10 dark:to-purple-900/20 ring-1 ring-inset ring-slate-200/50 dark:ring-white/5">
                    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-2xl dark:bg-[#1e293b] ring-1 ring-black/5 dark:ring-white/5">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-700/50">
                        <div className="flex items-center gap-4">
                          <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-600 animate-pulse"></div>
                          <div>
                            <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-600 mb-2"></div>
                            <div className="h-3 w-20 rounded bg-slate-100 dark:bg-slate-700"></div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex h-9 items-center rounded-lg bg-emerald-50 px-4 text-sm font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">Chấp nhận</div>
                          <div className="flex h-9 items-center rounded-lg bg-rose-50 px-4 text-sm font-bold text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">Từ chối</div>
                        </div>
                      </div>
                      <div className="space-y-4 opacity-40">
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-600"></div>
                          <div className="h-3 w-40 rounded bg-slate-100 dark:bg-slate-700"></div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-600"></div>
                          <div className="h-3 w-36 rounded bg-slate-100 dark:bg-slate-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-base font-bold uppercase tracking-wider text-[#7C3AED]">Mạng lưới</h2>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Kết nối bạn bè</p>
                  <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">Mở rộng vòng kết nối của bạn. Tìm kiếm, thêm bạn và quản lý danh sách liên hệ dễ dàng với giao diện trực quan.</p>
                  <dl className="mt-10 space-y-8">
                    <div className="flex gap-5">
                      <div className="flex-none pt-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#7C3AED]">
                          <span className="material-symbols-outlined">person_add</span>
                        </div>
                      </div>
                      <div>
                        <dt className="text-lg font-bold text-slate-900 dark:text-white">Gửi lời mời kết bạn</dt>
                        <dd className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">Tìm kiếm theo tên người dùng hoặc email và gửi lời mời nhanh chóng chỉ với một cú nhấp chuột.</dd>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex-none pt-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#7C3AED]">
                          <span className="material-symbols-outlined">check_circle</span>
                        </div>
                      </div>
                      <div>
                        <dt className="text-lg font-bold text-slate-900 dark:text-white">Chấp nhận/Từ chối</dt>
                        <dd className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">Bạn có toàn quyền kiểm soát danh sách bạn bè và ai có thể nhắn tin cho mình.</dd>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex-none pt-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#7C3AED]">
                          <span className="material-symbols-outlined">group</span>
                        </div>
                      </div>
                      <div>
                        <dt className="text-lg font-bold text-slate-900 dark:text-white">Danh sách bạn bè</dt>
                        <dd className="mt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">Xem trạng thái online thời gian thực và bắt đầu cuộc trò chuyện ngay từ danh sách.</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="py-24 bg-white dark:bg-[#0B1120]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Tính năng nổi bật và mở rộng</h2>
                <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">Moji không chỉ dừng lại ở chat cơ bản. Chúng tôi liên tục cập nhật các tính năng mới.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 hover:shadow-lg transition-shadow dark:border-white/10 dark:bg-slate-900/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#7C3AED] text-3xl">notifications_active</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Thông báo đẩy</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Không bao giờ bỏ lỡ tin nhắn quan trọng kể cả khi offline.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 hover:shadow-lg transition-shadow dark:border-white/10 dark:bg-slate-900/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#7C3AED] text-3xl">forum</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quản lý hội thoại</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Tạo nhóm chat, lưu trữ hoặc xóa hội thoại cũ dễ dàng.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 relative overflow-hidden dark:border-white/10 dark:bg-slate-900/40">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-[#7C3AED] opacity-20 blur-xl"></div>
                  <div className="mb-4 flex items-center justify-between relative z-10">
                    <span className="material-symbols-outlined text-slate-400 text-3xl">attach_file</span>
                    <span className="rounded-full bg-[#7C3AED]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] border border-[#7C3AED]/20">Sắp có</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400">Gửi ảnh &amp; file</h3>
                  <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">Chia sẻ tài liệu và hình ảnh chất lượng cao không nén.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 hover:shadow-lg transition-shadow dark:border-white/10 dark:bg-slate-900/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#7C3AED] text-3xl">dark_mode</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Chế độ tối</h3>
                  <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">Bảo vệ mắt tối đa khi chat vào ban đêm.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 hover:shadow-lg transition-shadow dark:border-white/10 dark:bg-slate-900/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#7C3AED] text-3xl">sentiment_satisfied</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Emoji đa dạng</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Thể hiện cảm xúc trọn vẹn hơn với bộ emoji chuẩn Unicode.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 hover:shadow-lg transition-shadow dark:border-white/10 dark:bg-slate-900/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#7C3AED] text-3xl">security</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bảo mật tài khoản</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Mã hóa đầu cuối, an toàn dữ liệu là ưu tiên hàng đầu.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 dark:border-white/10 dark:bg-slate-900/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="material-symbols-outlined text-slate-400 text-3xl">search</span>
                    <span className="rounded-full bg-[#7C3AED]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] border border-[#7C3AED]/20">Sắp có</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400">Tìm kiếm tin nhắn</h3>
                  <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">Tìm lại nội dung cũ trong tích tắc với bộ lọc thông minh.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 hover:shadow-lg transition-shadow dark:border-white/10 dark:bg-slate-900/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#7C3AED] text-3xl">speed</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Độ trễ &lt; 100ms</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Hệ thống tối ưu hóa backend cho tốc độ phản hồi cao nhất.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Banner */}
          <section className="py-24 bg-slate-50 dark:bg-slate-900/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 text-center sm:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-white shadow-md dark:bg-white/5 text-[#7C3AED] ring-1 ring-slate-100 dark:ring-white/10">
                    <span className="material-symbols-outlined text-4xl">bolt</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Nhanh</h3>
                  <p className="mt-3 text-base text-slate-500 dark:text-slate-400">Không có độ trễ, không chờ đợi.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-white shadow-md dark:bg-white/5 text-[#7C3AED] ring-1 ring-slate-100 dark:ring-white/10">
                    <span className="material-symbols-outlined text-4xl">flight</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Gọn</h3>
                  <p className="mt-3 text-base text-slate-500 dark:text-slate-400">Nhẹ nhàng, không tốn tài nguyên.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-white shadow-md dark:bg-white/5 text-[#7C3AED] ring-1 ring-slate-100 dark:ring-white/10">
                    <span className="material-symbols-outlined text-4xl">favorite</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Dễ dùng</h3>
                  <p className="mt-3 text-base text-slate-500 dark:text-slate-400">Giao diện thân thiện, trực quan.</p>
                </div>
              </div>
            </div>
          </section>

           <section className="py-24 px-6 lg:px-20 bg-white">
          <div className="max-w-300 mx-auto rounded-3xl bg-linear-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899] px-8 py-20 text-center text-white shadow-2xl shadow-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-white/20 blur-3xl mix-blend-overlay"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-extrabold leading-tight lg:text-5xl mb-6">Bắt đầu chat với Moji ngay hôm nay</h2>
              <p className="text-purple-50 text-xl mb-10 font-medium">Trải nghiệm ứng dụng chat hiện đại nhất, hoàn toàn miễn phí cho người dùng cá nhân.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="/signup" className="w-full sm:w-auto rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#7C3AED] hover:bg-slate-50 transition-colors shadow-lg inline-block text-center">
                    Bắt đầu miễn phí
                </a>
                <a href="/contact" className="w-full sm:w-auto rounded-2xl bg-purple-900/30 border border-white/20 px-8 py-4 text-lg font-bold text-white hover:bg-purple-900/40 transition-colors backdrop-blur-sm">
                  Liên hệ hỗ trợ
                </a>
              </div>
              <p className="mt-8 text-sm text-purple-100 font-medium opacity-80">Miễn phí 100% — Không cần thẻ tín dụng</p>
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}