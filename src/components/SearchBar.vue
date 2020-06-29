<template>
  <div class="searchBar my-5">
    <form>
      <div class="form-group row">
        <label for="searchBar" class="col-sm-3 col-md-1 col-form-label"
          >Search</label
        >
        <div class="col-sm-9 col-md-11">
          <input
            type="text"
            v-model="text"
            class="form-control-plaintext"
            id="searchBar"
            placeholder="Enter package name..."
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  methods: {
    ...mapActions(["fetchItems"]),
  },
  data() {
    return {
      text: "",
    };
  },
  updated() {
    this.fetchItems(this.text);
  },
};
</script>

<style lang="scss" scoped>
#searchBar {
  padding: 5px;
  border: 1px solid rgba(128, 128, 128, 0.4);
}
</style>
