import React, { useState } from 'react';
import Desktop from './components/desktop/Desktop';
import DesktopIcon from './components/desktop/DesktopIcon';
import Window from './components/desktop/Window';

function App() {
  const [windows, setWindows] = useState([
    { id: 'writing', title: '나의 글', isOpen: false, zIndex: 10 },
    { id: 'music', title: '음악', isOpen: false, zIndex: 10 },
    { id: 'code', title: '코드', isOpen: false, zIndex: 10 },
  ]);

  const [maxZ, setMaxZ] = useState(10);

  const openWindow = (id) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        const nextZ = maxZ + 1;
        setMaxZ(nextZ);
        return { ...w, isOpen: true, zIndex: nextZ };
      }
      return w;
    }));
  };

  const closeWindow = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w));
  };

  const focusWindow = (id) => {
    const nextZ = maxZ + 1;
    setMaxZ(nextZ);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZ } : w));
  };

  return (
    <Desktop onDockItemClick={openWindow}>
      {/* Desktop Icons - Positioned on the right like standard macOS */}
      <div className="absolute top-12 right-6 flex flex-col space-y-6 items-end pointer-events-none">
        <div className="pointer-events-auto">
          <DesktopIcon 
            id="writing" 
            label="WRITING" 
            initialX={0} 
            initialY={0} 
            onDoubleClick={() => openWindow('writing')}
          />
        </div>
        <div className="pointer-events-auto">
          <DesktopIcon 
            id="music" 
            label="PLAYLIST" 
            initialX={0} 
            initialY={0} 
            onDoubleClick={() => openWindow('music')}
          />
        </div>
        <div className="pointer-events-auto">
          <DesktopIcon 
            id="archive" 
            label="ARCHIVE" 
            initialX={0} 
            initialY={0} 
            onDoubleClick={() => openWindow('archive')}
          />
        </div>
      </div>

      {/* Windows */}
      <Window
        id="writing"
        title="나의 글"
        isOpen={windows.find(w => w.id === 'writing')?.isOpen || false}
        onClose={() => closeWindow('writing')}
        zIndex={windows.find(w => w.id === 'writing')?.zIndex || 10}
        onFocus={() => focusWindow('writing')}
      >
        <div className="space-y-4 text-black dark:text-white">
          <h2 className="text-2xl font-bold">최근 게시물</h2>
          <p className="opacity-70">준비 중인 게시물입니다...</p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="p-4 rounded-lg bg-white/20 border border-white/10 hover:bg-white/30 transition-colors cursor-pointer text-black dark:text-white">
                <div className="font-semibold text-black dark:text-white">에세이 #{i}</div>
                <div className="text-xs opacity-50 text-black dark:text-white">2026. 03. 21.</div>
              </div>
            ))}
          </div>
        </div>
      </Window>

      <Window
        id="music"
        title="음악"
        isOpen={windows.find(w => w.id === 'music')?.isOpen || false}
        onClose={() => closeWindow('music')}
        zIndex={windows.find(w => w.id === 'music')?.zIndex || 10}
        onFocus={() => focusWindow('music')}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4 py-8">
          <div className="w-48 h-48 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl text-center px-4">Late Night Vibes</span>
          </div>
          <div className="w-full space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-white/20 rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded" />
                  <div className="text-black dark:text-white">
                    <div className="text-sm font-medium">Song Name {i}</div>
                    <div className="text-xs opacity-50">Artist Name</div>
                  </div>
                </div>
                <div className="text-xs opacity-50 text-black dark:text-white">3:45</div>
              </div>
            ))}
          </div>
        </div>
      </Window>

      <Window
        id="code"
        title="코드 프로젝트"
        isOpen={windows.find(w => w.id === 'code')?.isOpen || false}
        onClose={() => closeWindow('code')}
        zIndex={windows.find(w => w.id === 'code')?.zIndex || 10}
        onFocus={() => focusWindow('code')}
      >
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-sm opacity-90 mb-4">macOS Big Sur 스타일의 포트폴리오 웹사이트입니다. Vite와 React를 사용하여 구현되었습니다.</p>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-white/20 rounded text-xs">Vite</span>
              <span className="px-2 py-1 bg-white/20 rounded text-xs">React</span>
              <span className="px-2 py-1 bg-white/20 rounded text-xs">Supabase</span>
            </div>
          </div>
        </div>
      </Window>
    </Desktop>
  );
}

export default App;
