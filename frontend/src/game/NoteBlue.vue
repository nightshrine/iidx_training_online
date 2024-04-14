<template>
    <div class="note-blue" v-if="isExist"></div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface NoteBlueProps {
    isExist: number;
}
defineProps<NoteBlueProps>();
</script>

<style scoped>
.note-blue {
    width: 56px;
    height: 100%;
    background-color: #4973ff;
}
</style>
