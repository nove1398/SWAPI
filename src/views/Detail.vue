<template>
  <div class="container">
    <div class="row">
      <DetailCard class="mt-3"/>
    </div>
  </div>
</template>
<script>
import DetailCard from "../components/DetailCard.vue";

export default {
  name: "Detail",
  components: { DetailCard },
  props: {
    id: String
  },
  mounted: function () {
    this.getData();
  },
  data() {
    return {
      isLoading: false,
      detail: {},
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      fetch(`https://swapi.dev/api/people/${this.id}`)
        .then((response) => response.json())
        .then((response) => (this.detail = response.data))
        .catch((err) => alert(err));
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
</style>