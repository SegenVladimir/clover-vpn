<script setup>
import ListLocation from "../ListLocation/ListLocation.vue";
import {ref} from "vue";

const props = defineProps({
    selectedLocation: String
});
const emit = defineEmits(['openChoiceLocation', 'selectedLocation']);
const search = ref<HTMLElement | String>('');
const searchActive = ref(false);


const onShowSearch = () => {
    const activeRevers = !searchActive.value;
    searchActive.value = activeRevers;

    if(activeRevers){
        setTimeout(() => {
            search.value.focus();
        }, 0);
    }
};
</script>
<style lang="scss">
@import "ChoiceLocation";
</style>
<template>
    <div class="choice-location">
        <div class="choice-location__header">
            <button class="choice-location__close" @click.prevent.stop="emit('openChoiceLocation', false);">close</button>
            <div class="choice-location__title">Virtual Location</div>
            <button type="button" class="choice-location__search-btn" @click.prevent.stop="onShowSearch">search</button>
            <div v-if="searchActive" class="choice-location__search">
                <input ref="search" name="search" type="text" autocomplete="off" class="choice-location__input" placeholder="Enter Location"/>
                <button type="button" class="choice-location__search-close" @click.prevent.stop="onShowSearch">close search</button>
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
