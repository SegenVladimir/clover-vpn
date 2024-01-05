<script setup>
import {checkSpeedConnection} from "../../utils.js";
import {ref} from "vue";

const props = defineProps({
    type: 'uploaded' | 'downloaded',
});

const speedConnect = ref({download: 0, upload: 0});

checkSpeedConnection().then((e) => {
    speedConnect.value = e;
});
</script>
<style lang="scss">
@import "InfoTile";
</style>
<template>
    <div v-if="props.type === 'downloaded'" class="info-tile">
        <div class="info-tile__arrow-down"></div>
        <div class="info-tile__content">
            <div class="info-tile__title">{{speedConnect.download}} Mb/s</div>
            <div class="info-tile__description">Downloaded</div>
        </div>
    </div>
    <div v-if="props.type === 'uploaded'" class="info-tile">
        <div class="info-tile__arrow-up"></div>
        <div class="info-tile__content">
            <div class="info-tile__title">{{speedConnect.upload}} Mb/s</div>
            <div class="info-tile__description">Uploaded</div>
        </div>
    </div>
</template>
