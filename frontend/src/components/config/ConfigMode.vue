<template>
    <label class="config-mode">
        <p>モード</p>
        <div class="mode-list">
            <button
                class="free-mode-button"
                :class="{ 'is-active': selectMode === mode.FREE_MODE }"
                @click="updateMode(mode.FREE_MODE)"
            >
                Free
            </button>
            <button
                class="ranking-mode-button"
                :class="{ 'is-active': selectMode === mode.RANKING_MODE }"
                @click="updateMode(mode.RANKING_MODE)"
            >
                Ranking
            </button>
        </div>
    </label>
    <label v-if="selectMode === mode.RANKING_MODE" class="config-level">
        <p>レベル</p>
        <div class="level-list">
            <button
                class="easy-button"
                :class="{ 'is-active': selectLevel === level.EASY }"
                @click="updateLevel(level.EASY)"
            >
                Easy
            </button>
            <button
                class="normal-button"
                :class="{ 'is-active': selectLevel === level.NORMAL }"
                @click="updateLevel(level.NORMAL)"
            >
                Normal
            </button>
            <button
                class="hard-button"
                :class="{ 'is-active': selectLevel === level.HARD }"
                @click="updateLevel(level.HARD)"
            >
                Hard
            </button>
        </div>
    </label>
</template>

<script setup lang="ts">
import { useConfigStore } from "@/stores/ConfigStore";
import { Level, Mode } from "@/util/constants";
import type { ILevel, IMode } from "@/util/types";
import { computed, ref } from "vue";

const level = Level;
const mode = Mode;

const selectMode = computed(() => {
    return useConfigStore().mode;
});
const selectLevel = computed(() => {
    return useConfigStore().level;
});

const updateMode = (mode: IMode) => {
    useConfigStore().setMode(mode);
};
const updateLevel = (level: ILevel) => {
    useConfigStore().setLevel(level);
};
</script>

<style scoped>
.config-mode {
    display: flex;
    align-items: center;
    height: 23px;
    justify-content: space-between;
    margin-bottom: 10px;
}
.free-mode-button {
    width: 70px;
}
.ranking-mode-button {
    width: 70px;
}

.is-active {
    border: 3px solid orange;
}

.config-level {
    display: flex;
    align-items: center;
    height: 23px;
    justify-content: space-between;
    margin-bottom: 10px;
}
.easy-button {
    width: 60px;
}
.normal-button {
    width: 60px;
}
.hard-button {
    width: 60px;
}
</style>
