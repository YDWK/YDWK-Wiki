import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from "@vuepress/plugin-search";
import {palettePlugin} from "@vuepress/plugin-palette";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
    base: undefined,
    lang: 'en-UK',
    title: 'YDWK',
    description: 'The wiki for my kotlin discord wrapper library',
    theme: defaultTheme({
        colorMode: 'dark',
        colorModeSwitch: true,
        navbar: [
            {text: 'Home', link: '/'},
            {text: 'Documentation', link: '/docs/'},
            {text: 'JavaDocs', link: 'https://ydwk.github.io/YDWK/'},
            {text: 'GitHub', link: 'https://github.com/YDWK/YDWK'},
            {text: 'Discord', link: 'https://discord.com/invite/PCz8ET778U'},
        ],
        sidebarDepth: 1,
        sidebar: {
            '/docs/': [
                {
                    text: 'Getting Started',
                    collapsible: true,
                    children: [
                        '/docs/README.md',
                    ],

                },
                {
                    text: 'Tutorial',
                    collapsible: true,
                    children: [
                        '/docs/tutorial/README.md',
                        '/docs/tutorial/basicbot.md',
                    ],
                },
                {
                    text: 'Gateway',
                    collapsible: true,
                    children: [
                        '/docs/gateway/README.md',
                        '/docs/gateway/intents.md',
                        '/docs/gateway/events.md'
                    ],
                },
                {
                    text: 'JConfig',
                    collapsible: true,
                    children: [
                        '/docs/jconfig/README.md',
                        '/docs/jconfig/usage.md'
                    ],
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
        ['link', {rel: 'icon', href: '/ydwk.png'}]
    ],
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        }),
        palettePlugin({
            preset: 'sass'
        }),

        backToTopPlugin() // Back to top button
    ]
})