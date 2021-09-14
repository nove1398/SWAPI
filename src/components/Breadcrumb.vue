<template>
  <div class="d-flex">
    <div class="me-2"><span class="crumb">All Cards</span></div>
    <div class="me-2"><span class="text-dark">></span></div>
    <div class="me-2">
      <span class="current-crumb">{{ currentCard }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentCard: String,
  },
};
</script>

<style scoped>
.current-crumb {
  color: #969696 !important;
}
.crumb {
  color: #757575 !important;
}
</style>