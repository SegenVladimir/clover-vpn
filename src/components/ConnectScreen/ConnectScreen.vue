<script setup>
import {onMounted, ref} from "vue";
import CountrySelect from "../CountrySelect/CountrySelect.vue";
import InfoTile from "../InfoTile/InfoTile.vue";
import Stopwatch from "../Stopwatch/Stopwatch.vue";
import ChoiceLocation from "../ChoiceLocation/ChoiceLocation.vue";

const props = defineProps({
    selectedLocation: String
});
const emit = defineEmits(['connectStatus', 'openGetPremium', 'openChoiceLocation']);
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
            <button type="button" class="connect-screen__setting-btn" @click.prevent.stop="emit('openGetPremium', true);">setting</button>
            <span class="connect-screen__logo"></span>
            <button type="button" class="connect-screen__profile-btn" @click.prevent.stop="emit('openGetPremium', true);">profile</button>
        </div>

        <div v-if="connect" class="connect-screen__content">
            <button type="button" class="connect-screen__main-btn disconnect" @click.prevent.stop="onDisconnect();">disconnect</button>
            <div class="connect-screen__time-box">
                <div class="connect-screen__time"><Stopwatch/></div>
                <div class="connect-screen__status">Connected</div>
            </div>
        </div>
        <div v-else class="connect-screen__content">
            <button type="button" class="connect-screen__main-btn" @click.prevent.stop="onConnect();">connect</button>
        </div>
        <div class="connect-screen__bottom">
            <Transition class="connect-screen__selected">
                <div v-if="connect" class="connect-screen__info">
                    <InfoTile type="downloaded" />
                    <InfoTile type="uploaded" />
                </div>

                <CountrySelect v-else :name="props.selectedLocation" @click.prevent.stop="emit('openChoiceLocation', true);"/>
            </Transition>
        </div>
    </div>

</template>
