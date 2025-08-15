import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  timezone: "Asia/Shanghai",
  url: "https://mixdmatches.github.io/",
  lang: "zh-CN",
  title: "下饭小窝",
  author: {
    name: "陈下饭",
    email: "1919600547@qq.com",
    avatar: "/images/avatar.png",
    intro: "",
    status: {
      emoji: "🍚",
      message: "好好吃饭.",
    },
  },
  favicon: "https://www.yunyoujun.cn/favicon.svg",
  subtitle: "Endless Progress.",
  description: "无限进步",
  social: [
    {
      name: "GitHub",
      link: "https://github.com/mixdmatches",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "网易云音乐",
      link: "https://music.163.com/#/user/home?id=1407731811",
      icon: "i-ri-netease-cloud-music-line",
      color: "#C20C0C",
    },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/455241156?spm_id_from=333.1387.0.0",
      icon: "i-ri-bilibili-line",
      color: "#FF8EB3",
    },
    {
      name: "稀土掘金",
      link: "https://juejin.cn/user/394103642400905",
      icon: "i-tabler-brand-juejin",
      color: "#00A3EE",
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: true,
    title: "打赏金额将全部捐赠给下饭充进原神",
    methods: [
      {
        name: "支付宝",
        url: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ7lWibTSB1S-OjP3MOMahrUu83QjBsAAJ0GAACFzTgVE-mPO0m-GATNgQ.jpg",
        color: "#00A3EE",
        icon: "i-ri-alipay-line",
      },
      {
        name: "微信支付",
        url: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ7lGibTR8j2G3sZp0WeZ2D1CeWZnRmAAJzGAACFzTgVLrWSxkra0aaNgQ.jpg",
        color: "#2DC100",
        icon: "i-ri-wechat-pay-line",
      },
    ],
  },

  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  mediumZoom: {
    enable: true,
  },

  encrypt: {
    // 开启加密，默认关闭
    enable: true,
    // algorithm
    // iv
    // salt
  },
});
