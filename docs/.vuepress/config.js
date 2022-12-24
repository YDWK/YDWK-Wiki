"use strict";
exports.__esModule = true;
var vuepress_1 = require("vuepress");
var plugin_search_1 = require("@vuepress/plugin-search");
var plugin_palette_1 = require("@vuepress/plugin-palette");
var plugin_back_to_top_1 = require("@vuepress/plugin-back-to-top");
exports["default"] = (0, vuepress_1.defineUserConfig)({
    base: undefined,
    lang: 'en-UK',
    title: 'YDWK',
    description: 'The wiki for my kotlin discord wrapper library',
    theme: (0, vuepress_1.defaultTheme)({
        colorMode: 'dark',
        colorModeSwitch: true,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/docs/' },
            { text: 'JavaDocs', link: 'https://ydwk.github.io/YDWK/' },
            { text: 'GitHub', link: 'https://github.com/YDWK/YDWK' },
            { text: 'Discord', link: 'https://discord.com/invite/PCz8ET778U' },
        ],
        sidebarDepth: 1,
        sidebar: {
            '/docs/': [
                {
                    text: 'Getting Started',
                    collapsible: true,
                    children: [
                        '/docs/README.md',
                    ]
                },
                {
                    text: 'Tutorial',
                    collapsible: true,
                    children: [
                        '/docs/tutorial/README.md',
                        '/docs/tutorial/basicbot.md',
                    ]
                },
                {
                    text: 'Gateway',
                    collapsible: true,
                    children: [
                        '/docs/gateway/README.md',
                        '/docs/gateway/intents.md',
                        '/docs/gateway/events.md'
                    ]
                },
                {
                    text: 'JConfig',
                    collapsible: true,
                    children: [
                        '/docs/jconfig/README.md',
                        '/docs/jconfig/usage.md'
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
        (0, plugin_search_1.searchPlugin)({
            locales: {
                '/': {
                    placeholder: 'Search'
                }
            }
        }),
        (0, plugin_palette_1.palettePlugin)({
            preset: 'sass'
        }),
        (0, plugin_back_to_top_1.backToTopPlugin)() // Back to top button
    ]
});
//# sourceMappingURL=config.js.map