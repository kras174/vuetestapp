<template>
  <div class="result-table my-5">
    <div v-if="loading" class="loader">Loading...</div>
    <p v-else-if="!allPages.length">
      Please enter something in search field...
    </p>
    <section v-else>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Package name</th>
            <th scope="col">Latest version</th>
          </tr>
        </thead>
        <tbody>
          <ResultItem
            v-for="item in renderPage"
            :key="item.index"
            :item="item || []"
          />
        </tbody>
      </table>
      <Paginate
        :v-model="currentPage"
        :page-count="pageCount"
        :click-handler="pageClickHandler"
        :prev-text="'«'"
        :next-text="'»'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link'"
        :prev-class="'page-item'"
        :prev-link-class="'page-link'"
        :next-class="'page-item'"
        :next-link-class="'page-link'"
      />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Paginate from "vuejs-paginate";
import ResultItem from "./ResultItem";
import _ from "lodash";

export default {
  name: "ResultTable",
  components: { ResultItem, Paginate },
  data() {
    return {
      currentPage: +this.$route.query.currentPage || 1,
      pageSize: 10,
      pageCount: 0,
      allPages: [],
      renderPage: [],
      loading: false,
    };
  },
  computed: mapGetters(["allItems"]),
  watch: {
    allItems: function() {
      this.loading = true;
      this.allPages = _.chunk(this.allItems, this.pageSize);
      this.pageCount = this.allPages.length;
      this.renderPage = this.allPages[this.currentPage - 1] || this.allPages[0];
      this.loading = false;
    },
  },
  methods: {
    pageClickHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`);
      this.renderPage = this.allPages[page - 1] || this.allPages[0];
    },
  },
};
</script>

<style lang="scss" scouped></style>
