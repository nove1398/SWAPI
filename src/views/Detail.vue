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
              this.person = response;
                promises.push(fetch(response.homeworld).then(resp => resp.json()));
              if(response.species.length > 0){
                promises.push(fetch(response.species[0]).then(resp => resp.json()));
              }
              if(response.starships.length > 0){
                promises.push(...response.starships.map(el => fetch(el).then(resp => resp.json())));
                }
              if(response.vehicles.length > 0){
                promises.push(...response.vehicles.map(el => fetch(el).then(resp => resp.json())));
                }
              const result = await Promise.all([...promises]);
              console.log(result[5]);
              this.person.homeworld = result[0].name;
              this.person.species = result[1].name ? result[0].name : "N/A";
              this.person.starships = result[2] !== undefined? [...result[2]] : 0;
              this.person.vehicles = result[3] ? result[3].map(el => el.name) : 0;
 
          this.isLoading = false;
        })
        .catch((err) => console.log("Error " + err));
    },
  },
};
</script>

<style scoped>
</style>