<template>
  <div class="container mt-3">
    <div class="row">
      <PersonCard :user="user" v-for="user in users" :key="user.id" />
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
      users: [
        {
          id: 1,
          name: "john1",
          message: "hello",
        },
        {
          id: 2,
          name: "john2",
          message: "hello",
        },
        {
          id: 3,
          name: "john3",
          message: "hello",
        },
        {
          id: 4,
          name: "john4",
          message: "hello",
        },
        {
          id: 5,
          name: "john5",
          message: "hello",
        },
        {
          id: 6,
          name: "john6",
          message: "hello",
        },
        {
          id: 7,
          name: "john7",
          message: "hello",
        },
        {
          id: 8,
          name: "john8",
          message: "hello",
        },
      ],
    };
  },
  methods: {
    getPersons() {
      //Fetch users
      console.log("Hit it");
    },
  },
};
</script>
