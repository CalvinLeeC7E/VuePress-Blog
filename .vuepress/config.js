module.exports = {
  dest: 'doc-publish',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'CalvinLee',
      description: '开发手册'
    }
  },
  head: [],
  serviceWorker: true,
  themeConfig: {
    repo: 'llb421270473/Blog',
    editLinks: true,
    docsDir: 'public',
    serviceWorker: {
      updatePopup: true
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '文章',
            link: '/blog/',
          }
        ],
        sidebar: {
          '/blog/': genSidebarConfig('文章')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'DOM备忘录'
      ]
    }
  ]
}
