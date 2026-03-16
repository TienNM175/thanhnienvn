import { motion } from "framer-motion";
import { TreePine, BookOpen, GraduationCap, Heart, Brain, Target, Users, Lightbulb } from "lucide-react";
import { useState } from "react";

interface SkillNode {
  id: string;
  label: string;
  icon: React.ElementType;
  level: number;
  description: string;
  children?: string[];
}

const skillTree: SkillNode[] = [
  {
    id: "root",
    label: "Phát triển Toàn diện",
    icon: Target,
    level: 0,
    description: "Mục tiêu cuối cùng: thanh niên Việt Nam phát triển toàn diện đức – trí – thể – mỹ",
    children: ["education", "selfdev"],
  },
  {
    id: "education",
    label: "Giải pháp Giáo dục",
    icon: GraduationCap,
    level: 1,
    description: "Đổi mới giáo dục toàn diện: chương trình, phương pháp, môi trường học tập",
    children: ["policy", "environment"],
  },
  {
    id: "selfdev",
    label: "Tự Rèn Luyện",
    icon: Heart,
    level: 1,
    description: "Chủ động rèn luyện bản thân: tư tưởng, đạo đức, kỹ năng, sức khỏe",
    children: ["mindset", "skills"],
  },
  {
    id: "policy",
    label: "Chính sách & Chương trình",
    icon: Users,
    level: 2,
    description: "Nâng cao chất lượng đoàn viên. Xây dựng đội ngũ cán bộ Đoàn vững bản lĩnh, giỏi nghiệp vụ, đạo đức tốt. Tạo môi trường thuận lợi khơi dậy truyền thống yêu nước, niềm tự hào dân tộc.",
  },
  {
    id: "environment",
    label: "Môi trường Phát triển",
    icon: Lightbulb,
    level: 2,
    description: "Tạo điều kiện xã hội thuận lợi nhất để phát huy tài năng, trí tuệ, phẩm chất con người Việt Nam. Phát triển văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
  },
  {
    id: "mindset",
    label: "Tư tưởng & Đạo đức",
    icon: Brain,
    level: 2,
    description: "Nâng cao chất lượng chính trị, tư tưởng. Tính tiên phong, gương mẫu. Xây dựng lối sống đẹp, mở rộng giao lưu văn hóa có chọn lọc, chống văn hóa độc hại.",
  },
  {
    id: "skills",
    label: "Kỹ năng & Hành động",
    icon: Target,
    level: 2,
    description: "Đổi mới sáng tạo, làm chủ KHCN. Xung kích trong học tập, lao động, chuyển đổi số. Hướng tới chuẩn quốc tế, phá rào cản ngoại ngữ.",
  },
];

const Station4SkillTree = () => {
  const [showMcScript, setShowMcScript] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [unlockedNodes, setUnlockedNodes] = useState<Set<string>>(new Set(["root"]));

  const handleNodeClick = (node: SkillNode) => {
    setActiveNode(activeNode === node.id ? null : node.id);
    const newUnlocked = new Set(unlockedNodes);
    newUnlocked.add(node.id);
    if (node.children) {
      node.children.forEach(c => newUnlocked.add(c));
    }
    setUnlockedNodes(newUnlocked);
  };

  const isUnlocked = (id: string) => unlockedNodes.has(id);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glow-green/30 bg-glow-green/5 mb-3">
            <TreePine className="w-3 h-3 text-glow-green" />
            <span className="text-xs font-display text-glow-green uppercase tracking-wider">Trạm 4</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary text-glow-gold">
            Phương Hướng Phát Triển
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Cây kỹ năng – Lộ trình phát triển thanh niên</p>
          <p className="text-xs text-muted-foreground mt-1">Nhấn vào mỗi nút để mở khóa nhánh tiếp theo</p>
        </motion.div>

        {/* Skill Tree Visualization */}
        <div className="space-y-6">
          {/* Level 0 - Root */}
          <div className="flex justify-center">
            <SkillNodeCard
              node={skillTree[0]}
              isActive={activeNode === "root"}
              isUnlocked={true}
              onClick={() => handleNodeClick(skillTree[0])}
              colorClass="border-primary/40 bg-primary/10"
            />
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className={`w-0.5 h-8 ${isUnlocked("education") ? "bg-primary/40" : "bg-border"} transition-colors`} />
          </div>

          {/* Level 1 */}
          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            <SkillNodeCard
              node={skillTree[1]}
              isActive={activeNode === "education"}
              isUnlocked={isUnlocked("education")}
              onClick={() => handleNodeClick(skillTree[1])}
              colorClass="border-glow-cyan/40 bg-glow-cyan/10"
            />
            <SkillNodeCard
              node={skillTree[2]}
              isActive={activeNode === "selfdev"}
              isUnlocked={isUnlocked("selfdev")}
              onClick={() => handleNodeClick(skillTree[2])}
              colorClass="border-glow-magenta/40 bg-glow-magenta/10"
            />
          </div>

          {/* Connectors */}
          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex justify-center">
              <div className={`w-0.5 h-8 ${isUnlocked("policy") ? "bg-glow-cyan/40" : "bg-border"} transition-colors`} />
            </div>
            <div className="flex justify-center">
              <div className={`w-0.5 h-8 ${isUnlocked("mindset") ? "bg-glow-magenta/40" : "bg-border"} transition-colors`} />
            </div>
          </div>

          {/* Level 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <SkillNodeCard
              node={skillTree[3]}
              isActive={activeNode === "policy"}
              isUnlocked={isUnlocked("policy")}
              onClick={() => handleNodeClick(skillTree[3])}
              colorClass="border-glow-cyan/30 bg-glow-cyan/5"
              compact
            />
            <SkillNodeCard
              node={skillTree[4]}
              isActive={activeNode === "environment"}
              isUnlocked={isUnlocked("environment")}
              onClick={() => handleNodeClick(skillTree[4])}
              colorClass="border-glow-cyan/30 bg-glow-cyan/5"
              compact
            />
            <SkillNodeCard
              node={skillTree[5]}
              isActive={activeNode === "mindset"}
              isUnlocked={isUnlocked("mindset")}
              onClick={() => handleNodeClick(skillTree[5])}
              colorClass="border-glow-magenta/30 bg-glow-magenta/5"
              compact
            />
            <SkillNodeCard
              node={skillTree[6]}
              isActive={activeNode === "skills"}
              isUnlocked={isUnlocked("skills")}
              onClick={() => handleNodeClick(skillTree[6])}
              colorClass="border-glow-magenta/30 bg-glow-magenta/5"
              compact
            />
          </div>
        </div>

        {/* Active Node Detail */}
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-surface-medium/60 border border-primary/20 rounded-xl p-6"
          >
            <h3 className="font-display text-sm text-primary mb-2">
              {skillTree.find(n => n.id === activeNode)?.label}
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              {skillTree.find(n => n.id === activeNode)?.description}
            </p>
          </motion.div>
        )}

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
                "Trạm cuối cùng – Cây Kỹ năng – nơi chúng ta vạch ra phương hướng phát triển cho thanh niên Việt Nam."
              </p>
              <p className="mb-3">
                "Mục tiêu gốc rễ rất rõ ràng: PHÁT TRIỂN TOÀN DIỆN – đức, trí, thể, mỹ. 
                Để đạt được, cần hai nhánh song song."
              </p>
              <p className="mb-3">
                "Nhánh thứ nhất – GIẢI PHÁP GIÁO DỤC. Đây là trách nhiệm của hệ thống, của Đảng và Nhà nước. 
                Cần đổi mới chính sách, nâng cao chất lượng đoàn viên, xây dựng đội ngũ cán bộ Đoàn vững bản lĩnh, 
                giỏi nghiệp vụ. Đồng thời tạo môi trường phát triển thuận lợi – nơi khơi dậy truyền thống yêu nước, 
                tự hào dân tộc, phát huy tài năng con người Việt Nam."
              </p>
              <p className="mb-3">
                "Nhánh thứ hai – TỰ RÈN LUYỆN. Đây là trách nhiệm của chính mỗi thanh niên, mỗi sinh viên chúng ta. 
                Về tư tưởng: nâng cao bản lĩnh chính trị, sống gương mẫu, tiếp biến văn hóa có chọn lọc. 
                Về kỹ năng: chủ động đổi mới sáng tạo, làm chủ khoa học công nghệ, xung kích chuyển đổi số, 
                phá rào cản ngoại ngữ hướng tới chuẩn C1."
              </p>
              <p>
                "Hai nhánh này không tách rời mà bổ sung cho nhau. Khi giáo dục tốt gặp tinh thần tự rèn luyện mạnh mẽ, 
                đó là lúc thế hệ thanh niên Việt Nam thực sự bứt phá, trở thành sức mạnh nội sinh, 
                động lực phát triển đất nước phồn vinh, hạnh phúc."
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

interface SkillNodeCardProps {
  node: SkillNode;
  isActive: boolean;
  isUnlocked: boolean;
  onClick: () => void;
  colorClass: string;
  compact?: boolean;
}

const SkillNodeCard = ({ node, isActive, isUnlocked, onClick, colorClass, compact }: SkillNodeCardProps) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: isUnlocked ? 1 : 0.4, scale: 1 }}
    onClick={isUnlocked ? onClick : undefined}
    disabled={!isUnlocked}
    className={`w-full text-left rounded-xl border transition-all ${
      isActive ? `${colorClass} scale-105` : isUnlocked ? `${colorClass} hover:scale-[1.02]` : "bg-surface-dark/40 border-border"
    } ${compact ? "p-3" : "p-5"} ${isUnlocked ? "cursor-pointer" : "cursor-not-allowed"}`}
  >
    <div className={`flex items-center gap-2 ${compact ? "mb-1" : "mb-2"}`}>
      <node.icon className={`${compact ? "w-4 h-4" : "w-5 h-5"} ${isUnlocked ? "text-primary" : "text-muted-foreground/50"}`} />
      <span className={`font-display ${compact ? "text-xs" : "text-sm"} font-semibold ${isUnlocked ? "" : "text-muted-foreground/50"}`}>
        {node.label}
      </span>
    </div>
    {!compact && (
      <p className="text-xs text-foreground/60">{node.description.slice(0, 80)}...</p>
    )}
    {!isUnlocked && (
      <p className="text-[10px] text-muted-foreground/40 mt-1">🔒 Mở khóa nút cha</p>
    )}
  </motion.button>
);

export default Station4SkillTree;
