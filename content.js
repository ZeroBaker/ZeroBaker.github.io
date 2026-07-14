/*
 * 网站可编辑内容集中存放在这里。
 * 后续替换文字、作品、烘焙秘方和联系方式时，优先修改这个文件。
 */
window.siteData = {
  basic: {
    ownerName: "王珺怡",
    siteName: "ZeroBaker",
  },

  // 首页可编辑文字与导航入口集中放在这里，后续调整文案时无需修改 HTML。
  home: {
    eyebrow: "WELCOME TO MY ONLINE-ONLY BAKERY",
    title: "欢迎你！我是王珺怡",
    intro:
      "这是我的个人网站，也是一家只在网上营业的烘焙坊。这里收集我做过的事、喜欢的东西，以及人生路上偶尔停下来时留下的注脚。戳戳小蛋糕，可以继续逛逛。",
    layover: "A little layover between life, work and everything I love.",
    navigation: [
      { label: "自我介绍", english: "ABOUT THE BAKER", target: "about" },
      { label: "作品展示", english: "FRESHLY BAKED", target: "projects" },
      { label: "烘焙秘方", english: "SECRET RECIPES", target: "recipes" },
      { label: "联系方式", english: "FIND ME", target: "contact" },
    ],
    cakes: [
      {
        label: "自我介绍",
        english: "ABOUT THE BAKER",
        target: "about",
        image: "assets/images/home/home-cake-about.png",
      },
      {
        label: "作品展示",
        english: "FRESHLY BAKED",
        target: "projects",
        image: "assets/images/home/home-cake-projects.png",
      },
      {
        label: "烘焙秘方",
        english: "SECRET RECIPES",
        target: "recipes",
        image: "assets/images/home/home-cake-recipes.png",
      },
      {
        label: "联系方式",
        english: "FIND ME",
        target: "contact",
        image: "assets/images/home/home-cake-contact.png",
      },
    ],
  },

  about: [
    {
      number: "Recipe 01",
      title: "学习与观察",
      text: "这里将补充本科、硕士和高丽大学交换学习的成长故事。",
    },
    {
      number: "Recipe 02",
      title: "工作与行动",
      text: "这里将补充中国人民大学与搜狐的工作经历，以及内容运营和项目执行经验。",
    },
    {
      number: "Recipe 03",
      title: "兴趣与创造",
      text: "这里将补充内容创作、线下活动、AI 探索与 Vibe Coding 的故事。",
    },
  ],

  projects: [
    {
      title: "搜狐企业文化内容运营",
      category: "内容运营 / 企业文化",
      description: "这里将补充项目背景、我的职责和项目结果。",
      result: "数据待补充",
      role: "选题、脚本、拍摄、剪辑与活动执行",
      image: "assets/images/projects/sohu-content-cover.jpg",
      url: "#",
    },
    {
      title: "Bilibili 视频创作",
      category: "视频创作 / 明星娱乐",
      description: "这里将展示混剪、自制综艺等代表作品。",
      result: "累计播放量 120 万+",
      role: "选题、素材筛选、叙事设计、剪辑与包装",
      image: "assets/images/projects/bilibili-video-cover.jpg",
      url: "#",
    },
    {
      title: "150 人线下观影活动",
      category: "社区活动 / 现场执行",
      description: "这里将展示活动物料、现场照片与完整执行过程。",
      result: "单场规模约 150 人",
      role: "场地对接、报名组织、物料设计与现场执行",
      image: "assets/images/projects/offline-event-cover.jpg",
      url: "#",
    },
  ],

  recipes: [
    {
      title: "我追的星",
      text: "这里将放一段与 BTS、内容创作或粉丝文化有关的故事。",
      image: "assets/images/recipes/recipe-fandom.jpg",
      mediaUrl: "#",
    },
    {
      title: "最近推荐的歌",
      text: "这里将放一首最近想分享的歌，以及推荐它的原因。",
      image: "assets/images/recipes/recipe-music.jpg",
      mediaUrl: "#",
    },
    {
      title: "最近在看的影视",
      text: "这里将放最近喜欢的电影、剧集或综艺。",
      image: "assets/images/recipes/recipe-film.jpg",
      mediaUrl: "#",
    },
    {
      title: "最近感兴趣的事",
      text: "这里将记录一个正在观察、学习或尝试的新事物。",
      image: "assets/images/recipes/recipe-interest.jpg",
      mediaUrl: "#",
    },
    {
      title: "一段旅行记忆",
      text: "这里将放一段旅行照片和与它有关的故事。",
      image: "assets/images/recipes/recipe-travel.jpg",
      mediaUrl: "#",
    },
    {
      title: "一个生活瞬间",
      text: "这里将收藏一个值得记住的普通日常。",
      image: "assets/images/recipes/recipe-daily-life.jpg",
      mediaUrl: "#",
    },
    {
      title: "最近想说的话",
      text: "这里将放一段近期的小故事或随想。",
      image: "assets/images/recipes/recipe-story.jpg",
      mediaUrl: "#",
    },
  ],

  socialLinks: [
    { label: "小红书", url: "#" },
    { label: "抖音", url: "#" },
    { label: "Bilibili", url: "#" },
    { label: "邮箱", url: "mailto:your-email@example.com" },
  ],
};
