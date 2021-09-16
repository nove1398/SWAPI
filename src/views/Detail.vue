<template>
  <div class="container">
    <div class="row" v-if="!isLoading">
      <DetailCard class="mt-3" :person="person"/>
    </div>

    <div class="display-4" v-if="isLoading">Loading...</div>

  </div>
</template>
<script>
import DetailCard from "../components/DetailCard.vue";

export default {
  name: "Detail",
  components: { DetailCard },
  emits: ['paged'],
  props: { },
  mounted: function () {
    this.getData()
   
  },
  data() {
    return {
      isLoading: true,
      person: { },
    };
  },
  methods: {
    async getData() {
       this.isLoading = true;
       await fetch(`https://swapi.dev/api/people/${this.$route.params.id}/`)
        .then((response) => response.json())
        .then(async (response) => {
              let homeworldPromise;
              let speciesPromises = [];
              let starshipPromises = [];
              let vehiclePromises = [];
              this.person = response;
                homeworldPromise = fetch(response.homeworld).then(resp => resp.json());
                response.species.forEach(el => speciesPromises.push(fetch(el).then(resp => resp.json())));
                response.starships.forEach(el => starshipPromises.push(fetch(el).then(resp => resp.json())));
                response.vehicles.forEach(el => vehiclePromises.push(fetch(el).then(resp => resp.json())));
                
              const result = await Promise.all([homeworldPromise]);
              const species = await Promise.all([...speciesPromises]);
              const ships = await Promise.all([...starshipPromises]);
              const vehicles = await Promise.all([...vehiclePromises]);
             this.person.homeworld = result[0].name;
             this.person.species = species.length > 0 ? species.map(el => el.name).join(",") : "N/A";
             this.person.starships = ships.map(el => el.name);
             this.person.vehicles = vehicles.map(el => el.name);
             this.$emit('paged', this.person.name+' Details');
        })
        .catch((err) => console.log("Error " + err));
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
</style>