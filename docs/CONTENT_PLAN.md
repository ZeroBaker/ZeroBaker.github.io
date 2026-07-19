# CONTENT_PLAN.md

## 已确认的内容原则

- 对外品牌名统一写作 `ZeroBaker`；文件名和代码变量仍使用小写英文，多个单词用短横线连接；
- 四个主要板块统一采用中英文双标题；
- 网站保留联系方式，但不提供简历下载，也不设置公开版简历入口。

## 首页 Home

需要展示：

- `ZeroBaker` Logo；
- 欢迎文案；
- LAYOVER 虚线路径；
- 济州岛背影照；
- 四块跳转蛋糕。

`LAYOVER` 的含义：它的灵感来自金泰亨首张个人专辑。在本站中，它首先代表站主在人生路途中的短暂停留、回望、反思与疗愈，也是一处让他人路过她的生活时能够短暂浏览的个人注脚。首页文案应优先表达这一层含义，专辑灵感可在“烘焙秘方”或个人故事中进一步说明。

四块蛋糕图片后续单独生成，目前继续使用占位路径。

待提供素材：Logo、济州岛原图、四块蛋糕图的生成方向。

## 自我介绍 / ABOUT THE BAKER

引导语：

“我很难用一个标签概括自己。比起罗列经历，我更愿意从三份配方说起：我如何观察生活、如何投入行动，以及如何把喜欢的事慢慢做成作品。”

### Recipe 01

- 中文标题：学习与观察
- 英文标题：LEARNING & OBSERVING
- 正文：我本科就读于中国人民大学农业与农村发展学院农林经济管理专业，现在也继续在这里攻读食品经济管理硕士。在人大学习的经历，让我习惯从数据、制度与人的选择之间理解问题；调研与科研训练，以及那段特别的高丽大学交换经历，则让我不断走近真实生活，观察不同的人如何工作、消费、生活，又如何作出自己的决定。

### Recipe 02

- 中文标题：工作与行动
- 英文标题：WORKING & MAKING THINGS HAPPEN
- 正文：本科毕业后，我在中国人民大学综合保障部全职工作了两年，而后保研攻读硕士学位。这段工作中，我做过新媒体运营，也处理过行政、党务事务，并参与了学校许多大型项目的推进。后来在硕士期间，我进入搜狐担任企业文化实习生，继续接触内容策划、短视频与活动传播。不同角色让我逐渐确认：我既能把复杂的事情稳稳推进，也喜欢把一个想法变成更清楚、更有意思的内容。

### Recipe 03

- 中文标题：兴趣与创造
- 英文标题：LOVING & CREATING
- 正文：追星是我学习创造的另一条路径。为了记录喜欢，我开始剪视频、运营账号、组织线下活动，也在社群与跨文化表达中认识更多的人。现在，我又把好奇心伸向AI、基础编程与Vibe Coding；ZeroBaker——你现在正在浏览的这个网页，就是我第一次把这些兴趣完整做成一个作品。

正式素材：`assets/images/about/about-main-collage.png`，用于自我介绍左侧人物拼贴。

## 作品展示 / FRESHLY BAKED

板块定位：像 ZeroBaker 烘焙坊的成品橱窗一样，平铺展示四个代表作品。访客浏览截图和简短介绍后，可点击截图前往外部原作；不增加分类筛选、详情弹窗、横向轮播、项目时间线或“查看更多”。

固定文案：

- 中文标题：`作品展示`；
- 英文标题：`FRESHLY BAKED`；
- 引导文案：`这里是一些已经出炉的近期作品。`；
- 图片提示：`点击图片查看原作`。

正式作品：

| 平台标签 | 中文标题 | 图片 | 强调色 | 原作链接 |
| --- | --- | --- | --- | --- |
| `BILIBILI · VIDEO EDIT` | `《防弹少年团solo，但是用〈怪奇物语〉打开》` | `assets/images/projects/project-bts-stranger-things.png` | 蓝莓紫 | `https://www.bilibili.com/video/BV1J84y1d7Qb` |
| `XIAOHONGSHU · CONTENT OPERATION` | `搜狐员工采访快剪` | `assets/images/projects/project-sohu-interview.png` | 草莓红 | 用户确认的小红书作品链接，完整参数集中保存在 `content.js` |
| `WECHAT · EDITORIAL CONTENT` | `搜狐企业文化活动推送` | `assets/images/projects/project-sohu-wechat.png` | 焦糖棕 | `https://mp.weixin.qq.com/s/sne4kqxSQGIWNExvvbKOTg` |
| `WEB PROJECT · CONTENT & OPERATION` | `decodeBTS 歌词注释网站` | `assets/images/projects/project-decode-bts.png` | 鼠尾草绿 | `https://decodebts.netlify.app` |

内容与交互规则：

- 板块标题、引导文案、提示语和四个项目的文字、图片路径、alt 文本、链接、强调色统一由 `content.js` 管理；
- `script.js` 根据 `projects` 数组生成四张作品卡，`index.html` 只保留板块容器；
- 卡片顺序为平台标签、可点击截图、中文标题、两句介绍和小字提示；
- 所有正式项目链接在新标签页打开，并使用 `rel="noopener noreferrer"`；
- 若未来项目暂时没有有效链接，显示静态截图和“原作链接待补充”，不生成伪链接或不可用焦点；
- 1200px 以上四列，768px—1199px 两列两行，767px 以下单列；手机端不依赖 hover；
- 截图区域统一为 4:3，使用 `object-fit: cover`，当前四张正式截图无需单独调整 `object-position`。

## 烘焙秘方 / SECRET RECIPES

板块定位：七张带有个人语气的生活纸条，不作为履历、技能或作品展示。页面像一张散落着纸团、便签和生活碎片的私人工作台。

固定文案：

- 中文标题：`烘焙秘方`；
- 英文标题：`SECRET RECIPES`；
- 引导文案：`这里藏着一些喜欢的事、最近的兴趣，以及想被好好保存的生活瞬间。点开纸团，看看我私藏的配方。`

七份正式内容：

| 编号 | 标题 | 英文小标题 | 类型 | 图片 | 强调色 | 可选内容 |
| --- | --- | --- | --- | --- | --- | --- |
| `01` | `世界的选择是BTS` | `MY ONE & ONLY, BTS` | 追星 | `assets/images/recipes/recipe-bts.jpg` | `#A89BC7` | 无 |
| `02` | `好喜欢海边` | `WHERE THE SEA HOLDS EVERYTHING` | 旅行 | `assets/images/recipes/recipe-travel.jpg` | `#D6C9B8` | 无 |
| `03` | `热爱从线上到线下` | `FROM ONLINE LOVE TO OFFLINE ADVENTURES` | 追星 | `assets/images/recipes/recipe-fandom.jpg` | `#C98773` | Bilibili 外部链接 |
| `04` | `最近在看的` | `CURRENTLY WATCHING` | 影视 | `assets/images/recipes/recipe-currently-watching.jpg` | `#7F8DA3` | 无 |
| `05` | `最近在听的` | `ON REPEAT LATELY` | 音乐 | `assets/images/recipes/recipe-song.jpg` | `#6F8FAF` | 原生音频试听与 YouTube 外部链接 |
| `06` | `最近感兴趣的事` | `MY LATEST RABBIT HOLE` | Vibe Coding | `assets/images/recipes/recipe-vibe-coding.png` | `#B8665C` | TATA Codex桌宠 ZIP 下载 |
| `07` | `一个生活的瞬间` | `A MOMENT I’LL ALWAYS REMEMBER` | 日常 | `assets/images/recipes/recipe-daily-moment.jpg` | `#A46068` | 小红书外部链接 |

内容与交互规则：

- 标题、引导文案、七份正文、图片、链接、强调色、音频和下载文件统一由 `content.js` 管理；
- `script.js` 根据 `recipeNotes` 数组生成纸团，并将所选内容渲染到一个通用展开纸张中；
- 桌面端七个纸团不规则但平衡地散落，手机端使用两列不规则网格，极窄设备改为单列；
- 展开纸张支持关闭按钮、背景空白和 Escape 键关闭，打开后移入焦点，关闭后焦点返回原纸团；
- Note 05 仅使用原生 `<audio controls>`，不自动播放；关闭时暂停并归零；
- 外部链接在新标签页打开并使用 `rel="noopener noreferrer"`；Note 06 下载链接使用 HTML `download` 属性；
- 空链接、空音频或空下载字段不生成无效控件。

## 联系方式 / FIND ME

需要展示：

- 小红书主页；
- 抖音主页；
- Bilibili 主页；
- 公开邮箱；
- 联系页甜品照片。

网站不提供简历下载，也不设置公开版简历入口；联系方式继续保留。

不要在公开页面放手机号、未公开公司资料或其他敏感信息。
