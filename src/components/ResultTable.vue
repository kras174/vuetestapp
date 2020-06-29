<template>
  <div class="result-table my-5">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Package name</th>
          <th scope="col">Latest version</th>
        </tr>
      </thead>

      <ResultItem />
    </table>
  </div>
</template>

<script>
import ResultItem from "./ResultItem";

export default {
  name: "ResultTable",
  components: { ResultItem },
};
</script>

<style lang="scss" scouped></style>
