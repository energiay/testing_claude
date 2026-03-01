const path = require('node:path');
const fs = require('node:fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const projectConfig = require('./config');

const serverSideInitialCode = fs.readFileSync('./serverSideInitialCode.js', 'utf8');
const entryPoint = `
    // entry point
    try {
        Response.Write( tools.object_to_text({
            "success": true,
            "data": getParam()
        }, 'json') )
    }
    catch(error) {
        Response.Write( tools.object_to_text({
            "success": false,
            "error": String(error)
        }, 'json') )
    }
`;
let codes = ""
if (serverSideInitialCode && serverSideInitialCode.length > 0) {
    codes = serverSideInitialCode + ' ' + entryPoint;
}



module.exports = {
    entry: './src/index.js',
    mode: 'production',
    //mode: 'development',
    target: 'web',
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].[chunkhash:8].bundle.js',
        chunkFilename: '[name].[chunkhash:8].chunk.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
        publicPath: projectConfig.publicPath
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                             modules: {
                                auto: true,
                                 localIdentName: '[name]_[local]_[path]' +
                                                        '--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: './',
                    name: '[name]-[hash].[ext]',
                    publicPath: projectConfig.publicPath
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/[name][ext]",
                },
            }
        ],
    },
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
            chunks: 'all',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
        alias: {
            '@App': path.resolve(__dirname, './src/App'),
            '@Components': path.resolve(__dirname, './src/App/Components'),
            '@hooks': path.resolve(__dirname, './src/App/hooks'),
            /*'@contexts': path.resolve(__dirname, './src/App/contexts'),*/
            '@services': path.resolve(__dirname, './src/App/services'),
            '@img': path.resolve(__dirname, 'src/assets/img'),
            '@fonts': path.resolve(__dirname, './src/assets/fonts'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            serverSideTemplateIdCode: '<%=curOverrideWebTemplateID%>',
            serverScript: `<%${codes}%>`,
            inject: false,
        }),
    ],
    externals: {
        Chart: 'Chart',
        $: '$',
        jQuery: 'jQuery',
    },
};
