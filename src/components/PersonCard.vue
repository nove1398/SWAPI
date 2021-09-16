<template>
  <div class="card col-12 col-sm-6 col-md-2 p-0 me-4 mb-3 rounded" 
  @click="this.$router.push(detailUrl)"
  title="View this character">
    <!--Header-->
    <div class="card-header person-header d-flex flex-column pt-3 pe-3 ps-3">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12V9.5C10 9.10218 9.84196 8.72064 9.56066 8.43934C9.27936 8.15804 8.89782 8 8.5 8V8C8.10218 8 7.72064 8.15804 7.43934 8.43934C7.15804 8.72064 7 9.10218 7 9.5V13C7.05225 13.501 7.21362 13.9844 7.47277 14.4163C7.73192 14.8483 8.08255 15.2181 8.5 15.5H12L13.348 11.008C13.4473 10.6749 13.4587 10.3218 13.381 9.983L12.181 4.774C12.0663 4.27665 11.7658 3.84198 11.341 3.559L10.5 3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 6.5V0.5H2.5V11.5H4.5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      <h4 class="align-self-start flex-shrink-1 text-white mt-4">{{person.name}}</h4>
    </div>
    <!--End Header-->
    <div class="card-body">
      <!--Body Header-->
      <div class="">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <img src="../assets/Gender-Female.svg"  alt="My Happy SVG" class="me-1" v-if="person.gender === 'female'" />
            <img src="../assets/Gender-Male.svg"  alt="My Happy SVG" class="me-1" v-if="person.gender === 'male'" />
            <div class="text-capitalize">{{person.gender}}</div>
          </div>
          <div>{{person.species}}</div>
        </div>
        <hr class="header-hr bg-dark" />
      </div>
      <!--Body Header-->
      <!--Content-->
      <div class="mt-3">
          <!--Content Items-->
          <div class="rounded d-flex justify-content-between p-2 person-content-item mb-2">
            <div class="d-flex ">
                <img src="../assets/Homeworld.svg" alt="My Happy SVG" class="me-1" />
                <span>Homeworld</span>
            </div>
            <div>{{person.homeworld  }}</div>
          </div>

           <div class="rounded d-flex justify-content-between p-2 person-content-item mb-2">
            <div class="d-flex ">
                <img src="../assets/Vehicle.svg" alt="My Happy SVG" class="me-1" />
                <span>Vehicles</span>
            </div>
            <div>{{person.vehicles.length}}</div>
          </div>

           <div class="rounded d-flex justify-content-between p-2 person-content-item mb-2">
            <div class="d-flex ">
                <img src="../assets/Starship.svg" alt="My Happy SVG" class="me-1" />
                <span>Starships</span>
            </div>
            <div>{{person.starships.length}}</div>
          </div>
          <!--Content Items-->
      </div>
      <!--End Content-->
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    person: {}
  },
  mounted: function () {
      this.parseLink();
  },
  data(){return {
    detailUrl:""
  }},
  methods:{
      parseLink(){
          this.detailUrl = `/detail/${this.person.url.split('/')[5]}`;
        }
    }
};
</script>

<style scoped>
hr{
  margin: 0;
}
.card {
  border-radius: 0.3em !important;
  min-width: 235px !important;
  border-radius: 5% !important;
  cursor: pointer;
  transition: transform 0.2s linear;
}
.card:hover{
  z-index: 1000;
  transform: scale(1.1);
  box-shadow: gray 10px 10px 20px;
}
.person-header {
  background: #969696;
  border-top-left-radius: 5% !important;;
  border-top-right-radius: 5% !important;;
}
.person-body {
  padding: 10px;
}
.person-content-item{
    background-color: #ededed;
}
</style>