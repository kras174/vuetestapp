<template>
  <footer class="d-flex justify-content-center flex-wrap">
    <h2 class="my-3">Антон Красильников</h2>
    <img class="mx-5 my-3" src="../../assets/ava.jpg" alt="avatar" />
    <h2 class="my-3">
      <a href="https://github.com/kras174/vuetestapp" target="_blank"
        >Репозиторий GitHub</a
      >
    </h2>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scouped>
footer {
  background-color: #353535;
  padding: 30px;
  color: white;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid white;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
