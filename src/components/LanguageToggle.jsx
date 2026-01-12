import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage, isZh } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="group relative flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-primary/20 border border-white/20 hover:border-brand-primary/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FontAwesomeIcon 
        icon={faGlobe} 
        className="text-sm group-hover:scale-110 transition-transform duration-200" 
      />
      
      <div className="flex items-center gap-1 text-sm font-medium">
        <motion.span
          className={`transition-colors duration-200 ${isZh ? 'text-brand-primary' : 'text-white/60'}`}
          animate={{ scale: isZh ? 1.1 : 1 }}
        >
          中
        </motion.span>
        <span className="text-white/40">|</span>
        <motion.span
          className={`transition-colors duration-200 ${!isZh ? 'text-brand-primary' : 'text-white/60'}`}
          animate={{ scale: !isZh ? 1.1 : 1 }}
        >
          EN
        </motion.span>
      </div>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.button>
  );
};

export default LanguageToggle;