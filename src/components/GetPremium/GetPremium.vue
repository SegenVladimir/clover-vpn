<script setup>
import {ref} from "vue";
import {tariffs} from "../../data.js";

const emit = defineEmits(['openGetPremium']);

const selectedTariff = ref(2);
</script>
<style lang="scss">
@import "GetPremium";
</style>
<template>

    <div class="get-premium">
        <div class="get-premium__header">
            <button class="get-premium__close" @click.prevent.stop="emit('openGetPremium', false);">close</button>
        </div>
        <div class="get-premium__content">
            <div class="get-premium__logo">
                <img src="/logo.svg" alt=""/>
            </div>
            <div class="get-premium__title">Get premium today</div>
            <div class="get-premium__description">
                Protect yourself from data interception
                using the Internet in any cafe, airport or park thanks to bank-grade encryption
            </div>

            <div class="tariff__row">
                <div v-for="tariff in tariffs"
                     class="tariff"
                     :class="{active: selectedTariff === tariff.id}"
                     @click="selectedTariff = tariff.id">
                        <div v-if="tariff.tag" class="tariff__tag">saving 40%</div>
                        <div class="tariff__name">{{tariff.name}}</div>
                        <div class="tariff__price"><sup>$</sup>{{tariff.price}}</div>
                        <div class="tariff__period">per month</div>
                </div>
            </div>
        </div>
        <div class="get-premium__bottom">
            <div class="get-premium__btn">Get premium now</div>
            <div class="get-premium__description-small">
                The subscription will automatically renew for
                the same period, unless you cancel it 24 hours
                before the end of the current period
            </div>
        </div>
    </div>
</template>
