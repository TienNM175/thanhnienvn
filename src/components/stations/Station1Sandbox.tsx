// src/stations/Station1Sandbox.tsx
import { motion } from "framer-motion";
import { MapPin, Lock, Unlock, GitMerge, BookOpen, Swords, Rocket, ShieldAlert } from "lucide-react";
import { useState } from "react";

const Station1Sandbox = () => {
  const [showMcScript, setShowMcScript] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState<"truoc1986" | "sau1986">("truoc1986");

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-3 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            <MapPin className="w-3 h-3 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Trạm 1.3: Sa Bàn Thực Tiễn</span>
          </div>
          <h2 className="text-3xl font-bold text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
            Dấu Ấn Lịch Sử & Cơ Cấu Xã Hội
          </h2>
          <p className="text-slate-400 text-sm mt-2">Sự chuyển dịch sứ mệnh và vị thế của Thanh niên qua các thời kỳ</p>
        </motion.div>

        {/* Timeline Switch */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTimeline("truoc1986")}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
              activeTimeline === "truoc1986" 
              ? "bg-slate-800 text-slate-200 border border-slate-500 shadow-[0_0_15px_rgba(100,116,139,0.5)]" 
              : "bg-slate-900/50 text-slate-500 border border-slate-800 hover:bg-slate-800"
            }`}
          >
            <Lock className="w-4 h-4" />
            Trước Đổi Mới (1931 - 1986)
          </button>
          <button
            onClick={() => setActiveTimeline("sau1986")}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
              activeTimeline === "sau1986" 
              ? "bg-amber-400/20 text-amber-400 border border-amber-400/50 shadow-[0_0_20px_rgba(251,191,36,0.4)]" 
              : "bg-slate-900/50 text-slate-500 border border-slate-800 hover:bg-slate-800"
            }`}
          >
            <Unlock className="w-4 h-4" />
            Sau Đổi Mới (Hiện nay)
          </button>
        </div>

        {/* Content Panel - Sa Bàn */}
        <motion.div
          key={activeTimeline}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8"
        >
          {activeTimeline === "truoc1986" ? (
            <div className="grid md:grid-cols-2 gap-8 items-center">
               {/* Cột 1: Dấu ấn Lịch sử */}
               <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Swords className="text-slate-400 w-6 h-6" />
                    <h3 className="text-xl font-bold text-slate-300">Sứ mệnh: Giải Phóng & Kiến Thiết</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-400 border-l-2 border-slate-700 pl-4">
                    <li><strong className="text-slate-200">1931 - 1945:</strong> Cao trào Cách mạng (Lý Tự Trọng) tiến tới Tổng khởi nghĩa lập nên nước VN Dân chủ Cộng hòa.</li>
                    <li><strong className="text-slate-200">Kháng chiến chống Pháp:</strong> Tinh thần "Cảm tử cho Tổ quốc quyết sinh".</li>
                    <li><strong className="text-slate-200">Kháng chiến chống Mỹ:</strong> Sôi nổi với "3 sẵn sàng", "5 xung phong", góp phần vào Đại thắng mùa xuân 1975.</li>
                    <li><strong className="text-slate-200">Sau thống nhất:</strong> Phong trào "3 xung kích làm chủ tập thể".</li>
                  </ul>
               </div>

               {/* Cột 2: Cơ cấu kinh tế */}
               <div className="flex flex-col items-center gap-6 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-slate-300">Cơ chế Kế Hoạch Hóa Tập Trung</h4>
                  <div className="px-8 py-3 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-300 font-bold uppercase">Thanh Niên</div>
                  <Lock className="text-slate-500 w-6 h-6" />
                  <div className="flex gap-4 w-full">
                     <div className="flex-1 text-center py-3 border border-slate-600 border-dashed text-slate-400 rounded bg-slate-900/50 text-sm">Công nhân Quốc doanh</div>
                     <div className="flex-1 text-center py-3 border border-slate-600 border-dashed text-slate-400 rounded bg-slate-900/50 text-sm">Nông dân Tập thể</div>
                  </div>
                  <p className="text-xs text-slate-400 text-center">Vị trí xã hội được phân bổ theo chỉ tiêu kế hoạch Nhà nước.</p>
               </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-center">
               {/* Cột 1: Dấu ấn Hiện đại & Thách thức */}
               <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="text-amber-400 w-6 h-6" />
                      <h3 className="text-xl font-bold text-amber-400">Sứ mệnh: Xây Dựng & Hội Nhập</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-300 border-l-2 border-amber-500/50 pl-4">
                      <li>Khởi xướng "Thanh niên lập nghiệp", "Tuổi trẻ giữ nước".</li>
                      <li>Là lực lượng xung kích trong sự nghiệp CNH - HĐH và xây dựng nền kinh tế tri thức.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldAlert className="text-red-400 w-5 h-5" />
                      <h4 className="font-bold text-red-400 text-sm">Thách Thức Bối Cảnh Mới</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Chịu áp lực mạnh mẽ từ toàn cầu hóa, sự phân hóa chênh lệch giàu nghèo, biến đổi khí hậu, khủng hoảng năng lượng và tội phạm công nghệ xuyên quốc gia.
                    </p>
                  </div>
               </div>

               {/* Cột 2: Cơ cấu kinh tế mở (ĐÃ FIX CHUẨN THUẬT NGỮ) */}
               <div className="flex flex-col items-center gap-4 bg-cyan-900/20 p-6 rounded-xl border border-cyan-500/30 relative">
                  <h4 className="font-bold text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Kinh Tế Thị Trường Định Hướng XHCN</h4>
                  <motion.div animate={{ boxShadow: ["0 0 10px rgba(6,182,212,0.4)", "0 0 20px rgba(6,182,212,0.8)", "0 0 10px rgba(6,182,212,0.4)"] }} transition={{ repeat: Infinity, duration: 2 }} className="px-8 py-2 bg-cyan-500/20 border-2 border-cyan-400 rounded-xl text-cyan-400 font-bold uppercase z-10 mt-2">
                    Thanh Niên
                  </motion.div>
                  <GitMerge className="text-cyan-400 w-6 h-6 rotate-180" />
                  
                  <div className="grid grid-cols-2 gap-3 w-full">
                     <div className="p-3 bg-blue-500/10 border border-blue-500/50 text-blue-300 rounded text-center text-xs font-semibold">Giai cấp Công nhân</div>
                     <div className="p-3 bg-green-500/10 border border-green-500/50 text-green-300 rounded text-center text-xs font-semibold">Giai cấp Nông dân</div>
                     <div className="p-3 bg-purple-500/10 border border-purple-500/50 text-purple-300 rounded text-center text-xs font-semibold">Đội ngũ Trí thức</div>
                     <div className="p-3 bg-pink-500/10 border border-pink-500/50 text-pink-300 rounded text-center text-xs font-semibold">Đội ngũ Doanh nhân</div>
                  </div>
                  <p className="text-xs text-slate-300 text-center mt-2">Tự do dịch chuyển và chủ động gia nhập vào các bộ phận của cơ cấu xã hội.</p>
               </div>
            </div>
          )}
        </motion.div>

        {/* MC Script Toggle */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowMcScript(!showMcScript)}
            className="text-sm font-bold text-cyan-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            {showMcScript ? "Đóng kịch bản MC" : "Xem kịch bản MC chuẩn học thuật"}
          </button>
          {showMcScript && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-6 text-sm text-slate-300 italic leading-relaxed text-left"
            >
              <p className="mb-3 font-bold text-cyan-400">🎙️ Lời dẫn MC (Đã chuẩn hóa thuật ngữ giáo trình):</p>
              <p className="mb-3">
                "Thưa các bạn, để thấy rõ tính chuyển tiếp của thanh niên, chúng ta hãy đặt họ vào dòng chảy lịch sử."
              </p>
              <p className="mb-3">
                *(Click tab Trước 1986)* "Xuyên suốt từ khi có Đảng, sứ mệnh của thanh niên là **Giải phóng dân tộc**. Đó là những thanh niên như Lý Tự Trọng, là phong trào '3 sẵn sàng', '5 xung phong' tiến tới đại thắng 1975. Ở giai đoạn này, về mặt cấu trúc xã hội, người trẻ chủ yếu được tổ chức vào **Công nhân quốc doanh** hoặc **Nông dân tập thể** theo sự phân bổ của kế hoạch Nhà nước."
              </p>
              <p>
                *(Click tab Hiện tại)* "Nhưng từ sau 1986, đất nước Đổi mới! Nền kinh tế thị trường định hướng XHCN đã mở tung bản đồ cơ cấu xã hội. Thanh niên không còn bị đóng khung. Một sinh viên công nghệ thông tin ngày nay hoàn toàn có quyền tự do lựa chọn: Ra trường trở thành **Đội ngũ trí thức**, khởi nghiệp để gia nhập **Đội ngũ doanh nhân**, hoặc làm việc trong các nhà máy tự động hóa với tư cách là **Giai cấp công nhân** hiện đại. Chính sự tự do dịch chuyển này đã làm cho vị thế của thanh niên đa dạng và chủ động hơn bao giờ hết!"
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Station1Sandbox;