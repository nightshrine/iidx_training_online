<template>
    <div id="setting">
        <div id="setting_title">
            <h1>設定</h1>
        </div>
        <div id="setting_form">
            <ConfigMode></ConfigMode>
            <!-- TODO: これ下のConfigInputと統合してよさそう -->
            <ConfigInputToPinia
                :title="configInputToPinia.title"
                :setNotes="configInputToPinia.setNotes"
            />
            <ConfigInputFreeModeNumber
                v-for="title in Object.keys(configInputDict)"
                :key="title"
                :title="title"
                v-model:value="configInputDict[title]"
            />
            <button id="start-button" @click="start" :disabled="isStart">
                開始
            </button>
            <button id="stop-button" @click="stop" :disabled="!isStart">
                終了
            </button>
            <button
                id="config-key-bind-button"
                @click="openConfigKeyBind"
                :disabled="isStart"
            >
                キーバインド設定
            </button>
            <a
                id="detail"
                href="https://github.com/nightshrine/iidx_training_online"
                target="_blank"
                >詳細説明↩︎</a
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import ConfigInputToPinia from "./config/ConfigInputToPinia.vue";
import ConfigInputFreeModeNumber from "./config/ConfigInputFreeModeNumber.vue";
import { useConfigStore } from "../stores/ConfigStore";
import type {
    IConfigInputDict,
    IConfigInputToPinia,
    IGameModeName,
    ILevel,
    IMode,
} from "@/util/types";
import { ConfigDefault, FREE_MODE, Mode } from "@/util/constants";
import { TimerService } from "@/services/TimerService";
import ConfigMode from "./config/ConfigMode.vue";

const configInputToPinia = ref<IConfigInputToPinia>({
    title: "ノーツの間隔",
    setNotes: (distance: number) => {
        useConfigStore().setNotesDistance(distance);
    },
    defaultValue: useConfigStore().notesDistance,
});

// 問題、ノーツの初期値を設定
const getDefaultConfigInputDict = (
    gameModeName: IGameModeName
): IConfigInputDict => {
    // 設定値がすでにある場合はそれを返す
    if (
        Object.keys(useConfigStore().configInputDict).length !== 0 &&
        useConfigStore().mode === Mode.FREE_MODE
    ) {
        return useConfigStore().configInputDict;
    }
    return {
        問題数: ConfigDefault[gameModeName].QUESTION_NUM,
        "1notes": ConfigDefault[gameModeName].NOTES1_RATE,
        "2notes": ConfigDefault[gameModeName].NOTES2_RATE,
        "3notes": ConfigDefault[gameModeName].NOTES3_RATE,
        "4notes": ConfigDefault[gameModeName].NOTES4_RATE,
        "5notes": ConfigDefault[gameModeName].NOTES5_RATE,
        "6notes": ConfigDefault[gameModeName].NOTES6_RATE,
    };
};

// 問題、ノーツの設定値を、モードに応じて変更
const getGameModeName = (mode: IMode, level: ILevel): IGameModeName => {
    if (mode === Mode.RANKING_MODE) {
        return level;
    }
    return FREE_MODE;
};

// 問題、ノーツの設定値を保持
const configInputDict = ref<IConfigInputDict>(
    getDefaultConfigInputDict(
        getGameModeName(useConfigStore().mode, useConfigStore().level)
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

// キーバインド設定画面を開く
const openConfigKeyBind = () => {
    useConfigStore().setIsDisplayConfigKeyBind(true);
};

// ゲームスタート時にモード変更を無効化
const isStart = computed(() => {
    return useConfigStore().isStart;
});

// 終了（リロードを行うだけ）
const stop = () => {
    location.reload();
};

const start = () => {
    // ノーツの設定値をストアへ格納
    useConfigStore().setConfigInputDict(configInputDict.value);
    useConfigStore().setIsStart(true);
    // カウントダウンしてからゲームを開始
    TimerService.countDownToStart();
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
#setting #start-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

#setting #stop-button {
    background-color: #ff4343;
    margin-bottom: 10px;
}
#setting #stop-button:hover {
    background-color: #5d1818;
}
#setting #stop-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

#setting #config-key-bind-button {
    background-color: #777777;
}
#setting #config-key-bind-button:hover {
    background-color: #333333;
}
#setting #config-key-bind-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

#setting #detail {
    color: #dddddd;
}
#setting #detail:hover {
    opacity: 0.7;
}
</style>
