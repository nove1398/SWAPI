<template>
 <div class="container mt-3">
    <div class="row" v-if="!isLoading">
      <PersonCard :person="person" v-for="person in results" :key="person.id" />
    </div>
    <div class="row" v-if="isLoading">
      <div class="col">
        <div class="text-center display-4">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from "../components/PersonCard.vue";

export default {
  name: "Detail",
  components: { PersonCard },
  props: {
    id: String
  },
  mounted: function () {
    this.getData();
  },
  data() {
    return {
      isLoading: false,
      results: [],
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      fetch(`https://swapi.dev/api/people?search=${this.id}`)
        .then((response) => response.json())
        .then((response) => (this.results = response.data))
        .catch((err) => alert(err));
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
</style>