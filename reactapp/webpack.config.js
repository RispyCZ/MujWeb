module.exports = {
    output: {
        publicPath: 'reactapp/dist/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [
            '/node_modules/'
          ],
          use: {
            loader: "babel-loader"
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        },
      ]
    },
    "watch" : true
  };