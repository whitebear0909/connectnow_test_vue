module.exports = {
  devServer: {
    disableHostCheck: true,
    port: process.env.PORT,
    public: '0.0.0.0'
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/app.scss";`,
      },
    },
  },
};