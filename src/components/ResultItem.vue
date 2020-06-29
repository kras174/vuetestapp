<template>
  <tbody>
    <tr v-for="item in allItems" :key="item.name">
      <th scope="row">{{ item.package.name }}</th>
      <td>{{ item.package.version }}</td>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ResultItem",
  computed: mapGetters(["allItems"]),
};
</script>

<style></style>
