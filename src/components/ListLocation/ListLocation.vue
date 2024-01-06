<script setup>
import {ref} from "vue";
import {locations} from "../../data.js";
import {getIconUrl, randomInt} from "../../utils.js";

const props = defineProps({
    selectedLocation: String,
});
const activeItem = ref(props.selectedLocation);
const emit = defineEmits(['selectedLocation', 'closeChoiceLocation']);

const onSelectLocation = (name) => {
    activeItem.value = name;
    emit('selectedLocation', name);
    emit('closeChoiceLocation', true);
}
</script>
<style lang="scss">
@import "ListLocation";
</style>
<template>
    <div class="list-location">
        <div class="list-location__group-name">automatic connection</div>
        <div v-for="item in locations.auto" class="checkbox-location" @click.prevent.stop="onSelectLocation(item)">
            <div class="checkbox-location__name">
                <div class="checkbox-location__flag">
                    <img :src="getIconUrl(item)" :alt="item" />
                </div>
                {{item}}
            </div>
            <div class="checkbox-location__tools">
                <div class="checkbox-location__status">{{randomInt(10, 99)}}%</div>
                <div class="checkbox-location__selected" :class="{active: activeItem === item}"></div>
            </div>
        </div>
    </div>
    <div class="list-location">
        <div class="list-location__group-name">recent connections</div>
        <div v-for="item in locations.recent" class="checkbox-location" @click.prevent.stop="onSelectLocation(item)">
            <div class="checkbox-location__name">
                <div class="checkbox-location__flag">
                    <img :src="getIconUrl(item)" :alt="item" />
                </div>
                {{item}}
            </div>
            <div class="checkbox-location__tools">
                <div class="checkbox-location__status">{{randomInt(10, 99)}}%</div>
                <div class="checkbox-location__selected" :class="{active: activeItem === item}"></div>
            </div>
        </div>
    </div>
    <div class="list-location">
        <div class="list-location__group-name">All (89)</div>
        <div v-for="item in locations.all" class="checkbox-location" @click.prevent.stop="onSelectLocation(item)">
            <div class="checkbox-location__name">
                <div class="checkbox-location__flag">
                    <img :src="getIconUrl(item)" :alt="item" />
                </div>
                {{item}}
            </div>
            <div class="checkbox-location__tools">
                <div class="checkbox-location__status">{{randomInt(10, 99)}}%</div>
                <div class="checkbox-location__selected" :class="{active: activeItem === item}"></div>
            </div>
        </div>
    </div>
</template>
