<template>
    <div class="note-white" v-if="isExist"></div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface NoteWhiteProps {
    isExist: number;
}
defineProps<NoteWhiteProps>();
</script>

<style scoped>
.note-white {
    width: 68px;
    height: 100%;
    background-color: #dddddd;
}
</style>
