// 个人简历数据 - 全部为前端静态数据

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  resumeUrl: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  schoolUrl?: string;
  logo?: string;
  description: string;
}

export interface WorkProject {
  id: string;
  period: string;
  title: string;
  company: string;
  companyUrl?: string; // 官网链接，有则点击公司名可跳转
  logo?: string; // 公司 logo 图片路径
  brief: string;
  tags: string[];
  // 新版：多项目结构（横向并排展示）
  projects?: {
    name: string;
    techStack: string[];
    description: string;
    works: string[];
  }[];
  // 旧版：单条亮点（fallback，若无 projects 时使用）
  highlights: string[];
  details: string[];
}

export interface SkillCategory {
  category: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface ExploreProject {
  id: string;
  icon: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  url?: string;
  path?: string;
}

export interface NoteItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
}

// 个人信息
export const profile: ProfileData = {
  name: '潘常浩',
  title: 'Java Backend Developer',
  bio: '2 年软件开发经验，专注于构建稳定、高效的系统，注重代码质量与长期价值，追求系统性能、可维护性与工程规范。',
  email: 'panchanghao0102@163.com',
  resumeUrl: '/潘常浩_后端开发_13922442730.pdf'
};

// 教育背景
export const education: EducationItem[] = [
  {
    period: '2021.09 - 2025.06',
    degree: '软件工程 · 本科',
    school: '广东财经大学',
    schoolUrl: 'https://www.gdufe.edu.cn/main.htm',
    logo: '/gdufe.webp',
    description: 'GPA 3.6（专业前 10%），主修课程：计算机网络、操作系统、数据库原理等。'
  }
];

// 工作经历项目（列表形式，点击可弹窗查看详情）
export const workProjects: WorkProject[] = [
  {
    id: 'w1',
    period: '2025.03 - 至今',
    title: 'Java 开发工程师',
    company: '广州金博信息科技有限公司',
    companyUrl: 'http://www.kingbos.com/',
    logo: '/kingbos.webp',
    brief: '金博软件成立于2007年，二十年来一直专注于医药行业信息化，作为国内领先的医药行业信息化服务商，现已成功地为国内近5万家医药企业提供了信息化管理解决方案。',
    tags: ['Java', 'Spring Boot', 'C#', 'SaaS', '医药电商', 'OMS', 'WMS', 'TMS', 'ERP', '全栈开发'],
    highlights: [
      '参与金博云·瀚智 SaaS 平台开发，多租户覆盖医药行业，包含 ERP、OMS、WMS、TMS 等核心系统',
      '全栈负责电商相关模块开发，后端基于 Java 生态，前端使用 C# 技术栈',
      '深入参与订单管理系统（OMS）核心业务流程设计与实现，保障订单流转的稳定性与可追溯性',
      '参与仓库管理系统（WMS）与运输管理系统（TMS）的联调优化，提升仓储物流协同效率',
      '在多租户架构下进行数据库设计与权限隔离，确保数据安全性与系统可扩展性'
    ],
    details: [
      '技术栈突破：从单一后端 Java 扩展为全栈开发，新增前端 C# 技术栈，形成前后端双栈推进能力',
      '业务深度理解：深入掌握医药行业 SaaS 的核心业务链路——ERP 企业资源规划、OMS 订单管理、WMS 仓储、TMS 运输的完整闭环',
      '思维方式转变：从"先写代码再想业务"升级为"先理解业务再设计代码"，在复杂业务场景下积累系统设计与跨模块联调经验',
      '行业认知积累：对医药行业信息化解决方案有了体系化理解，能够从业务视角做技术选型与系统设计'
    ]
  },
  {
    id: 'w2',
    period: '2024.07 - 2026.02',
    title: '初级开发工程师（实习+转正）',
    company: '凯通科技股份有限公司',
    companyUrl: 'http://www.gdcattsoft.com/index',
    logo: '/catt.webp',
    brief: '凯通科技是一家通信网络运维支撑及企业信息化咨询服务提供商，自主研发了物联网智能采集引擎、移动应用管理引擎、大数据引擎等产品，广泛应用于电信、移动、联通、电力、教育、政府、广电、水利等领域。',
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'WebSocket', 'Redis', 'PostgreSQL', 'MySQL', 'Elasticsearch', 'MaaS', 'RAG', 'JSONPath', 'XXL-JOB'],
    projects: [
      {
        name: '综合监控话务工作台',
        techStack: ['WebSocket', 'Redis', 'PostgreSQL', 'MaaS', 'RAG'],
        description: '基于 AI 助手与实时通信的客服平台，涵盖智能应答、在线会话、工单处理及权限化值班管理等功能。',
        works: [
          '集成第三方语音通信平台，实现坐席呼入呼出、状态同步与通话记录自动归档，支撑日均 5000+ 通电话稳定运行。',
          '通过心跳检测与服务端状态兜底的坐席状态同步方案，避免网络中断导致状态不一致，保障呼叫匹配可靠性。',
          '为保障高并发下客服对话的可靠性与可扩展性，基于 WebSocket 设计支持上下文还原与异常隔离的通信机制，通过策略 + 工厂模式实现动态平台路由，避免连接中断，并支持新消息类型零侵入扩展。',
          '为降低单人工单处理成本，基于 MaaS 平台搭建 RAG 知识库与智能体，通过语义理解、知识检索与自研接口动态获取服务数据，实现工单类问题的自动分析与准确回复，有效降低人工介入率。',
          '为确保客服及时处理待办任务，通过定时任务聚合、前端轮询拉取与 Redis 消费去重，实现精准个人提醒。'
        ]
      },
      {
        name: '综合一体化保障可视化大屏',
        techStack: ['Spring Boot', 'Spring Cloud', 'xxl-job', 'MySQL', 'Redis', 'JSONPath'],
        description: '面向全国通信设备的监控大屏，支持地理区域与时间轴联动，实现指标动态聚合与实时态势感知。',
        works: [
          '面向大屏实时展示需求，承担指标数据服务构建任务，基于 XXL-JOB 每小时对数千条原始数据按地市与时间维度预聚合，并同步写入 Redis 与 MySQL，实现大屏查询响应小于 500 ms。',
          '基于策略模式与模板方法封装通用大屏指标格式，统一数据结构与渲染逻辑，降低新增指标接入成本。',
          '针对粒度数据升级导致的性能瓶颈，设计 JSONPath 分区存储 + 多线程并行处理方案，将全量指标推送耗时从 16 分钟降至 1.5 分钟，单次请求响应由 57 秒优化至 1.21 秒，传输体积压缩至 796 KB。',
          '因聚合任务执行缓慢，通过优化 SQL 查询逻辑、添加复合索引等，将单次任务从 40 分钟降至 3 分钟内。',
          '因指标数据持续增长，设计按月分表策略，结合 MyBatis 动态表名路由，有效控制单表数据量在百万级以内。'
        ]
      }
    ],
    highlights: [],
    details: [
      '首次在大型通信项目中担任核心后端开发，完整参与两条技术路线截然不同的业务闭环',
      '实时通信场景（话务工作台）：在"网络中断不可导致状态不一致"的硬约束下，设计并落地"状态机 + 心跳检测 + 超时兜底"的组合方案；运用工厂模式 + 策略模式实现动态路由，使长连接管理可扩展、可维护',
      '高性能数据场景（监控大屏）：直面性能挑战，将全量指标推送从 16 分钟优化至 1.5 分钟，单次查询响应从 57 秒降至 1.21 秒，传输体积压缩至 796 KB',
      '系统工程方法：性能优化不只是"加缓存"，而是从数据建模（JSONPath 分区存储）到并行处理（多线程）再到查询优化（复合索引 + SQL 逻辑组合）的端到端工程思维',
      '技术广度拓展：两个项目完整覆盖 Spring Boot、Spring Cloud、WebSocket、Redis、PostgreSQL、MySQL、XXL-JOB、分表分库等核心技术栈',
      '认知升级：优秀的后端工程师不仅要会写代码，更要在业务约束下做出合理取舍与架构决策'
    ]
  },
  {
    id: 'w3',
    period: '2024.01 - 2024.06',
    title: 'Java 开发工程师（实习）',
    company: '广州优路加信息科技有限公司',
    companyUrl: 'http://www.u-road.com/',
    logo: '/u-road.webp',
    brief: '优路加是一家交通路况信息服务平台，为高速公路、ETC、交警部门提供项目服务并运用其大数据进行衍生的咨询和资源对接服务。专注于智能交通研究，提供多维、多元、动态的交通路况信息服务；此外还提供各种基于云服务的智能车联网设备。',
    tags: ['Java', 'Spring Boot', '多租户', 'MQTT', 'Redis', 'AOP', '动态数据源'],
    highlights: [
      '为解决 SaaS 平台多租户数据隔离需求，实现动态数据源切换和动态加密解密功能，提升系统安全性和可扩展性',
      '独立负责人工客服功能，基于 MQTT 协议和 Redis 实现实时消息提醒和对话，支持万人级别同时在线聊天',
      '定时器日志过多，基于自定义注解和 AOP 实现日志框架，提高查错效率并解决日志文件过大问题',
      '为解决权限管理需求，实现动态数据权限和登录冲突检测功能，确保数据隔离和账号安全，提升系统安全性'
    ],
    details: [
      '身份转变：第一份实习，完成从学生到工程师的关键过渡',
      '独立交付：独立负责人工客服模块全流程，从技术选型（MQTT + Redis）、架构设计、编码实现到上线联调，首次完整走通一个功能模块',
      '工程意识觉醒：意识到"好代码不仅要能用，更要好维护、好排查"，推动落地自定义注解 + AOP 的日志框架，以及动态数据权限 + 登录冲突检测方案',
      '产出价值：日志框架解决定时器日志过多问题，权限方案保障数据隔离与账号安全，系统稳定性和可维护性整体提升'
    ]
  }
];

// 专业技能
export const skillCategories: SkillCategory[] = [
  {
    category: 'java-core',
    title: 'Java 核心',
    icon: '☕',
    color: '#f59e0b',
    skills: ['Java 8-21 新特性', '集合框架', '反射 / 动态代理', 'JVM 内存模型', '类加载机制', '垃圾回收算法']
  },
  {
    category: 'concurrency',
    title: '并发编程',
    icon: '⚡',
    color: '#8b5cf6',
    skills: ['JUC 并发工具', 'synchronized', 'volatile', '线程池', 'ReentrantLock', 'AQS']
  },
  {
    category: 'database',
    title: '数据库',
    icon: '🗄️',
    color: '#10b981',
    skills: ['MySQL 索引', '事务', '锁机制', 'MVCC', '读写分离', '分库分表', 'MongoDB', 'NoSQL']
  },
  {
    category: 'cache',
    title: '缓存技术',
    icon: '🧊',
    color: '#ef4444',
    skills: ['Redis 核心数据结构', '持久化', '过期淘汰', '内存淘汰', '缓存穿透', '缓存击穿', '缓存雪崩']
  },
  {
    category: 'framework',
    title: '主流框架',
    icon: '🛠️',
    color: '#22c55e',
    skills: ['Spring Boot', 'Spring MVC', 'MyBatis', 'MyBatis-Plus', 'Spring IOC', 'AOP', 'Bean 生命周期']
  },
  {
    category: 'middleware',
    title: '中间件',
    icon: '⚙️',
    color: '#0ea5e9',
    skills: ['Elasticsearch', 'Nginx', 'RabbitMQ', 'RocketMQ']
  },
  {
    category: 'microservice',
    title: '微服务',
    icon: '🧩',
    color: '#3b82f6',
    skills: ['Spring Cloud', 'Nacos', 'Gateway']
  },
  {
    category: 'frontend',
    title: '前端',
    icon: '🎨',
    color: '#ec4899',
    skills: ['Vue.js', 'HTML / CSS', 'JavaScript']
  },
  {
    category: 'ai',
    title: 'AI 应用',
    icon: '🤖',
    color: '#6366f1',
    skills: ['Spring AI', 'LangChain4j', 'RAG', '工具调用', 'MCP']
  }
];

// Vibe Coding 探索项目
export const exploreProjects: ExploreProject[] = [
  {
    id: 'e1',
    icon: '✨',
    title: '个人简历网站（本站）',
    date: '2026 · 05',
    description: '用 Vibe Coding 的方式，通过 Trae + Doubao-Seed-2.0-Code 打造属于自己的个人简历网站。',
    tags: ['Vibe Coding', 'React', 'TypeScript', 'Vite'],
    path: '/'
  },
  {
    id: 'e2',
    icon: '🔆',
    title: 'CheeringLight 应援小程序',
    date: '2026 · 06',
    description: '用于应援场景的微信小程序，支持在手机屏幕上全屏显示自定义文字，预设多种配色方案，支持闪烁、跑马灯、呼吸灯等多种动态效果，自带历史记录与本地持久化存储。',
    tags: ['微信小程序', 'TypeScript', 'WXML'],
    url: 'https://github.com/PlanBBBBB/CheeringLight'
  },
  {
    id: 'e3',
    icon: '📊',
    title: 'JVM 性能分析笔记库',
    date: '2026 · 01',
    description: '整理 JVM 调优实战案例，包括线程分析、内存泄漏定位、GC 日志解读等常见问题排查方法。',
    tags: ['JVM', '性能优化', '技术笔记']
  },
  {
    id: 'e4',
    icon: '🔍',
    title: '分布式限流组件',
    date: '2025 · 11',
    description: '实现基于令牌桶/漏桶算法的轻量级限流组件，支持多种限流策略与可视化监控。',
    tags: ['Java', '分布式', '组件设计']
  },
  {
    id: 'e5',
    icon: '📚',
    title: 'Spring 源码阅读笔记',
    date: '2025 · 09',
    description: '系统阅读 Spring 核心源码，记录 IoC、AOP、事务管理等模块的实现原理与学习心得。',
    tags: ['源码阅读', 'Spring', '深度思考']
  },
  {
    id: 'e6',
    icon: '💡',
    title: 'Vibe Coding 学习笔记',
    date: '持续更新',
    description: '记录如何用 AI 辅助编程提升开发效率，包括 Prompt 技巧、代码生成策略、调试方法等。',
    tags: ['学习笔记', '方法论', 'AI 辅助开发']
  }
];

// 笔记列表
export const notes: NoteItem[] = [
  { id: 'n1', title: 'Vibe Coding 入门：从不会写前端到做出自己的简历网站', date: '2026.05', readTime: '8 分钟' },
  { id: 'n2', title: 'JVM 调优实战：从一次 OOM 排查说起', date: '2026.04', readTime: '15 分钟' },
  { id: 'n3', title: 'Spring Boot 面试高频知识点整理', date: '2026.03', readTime: '10 分钟' },
  { id: 'n4', title: 'MySQL 索引原理与优化实践', date: '2026.02', readTime: '12 分钟' },
  { id: 'n5', title: 'Redis 在电商场景下的典型应用', date: '2026.01', readTime: '9 分钟' }
];
