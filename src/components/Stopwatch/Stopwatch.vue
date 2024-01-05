<script setup>
import {ref} from "vue";

const props = defineProps({
    second: Number | String,
    minute: Number | String,
});

const second = ref(props.second ?? '00');
const minute = ref(props.minute ?? '00');

setInterval(() => {
    second.value = +second.value +1;

    if(second.value < 10) {
        second.value = '0' + second.value;
    }

    if(second.value >= 60) {
        second.value = '00';
        minute.value = +minute.value + 1;

        if(minute.value < 10) {
            minute.value = '0' + minute.value;
        }
    }
}, 1000);

</script>
<template>
    {{minute}}:{{second}}
</template>
