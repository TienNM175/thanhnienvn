// src/stations/Station1Theory.tsx
import { motion } from "framer-motion";
import { Fingerprint, Waypoints, Network, ArrowRight } from "lucide-react";

interface Station1TheoryProps {
  onNext: () => void;
}

const Station1Theory = ({ onNext }: Station1TheoryProps) => {
  // Cấu hình hiệu ứng xuất hiện lần lượt cho các thẻ
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

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
            <Fingerprint className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Trạm 1.1: Core Intel</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Định Vị <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Thanh Niên</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Góc nhìn học thuật từ Chủ nghĩa xã hội khoa học về vị trí của giới trẻ trong cơ cấu xã hội - giai cấp.
          </p>
        </motion.div>

        {/* 3 Thẻ Lý Thuyết */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Thẻ 1: Bản chất */}
          <motion.div variants={cardVariants} className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Fingerprint className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1. Bản Chất Nhân Khẩu</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2 items-start"><span className="text-cyan-400 mt-0.5">▹</span> Không phải là một giai cấp độc lập.</li>
              <li className="flex gap-2 items-start"><span className="text-cyan-400 mt-0.5">▹</span> Là nhóm nhân khẩu - xã hội đặc thù.</li>
              <li className="flex gap-2 items-start"><span className="text-cyan-400 mt-0.5">▹</span> Đặc trưng bởi độ tuổi (16-30), tâm sinh lý và khao khát khẳng định bản thân.</li>
            </ul>
          </motion.div>

          {/* Thẻ 2: Vị trí */}
          <motion.div variants={cardVariants} className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl hover:border-amber-400/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl" />
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
              <Waypoints className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">2. Tính Chuyển Tiếp</h3>
            <ul className="space-y-3 text-sm text-slate-300 relative z-10">
              <li className="flex gap-2 items-start"><span className="text-amber-400 mt-0.5">▹</span> Vị trí "Bản lề" giữa trẻ em và người trưởng thành.</li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 mt-0.5">▹</span> Là lực lượng dự bị chiến lược của quốc gia.</li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 mt-0.5">▹</span> Nguồn bổ sung liên tục, dồi dào nhất cho mọi giai cấp, tầng lớp.</li>
            </ul>
          </motion.div>

          {/* Thẻ 3: Phân hóa */}
          <motion.div variants={cardVariants} className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl hover:border-purple-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">3. Sự Phân Hóa Đa Dạng</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2 items-start"><span className="text-purple-400 mt-0.5">▹</span> Bản thân giới thanh niên không đồng nhất.</li>
              <li className="flex gap-2 items-start"><span className="text-purple-400 mt-0.5">▹</span> Đan xen sâu sắc: Thanh niên công nhân, nông dân, trí thức sinh viên, khởi nghiệp...</li>
              <li className="flex gap-2 items-start"><span className="text-purple-400 mt-0.5">▹</span> Phản ánh sự đa dạng của cơ cấu nền kinh tế.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Nút chuyển tiếp sang Trạm 1.2 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <button 
            onClick={onNext}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            Khởi động Sa bàn Thời gian <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Station1Theory;