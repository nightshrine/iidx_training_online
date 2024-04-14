<template>
    <div id="count-down" v-if="isDisplay">
        <p>{{ countDownTime }}</p>
    </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/GameStore';
import { computed } from 'vue';



const countDownTime = computed(() => {
    return useGameStore().countDownTime;
    return 3;
});

const isDisplay = computed(() => {
    return useGameStore().countDownTime > 0;
});

</script>

<style scoped>
#count-down {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 200px;
    color: #dddddd;
}
</style>
