const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = {
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        overlay: true,
        contentBase: './dist',
        open: true,
        port: 9000,
        proxy: {
            '/api': 'http://localhost:8000'
        },
        hot: true,
        // hotOnly: true
        historyApiFallback: true
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            {
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						importLoaders: 3,
						// modules: true
					}
				}, 'sass-loader', {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: path.resolve(__dirname, 'src/css/style.scss')
                    }
                }, 'postcss-loader']
			}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = merge(commonConfig, devConfig);