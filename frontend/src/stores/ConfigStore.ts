import { Level, Mode } from "@/util/constants";
import type { ILevel, IMode } from "@/util/types";
import { defineStore } from "pinia";

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useConfigStore = defineStore("config", {
    state: () => ({
        isStart: false,
        mode: Mode.FREE_MODE as IMode,
        level: Level.EASY as ILevel,
        notesDistance: 100,
    }),
    actions: {
        setIsStart(isStart: boolean) {
            this.isStart = isStart;
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
