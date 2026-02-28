import React from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="font-['Manrope',sans-serif] bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-[#7c3aed]/30 selection:text-[#7c3aed]">
      {/* Import Fonts & Icons */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8;
        }
      `}} />

      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-4 py-20 md:py-28">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#7c3aed]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
              <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#a855f7]/10 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen opacity-40"></div>
            </div>
            
            <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                Liên hệ <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7c3aed] to-[#a855f7]">Moji</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 md:text-xl max-w-2xl mx-auto leading-relaxed">
                Ghé thăm văn phòng hoặc liên hệ trực tuyến — chúng tôi luôn sẵn sàng hỗ trợ bạn.
              </p>
            </div>
          </section>

          {/* Contact Info & Map Section */}
          <section className="container mx-auto px-4 pb-24 -mt-12 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-7xl mx-auto">
              
              {/* Map Illustration (Left) */}
              <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1 h-full">
                <div className="group relative h-full min-h-[500px] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 shadow-xl shadow-slate-200/40 dark:shadow-black/40 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-2xl hover:shadow-[#7c3aed]/5">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424167419722!2d106.69835107481812!3d10.778817289369986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f48a2131971%3A0xc3c6fa2f16d7a46!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                    className="w-full h-full min-h-[500px] border-0 dark:invert dark:hue-rotate-180 dark:contrast-75 dark:opacity-80"
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ văn phòng Moji"
                  ></iframe>
                </div>
              </div>

              {/* Support Info & FAQ (Right) */}
              <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 order-1 lg:order-2">
                
                {/* Contact Card */}
                <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Thông tin hỗ trợ</h4>
                  <ul className="flex flex-col gap-8">
                    <li className="flex items-start gap-4 group">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">location_city</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-0.5">Địa chỉ</p>
                        <p className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                          Chung cư N07B2 , P. Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội, Vietnam
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-0.5">Email hỗ trợ</p>
                        <a className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#7c3aed] transition-colors" href="mailto:support@moji.app">support@moji.app</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">schedule</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-0.5">Thời gian làm việc</p>
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-bold text-slate-900 dark:text-white">Thứ 2 - Thứ 6</p>
                          <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">08:00 - 17:30</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* FAQ Card */}
                <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-8 border border-indigo-100/50 dark:border-slate-800">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#7c3aed]">quiz</span>
                    Câu hỏi thường gặp
                  </h4>
                  <div className="flex flex-col gap-4">
                    <details className="group bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-slate-700 shadow-sm open:shadow-md transition-shadow">
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-slate-800 dark:text-slate-200 text-sm">
                        <span>Moji có văn phòng đại diện không?</span>
                        <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          Có. Bạn có thể ghé thăm văn phòng chính tại TP. Hồ Chí Minh trong giờ hành chính.
                        </p>
                      </div>
                    </details>
                    <details className="group bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-slate-700 shadow-sm open:shadow-md transition-shadow">
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-slate-800 dark:text-slate-200 text-sm">
                        <span>Có hỗ trợ trực tiếp tại văn phòng không?</span>
                        <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          Đội ngũ kỹ thuật hỗ trợ trực tuyến 24/7. Hỗ trợ trực tiếp tại văn phòng cần đặt lịch hẹn trước.
                        </p>
                      </div>
                    </details>
                    <details className="group bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-slate-700 shadow-sm open:shadow-md transition-shadow">
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-slate-800 dark:text-slate-200 text-sm">
                        <span>Gửi thư qua đường bưu điện?</span>
                        <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          Vui lòng gửi về địa chỉ văn phòng ghi ở mục thông tin, người nhận: Bộ phận CSKH Moji.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border-t border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 py-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <h2 className="mb-6 text-3xl font-black text-slate-900 dark:text-white md:text-5xl">Chưa có tài khoản?</h2>
              <p className="mb-10 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Tham gia cùng hàng nghìn người dùng đang trải nghiệm cách nhắn tin mới mẻ trên Moji ngay hôm nay.</p>
              <Link className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#7c3aed] px-10 text-lg font-bold text-white transition-all hover:bg-[#6d28d9] hover:shadow-xl hover:shadow-[#7c3aed]/20 hover:-translate-y-1" to="/signup">
                <span>Bắt đầu miễn phí</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}