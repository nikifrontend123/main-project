<script >
export default {
  // name: 'App',
  components: {
    RouterLink,
    RouterView,
    TopNavbar,
    SideNavbar,
  }
}



import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import SideNavbar from "./components/SideNavbar.vue";
// import Footer from "./components/Footer.vue";
import TopNavbar from "./components/TopNavbar.vue";
// import home1 from "./components/home1.vue";
</script>

<template>
  <div>
    <div class="main-cont">
      <div class="topnav">
        <TopNavbar></TopNavbar>
      </div>

      <div class="box">
        <div class="left">
          <SideNavbar></SideNavbar>
        </div>
        <div class="right">
          <div class="r-container">
            <RouterView></RouterView>
            <!-- <div class="footerr">
              <Footer></Footer>
            </div> -->
          </div>
        </div>


      </div>
    </div>

    <!-- <div class="d-flex justify-content-center w-80">
      <RouterView></RouterView>
    </div> -->
  </div>
</template>

<style scoped>
.main-cont {
  width: 100%;
}

.box {
  width: 100%;
  display: flex;
}

.right {
  width: 82%;
}

.r-container {
  /* width: 100%; */
  position: absolute;
}

.footerr {
  position: relative;
  /* bottom:-361px; */
}

@media (max-width: 770px) {
  .left {
    display: none;
  }
}

@media (min-width: 770px) {
  .topnav {
    display: none;
  }
}
</style>
