const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	output: {
		// 绝对路径
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
							limit: 2048
						}
					}
				]
			},
			{
				test: /\.(eot|ttf|woff|woff2|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname, './src'),
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
}