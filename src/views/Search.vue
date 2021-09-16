<template>
 <div class="container mt-3">
    <div class="row justify-content-md-center justify-content-lg-start" v-if="!isLoading">
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
  name: "Search",
  components: { PersonCard },
  props: {
    
  },
   watch:{
    $route (to){
        this.term = to.params.term;
       this.$emit('paged', `Searching for '${to.params.term}'`);
    }
  },
  mounted: function () {
    this.getData();
    this.$watch('term', () => {
      this.getData();
    })
  },
  data() {
    return {
      isLoading: true,
      results: [],
      term: ''
    };
  },
  methods: {
     async getData() {
      this.isLoading = true;
      this.results = [];
       await fetch(`https://swapi.dev/api/people?search=${this.$route.params.term}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach(async (item,index,array) => {
            let promises = [];
            promises.push(fetch(item.homeworld).then(resp => resp.json()));
            promises.push(...item.species.map(i => fetch(i).then(resp => resp.json())));
            const data = await Promise.all(promises);
            array[index].homeworld = data[0].name;
            array[index].species = data[1]?.name ?? "N/A";
            this.results.push(array[index]);
          });
        })
        .catch((err) => alert(err));
        this.isLoading = false;
      
    },
  },
};
</script>

<style scoped>
</style>