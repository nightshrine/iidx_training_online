<template>
    <label>
        <p>{{ title }}</p>
        <input
            type="number"
            class="setting_input"
            v-model="value"
            v-bind:min="minValue"
            v-bind:max="maxValue"
        />
    </label>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useConfigStore } from "@/stores/ConfigStore";

interface ConfigInputProps {
    title: string;
    setNotes: (value: number) => void;
}
const props = defineProps<ConfigInputProps>();

const minValue = ref<number>(0);
const maxValue = ref<number>(1000);

const value = ref<number>(useConfigStore().notesDistance);

watch(value, (newValue) => {
    props.setNotes(newValue);
});
</script>

<style scoped>
#setting_form label {
    display: flex;
    align-items: center;
    height: 23px;
    justify-content: space-between;
    margin-bottom: 10px;
}
</style>
