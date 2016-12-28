const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: ['./app/app.jsx'],
	plugins: [
		new webpack.EnvironmentPlugin(['NODE_ENV']),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules', './app/components'
		],
		alias: {
			app: 'app',
			applicationStyles: 'app/styles/app.scss',
			actions: 'app/actions/actions.jsx',
			reducers: 'app/reducers/reducers.jsx',
			configureStore: 'app/store/configureStore.jsx',
			constants: 'app/constants/index.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				"env": {
					"development": {
						"plugins": [
							['transform-runtime'],
							["react-transform", {
								"transforms": [{
									"transform": "react-transform-hmr",
									"imports": ["react"],
									"locals": ["module"]
								}]
							}]
						]
					}
				}
			}, {
				include: [path.resolve(__dirname, "app/fonts")],
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&minetype=application/font-woff"
			}, {
				include: [path.resolve(__dirname, "app/fonts")],
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}, {
				include: [path.resolve(__dirname, "app/images")],
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	},
	postcss: [autoprefixer({ browsers: ['last 5 versions'] })],
	devServer: {
		historyApiFallBack: true,
		inline: true,
		contentBase: './public/'
	},
	devtool: process.env.NODE_ENV === 'production'
		? undefined
		: 'eval'
};
