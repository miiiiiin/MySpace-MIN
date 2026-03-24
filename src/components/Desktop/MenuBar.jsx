import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery, Search } from 'lucide-react';

export default function MenuBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
      weekday: 'short',
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-7 glass flex items-center justify-between px-4 z-[1000] text-[13px] font-medium transition-colors duration-300">
      <div className="flex items-center space-x-4">
        <Apple size={16} className="text-current fill-current hover:opacity-70 cursor-default" />
        <span className="font-bold cursor-default px-1 rounded hover:bg-white/20 transition-colors">Finder</span>
        <span className="cursor-default px-1 rounded hover:bg-white/20 transition-colors hidden sm:inline">파일</span>
        <span className="cursor-default px-1 rounded hover:bg-white/20 transition-colors hidden sm:inline">편집</span>
        <span className="cursor-default px-1 rounded hover:bg-white/20 transition-colors hidden sm:inline">보기</span>
        <span className="cursor-default px-1 rounded hover:bg-white/20 transition-colors hidden sm:inline">이동</span>
      </div>

      <div className="flex items-center space-x-3">
        <Wifi size={16} />
        <Battery size={16} />
        <Search size={16} />
        <div className="flex space-x-2 cursor-default px-1 rounded hover:bg-white/20 transition-colors">
          <span>{formatDate(time)}</span>
          <span>{formatTime(time)}</span>
        </div>
      </div>
    </nav>
  );
}
