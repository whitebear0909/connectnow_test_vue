module.exports = {
  devServer: {
    port: process.env.PORT,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/app.scss";`,
      },
    },
  },
};
