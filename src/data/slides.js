import { faCode, faBug, faChartLine, faRocket, faRobot, faLayerGroup, faCheckCircle, faBolt, faUsers, faVideo, faEye, faNetworkWired, faListUl, faGlobe, faFileAlt, faFileCode, faChartBar, faCog, faCodeBranch, faHammer, faPlay, faEnvelope, faServer } from '@fortawesome/free-solid-svg-icons';

export const slides = [
  // 1. 封面
  {
    id: 'cover',
    type: 'cover',
    title: 'Playwright',
    highlight: '自动化"效率神器"',
    subtitle: '想让自动化测试不再是 QA 专属？打破壁垒，全链路提升协作速度！',
    footer: 'Dev · QA · PO 协作共赢',
    presenter: 'Bai, Menghan',
    icon: faRocket
  },
  // 1.5 会议大纲
  {
    id: 'agenda',
    type: 'content-list',
    title: '本次分享大纲',
    subtitle: '从入门到精通的效率之旅',
    items: [
      { icon: faLayerGroup, role: 'Part 1', text: 'Playwright 简介：定义、痛点与核心价值' },
      { icon: faBolt, role: 'Part 2', text: '快速上手：初始化项目、核心对象模型与稳定性机制' },
      { icon: faCode, role: 'Part 3', text: '核心工具链：Codegen、Trace Viewer 与调试技巧' },
      { icon: faChartBar, role: 'Part 4', text: '测试报告：内置 HTML 报告与 Allure 企业级报告集成' },
      { icon: faRocket, role: 'Part 5', text: '进阶场景：Mock、视觉回归与 CI/CD' }
    ]
  },
  // 2. 痛点
  {
    id: 'intro-pain',
    type: 'content-list',
    section: 'Part 1: Playwright 简介',
    title: '为什么要懂 Playwright？',
    subtitle: '痛点共鸣：那些让我们头秃的“重复活”',
    items: [
      { icon: faCode, role: 'Dev', text: '改个小功能，却要手动跑一遍全流程回归，甚至还要帮 QA 造数据？' },
      { icon: faBug, role: 'QA', text: 'UI 自动化脚本极其不稳定，维护脚本的时间比写脚本还长？' },
      { icon: faChartLine, role: 'PO', text: '想看产品验收结果，只能等口头汇报或复杂的 Excel，没有直观感受？' }
    ]
  },
  // 2.5 Playwright 介绍 (新增)
  {
    id: 'intro-definition',
    type: 'split',
    section: 'Part 1: Playwright 简介',
    title: '什么是 Playwright？',
    leftContent: {
      heading: '微软开源的新一代自动化测试工具',
      text: 'Playwright 是一个用于 Web 测试和自动化的框架，专为现代 Web 应用而生。它允许通过单个 API 自动执行 Chromium、Firefox 和 WebKit，支持无头（Headless）和有头（Headed）模式。',
      tags: ['跨浏览器', '跨平台', '多语言支持 (JS/TS/Py/Java/C#)', '速度极快']
    },
    rightContent: {
      icon: faRobot,
      stats: [
        { label: 'GitHub Stars', value: '60k+' },
        { label: 'NPM Downloads', value: '5M+/week' },
        { label: '更新频率', value: '每2周' },
        { label: '维护者', value: 'Microsoft' }
      ]
    }
  },
  // 3. 核心价值概览
  {
    id: 'core-value',
    type: 'cards',
    section: 'Part 1: Playwright 简介',
    title: '核心价值：打破壁垒',
    cards: [
      { 
        title: 'For Dev', 
        desc: '像写代码一样写测试。Codegen 录制功能直接生成代码，零门槛上手。',
        icon: faCode,
        color: 'bg-blue-500'
      },
      { 
        title: 'For QA', 
        desc: '告别“Flaky Tests”。自动等待机制让脚本稳如泰山，Trace Viewer 让调试像看电影一样简单。',
        icon: faCheckCircle,
        color: 'bg-green-500'
      },
      { 
        title: 'For PO', 
        desc: '可视化的执行结果。自动生成截图、视频和 HTML 报告，验收过程清晰可见。',
        icon: faChartLine,
        color: 'bg-purple-500'
      }
    ]
  },
  // 3.5 初始化项目
  {
    id: 'init-project',
    type: 'code-demo',
    section: 'Part 2: 快速上手',
    title: '快速开始：一键初始化',
    tag: 'Setup',
    desc: '无需繁琐配置，一行命令搞定所有环境依赖。',
    concept: 'Scaffolding。自动创建配置文件、安装浏览器驱动、生成示例测试。',
    filename: 'Terminal',
    code: `<span class="code-comment"># 1. 初始化项目</span>
<span class="code-function">npm</span> init playwright@latest

<span class="code-comment"># 2. 交互式配置</span>
<span class="code-string">✔</span> Do you want to use TypeScript or JavaScript? · <span class="code-keyword">TypeScript</span>
<span class="code-string">✔</span> Where to put your end-to-end tests? · <span class="code-string">tests</span>
<span class="code-string">✔</span> Add a GitHub Actions workflow? · <span class="code-keyword">true</span>
<span class="code-string">✔</span> Install Playwright browsers? · <span class="code-keyword">true</span>

<span class="code-comment"># 3. 运行测试</span>
<span class="code-function">npx</span> playwright test`
  },
  // 3.6 核心对象 (新增)
  {
    id: 'core-concepts',
    type: 'cards',
    section: 'Part 2: 快速上手',
    title: '核心对象模型',
    cards: [
      { 
        title: 'Browser', 
        desc: '浏览器实例 (Chromium, Firefox, WebKit)。通常整个测试只启动一次，成本较高。',
        icon: faGlobe,
        color: 'bg-gray-600'
      },
      { 
        title: 'Context', 
        desc: '隐身模式会话。极速创建，相互隔离。每个测试用例都运行在独立的 Context 中，互不干扰。',
        icon: faLayerGroup,
        color: 'bg-blue-600'
      },
      { 
        title: 'Page', 
        desc: '单个标签页。我们在 Page 上进行点击、输入、断言等操作。一个 Context 可以包含多个 Page。',
        icon: faFileAlt,
        color: 'bg-green-600'
      }
    ]
  },
  // 5. Flaky Tests 解决方案 (移动到 Part 2)
  {
    id: 'demo-flaky',
    type: 'code-demo',
    section: 'Part 2: 快速上手',
    title: '核心机制：告别 Flaky Tests',
    tag: 'Stability',
    desc: '以前我们需要写大量的 sleep(5000) 来等待页面加载，现在 Playwright 内置了智能等待机制。',
    concept: 'Auto-wait。在执行点击之前，Playwright 会自动确保元素是可见的、可点击的、且停止了动画。',
    filename: 'no_more_sleep.ts',
    code: `<span class="code-comment">// ❌ 以前的做法 (Selenium/Puppeteer)</span>
<span class="code-keyword">await</span> driver.sleep(<span class="code-number">5000</span>); <span class="code-comment">// 死等，浪费时间</span>
<span class="code-keyword">await</span> driver.findElement(By.id(<span class="code-string">'submit'</span>)).click();

<span class="code-comment">// ✅ Playwright 的做法</span>
<span class="code-comment">// 不需要 sleep！它会自动等待元素准备好</span>
<span class="code-keyword">await</span> page.getByRole(<span class="code-string">'button'</span>, { name: <span class="code-string">'Submit'</span> }).click();

<span class="code-comment">// 甚至可以自定义等待状态</span>
<span class="code-keyword">await</span> expect(page.getByTestId(<span class="code-string">'status'</span>)).toHaveText(<span class="code-string">'Success'</span>, {
  timeout: <span class="code-number">10000</span> <span class="code-comment">// 智能超时控制</span>
});`
  },
  // 4. Codegen 演示 - 第一部分：命令行方式
  {
    id: 'demo-codegen-cmd',
    type: 'code-demo',
    section: 'Part 3: 核心工具链',
    title: '核心工具一：Codegen 录制 (命令行)',
    tag: 'CMD方式',
    desc: '不想写代码？命令行一键启动录制！支持多种参数配置，满足不同场景需求。',
    concept: '命令行录制。通过不同参数控制浏览器类型、设备模拟、输出格式等，灵活高效。',
    filename: 'terminal_codegen.sh',
    code: `<span class="code-comment"># 基础录制 - 最简单的方式</span>
<span class="code-function">npx</span> playwright codegen https://demo.playwright.dev/

<span class="code-comment"># 指定浏览器录制</span>
<span class="code-function">npx</span> playwright codegen --browser=firefox https://example.com

<span class="code-comment"># 移动端设备模拟</span>
<span class="code-function">npx</span> playwright codegen --device="iPhone 13" https://m.example.com

<span class="code-comment"># 指定输出文件和语言</span>
<span class="code-function">npx</span> playwright codegen --target=javascript -o tests/login.spec.js https://example.com

<span class="code-comment"># 高级参数组合示例</span>
<span class="code-function">npx</span> playwright codegen --browser=chromium --device="iPhone 12" --output=tests/mobile.spec.ts https://m.example.com

<span class="code-comment"># 录制时保存用户数据</span>
<span class="code-function">npx</span> playwright codegen --save-storage=auth.json https://example.com`
  },
  // 4.2 Codegen 演示 - 第二部分：GUI方式
  {
    id: 'demo-codegen-gui',
    type: 'content-list',
    section: 'Part 3: 核心工具链',
    title: '核心工具一：Codegen 录制 (GUI方式)',
    subtitle: '可视化录制，所见即所得的完美体验',
    items: [
      {
        icon: faCode,
        role: 'VS Code 插件',
        text: '安装 "Playwright Test for VSCode" 插件，命令面板 (Ctrl+Shift+P) → "Playwright: Record new test"，选择浏览器开始录制。'
      },
      {
        icon: faBug,
        role: 'Inspector 调试器',
        text: '运行 "npx playwright test --debug" 进入调试模式，在调试界面点击 "Record" 按钮开始可视化录制。'
      }
    ]
  },
  // 6. Trace Viewer & Reports
  {
    id: 'trace-viewer',
    type: 'feature-grid',
    section: 'Part 3: 核心工具链',
    title: '核心工具二：Trace Viewer',
    subtitle: '调试像看电影一样简单',
    features: [
      { title: '时间轴回溯', desc: '拖动进度条，查看每一毫秒的页面状态', icon: faVideo },
      { title: 'DOM 快照', desc: '不仅是截图，而是真实的 DOM，可检查元素属性', icon: faCode },
      { title: '网络请求', desc: '查看每个操作触发的 API 请求和响应详情', icon: faNetworkWired },
      { title: 'HTML 报告', desc: '一键生成包含视频、截图、Trace 的完整报告', icon: faChartLine }
    ]
  },
  // 新增：调试技巧
  {
    id: 'debug-tips',
    type: 'code-demo',
    section: 'Part 3: 核心工具链',
    title: '核心工具三：调试技巧',
    tag: 'Debug',
    desc: '测试失败了？别慌！Playwright 提供了强大的调试工具，让你快速定位问题。',
    concept: '多维度调试。从代码断点到可视化追踪，从控制台输出到录屏回放，全方位助力问题排查。',
    filename: 'debug_techniques.ts',
    code: `<span class="code-comment">// 1. 开启调试模式</span>
<span class="code-function">npx</span> playwright test --debug

<span class="code-comment">// 2. 代码中添加断点</span>
<span class="code-keyword">await</span> page.pause(); <span class="code-comment">// 暂停执行，打开调试器</span>

<span class="code-comment">// 3. 慢动作模式 (便于观察)</span>
<span class="code-keyword">const</span> browser = <span class="code-keyword">await</span> chromium.launch({
  slowMo: <span class="code-number">1000</span> <span class="code-comment">// 每个操作间隔1秒</span>
});

<span class="code-comment">// 4. 截图调试</span>
<span class="code-keyword">await</span> page.screenshot({ path: <span class="code-string">'debug.png'</span> });

<span class="code-comment">// 5. 控制台输出调试</span>
page.on(<span class="code-string">'console'</span>, msg => console.log(<span class="code-string">'PAGE LOG:'</span>, msg.text()));

<span class="code-comment">// 6. 生成 Trace 文件</span>
<span class="code-keyword">await</span> context.tracing.start({ screenshots: <span class="code-keyword">true</span>, snapshots: <span class="code-keyword">true</span> });
<span class="code-comment">// ... 测试代码 ...</span>
<span class="code-keyword">await</span> context.tracing.stop({ path: <span class="code-string">'trace.zip'</span> });</span>`
  },
  // 新增：Playwright 内置报告 (移动到 Part 4)
  {
    id: 'playwright-reports',
    type: 'feature-grid',
    section: 'Part 4: 测试报告',
    title: '内置报告系统：开箱即用',
    subtitle: '专业测试报告，无需额外配置',
    features: [
      { title: 'HTML 报告', desc: '自动生成交互式 HTML 报告，包含测试结果、截图、视频', icon: faFileCode },
      { title: 'JUnit XML', desc: '兼容 CI/CD 系统的标准 XML 格式报告，支持 Jenkins、GitLab', icon: faFileAlt },
      { title: 'JSON 报告', desc: '结构化数据输出，便于自定义分析和二次开发', icon: faCode },
      { title: '实时预览', desc: '测试运行时实时更新，支持失败重试和并行执行统计', icon: faVideo }
    ]
  },
  // 新增：Allure 集成 (移动到 Part 4)
  {
    id: 'allure-integration',
    type: 'code-demo',
    section: 'Part 4: 测试报告',
    title: 'Allure 企业级报告集成',
    tag: 'Enterprise',
    desc: '企业级测试报告解决方案。Allure 提供更丰富的可视化图表、趋势分析和团队协作功能。',
    concept: 'Allure 集成。通过 @playwright/test 的 reporter 配置，无缝集成 Allure 报告系统，获得专业级的测试分析能力。',
    filename: 'playwright.config.ts',
    code: `<span class="code-comment">// 1. 安装 Allure 依赖（需要同时安装 CLI 工具）</span>
<span class="code-function">npm</span> install -D allure-playwright @allure/cli

<span class="code-comment">// 2. 配置 playwright.config.ts</span>
<span class="code-keyword">import</span> { defineConfig } <span class="code-keyword">from</span> <span class="code-string">'@playwright/test'</span>;

<span class="code-keyword">export default</span> defineConfig({
  reporter: [
    [<span class="code-string">'html'</span>], <span class="code-comment">// 保留内置 HTML 报告</span>
    [<span class="code-string">'allure-playwright'</span>, {
      outputFolder: <span class="code-string">'allure-results'</span>,
      suiteTitle: <span class="code-string">'E2E Tests'</span>,
      detail: <span class="code-keyword">true</span>,
      outputFolder: <span class="code-string">'./allure-results'</span>
    }]
  ],
  <span class="code-comment">// 其他配置...</span>
});

<span class="code-comment">// 3. 运行测试并生成报告</span>
<span class="code-function">npx</span> playwright test
<span class="code-function">npx</span> allure generate ./allure-results -o ./allure-report --clean
<span class="code-function">npx</span> allure open ./allure-report

<span class="code-comment">// 4. 或者使用 package.json 脚本简化命令</span>
<span class="code-comment">// "scripts": {</span>
<span class="code-comment">//   "test:allure": "playwright test && allure generate ./allure-results -o ./allure-report --clean"</span>
<span class="code-comment">// }</span>`
  },
  // 8. Mock 数据演示 (进阶场景)
  {
    id: 'mock-demo',
    type: 'mock-demo',
    section: 'Part 5: 进阶场景',
    title: '进阶场景一：网络拦截 (Mock)',
    desc: '后端接口挂了？数据造不出来？没关系，Playwright 可以在浏览器层拦截请求，直接返回模拟数据。'
  },
  // 7. 视觉回归演示 (进阶场景)
  {
    id: 'visual-regression',
    type: 'visual-compare',
    section: 'Part 5: 进阶场景',
    title: '进阶场景二：视觉回归测试',
    desc: '像素级对比。肉眼看不出的 1px 偏移或颜色变化，Playwright 都能精准捕获。拖动滑块查看差异 👇'
  },
  // 4.6 Dev 痛点解决方案 (进阶场景 - API)
  {
    id: 'dev-solution',
    type: 'code-demo',
    section: 'Part 5: 进阶场景',
    title: '进阶场景三：API 混合测试',
    tag: 'API',
    desc: '改了一行代码不敢上线？QA 追着你要测试数据？Playwright 帮你搞定。',
    concept: 'API 混合模式。利用 API RequestContext 毫秒级造数据，结合 UI 测试实现完整验证。',
    filename: 'api_hybrid_test.ts',
    code: `<span class="code-keyword">import</span> { test, expect } <span class="code-keyword">from</span> <span class="code-string">'@playwright/test'</span>;

test(<span class="code-string">'新功能回归测试'</span>, <span class="code-keyword">async</span> ({ page, request }) => {
  <span class="code-comment">// 🚀 痛点解决 1: 极速造数据 (无需手动操作数据库/UI)</span>
  <span class="code-comment">// 直接调用 API 创建订单，比 UI 操作快 100 倍</span>
  <span class="code-keyword">const</span> res = <span class="code-keyword">await</span> request.post(<span class="code-string">'/api/create-order'</span>, {
    data: { product: <span class="code-string">'iPhone 15'</span>, qty: <span class="code-number">1</span> }
  });
  <span class="code-keyword">const</span> order = <span class="code-keyword">await</span> res.json();

  <span class="code-comment">// 🚀 痛点解决 2: 自动回归</span>
  <span class="code-comment">// 拿着造好的数据，直接开始 UI 验证</span>
  <span class="code-keyword">await</span> page.goto(<span class="code-string">\`/orders/\${order.id}\`</span>);
  <span class="code-keyword">await</span> expect(page.getByText(<span class="code-string">'待支付'</span>)).toBeVisible();

  <span class="code-comment">// 💡 API + UI 混合验证，既快又全面！</span>
  <span class="code-comment">// 数据准确性 + 界面正确性 = 完美测试</span>
});`
  },
  // 4.5 CI/CD 流水线可视化 (进阶场景)
  {
    id: 'ci-pipeline',
    type: 'ci-pipeline',
    section: 'Part 5: 进阶场景',
    title: '进阶场景四：CI/CD 流水线集成',
    tag: 'DevOps',
    desc: '从代码提交到测试报告，全自动化流水线让每次发布都有信心保障。Playwright 无缝集成各种 CI/CD 平台。'
  },
  // 9. 实用场景
  {
    id: 'scenarios',
    type: 'content-list',
    section: 'Part 6: 总结与应用',
    title: '实用场景：效率翻倍',
    subtitle: '技术与非技术的完美结合',
    items: [
      { icon: faUsers, role: '全员', text: '自动化登录脚本：一键获取 Token/Cookie，跳过繁琐登录验证。' },
      { icon: faBug, role: 'QA/Dev', text: '线上巡检：定时跑脚本，页面挂了第一时间报警截图。' },
      { icon: faChartLine, role: 'PO/运营', text: '产品数据自动化：定时抓取用户行为数据、转化率报告，自动生成产品分析报告并推送，让产品决策有数据支撑。' }
    ]
  },
  // 10. 结尾
  {
    id: 'end',
    type: 'cover',
    title: 'Let\'s Automate!',
    highlight: '解锁效率神器',
    subtitle: 'Playwright 让每个人都能成为自动化专家',
    footer: 'Q & A 环节',
    icon: faCheckCircle
  }
];
