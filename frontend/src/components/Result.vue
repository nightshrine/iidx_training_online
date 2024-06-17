<template>
    <div id="result">
        <div id="result_title">
            <h1>結果表示</h1>
        </div>
        <div id="result_text">
            <div
                id="result_label"
                v-for="result in resultDict"
                :key="result.prop"
            >
                <p>{{ result.prop }}：</p>
                <p>{{ result.displayString }}</p>
            </div>
        </div>
        <Ranking v-if="selectMode === mode.RANKING_MODE" />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useGameStore } from "../stores/GameStore";
import { Mode, TIME } from "@/util/constants";
import { getDisplayTimeString } from "@/composables/Game";
import Ranking from "@/components/Ranking.vue";
import { useConfigStore } from "@/stores/ConfigStore";

const mode = Mode;

interface IResultDict {
    prop: string;
    value: number;
    displayString: string;
}
const resultDict = computed<IResultDict[]>(() => {
    return [
        {
            prop: TIME,
            value: useGameStore().time,
            displayString: getDisplayTimeString(useGameStore().time),
        },
    ];
});

const selectMode = computed(() => {
    return useConfigStore().mode;
});
</script>

<style scoped>
#result {
    width: 250px;
    height: 65%;
    margin-top: 50px;
    border: 2px solid #dddddd;
    border-radius: 10px;
    padding: 10px;
}
#result_label {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
}
</style>
