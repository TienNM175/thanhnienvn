import { motion } from "framer-motion";
import { Swords, BookOpen, Briefcase, Monitor, Vote, Palette, Shield } from "lucide-react";
import { useState } from "react";

interface Mission {
  id: string;
  title: string;
  icon: React.ElementType;
  field: string;
  description: string;
  detail: string;
}

const missions: Mission[] = [
  {
    id: "politics",
    title: "Xung kích Chính trị",
    icon: Vote,
    field: "Chính trị",
    description: "Tiên phong, gương mẫu thực hiện nhiệm vụ Đảng, Nhà nước giao phó",
    detail: "Thanh niên luôn thể hiện tinh thần xả thân qua các cuộc chiến tranh giữ nước và là lực lượng nòng cốt trong kiến thiết đất nước. Dẫn đầu xu hướng toàn cầu hóa, mở rộng đàm phán quốc tế, xây dựng bộ máy chính quyền tương lai.",
  },
  {
    id: "economy",
    title: "Tiên phong Kinh tế",
    icon: Briefcase,
    field: "Kinh tế",
    description: "Nòng cốt cách mạng 4.0, nguồn nhân lực CNH-HĐH",
    detail: "Thế hệ tiên phong trong CMCN 4.0. Lực lượng xung kích hội nhập kinh tế quốc tế, giao lưu kết nối chia sẻ kiến thức, mở rộng công nghệ. Nguồn nhân lực trọng yếu quyết định tính mới, cập nhật, sáng tạo đa phương diện kinh tế.",
  },
  {
    id: "culture",
    title: "Kết nối Văn hóa",
    icon: Palette,
    field: "Văn hóa - Xã hội",
    description: "Kế thừa và phát triển bản sắc dân tộc trong hội nhập",
    detail: "Thanh niên là nòng cốt lưu giữ, kế thừa nét đẹp văn hóa dân tộc. Công nghệ đưa thế hệ trẻ lại gần nhau bất kể khoảng cách địa lý. Xây dựng cộng đồng quốc tế với tính truyền thống, là chìa khóa bảo tồn văn hóa trong toàn cầu hóa.",
  },
  {
    id: "digital",
    title: "Chuyển đổi số",
    icon: Monitor,
    field: "Công nghệ",
    description: "Đi đầu ứng dụng và sáng tạo công nghệ số",
    detail: "Xung kích trong chuyển đổi số quốc gia, ứng dụng AI, dữ liệu lớn. Khởi nghiệp công nghệ, xây dựng nền kinh tế số và quản trị thông minh.",
  },
  {
    id: "defense",
    title: "Bảo vệ Tổ quốc",
    icon: Shield,
    field: "Quốc phòng",
    description: "Sẵn sàng chiến đấu, bảo vệ chủ quyền và an ninh",
    detail: "Kế thừa truyền thống 'cảm tử cho Tổ quốc quyết sinh'. Tham gia bảo vệ biên giới, biển đảo, an ninh mạng. Tinh thần 'tình nguyện xây dựng và bảo vệ Tổ quốc'.",
  },
];

const Station3Missions = () => {
  const [showMcScript, setShowMcScript] = useState(false);
  const [activeMission, setActiveMission] = useState<string | null>(null);
  const [completedMissions, setCompletedMissions] = useState<Set<string>>(new Set());

  const handleMissionClick = (id: string) => {
    setActiveMission(activeMission === id ? null : id);
    const newCompleted = new Set(completedMissions);
    newCompleted.add(id);
    setCompletedMissions(newCompleted);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glow-magenta/30 bg-glow-magenta/5 mb-3">
            <Swords className="w-3 h-3 text-glow-magenta" />
            <span className="text-xs font-display text-glow-magenta uppercase tracking-wider">Trạm 3</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary text-glow-gold">
            Vai Trò & Nhiệm Vụ
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Khu vực Nhiệm vụ – Khám phá vai trò xung kích của thanh niên</p>
          <div className="mt-3 text-xs text-muted-foreground">
            Tiến trình: {completedMissions.size}/{missions.length} nhiệm vụ đã khám phá
            <div className="w-48 h-1.5 bg-surface-dark rounded-full mx-auto mt-2 overflow-hidden">
              <motion.div
                className="h-full bg-glow-magenta rounded-full"
                animate={{ width: `${(completedMissions.size / missions.length) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-surface-medium/40 border border-primary/20 rounded-xl p-4 mb-8 text-center"
        >
          <p className="text-sm italic text-foreground/70">
            "Đâu cần, thanh niên có; việc gì khó, thanh niên làm"
          </p>
          <p className="text-xs text-primary mt-1">— Chủ tịch Hồ Chí Minh</p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {missions.map((mission, i) => (
            <motion.button
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => handleMissionClick(mission.id)}
              className={`text-left p-5 rounded-xl border transition-all ${
                activeMission === mission.id
                  ? "bg-glow-magenta/10 border-glow-magenta/40 glow-magenta"
                  : completedMissions.has(mission.id)
                  ? "bg-surface-medium/40 border-primary/20"
                  : "bg-surface-medium/40 border-border hover:border-muted-foreground/30"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${activeMission === mission.id ? "bg-glow-magenta/20" : "bg-surface-dark"}`}>
                  <mission.icon className={`w-5 h-5 ${activeMission === mission.id ? "text-glow-magenta" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <span className="text-[10px] font-display text-muted-foreground uppercase">{mission.field}</span>
                  <h3 className="text-sm font-semibold">{mission.title}</h3>
                </div>
                {completedMissions.has(mission.id) && (
                  <span className="ml-auto text-xs text-primary">✓</span>
                )}
              </div>
              <p className="text-xs text-foreground/70 leading-relaxed">{mission.description}</p>
              {activeMission === mission.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 pt-3 border-t border-border"
                >
                  <p className="text-xs text-foreground/60 leading-relaxed">{mission.detail}</p>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Responsibilities section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-surface-medium/40 border border-border rounded-xl p-6"
        >
          <h3 className="font-display text-lg text-primary mb-4">Trách nhiệm cụ thể</h3>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-foreground/70">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground/90">🏛 Chính trị</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Gương mẫu đổi mới sáng tạo, làm chủ KHCN</li>
                <li>Tăng cường quan hệ với Đoàn, Hội</li>
                <li>Nâng cao chất lượng đoàn viên, tính tiên phong</li>
                <li>Xây dựng Đảng, chính quyền trong sạch</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground/90">🎨 Văn hóa - Xã hội</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Xây dựng nếp sống mới, chuẩn mực văn hóa mới</li>
                <li>Bảo tồn và phát huy bản sắc dân tộc</li>
                <li>Tiếp biến chọn lọc tinh hoa nhân loại</li>
                <li>Phát triển thanh niên toàn diện</li>
              </ul>
            </div>
          </div>
        </motion.div>

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
                "Trạm 3 – Khu vực Nhiệm vụ. Như Bác Hồ đã nói: 'Đâu cần, thanh niên có; việc gì khó, thanh niên làm'. 
                Vậy cụ thể, thanh niên đang xung kích trên những mặt trận nào?"
              </p>
              <p className="mb-3">
                "Thứ nhất – CHÍNH TRỊ. Thanh niên luôn là lực lượng tiên phong, gương mẫu thực hiện đường lối của Đảng. 
                Họ dẫn đầu xu hướng toàn cầu hóa, mở rộng đối ngoại, là lực lượng nòng cốt trong bộ máy chính quyền tương lai."
              </p>
              <p className="mb-3">
                "Thứ hai – KINH TẾ. Thanh niên là thế hệ tiên phong của CMCN 4.0, nguồn nhân lực trọng yếu quyết định 
                tính đổi mới, sáng tạo của nền kinh tế. Họ là lực lượng xung kích hội nhập kinh tế quốc tế."
              </p>
              <p className="mb-3">
                "Thứ ba – VĂN HÓA XÃ HỘI. Thanh niên chính là chìa khóa kết nối truyền thống và hiện đại. 
                Họ lưu giữ bản sắc dân tộc trong khi chủ động hội nhập văn hóa quốc tế."
              </p>
              <p className="mb-3">
                "Thứ tư – CHUYỂN ĐỔI SỐ. Đây là vai trò hoàn toàn mới, đặc trưng của thế hệ số. 
                Thanh niên đi đầu ứng dụng AI, dữ liệu lớn, khởi nghiệp công nghệ."
              </p>
              <p>
                "Và cuối cùng – BẢO VỆ TỔ QUỐC. Kế thừa truyền thống 'cảm tử cho Tổ quốc', 
                thanh niên ngày nay mở rộng mặt trận ra cả không gian mạng, bảo vệ chủ quyền số."
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Station3Missions;
