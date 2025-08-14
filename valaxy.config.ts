import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",

  themeConfig: {
    say: {
      enable: true,
      api: "https://el-bot-api.vercel.app/api/words/young",
      hitokoto: {
        enable: true,
        api: "https://v1.hitokoto.cn/?c=b&c=d&c=i",
      },
    },
    banner: {
      enable: true,
      title: "下饭小窝",
    },

    pages: [
      {
        name: "我的项目",
        url: "/projects/",
        icon: "i-ri-gallery-view",
        color: "#6e5494",
      },
      {
        name: "喜欢的纸片人",
        url: "/anime-character/",
        icon: "i-ri-heart-line",
        color: "dodgerblue",
      },
      {
        name:'喜欢的音乐',
        url:'/musics/',
        icon:'i-ri-music-2-line',
        color:'#C20C0C'
      }
    ],

    footer: {
      since: 2016,
    },
  },

  unocss: { safelist },

  vue: {
    isCustomElement: [(tag: string) => ["meting-js"].includes(tag)],
  },

});
