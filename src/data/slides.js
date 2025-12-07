import { faCode, faBug, faChartLine, faRocket, faRobot, faLayerGroup, faCheckCircle, faBolt, faUsers } from '@fortawesome/free-solid-svg-icons';

    export const slides = [
      {
        id: 'cover',
        type: 'cover',
        title: 'Dev / QA / PO 都能用的',
        highlight: '自动化“效率神器”',
        subtitle: '想让自动化测试不再是 QA 专属？Playwright 来了！',
        footer: '打破角色壁垒 · 全链路提升协作速度',
        icon: faRocket
      },
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
      {
        id: 'what-is',
        type: 'split',
        title: 'Playwright 是什么？',
        leftContent: {
          heading: '微软出品，必属精品',
          text: 'Playwright 是一个现代化的 Web 自动化测试框架。它不仅仅是测试工具，更是一个能够完全操控浏览器的“超级机器人”。',
          tags: ['跨浏览器', '跨平台', '极速执行', '自动等待']
        },
        rightContent: {
          icon: faRobot,
          stats: [
            { label: 'GitHub Stars', value: '60k+' },
            { label: 'NPM Downloads', value: '5M/w' },
            { label: '支持语言', value: 'JS/TS/Py/Java' }
          ]
        }
      },
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
      {
        id: 'capabilities',
        type: 'feature-grid',
        title: 'Playwright 到底能做什么？',
        subtitle: '不仅仅是点点点',
        features: [
          { title: '全自动操作', desc: '点击、输入、拖拽、上传，模拟真实用户行为', icon: faBolt },
          { title: '视觉回归', desc: '像素级对比截图，UI 变动一目了然', icon: faLayerGroup },
          { title: '网络拦截', desc: 'Mock 接口数据，无需后端也能跑通流程', icon: faUsers },
          { title: '多环境支持', desc: '一次编写，Chrome/Firefox/Safari 全覆盖', icon: faRocket }
        ]
      },
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
