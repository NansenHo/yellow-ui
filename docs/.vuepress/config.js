module.exports = {
    title: 'Yellow UI',
    description: '一个UI框架',
    themeConfig: {
        nav: [
            {text: "主页", link: "/"},
            {text: "文档", link: "/guide"},
            {text: "交流", link: "https://google.com"}
        ],
        sidebar: [
            {
                title: "入门",
                children: [
                    '/install/',
                    '/getStart/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button'
                ],
            },
        ],
    }
}