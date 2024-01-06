<script setup>
import ListLocation from "../ListLocation/ListLocation.vue";

const props = defineProps({
    selectedLocation: String
});
const emit = defineEmits(['openChoiceLocation', 'selectedLocation']);
</script>
<style lang="scss">
@import "ChoiceLocation";
</style>
<template>
    <div class="choice-location">
        <div class="choice-location__header">
            <button class="choice-location__close" @click.prevent.stop="emit('openChoiceLocation', false);">close</button>
            <div class="choice-location__title">Virtual Location</div>
            <button type="button" class="choice-location__search-btn">search</button>
            <div class="choice-location__search">
                <input type="text" class="choice-location__input" placeholder="Enter Location"/>
                <button type="button" class="choice-location__search-close">close search</button>
            </div>
        </div>
        <div class="choice-location__content">
            <ListLocation
                :selectedLocation="props.selectedLocation"
                @selectedLocation="(e) => {emit('selectedLocation', e);}"
                @closeChoiceLocation="emit('openChoiceLocation', false)"/>
        </div>
    </div>
</template>
