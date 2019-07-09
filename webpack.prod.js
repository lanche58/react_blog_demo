const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin =  require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common');
const prodConfig = {
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, {
					loader: 'css-loader',
					options: {
						importLoaders: 2,
						// modules: true
					}
				}, 'sass-loader', 'postcss-loader']
			}
        ]
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css'
		})
    ],
    optimization: {
		minimizer: [new OptimizeCssAssetsPlugin({})]
	}
}
module.exports = merge(commonConfig, prodConfig);