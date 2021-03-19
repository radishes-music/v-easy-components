const path = require('path')
const resolve = src => path.resolve(__dirname, '../../', src)

module.exports = {
  dest: './v-easy',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#409eff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/rec_static_/logo/logo@152.png' }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/rec_static_/logo/logo@144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'v-easy-components',
      description: 'v-easy-components - Vue-based component library'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'v-easy-components',
      description: 'v-easy-components - Vue-based component library'
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-144234185-1'
      }
    ],
    '@vuepress/search',
    '@vuepress/back-to-top',
    '@vuepress/pwa'
  ],
  themeConfig: {
    // logo: '/logo-origin.svg',
    repo: 'Linkontoask/v-easy-components',
    docsRepo: 'Linkontoask/v-easy-components',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    algolia: {
      apiKey: 'fdff5154bf57618a37894fd7776b89c1',
      indexName: 'v-easy-components'
    },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Guide', link: '/' },
          { text: 'Component', link: '/guide/' },
          { text: 'Business', link: '/business/' },
          { text: 'Icon', link: '/icon/' }
        ],
        sidebar: {
          '/guide/': getGuideSidebar('Guide', 'Components', 'Instruction'),
          '/icon/': getIconSidebar('Guide', 'Icon'),
          '/business/': getBusinessSidebar('Guide', 'Mobile')
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
          }
        },
        nav: [
          { text: '指南', link: '/zh/' },
          { text: '组件', link: '/zh/guide/' },
          { text: '业务组件', link: '/zh/business/' },
          { text: '图标', link: '/zh/icon/' }
        ],
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南', '组件', '指令'),
          '/zh/icon/': getIconSidebar('指南', '图标'),
          '/zh/business/': getBusinessSidebar('指南', '移动端')
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        static: path.join(__dirname, '../static'),
        '@': resolve('src'),
        '@packages': resolve('packages')
      }
    }
  }
}

function getBusinessSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['']
    },
    {
      title: groupB,
      collapsable: false,
      children: ['route-indicator']
    }
  ]
}

function getIconSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['']
    },
    {
      title: groupB,
      collapsable: false,
      children: ['icon-solid', 'icon-regular', 'icon-brands']
    }
  ]
}

function getGuideSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['', 'quick-start', 'internationalization']
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'icon',
        'button',
        'input',
        'ip-subnet-input',
        'steps',
        'message',
        'color-picker',
        'scroll-bar'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: ['tooltip', 'skeleton', 'picture-reader']
    }
  ]
}
