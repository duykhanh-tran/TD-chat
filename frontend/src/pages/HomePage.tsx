import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="bg-[#F9FAFB] text-slate-900 font-['Manrope',sans-serif] antialiased selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      {/* Import Fonts & Icons */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
      `}} />

      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header></Header>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-200 opacity-40 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-pink-100 opacity-40 blur-3xl"></div>
          <div className="container mx-auto px-6 max-w-300">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="flex flex-1 flex-col gap-8 text-center lg:text-left">
                <div className="inline-flex w-fit mx-auto lg:mx-0 items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-[#7C3AED]">
                  <span className="mr-2 flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
                  </span>
                  Phiên bản mới 2.0 đã ra mắt
                </div>
                <h1 className="text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900 lg:text-7xl">
                  Chat <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899]">realtime</span> <br />nhanh như chớp.
                </h1>
                <p className="text-lg text-slate-600 lg:max-w-lg leading-relaxed">
                  Moji giúp bạn kết nối bạn bè và nhóm với nhắn tin tức thì, lời mời kết bạn dễ dàng và trải nghiệm cuộc trò chuyện mượt mà nhất.
                </p>
                
                <div className="mt-2 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-slate-500 font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#7C3AED] text-xl">bolt</span>
                    Realtime
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#A855F7] text-xl">verified_user</span>
                    Ổn định
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#EC4899] text-xl">sentiment_satisfied</span>
                    Dễ dùng
                  </div>
                </div>
              </div>

              {/* Chat UI Mockup */}
              <div className="relative flex-1 lg:pl-10 w-full">
                <div className="relative z-10 overflow-hidden rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-slate-900/5 backdrop-blur-sm bg-opacity-90">
                  <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 bg-slate-50/50 rounded-t-lg">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto h-7 w-64 rounded-md bg-white shadow-sm border border-slate-100"></div>
                  </div>
                  <div className="flex h-112.5 w-full bg-slate-50">
                    <div className="w-16 sm:w-72 border-r border-slate-200 bg-white flex flex-col">
                      <div className="p-5 border-b border-slate-100 hidden sm:block">
                        <div className="h-10 w-full rounded-lg bg-slate-100"></div>
                      </div>
                      <div className="flex-1 p-3 space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
                          <div className="h-10 w-10 shrink-0 rounded-full bg-purple-200 flex items-center justify-center text-[#7C3AED] font-bold">A</div>
                          <div className="hidden sm:block flex-1">
                            <div className="h-3.5 w-24 rounded bg-slate-800 mb-1.5"></div>
                            <div className="h-2.5 w-full rounded bg-slate-200"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="h-10 w-10 shrink-0 rounded-full bg-pink-100 flex items-center justify-center text-[#EC4899] font-bold">B</div>
                          <div className="hidden sm:block flex-1">
                            <div className="h-3.5 w-20 rounded bg-slate-800 mb-1.5"></div>
                            <div className="h-2.5 w-28 rounded bg-slate-200"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                          <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold">C</div>
                          <div className="hidden sm:block flex-1">
                            <div className="h-3.5 w-28 rounded bg-slate-800 mb-1.5"></div>
                            <div className="h-2.5 w-24 rounded bg-slate-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col bg-white">
                      <div className="flex items-center justify-between border-b border-slate-100 p-5 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="h-10 w-10 rounded-full bg-linear-to-tr from-purple-400 to-[#7C3AED] flex items-center justify-center text-white text-sm">JS</div>
                            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-500"></span>
                          </div>
                          <div>
                            <div className="h-3.5 w-32 rounded bg-slate-800 mb-1.5"></div>
                            <div className="h-2.5 w-16 rounded bg-slate-200"></div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-[#7C3AED]">more_vert</span>
                      </div>
                      <div className="flex-1 p-5 space-y-6 overflow-y-auto bg-slate-50/30">
                        <div className="flex gap-3">
                          <div className="h-8 w-8 rounded-full bg-purple-200 mt-auto shrink-0"></div>
                          <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 max-w-[85%]">
                            <p className="text-sm text-slate-700 leading-relaxed">Chào cậu! Moji mới update tính năng chat realtime nhanh lắm.</p>
                          </div>
                        </div>
                        <div className="flex gap-3 justify-end">
                          <div className="bg-linear-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899] p-4 rounded-2xl rounded-br-none shadow-md shadow-purple-200 max-w-[85%] text-white">
                            <p className="text-sm leading-relaxed">Tuyệt vời! Tớ vừa tạo tài khoản xong, mượt thật sự.</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="h-8 w-8 rounded-full bg-purple-200 mt-auto shrink-0"></div>
                          <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 max-w-[85%]">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-slate-400 font-medium">Đang nhập...</span>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed">Giao diện cũng đẹp nữa 😍</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 border-t border-slate-100 bg-white">
                        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 focus-within:border-[#7C3AED]/50 focus-within:ring-2 focus-within:ring-[#7C3AED]/10 transition-all">
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-[#7C3AED]">add_circle</span>
                          <input className="flex-1 bg-transparent border-none p-0 text-sm text-slate-700 placeholder:text-slate-400 focus:ring-0" placeholder="Nhập tin nhắn..." type="text" />
                          <button className="text-[#7C3AED] hover:text-[#6D28D9] transition-colors">
                            <span className="material-symbols-outlined">send</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="border-y border-slate-200 bg-white py-12">
          <div className="container mx-auto px-6 max-w-300 text-center">
            <p className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-400">Xây dựng trên nền tảng công nghệ mạnh mẽ</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50 px-5 py-3 transition-all hover:border-purple-200 hover:bg-purple-50 hover:shadow-sm">
                <span className="material-symbols-outlined text-slate-500 text-xl">bolt</span>
                <span className="text-sm font-bold text-slate-700">Socket.IO</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50 px-5 py-3 transition-all hover:border-purple-200 hover:bg-purple-50 hover:shadow-sm">
                <span className="material-symbols-outlined text-slate-500 text-xl">dns</span>
                <span className="text-sm font-bold text-slate-700">Node.js</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50 px-5 py-3 transition-all hover:border-purple-200 hover:bg-purple-50 hover:shadow-sm">
                <span className="material-symbols-outlined text-slate-500 text-xl">database</span>
                <span className="text-sm font-bold text-slate-700">MongoDB</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50 px-5 py-3 transition-all hover:border-purple-200 hover:bg-purple-50 hover:shadow-sm">
                <span className="material-symbols-outlined text-slate-500 text-xl">sync</span>
                <span className="text-sm font-bold text-slate-700">Realtime Sync</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50 px-5 py-3 transition-all hover:border-purple-200 hover:bg-purple-50 hover:shadow-sm">
                <span className="material-symbols-outlined text-slate-500 text-xl">palette</span>
                <span className="text-sm font-bold text-slate-700">Modern UI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Moji Section */}
        <section className="py-20 bg-[#F9FAFB]" id="features">
          <div className="container mx-auto px-6 max-w-300">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 lg:text-4xl">Tại sao chọn Moji?</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Những tính năng được thiết kế tối ưu giúp trải nghiệm chat của bạn trở nên tuyệt vời hơn bao giờ hết.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-[#7C3AED] group-hover:bg-linear-to-r group-hover:from-[#7C3AED] group-hover:via-[#A855F7] group-hover:to-[#EC4899] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">offline_bolt</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">Realtime</h3>
                <p className="text-slate-600 leading-relaxed">Tin nhắn gửi và nhận tức thì không độ trễ nhờ công nghệ Socket.IO tiên tiến nhất hiện nay.</p>
              </div>
              <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-[#7C3AED] group-hover:bg-linear-to-r group-hover:from-[#7C3AED] group-hover:via-[#A855F7] group-hover:to-[#EC4899] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">Ổn định</h3>
                <p className="text-slate-600 leading-relaxed">Hệ thống hoạt động ổn định 24/7. Đảm bảo bạn không bao giờ bỏ lỡ bất kỳ tin nhắn quan trọng nào.</p>
              </div>
              <div className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-[#7C3AED] group-hover:bg-linear-to-r group-hover:from-[#7C3AED] group-hover:via-[#A855F7] group-hover:to-[#EC4899] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">sentiment_satisfied_alt</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">Dễ dùng</h3>
                <p className="text-slate-600 leading-relaxed">Giao diện đơn giản, hiện đại và thân thiện. Ngay cả người mới bắt đầu cũng có thể sử dụng dễ dàng.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-300">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="text-3xl font-extrabold text-slate-900 lg:text-4xl">Tính năng nổi bật</h2>
                <p className="mt-4 text-lg text-slate-600">Khám phá sức mạnh kết nối của Moji với bộ công cụ toàn diện.</p>
              </div>
              <a className="group flex items-center gap-2 text-[#7C3AED] font-bold hover:text-[#A855F7] transition-colors" href="/features">
                Xem tất cả tính năng
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-[#F9FAFB] shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
                <div className="h-48 w-full bg-slate-200 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Abstract chat bubbles background"></div>
                <div className="flex flex-1 flex-col p-6 relative bg-white">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors">Nhắn tin Realtime</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Trò chuyện mượt mà với tốc độ ánh sáng, không cần tải lại trang.</p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-[#F9FAFB] shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
                <div className="h-48 w-full bg-slate-200 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Group of friends using phones"></div>
                <div className="flex flex-1 flex-col p-6 relative bg-white">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors">Kết bạn dễ dàng</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Gửi và nhận lời mời kết bạn nhanh chóng thông qua email hoặc tên.</p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-[#F9FAFB] shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
                <div className="h-48 w-full bg-slate-200 bg-[url('https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Person organizing tasks on a screen"></div>
                <div className="flex flex-1 flex-col p-6 relative bg-white">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors">Quản lý hội thoại</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Tạo nhóm, rời nhóm hoặc xóa cuộc trò chuyện tùy ý bạn muốn.</p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-[#F9FAFB] shadow-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
                <div className="h-48 w-full bg-slate-200 bg-[url('https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Online status indicator abstract"></div>
                <div className="flex flex-1 flex-col p-6 relative bg-white">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors">Trạng thái Online</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Biết ngay ai đang online hoặc đang soạn tin nhắn trả lời bạn.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="py-20 bg-[#F9FAFB]" id="guide">
          <div className="container mx-auto px-6 max-w-300">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 lg:text-4xl">Bắt đầu cực đơn giản</h2>
              <p className="mt-4 text-slate-600 text-lg">Chỉ 3 bước để tham gia cộng đồng Moji</p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-transparent via-purple-200 to-transparent -z-10"></div>
              <div className="flex flex-col items-center text-center group">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-white shadow-xl shadow-purple-500/10 ring-1 ring-slate-100 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899]">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Đăng ký tài khoản</h3>
                <p className="text-slate-600 max-w-xs leading-relaxed">Tạo tài khoản miễn phí chỉ trong 30 giây với email của bạn.</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-white shadow-xl shadow-purple-500/10 ring-1 ring-slate-100 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899]">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Tìm bạn bè</h3>
                <p className="text-slate-600 max-w-xs leading-relaxed">Gửi lời mời kết bạn hoặc tạo nhóm chat để mời mọi người.</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-white shadow-xl shadow-purple-500/10 ring-1 ring-slate-100 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899]">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Chat ngay</h3>
                <p className="text-slate-600 max-w-xs leading-relaxed">Bắt đầu trò chuyện không giới hạn với giao diện siêu mượt.</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <a className="inline-flex items-center text-[#7C3AED] font-bold hover:text-[#A855F7] transition-colors" href="/guide">
                Xem hướng dẫn chi tiết
                <span className="material-symbols-outlined ml-2 text-lg">arrow_outward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
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

        <Footer></Footer>
      </div>
    </div>
  );
}