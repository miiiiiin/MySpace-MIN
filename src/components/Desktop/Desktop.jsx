import React from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';

export default function Desktop({ children, onDockItemClick }) {
  return (
    <main className="macos-desktop">
      {/* Visual Dither Overlay */}
      <div className="dither-overlay" />
      
      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Area (Icons, Windows) */}
      <div className="relative w-full h-full pt-7 pb-24 overflow-hidden">
        {children}
      </div>

      {/* Dock */}
      <Dock onItemClick={onDockItemClick} />
    </main>
  );
}
