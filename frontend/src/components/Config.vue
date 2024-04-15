<template>
    <div id="setting">
        <div id="setting_title">
            <h1>設定</h1>
        </div>
        <div id="setting_form">
            <ConfigInputToPinia
                :title="configInputToPinia.title"
                :setNotes="configInputToPinia.setNotes"
            />
            <ConfigInput
                v-for="title in Object.keys(configInputDict)"
                :key="title"
                :title="title"
                v-model:value="configInputDict[title]"
            />
            <button id="start-button" @click="start">開始</button>
            <button id="stop-button">終了</button>
            <a id="detail" href="https://github.com/nightshrine/iidx_training"
                >詳細説明↩︎</a
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ConfigInputToPinia from "./config/ConfigInputToPinia.vue";
import ConfigInput from "./config/ConfigInput.vue";
import { useConfigStore } from "../stores/ConfigStore";
import type { IConfigInputDict, IConfigInputToPinia } from "@/util/types";
import { makeNotesList } from "@/composables/MakeNotesData";
import {
    DEFAULT_QUESTION_NUM,
    DEFAULT_1NOTES_RATE,
    DEFAULT_2NOTES_RATE,
    DEFAULT_3NOTES_RATE,
    DEFAULT_4NOTES_RATE,
    DEFAULT_5NOTES_RATE,
    DEFAULT_6NOTES_RATE,
} from "@/util/constants";
import { startCountDown } from "@/composables/Timer";

const configInputToPinia = ref<IConfigInputToPinia>({
    title: "ノーツの間隔",
    setNotes: (distance: number) => {
        useConfigStore().setNotesDistance(distance);
    },
    defaultValue: useConfigStore().notesDistance,
});

const configInputDict = ref<IConfigInputDict>({
    問題数: DEFAULT_QUESTION_NUM,
    "1notes": DEFAULT_1NOTES_RATE,
    "2notes": DEFAULT_2NOTES_RATE,
    "3notes": DEFAULT_3NOTES_RATE,
    "4notes": DEFAULT_4NOTES_RATE,
    "5notes": DEFAULT_5NOTES_RATE,
    "6notes": DEFAULT_6NOTES_RATE,
});

const start = () => {
    // ノーツリストを作成
    makeNotesList(configInputDict.value);
    startCountDown();
};
</script>

<style scoped>
#setting {
    width: 250px;
    height: 65%;
    margin-top: 50px;
    border: 2px solid #dddddd;
    border-radius: 10px;
    padding: 10px;
}

#setting button {
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    border: 4px solid #dddddd;
    border-radius: 10px;
    color: #dddddd;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

#setting #start-button {
    background-color: #4366ff;
}
#setting #start-button:hover {
    background-color: #18255d;
}

#setting #stop-button {
    background-color: #ff4343;
    margin-bottom: 10px;
}
#setting #stop-button:hover {
    background-color: #5d1818;
}

#setting #detail {
    color: #dddddd;
}
#setting #detail:hover {
    opacity: 0.7;
}
</style>
