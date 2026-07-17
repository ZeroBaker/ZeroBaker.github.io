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

  // 自我介绍的标题、引导语、图片和三份 Recipe 文案都在这里维护。
  about: {
    title: "自我介绍",
    englishTitle: "ABOUT THE BAKER",
    intro:
      "我很难用一个标签概括自己。比起罗列经历，我更愿意从三份配方说起：我如何观察生活、如何投入行动，以及如何把喜欢的事慢慢做成作品。",
    image: {
      src: "assets/images/about/about-main-collage.png",
      alt: "王珺怡的个人拼贴照片",
    },
    recipes: [
      {
        number: "Recipe 01",
        title: "学习与观察",
        englishTitle: "LEARNING & OBSERVING",
        text: "我本科就读于中国人民大学农业与农村发展学院农林经济管理专业，现在也继续在这里攻读食品经济管理硕士。在人大学习的经历，让我习惯从数据、制度与人的选择之间理解问题；调研与科研训练，以及那段特别的高丽大学交换经历，则让我不断走近真实生活，观察不同的人如何工作、消费、生活，又如何作出自己的决定。",
        theme: "sage",
        icon: "observe",
      },
      {
        number: "Recipe 02",
        title: "工作与行动",
        englishTitle: "WORKING & MAKING THINGS HAPPEN",
        text: "本科毕业后，我在中国人民大学综合保障部全职工作了两年，而后保研攻读硕士学位。这段工作中，我做过新媒体运营，也处理过行政、党务事务，并参与了学校许多大型项目的推进。后来在硕士期间，我进入搜狐担任企业文化实习生，继续接触内容策划、短视频与活动传播。不同角色让我逐渐确认：我既能把复杂的事情稳稳推进，也喜欢把一个想法变成更清楚、更有意思的内容。",
        theme: "caramel",
        icon: "whisk",
      },
      {
        number: "Recipe 03",
        title: "兴趣与创造",
        englishTitle: "LOVING & CREATING",
        text: "追星是我学习创造的另一条路径。为了记录喜欢，我开始剪视频、运营账号、组织线下活动，也在社群与跨文化表达中认识更多的人。现在，我又把好奇心伸向AI、基础编程与Vibe Coding；ZeroBaker——你现在正在浏览的这个网页，就是我第一次把这些兴趣完整做成一个作品。",
        theme: "berry",
        icon: "create",
      },
    ],
  },

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
