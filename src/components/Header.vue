<template>
  <div id="header" class="">
    <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-5 mb-lg-0">
          <li class="nav-item">
            <router-link to="/"
              >VIDEO GAMES
              <span
                :class="
                  this.$route.path == '/'
                    ? 'shadow video-span'
                    : 'video-span inactive'
                "
                >VIDEO</span
              ></router-link
            >
          </li>
          <li class="nav-item contact-li">
            <router-link to="/contactus"
              >CONTACT<span
                :class="
                  this.$route.path == '/contactus'
                    ? 'shadow contact-span'
                    : 'contact-span inactive'
                "
                >CONTACT</span
              ></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
