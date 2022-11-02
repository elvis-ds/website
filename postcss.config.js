const tailwindcss = require('tailwindcss');

module.exports = {
  plugsin: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
  // plugins: {
  //   tailwindcss: {
  //     config: './tailwind.config.js'
  //   },
  //   autoprefixer: {},
  // },
}
