import { Level, Mode } from "@/util/constants";
import { defineStore } from "pinia";

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useConfigStore = defineStore("config", {
    state: () => ({
        isStart: false,
        mode: Mode.FREE_MODE as string,
        level: Level.EASY as string,
        notesDistance: 100,
    }),
    actions: {
        setIsStart(isStart: boolean) {
            this.isStart = isStart;
        },
        setMode(mode: string) {
            this.mode = mode;
        },
        setLevel(level: string) {
            this.level = level;
        },
        setNotesDistance(distance: number) {
            this.notesDistance = distance;
        },
    },
});
