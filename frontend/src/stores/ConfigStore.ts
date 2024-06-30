import { BUTTON_KEY, Level, Mode } from "@/util/constants";
import type { ILevel, IMode, IConfigInputDict } from "@/util/types";
import { defineStore } from "pinia";

// 各種設定や状態を管理するストア
// TODO: 設定と状態は、別のストアとして分ける
// TODO: isStartなど、設定とは関係のない状態が入ってしまっている。
export const useConfigStore = defineStore("config", {
    state: () => ({
        isStart: false,
        isDisplayRankingForm: false,
        isDisplayConfigKeyBind: false,
        mode: Mode.RANKING_MODE as IMode,
        level: Level.EASY as ILevel,
        notesDistance: 100,
        configInputDict: {} as IConfigInputDict,
        keyBindList: BUTTON_KEY as string[],
    }),
    actions: {
        init() {
            this.setIsStart(false);
            this.setIsDisplayRankingForm(false);
            this.setIsDisplayConfigKeyBind(false);
            if (this.keyBindList.length === 0) {
                this.setKeyBindList(BUTTON_KEY);
            }
        },
        setIsStart(isStart: boolean) {
            this.isStart = isStart;
        },
        setIsDisplayRankingForm(isDisplayRankingForm: boolean) {
            this.isDisplayRankingForm = isDisplayRankingForm;
        },
        setIsDisplayConfigKeyBind(isDisplayConfigKeyBind: boolean) {
            this.isDisplayConfigKeyBind = isDisplayConfigKeyBind;
        },
        setMode(mode: IMode) {
            this.mode = mode;
        },
        setLevel(level: ILevel) {
            this.level = level;
        },
        setNotesDistance(distance: number) {
            this.notesDistance = distance;
        },
        setConfigInputDict(configInputDict: IConfigInputDict) {
            this.configInputDict = configInputDict;
        },
        setKeyBindList(keyBindList: string[]) {
            this.keyBindList = keyBindList;
        },
    },
    persist: true,
});
