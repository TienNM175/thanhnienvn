import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Zap, ShoppingBag, Building2, Star } from "lucide-react";

interface WorldMapProps {
  onEnterCore: () => void;
}

const satellites = [
  {
    id: "energy",
    label: "Trạm Năng Lượng",
    subtitle: "Liên minh Công – Nông – Trí thức",
    icon: Zap,
    color: "glow-cyan",
    textColor: "text-glow-cyan",
    borderColor: "border-glow-cyan",
    bgGlow: "from-glow-cyan/10 to-transparent",
    position: "top-[18%] left-[10%] md:left-[15%]",
    description: "Nền tảng vững chắc của xã hội: giai cấp công nhân tiên phong, nông dân cần cù, trí thức sáng tạo – ba lực lượng hợp nhất thành trụ cột quốc gia.",
    mcScript: `Kính thưa quý vị, hành trình của chúng ta bắt đầu từ Trạm Năng Lượng – nơi hội tụ sức mạnh của ba lực lượng nền tảng: giai cấp công nhân, nông dân và trí thức. Đây không chỉ là liên minh chính trị mà còn là động lực kinh tế-xã hội cốt lõi. Giai cấp công nhân giữ vai trò tiên phong, nông dân là chủ thể của nông nghiệp-nông thôn, trí thức đóng góp tri thức và sáng tạo. Liên minh này tạo nên "dòng năng lượng" không ngừng nuôi dưỡng sự phát triển đất nước.`,
  },
  {
    id: "trade",
    label: "Khu Giao Thương",
    subtitle: "Tầng lớp Doanh nhân",
    icon: ShoppingBag,
    color: "glow-gold",
    textColor: "text-primary",
    borderColor: "border-primary",
    bgGlow: "from-primary/10 to-transparent",
    position: "top-[18%] right-[10%] md:right-[15%]",
    description: "Lực lượng doanh nhân – những nhà kiến tạo kinh tế, mở rộng giao thương, đưa Việt Nam hội nhập sâu vào chuỗi giá trị toàn cầu.",
    mcScript: `Tiếp theo, chúng ta di chuyển đến Khu Giao Thương – đại diện cho tầng lớp doanh nhân Việt Nam. Trong nền kinh tế thị trường định hướng XHCN, doanh nhân đóng vai trò "cầu nối" giữa sản xuất và thị trường, giữa quốc gia và quốc tế. Họ không chỉ tạo ra của cải vật chất mà còn góp phần giải quyết việc làm, thúc đẩy đổi mới sáng tạo và nâng cao vị thế kinh tế Việt Nam trên trường quốc tế.`,
  },
  {
    id: "city",
    label: "Đô Thị Xanh",
    subtitle: "Tầng lớp Trung lưu",
    icon: Building2,
    color: "glow-green",
    textColor: "text-glow-green",
    borderColor: "border-glow-green",
    bgGlow: "from-glow-green/10 to-transparent",
    position: "bottom-[15%] left-1/2 -translate-x-1/2",
    description: "Tầng lớp trung lưu đang tăng trưởng – động lực tiêu dùng, văn minh đô thị và phát triển bền vững.",
    mcScript: `Vùng cuối cùng trong vành đai – Đô Thị Xanh – tượng trưng cho tầng lớp trung lưu đang ngày càng lớn mạnh. Đây là lực lượng thúc đẩy tiêu dùng nội địa, nâng cao chất lượng sống và đặt nền móng cho phát triển bền vững. Sự gia tăng tầng lớp trung lưu phản ánh thành tựu công nghiệp hóa-hiện đại hóa và là minh chứng cho sự dịch chuyển tích cực trong cơ cấu xã hội-giai cấp Việt Nam.`,
  },
];

const WorldMap = ({ onEnterCore }: WorldMapProps) => {
  const [activeSatellite, setActiveSatellite] = useState<string | null>(null);
  const [showConvergence, setShowConvergence] = useState(false);
  const [allVisited, setAllVisited] = useState<Set<string>>(new Set());

  const handleSatelliteClick = (id: string) => {
    setActiveSatellite(id);
    const newVisited = new Set(allVisited);
    newVisited.add(id);
    setAllVisited(newVisited);

    if (newVisited.size === 3) {
      setTimeout(() => {
        setActiveSatellite(null);
        setShowConvergence(true);
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-grid-pattern overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center pt-8 pb-4 px-4"
      >
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">
          Chương 5 – Chủ nghĩa xã hội khoa học
        </p>
        <h1 className="text-2xl md:text-4xl font-display font-bold text-primary text-glow-gold">
          Cơ Cấu Xã Hội – Giai Cấp
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
          Khám phá bản đồ cơ cấu xã hội Việt Nam. Nhấn vào từng vùng để tìm hiểu.
        </p>
      </motion.div>

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Lines from satellites to center */}
        <motion.line
          x1="25" y1="25" x2="50" y2="50"
          stroke="hsl(185 72% 48% / 0.15)" strokeWidth="0.2" strokeDasharray="1 1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="75" y1="25" x2="50" y2="50"
          stroke="hsl(45 93% 58% / 0.15)" strokeWidth="0.2" strokeDasharray="1 1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }}
        />
        <motion.line
          x1="50" y1="80" x2="50" y2="50"
          stroke="hsl(142 72% 48% / 0.15)" strokeWidth="0.2" strokeDasharray="1 1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.1 }}
        />
      </svg>

      {/* Satellite Zones */}
      {satellites.map((sat, i) => (
        <motion.div
          key={sat.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
          className={`absolute ${sat.position} z-10 w-[260px] md:w-[300px]`}
        >
          <button
            onClick={() => handleSatelliteClick(sat.id)}
            className={`w-full p-5 rounded-xl border ${sat.borderColor}/30 bg-gradient-to-br ${sat.bgGlow} backdrop-blur-sm
              hover:scale-105 transition-all duration-300 text-left group
              ${allVisited.has(sat.id) ? 'ring-2 ring-primary/30' : ''}
              ${activeSatellite === sat.id ? 'scale-105' : ''}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg bg-${sat.color}/20`}>
                <sat.icon className={`w-5 h-5 ${sat.textColor}`} />
              </div>
              <div>
                <h3 className={`font-display text-sm font-semibold ${sat.textColor}`}>{sat.label}</h3>
                <p className="text-xs text-muted-foreground">{sat.subtitle}</p>
              </div>
            </div>
            <p className="text-xs text-foreground/70 leading-relaxed">{sat.description}</p>
            {allVisited.has(sat.id) && (
              <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                <Star className="w-3 h-3" /> Đã khám phá
              </div>
            )}
          </button>
        </motion.div>
      ))}

      {/* Center Core Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          animate={showConvergence ? {
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 30px hsl(45 93% 58% / 0.3)",
              "0 0 80px hsl(45 93% 58% / 0.6)",
              "0 0 30px hsl(45 93% 58% / 0.3)",
            ],
          } : {}}
          transition={{ duration: 2, repeat: showConvergence ? 2 : 0 }}
          className="relative"
        >
          <button
            onClick={showConvergence ? onEnterCore : undefined}
            disabled={!showConvergence}
            className={`w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-primary/50 flex flex-col items-center justify-center
              transition-all duration-500 ${showConvergence ? 'glow-gold cursor-pointer hover:scale-110 bg-primary/10' : 'bg-surface-medium/50 cursor-default'}`}
          >
            <span className="font-display text-xs md:text-sm font-bold text-primary text-glow-gold">
              THANH NIÊN
            </span>
            <span className="text-[10px] text-muted-foreground mt-1">Vùng Lõi</span>
            {showConvergence && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] text-primary mt-1 animate-pulse-glow"
              >
                ▶ KHÁM PHÁ
              </motion.span>
            )}
          </button>

          {/* Orbiting particles */}
          {showConvergence && (
            <>
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-glow-cyan top-0 left-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "0 60px" }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-primary top-0 left-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "0 70px" }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-glow-green bottom-0 left-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "0 -50px" }}
              />
            </>
          )}
        </motion.div>
      </div>

      {/* Convergence Light Beams */}
      <AnimatePresence>
        {showConvergence && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none z-5"
          >
            {/* Light beams converging */}
            <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] bg-radial-glow opacity-60" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MC Panel */}
      <AnimatePresence>
        {activeSatellite && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-2xl mx-auto bg-surface-dark/95 backdrop-blur-md border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span className="text-xs font-display text-primary uppercase tracking-wider">Kịch bản MC</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed italic">
                "{satellites.find(s => s.id === activeSatellite)?.mcScript}"
              </p>
              <button
                onClick={() => setActiveSatellite(null)}
                className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Đóng ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Convergence MC Script */}
      <AnimatePresence>
        {showConvergence && !activeSatellite && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-2xl mx-auto bg-surface-dark/95 backdrop-blur-md border border-primary/30 rounded-xl p-5 glow-gold">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span className="text-xs font-display text-primary uppercase tracking-wider">MC – Chuyển ý hội tụ</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed italic">
                "Từ sức mạnh nền tảng của liên minh Công-Nông-Trí thức, qua năng lực sáng tạo của doanh nhân, 
                đến sự phát triển bền vững của tầng lớp trung lưu – tất cả đều hội tụ về một điểm: THẾ HỆ THANH NIÊN. 
                Họ không đứng ngoài bất kỳ giai cấp nào mà hiện diện trong tất cả, như dòng máu chảy qua mọi 
                mạch nguồn của xã hội. Hãy cùng bước vào Vùng Lõi để khám phá vai trò, đặc điểm và sứ mệnh 
                của thanh niên Việt Nam trong cơ cấu xã hội hôm nay."
              </p>
              <button
                onClick={onEnterCore}
                className="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-display font-semibold hover:bg-primary/90 transition-colors"
              >
                ▶ Vào Vùng Lõi
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Credits */}
      <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
        <p className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em] font-display">Thực hiện bởi:</p>
        <div className="flex flex-col gap-0.5">
          <p className="text-[15px] font-display font-semibold text-primary/70 hover:text-primary transition-colors cursor-default">Nguyễn Mạnh Tiến</p>
          <p className="text-[15px] font-display font-semibold text-primary/70 hover:text-primary transition-colors cursor-default">Võ Thành Long</p>
          <p className="text-[15px] font-display font-semibold text-primary/70 hover:text-primary transition-colors cursor-default">Lê Ngọc Tuấn</p>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        {satellites.map(sat => (
          <div
            key={sat.id}
            className={`w-3 h-3 rounded-full border transition-colors ${
              allVisited.has(sat.id) ? 'bg-primary border-primary' : 'border-muted-foreground/30 bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
