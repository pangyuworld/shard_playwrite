import React from 'react';
import { motion } from 'framer-motion';
import { slides } from '../data/slides';

const SlideNavigation = ({ currentSlide, onSlideChange }) => {
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const handleDotClick = (index) => {
    onSlideChange(index);
  };

  return (
    <div className="flex items-center gap-2">
      {/* 进度条导航 */}
      <div className="relative w-48 h-2 bg-gray-700 rounded-full overflow-hidden cursor-pointer group"
           onClick={(e) => {
             const rect = e.currentTarget.getBoundingClientRect();
             const x = e.clientX - rect.left;
             const percentage = x / rect.width;
             const targetSlide = Math.floor(percentage * slides.length);
             handleDotClick(Math.max(0, Math.min(slides.length - 1, targetSlide)));
           }}>
        {/* 背景进度条 */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
        
        {/* 当前进度 */}
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary shadow-lg"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* 分段指示器 */}
        {slides.map((_, index) => (
          <div
            key={index}
            className="absolute top-0 bottom-0 w-px bg-white/20 group-hover:bg-white/40 transition-colors duration-200"
            style={{ left: `${((index + 1) / slides.length) * 100}%` }}
          />
        ))}

        {/* 悬停提示 */}
        <div className="absolute -top-8 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="text-xs text-white/80 text-center">点击跳转到指定页面</div>
        </div>
      </div>

      {/* 圆点导航 */}
      <div className="flex items-center gap-1 ml-2">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? 'bg-brand-primary shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                : index < currentSlide
                ? 'bg-brand-primary/60 hover:bg-brand-primary/80'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
            title={`跳转到第 ${index + 1} 页`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideNavigation;