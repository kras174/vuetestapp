<template>
  <div class="searchBar my-5">
    <form>
      <div class="form-group row">
        <label for="searchBar" class="col-sm-1 col-form-label">Search</label>
        <div class="col-sm-11">
          <input
            type="text"
            readonly=""
            class="form-control-plaintext"
            id="searchBar"
            value=""
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style lang="scss" scoped>
#searchBar {
  border: 1px solid rgba(128, 128, 128, 0.4);
}
</style>
