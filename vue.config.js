const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/vue_exchange/' : '/',
  transpileDependencies: true,
  outputDir: "docs",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        `,
        sassOptions: {
          quietDeps: true,
          includePaths: [path.resolve(__dirname, "src")],
        },
      },
    },
  },
})
