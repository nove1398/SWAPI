<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    getData: function (page, perPage) {
      this.isLoading = true;
      fetch(
        `http://localhost:5000/api/tasktracker/employees?page=${page}&perPage=${perPage}`
      )
        .then((response) => response.json())
        .then((response) => (this.employees = response.data))
        .catch((err) => alert(err));
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
</style>