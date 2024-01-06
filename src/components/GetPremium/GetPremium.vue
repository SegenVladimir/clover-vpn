<script setup>
const emit = defineEmits(['openGetPremium']);
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
                <div class="tariff">
                    <div class="tariff__name">1 months</div>
                    <div class="tariff__price"><sup>$</sup>9,99</div>
                    <div class="tariff__period">per month</div>
                </div>
                <div class="tariff special">
                    <span class="tariff__tag">saving 40%</span>
                    <div class="tariff__name">6 months</div>
                    <div class="tariff__price"><sup>$</sup>5,99</div>
                    <div class="tariff__period">per month</div>
                </div>
                <div class="tariff">
                    <div class="tariff__name">3 months</div>
                    <div class="tariff__price"><sup>$</sup>7,99</div>
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
