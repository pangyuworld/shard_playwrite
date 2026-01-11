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
        <div className="relative w-full h-screen bg-brand-dark overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px]" />
          </div>

          {/* Main Content Area - Full Screen */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8">
            <AnimatePresence mode="wait">
              <SlideRenderer slide={slides[currentSlide]} />
            </AnimatePresence>
          </div>

          {/* Fixed Bottom Controls & Progress */}
          <div className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-xl border-t border-white/10 shadow-2xl">
            {/* Progress Bar - Top of Controls */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
              <div
                className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary transition-all duration-500 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Container */}
            <div className="flex items-center justify-between px-8 py-4 h-full">
              {/* Slide Counter */}
              <div className="flex items-center gap-3">
                <div className="text-white/90 text-sm font-mono bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                  <span className="text-brand-primary font-bold">{currentSlide + 1}</span>
                  <span className="text-white/60 mx-1">/</span>
                  <span className="text-white/80">{slides.length}</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="group relative p-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-primary/20 border border-white/20 hover:border-brand-primary/50"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="group relative p-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-primary/20 border border-white/20 hover:border-brand-primary/50"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Progress Info & Fullscreen */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
                  <span>使用 ← → 或空格键导航</span>
                </div>
                <button
                  onClick={() => {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      document.documentElement.requestFullscreen();
                    }
                  }}
                  className="group p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 hover:border-brand-accent/50"
                >
                  <FontAwesomeIcon icon={faExpand} className="text-sm group-hover:scale-110 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Presentation;
