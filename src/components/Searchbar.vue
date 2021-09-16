<template>
  <div class="w-100 d-flex flex-wrap">
    <div class="flex-grow-1 me-0 me-md-2">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="searchTerm"
        @keyup.enter="searchPerson"
      />
    </div>
    <div class="d-flex">
      <div class="input-group me-2">
        <div class="pt-2 pe-1">Sort by</div>
        <select class="form-select">
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
  data() {
    return {
      searchTerm: "",
      isLoading: true,
    };
  },
  watch:{
    $route (to){
        if(!to.href.includes("search") )
            this.searchTerm = '';
    }
  },
  methods: {
    searchPerson() {
      if(this.searchTerm !== undefined || this.searchTerm !== '' || this.searchTerm !== ' ')
        this.$router.push(`/search/${this.searchTerm}`);
    },
  },
};
</script>

<style scoped>
</style>