<template>
    <div id="setting">
        <div id="setting_title">
            <h1>設定</h1>
        </div>
        <div id="setting_form">
            <ConfigMode></ConfigMode>
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
import { computed, ref, watch } from "vue";
import ConfigInputToPinia from "./config/ConfigInputToPinia.vue";
import ConfigInput from "./config/ConfigInput.vue";
import { useConfigStore } from "../stores/ConfigStore";
import type {
    IConfigInputDict,
    IConfigInputToPinia,
    IDataName,
    ILevel,
    IMode,
} from "@/util/types";
import { makeNotesList } from "@/composables/MakeNotesData";
import { ConfigDefault, FREE_MODE, Level, Mode } from "@/util/constants";
import { startCountDown } from "@/composables/Timer";
import ConfigMode from "./config/ConfigMode.vue";

const configInputToPinia = ref<IConfigInputToPinia>({
    title: "ノーツの間隔",
    setNotes: (distance: number) => {
        useConfigStore().setNotesDistance(distance);
    },
    defaultValue: useConfigStore().notesDistance,
});

// 問題、ノーツの初期値を設定
const getDefaultConfigInputDict = (data: IDataName): IConfigInputDict => {
    return {
        問題数: ConfigDefault[data].QUESTION_NUM,
        "1notes": ConfigDefault[data].NOTES1_RATE,
        "2notes": ConfigDefault[data].NOTES2_RATE,
        "3notes": ConfigDefault[data].NOTES3_RATE,
        "4notes": ConfigDefault[data].NOTES4_RATE,
        "5notes": ConfigDefault[data].NOTES5_RATE,
        "6notes": ConfigDefault[data].NOTES6_RATE,
    };
};

// 問題、ノーツの設定値を、モードに応じて変更
const getDataName = (mode: IMode, level: ILevel): IDataName => {
    if (mode === Mode.RANKING_MODE) {
        return level;
    }
    return FREE_MODE;
};

// 問題、ノーツの設定値を保持
const configInputDict = ref<IConfigInputDict>(
    getDefaultConfigInputDict(
        getDataName(useConfigStore().mode, useConfigStore().level)
    )
);

const selectMode = computed((): IMode => {
    return useConfigStore().mode;
});
const selectLevel = computed((): ILevel => {
    return useConfigStore().level;
});

watch([selectMode, selectLevel], () => {
    // ランキングモードでない場合は何もしない
    if (selectMode.value !== Mode.RANKING_MODE) {
        configInputDict.value = getDefaultConfigInputDict(FREE_MODE);
        return;
    }
    configInputDict.value = getDefaultConfigInputDict(selectLevel.value);
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
