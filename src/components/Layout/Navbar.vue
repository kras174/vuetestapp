<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Search test app</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <div id="nav" class="navbar-nav ml-auto">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scouped>
.navbar {
  margin-bottom: 30px;
  .navbar-nav {
    text-align: right;
  }
}
#nav {
  padding: 5px;
  a {
    color: white;
    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
