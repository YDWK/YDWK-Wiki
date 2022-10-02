"use strict";
exports.__esModule = true;
var vuepress_1 = require("vuepress");
var bot_api_1 = require("../../plugins/bot-api");
var plugin_search_1 = require("@vuepress/plugin-search");
exports["default"] = (0, vuepress_1.defineUserConfig)({
    lang: 'en-US',
    title: 'YDWK',
    description: 'The wiki for my kotlin discord wrapper library',
    theme: (0, vuepress_1.defaultTheme)({
        colorMode: 'dark',
        colorModeSwitch: true,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Wiki', link: '/wiki/' },
            { text: 'KotlinDocs', link: 'https://ydwk.github.io/YDWK/' },
            { text: 'GitHub', link: 'https://github.com/YDWK/YDWK' },
        ],
        sidebarDepth: 1,
        sidebar: {
            '/wiki/': [
                {
                    text: 'Getting Started',
                    collapsible: true,
                    children: [
                        '/wiki/getting-started/README.md',
                        '/wiki/getting-started/installation.md',
                    ]
                }
            ]
        },
        // Repo details for "Edit this page on GitHub" footer
        docsRepo: 'YDWK/YDWK-Wiki',
        docsDir: 'docs',
        docsBranch: 'main',
        editLink: true,
        editLinkText: 'Edit this page on GitHub'
    }),
    head: [
        ['link', { rel: 'icon', href: '/ydwk.png' }]
    ],
    plugins: [
        (0, bot_api_1.botSearch)(),
        (0, plugin_search_1.searchPlugin)({
        // options
        })
    ]
});
//# sourceMappingURL=config.js.map