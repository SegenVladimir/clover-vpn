<script setup>
const props = defineProps({
    type: 'uploaded' | 'downloaded',
})
</script>
<style lang="scss">
@import "InfoTile";
</style>
<template>
    <div v-if="props.type === 'downloaded'" class="info-tile">
        <div class="info-tile__arrow-down"></div>
        <div class="info-tile__content">
            <div class="info-tile__title">215 KB</div>
            <div class="info-tile__description">Downloaded</div>
        </div>
    </div>
    <div v-if="props.type === 'uploaded'" class="info-tile">
        <div class="info-tile__arrow-up"></div>
        <div class="info-tile__content">
            <div class="info-tile__title">144 KB</div>
            <div class="info-tile__description">Uploaded</div>
        </div>
    </div>
</template>
