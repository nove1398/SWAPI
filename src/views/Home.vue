<template>
  <div class="container mt-3">
    <div class="row" v-if="!isLoading">
      <PersonCard :person="person" v-for="person in persons" :key="person.id" />
    </div>
    <div class="row" v-if="isLoading">
      <div class="col">
        <div class="text-center display-4">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PersonCard from "../components/PersonCard.vue";
export default {
  name: "Home",
  components: { PersonCard },
  mounted: function () {
    this.getPersons();
  },
  data() {
    return {
      isLoading: false,
      persons: [],
    };
  },
  methods: {
     getPersons() {
      this.isLoading = true;
       fetch(`https://swapi.dev/api/people`)
        .then((response) => response.json())
        .then((responses) => {
          responses.results.forEach(async (item, index,array) => {
            let promises = [];
            //Get homeworld
            promises.push( fetch(item.homeworld).then((response) => response.json()));
            //Get species array???
            if (item.species.length > 0) {
              //In event of multiple species
              item.species.forEach(i => promises.push(fetch(i).then((response) => response.json())));
              const allData = await Promise.all(promises);
              array[index].homeworld = allData[0].name;
              array[index].species = allData[1].name;
              //console.log(allData);
            }else{
              const allData = await Promise.all(promises);
              array[index].homeworld = allData[0].name;
              array[index].species = "N/A";
              //console.log("no species ", allData);
              }

              //Push each result for cool effect
          this.persons.push(array[index]);
              
          });
          this.$emit('paged', 'Select a card');
          this.isLoading = false;
        })
        .catch((err) => console.log("Error " + err));
    },
  },
};
</script>
