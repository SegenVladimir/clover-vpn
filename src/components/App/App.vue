<script setup>
import {onMounted, ref} from "vue";
import LoadScreen from '../LoadScreen/LoadScreen.vue'
import ConnectScreen from "../ConnectScreen/ConnectScreen.vue";
import {getTime} from "../../utils.js";
import GetPremium from "../GetPremium/GetPremium.vue";
import ChoiceLocation from "../ChoiceLocation/ChoiceLocation.vue";

const loading = ref(true);
const connect = ref(false);
const currentTime = ref(getTime(new Date()));
const openGetPremium = ref(false);
const openChoiceLocation = ref(false);
const selectedLocation = ref('Japan');

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
    <div class="info-description">Use a mobile device for fullscreen mode</div>
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
                <ConnectScreen
                    v-else
                    @connectStatus="(e) => {connect = e;}"
                    @openGetPremium="(e)=> {openGetPremium = e;}"
                    @openChoiceLocation="(e)=> {openChoiceLocation = e;}"
                    :selectedLocation="selectedLocation"/>
            </Transition>
        </div>
        <div class="app__bottom"></div>
        <Transition class="app__modal">
            <GetPremium v-if="openGetPremium" @openGetPremium="(e)=> {openGetPremium = e;}"/>
        </Transition>
        <Transition class="app__modal">
            <ChoiceLocation
                v-if="openChoiceLocation"
                :selectedLocation="selectedLocation"
                @selectedLocation="(e) => {selectedLocation = e}"
                @openChoiceLocation="(e)=> {openChoiceLocation = e;}"/>
        </Transition>
    </div>
</template>
