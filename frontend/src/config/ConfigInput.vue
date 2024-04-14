<template>
    <label>
        <p>{{ title }}</p>
        <input
            type="number"
            class="setting_input"
            v-bind:value="value"
            v-on:input=onInput
            v-bind:min="minValue"
            v-bind:max="maxValue"
        />
    </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ConfigInputProps {
    title: string;
    value: number;
}
interface ConfigInputEmits {
    (event: 'update:value', value: number): void;
}

const onInput = (event: Event) => {
    emit('update:value', Number((event.target as HTMLInputElement).value));
};

defineProps<ConfigInputProps>();
const emit = defineEmits<ConfigInputEmits>();

const minValue = ref<number>(0);
const maxValue = ref<number>(1000);



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
