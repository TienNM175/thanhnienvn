import { motion } from "framer-motion";
import { MapPin, Globe, BookOpen, Users, Calendar, Flag } from "lucide-react";
import { useState } from "react";

const Station1Overview = () => {
  const [showMcScript, setShowMcScript] = useState(false);
  const [activeTab, setActiveTab] = useState<"quocte" | "vietnam">("quocte");

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glow-cyan/30 bg-glow-cyan/5 mb-3">
            <MapPin className="w-3 h-3 text-glow-cyan" />
            <span className="text-xs font-display text-glow-cyan uppercase tracking-wider">Trạm 1</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary text-glow-gold">
            Khái Quát Vị Trí
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Sa bàn chiến lược – Định vị thanh niên trong cơ cấu xã hội</p>
        </motion.div>

        {/* 3D Sandbox UI - Tab Switch */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveTab("quocte")}
            className={`px-4 py-2 rounded-lg text-sm font-display transition-all ${
              activeTab === "quocte" ? "bg-glow-cyan/20 text-glow-cyan border border-glow-cyan/40 glow-cyan" : "bg-surface-medium text-muted-foreground border border-border"
            }`}
          >
            <Globe className="w-4 h-4 inline mr-2" />
            Quốc tế
          </button>
          <button
            onClick={() => setActiveTab("vietnam")}
            className={`px-4 py-2 rounded-lg text-sm font-display transition-all ${
              activeTab === "vietnam" ? "bg-primary/20 text-primary border border-primary/40 glow-gold" : "bg-surface-medium text-muted-foreground border border-border"
            }`}
          >
            <Flag className="w-4 h-4 inline mr-2" />
            Việt Nam
          </button>
        </div>

        {/* Content Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "quocte" ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {activeTab === "quocte" ? (
            <>
              {/* Quốc tế */}
              <div className="bg-surface-medium/60 backdrop-blur border border-glow-cyan/20 rounded-xl p-6">
                <h3 className="font-display text-lg text-glow-cyan mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5" /> Thanh niên Quốc tế
                </h3>
                <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                  <p>
                    Trên trường quốc tế, thanh niên là bộ phận quan trọng bậc nhất của xã hội, 
                    giữ vị trí hàng đầu trong dựng nước, giữ nước và phát triển kinh tế-xã hội.
                  </p>
                  <div className="border-l-2 border-glow-cyan/40 pl-4 italic text-foreground/60">
                    "C.Mác, Ph.Ăngghen và V.I.Lênin coi thanh niên là lực lượng cách mạng hùng hậu, 
                    gắn bó với giai cấp công nhân, mang sứ mệnh kế thừa và phát triển thành tựu của người đi trước."
                  </div>
                </div>
              </div>
              <div className="bg-surface-medium/60 backdrop-blur border border-glow-cyan/20 rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full border-2 border-glow-cyan/40 flex items-center justify-center bg-glow-cyan/5 mb-4">
                    <Users className="w-10 h-10 text-glow-cyan" />
                  </div>
                  <p className="text-xs text-muted-foreground">Lực lượng cách mạng hùng hậu</p>
                  <p className="text-xs text-glow-cyan mt-1">Kế thừa • Phát triển • Sáng tạo</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Việt Nam */}
              <div className="bg-surface-medium/60 backdrop-blur border border-primary/20 rounded-xl p-6">
                <h3 className="font-display text-lg text-primary mb-4 flex items-center gap-2">
                  <Flag className="w-5 h-5" /> Thanh niên Việt Nam
                </h3>
                <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                  <p>
                    Theo Luật Thanh niên, thanh niên Việt Nam là người từ <span className="text-primary font-semibold">16 – 30 tuổi</span>, 
                    chiếm số đông dân số nhưng không tạo thành giai cấp độc lập.
                  </p>
                  <p>
                    Có mặt ở giai cấp công nhân, nông dân, trí thức và hiện diện trên mọi vùng miền, lĩnh vực. 
                    Là lực lượng xã hội to lớn, không chỉ định hình hiện tại mà còn là <span className="text-primary font-semibold">nhân tố chủ thể sáng tạo quyết định tương lai, vận mệnh dân tộc</span>.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {/* Milestone */}
                <div className="bg-surface-medium/60 backdrop-blur border border-primary/20 rounded-xl p-5">
                  <h4 className="font-display text-sm text-primary mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Mốc lịch sử
                  </h4>
                  <div className="space-y-2 text-xs text-foreground/70">
                    <div className="flex gap-3 items-start">
                      <span className="text-primary font-display font-bold whitespace-nowrap">26/3/1931</span>
                      <span>Thành lập Đoàn TNCS Hồ Chí Minh</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-primary font-display font-bold whitespace-nowrap">1930-31</span>
                      <span>Cao trào cách mạng – tấm gương Lý Tự Trọng</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-primary font-display font-bold whitespace-nowrap">8/1945</span>
                      <span>Tổng khởi nghĩa – lập nước VN DCCH</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-primary font-display font-bold whitespace-nowrap">1975</span>
                      <span>Đại thắng mùa xuân – "3 sẵn sàng", "5 xung phong"</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-primary font-display font-bold whitespace-nowrap">Đổi mới</span>
                      <span>"Thanh niên lập nghiệp", "Tuổi trẻ giữ nước", CNH-HĐH</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-medium/60 backdrop-blur border border-accent/20 rounded-xl p-4">
                  <h4 className="font-display text-xs text-accent mb-2">⚠ Thách thức hiện nay</h4>
                  <p className="text-xs text-foreground/60">
                    Toàn cầu hóa, chênh lệch giàu nghèo, biến đổi khí hậu, dịch bệnh, 
                    khủng hoảng năng lượng, tội phạm xuyên quốc gia.
                  </p>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* MC Script Toggle */}
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
                "Chào mừng các bạn đến với Trạm 1 – Sa bàn Chiến lược, nơi chúng ta khái quát vị trí của thanh niên trong cơ cấu xã hội."
              </p>
              <p className="mb-3">
                "Trên bình diện quốc tế, các nhà kinh điển Mác-Lênin đã sớm nhận ra: thanh niên chính là lực lượng cách mạng hùng hậu nhất, gắn bó mật thiết với giai cấp công nhân và mang sứ mệnh lịch sử to lớn – kế thừa, phát triển những thành tựu mà thế hệ trước đã xây đắp."
              </p>
              <p className="mb-3">
                "Tại Việt Nam, thanh niên được xác định là người từ 16 đến 30 tuổi, chiếm số đông dân số. Điều đặc biệt là thanh niên không tạo thành một giai cấp riêng biệt mà hiện diện trong mọi giai cấp, tầng lớp: từ công nhân, nông dân đến trí thức. Họ là 'rường cột quốc gia, chủ nhân tương lai' – như Bác Hồ từng khẳng định."
              </p>
              <p>
                "Ngày 26/3/1931 đánh dấu sự ra đời chính thức của Đoàn TNCS Hồ Chí Minh. Xuyên suốt lịch sử, từ cao trào cách mạng 1930-31 với tấm gương kiên trung Lý Tự Trọng, qua Tổng khởi nghĩa tháng Tám, kháng chiến chống Pháp-Mỹ, đến công cuộc đổi mới – thanh niên luôn là lực lượng xung kích hàng đầu. Ngày nay, trong bối cảnh toàn cầu hóa với nhiều cơ hội lẫn thách thức, thanh niên càng khẳng định vai trò 'nhân tố chủ thể sáng tạo quyết định tương lai dân tộc'."
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Station1Overview;
