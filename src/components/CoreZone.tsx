import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Radar, Swords, TreePine, ArrowLeft, ChevronRight } from "lucide-react";
import Station1Overview from "./stations/Station1Overview";
import Station2Traits from "./stations/Station2Traits";
import Station3Missions from "./stations/Station3Missions";
import Station4SkillTree from "./stations/Station4SkillTree";

interface CoreZoneProps {
  onBack: () => void;
}

const stations = [
  { id: 1, label: "Khái quát Vị trí", icon: MapPin, color: "glow-cyan", description: "Sa bàn 3D – Vị trí rường cột, chủ nhân tương lai" },
  { id: 2, label: "Đặc điểm", icon: Radar, color: "secondary", description: "Bảng Radar – Năng động, nhạy bén, khát vọng" },
  { id: 3, label: "Vai trò & Nhiệm vụ", icon: Swords, color: "glow-magenta", description: "Khu vực Nhiệm vụ – Xung kích trên mọi mặt trận" },
  { id: 4, label: "Phương hướng", icon: TreePine, color: "glow-green", description: "Cây kỹ năng – Lộ trình phát triển" },
];

const CoreZone = ({ onBack }: CoreZoneProps) => {
  const [activeStation, setActiveStation] = useState<number | null>(null);

  const renderStation = () => {
    switch (activeStation) {
      case 1: return <Station1Overview />;
      case 2: return <Station2Traits />;
      case 3: return <Station3Missions />;
      case 4: return <Station4SkillTree />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-surface-dark/90 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <button
            onClick={activeStation ? () => setActiveStation(null) : onBack}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {activeStation ? "Vùng Lõi" : "Bản đồ"}
          </button>
          <div className="flex-1 flex items-center gap-1 overflow-x-auto">
            <span className="text-xs font-display text-primary whitespace-nowrap">THANH NIÊN</span>
            {activeStation && (
              <>
                <ChevronRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                <span className="text-xs text-foreground whitespace-nowrap">
                  Trạm {activeStation}: {stations[activeStation - 1].label}
                </span>
              </>
            )}
          </div>
          {/* Station quick nav */}
          <div className="hidden md:flex items-center gap-2">
            {stations.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveStation(s.id)}
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-display transition-all ${
                  activeStation === s.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface-medium text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeStation ? (
          <motion.div
            key={activeStation}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {renderStation()}
          </motion.div>
        ) : (
          <motion.div
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 md:p-8 bg-grid-pattern min-h-[calc(100vh-52px)] relative"
          >
            <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
              >
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center mb-4 glow-gold">
                  <span className="font-display text-lg font-bold text-primary text-glow-gold">TN</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary text-glow-gold">
                  Vùng Lõi: Thanh Niên
                </h2>
                <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
                  Chọn một trạm để bắt đầu hành trình khám phá vai trò và sứ mệnh của thanh niên Việt Nam 
                  trong cơ cấu xã hội – giai cấp.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-5">
                {stations.map((station, i) => (
                  <motion.button
                    key={station.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    onClick={() => setActiveStation(station.id)}
                    className="text-left p-6 rounded-xl border border-border bg-surface-medium/40 backdrop-blur
                      hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-lg bg-surface-dark group-hover:bg-primary/10 transition-colors">
                        <station.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <span className="text-[10px] font-display text-muted-foreground uppercase">Trạm {station.id}</span>
                        <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">{station.label}</h3>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/60">{station.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      Khám phá <ChevronRight className="w-3 h-3" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoreZone;
