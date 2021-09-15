<template>
  <div class="container">
    <!--Nav-->
    <div id="nav" class="mt-3">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row">
          <button class="btn sw-btn active me-2" @click="this.$router.push('/')">
            <img
              src="./assets/Card.svg"
              alt="SVG"
              class="w-auto me-auto text-white pe-2"
            />
            <span>All Cards</span>
          </button>
          <button class="btn sw-btn">
            <img
              src="./assets/Deck.svg"
              alt="SVG"
              class="w-auto me-auto text-white pe-2"
            />
            <span>Decks</span>
          </button>
        </div>
        <div class="d-none d-md-block">
          <h3 class="m-0">
            <span class="text-dark">SW</span
            ><span class="text-secondary">-API Deck Builder</span>
          </h3>
        </div>
        <div>
          <button class="btn btn-outline-secondary">Bavin Edwards</button>
        </div>
      </div>
      <hr class="header-hr bg-dark" />
    </div>
    <!--ENd Nav-->

    <Breadcrumb class="mt-5" :currentCard="updatePage()" />
    <Searchbar class="mt-3" v-on:paged="pageChange"/>
    <!--Dynamic views-->
    <router-view v-on:paged="pageChange" />
  </div>
</template>

<script>
import Breadcrumb from "./components/Breadcrumb.vue";
import Searchbar from "./components/Searchbar.vue";

export default {
  components: { Breadcrumb, Searchbar },
  data(){
    return{
      currentCard:"Select a card"
    }},
  methods:{
    updatePage(){return this.currentCard;},
    pageChange(e){
      this.currentCard = e;
      console.log("page changed",e);
    }
  }
};
</script>

<style>
.sw-btn {
  background: #e4e4e4;
  color: #3b3b3b;
  outline: none !important;
}
.sw-btn.active {
  background: white;
}

hr.header-hr {
  height: 3px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
