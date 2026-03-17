// src/stations/Station1Roleplay.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Factory, GraduationCap, Store, ArrowRight, UserCog, Lightbulb, Rocket, Unlock } from "lucide-react";
import { useState } from "react";

interface Station1RoleplayProps {
  onNext?: () => void;
}

const Station1Roleplay = ({ onNext }: Station1RoleplayProps) => {
  // State quản lý việc lật thẻ: null (chưa lật), hoặc 'A', 'B', 'C'
  const [revealed, setRevealed] = useState<string | null>(null);

  const toggleReveal = (id: string) => {
    setRevealed(revealed === id ? null : id);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header - Ít chữ, tạo bối cảnh */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 mb-4 shadow-[0_0_10px_rgba(251,191,36,0.3)]">
            <Unlock className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">Event: Ngã Rẽ Thời Đại (1988)</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            Bạn Chọn Con Đường Nào?
          </h2>
        </motion.div>

        {/* 3 Thẻ Lựa chọn - Ít chữ, dùng Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Lựa chọn A */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="perspective-1000"
          >
            <div 
              onClick={() => toggleReveal('A')}
              className={`relative w-full h-[350px] transition-all duration-500 transform-style-3d cursor-pointer ${revealed === 'A' ? 'rotate-y-180' : ''}`}
            >
              {/* Mặt trước (Dành để đặt câu hỏi) */}
              <div className="absolute inset-0 backface-hidden bg-slate-800/80 border-2 border-slate-600 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                <Factory className="w-20 h-20 text-blue-400 mb-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <h3 className="text-2xl font-bold text-white mb-2">Lựa chọn A</h3>
                <p className="text-blue-300 font-medium">Từ Bố</p>
                <ul className="mt-4 space-y-2 text-slate-300 text-center text-sm">
                  <li>• Làm nhà máy Quốc doanh</li>
                  <li>• An toàn, ổn định</li>
                  <li>• Nhà nước phân bổ</li>
                </ul>
              </div>
              
              {/* Mặt sau (Chốt lý thuyết) */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-blue-900/90 border-2 border-blue-400 rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <UserCog className="w-16 h-16 text-blue-300 mb-4" />
                <h3 className="text-2xl font-bold text-white text-center uppercase">Giai cấp<br/>Công nhân</h3>
                <p className="text-blue-200 text-center mt-4 text-sm">Gia nhập lực lượng sản xuất vật chất cốt lõi của xã hội.</p>
              </div>
            </div>
          </motion.div>

          {/* Lựa chọn B */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="perspective-1000"
          >
            <div 
              onClick={() => toggleReveal('B')}
              className={`relative w-full h-[350px] transition-all duration-500 transform-style-3d cursor-pointer ${revealed === 'B' ? 'rotate-y-180' : ''}`}
            >
              {/* Mặt trước */}
              <div className="absolute inset-0 backface-hidden bg-slate-800/80 border-2 border-slate-600 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
                <GraduationCap className="w-20 h-20 text-purple-400 mb-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                <h3 className="text-2xl font-bold text-white mb-2">Lựa chọn B</h3>
                <p className="text-purple-300 font-medium">Từ Mẹ</p>
                <ul className="mt-4 space-y-2 text-slate-300 text-center text-sm">
                  <li>• Ôn thi Đại học</li>
                  <li>• Làm việc chất xám</li>
                  <li>• Kỹ sư, Bác sĩ</li>
                </ul>
              </div>
              
              {/* Mặt sau */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-purple-900/90 border-2 border-purple-400 rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                <Lightbulb className="w-16 h-16 text-purple-300 mb-4" />
                <h3 className="text-2xl font-bold text-white text-center uppercase">Đội ngũ<br/>Trí thức</h3>
                <p className="text-purple-200 text-center mt-4 text-sm">Gia nhập lực lượng lao động trí óc, kiến tạo tri thức mới.</p>
              </div>
            </div>
          </motion.div>

          {/* Lựa chọn C */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="perspective-1000"
          >
            <div 
              onClick={() => toggleReveal('C')}
              className={`relative w-full h-[350px] transition-all duration-500 transform-style-3d cursor-pointer ${revealed === 'C' ? 'rotate-y-180' : ''}`}
            >
              {/* Mặt trước */}
              <div className="absolute inset-0 backface-hidden bg-slate-800/80 border-2 border-slate-600 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all">
                <Store className="w-20 h-20 text-pink-400 mb-6 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                <h3 className="text-2xl font-bold text-white mb-2">Lựa chọn C</h3>
                <p className="text-pink-300 font-medium">Từ Anh Trai</p>
                <ul className="mt-4 space-y-2 text-slate-300 text-center text-sm">
                  <li>• Mở tiệm sửa chữa</li>
                  <li>• Tự do buôn bán</li>
                  <li>• Tự làm chủ</li>
                </ul>
              </div>
              
              {/* Mặt sau */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-pink-900/90 border-2 border-pink-400 rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                <Rocket className="w-16 h-16 text-pink-300 mb-4" />
                <h3 className="text-2xl font-bold text-white text-center uppercase">Đội ngũ<br/>Doanh nhân</h3>
                <p className="text-pink-200 text-center mt-4 text-sm">Gia nhập lực lượng điều hành kinh tế, tạo ra của cải và việc làm.</p>
              </div>
            </div>
          </motion.div>

        </div>
        
        <p className="text-center text-slate-400 mt-8 text-sm italic">Click vào các thẻ để giải mã cơ cấu xã hội ẩn bên dưới</p>

      </div>
    </div>
  );
};

export default Station1Roleplay;