import { faCode, faBug, faChartLine, faRocket, faRobot, faLayerGroup, faCheckCircle, faBolt, faUsers, faVideo, faEye, faNetworkWired, faListUl, faGlobe, faFileAlt, faFileCode, faChartBar, faCog, faCodeBranch, faHammer, faPlay, faEnvelope, faServer } from '@fortawesome/free-solid-svg-icons';

export const slides = [
  // 1. 封面
  {
    id: 'cover',
    type: 'cover',
    title: {
      zh: 'Playwright',
      en: 'Playwright'
    },
    highlight: {
      zh: '自动化"效率神器"',
      en: 'Automation "Efficiency Tool"'
    },
    subtitle: {
      zh: '想让自动化测试不再是 QA 专属？打破壁垒，全链路提升协作速度！',
      en: 'Want to make automated testing not just for QA? Break barriers and boost collaboration speed across the entire pipeline!'
    },
    footer: {
      zh: 'Dev · QA · PO 协作共赢',
      en: 'Dev · QA · PO Collaboration'
    },
    presenter: 'Bai, Menghan',
    icon: faRocket
  },
  // 1.5 会议大纲
  {
    id: 'agenda',
    type: 'content-list',
    title: {
      zh: '本次分享大纲',
      en: 'Presentation Agenda'
    },
    subtitle: {
      zh: '从入门到精通的效率之旅',
      en: 'Journey from Beginner to Expert'
    },
    items: [
      { icon: faLayerGroup, role: 'Part 1', text: { zh: 'Playwright 简介：定义、痛点与核心价值', en: 'Playwright Introduction: Definition, Pain Points & Core Value' } },
      { icon: faBolt, role: 'Part 2', text: { zh: '快速上手：初始化项目、核心对象模型与稳定性机制', en: 'Quick Start: Project Setup, Core Object Model & Stability' } },
      { icon: faCode, role: 'Part 3', text: { zh: '核心工具链：Codegen、Trace Viewer 与调试技巧', en: 'Core Tools: Codegen, Trace Viewer & Debugging Tips' } },
      { icon: faChartBar, role: 'Part 4', text: { zh: '测试报告：内置 HTML 报告与 Allure 企业级报告集成', en: 'Test Reports: Built-in HTML & Allure Enterprise Integration' } },
      { icon: faRocket, role: 'Part 5', text: { zh: '进阶场景：Mock、视觉回归与 CI/CD', en: 'Advanced Scenarios: Mock, Visual Regression & CI/CD' } }
    ]
  },
  // 2. 痛点
  {
    id: 'intro-pain',
    type: 'content-list',
    section: {
      zh: 'Part 1: Playwright 简介',
      en: 'Part 1: Playwright Introduction'
    },
    title: {
      zh: '为什么要懂 Playwright？',
      en: 'Why Learn Playwright?'
    },
    subtitle: {
      zh: '痛点共鸣：那些让我们头秃的"重复活"',
      en: 'Pain Points: Those Repetitive Tasks That Drive Us Crazy'
    },
    items: [
      { icon: faCode, role: 'Dev', text: { zh: '改个小功能，却要手动跑一遍全流程回归，甚至还要帮 QA 造数据？', en: 'Made a small feature change, but need to manually run full regression tests, even help QA create test data?' } },
      { icon: faBug, role: 'QA', text: { zh: 'UI 自动化脚本极其不稳定，维护脚本的时间比写脚本还长？', en: 'UI automation scripts are extremely unstable, spending more time maintaining than writing them?' } },
      { icon: faChartLine, role: 'PO', text: { zh: '想看产品验收结果，只能等口头汇报或复杂的 Excel，没有直观感受？', en: 'Want to see product acceptance results, but can only wait for verbal reports or complex Excel sheets?' } }
    ]
  },
  // 2.5 Playwright 介绍 (新增)
  {
    id: 'intro-definition',
    type: 'split',
    section: {
      zh: 'Part 1: Playwright 简介',
      en: 'Part 1: Playwright Introduction'
    },
    title: {
      zh: '什么是 Playwright？',
      en: 'What is Playwright?'
    },
    leftContent: {
      heading: {
        zh: '微软开源的新一代自动化测试工具',
        en: 'Microsoft\'s Open Source Next-Gen Automation Testing Tool'
      },
      text: {
        zh: 'Playwright 是一个用于 Web 测试和自动化的框架，专为现代 Web 应用而生。它允许通过单个 API 自动执行 Chromium、Firefox 和 WebKit，支持无头（Headless）和有头（Headed）模式。',
        en: 'Playwright is a framework for Web testing and automation, built for modern Web applications. It enables automated execution of Chromium, Firefox, and WebKit through a single API, supporting both headless and headed modes.'
      },
      tags: {
        zh: ['跨浏览器', '跨平台', '多语言支持 (JS/TS/Py/Java/C#)', '速度极快'],
        en: ['Cross-browser', 'Cross-platform', 'Multi-language (JS/TS/Py/Java/C#)', 'Lightning Fast']
      }
    },
    rightContent: {
      icon: faRobot,
      stats: [
        { label: 'GitHub Stars', value: '60k+' },
        { label: 'NPM Downloads', value: '5M+/week' },
        {
          label: {
            zh: '更新频率',
            en: 'Update Frequency'
          },
          value: {
            zh: '每2周',
            en: 'Every 2 weeks'
          }
        },
        {
          label: {
            zh: '维护者',
            en: 'Maintainer'
          },
          value: 'Microsoft'
        }
      ]
    }
  },
  // 3. 核心价值概览
  {
    id: 'core-value',
    type: 'cards',
    section: {
      zh: 'Part 1: Playwright 简介',
      en: 'Part 1: Playwright Introduction'
    },
    title: {
      zh: '核心价值：打破壁垒',
      en: 'Core Value: Breaking Barriers'
    },
    cards: [
      {
        title: 'For Dev',
        desc: {
          zh: '像写代码一样写测试。Codegen 录制功能直接生成代码，零门槛上手。',
          en: 'Write tests like writing code. Codegen recording feature generates code directly, zero barrier to entry.'
        },
        icon: faCode,
        color: 'bg-blue-500'
      },
      {
        title: 'For QA',
        desc: {
          zh: '告别"Flaky Tests"。自动等待机制让脚本稳如泰山，Trace Viewer 让调试像看电影一样简单。',
          en: 'Say goodbye to "Flaky Tests". Auto-wait mechanism makes scripts rock solid, Trace Viewer makes debugging as simple as watching a movie.'
        },
        icon: faCheckCircle,
        color: 'bg-green-500'
      },
      {
        title: 'For PO',
        desc: {
          zh: '可视化的执行结果。自动生成截图、视频和 HTML 报告，验收过程清晰可见。',
          en: 'Visualized execution results. Auto-generated screenshots, videos and HTML reports make acceptance process crystal clear.'
        },
        icon: faChartLine,
        color: 'bg-purple-500'
      }
    ]
  },
  // 3.5 初始化项目
  {
    id: 'init-project',
    type: 'code-demo',
    section: {
      zh: 'Part 2: 快速上手',
      en: 'Part 2: Quick Start'
    },
    title: {
      zh: '快速开始：一键初始化',
      en: 'Quick Start: One-Click Initialization'
    },
    tag: 'Setup',
    desc: {
      zh: '无需繁琐配置，一行命令搞定所有环境依赖。',
      en: 'No complex configuration needed, one command handles all environment dependencies.'
    },
    concept: {
      zh: 'Scaffolding。自动创建配置文件、安装浏览器驱动、生成示例测试。',
      en: 'Scaffolding. Automatically creates config files, installs browser drivers, and generates sample tests.'
    },
    filename: 'Terminal',
    code: `<span class="code-comment"># 1. Initialize project</span>
<span class="code-function">npm</span> init playwright@latest

<span class="code-comment"># 2. Interactive configuration</span>
<span class="code-string">✔</span> Do you want to use TypeScript or JavaScript? · <span class="code-keyword">TypeScript</span>
<span class="code-string">✔</span> Where to put your end-to-end tests? · <span class="code-string">tests</span>
<span class="code-string">✔</span> Add a GitHub Actions workflow? · <span class="code-keyword">true</span>
<span class="code-string">✔</span> Install Playwright browsers? · <span class="code-keyword">true</span>

<span class="code-comment"># 3. Run tests</span>
<span class="code-function">npx</span> playwright test`
  },
  // 3.6 核心对象 (新增)
  {
    id: 'core-concepts',
    type: 'cards',
    section: {
      zh: 'Part 2: 快速上手',
      en: 'Part 2: Quick Start'
    },
    title: {
      zh: '核心对象模型',
      en: 'Core Object Model'
    },
    cards: [
      {
        title: 'Browser',
        desc: {
          zh: '浏览器实例 (Chromium, Firefox, WebKit)。通常整个测试只启动一次，成本较高。',
          en: 'Browser instance (Chromium, Firefox, WebKit). Usually started once per test suite, high cost.'
        },
        icon: faGlobe,
        color: 'bg-gray-600'
      },
      {
        title: 'Context',
        desc: {
          zh: '隐身模式会话。极速创建，相互隔离。每个测试用例都运行在独立的 Context 中，互不干扰。',
          en: 'Incognito session. Lightning fast creation, mutually isolated. Each test case runs in independent Context without interference.'
        },
        icon: faLayerGroup,
        color: 'bg-blue-600'
      },
      {
        title: 'Page',
        desc: {
          zh: '单个标签页。我们在 Page 上进行点击、输入、断言等操作。一个 Context 可以包含多个 Page。',
          en: 'Single tab. We perform clicks, inputs, assertions on Page. One Context can contain multiple Pages.'
        },
        icon: faFileAlt,
        color: 'bg-green-600'
      }
    ]
  },
  // 5. Flaky Tests 解决方案 (移动到 Part 2)
  {
    id: 'demo-flaky',
    type: 'code-demo',
    section: {
      zh: 'Part 2: 快速上手',
      en: 'Part 2: Quick Start'
    },
    title: {
      zh: '核心机制：告别 Flaky Tests',
      en: 'Core Mechanism: Say Goodbye to Flaky Tests'
    },
    tag: 'Stability',
    desc: {
      zh: '以前我们需要写大量的 sleep(5000) 来等待页面加载，现在 Playwright 内置了智能等待机制。',
      en: 'Previously we needed to write lots of sleep(5000) to wait for page loading, now Playwright has built-in intelligent waiting mechanism.'
    },
    concept: {
      zh: 'Auto-wait。在执行点击之前，Playwright 会自动确保元素是可见的、可点击的、且停止了动画。',
      en: 'Auto-wait. Before executing clicks, Playwright automatically ensures elements are visible, clickable, and animations have stopped.'
    },
    filename: 'no_more_sleep.ts',
    code: `<span class="code-comment">// ❌ Old approach (Selenium/Puppeteer)</span>
<span class="code-keyword">await</span> driver.sleep(<span class="code-number">5000</span>); <span class="code-comment">// Hard wait, waste of time</span>
<span class="code-keyword">await</span> driver.findElement(By.id(<span class="code-string">'submit'</span>)).click();

<span class="code-comment">// ✅ Playwright approach</span>
<span class="code-comment">// No need for sleep! It automatically waits for elements to be ready</span>
<span class="code-keyword">await</span> page.getByRole(<span class="code-string">'button'</span>, { name: <span class="code-string">'Submit'</span> }).click();

<span class="code-comment">// Even supports custom wait conditions</span>
<span class="code-keyword">await</span> expect(page.getByTestId(<span class="code-string">'status'</span>)).toHaveText(<span class="code-string">'Success'</span>, {
  timeout: <span class="code-number">10000</span> <span class="code-comment">// Smart timeout control</span>
});`
  },
  // 4. Codegen 演示 - 第一部分：命令行方式
  {
    id: 'demo-codegen-cmd',
    type: 'code-demo',
    section: {
      zh: 'Part 3: 核心工具链',
      en: 'Part 3: Core Tools'
    },
    title: {
      zh: '核心工具一：Codegen 录制 (命令行)',
      en: 'Core Tool 1: Codegen Recording (Command Line)'
    },
    tag: {
      zh: 'CMD方式',
      en: 'CMD Mode'
    },
    desc: {
      zh: '不想写代码？命令行一键启动录制！支持多种参数配置，满足不同场景需求。',
      en: 'Don\'t want to write code? One-click command line recording! Supports various parameter configurations for different scenarios.'
    },
    concept: {
      zh: '命令行录制。通过不同参数控制浏览器类型、设备模拟、输出格式等，灵活高效。',
      en: 'Command line recording. Control browser type, device simulation, output format through different parameters, flexible and efficient.'
    },
    filename: 'terminal_codegen.sh',
    code: `<span class="code-comment"># Basic recording - simplest approach</span>
<span class="code-function">npx</span> playwright codegen https://demo.playwright.dev/

<span class="code-comment"># Specify browser for recording</span>
<span class="code-function">npx</span> playwright codegen --browser=firefox https://example.com

<span class="code-comment"># Mobile device simulation</span>
<span class="code-function">npx</span> playwright codegen --device="iPhone 13" https://m.example.com

<span class="code-comment"># Specify output file and language</span>
<span class="code-function">npx</span> playwright codegen --target=javascript -o tests/login.spec.js https://example.com

<span class="code-comment"># Advanced parameter combination example</span>
<span class="code-function">npx</span> playwright codegen --browser=chromium --device="iPhone 12" --output=tests/mobile.spec.ts https://m.example.com

<span class="code-comment"># Save user data during recording</span>
<span class="code-function">npx</span> playwright codegen --save-storage=auth.json https://example.com`
  },
  // 4.2 Codegen 演示 - 第二部分：GUI方式
  {
    id: 'demo-codegen-gui',
    type: 'content-list',
    section: {
      zh: 'Part 3: 核心工具链',
      en: 'Part 3: Core Tools'
    },
    title: {
      zh: '核心工具一：Codegen 录制 (GUI方式)',
      en: 'Core Tool 1: Codegen Recording (GUI Mode)'
    },
    subtitle: {
      zh: '可视化录制，所见即所得的完美体验',
      en: 'Visual recording, perfect WYSIWYG experience'
    },
    items: [
      {
        icon: faCode,
        role: {
          zh: 'VS Code 插件',
          en: 'VS Code Plugin'
        },
        text: {
          zh: '安装 "Playwright Test for VSCode" 插件，命令面板 (Ctrl+Shift+P) → "Playwright: Record new test"，选择浏览器开始录制。',
          en: 'Install "Playwright Test for VSCode" plugin, command palette (Ctrl+Shift+P) → "Playwright: Record new test", select browser to start recording.'
        }
      },
      {
        icon: faBug,
        role: {
          zh: 'Inspector 调试器',
          en: 'Inspector Debugger'
        },
        text: {
          zh: '运行 "npx playwright test --debug" 进入调试模式，在调试界面点击 "Record" 按钮开始可视化录制。',
          en: 'Run "npx playwright test --debug" to enter debug mode, click "Record" button in debug interface to start visual recording.'
        }
      }
    ]
  },
  // 6. Trace Viewer & Reports
  {
    id: 'trace-viewer',
    type: 'feature-grid',
    section: {
      zh: 'Part 3: 核心工具链',
      en: 'Part 3: Core Tools'
    },
    title: {
      zh: '核心工具二：Trace Viewer',
      en: 'Core Tool 2: Trace Viewer'
    },
    subtitle: {
      zh: '调试像看电影一样简单',
      en: 'Debugging as simple as watching a movie'
    },
    features: [
      {
        title: {
          zh: '时间轴回溯',
          en: 'Timeline Playback'
        },
        desc: {
          zh: '拖动进度条，查看每一毫秒的页面状态',
          en: 'Drag progress bar to view page state at every millisecond'
        },
        icon: faVideo
      },
      {
        title: {
          zh: 'DOM 快照',
          en: 'DOM Snapshots'
        },
        desc: {
          zh: '不仅是截图，而是真实的 DOM，可检查元素属性',
          en: 'Not just screenshots, but real DOM with inspectable element properties'
        },
        icon: faCode
      },
      {
        title: {
          zh: '网络请求',
          en: 'Network Requests'
        },
        desc: {
          zh: '查看每个操作触发的 API 请求和响应详情',
          en: 'View API requests and response details triggered by each operation'
        },
        icon: faNetworkWired
      },
      {
        title: {
          zh: 'HTML 报告',
          en: 'HTML Reports'
        },
        desc: {
          zh: '一键生成包含视频、截图、Trace 的完整报告',
          en: 'One-click generation of complete reports with videos, screenshots, and traces'
        },
        icon: faChartLine
      }
    ]
  },
  // 新增：调试技巧
  {
    id: 'debug-tips',
    type: 'code-demo',
    section: {
      zh: 'Part 3: 核心工具链',
      en: 'Part 3: Core Tools'
    },
    title: {
      zh: '核心工具三：调试技巧',
      en: 'Core Tool 3: Debugging Tips'
    },
    tag: 'Debug',
    desc: {
      zh: '测试失败了？别慌！Playwright 提供了强大的调试工具，让你快速定位问题。',
      en: 'Test failed? Don\'t panic! Playwright provides powerful debugging tools to help you quickly locate issues.'
    },
    concept: {
      zh: '多维度调试。从代码断点到可视化追踪，从控制台输出到录屏回放，全方位助力问题排查。',
      en: 'Multi-dimensional debugging. From code breakpoints to visual tracing, from console output to screen recording playback, comprehensive problem troubleshooting.'
    },
    filename: 'debug_techniques.ts',
    code: `<span class="code-comment">// 1. Enable debug mode</span>
<span class="code-function">npx</span> playwright test --debug

<span class="code-comment">// 2. Add breakpoint in code</span>
<span class="code-keyword">await</span> page.pause(); <span class="code-comment">// Pause execution, open debugger</span>

<span class="code-comment">// 3. Slow motion mode (for observation)</span>
<span class="code-keyword">const</span> browser = <span class="code-keyword">await</span> chromium.launch({
  slowMo: <span class="code-number">1000</span> <span class="code-comment">// 1 second interval between operations</span>
});

<span class="code-comment">// 4. Screenshot debugging</span>
<span class="code-keyword">await</span> page.screenshot({ path: <span class="code-string">'debug.png'</span> });

<span class="code-comment">// 5. Console output debugging</span>
page.on(<span class="code-string">'console'</span>, msg => console.log(<span class="code-string">'PAGE LOG:'</span>, msg.text()));

<span class="code-comment">// 6. Generate Trace file</span>
<span class="code-keyword">await</span> context.tracing.start({ screenshots: <span class="code-keyword">true</span>, snapshots: <span class="code-keyword">true</span> });
<span class="code-comment">// ... test code ...</span>
<span class="code-keyword">await</span> context.tracing.stop({ path: <span class="code-string">'trace.zip'</span> });</span>`
  },
  // 新增：Playwright 内置报告 (移动到 Part 4)
  {
    id: 'playwright-reports',
    type: 'feature-grid',
    section: {
      zh: 'Part 4: 测试报告',
      en: 'Part 4: Test Reports'
    },
    title: {
      zh: '内置报告系统：开箱即用',
      en: 'Built-in Report System: Out of the Box'
    },
    subtitle: {
      zh: '专业测试报告，无需额外配置',
      en: 'Professional test reports, no additional configuration needed'
    },
    features: [
      {
        title: {
          zh: 'HTML 报告',
          en: 'HTML Reports'
        },
        desc: {
          zh: '自动生成交互式 HTML 报告，包含测试结果、截图、视频',
          en: 'Auto-generated interactive HTML reports with test results, screenshots, videos'
        },
        icon: faFileCode
      },
      {
        title: {
          zh: 'JUnit XML',
          en: 'JUnit XML'
        },
        desc: {
          zh: '兼容 CI/CD 系统的标准 XML 格式报告，支持 Jenkins、GitLab',
          en: 'Standard XML format reports compatible with CI/CD systems, supports Jenkins, GitLab'
        },
        icon: faFileAlt
      },
      {
        title: {
          zh: 'JSON 报告',
          en: 'JSON Reports'
        },
        desc: {
          zh: '结构化数据输出，便于自定义分析和二次开发',
          en: 'Structured data output for custom analysis and secondary development'
        },
        icon: faCode
      },
      {
        title: {
          zh: '实时预览',
          en: 'Live Preview'
        },
        desc: {
          zh: '测试运行时实时更新，支持失败重试和并行执行统计',
          en: 'Real-time updates during test execution, supports failure retry and parallel execution statistics'
        },
        icon: faVideo
      }
    ]
  },
  // 新增：Allure 集成 (移动到 Part 4)
  {
    id: 'allure-integration',
    type: 'code-demo',
    section: {
      zh: 'Part 4: 测试报告',
      en: 'Part 4: Test Reports'
    },
    title: {
      zh: 'Allure 企业级报告集成',
      en: 'Allure Enterprise Report Integration'
    },
    tag: 'Enterprise',
    desc: {
      zh: '企业级测试报告解决方案。Allure 提供更丰富的可视化图表、趋势分析和团队协作功能。',
      en: 'Enterprise-level test reporting solution. Allure provides richer visualization charts, trend analysis and team collaboration features.'
    },
    concept: {
      zh: 'Allure 集成。通过 @playwright/test 的 reporter 配置，无缝集成 Allure 报告系统，获得专业级的测试分析能力。',
      en: 'Allure integration. Seamlessly integrate Allure reporting system through @playwright/test reporter configuration for professional-grade test analysis capabilities.'
    },
    filename: 'playwright.config.ts',
    code: `<span class="code-comment">// 1. Install Allure dependencies (CLI tools required)</span>
<span class="code-function">npm</span> install -D allure-playwright @allure/cli

<span class="code-comment">// 2. Configure playwright.config.ts</span>
<span class="code-keyword">import</span> { defineConfig } <span class="code-keyword">from</span> <span class="code-string">'@playwright/test'</span>;

<span class="code-keyword">export default</span> defineConfig({
  reporter: [
    [<span class="code-string">'html'</span>], <span class="code-comment">// Keep built-in HTML reports</span>
    [<span class="code-string">'allure-playwright'</span>, {
      outputFolder: <span class="code-string">'allure-results'</span>,
      suiteTitle: <span class="code-string">'E2E Tests'</span>,
      detail: <span class="code-keyword">true</span>,
      outputFolder: <span class="code-string">'./allure-results'</span>
    }]
  ],
  <span class="code-comment">// Other configurations...</span>
});

<span class="code-comment">// 3. Run tests and generate reports</span>
<span class="code-function">npx</span> playwright test
<span class="code-function">npx</span> allure generate ./allure-results -o ./allure-report --clean
<span class="code-function">npx</span> allure open ./allure-report

<span class="code-comment">// 4. Or use package.json scripts to simplify commands</span>
<span class="code-comment">// "scripts": {</span>
<span class="code-comment">//   "test:allure": "playwright test && allure generate ./allure-results -o ./allure-report --clean"</span>
<span class="code-comment">// }</span>`
  },
  // 8. Mock 数据演示 (进阶场景)
  {
    id: 'mock-demo',
    type: 'mock-demo',
    section: {
      zh: 'Part 5: 进阶场景',
      en: 'Part 5: Advanced Scenarios'
    },
    title: {
      zh: '进阶场景一：网络拦截 (Mock)',
      en: 'Advanced Scenario 1: Network Interception (Mock)'
    },
    desc: {
      zh: '后端接口挂了？数据造不出来？没关系，Playwright 可以在浏览器层拦截请求，直接返回模拟数据。',
      en: 'Backend API down? Can\'t create test data? No problem, Playwright can intercept requests at browser level and return mock data directly.'
    }
  },
  // 7. 视觉回归演示 (进阶场景)
  {
    id: 'visual-regression',
    type: 'visual-compare',
    section: {
      zh: 'Part 5: 进阶场景',
      en: 'Part 5: Advanced Scenarios'
    },
    title: {
      zh: '进阶场景二：视觉回归测试',
      en: 'Advanced Scenario 2: Visual Regression Testing'
    },
    desc: {
      zh: '像素级对比。肉眼看不出的 1px 偏移或颜色变化，Playwright 都能精准捕获。拖动滑块查看差异 👇',
      en: 'Pixel-level comparison. 1px shifts or color changes invisible to naked eye can be precisely captured by Playwright. Drag slider to see differences 👇'
    }
  },
  // 4.6 Dev 痛点解决方案 (进阶场景 - API)
  {
    id: 'dev-solution',
    type: 'code-demo',
    section: {
      zh: 'Part 5: 进阶场景',
      en: 'Part 5: Advanced Scenarios'
    },
    title: {
      zh: '进阶场景三：API 混合测试',
      en: 'Advanced Scenario 3: API Hybrid Testing'
    },
    tag: 'API',
    desc: {
      zh: '改了一行代码不敢上线？QA 追着你要测试数据？Playwright 帮你搞定。',
      en: 'Afraid to deploy after changing one line of code? QA chasing you for test data? Playwright has got you covered.'
    },
    concept: {
      zh: 'API 混合模式。利用 API RequestContext 毫秒级造数据，结合 UI 测试实现完整验证。',
      en: 'API hybrid mode. Use API RequestContext for millisecond-level data creation, combined with UI testing for complete verification.'
    },
    filename: 'api_hybrid_test.ts',
    code: `<span class="code-keyword">import</span> { test, expect } <span class="code-keyword">from</span> <span class="code-string">'@playwright/test'</span>;

test(<span class="code-string">'新功能回归测试'</span>, <span class="code-keyword">async</span> ({ page, request }) => {
  <span class="code-comment">// 🚀 Pain point solution 1: Lightning-fast data creation (no manual DB/UI operations)</span>
  <span class="code-comment">// Direct API calls to create orders, 100x faster than UI operations</span>
  <span class="code-keyword">const</span> res = <span class="code-keyword">await</span> request.post(<span class="code-string">'/api/create-order'</span>, {
    data: { product: <span class="code-string">'iPhone 15'</span>, qty: <span class="code-number">1</span> }
  });
  <span class="code-keyword">const</span> order = <span class="code-keyword">await</span> res.json();

  <span class="code-comment">// 🚀 Pain point solution 2: Automated regression</span>
  <span class="code-comment">// Use the created data to start UI validation directly</span>
  <span class="code-keyword">await</span> page.goto(<span class="code-string">\`/orders/\${order.id}\`</span>);
  <span class="code-keyword">await</span> expect(page.getByText(<span class="code-string">'待支付'</span>)).toBeVisible();

  <span class="code-comment">// 💡 API + UI hybrid validation, fast and comprehensive!</span>
  <span class="code-comment">// Data accuracy + UI correctness = Perfect testing</span>
});`
  },
  // 4.5 CI/CD 流水线可视化 (进阶场景)
  {
    id: 'ci-pipeline',
    type: 'ci-pipeline',
    section: {
      zh: 'Part 5: 进阶场景',
      en: 'Part 5: Advanced Scenarios'
    },
    title: {
      zh: '进阶场景四：CI/CD 流水线集成',
      en: 'Advanced Scenario 4: CI/CD Pipeline Integration'
    },
    tag: 'DevOps',
    desc: {
      zh: '从代码提交到测试报告，全自动化流水线让每次发布都有信心保障。Playwright 无缝集成各种 CI/CD 平台。',
      en: 'From code commit to test reports, fully automated pipeline ensures confidence in every release. Playwright seamlessly integrates with various CI/CD platforms.'
    }
  },
  // 9. 实用场景
  {
    id: 'scenarios',
    type: 'content-list',
    section: {
      zh: 'Part 6: 总结与应用',
      en: 'Part 6: Summary & Applications'
    },
    title: {
      zh: '实用场景：效率翻倍',
      en: 'Practical Scenarios: Double Efficiency'
    },
    subtitle: {
      zh: '技术与非技术的完美结合',
      en: 'Perfect combination of technical and non-technical'
    },
    items: [
      {
        icon: faUsers,
        role: {
          zh: '全员',
          en: 'Everyone'
        },
        text: {
          zh: '自动化登录脚本：一键获取 Token/Cookie，跳过繁琐登录验证。',
          en: 'Automated login scripts: One-click Token/Cookie retrieval, skip tedious login verification.'
        }
      },
      {
        icon: faBug,
        role: 'QA/Dev',
        text: {
          zh: '线上巡检：定时跑脚本，页面挂了第一时间报警截图。',
          en: 'Online monitoring: Scheduled scripts, immediate alerts with screenshots when pages fail.'
        }
      },
      {
        icon: faChartLine,
        role: {
          zh: 'PO/运营',
          en: 'PO/Operations'
        },
        text: {
          zh: '产品数据自动化：定时抓取用户行为数据、转化率报告，自动生成产品分析报告并推送，让产品决策有数据支撑。',
          en: 'Product data automation: Scheduled user behavior data scraping, conversion reports, auto-generated product analysis reports with push notifications for data-driven product decisions.'
        }
      }
    ]
  },
  // 10. 结尾
  {
    id: 'end',
    type: 'cover',
    title: {
      zh: 'Let\'s Automate!',
      en: 'Let\'s Automate!'
    },
    highlight: {
      zh: '解锁效率神器',
      en: 'Unlock Efficiency Tools'
    },
    subtitle: {
      zh: 'Playwright 让每个人都能成为自动化专家',
      en: 'Playwright makes everyone an automation expert'
    },
    footer: {
      zh: 'Q & A 环节',
      en: 'Q & A Session'
    },
    icon: faCheckCircle
  }
];
