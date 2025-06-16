const path = require('path');

module.exports = {
  entry: './src/js/1-gallery.js', // Твій головний JS файл
  output: {
    filename: 'bundle.js', // Зібраний файл
    path: path.resolve(__dirname, 'dist'), // Папка для збірки
    clean: true, // Очищати dist при новій збірці
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Для css файлів
      },
    ],
  },
  mode: 'development', // Для початку — development, пізніше можна production
  devtool: 'source-map', // Для зручності дебагу
};
