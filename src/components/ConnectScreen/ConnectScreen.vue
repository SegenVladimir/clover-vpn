<script setup>
import CountrySelect from "../CountrySelect/CountrySelect.vue";
import InfoTile from "../InfoTile/InfoTile.vue";
</script>
<style lang="scss">
@import "ConnectScreen";
</style>
<template>
    <div class="connect-screen">
        <div class="connect-screen__header">
            <button type="button" class="connect-screen__setting-btn">setting</button>
            <span class="connect-screen__logo"></span>
            <button type="button" class="connect-screen__profile-btn">profile</button>
        </div>
        <div class="connect-screen__content">
            <button type="button" class="connect-screen__main-btn">connect</button>

            <div class="connect-screen__time">00:17</div>
            <div class="connect-screen__status">Connected</div>
        </div>
        <div class="connect-screen__bottom">
            <div class="connect-screen__info">
                <InfoTile type="downloaded" />
                <InfoTile type="uploaded" />
            </div>

            <CountrySelect />
        </div>

    </div>
</template>
