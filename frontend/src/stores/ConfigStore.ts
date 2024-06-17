import { Level, Mode } from "@/util/constants";
import type { ILevel, IMode } from "@/util/types";
import { defineStore } from "pinia";

// 各種設定や状態を管理するストア
// TODO: 設定と状態は、別のストアとして分ける
export const useConfigStore = defineStore("config", {
    state: () => ({
        isStart: false,
        isDisplayRankingForm: false,
        mode: Mode.RANKING_MODE as IMode,
        level: Level.EASY as ILevel,
        notesDistance: 100,
    }),
    actions: {
        setIsStart(isStart: boolean) {
            this.isStart = isStart;
        },
        setIsDisplayRankingForm(isDisplayRankingForm: boolean) {
            this.isDisplayRankingForm = isDisplayRankingForm;
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
    },
});
