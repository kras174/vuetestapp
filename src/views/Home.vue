<template>
  <div class="home">
    <SearchBar />
    <ResultTable />
    <Pagination />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import ResultTable from "../components/ResultTable";
import Pagination from "../components/Layout/Pagination";

export default {
  name: "Home",
  components: { SearchBar, ResultTable, Pagination },
};
</script>
