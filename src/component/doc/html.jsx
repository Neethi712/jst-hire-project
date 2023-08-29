const pages = [
    {
        id: 1,
        title: 'Getting Started',
        path: '/getting-started',
        content: "\n## Getting Started\n\nBefore proceeding, you'll need to have the last stable [NodeJS](https://nodejs.org/en/)\nand [npm](https://www.npmjs.com)\ninstalled on your machine.\n\nYou can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or\n[nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to\nswitch Node versions between different projects.\n\n## Install dependencies\n\nOpen the project folder and install its dependencies. You can use any package manager you\nwant: [Yarn](https://yarnpkg.com)\nor [npm](https://www.npmjs.com). There might be other package managers that were not listed here.\n\n```shell\ncd project-folder\nnpm install\n```\n\n## Start development server\n\nOnce the installation is done, you can now run your app by running `npm run dev` or `yarn dev`.\n\n```shell\nnpm run dev\n```\n\nYou will see something similar to:\n\n```shell\nready - started server on 0.0.0.0:3000, url: http://localhost:3000\ninfo  - automatically enabled Fast Refresh for 1 custom loader\nevent - compiled successfully in 4.7s (1535 modules)\n```\n\nThis runs the app in development mode. Open [localhost:3000](http://localhost:3000) to view it in\nthe browser.\n\nWhile in development mode, the page will automatically reload if you make changes to the code.\nShould you have any, you will see the build errors and lint warnings in the console.\n\nThe app uses `ESLint`, so you will get detailed warnings and errors as well as best practice hints.\n\n## Build project files\n\n```shell\nnpm run build\n```\n\nor `yarn build`\n\nBuilds the app for production to the build folder. It correctly bundles React in production mode and\noptimizes the build for the best performance.\n\nThe build is minified, and the filenames include hashes.\n\nIf you have made your necessary changes, by this time, your app should ready to be deployed.\n\n> Please keep in mind that this project **_does not_** handle any backend logic nor databases; it is just a frontend you can use\n> it with any backend you want. This means that you will have to build such a backend or use any existing one you might\n> already have.\n",
    },
    {
        id: 2,
        title: 'Usage',
        path: '/usage',
        content: 'Usage content...',
        codeBlock: ``,
        subpages: [
            {
                id: 21,
                title: 'Basic Usage',
                path: '/basic-usage',
                content: 'Basic usage content...'
            },
            {
                id: 22,
                title: 'Advanced Usage',
                path: '/advanced-usage',
                content: 'Advanced usage content...'
            }
        ]
    },
    {
        id: 2,
        title: 'Usage',
        path: '/usage',
        content: 'Usage content...',
        codeBlock: ``,
        subpages: [
            {
                id: 21,
                title: 'Basic Usage',
                path: '/basic-usage',
                content: 'Basic usage content...'
            },
            {
                id: 22,
                title: 'Advanced Usage',
                path: '/advanced-usage',
                content: 'Advanced usage content...'
            }
        ]
    },
    {
        id: 2,
        title: 'Usage',
        path: '/usage',
        content: 'Usage content...',
        codeBlock: ``,
        subpages: [
            {
                id: 21,
                title: 'Basic Usage',
                path: '/basic-usage',
                content: 'Basic usage content...'
            },
            {
                id: 22,
                title: 'Advanced Usage',
                path: '/advanced-usage',
                content: 'Advanced usage content...'
            }
        ]
    },
    {
        id: 2,
        title: 'Usage',
        path: '/usage',
        content: 'Usage content...',
        codeBlock: ``,
        subpages: [
            {
                id: 21,
                title: 'Basic Usage',
                path: '/basic-usage',
                content: 'Basic usage content...'
            },
            {
                id: 22,
                title: 'Advanced Usage',
                path: '/advanced-usage',
                content: 'Advanced usage content...'
            }
        ]
    },
    {
        id: 2,
        title: 'Usage',
        path: '/usage',
        content: 'Usage content...',
        codeBlock: ``,
        subpages: [
            {
                id: 21,
                title: 'Basic Usage',
                path: '/basic-usage',
                content: 'Basic usage content...'
            },
            {
                id: 22,
                title: 'Advanced Usage',
                path: '/advanced-usage',
                content: 'Advanced usage content...'
            }
        ]
    }
    // Add more top-level pages as needed
];

export default pages;