import { faCode, faBug, faChartLine, faRocket, faRobot, faLayerGroup, faCheckCircle, faBolt, faUsers, faVideo, faEye, faNetworkWired, faListUl } from '@fortawesome/free-solid-svg-icons';

export const slides = [
  // 1. 封面
  {
    id: 'cover',
    type: 'cover',
    title: 'Playwright',
    highlight: '自动化“效率神器”',
    subtitle: '想让自动化测试不再是 QA 专属？打破壁垒，全链路提升协作速度！',
    footer: 'Dev · QA · PO 协作共赢',
    icon: faRocket
  },
  // 1.5 会议大纲
  {
    id: 'agenda',
    type: 'content-list',
    title: '本次分享大纲',
    subtitle: '从入门到精通的效率之旅',
    items: [
      { icon: faLayerGroup, role: 'Overview', text: '为什么选择 Playwright？痛点与核心价值' },
      { icon: faBolt, role: 'Start', text: '快速上手：一键初始化与项目结构' },
      { icon: faCode, role: 'Demo', text: '核心功能实战：Codegen、调试与 Trace' },
      { icon: faRocket, role: 'Advanced', text: '进阶场景：Mock、视觉回归与 CI/CD' }
    ]
  },
  // 2. 痛点
  {
    id: 'intro-pain',
    type: 'content-list',
    title: '为什么要懂 Playwright？',
    subtitle: '痛点共鸣：那些让我们头秃的“重复活”',
    items: [
      { icon: faCode, role: 'Dev', text: '改个小功能，却要手动跑一遍全流程回归，甚至还要帮 QA 造数据？' },
      { icon: faBug, role: 'QA', text: 'UI 自动化脚本极其不稳定，维护脚本的时间比写脚本还长？' },
      { icon: faChartLine, role: 'PO', text: '想看产品验收结果，只能等口头汇报或复杂的 Excel，没有直观感受？' }
    ]
  },
  // 3. 核心价值概览
  {
    id: 'core-value',
    type: 'cards',
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
  // 4. Codegen 演示
  {
    id: 'demo-codegen',
    type: 'code-demo',
    title: '神器一：Codegen 录制',
    tag: 'For Dev & QA',
    desc: '不想写代码？没关系！打开浏览器点点点，Playwright 自动帮你生成代码。',
    concept: '所见即所得。在浏览器中的每一次点击、输入，都会实时转化为标准代码。',
    filename: 'codegen_output.ts',
    code: `<span class="code-keyword">import</span> { test, expect } <span class="code-keyword">from</span> <span class="code-string">'@playwright/test'</span>;

test(<span class="code-string">'test'</span>, <span class="code-keyword">async</span> ({ page }) => {
  <span class="code-comment">// 1. 打开页面</span>
  <span class="code-keyword">await</span> page.goto(<span class="code-string">'https://demo.playwright.dev/'</span>);
  
  <span class="code-comment">// 2. 点击登录</span>
  <span class="code-keyword">await</span> page.getByRole(<span class="code-string">'button'</span>, { name: <span class="code-string">'Login'</span> }).click();
  
  <span class="code-comment">// 3. 输入账号密码 (自动填充)</span>
  <span class="code-keyword">await</span> page.getByPlaceholder(<span class="code-string">'Username'</span>).fill(<span class="code-string">'admin'</span>);
  <span class="code-keyword">await</span> page.getByPlaceholder(<span class="code-string">'Password'</span>).fill(<span class="code-string">'123456'</span>);
  
  <span class="code-comment">// 4. 断言结果</span>
  <span class="code-keyword">await</span> expect(page.getByText(<span class="code-string">'Welcome'</span>)).toBeVisible();
});`
  },
  // 4.5 Dev 痛点解决方案
  {
    id: 'dev-solution',
    type: 'code-demo',
    title: 'Dev 痛点击破：回归 & 造数',
    tag: 'For Dev',
    desc: '改了一行代码不敢上线？QA 追着你要测试数据？Playwright 帮你搞定。',
    concept: 'API 混合模式 + CI 集成。利用 API RequestContext 毫秒级造数据，集成流水线实现“提交即回归”。',
    filename: 'auto_regression.ts',
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
  
  <span class="code-comment">// 💡 这一切都在 CI 流水线中自动运行！</span>
  <span class="code-comment">// git push -> 自动触发测试 -> 邮件接收报告</span>
});`
  },
  // 5. Flaky Tests 解决方案
  {
    id: 'demo-flaky',
    type: 'code-demo',
    title: '神器二：告别 Flaky Tests',
    tag: 'For QA',
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
  // 6. Trace Viewer & Reports
  {
    id: 'trace-viewer',
    type: 'feature-grid',
    title: '神器三：Trace Viewer & 报告',
    subtitle: '调试像看电影一样简单',
    features: [
      { title: '时间轴回溯', desc: '拖动进度条，查看每一毫秒的页面状态', icon: faVideo },
      { title: 'DOM 快照', desc: '不仅是截图，而是真实的 DOM，可检查元素属性', icon: faCode },
      { title: '网络请求', desc: '查看每个操作触发的 API 请求和响应详情', icon: faNetworkWired },
      { title: 'HTML 报告', desc: '一键生成包含视频、截图、Trace 的完整报告', icon: faChartLine }
    ]
  },
  // 7. 视觉回归演示
  {
    id: 'visual-regression',
    type: 'visual-compare',
    title: '神器四：视觉回归测试',
    desc: '像素级对比。肉眼看不出的 1px 偏移或颜色变化，Playwright 都能精准捕获。拖动滑块查看差异 👇'
  },
  // 8. Mock 数据演示
  {
    id: 'mock-demo',
    type: 'mock-demo',
    title: '神器五：网络拦截 (Mock)',
    desc: '后端接口挂了？数据造不出来？没关系，Playwright 可以在浏览器层拦截请求，直接返回模拟数据。'
  },
  // 9. 实用场景
  {
    id: 'scenarios',
    type: 'content-list',
    title: '实用场景：效率翻倍',
    subtitle: '技术与非技术的完美结合',
    items: [
      { icon: faUsers, role: '全员', text: '自动化登录脚本：一键获取 Token/Cookie，跳过繁琐登录验证。' },
      { icon: faBug, role: 'QA/Dev', text: '线上巡检：定时跑脚本，页面挂了第一时间报警截图。' },
      { icon: faChartLine, role: 'PO/运营', text: '数据抓取与生成：自动登录后台，下载报表，生成 PDF 发送邮件。' }
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
