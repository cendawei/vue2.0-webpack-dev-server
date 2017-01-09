/**
 * Created by admin on 2017/1/4.
 */
module.exports = {
    entry: './app.js',
    output: {
        path: 'build',
        filename: 'index.js',
        publicPath: '/build/'
    },
    devServer: {
        hot:true,
        inline: true,
        port: 8888
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'plugins': __dirname + '/plugins',
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['', '.js', '.vue']
    },
    devtool: 'source-map'
};
