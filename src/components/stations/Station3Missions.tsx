// src/stations/Station3Missions.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Vote, Briefcase, Palette, Monitor, Shield, ArrowRight, BookOpen, Target, ChevronRight } from "lucide-react";
import { useState } from "react";

// Dữ liệu đã gỡ bỏ yếu tố game (Rank, Type), tập trung vào học thuật
const roles = [
  {
    id: "digital",
    title: "Chuyển đổi số Quốc gia",
    icon: Monitor,
    field: "Công nghệ",
    color: "cyan",
    description: "Đi đầu ứng dụng và sáng tạo công nghệ số trong kỷ nguyên mới.",
    detail: "Thanh niên là lực lượng lõi xung kích trong chuyển đổi số quốc gia, ứng dụng AI, dữ liệu lớn. Tiên phong khởi nghiệp công nghệ, xây dựng nền kinh tế số và quản trị thông minh.",
    objectives: ["Làm chủ công nghệ lõi (AI, Cloud, Blockchain)", "Xây dựng hệ thống phần mềm phục vụ cộng đồng", "Lan tỏa kỹ năng số cho toàn dân"]
  },
  {
    id: "economy",
    title: "Tiên phong Kinh tế",
    icon: Briefcase,
    field: "Kinh tế",
    color: "amber",
    description: "Nòng cốt cách mạng 4.0, nguồn nhân lực CNH-HĐH.",
    detail: "Lực lượng xung kích hội nhập kinh tế quốc tế, giao lưu kết nối chia sẻ kiến thức, mở rộng công nghệ. Là nguồn nhân lực trọng yếu quyết định tính mới, cập nhật, sáng tạo đa phương diện.",
    objectives: ["Phát triển nền kinh tế tri thức", "Nâng cao năng lực cạnh tranh quốc tế", "Khởi nghiệp đổi mới sáng tạo"]
  },
  {
    id: "politics",
    title: "Xung kích Chính trị",
    icon: Vote,
    field: "Chính trị",
    color: "red",
    description: "Tiên phong, gương mẫu thực hiện nhiệm vụ Đảng, Nhà nước giao phó.",
    detail: "Thanh niên là lực lượng nòng cốt trong kiến thiết đất nước. Dẫn đầu xu hướng toàn cầu hóa, mở rộng đối ngoại, xây dựng bộ máy chính quyền tương lai trong sạch, vững mạnh.",
    objectives: ["Gương mẫu đổi mới sáng tạo", "Nâng cao chất lượng đoàn viên", "Bảo vệ nền tảng tư tưởng của Đảng"]
  },
  {
    id: "culture",
    title: "Kết nối Văn hóa",
    icon: Palette,
    field: "Văn hóa - Xã hội",
    color: "purple",
    description: "Kế thừa và phát triển bản sắc dân tộc trong hội nhập.",
    detail: "Nòng cốt lưu giữ nét đẹp văn hóa dân tộc. Công nghệ đưa thế hệ trẻ lại gần nhau bất kể khoảng cách địa lý. Xây dựng cộng đồng quốc tế với tính truyền thống là chìa khóa bảo tồn văn hóa.",
    objectives: ["Xây dựng chuẩn mực văn hóa mới", "Tiếp biến chọn lọc tinh hoa nhân loại", "Chống lại sự lai căng văn hóa"]
  },
  {
    id: "defense",
    title: "Bảo vệ Tổ quốc",
    icon: Shield,
    field: "Quốc phòng",
    color: "green",
    description: "Sẵn sàng chiến đấu, bảo vệ chủ quyền và an ninh quốc gia.",
    detail: "Kế thừa truyền thống 'cảm tử cho Tổ quốc quyết sinh'. Tham gia bảo vệ biên giới, biển đảo, và đặc biệt là mặt trận an ninh mạng trong bối cảnh chiến tranh thông tin hiện đại.",
    objectives: ["Bảo vệ an ninh biên giới và biển đảo", "Bảo vệ an ninh không gian mạng", "Xây dựng lực lượng dân quân tự vệ"]
  },
];

// Helper để map màu sắc cho từng lĩnh vực
const colorMap: Record<string, { text: string, bg: string, border: string, shadow: string, bar: string }> = {
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/50", shadow: "shadow-[0_0_15px_rgba(6,182,212,0.4)]", bar: "bg-cyan-400" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/50", shadow: "shadow-[0_0_15px_rgba(251,191,36,0.4)]", bar: "bg-amber-400" },
  red: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/50", shadow: "shadow-[0_0_15px_rgba(239,68,68,0.4)]", bar: "bg-red-400" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/50", shadow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]", bar: "bg-purple-400" },
  green: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/50", shadow: "shadow-[0_0_15px_rgba(34,197,94,0.4)]", bar: "bg-green-400" },
};

const Station3Missions = ({ onNext }: { onNext?: () => void }) => {
  const [showMcScript, setShowMcScript] = useState(false);
  const [activeRoleId, setActiveRoleId] = useState<string>(roles[0].id);

  const activeRole = roles.find(r => r.id === activeRoleId)!;
  const cTheme = colorMap[activeRole.color];

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header (Đã bỏ thanh EXP) */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 mb-3 shadow-[0_0_10px_rgba(217,70,239,0.3)]">
            <Target className="w-4 h-4 text-fuchsia-400" />
            <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider">Trạm 3: Vai Trò Cốt Lõi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Năm Trụ Cột <span className="text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]">Sứ Mệnh Mới</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">Phân tích vai trò xung kích của thanh niên trên các mặt trận trọng điểm</p>
        </motion.div>

        {/* Layout 2 Cột */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* CỘT TRÁI: Danh sách Vai trò (Navigation) */}
          <div className="lg:col-span-5 space-y-3">
            {roles.map((role, i) => {
              const isSelected = activeRoleId === role.id;
              const rColor = colorMap[role.color];

              return (
                <motion.button
                  key={role.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setActiveRoleId(role.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected 
                      ? `${rColor.bg} ${rColor.border} ${rColor.shadow} scale-[1.02]` 
                      : "bg-slate-800/40 border-slate-700 hover:bg-slate-800 hover:border-slate-500"
                  }`}
                >
                  {isSelected && <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-50" />}
                  
                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-xl flex-shrink-0 ${isSelected ? rColor.bg : 'bg-slate-800'}`}>
                      <role.icon className={`w-6 h-6 ${isSelected ? rColor.text : 'text-slate-400'}`} />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${isSelected ? rColor.text : 'text-slate-500'}`}>
                        {role.field}
                      </p>
                      <h3 className={`font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>{role.title}</h3>
                    </div>

                    {/* Arrow Indicator */}
                    {isSelected && (
                      <ChevronRight className={`w-5 h-5 ${rColor.text}`} />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* CỘT PHẢI: Bảng Chi tiết (Detail Dashboard) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoleId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`bg-slate-900/80 backdrop-blur-md rounded-2xl border p-6 md:p-8 relative overflow-hidden min-h-[480px] flex flex-col ${cTheme.border} ${cTheme.shadow}`}
              >
                {/* Dấu Background mờ */}
                <activeRole.icon className={`absolute -right-10 -top-10 w-64 h-64 opacity-[0.03] ${cTheme.text}`} />

                {/* Status Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/50 pb-4 mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <BookOpen className={`w-5 h-5 ${cTheme.text}`} />
                    <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Phân tích chuyên sâu</span>
                  </div>
                </div>

                {/* Nội dung chính */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h2 className={`text-3xl font-black mb-4 ${cTheme.text}`}>{activeRole.title}</h2>
                  
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800 mb-6">
                    <p className="text-base text-white font-medium leading-relaxed italic">
                      "{activeRole.description}"
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                    {activeRole.detail}
                  </p>

                  {/* Trách nhiệm cụ thể (Objectives) */}
                  <div className="mt-auto">
                    <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider border-b border-slate-700 pb-2">
                      <Target className={`w-4 h-4 ${cTheme.text}`} /> Trách nhiệm trọng tâm
                    </h4>
                    <ul className="space-y-3">
                      {activeRole.objectives.map((obj, idx) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          key={idx} 
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${cTheme.bar}`} />
                          {obj}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- Nút Chuyển Trạm & Kịch Bản MC --- */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-800 pt-6">
          <button onClick={() => setShowMcScript(!showMcScript)} className="text-sm font-bold text-fuchsia-500 hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {showMcScript ? "Đóng Kịch Bản MC" : "Xem Kịch Bản MC"}
          </button>

          {onNext && (
            <button onClick={onNext} className="inline-flex items-center gap-2 px-6 py-2 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
              Tiến vào Trạm 4: Giải Pháp <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Khung Script MC */}
        {showMcScript && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-slate-900/90 border border-fuchsia-500/30 rounded-xl p-6 text-sm text-slate-300 italic leading-relaxed text-left">
            <p className="mb-3 font-bold text-fuchsia-400">🎙️ Lời dẫn MC (Chuyên nghiệp, bám sát giáo trình):</p>
            <p className="mb-3">
              "Kính thưa thầy cô, sau khi nhận diện những đặc điểm cốt lõi, câu hỏi đặt ra là: Thanh niên sẽ ứng dụng sức mạnh đó vào đâu? Trạm 3 sẽ bóc tách 5 trụ cột sứ mệnh của thế hệ trẻ trong bối cảnh mới."
            </p>
            <p className="mb-3">
              *(MC click vào Tab Chuyển đổi số)* "Đầu tiên và quan trọng nhất hiện nay: **Mặt trận Công nghệ**. Thanh niên không chỉ là người tiêu thụ ứng dụng, mà phải là người làm chủ công nghệ lõi như AI, Blockchain để kiến tạo nền kinh tế số quốc gia. Ngay tại giảng đường đại học, việc sinh viên tự tay phát triển các hệ thống phần mềm thực tiễn chính là minh chứng rõ nét nhất."
            </p>
            <p className="mb-3">
              *(MC click vào Tab Kinh tế)* "Bên cạnh đó, trên **Mặt trận Kinh tế**, chúng ta là nguồn nhân lực trọng yếu, phát triển nền kinh tế tri thức để nâng cao năng lực cạnh tranh quốc gia trên trường quốc tế."
            </p>
            <p>
              *(MC click qua lại các tab khác)* "Ngoài ra, thanh niên còn là trụ cột trong **Chính trị** (bảo vệ nền tảng tư tưởng), **Văn hóa** (bảo tồn bản sắc) và **Quốc phòng** (bảo vệ chủ quyền biên giới và an ninh mạng). Trách nhiệm là vô cùng to lớn. Vậy làm sao để chúng ta rèn luyện đủ năng lực gánh vác sứ mệnh này? Xin mời thầy cô và các bạn bước sang Trạm 4: Giải pháp phát triển!"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Station3Missions;