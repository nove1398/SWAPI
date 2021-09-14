<template>
  <div class="w-100 d-flex flex-wrap">
      <div class="flex-grow-1 me-0 me-md-2">
        <input type="text" class="form-control" placeholder="Search" />
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
export default {};
</script>

<style scoped>
</style>