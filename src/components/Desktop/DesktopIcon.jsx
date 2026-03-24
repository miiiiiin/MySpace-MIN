import React from 'react';
import { motion } from 'framer-motion';

export default function DesktopIcon({ id, label, initialX, initialY, onDoubleClick }) {
  const [isSelected, setIsSelected] = React.useState(false);

  // Map icon IDs to image paths
  const getIconSrc = (iconId) => {
    switch (iconId) {
      case 'writing': return '/icons/writing.png';
      case 'music': return '/icons/music.png';
      case 'archive': return '/icons/code.png';
      default: return '/icons/folder.png';
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x: initialX, y: initialY }}
      onDoubleClick={onDoubleClick}
      onClick={(e) => {
        e.stopPropagation();
        setIsSelected(!isSelected);
      }}
      className="flex flex-col items-center group cursor-default w-20 select-none outline-none z-50 transition-transform active:scale-95"
    >
      <div className="w-16 h-16 flex items-center justify-center relative">
        <img 
          src={getIconSrc(id)} 
          alt={label} 
          className="w-full h-full object-contain filter drop-shadow-md group-hover:brightness-110 transition-all"
        />
        {isSelected && (
          <div className="absolute inset-0 bg-blue-500/20 rounded-xl pointer-events-none border border-blue-500/30" />
        )}
      </div>
      <span className={`mac-icon-label mt-1 text-[11px] px-2 py-0.5 rounded-md line-clamp-2 text-center ${isSelected ? 'selected' : ''}`}>
        {label}
      </span>
    </motion.div>
  );
}
