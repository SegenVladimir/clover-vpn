<script setup>
import {onMounted, ref} from "vue";
import LoadScreen from '../LoadScreen/LoadScreen.vue'
import ConnectScreen from "../ConnectScreen/ConnectScreen.vue";
import {getTime} from "../../utils.js";
import GetPremium from "../GetPremium/GetPremium.vue";

const loading = ref(true);
const connect = ref(false);
const currentTime = ref(getTime(new Date()));
const openGetPremium = ref(false);

setInterval(() => {
    currentTime.value = getTime(new Date());
}, 1000);

onMounted(() => {
    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.value = false;
        }, 1000)
    });
});

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
            <Transition>
                <LoadScreen v-if="loading" />
                <ConnectScreen v-else @connectStatus="(e) => {connect = e;}" @openGetPremium="(e)=> {openGetPremium = e;}"/>
            </Transition>
        </div>
        <div class="app__bottom"></div>
        <Transition class="app__get-premium">
            <GetPremium v-if="openGetPremium" @openGetPremium="(e)=> {openGetPremium = e;}"/>
        </Transition>
    </div>
</template>
