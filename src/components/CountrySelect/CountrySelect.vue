<script setup>
import {getIconUrl} from "../../utils.js";

const props = defineProps({
    name: String,
})
</script>
<style lang="scss">
@import "CountrySelect";
</style>
<template>
    <div class="country-select">
        <div class="country-select__flag">
            <img :src="getIconUrl(props.name)" :alt="props.name" />
        </div>
        <div class="country-select__content">
            <div class="country-select__name">{{props.name}}</div>
            <div class="country-select__description">automatic connection</div>
        </div>
        <span class="country-select__arrow"></span>
    </div>
</template>
