import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';

export default function Window({ id, title, isOpen, onClose, children, zIndex, onFocus }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragHandleClassName="handle"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onPointerDown={onFocus}
          style={{ zIndex }}
          className="absolute top-20 left-40 w-[600px] min-h-[400px] glass rounded-xl shadow-2xl overflow-hidden flex flex-col border border-white/30"
        >
          {/* Title Bar */}
          <div className="handle h-10 flex items-center px-4 cursor-default select-none border-b border-black/10">
            <div className="flex space-x-2 mr-4">
              <button
                onClick={onClose}
                className="traffic-light close flex items-center justify-center group"
              >
                <X size={8} className="text-black/40 opacity-0 group-hover:opacity-100" />
              </button>
              <button className="traffic-light minimize flex items-center justify-center group">
                <Minus size={8} className="text-black/40 opacity-0 group-hover:opacity-100" />
              </button>
              <button className="traffic-light maximize flex items-center justify-center group">
                <Square size={6} className="text-black/40 opacity-0 group-hover:opacity-100" />
              </button>
            </div>
            <div className="flex-1 text-center font-semibold text-[13px] opacity-70">
              {title}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 overflow-auto bg-white/60 dark:bg-black/20 backdrop-blur-md">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
