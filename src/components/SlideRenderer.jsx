import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBug, faCode, faCamera, faNetworkWired, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const containerVariants = {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
      exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    };

    // 封面组件
    const CoverSlide = ({ data }) => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8 pb-20 relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8 text-brand-primary text-8xl drop-shadow-2xl"
        >
          <FontAwesomeIcon icon={data.icon} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight drop-shadow-lg"
        >
          {data.title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-purple-400 drop-shadow-lg"
        >
          {data.highlight}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
        >
          {data.subtitle}
        </motion.p>

        {/* 分享人信息 */}
        {data.presenter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mb-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl"
          >
            <span className="text-brand-accent font-semibold text-lg">分享人：</span>
            <span className="text-white font-bold text-lg ml-2">{data.presenter}</span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-auto mb-20 text-gray-400 font-medium tracking-widest uppercase text-sm bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm"
        >
          {data.footer}
        </motion.div>
      </div>
    );

    // 列表内容组件
    const ContentListSlide = ({ data }) => (
      <div className="h-full flex flex-col justify-center px-12 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">{data.title}</h2>
          <p className="text-xl text-brand-primary mb-12 font-medium">{data.subtitle}</p>
        </motion.div>
        <div className="space-y-6">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.15 }}
              className="group flex items-start bg-gradient-to-r from-white/8 to-white/3 p-6 rounded-2xl border border-white/10 hover:border-brand-primary/60 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/30 to-brand-primary/10 flex items-center justify-center text-brand-primary text-xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="flex-1">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-brand-accent/30 to-brand-accent/20 text-brand-accent mb-3 border border-brand-accent/20">
                  {item.role}
                </span>
                <p className="text-lg text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );

    // 左右分栏组件
    const SplitSlide = ({ data }) => (
      <div className="h-full flex flex-col md:flex-row items-center px-12 md:px-24 gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-lg">{data.title}</h2>
          <h3 className="text-2xl font-semibold text-brand-primary mb-4 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">{data.leftContent.heading}</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {data.leftContent.text}
          </p>
          <div className="flex flex-wrap gap-3">
            {data.leftContent.tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="px-4 py-2 bg-gradient-to-r from-white/15 to-white/5 rounded-xl text-sm font-medium text-white border border-white/10 hover:border-brand-primary/50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-brand-primary/25 to-brand-accent/25 p-8 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl hover:shadow-brand-primary/20 transition-all duration-500">
            <motion.div
              className="text-center mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <FontAwesomeIcon icon={data.rightContent.icon} className="text-7xl text-white/90 drop-shadow-lg" />
            </motion.div>
            <div className="grid grid-cols-1 gap-4">
              {data.rightContent.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.8 }}
                  className="flex justify-between items-center bg-gradient-to-r from-brand-dark/60 to-brand-dark/40 p-5 rounded-xl border border-white/10 hover:border-brand-primary/30 transition-all duration-300 hover:bg-brand-dark/70"
                >
                  <span className="text-gray-300 font-medium">{stat.label}</span>
                  <span className="text-xl font-bold text-white bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );

    // 卡片组件
    const CardsSlide = ({ data }) => (
      <div className="h-full flex flex-col justify-center px-12 md:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-white drop-shadow-lg"
        >
          {data.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="group bg-gradient-to-br from-white/8 to-white/3 p-8 rounded-3xl border border-white/10 hover:border-white/30 hover:bg-white/12 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:scale-105 backdrop-blur-sm"
            >
              <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center text-white text-2xl mb-6 shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors duration-300">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {card.desc}
              </p>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    );

// 特性网格组件
const FeatureGridSlide = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-24">
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">{data.title}</h2>
      <p className="text-xl text-brand-accent font-medium bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">{data.subtitle}</p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
          className="group flex items-start p-6 bg-gradient-to-r from-white/8 via-white/5 to-transparent rounded-2xl border-l-4 border-brand-primary hover:border-l-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/20"
        >
          <div className="text-brand-primary text-2xl mr-4 mt-1 group-hover:scale-125 group-hover:text-brand-accent transition-all duration-300">
            <FontAwesomeIcon icon={feature.icon} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors duration-300">{feature.title}</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{feature.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// 代码演示组件
const CodeDemoSlide = ({ data }) => (
  <div className="h-full flex flex-col px-6 md:px-12 pt-16 pb-20 gap-3 overflow-hidden">
    {/* 标题和描述区域 */}
    <motion.div
      className="flex-shrink-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row gap-3 items-start">
        <div className="flex-1 min-w-0">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/30 to-brand-primary/20 text-brand-primary text-sm font-bold mb-2 inline-block border border-brand-primary/30 shadow-lg"
          >
            {data.tag}
          </motion.span>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">{data.title}</h2>
          <p className="text-sm text-gray-300 leading-relaxed">{data.desc}</p>
        </div>
        <motion.div
          className="flex-shrink-0 w-full lg:w-64"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-white/8 to-white/5 p-4 rounded-xl border-l-4 border-brand-accent backdrop-blur-sm shadow-lg">
            <h4 className="text-brand-accent font-bold mb-2 text-sm flex items-center gap-2">
              <span className="text-lg">💡</span> 核心理念
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed">{data.concept}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* 代码区域 */}
    <motion.div
      className="flex-1 min-h-0 w-full max-h-[calc(100vh-280px)]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="bg-[#282c34] rounded-2xl overflow-hidden shadow-2xl border border-white/20 h-full flex flex-col hover:shadow-brand-primary/10 transition-shadow duration-500">
        <div className="flex items-center px-4 py-3 bg-gradient-to-r from-[#21252b] to-[#1e2329] border-b border-white/10 flex-shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg" />
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg" />
          </div>
          <span className="ml-4 text-xs text-gray-400 font-mono bg-white/5 px-2 py-1 rounded">{data.filename || 'example.spec.ts'}</span>
        </div>
        <div className="flex-1 overflow-auto p-4 md:p-6 bg-gradient-to-br from-[#282c34] to-[#2c323c]">
          <pre className="font-mono text-xs leading-5 text-gray-300 whitespace-pre-wrap">
            <code dangerouslySetInnerHTML={{ __html: data.code }} />
          </pre>
        </div>
      </div>
    </motion.div>
  </div>
);

// 视觉回归对比组件
const VisualCompareSlide = ({ data }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <h2 className="text-4xl font-bold text-white mb-4">{data.title}</h2>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl">{data.desc}</p>
      
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden cursor-ew-resize border border-white/20 shadow-2xl"
      >
        {/* Base Image (After/Current) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
           {/* Simulated UI - Version B */}
           <div className="w-full h-full p-8 flex flex-col">
              <div className="h-8 w-32 bg-blue-500 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-600 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-600 rounded mb-8"></div>
              <div className="flex gap-4">
                 <div className="w-24 h-24 bg-purple-500 rounded-lg"></div>
                 <div className="w-24 h-24 bg-purple-500 rounded-lg"></div>
              </div>
              <div className="mt-auto text-red-400 font-bold text-xl">❌ Bug: 按钮颜色错误</div>
           </div>
        </div>

        {/* Overlay Image (Before/Baseline) */}
        <div 
          className="absolute inset-0 overflow-hidden border-r-2 border-white bg-gray-900"
          style={{ width: `${sliderPosition}%` }}
        >
           {/* Simulated UI - Version A */}
           <div className="w-full h-full p-8 flex flex-col" style={{ width: containerRef.current?.offsetWidth }}>
              <div className="h-8 w-32 bg-green-500 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-600 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-600 rounded mb-8"></div>
              <div className="flex gap-4">
                 <div className="w-24 h-24 bg-gray-700 rounded-lg"></div>
                 <div className="w-24 h-24 bg-gray-700 rounded-lg"></div>
              </div>
              <div className="mt-auto text-green-400 font-bold text-xl">✅ Baseline: 正常状态</div>
           </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-dark shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8L22 12L18 16" />
              <path d="M6 8L2 12L6 16" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm font-mono backdrop-blur">Baseline</div>
        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded text-white text-sm font-mono backdrop-blur">Current</div>
      </div>
      
      <div className="mt-6 flex gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div> 预期结果</span>
        <span className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> 实际结果</span>
      </div>
    </div>
  );
};

// Mock 演示组件
const MockDemoSlide = ({ data }) => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center px-12 md:px-24">
      <h2 className="text-4xl font-bold mb-4 text-white">{data.title}</h2>
      <p className="text-xl text-gray-400 mb-12">{data.desc}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Code Side */}
        <div className="bg-[#282c34] p-6 rounded-xl border border-white/10 font-mono text-sm text-gray-300 shadow-xl">
          <div className="mb-2 text-gray-500">// 拦截 /api/user 接口</div>
          <div className={`${step >= 1 ? 'bg-brand-primary/20 -mx-2 px-2 rounded' : ''} transition-colors duration-300`}>
            <span className="text-purple-400">await</span> page.route(<span className="text-green-400">'**/api/user'</span>, route ={'>'} {'{'}
          </div>
          <div className={`pl-4 ${step === 2 ? 'bg-brand-primary/20 -mx-2 px-2 rounded' : ''} transition-colors duration-300`}>
            <span className="text-gray-500">// 直接返回 Mock 数据，不发送真实请求</span>
          </div>
          <div className={`pl-4 ${step === 2 ? 'bg-brand-primary/20 -mx-2 px-2 rounded' : ''} transition-colors duration-300`}>
            <span className="text-purple-400">await</span> route.fulfill({'{'}
          </div>
          <div className="pl-8">
            status: <span className="text-orange-400">200</span>,
          </div>
          <div className="pl-8">
            body: JSON.stringify({'{'} name: <span className="text-green-400">'Test User'</span> {'}'})
          </div>
          <div className="pl-4">{'}'});</div>
          <div>{'}'});</div>
        </div>

        {/* Visual Flow Side */}
        <div className="relative h-64 bg-white/5 rounded-xl border border-white/10 p-8 flex items-center justify-between">
          {/* Browser */}
          <div className="flex flex-col items-center z-10">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-2xl text-white mb-2">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <span className="text-sm text-gray-400">Browser</span>
          </div>

          {/* Connection Line */}
          <div className="absolute left-24 right-24 h-1 bg-gray-700 top-1/2 -translate-y-1/2"></div>

          {/* Request Animation */}
          {step === 1 && (
            <motion.div 
              initial={{ left: '20%', opacity: 0 }}
              animate={{ left: '50%', opacity: 1 }}
              className="absolute top-1/2 -translate-y-1/2 -mt-8 text-brand-primary font-bold text-xs"
            >
              Request
              <div className="w-3 h-3 bg-brand-primary rounded-full mt-1 mx-auto"></div>
            </motion.div>
          )}

          {/* Interceptor */}
          <div className="relative z-10 flex flex-col items-center">
            <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center text-3xl transition-colors duration-300 bg-brand-dark ${step >= 1 ? 'border-brand-primary text-brand-primary shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'border-gray-600 text-gray-600'}`}>
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <span className={`text-sm mt-2 font-bold ${step >= 1 ? 'text-brand-primary' : 'text-gray-600'}`}>Playwright Interceptor</span>
          </div>

          {/* Response Animation */}
          {step === 2 && (
            <motion.div 
              initial={{ left: '50%', opacity: 0 }}
              animate={{ left: '20%', opacity: 1 }}
              className="absolute top-1/2 -translate-y-1/2 -mt-8 text-green-400 font-bold text-xs"
            >
              Mock Data
              <div className="w-3 h-3 bg-green-400 rounded-full mt-1 mx-auto"></div>
            </motion.div>
          )}

          {/* Server (Blocked) */}
          <div className="flex flex-col items-center z-10 opacity-30">
            <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center text-2xl text-white mb-2">
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <span className="text-sm text-gray-400">Real Server</span>
          </div>
          
          {/* X Mark */}
          <div className="absolute right-[15%] top-1/2 -translate-y-1/2 text-red-500 text-4xl font-bold opacity-50">
            ×
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-brand-accent font-mono">
          {step === 0 && "准备发起请求..."}
          {step === 1 && "Playwright 拦截请求..."}
          {step === 2 && "直接返回 Mock 数据..."}
          {step === 3 && "浏览器接收数据，无需后端参与"}
        </p>
      </div>
    </div>
  );
};

    export const SlideRenderer = ({ slide }) => {
      const renderContent = () => {
        switch (slide.type) {
          case 'cover': return <CoverSlide data={slide} />;
      case 'content-list': return <ContentListSlide data={slide} />;
      case 'split': return <SplitSlide data={slide} />;
      case 'cards': return <CardsSlide data={slide} />;
      case 'feature-grid': return <FeatureGridSlide data={slide} />;
      case 'code-demo': return <CodeDemoSlide data={slide} />;
      case 'visual-compare': return <VisualCompareSlide data={slide} />;
      case 'mock-demo': return <MockDemoSlide data={slide} />;
      default: return <div className="text-white">Unknown Slide Type</div>;
    }
  };

      return (
        <motion.div
          key={slide.id}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full h-full max-w-7xl mx-auto relative"
        >
          {/* 模块导航标签 */}
          {slide.section && (
            <div className="absolute top-0 left-8 md:left-24 py-2 px-6 bg-white/5 backdrop-blur-md rounded-b-xl border-x border-b border-white/10 z-20 shadow-lg">
              <span className="text-brand-primary font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                {slide.section}
              </span>
            </div>
          )}
          {renderContent()}
        </motion.div>
      );
    };
