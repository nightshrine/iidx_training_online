<template>
    <div class="lane">
        <div :class="`lane-${color}`">
            <div class="note-motion-range">
                <Note
                    v-for="isExist in notesList.slice(0, displayQuestionNum)"
                    :color="color"
                    :is-exist="isExist"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Note from "./Note.vue";
import { computed } from "vue";
import { useGameStore } from "@/stores/GameStore";
import { NOTE_MOTION_RANGE, NOTE_HEIGHT } from "@/util/constants";
import { useConfigStore } from "@/stores/ConfigStore";

interface LaneProps {
    laneNum: number;
    color: string;
}
const notesDistance = computed(() => useConfigStore().notesDistance);
const displayQuestionNum = computed(() =>
    Math.floor(NOTE_MOTION_RANGE / (NOTE_HEIGHT + notesDistance.value))
);
const props = defineProps<LaneProps>();
const notesList = computed(
    (): number[] => useGameStore().notesList[props.laneNum] ?? []
);
</script>

<style scoped>
.lane {
    border-right: 1px solid #dddddd;
}
.lane-white {
    width: 72px;
    height: 100%;
    background-color: #2d2d2d;
    position: relative;
}
.lane-blue {
    width: 60px;
    height: 100%;
}
.note-motion-range {
    height: 80%;
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
}
</style>
