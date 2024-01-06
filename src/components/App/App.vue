<script setup>
import {ref} from "vue";
import LoadScreen from '../LoadScreen/LoadScreen.vue'
import ConnectScreen from "../ConnectScreen/ConnectScreen.vue";
import {getTime} from "../../utils.js";
import GetPremium from "../GetPremium/GetPremium.vue";

const connect = ref(false);
const currentTime = ref(getTime(new Date()));
const openGetPremium = ref(false);

setInterval(() => {
    currentTime.value = getTime(new Date());
}, 1000);
</script>
<style lang="scss">
@import "App";
</style>
<template>
    <div class="app" :class="connect ? 'connect' : 'disconnect'">
        <div class="app__header">
            <div class="app__time">{{currentTime}}</div>
            <div class="app__status">
                <div class="app__wifi"></div>
                <div class="app__signal"></div>
                <div class="app__battery"></div>
            </div>
        </div>
        <div class="app__content">
            <!--          <LoadScreen />-->
            <ConnectScreen @connectStatus="(e) => {connect = e;}" @openGetPremium="(e)=> {openGetPremium = e;}"/>
        </div>
        <div class="app__bottom"></div>
        <Transition class="app__get-premium">
            <GetPremium v-if="openGetPremium" @openGetPremium="(e)=> {openGetPremium = e;}"/>
        </Transition>
    </div>
</template>
