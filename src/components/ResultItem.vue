<template>
  <tbody>
    <Modal v-if="showModal" @close="showModal = false" :item="item.package" />
    <tr id="show-modal" @click="showModal = true">
      <th scope="row">{{ item.package.name }}</th>
      <td>{{ item.package.version }}</td>
    </tr>
  </tbody>
</template>

<script>
import Modal from "./Layout/Modal";

export default {
  name: "ResultItem",
  components: { Modal },
  props: ["item"],
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style></style>
