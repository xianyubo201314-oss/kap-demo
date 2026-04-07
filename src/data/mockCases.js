export const MOCK_CASES = [
  {
    id: 0,
    videoSrc: '/test-video.mp4',
    author: '王大锤的体验生活',
    desc: '不管你信不信人生就是体验#风有风的自由我有我的追求#安平助农专场#可食用的黄金#养生新贵#不管你信不信#风有风的自由我有我人生就是年轻人的新一代养生神...',
    stats: { like: '52.5w', comment: '34.5w', share: '3.0w' },
    reportCount: 3,
    reports: [
      {
        title: '[举报项] 抄袭、搬运、盗用他人作品：一比一抄袭我的原创视频，举报材料是本人主页截图，品图和相关凭证已上传，请核实处理。',
        images: ['/figma-376-4272.png', '/figma-372-3989.png', '/figma-372-4000.png', '/figma-394-5882.png', '/figma-394-5873.png']
      },
      {
        title: '[举报项] 抄袭、搬运、盗用他人作品：一比一抄袭我的原创视频，举报材料是本人主页截图，请官方仔细甄别！',
        images: []
      },
      {
        title: '[举报项] 引战歧视：贬低山东人，搞地域歧视拉踩山东人。',
        images: []
      }
    ],
    asrText: '我们这个是正宗的安平特产，可食用的黄金，今天在直播间给大家放漏！',
    ocrText: '可食用的黄金 假一赔十 假一赔十',
    comments: [
      {
        avatar: '/figma-376-4318.png',
        name: '平安是福',
        time: '12-05 山东',
        text: '这不就是普通的麦芽糖吗？怎么敢说是可食用黄金，简直是虚假宣传！官方不管管吗？',
        likes: '1.2w',
        dislikes: 3,
        images: ['/figma-376-4330.png', '/figma-376-4331.png']
      },
      {
        avatar: '/figma-376-4348.png',
        name: '岁月如歌',
        time: '12-04 河南',
        text: '我买了，根本不是那个味道，大家不要上当受骗，这主播之前就卖过假货。',
        likes: '899',
        dislikes: 0,
        images: []
      },
      {
        avatar: '/figma-376-4364.png',
        name: '风清云淡',
        time: '12-04 河北',
        text: '这视频是盗用的隔壁李二狗的，连声音都没换，太不要脸了。',
        likes: '456',
        dislikes: 12,
        images: ['/figma-376-4375.png', '/figma-376-4376.png', '/figma-376-4377.png']
      }
    ],
    aiTags: ['现任首长 88%'],
    aiDiag: [
      { label: '画面描述', text: '主播手持商品进行展示，屏幕上有“假一赔十”字样。' },
      { label: '文本描述', text: '包含“可食用的黄金”、“假一赔十”等夸大或虚假宣传词汇。' },
      { label: '命中规则', text: '可能涉及医疗夸大宣传或虚假宣传。' },
    ],
    thumbFrames: [
      { src: '/figma-376-4163.png', pct: 0 },
      { src: '/figma-376-4165.png', pct: 25 },
      { src: '/figma-376-4166.png', pct: 50 },
      { src: '/figma-376-4167.png', pct: 75 },
      { src: '/figma-376-4168.png', pct: 100 },
    ]
  },
  {
    id: 1,
    videoSrc: '/test-video.mp4',
    author: '游戏区的高玩',
    desc: '这波操作就问你服不服！丝血反杀，手速拉满，峡谷第一李白申请出战！#王者荣耀 #李白教学 #游戏日常',
    stats: { like: '12.3w', comment: '5.6w', share: '8.9k' },
    reportCount: 5,
    reports: [
      {
        title: '[举报项] 辱骂引战：主播在视频后半段对队友进行严重的人身攻击，言语极其恶劣。',
        images: ['/figma-394-5882.png', '/figma-394-5921.png']
      },
      {
        title: '[举报项] 违法违规：视频中出现了某外挂辅助工具的推广链接和群号。',
        images: ['/figma-372-4000.png']
      }
    ],
    asrText: '这辅助真的是个孤儿，连个盾都不会套，我真的是服了，纯纯的废物一个！',
    ocrText: '无敌外挂群：123456789 稳如老狗',
    comments: [
      {
        avatar: '/figma-376-4348.png',
        name: '峡谷喷子',
        time: '昨天 广东',
        text: '这李白确实秀，但骂人就过分了，举报走一波。',
        likes: '345',
        dislikes: 0,
        images: []
      },
      {
        avatar: '/figma-376-4364.png',
        name: '正义的使者',
        time: '前天 浙江',
        text: '这是开了透视吧？视野那么准，还敢在屏幕上打群号，太猖狂了。',
        likes: '1.5k',
        dislikes: 5,
        images: ['/figma-394-5900.png', '/figma-394-5929.png']
      }
    ],
    aiTags: ['辱骂引战 95%', '黑灰产 92%'],
    aiDiag: [
      { label: '画面描述', text: '游戏录屏画面，屏幕中心出现可疑数字串。' },
      { label: '文本描述', text: '包含严重辱骂性词汇和导流信息。' },
      { label: '命中规则', text: '涉及人身攻击和黑灰产导流。' },
    ],
    thumbFrames: [
      { src: '/figma-394-5908.png', pct: 0 },
      { src: '/figma-372-3990.png', pct: 25 },
      { src: '/figma-372-4000.png', pct: 50 },
      { src: '/figma-394-5917.png', pct: 75 },
      { src: '/figma-394-5882.png', pct: 100 },
    ]
  },
  {
    id: 2,
    videoSrc: '/test-video.mp4',
    author: '美妆小仙女',
    desc: '秋季最新奶茶妆容教程来啦！只要这一盘眼影，新手也能轻松拿捏温婉气质~快艾特你的闺蜜一起来学！#美妆教程 #新手化妆 #奶茶妆',
    stats: { like: '8.9w', comment: '1.2w', share: '3.4k' },
    reportCount: 2,
    reports: [
      {
        title: '[举报项] 虚假宣传：该眼影盘重金属超标，导致多人烂脸，视频完全是在误导消费者！',
        images: ['/figma-372-3989.png', '/figma-394-5908.png', '/figma-372-4000.png']
      }
    ],
    asrText: '只要用这个绝美大地色打底，再叠加这颗爆闪亮片，简直就是仙女本仙！',
    ocrText: '仙女必备 神仙眼影盘',
    comments: [
      {
        avatar: '/figma-376-4318.png',
        name: '打假卫士',
        time: '3小时前 上海',
        text: '千万别买！这牌子的代工厂早就被查封了，用了会过敏的！',
        likes: '5.6k',
        dislikes: 1,
        images: ['/figma-394-5873.png', '/figma-394-5925.png']
      },
      {
        avatar: '/figma-376-4364.png',
        name: '颜控患者',
        time: '5小时前 北京',
        text: '画出来确实好看，但质量真的不行吗？有点不敢拔草了。',
        likes: '234',
        dislikes: 0,
        images: []
      }
    ],
    aiTags: ['劣质商品 85%'],
    aiDiag: [
      { label: '画面描述', text: '人物面部特写，化妆品展示。' },
      { label: '文本描述', text: '常规美妆教程词汇，无明显违规。' },
      { label: '命中规则', text: '关联商品可能涉及客诉风险。' },
    ],
    thumbFrames: [
      { src: '/figma-394-5873.png', pct: 0 },
      { src: '/figma-394-5925.png', pct: 25 },
      { src: '/figma-394-5900.png', pct: 50 },
      { src: '/figma-394-5929.png', pct: 75 },
      { src: '/figma-394-5906.png', pct: 100 },
    ]
  },
  {
    id: 3,
    videoSrc: '/test-video.mp4',
    author: '街头美食探店',
    desc: '藏在巷子里的苍蝇馆子，竟然有这么好吃的神仙炒饭！老板娘脾气爆但手艺绝了！#探店 #街头美食 #炒饭',
    stats: { like: '45.6w', comment: '2.3w', share: '1.2w' },
    reportCount: 1,
    reports: [
      {
        title: '[举报项] 色情低俗：视频第15秒处背景里有暴露画面，严重影响观感。',
        images: ['/figma-372-4031.png']
      }
    ],
    asrText: '这锅气，这色泽，一口下去简直绝了！老板娘再来一份！',
    ocrText: '神仙炒饭 苍蝇馆子',
    comments: [
      {
        avatar: '/figma-376-4348.png',
        name: '列文虎克',
        time: '1天前 四川',
        text: '大家注意看15秒左上角的电视屏幕，播的是什么不堪入目的东西！',
        likes: '3.4k',
        dislikes: 20,
        images: ['/figma-372-3989.png']
      }
    ],
    aiTags: ['色情低俗 99%'],
    aiDiag: [
      { label: '画面描述', text: '街头餐饮环境，背景模糊区域检测到异常皮肤裸露。' },
      { label: '文本描述', text: '美食描述，无违规。' },
      { label: '命中规则', text: '画面命中低俗色情高优模型。' },
    ],
    thumbFrames: [
      { src: '/figma-372-3989.png', pct: 0 },
      { src: '/figma-394-5908.png', pct: 25 },
      { src: '/figma-372-4000.png', pct: 50 },
      { src: '/figma-372-4031.png', pct: 75 },
      { src: '/figma-394-5882.png', pct: 100 },
    ]
  },
  {
    id: 4,
    videoSrc: '/test-video.mp4',
    author: '科普研究所',
    desc: '震惊！吃大蒜竟然能治疗癌症？这种偏方真的靠谱吗，专家来为你揭秘真相！#健康科普 #大蒜抗癌 #伪科学',
    stats: { like: '2.1w', comment: '5.6k', share: '4.5k' },
    reportCount: 6,
    reports: [
      {
        title: '[举报项] 不实信息：散布伪科学，大蒜根本不能治癌，这种虚假科普害人不浅，容易耽误患者正规治疗！',
        images: ['/figma-394-5900.png', '/figma-394-5929.png']
      }
    ],
    asrText: '很多人说吃大蒜能包治百病，甚至能抗癌，今天我们就来聊聊这个偏方到底灵不灵。',
    ocrText: '大蒜抗癌？ 专家揭秘',
    comments: [
      {
        avatar: '/figma-376-4318.png',
        name: '较真大爷',
        time: '4小时前 江苏',
        text: '纯属胡说八道！我查了相关医学文献，根本没有临床证据支持！',
        likes: '1.2k',
        dislikes: 5,
        images: []
      },
      {
        avatar: '/figma-376-4364.png',
        name: '养生小白',
        time: '5小时前 福建',
        text: '我差点就信了，还让我奶奶每天生吃大蒜呢，原来是假的。',
        likes: '450',
        dislikes: 1,
        images: []
      }
    ],
    aiTags: ['不实信息 94%', '医疗误导 89%'],
    aiDiag: [
      { label: '画面描述', text: '科普口播形式，有相关字幕提示。' },
      { label: '文本描述', text: '涉及“抗癌”、“偏方”等敏感医疗健康词汇。' },
      { label: '命中规则', text: '命中伪科普/医疗不实信息识别库。' },
    ],
    thumbFrames: [
      { src: '/figma-394-5900.png', pct: 0 },
      { src: '/figma-394-5929.png', pct: 25 },
      { src: '/figma-394-5873.png', pct: 50 },
      { src: '/figma-394-5925.png', pct: 75 },
      { src: '/figma-394-5906.png', pct: 100 },
    ]
  }
];