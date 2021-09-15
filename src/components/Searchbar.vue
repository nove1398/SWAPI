<template>
  <div class="w-100 d-flex flex-wrap">
      <div class="flex-grow-1 me-0 me-md-2">
        <input type="text" class="form-control" placeholder="Search" @click="searchPerson()"/>
      </div>
    <div class="d-flex">
      <div class="input-group me-2">
          <div class="pt-2 pe-1">Sort by</div>
        <select class="form-select ">
          <option>Homeworld</option>
          <option>Species</option>
          <option>Vehicle Count</option>
          <option>Starship Count</option>
        </select>
      </div>
      <div class="d-flex">
        <button class="btn sw-btn active fw-bold">Asc</button>
        <button class="btn sw-btn fw-bold">Desc</button>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data(){return {
      searchTerm: "",
      isLoading : true
  }},
  methods: {
      searchPerson(){
        this.isLoading = true;
       fetch(`https://swapi.dev/api/people?search${this.searchTerm}`)
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
              console.log("no species ", allData);
              }

              //Push each result for cool effect
          this.persons.push(array[index]);
              
          });
          this.isLoading = false;
        })
        .catch((err) => console.log("Error " + err));
        }
    }
};
</script>

<style scoped>
</style>