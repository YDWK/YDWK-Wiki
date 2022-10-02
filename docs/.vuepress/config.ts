import {defaultTheme, defineUserConfig} from 'vuepress'
import {botSearch} from "../../plugins/bot-api";
import {searchPlugin} from '@vuepress/plugin-search'
import {palettePlugin} from '@vuepress/plugin-palette'

export default defineUserConfig({
    lang: 'en-US',
    title: 'YDWK',
    description: 'The wiki for my kotlin discord wrapper library',
    theme: defaultTheme({
        colorMode: 'dark',
        colorModeSwitch: true,
        navbar: [
            {text: 'Home', link: '/'},
            {text: 'Wiki', link: '/wiki/'},
            {text: 'KotlinDocs', link: 'https://ydwk.github.io/YDWK/'},
            {text: 'GitHub', link: 'https://github.com/YDWK/YDWK'},
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
        ['link', {rel: 'icon', href: '/ydwk.png'}]
    ],
    plugins: [
        botSearch(),
        searchPlugin({
            // options
        })
    ],
})