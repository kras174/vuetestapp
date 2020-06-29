<template>
  <tr>
    <th scope="row">{{ item.package.name }}</th>
    <td>{{ item.package.version }}</td>
  </tr>
</template>

<script>
export default {
  name: "ResultItem",
  props: ["item"],
};
</script>

<style></style>
