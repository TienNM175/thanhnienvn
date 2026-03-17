// src/stations/Station4SkillTree.tsx
import { motion, AnimatePresence } from "framer-motion";
import { TreePine, BookOpen, GraduationCap, Heart, Brain, Target, Users, Lightbulb, Lock, CheckCircle2, ArrowDownRight, ArrowDownLeft, ArrowDown } from "lucide-react";
import { useState } from "react";

interface SkillNode {
  id: string;
  label: string;
  icon: React.ElementType;
  level: number;
  colorTheme: string;
  image: string;
  description: string;
  detail: string;
  children?: string[];
}

// Data đã được nâng cấp: Thêm hình ảnh và tách biệt description ngắn / detail dài
const skillTree: SkillNode[] = [
  {
    id: "root",
    label: "Phát Triển Toàn Diện",
    icon: TreePine,
    level: 0,
    colorTheme: "amber",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
    description: "Mục tiêu tối thượng của quá trình bồi dưỡng thế hệ trẻ.",
    detail: "Xây dựng thế hệ thanh niên Việt Nam phát triển toàn diện cả Đức – Trí – Thể – Mỹ, có khát vọng cống hiến, trở thành rường cột vững chắc của nước nhà trong kỷ nguyên vươn mình.",
    children: ["education", "selfdev"],
  },
  {
    id: "education",
    label: "Giải Pháp Vĩ Mô",
    icon: GraduationCap,
    level: 1,
    colorTheme: "cyan",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
    description: "Sự hỗ trợ từ phía hệ thống, Đảng và Nhà nước.",
    detail: "Đổi mới toàn diện chương trình giáo dục, kiến tạo môi trường phát triển tối ưu cho thanh niên. Cần có sự đồng bộ từ các cấp chính quyền để tạo bệ phóng vững chắc.",
    children: ["policy", "environment"],
  },
  {
    id: "selfdev",
    label: "Nội Lực Cá Nhân",
    icon: Heart,
    level: 1,
    colorTheme: "fuchsia",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    description: "Sự chủ động rèn luyện từ phía bản thân thanh niên.",
    detail: "Không chờ đợi ỷ lại vào hệ thống, mỗi thanh niên phải chủ động nâng cấp bản thân, rèn luyện ý chí để đáp ứng yêu cầu khắc nghiệt của thời đại kinh tế số.",
    children: ["mindset", "skills"],
  },
  {
    id: "policy",
    label: "Định Hướng & Chính Sách",
    icon: Users,
    level: 2,
    colorTheme: "cyan",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
    description: "Hoàn thiện hành lang pháp lý bảo vệ và hỗ trợ thanh niên.",
    detail: "Xây dựng đội ngũ cán bộ Đoàn vững bản lĩnh, giỏi nghiệp vụ. Ban hành các chính sách hỗ trợ khởi nghiệp (vốn vay), quy hoạch đào tạo nhân lực và bảo vệ thanh niên trên không gian mạng.",
  },
  {
    id: "environment",
    label: "Môi Trường Ươm Tạo",
    icon: Lightbulb,
    level: 2,
    colorTheme: "cyan",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    description: "Tạo hệ sinh thái để thanh niên thực hành và phát triển.",
    detail: "Tạo điều kiện xã hội thuận lợi nhất để phát huy tài năng. Kết nối mật thiết giữa Nhà trường - Doanh nghiệp để sinh viên cọ xát thực tế, phát triển văn hóa tiên tiến đậm đà bản sắc.",
  },
  {
    id: "mindset",
    label: "Bản Lĩnh Chính Trị",
    icon: Brain,
    level: 2,
    colorTheme: "fuchsia",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    description: "Vũ khí sắc bén chống lại sự suy thoái tư tưởng.",
    detail: "Nâng cao chất lượng tư tưởng, tính tiên phong gương mẫu. Xây dựng 'sức đề kháng văn hóa' vững chắc để nhận diện và chống lại tin giả, luận điệu xuyên tạc và sự lai căng văn hóa.",
  },
  {
    id: "skills",
    label: "Nâng Cấp Kỹ Năng",
    icon: Target,
    level: 2,
    colorTheme: "fuchsia",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
    description: "Trang bị công cụ thực chiến để hội nhập toàn cầu.",
    detail: "Chủ động làm chủ công nghệ lõi (AI, Data, Cloud). Đập tan rào cản ngoại ngữ (hướng tới chuẩn C1/IELTS). Không ngừng học hỏi suốt đời để tránh bị tự động hóa đào thải.",
  },
];

const themeMap: Record<string, { bg: string, border: string, text: string, hover: string }> = {
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/50", text: "text-amber-400", hover: "hover:border-amber-400" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/50", text: "text-cyan-400", hover: "hover:border-cyan-400" },
  fuchsia: { bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/50", text: "text-fuchsia-400", hover: "hover:border-fuchsia-400" },
};

const Station4SkillTree = () => {
  const [showMcScript, setShowMcScript] = useState(false);
  const [activeNode, setActiveNode] = useState<string>("root");
  const [unlockedNodes, setUnlockedNodes] = useState<Set<string>>(new Set(["root"]));

  const handleNodeClick = (node: SkillNode) => {
    setActiveNode(node.id);
    if (node.children) {
      const newUnlocked = new Set(unlockedNodes);
      node.children.forEach(c => newUnlocked.add(c));
      setUnlockedNodes(newUnlocked);
    }
  };

  const isUnlocked = (id: string) => unlockedNodes.has(id);
  const activeNodeData = skillTree.find(n => n.id === activeNode);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-grid-pattern relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-3 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
            <TreePine className="w-4 h-4 text-green-400" />
            <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Trạm 4: Bản Đồ Giải Pháp</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Phương Hướng <span className="text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">Phát Triển</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">Mở khóa lộ trình từ vĩ mô đến cá nhân (Click vào các khối để khám phá)</p>
        </motion.div>

        {/* Bố cục Split View 2 Cột */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* CỘT TRÁI: Sơ đồ Cây (Tree Map) */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-3xl p-6 py-8 relative shadow-xl overflow-hidden">
            
            {/* Lớp lưới nền cho đẹp */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            <div className="flex flex-col items-center relative z-10 w-full max-w-2xl mx-auto">
              {/* Tầng 0: Root */}
              <div className="w-full md:w-1/2 px-2">
                <NodeButton node={skillTree[0]} isActive={activeNode === "root"} isUnlocked={true} onClick={() => handleNodeClick(skillTree[0])} />
              </div>

              {/* Mũi tên chia nhánh */}
              <div className="flex w-full px-4 md:px-12 justify-around my-2 opacity-60">
                <ArrowDownLeft className={`w-8 h-8 ${isUnlocked("education") ? "text-cyan-400" : "text-slate-600"} transition-colors`} />
                <ArrowDownRight className={`w-8 h-8 ${isUnlocked("selfdev") ? "text-fuchsia-400" : "text-slate-600"} transition-colors`} />
              </div>

              {/* Tầng 1: System vs Self */}
              <div className="flex w-full gap-4 justify-between">
                <div className="w-1/2 flex flex-col items-center">
                  <NodeButton node={skillTree[1]} isActive={activeNode === "education"} isUnlocked={isUnlocked("education")} onClick={() => handleNodeClick(skillTree[1])} />
                  {/* Mũi tên thẳng */}
                  <ArrowDown className={`w-6 h-6 my-2 ${isUnlocked("policy") ? "text-cyan-400" : "text-slate-600"} transition-colors`} />
                </div>
                <div className="w-1/2 flex flex-col items-center">
                  <NodeButton node={skillTree[2]} isActive={activeNode === "selfdev"} isUnlocked={isUnlocked("selfdev")} onClick={() => handleNodeClick(skillTree[2])} />
                  {/* Mũi tên thẳng */}
                  <ArrowDown className={`w-6 h-6 my-2 ${isUnlocked("mindset") ? "text-fuchsia-400" : "text-slate-600"} transition-colors`} />
                </div>
              </div>

              {/* Tầng 2: Chi tiết lá */}
              <div className="flex w-full gap-2 md:gap-4 mt-2">
                {/* Nhánh Trái */}
                <div className="w-1/4"><NodeButton node={skillTree[3]} isActive={activeNode === "policy"} isUnlocked={isUnlocked("policy")} onClick={() => handleNodeClick(skillTree[3])} compact /></div>
                <div className="w-1/4"><NodeButton node={skillTree[4]} isActive={activeNode === "environment"} isUnlocked={isUnlocked("environment")} onClick={() => handleNodeClick(skillTree[4])} compact /></div>
                
                {/* Nhánh Phải */}
                <div className="w-1/4"><NodeButton node={skillTree[5]} isActive={activeNode === "mindset"} isUnlocked={isUnlocked("mindset")} onClick={() => handleNodeClick(skillTree[5])} compact /></div>
                <div className="w-1/4"><NodeButton node={skillTree[6]} isActive={activeNode === "skills"} isUnlocked={isUnlocked("skills")} onClick={() => handleNodeClick(skillTree[6])} compact /></div>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: Bảng Chi Tiết (Có Hình Ảnh) */}
          <div className="lg:col-span-5 h-full">
            <AnimatePresence mode="wait">
              {activeNodeData ? (
                <motion.div
                  key={activeNodeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col"
                >
                  {/* Hình Ảnh Cover */}
                  <div className="w-full h-48 md:h-56 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                    <img 
                      src={activeNodeData.image} 
                      alt={activeNodeData.label} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    {/* Icon nổi trên ảnh */}
                    <div className={`absolute bottom-4 left-6 z-20 p-3 rounded-xl ${themeMap[activeNodeData.colorTheme].bg} backdrop-blur-md border ${themeMap[activeNodeData.colorTheme].border}`}>
                      <activeNodeData.icon className={`w-8 h-8 ${themeMap[activeNodeData.colorTheme].text}`} />
                    </div>
                  </div>

                  {/* Nội Dung Text */}
                  <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20 -mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${themeMap[activeNodeData.colorTheme].bg} ${themeMap[activeNodeData.colorTheme].border} ${themeMap[activeNodeData.colorTheme].text}`}>
                        Khối Kỹ Năng: Cấp {activeNodeData.level}
                      </span>
                    </div>

                    <h3 className={`text-2xl font-bold mb-3 ${themeMap[activeNodeData.colorTheme].text}`}>
                      {activeNodeData.label}
                    </h3>
                    
                    <p className="text-base text-white font-medium mb-4 italic">
                      "{activeNodeData.description}"
                    </p>
                    
                    <div className="w-full h-px bg-slate-800 mb-4" />
                    
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {activeNodeData.detail}
                    </p>

                    {/* Hint Mở khóa */}
                    {activeNodeData.children && (
                      <div className="mt-auto bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                        <p className="text-xs text-green-300 font-medium">
                          Đã mở khóa các nhánh con. Hãy click vào sơ đồ bên trái để xem chi tiết giải pháp!
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        {/* --- KỊCH BẢN MC & NÚT KẾT THÚC --- */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-800 pt-6">
          <button onClick={() => setShowMcScript(!showMcScript)} className="text-sm font-bold text-green-500 hover:text-green-400 transition-colors inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {showMcScript ? "Đóng Kịch Bản MC" : "Xem Kịch Bản Chốt Hạ"}
          </button>

          <button className="inline-flex items-center gap-2 px-8 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 text-red-400 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            Hoàn Thành Bài Báo Cáo
          </button>
        </div>

        {/* Khung Script MC */}
        {showMcScript && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-slate-900/90 border border-green-500/30 rounded-xl p-6 text-sm text-slate-300 italic leading-relaxed text-left">
            <p className="mb-3 font-bold text-green-400">🎙️ Lời dẫn MC (Chốt hạ toàn bộ bài):</p>
            <p className="mb-3">
              "Thưa thầy cô và các bạn, chúng ta đã đi đến Trạm cuối cùng – Cây Kỹ năng – nơi vạch ra phương hướng phát triển cho thanh niên Việt Nam. Để đạt được mục tiêu **(MC Click vào Phát triển toàn diện)** là đào tạo ra một thế hệ vững vàng, chúng ta cần 2 nhánh rẽ mang tính biện chứng."
            </p>
            <p className="mb-3">
              *(MC click vào Nhánh Giải pháp Vĩ mô)* "Nhánh thứ nhất đến từ hệ thống khách quan. Đó là các chính sách hỗ trợ của Đảng, Nhà nước và môi trường ươm tạo của Nhà trường. Đây là 'vùng đất' màu mỡ cung cấp dưỡng chất cho thanh niên phát triển."
            </p>
            <p className="mb-3">
              *(MC click vào Nhánh Nội Lực Cá Nhân)* "Nhưng đất có tốt đến đâu mà hạt giống lười biếng thì cây cũng không thể lớn. Nhánh thứ hai, mang tính quyết định, chính là **Nội lực cá nhân**. Mỗi thanh niên phải tự nâng cấp bản lĩnh chính trị, chủ động phá vỡ rào cản ngoại ngữ, làm chủ công nghệ AI để không bị đào thải."
            </p>
            <p>
              "Sự kết hợp hoàn hảo giữa Hệ thống vĩ mô và Nỗ lực vi mô chính là con đường duy nhất để thanh niên vươn mình, đúng như lời Bác Hồ căn dặn. Đó cũng là thông điệp cuối cùng mà nhóm chúng em muốn gửi gắm qua báo cáo này. Xin cảm ơn thầy cô đã lắng nghe!"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Component tái sử dụng: Nút Kỹ Năng
const NodeButton = ({ node, isActive, isUnlocked, onClick, compact }: { node: SkillNode, isActive: boolean, isUnlocked: boolean, onClick: () => void, compact?: boolean }) => {
  const t = themeMap[node.colorTheme];
  return (
    <motion.button
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: isActive ? 1.05 : 1, opacity: isUnlocked ? 1 : 0.5 }}
      whileHover={isUnlocked ? { scale: isActive ? 1.05 : 1.02 } : {}}
      onClick={isUnlocked ? onClick : undefined}
      disabled={!isUnlocked}
      className={`relative w-full text-center flex flex-col items-center justify-center gap-2 transition-all duration-300 
        ${compact ? "p-3 rounded-xl" : "p-4 md:p-5 rounded-2xl"}
        ${isActive 
          ? `${t.bg} border-2 ${t.border} shadow-[0_0_15px_currentColor] z-20` 
          : isUnlocked 
            ? `bg-slate-800 border-2 border-slate-700 ${t.hover} z-10 cursor-pointer` 
            : "bg-slate-900/50 border-2 border-slate-800 border-dashed cursor-not-allowed z-0"
        }
      `}
      style={{ color: isActive ? 'inherit' : (isUnlocked ? '#cbd5e1' : '#475569') }}
    >
      <div className={`rounded-full p-2 flex items-center justify-center ${isActive ? t.bg : isUnlocked ? 'bg-slate-700' : 'bg-slate-800'}`}>
        {isUnlocked ? (
          <node.icon className={`${compact ? "w-5 h-5" : "w-6 h-6"} ${isActive ? t.text : "text-slate-300"}`} />
        ) : (
          <Lock className={`${compact ? "w-5 h-5" : "w-6 h-6"} text-slate-500`} />
        )}
      </div>
      <span className={`font-bold leading-tight ${compact ? "text-[10px] md:text-[11px]" : "text-xs md:text-sm"} ${isActive ? t.text : isUnlocked ? "text-slate-200" : "text-slate-500"}`}>
        {node.label}
      </span>
    </motion.button>
  );
};

export default Station4SkillTree;