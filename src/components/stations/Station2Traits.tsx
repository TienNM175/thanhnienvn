import { motion } from "framer-motion";
import { Radar, BookOpen, Zap, Smartphone, Languages, TrendingUp } from "lucide-react";
import { useState } from "react";

const traits = [
  { label: "Năng động", value: 90, color: "bg-glow-cyan", icon: Zap, description: "Nhiệt huyết, sẵn sàng hành động, không ngại thử thách" },
  { label: "Nhạy bén công nghệ", value: 85, color: "bg-primary", icon: Smartphone, description: "Tiên phong ứng dụng công nghệ số, AI, mạng xã hội" },
  { label: "Khát vọng hội nhập", value: 80, color: "bg-glow-green", icon: TrendingUp, description: "Mong muốn vươn ra thế giới, đạt chuẩn quốc tế" },
  { label: "Ngoại ngữ (→ C1)", value: 60, color: "bg-glow-magenta", icon: Languages, description: "Phá rào cản ngôn ngữ, hướng tới chuẩn C1 để hội nhập sâu" },
  { label: "Sáng tạo", value: 88, color: "bg-secondary", icon: Zap, description: "Tư duy đột phá, đổi mới trong mọi lĩnh vực" },
];

const Station2Traits = () => {
  const [showMcScript, setShowMcScript] = useState(false);
  const [activeTrait, setActiveTrait] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/5 mb-3">
            <Radar className="w-3 h-3 text-secondary" />
            <span className="text-xs font-display text-secondary uppercase tracking-wider">Trạm 2</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary text-glow-gold">
            Đặc Điểm Thanh Niên
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Bảng chỉ số Radar – Phân tích đặc trưng thế hệ trẻ</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Radar Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-surface-medium/60 backdrop-blur border border-border rounded-xl p-6 flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Pentagon background */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Grid rings */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points={getPolygonPoints(100, 100, 80 * scale, 5)}
                    fill="none"
                    stroke="hsl(222 30% 18%)"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Axis lines */}
                {[0, 1, 2, 3, 4].map(i => {
                  const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                  return (
                    <line
                      key={i}
                      x1="100" y1="100"
                      x2={100 + 80 * Math.cos(angle)}
                      y2={100 + 80 * Math.sin(angle)}
                      stroke="hsl(222 30% 18%)"
                      strokeWidth="0.5"
                    />
                  );
                })}
                {/* Data polygon */}
                <motion.polygon
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  points={getDataPoints(100, 100, 80, traits.map(t => t.value / 100))}
                  fill="hsl(45 93% 58% / 0.15)"
                  stroke="hsl(45 93% 58%)"
                  strokeWidth="1.5"
                />
                {/* Data dots */}
                {traits.map((trait, i) => {
                  const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                  const r = 80 * (trait.value / 100);
                  return (
                    <circle
                      key={i}
                      cx={100 + r * Math.cos(angle)}
                      cy={100 + r * Math.sin(angle)}
                      r={activeTrait === i ? 5 : 3}
                      fill="hsl(45 93% 58%)"
                      className="cursor-pointer transition-all"
                      onClick={() => setActiveTrait(i)}
                    />
                  );
                })}
                {/* Labels */}
                {traits.map((trait, i) => {
                  const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                  const r = 95;
                  return (
                    <text
                      key={i}
                      x={100 + r * Math.cos(angle)}
                      y={100 + r * Math.sin(angle)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-foreground/70 text-[6px] font-body cursor-pointer"
                      onClick={() => setActiveTrait(i)}
                    >
                      {trait.label}
                    </text>
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Stats bars */}
          <div className="space-y-4">
            {traits.map((trait, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => setActiveTrait(activeTrait === i ? null : i)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activeTrait === i ? "bg-primary/10 border-primary/40 glow-gold" : "bg-surface-medium/40 border-border hover:border-muted-foreground/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <trait.icon className={`w-4 h-4 ${activeTrait === i ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm font-semibold">{trait.label}</span>
                  </div>
                  <span className="text-sm font-display text-primary">{trait.value}%</span>
                </div>
                <div className="w-full h-2 bg-surface-dark rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${trait.value}%` }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                    className={`h-full rounded-full ${trait.color}`}
                  />
                </div>
                {activeTrait === i && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-foreground/60 mt-2"
                  >
                    {trait.description}
                  </motion.p>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* MC Script */}
        <div className="mt-8">
          <button
            onClick={() => setShowMcScript(!showMcScript)}
            className="text-xs font-display text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            {showMcScript ? "Ẩn kịch bản MC" : "Xem kịch bản MC"}
          </button>
          {showMcScript && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3 bg-surface-dark/90 border border-primary/20 rounded-xl p-5 text-sm text-foreground/70 italic leading-relaxed"
            >
              <p className="mb-3">
                "Bước sang Trạm 2, chúng ta phân tích đặc điểm nổi bật của thế hệ thanh niên hiện nay qua Bảng chỉ số Radar."
              </p>
              <p className="mb-3">
                "Đầu tiên – SỰ NĂNG ĐỘNG. Thanh niên hôm nay không chờ đợi cơ hội mà chủ động tạo ra cơ hội. 
                Từ khởi nghiệp sáng tạo đến tình nguyện cộng đồng, năng lượng của họ lan tỏa khắp nơi."
              </p>
              <p className="mb-3">
                "Tiếp theo – NHẠY BÉN CÔNG NGHỆ. Đây là thế hệ digital native, lớn lên cùng smartphone và AI. 
                Họ không chỉ sử dụng công nghệ mà còn sáng tạo công nghệ, từ ứng dụng di động đến giải pháp chuyển đổi số."
              </p>
              <p className="mb-3">
                "Đặc biệt, hãy chú ý chỉ số NGOẠI NGỮ – hiện ở mức 60%. Đây chính là rào cản lớn nhất cần phá vỡ. 
                Hướng tới chuẩn C1 không chỉ là mục tiêu cá nhân mà là điều kiện để cả thế hệ hội nhập sâu vào 
                sân chơi toàn cầu. Khi ngoại ngữ được nâng lên, tất cả các chỉ số khác cũng sẽ bứt phá theo."
              </p>
              <p>
                "Và cuối cùng – KHÁT VỌNG HỘI NHẬP, TINH THẦN SÁNG TẠO. Thanh niên Việt Nam không chấp nhận 
                đứng yên mà luôn khao khát vươn tầm, so sánh mình với chuẩn mực quốc tế và tìm cách bứt phá."
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

function getPolygonPoints(cx: number, cy: number, r: number, sides: number): string {
  return Array.from({ length: sides }, (_, i) => {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

function getDataPoints(cx: number, cy: number, maxR: number, values: number[]): string {
  return values.map((v, i) => {
    const angle = (Math.PI * 2 * i) / values.length - Math.PI / 2;
    const r = maxR * v;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

export default Station2Traits;
