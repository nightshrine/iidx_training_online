<template>
    <label>
        <p>{{ title }}</p>
        <input
            type="number"
            class="setting_input"
            v-bind:value="value"
            v-on:input="onInput"
            v-bind:min="minValue"
            v-bind:max="maxValue"
            :disabled="isRankingMode"
        />
    </label>
</template>

<script setup lang="ts">
import { useConfigStore } from "@/stores/ConfigStore";
import { MAX_CONFIG_INPUT, MIN_CONFIG_INPUT, Mode } from "@/util/constants";
import { computed } from "vue";

interface ConfigInputFreeModeNumberProps {
    title: string;
    value: number;
}
interface ConfigInputFreeModeNumberEmits {
    (event: "update:value", value: number): void;
}

const onInput = (event: Event) => {
    emit("update:value", Number((event.target as HTMLInputElement).value));
};

const isRankingMode = computed(() => {
    return useConfigStore().mode === Mode.RANKING_MODE;
});

defineProps<ConfigInputFreeModeNumberProps>();
const emit = defineEmits<ConfigInputFreeModeNumberEmits>();

const minValue = MIN_CONFIG_INPUT;
const maxValue = MAX_CONFIG_INPUT;
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
