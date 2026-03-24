import React from 'react';
import { motion } from 'framer-motion';

const DOCK_ITEMS = [
  { id: 'writing', src: '/icons/writing.png', label: 'Writing' },
  { id: 'music', src: '/icons/music.png', label: 'Playlist' },
  { id: 'photos', src: '/icons/photos.png', label: 'Photos' },
  { id: 'archive', src: '/icons/code.png', label: 'Archive' },
  { id: 'github', src: '/icons/github.png', label: 'GitHub' },
  { id: 'contact', src: '/icons/mail.png', label: 'Contact' },
];

export default function Dock({ onItemClick }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[1000]">
      <motion.div 
        className="dock-glass rounded-[24px] p-3 flex items-end space-x-2 border border-white/20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      >
        {DOCK_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => onItemClick?.(item.id)}
            whileHover={{ 
              scale: 1.4, 
              y: -15,
              transition: { type: 'spring', stiffness: 400, damping: 18 } 
            }}
            className="w-12 h-12 relative cursor-pointer group"
            title={item.label}
          >
            <img 
              src={item.src} 
              alt={item.label} 
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
            {/* Active Indicator Dot */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
