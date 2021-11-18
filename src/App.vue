<template>
  <div class="video-box container mb-5">
    <notifications classes="my-notification" width="300" />
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  min-height: 100%;
}

body {
  height: 100%;
  background: linear-gradient($bg-start-color, $bg-end-color);

  .my-notification {
    background: #d9284c;
    margin: 0 5px 5px;
    padding: 10px;
    font-size: 14px;
    color: white;
    font-family: Montserrat;
    margin-top: 20px;
    margin-right: 20px;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .video-box {
    max-width: 100% !important;
    padding: 0px 18px 0px 18px !important;
  }
}
</style>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
