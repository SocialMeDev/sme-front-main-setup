const path = require('path')

module.exports = {
	stories: ['../src/components/**/stories.jsx'],
	staticDirs: ['../public'],
	addons: ['@storybook/addon-essentials', 'storybook-addon-next-router', '@storybook/addon-a11y', '@storybook/addon-storysource'],
	webpackFinal: async (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					constants: path.resolve(__dirname, '../constants'),
					public: path.resolve(__dirname, '../public'),
					screens: path.resolve(__dirname, '../screens'),
					pages: path.resolve(__dirname, '../pages'),
					components: path.resolve(__dirname, '../src/components'),
					assets: path.resolve(__dirname, '../src/assets'),
					contexts: path.resolve(__dirname, '../src/contexts'),
					services: path.resolve(__dirname, '../src/services'),
					styles: path.resolve(__dirname, '../src/styles'),
					utils: path.resolve(__dirname, '../src/utils'),
					hooks: path.resolve(__dirname, '../src/hooks'),
					variables: path.resolve(__dirname, '../src/variables'),
					'@emotion/core': '@emotion/react',
					'emotion-theming': '@emotion/react'
				}
			}
		}
	}
}
