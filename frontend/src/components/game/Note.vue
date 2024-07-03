<template>
    <div
        class="note"
        :style="'margin-top: ' + notesDistance + 'px'"
        v-if="isDisplay"
    >
        <NoteWhite v-if="color === 'white'" :is-exist="isExist" />
        <NoteBlue v-if="color === 'blue'" :is-exist="isExist" />
    </div>
</template>

<script setup lang="ts">
import NoteWhite from "./NoteWhite.vue";
import NoteBlue from "./NoteBlue.vue";
import { useConfigStore } from "@/stores/ConfigStore";
import { computed } from "vue";

interface NoteProps {
    color: string;
    isExist: number;
}
defineProps<NoteProps>();
const notesDistance = computed(() => useConfigStore().notesDistance);

const isDisplay = computed(() => {
    return useConfigStore().isStart;
});
</script>

<style scoped>
.note {
    margin: 0 auto;
    height: 10px;
    margin-left: 2px;
    z-index: 0;
}
</style>
