module.exports = {
    base: "/YellowUI/",
    title: 'Yellow UI',
    description: '一个UI框架',
    themeConfig: {
        nav: [
            {text: "主页", link: "/"},
            {text: "源码", link: "/guide"},
            {text: "交流", link: "../../components/author"}
        ],
        sidebar: [
            {
                title: "入门",
                collapsable: false,
                children: [
                    '/install/',
                    '/getStart/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/icon',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/button',
                    '/components/input',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ],
            },
            {
                title: "关于作者",
                collapsable: false,
                children: [
                    '/components/author'
                ]
            }
        ],
    },
    host: 'localhost',
}