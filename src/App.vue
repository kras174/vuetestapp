<template>
  <div id="app" class="d-flex flex-column">
    <Navbar />
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

export default {
  components: { Navbar, Footer },
};
</script>

<style lang="scss">
@import "~bootswatch/dist/Journal/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/Journal/bootswatch";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  nav {
    flex: 0 0 auto;
  }
  main {
    flex: 1 0 auto;
  }
  footer {
    flex: 0 0 auto;
  }
}
</style>
