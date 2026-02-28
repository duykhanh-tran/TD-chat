import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "lucide-react";

export default function GuidePage() {
  return (
    <div className="bg-[#FDFBFF] dark:bg-[#0F0716] font-['Noto_Sans',sans-serif] text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden selection:bg-purple-200 dark:selection:bg-purple-900">
      {/* Import Fonts & Icons */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
      `}} />

      <div className="flex flex-col min-h-screen">
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
                Bắt đầu với <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#C084FC]">Moji</span> trong 3 bước
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Trang hướng dẫn này giúp bạn đăng ký tài khoản, kết bạn và trò chuyện realtime mượt mà chỉ sau vài phút.
              </p>
            </div>
          </section>

          {/* 3 Steps Section */}
          <section className="py-20 px-4 bg-white dark:bg-slate-900/30 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 font-['Manrope',sans-serif]">3 bước đơn giản</h2>
                <p className="text-lg text-slate-500 dark:text-slate-400">Lộ trình ngắn nhất để bạn làm chủ Moji</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-1 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 dark:from-purple-900/30 dark:via-purple-800/30 dark:to-purple-900/30 rounded-full z-0"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-28 h-28 rounded-2xl bg-white dark:bg-slate-800 border-[6px] border-purple-50 dark:border-purple-900/20 flex items-center justify-center mb-8 shadow-xl shadow-purple-100 dark:shadow-none group-hover:-translate-y-2 transition-transform duration-300 relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5"></div>
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#A855F7] font-['Manrope',sans-serif]">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-['Manrope',sans-serif]">Đăng ký tài khoản</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                    Tạo tài khoản nhanh chóng chỉ trong vài giây thông qua Email hoặc Google.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-28 h-28 rounded-2xl bg-white dark:bg-slate-800 border-[6px] border-purple-50 dark:border-purple-900/20 flex items-center justify-center mb-8 shadow-xl shadow-purple-100 dark:shadow-none group-hover:-translate-y-2 transition-transform duration-300 relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5"></div>
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#A855F7] font-['Manrope',sans-serif]">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-['Manrope',sans-serif]">Kết bạn</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                    Tìm kiếm bạn bè qua ID. Gửi và chấp nhận lời mời để mở rộng mạng lưới.
                  </p>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-28 h-28 rounded-2xl bg-white dark:bg-slate-800 border-[6px] border-purple-50 dark:border-purple-900/20 flex items-center justify-center mb-8 shadow-xl shadow-purple-100 dark:shadow-none group-hover:-translate-y-2 transition-transform duration-300 relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5"></div>
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#A855F7] font-['Manrope',sans-serif]">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-['Manrope',sans-serif]">Trò chuyện ngay</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                    Tạo cuộc trò chuyện riêng tư hoặc nhóm và nhắn tin với tốc độ thời gian thực.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Guide Accordion */}
          <section className="py-24 px-4 bg-[#FDFBFF] dark:bg-[#0F0716]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12 text-center font-['Manrope',sans-serif]">Hướng dẫn chi tiết</h2>
              <div className="space-y-5">
                
                <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                      <div className="flex items-center gap-5">
                        <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-[#7C3AED]">
                          <span className="material-symbols-outlined">person_add</span>
                        </div>
                        <span className="text-lg font-bold text-slate-900 dark:text-white font-['Manrope',sans-serif]">Gửi lời mời kết bạn</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-base leading-relaxed border-t border-slate-100 dark:border-slate-700/50 mt-2">
                      <p className="pt-4">Để gửi lời mời kết bạn, hãy vào tab "Danh bạ", chọn biểu tượng thêm bạn (+) ở góc phải. Nhập địa chỉ email chính xác của người bạn muốn kết nối và nhấn "Gửi lời mời".</p>
                    </div>
                  </details>
                </div>

                <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                      <div className="flex items-center gap-5">
                        <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-[#7C3AED]">
                          <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <span className="text-lg font-bold text-slate-900 dark:text-white font-['Manrope',sans-serif]">Chấp nhận/Từ chối lời mời</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-base leading-relaxed border-t border-slate-100 dark:border-slate-700/50 mt-2">
                      <p className="pt-4">Khi có lời mời kết bạn mới, thông báo sẽ xuất hiện tại tab "Lời mời". Bạn có thể xem thông tin người gửi và chọn "Đồng ý" để bắt đầu trò chuyện hoặc "Từ chối" để bỏ qua.</p>
                    </div>
                  </details>
                </div>

                <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <details className="group" open>
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                      <div className="flex items-center gap-5">
                        <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-[#7C3AED]">
                          <span className="material-symbols-outlined">chat</span>
                        </div>
                        <span className="text-lg font-bold text-slate-900 dark:text-white font-['Manrope',sans-serif]">Tạo cuộc trò chuyện mới</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-base leading-relaxed border-t border-slate-100 dark:border-slate-700/50 mt-2">
                      <p className="pt-4">Chọn một người bạn từ danh sách bạn bè, bấm vào tên của họ để mở cửa sổ chat. Nhập tin nhắn vào khung soạn thảo phía dưới và nhấn Enter hoặc nút Gửi.</p>
                    </div>
                  </details>
                </div>

                <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                      <div className="flex items-center gap-5">
                        <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-[#7C3AED]">
                          <span className="material-symbols-outlined">pending</span>
                        </div>
                        <span className="text-lg font-bold text-slate-900 dark:text-white font-['Manrope',sans-serif]">Trạng thái Online/Typing</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-base leading-relaxed border-t border-slate-100 dark:border-slate-700/50 mt-2">
                      <p className="pt-4">Tính năng hiển thị trạng thái đang hoạt động và đang soạn tin nhắn của người dùng.</p>
                    </div>
                  </details>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-slate-700/60 overflow-hidden opacity-90">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                      <div className="flex items-center gap-5">
                        <div className="p-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-500">
                          <span className="material-symbols-outlined">delete</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-slate-900 dark:text-white font-['Manrope',sans-serif]">Xóa cuộc trò chuyện</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider bg-purple-100 text-purple-700 px-2 py-0.5 rounded-md dark:bg-purple-900/50 dark:text-purple-300">Sắp có</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-base leading-relaxed border-t border-slate-200 dark:border-slate-700/50 mt-2">
                      <p className="pt-4">Trong danh sách cuộc hội thoại, vuốt sang trái (trên mobile) hoặc nhấp chuột phải (trên desktop) vào cuộc trò chuyện bạn muốn xóa và chọn biểu tượng thùng rác.</p>
                    </div>
                  </details>
                </div>

              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-24 px-4 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-12 text-center font-['Manrope',sans-serif]">Mẹo sử dụng hiệu quả</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="bg-purple-50/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-purple-100 dark:border-slate-700 flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-[#7C3AED] bg-white dark:bg-slate-700 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-2xl">keyboard_return</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 font-['Manrope',sans-serif]">Phím tắt nhanh</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Sử dụng phím Enter để gửi tin nhắn nhanh chóng mà không cần click chuột.</p>
                  </div>
                </div>

                <div className="bg-purple-50/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-purple-100 dark:border-slate-700 flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-[#7C3AED] bg-white dark:bg-slate-700 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-2xl">group</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 font-['Manrope',sans-serif]">Kết nối rộng</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Kiểm tra danh sách gợi ý bạn bè hàng tuần để mở rộng mạng lưới của bạn.</p>
                  </div>
                </div>

                <div className="bg-purple-50/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-purple-100 dark:border-slate-700 flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-[#7C3AED] bg-white dark:bg-slate-700 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-2xl">notifications_active</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 font-['Manrope',sans-serif]">Đừng bỏ lỡ</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Bật thông báo trên trình duyệt để nhận tin nhắn ngay cả khi bạn đang làm việc khác.</p>
                  </div>
                </div>

                <div className="bg-purple-50/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-purple-100 dark:border-slate-700 flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-[#7C3AED] bg-white dark:bg-slate-700 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-2xl">security</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 font-['Manrope',sans-serif]">An toàn là trên hết</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Chỉ chấp nhận lời mời từ những người bạn biết hoặc tin tưởng.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
           <section className="py-24 px-6 lg:px-20 bg-white">
          <div className="max-w-300 mx-auto rounded-3xl bg-linear-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899] px-8 py-20 text-center text-white shadow-2xl shadow-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-white/20 blur-3xl mix-blend-overlay"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-extrabold leading-tight lg:text-5xl mb-6">Bắt đầu ngay — chỉ mất 1 phút</h2>
              <p className="text-purple-50 text-xl mb-10 font-medium">Tham gia cộng đồng Moji ngay hôm nay và trải nghiệm sự khác biệt trong cách bạn kết nối.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="/signup" className="w-full sm:w-auto rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#7C3AED] hover:bg-slate-50 transition-colors shadow-lg inline-block text-center">
                    Bắt đầu miễn phí
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