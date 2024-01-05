<script setup>
import {ref} from "vue";
import LoadScreen from '../LoadScreen/LoadScreen.vue'
import ConnectScreen from "../ConnectScreen/ConnectScreen.vue";

const connect = ref(false);
</script>
<style lang="scss">
@import "App";
</style>
<template>
  <div class="app" :class="connect ? 'connect' : 'disconnect'">
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
        <ConnectScreen @connectStatus="(e) => {connect = e;}"/>
      </div>
      <div class="app__bottom"></div>
  </div>
</template>
