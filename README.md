# 潘常浩 · 个人简历网站

一个使用 React + TypeScript + Vite 构建的响应式个人简历网站。

## 项目简介

这是一个纯前端的个人简历展示网站，用于展示个人信息、教育背景、工作经历、专业技能以及学习探索记录。网站采用现代化的设计风格，支持导航栏快速定位，点击 logo 可返回首页，专业技能以思维导图形式呈现。

## 功能特点

- 🏠 **关于我**：个人简介、联系方式、简历下载
- 🎓 **教育背景**：学习经历与学校信息
- 💼 **工作经历**：三段工作经历展示，点击可查看详情
- 🧠 **专业技能**：思维导图形式的技能展示
- 🌱 **学习与探索**：学习项目与技术探索记录
- 🔗 **可点击跳转**：部分项目卡片支持跳转到 GitHub 仓库
- 📱 **响应式设计**：适配不同屏幕尺寸

## 技术栈

### 前端框架与语言
- **React 18.3** - UI 框架
- **TypeScript 5.5** - 类型安全
- **Vite 5.4** - 构建工具

### 路由与依赖
- **React Router 6.26** - 客户端路由
- 纯 CSS 样式（无 UI 框架依赖）

### 开发工具
- npm - 包管理工具

## 项目架构

```
my-portfolio/
├── public/                      # 静态资源目录
│   ├── favicon.png             # 网站图标
│   ├── catt.jpg / kingbos.jpg / u-road.jpg / gdufe.jpg  # 图片资源
│   └── 潘常浩_后端开发_xxx.pdf  # 简历文件
├── src/
│   ├── components/              # 公共组件
│   │   ├── Navbar.tsx          # 顶部导航栏
│   │   └── JobMatcher.tsx      # 工作匹配组件（预留）
│   ├── data/
│   │   └── portfolio.ts        # 全部数据（个人信息、技能、工作经历等）
│   ├── pages/                   # 页面组件
│   │   ├── About.tsx           # 首页 / 关于我
│   │   ├── Education.tsx       # 教育背景
│   │   ├── Work.tsx            # 工作经历（含详情弹窗）
│   │   ├── Skills.tsx          # 专业技能（思维导图）
│   │   └── Explore.tsx         # 学习与探索（项目展示）
│   ├── styles/
│   │   └── global.css          # 全局样式
│   ├── App.tsx                 # 根组件（路由配置）
│   └── main.tsx                # 应用入口
├── index.html                  # HTML 模板
├── vite.config.ts              # Vite 配置
├── tsconfig.json               # TypeScript 配置
├── package.json                # 项目依赖与脚本
└── .gitignore                  # Git 忽略规则
```

## 架构说明

1. **数据驱动**：所有内容（个人信息、工作经历、技能等）集中存储在 `src/data/portfolio.ts` 中，页面组件读取数据渲染，便于维护与修改
2. **组件化页面**：每个导航页面对应一个独立的页面组件，代码结构清晰
3. **纯前端实现**：无后端依赖，所有数据硬编码在 TypeScript 文件中，可直接部署在任何静态托管平台（GitHub Pages、Vercel、Netlify 等）
4. **样式管理**：采用全局 CSS 文件，变量化的颜色与间距便于统一调整

## 快速开始

### 前置要求
- Node.js >= 14
- npm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后自动打开 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

## 自定义内容

修改 `src/data/portfolio.ts` 文件可以更新：
- 个人姓名、职位、简介
- 邮箱、简历文件
- 教育背景（学校、时间、专业、描述）
- 工作经历（公司、时间、职位、项目详情、心得）
- 专业技能（分类与具体技能）
- 学习探索项目（项目名称、描述、GitHub 链接）

## 项目截图

- 首页：个人简介 + 头像
- 专业技能页：思维导图式技能展示
- 工作经历页：列表 + 详情弹窗

## 目录规范

| 目录 | 作用 |
|------|------|
| `src/components/` | 可复用公共组件 |
| `src/pages/` | 页面级组件（每个对应一个导航页） |
| `src/data/` | 集中存储静态数据 |
| `src/styles/` | CSS 样式文件 |
| `public/` | 静态资源（图片、PDF 等） |

## License

MIT © 潘常浩
