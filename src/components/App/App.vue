<script setup>
import LoadScreen from '../LoadScreen/LoadScreen.vue'
import ConnectScreen from "../ConnectScreen/ConnectScreen.vue";
</script>
<style lang="scss">
@import "App";
</style>
<template>
  <div class="app connect">
      <div class="app__header">
          <div class="app__time">18:00</div>
          <div class="app__status">
              <div class="app__wifi"></div>
              <div class="app__signal"></div>
              <div class="app__battery"></div>
          </div>
      </div>
      <div class="app__content">
<!--          <LoadScreen />-->
        <ConnectScreen />
      </div>




      <div class="app__bottom"></div>
  </div>
</template>
