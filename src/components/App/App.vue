<script setup>
import LoadScreen from '../LoadScreen/LoadScreen.vue'
</script>
<style lang="scss">
@import "App";
</style>
<template>
  <div class="app">
      <div class="app__header">
          <div class="app__time">18:00</div>
          <div class="app__status">
              <div class="app__wifi"></div>
              <div class="app__signal"></div>
              <div class="app__battery"></div>
          </div>
      </div>
      <div class="app__content">
          <LoadScreen />
      </div>
      <div class="app__bottom"></div>
  </div>
</template>
