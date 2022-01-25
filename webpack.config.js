var path = require("path"); // Модуль для работы с путями
var webpack = require("webpack"); // Модуль самого вебпак
var UglifyJSPlugin = require("uglifyjs-webpack-plugin"); // модуль для минимизации кода

let NODE_ENV = process.env.NODE_ENV || "development";// production development

module.exports = {
	mode: NODE_ENV,
	entry: { // Входная точка - https://webpack.js.org/concepts/entry-points/
        "AplJS": "./src/AplJS.js"
    },
	output:{ // Результат компиляции - https://webpack.js.org/concepts/output/
       path: path.resolve(__dirname, "./dist"),	// путь к каталогу выходных файлов - папка public
	   filename: "[name].js",	// название создаваемого файла
	},
	resolve: { // Доступные расширения - https://webpack.js.org/configuration/resolve/
		extensions: [".js"]
	},
	module:{ // Загрузчики, которые обрабатывают код - https://webpack.js.org/concepts/loaders/ use:["eslint-loader"],
        rules: [
		  { test: /\.js$/, 
			use:[{
				loader: "babel-loader",  
				query: { presets: ["@babel/preset-env"] }
			}],
			exclude: /node_modules/ }
		]
	}
	,devtool:NODE_ENV == "development" ? "inline-cheap-module-source-map" : false // Отладка
	,plugins: [
		...(NODE_ENV=="development" ? [] : [new UglifyJSPlugin()]),
	]
	,watch:NODE_ENV == "development" // Следить за изминениями файлов
	,watchOptions:{
		aggregateTimeout:100 // Время ожидания для пересборки, когда изменились файлы.
	}
}
