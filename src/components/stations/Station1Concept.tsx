import { motion } from "framer-motion";
import { Globe, Flag, ArrowRight, BookOpen } from "lucide-react";

interface Station1ConceptProps {
  onNext: () => void;
}

const Station1Concept = ({ onNext }: Station1ConceptProps) => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-3 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Trạm 1.1: Cơ Sở Lý Luận</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Khái Niệm Về <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Tầng Lớp Thanh Niên</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Sứ mệnh và vai trò lịch sử của thanh niên được khẳng định qua lăng kính chính trị - tư tưởng.
          </p>
        </motion.div>

        {/* 2 Phương diện (Split Screen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Panel 1: Quốc tế (Mác - Lênin) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-400 transition-colors"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">Quan điểm Mác - Lênin</h3>
            </div>
            
            <div className="space-y-4 text-slate-300 relative z-10">
              <p className="leading-relaxed">
                Trên trường quốc tế, thanh niên giữ vị trí hàng đầu trong công cuộc dựng nước và phát triển kinh tế - xã hội.
              </p>
              <div className="p-4 bg-slate-800/80 border-l-4 border-cyan-400 rounded-r-lg italic text-sm">
                <span className="font-bold text-cyan-300">Nhận định kinh điển:</span> C.Mác, Ph.Ăngghen và V.I.Lênin coi thanh niên là <strong>lực lượng cách mạng hùng hậu</strong>, gắn bó máu thịt với giai cấp công nhân. Họ mang sứ mệnh lịch sử là kế thừa và kiến tạo thế giới mới từ nền tảng của thế hệ đi trước.
              </div>
            </div>
          </motion.div>

          {/* Panel 2: Việt Nam (Đảng & Bác Hồ) - Đã sửa lỗi trùng lặp */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="bg-slate-900/60 backdrop-blur-md border border-amber-500/30 p-8 rounded-2xl relative overflow-hidden group hover:border-amber-400 transition-colors"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <Flag className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400">Quan điểm Đảng & Bác Hồ</h3>
            </div>
            
            <div className="space-y-4 text-slate-300 relative z-10">
              <p className="leading-relaxed">
                Tại Việt Nam, vai trò của thanh niên không được nhìn nhận đơn thuần qua lăng kính dân số học, mà được nâng lên thành <strong>vận mệnh của quốc gia</strong>.
              </p>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex gap-2 items-start">
                  <span className="text-amber-400 mt-0.5">▹</span> 
                  <span><strong>Chủ tịch Hồ Chí Minh khẳng định:</strong> "Thanh niên là người chủ tương lai của nước nhà. Nước nhà thịnh hay suy, yếu hay mạnh một phần lớn là do các thanh niên."</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-amber-400 mt-0.5">▹</span> 
                  <span><strong>Đảng ta xác định:</strong> Thanh niên là lực lượng xung kích, đi đầu trong sự nghiệp Công nghiệp hóa - Hiện đại hóa và bảo vệ Tổ quốc Xã hội chủ nghĩa.</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Nút chuyển tiếp */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button 
            onClick={onNext}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            Phân Tích Cấu Trúc Xã Hội Học <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Station1Concept;