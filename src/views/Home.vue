<template>
  <div class="home">
    <SearchBar />
    <ResultTable />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import ResultTable from "../components/ResultTable";

export default {
  name: "Home",
  components: { SearchBar, ResultTable },
};
</script>
