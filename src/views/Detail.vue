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
  props: {
    id: String
  },
  mounted: function () {
    this.getData();
    
  },
  data() {
    return {
      isLoading: true,
      person: {},
    };
  },
  methods: {
    getData() {
       this.isLoading = true;
       fetch(`https://swapi.dev/api/people/${this.$route.params.id}/`)
        .then((response) => response.json())
        .then(async (response) => {
              let promises = [];
              let starshipPromises = [];
              let vehiclePromises = [];
              this.person = response;
                promises.push(fetch(response.homeworld).then(resp => resp.json()));
                response.species.forEach(el => promises.push(fetch(el).then(resp => resp.json())));
                response.starships.forEach(el => starshipPromises.push(fetch(el).then(resp => resp.json())));
                response.vehicles.forEach(el => vehiclePromises.push(fetch(el).then(resp => resp.json())));
                
              const result = await Promise.all([...promises]);
              const ships = await Promise.all([...starshipPromises]);
              const vehicles = await Promise.all([...vehiclePromises]);
             this.person.homeworld = result[0].name;
             this.person.species = result[1]?.map(el => el.name) ?? "N/A";
             this.person.starships = ships.map(el => el.name);
             this.person.vehicles = vehicles.map(el => el.name);
           this.$emit('paged', this.person.name+' Details');
          this.isLoading = false;
        })
        .catch((err) => console.log("Error " + err));
    },
  },
};
</script>

<style scoped>
</style>