// src/stations/Station2Traits.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Radar, BookOpen, Zap, Smartphone, Languages, Target, ShieldAlert, ArrowRight, BrainCircuit, X, Maximize2 } from "lucide-react";
import { useState } from "react";

const traits = [
  { id: 0, label: "Trí tuệ & Công nghệ", shapeLevel: 0.9, type: "buff", tag: "Ưu thế cốt lõi", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", icon: BrainCircuit, image: "https://cdn.nhandan.vn/images/73dd3adc521635952aeabcf6674a43b03b40422f429249063a32193f934c9471a818d52253567e20422d2e15c778e45b994bbdf3bd3e5896cb52876f460eda88/240526-sv-1-3713.jpg", description: "Tiếp thu cực nhanh tri thức mới, làm chủ công nghệ lõi (AI, Cloud, Blockchain) và đi đầu trong công cuộc chuyển đổi số quốc gia." ,source:"https://nhandan.vn/sinh-vien-viet-nam-doat-giai-cao-tai-cuoc-thi-cong-nghe-thong-tin-quoc-te-post811237.html"},
  { id: 1, label: "Năng động & Khát vọng", shapeLevel: 0.95, type: "buff", tag: "Động lực chính", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", icon: Target, image: "https://dddn.1cdn.vn/2025/04/21/cuocthisvstartup.jpg", description: "Dám nghĩ dám làm, khát khao khởi nghiệp mạnh mẽ và luôn có ý thức xây dựng thương hiệu cá nhân trong kỷ nguyên số." ,source:"https://diendandoanhnghiep.vn/cuoc-thi-sv-startup-nam-2025-san-choi-cong-bang-va-khich-le-cho-hang-trieu-hoc-sinh-sinh-vien-10153317.html"},
  { id: 2, label: "Hội nhập & Ngoại ngữ", shapeLevel: 0.65, type: "buff", tag: "Điểm nghẽn", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", icon: Languages, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000", description: "Khát vọng vươn ra toàn cầu rất lớn, nhưng rào cản ngoại ngữ (Tiếng Anh chuyên ngành) và kỹ năng mềm quốc tế vẫn là nút thắt." },
  { id: 3, label: "Trách nhiệm Xã hội", shapeLevel: 0.85, type: "buff", tag: "Nền tảng đạo đức", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30", icon: Zap, image: "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3efde5ce03a83e648fe6ee6577d000b833d11e12a7102f9043ea7fe6c18504c3ed1980c68ec0208c875e52dd11a63b2409a/miu-5515-8988.jpg", description: "Tinh thần tình nguyện cao, nhạy bén với các vấn đề môi trường, thiên tai. Sẵn sàng dùng chuyên môn để giải quyết bài toán xã hội." ,source:"https://nhandan.vn/nhiet-huyet-tinh-than-ba-san-sang-trong-chien-dich-sinh-vien-tinh-nguyen-mua-he-xanh-post817645.html"},
  { id: 4, label: "Sức đề kháng Văn hóa", shapeLevel: 0.6, type: "debuff", tag: "Rủi ro tiềm ẩn", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30", icon: ShieldAlert, image: "https://images2.thanhnien.vn/528068263637045248/2023/2/24/a2-16772475968231979000844.jpg", description: "Dễ bị tổn thương, thao túng tâm lý bởi thông tin độc hại (Fake news) trên không gian mạng và đối mặt với sự lai căng văn hóa." ,source:"https://thanhnien.vn/giai-ma-gen-z-nguoi-tre-dang-doi-dien-nhieu-van-de-ve-tam-ly-185230224210912768.htm"},
  { id: 5, label: "Áp lực Cạnh tranh", shapeLevel: 0.95, type: "debuff", tag: "Thách thức lớn", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", icon: Target, image: "https://benhvientamthanbentre.com.vn/uploads/news/2023_05/ap-luc-dong-trang-lua-1.jpg", description: "Chịu sức ép khổng lồ từ nguy cơ AI thay thế việc làm, hội chứng FOMO và áp lực đồng trang lứa (Peer pressure) chưa từng có." ,source:"https://benhvientamthanbentre.com.vn/tin-tuc-noi-bo/ap-luc-dong-trang-lua-va-cach-vuot-qua-219.html"},
];

const Station2Traits = ({ onNext }: { onNext?: () => void }) => {
  const [showMcScript, setShowMcScript] = useState(false);
  const [activeTrait, setActiveTrait] = useState<number | null>(null);
  const [expandedTrait, setExpandedTrait] = useState<number | null>(null);

  // FIX LỖI JSX Ở ĐÂY: Khai báo biến Icon để dùng trong Modal
  const ExpandedIcon = expandedTrait !== null ? traits[expandedTrait].icon : null;

  const getPolygonPoints = (cx: number, cy: number, r: number, sides: number): string => {
    return Array.from({ length: sides }, (_, i) => {
      const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
  };

  const getDataPoints = (cx: number, cy: number, maxR: number, items: any[]): string => {
    return items.map((item, i) => {
      const angle = (Math.PI * 2 * i) / items.length - Math.PI / 2;
      const r = maxR * item.shapeLevel;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-3 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            <Radar className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Trạm 2: Hồ Sơ Phân Tích</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Hệ Sinh Thái <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Đặc Điểm Thanh Niên</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">Click vào từng đặc điểm để phân tích chuyên sâu</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* CỘT TRÁI: Radar Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 flex items-center justify-center relative shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="relative w-80 h-80">
              <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible">
                {/* Lưới nền lục giác */}
                {[0.33, 0.66, 1].map((scale, i) => (
                  <polygon key={`ring-${i}`} points={getPolygonPoints(120, 120, 100 * scale, 6)} fill={i === 2 ? "rgba(30, 41, 59, 0.3)" : "none"} stroke="rgba(100, 116, 139, 0.2)" strokeWidth="1" />
                ))}
                {/* 6 đường trục */}
                {[0, 1, 2, 3, 4, 5].map(i => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  return <line key={`axis-${i}`} x1="120" y1="120" x2={120 + 100 * Math.cos(angle)} y2={120 + 100 * Math.sin(angle)} stroke="rgba(100, 116, 139, 0.4)" strokeWidth="1" strokeDasharray="4 4" />;
                })}
                {/* Khối Đa giác */}
                <motion.polygon initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1, type: "spring" }} style={{ transformOrigin: "120px 120px" }} points={getDataPoints(120, 120, 100, traits)} fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                {/* Các Node */}
                {traits.map((trait, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  const r = 100 * trait.shapeLevel;
                  const isHovered = activeTrait === i;
                  return (
                    <g key={`point-${i}`} onMouseEnter={() => setActiveTrait(i)} onMouseLeave={() => setActiveTrait(null)} onClick={() => setExpandedTrait(i)} className="cursor-pointer">
                      <motion.circle animate={{ r: isHovered ? 8 : 5 }} cx={120 + r * Math.cos(angle)} cy={120 + r * Math.sin(angle)} fill={trait.type === 'buff' ? "#06b6d4" : "#ef4444"} className="transition-all" />
                      {isHovered && <circle cx={120 + r * Math.cos(angle)} cy={120 + r * Math.sin(angle)} r="14" fill="none" stroke={trait.type === 'buff' ? "#06b6d4" : "#ef4444"} strokeWidth="2" className="animate-ping opacity-50" />}
                    </g>
                  );
                })}
                {/* Labels */}
                {traits.map((trait, i) => {
                  const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                  const r = 125; 
                  const isHovered = activeTrait === i;
                  let textAnchor = "middle";
                  if (Math.cos(angle) > 0.1) textAnchor = "start";
                  if (Math.cos(angle) < -0.1) textAnchor = "end";
                  return (
                    <text key={`label-${i}`} x={120 + r * Math.cos(angle)} y={120 + r * Math.sin(angle)} textAnchor={textAnchor} dominantBaseline="middle" className={`text-[9px] md:text-[11px] font-bold cursor-pointer transition-colors ${isHovered ? (trait.type === 'buff' ? "fill-cyan-400" : "fill-red-400") : "fill-slate-300 hover:fill-white"}`} onClick={() => setExpandedTrait(i)}>
                      {trait.label}
                    </text>
                  );
                })}
              </svg>
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-slate-500 italic">Mô hình biểu diễn sự phát triển không đồng đều</p>
          </motion.div>

          {/* CỘT PHẢI: Bảng Thẻ Định Tính */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-2 mb-4">Các Thuộc Tính Đặc Trưng</h3>
            <div className="grid grid-cols-1 gap-3 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
              {traits.map((trait, i) => (
                <motion.div
                  key={`stat-${i}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  onMouseEnter={() => setActiveTrait(i)}
                  onMouseLeave={() => setActiveTrait(null)}
                  onClick={() => setExpandedTrait(i)}
                  className={`relative w-full text-left p-4 rounded-xl border transition-all cursor-pointer overflow-hidden group ${
                    activeTrait === i 
                      ? `${trait.bg} ${trait.border} shadow-[0_0_15px_rgba(0,0,0,0.3)]`
                      : "bg-slate-800/40 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  <div className={`absolute top-1/2 -translate-y-1/2 right-4 transition-opacity duration-300 ${activeTrait === i ? "opacity-100" : "opacity-0"}`}>
                    <Maximize2 className={`w-5 h-5 ${trait.color}`} />
                  </div>

                  <div className="flex items-center justify-between pr-8">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${trait.bg}`}>
                        <trait.icon className={`w-4 h-4 ${trait.color}`} />
                      </div>
                      <span className="text-sm font-bold text-slate-200">{trait.label}</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded border ${trait.color} ${trait.border} ${trait.bg}`}>
                      {trait.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Nút Chuyển Trạm & Kịch bản MC */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-800 pt-6">
          <button onClick={() => setShowMcScript(!showMcScript)} className="text-sm font-bold text-cyan-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {showMcScript ? "Đóng Kịch Bản MC" : "Xem Kịch Bản MC (Chuẩn Học Thuật)"}
          </button>

          {onNext && (
            <button onClick={onNext} className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              Tiến vào Trạm 3: Vai trò <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Khung Script MC */}
        {showMcScript && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-6 text-sm text-slate-300 italic leading-relaxed text-left">
            <p className="mb-3 font-bold text-cyan-400">🎙️ Lời dẫn MC:</p>
            <p className="mb-3">
              "Kính thưa thầy cô, thay vì dùng những con số khô khan, nhóm em xin phép khái quát đặc điểm của thanh niên hiện nay qua một **Mô hình Mạng lưới Ý niệm** (Concept Network). Các bạn có thể thấy, hình dáng của mạng lưới này không phải là một khối lục giác đều hoàn hảo. Nó bị 'méo' đi. Tại sao lại như vậy?"
            </p>
            <p className="mb-3">
              *(MC click vào nhóm màu xanh/vàng)* "Sự vươn xa ở các trục màu xanh đại diện cho **Ưu thế cốt lõi**. Thanh niên chúng ta có Trí tuệ nhạy bén với công nghệ, có năng lượng khởi nghiệp mạnh mẽ và tinh thần vì cộng đồng rất cao. Chúng ta đang tận dụng triệt để những cơ hội của thời đại số."
            </p>
            <p className="mb-3">
              *(MC click vào Ngoại ngữ)* "Tuy nhiên, mạng lưới bị 'lõm' vào ở khu vực **Điểm nghẽn**. Đó chính là năng lực ngoại ngữ và kỹ năng hội nhập sâu. Khát vọng vươn ra thế giới rất lớn, nhưng sự chuẩn bị về ngôn ngữ của đại đa số thanh niên vẫn chưa theo kịp."
            </p>
            <p>
              *(MC click vào màu Đỏ/Tím)* "Đặc biệt, sự mất cân đối lớn nhất nằm ở các **Rủi ro tiềm ẩn** và **Thách thức**. Lần đầu tiên trong lịch sử, thế hệ trẻ phải đối mặt với áp lực đào thải khủng khiếp từ AI, gánh nặng tâm lý (Peer pressure) và sự tấn công của tin giả trên mạng. 
              Sự phát triển nhanh nhưng chưa đồng đều này chính là bức tranh chân thực nhất về thanh niên trong cơ cấu xã hội hiện đại!"
            </p>
          </motion.div>
        )}
      </div>

      {/* --- MODAL PHÓNG TO HÌNH ẢNH (ZOOM EFFECT) --- */}
      <AnimatePresence>
        {expandedTrait !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setExpandedTrait(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setExpandedTrait(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-3/5 h-[300px] md:h-[500px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900 z-10 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 md:hidden" />
                <img 
                  src={traits[expandedTrait].image} 
                  alt={traits[expandedTrait].label}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-2/5 p-8 flex flex-col justify-center relative z-10 bg-slate-900">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 w-fit ${traits[expandedTrait].bg} ${traits[expandedTrait].border}`}>
                  {/* Sử dụng biến ExpandedIcon đã khai báo ở trên */}
                  {ExpandedIcon && <ExpandedIcon className={`w-4 h-4 ${traits[expandedTrait].color}`} />}
                  <span className={`text-xs font-bold uppercase ${traits[expandedTrait].color}`}>
                    {traits[expandedTrait].tag}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {traits[expandedTrait].label}
                </h2>
                
                <div className="w-12 h-1 bg-slate-700 mb-6 rounded-full" />
                
                <p className="text-base text-slate-300 leading-relaxed">
                  {traits[expandedTrait].description}
                </p>

                <a href={traits[expandedTrait].source} target="_blank" rel="noopener noreferrer">
                  <p className="text-xs text-slate-500 italic">
                    {traits[expandedTrait].source}
                  </p>
                </a>
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <p className="text-xs text-slate-500 italic">
                    * Nhấn ESC hoặc click ra ngoài để đóng
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Station2Traits;