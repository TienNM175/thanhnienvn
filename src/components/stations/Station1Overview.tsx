// src/stations/Station1Overview.tsx
import { useState } from "react";
import Station1Concept from "./Station1Concept";
import Station1Theory from "./Station1Theory";
import Station1Sandbox from "./Station1Sandbox";
import Station1Roleplay from "./Station1Roleplay"; // Import màn hình mới

const Station1Overview = () => {
  // 1 = Định nghĩa, 2 = 3 Tọa độ, 3 = Sa bàn, 4 = Game Nhập vai
  const [currentView, setCurrentView] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white font-sans">
      {currentView === 1 && <Station1Concept onNext={() => setCurrentView(2)} />}
      {currentView === 2 && <Station1Theory onNext={() => setCurrentView(3)} />}
      
      {/* Trong Station1Sandbox, bạn cần thêm prop onNext để chuyển sang View 4, 
          hoặc tạm thời thêm một nút ở file tổng này để điều hướng */}
      {currentView === 3 && (
        <div className="relative">
          <Station1Sandbox />
          <button 
            onClick={() => setCurrentView(4)}
            className="absolute bottom-8 right-8 px-6 py-2 bg-amber-500/20 text-amber-400 border border-amber-500/50 rounded-full font-bold hover:bg-amber-500/30 z-50"
          >
            Tiến vào Game Nhập Vai ➔
          </button>
        </div>
      )}

      {currentView === 4 && <Station1Roleplay />}
    </div>
  );
};

export default Station1Overview;