import React, { useState, useEffect } from 'react';
    import { AnimatePresence } from 'framer-motion';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faChevronLeft, faChevronRight, faExpand } from '@fortawesome/free-solid-svg-icons';
    import { slides } from '../data/slides';
    import { SlideRenderer } from './SlideRenderer';

    const Presentation = () => {
      const [currentSlide, setCurrentSlide] = useState(0);

      const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(prev => prev + 1);
        }
      };

      const prevSlide = () => {
        if (currentSlide > 0) {
          setCurrentSlide(prev => prev - 1);
        }
      };

      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'ArrowRight' || e.key === 'Space') {
            nextSlide();
          } else if (e.key === 'ArrowLeft') {
            prevSlide();
          }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [currentSlide]);

      const progress = ((currentSlide + 1) / slides.length) * 100;

      return (
        <div className="relative w-full h-screen bg-brand-dark overflow-hidden flex flex-col">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px]" />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 relative z-10 flex items-center justify-center p-4 md:p-8">
            <AnimatePresence mode="wait">
              <SlideRenderer slide={slides[currentSlide]} />
            </AnimatePresence>
          </div>

          {/* Controls & Progress */}
          <div className="relative z-20 h-16 bg-black/20 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-6">
            <div className="text-gray-400 text-sm font-mono">
              {currentSlide + 1} / {slides.length}
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2 rounded-full hover:bg-white/10 text-white disabled:opacity-30 transition-colors"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="p-2 rounded-full hover:bg-white/10 text-white disabled:opacity-30 transition-colors"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      );
    };

    export default Presentation;
