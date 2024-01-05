<script setup>
import CountrySelect from "../CountrySelect/CountrySelect.vue";
import InfoTile from "../InfoTile/InfoTile.vue";
import {ref} from "vue";

const emit = defineEmits(['connectStatus']);
const connect = ref(false);

const onConnect = () => {
    emit('connectStatus', true);
    connect.value = true;
}

const onDisconnect = () => {
    emit('connectStatus', false);
    connect.value = false;
}

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
        <div v-if="connect" class="connect-screen__content">
            <button type="button" class="connect-screen__main-btn disconnect" @click.prevent.stop="onDisconnect();">disconnect</button>
            <div class="connect-screen__time-box">
                <div class="connect-screen__time">00:17</div>
                <div class="connect-screen__status">Connected</div>
            </div>
        </div>
        <div v-else class="connect-screen__content">
            <button type="button" class="connect-screen__main-btn" @click.prevent.stop="onConnect();">connect</button>
        </div>
        <div class="connect-screen__bottom">
            <div class="connect-screen__info" v-if="connect">
                <InfoTile type="downloaded" />
                <InfoTile type="uploaded" />
            </div>

            <CountrySelect />
        </div>

    </div>
</template>
