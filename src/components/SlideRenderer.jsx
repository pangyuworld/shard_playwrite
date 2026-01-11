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
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8 text-brand-primary text-8xl"
        >
          <FontAwesomeIcon icon={data.icon} />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
          {data.title}
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
          {data.highlight}
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
          {data.subtitle}
        </p>
        <div className="mt-auto mb-8 text-gray-500 font-medium tracking-widest uppercase text-sm">
          {data.footer}
        </div>
      </div>
    );

    // 列表内容组件
    const ContentListSlide = ({ data }) => (
      <div className="h-full flex flex-col justify-center px-12 md:px-24">
        <h2 className="text-4xl font-bold mb-2 text-white">{data.title}</h2>
        <p className="text-xl text-brand-primary mb-12">{data.subtitle}</p>
        <div className="space-y-8">
          {data.items.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="flex items-start bg-white/5 p-6 rounded-xl border border-white/10 hover:border-brand-primary/50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary text-xl mr-6">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-accent/20 text-brand-accent mb-2">
                  {item.role}
                </span>
                <p className="text-lg text-gray-200 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );

    // 左右分栏组件
    const SplitSlide = ({ data }) => (
      <div className="h-full flex flex-col md:flex-row items-center px-12 md:px-24 gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-8 text-white">{data.title}</h2>
          <h3 className="text-2xl font-semibold text-brand-primary mb-4">{data.leftContent.heading}</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {data.leftContent.text}
          </p>
          <div className="flex flex-wrap gap-3">
            {data.leftContent.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium text-white">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-center mb-8">
              <FontAwesomeIcon icon={data.rightContent.icon} className="text-6xl text-white/80" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {data.rightContent.stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center bg-brand-dark/50 p-4 rounded-lg">
                  <span className="text-gray-400">{stat.label}</span>
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

    // 卡片组件
    const CardsSlide = ({ data }) => (
      <div className="h-full flex flex-col justify-center px-12 md:px-24">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );

// 特性网格组件
const FeatureGridSlide = ({ data }) => (
  <div className="h-full flex flex-col justify-center px-12 md:px-24">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-2 text-white">{data.title}</h2>
      <p className="text-xl text-brand-accent">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
          className="flex items-start p-6 bg-gradient-to-r from-white/5 to-transparent rounded-xl border-l-4 border-brand-primary"
        >
          <div className="text-brand-primary text-2xl mr-4 mt-1">
            <FontAwesomeIcon icon={feature.icon} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// 代码演示组件
const CodeDemoSlide = ({ data }) => (
  <div className="h-full flex flex-col px-6 md:px-12 pt-16 pb-4 gap-4 overflow-hidden">
    {/* 标题和描述区域 */}
    <div className="flex-shrink-0">
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        <div className="flex-1 min-w-0">
          <span className="px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-bold mb-2 inline-block">
            {data.tag}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{data.title}</h2>
          <p className="text-base text-gray-300 leading-relaxed">{data.desc}</p>
        </div>
        <div className="flex-shrink-0 w-full lg:w-72">
          <div className="bg-white/5 p-3 rounded-lg border-l-4 border-brand-accent">
            <h4 className="text-brand-accent font-bold mb-1 text-sm">💡 核心理念</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{data.concept}</p>
          </div>
        </div>
      </div>
    </div>

    {/* 代码区域 */}
    <div className="flex-1 min-h-0 w-full">
      <div className="bg-[#282c34] rounded-xl overflow-hidden shadow-2xl border border-white/10 h-full flex flex-col">
        <div className="flex items-center px-4 py-2 bg-[#21252b] border-b border-white/5 flex-shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-xs text-gray-500 font-mono">{data.filename || 'example.spec.ts'}</span>
        </div>
        <div className="flex-1 overflow-auto p-3 md:p-4">
          <pre className="font-mono text-xs leading-4 md:text-sm md:leading-5 text-gray-300 whitespace-pre-wrap">
            <code dangerouslySetInnerHTML={{ __html: data.code }} />
          </pre>
        </div>
      </div>
    </div>
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
    <div className="h-full flex flex-col items-center justify-center px-8">
      <h2 className="text-4xl font-bold text-white mb-4">{data.title}</h2>
      <p className="text-xl text-gray-400 mb-8 text-center max-w-2xl">{data.desc}</p>
      
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
