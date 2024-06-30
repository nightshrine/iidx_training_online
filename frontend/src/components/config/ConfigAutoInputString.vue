<template>
    <label>
        <p>{{ title }}</p>
        <input
            type="string"
            class="setting_input"
            :id="title"
            v-bind:value="value"
            @focus="configKeyBindFocus($event)"
            @blur="configKeyBindBlur($event)"
            readonly
        />
    </label>
</template>

<script setup lang="ts">
import { useConfigStore } from "@/stores/ConfigStore";
import { computed } from "vue";

interface ConfigAutoInputStringProps {
    title: string;
    value: string;
}
interface ConfigAutoInputStringEmits {
    (event: "update:value", value: string): void;
}

const props = defineProps<ConfigAutoInputStringProps>();
const emit = defineEmits<ConfigAutoInputStringEmits>();

// フォーカス時にキーバインと設定を開始
const configKeyBindFocus = (event: Event) => {
    const target = event.target as HTMLInputElement;
    target.addEventListener("keydown", (event) => {
        target.value = event.key;
        emit("update:value", event.key);
        configKeyBindNextFocus();
    });
};

// 次にフォーカスする要素
const configKeyBindNextFocus = () => {
    const nowFocusKeyBindTitle = props.title;
    if (nowFocusKeyBindTitle === "key7") {
        return document.getElementById("config-key-bind-save")?.focus();
    } else {
        return document
            .getElementById(`key${Number(nowFocusKeyBindTitle.slice(-1)) + 1}`)
            ?.focus();
    }
};

// フォーカスが外れたときにキーバインド設定を終了
const configKeyBindBlur = (event: Event) => {
    const target = event.target as HTMLInputElement;
    target.removeEventListener("keydown", (event) => {
        target.value = event.key;
    });
};
</script>

<style scoped>
label {
    display: flex;
    align-items: center;
    height: 23px;
    justify-content: space-between;
    margin-bottom: 10px;
}
</style>
