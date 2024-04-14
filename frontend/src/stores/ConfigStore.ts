import { defineStore } from "pinia";

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useConfigStore = defineStore("config", {
    state: () => ({
        isStart: false,
        notesDistance: 100,
    }),
    actions: {
        setIsStart(isStart: boolean) {
            this.isStart = isStart;
        },
        setNotesDistance(distance: number) {
            this.notesDistance = distance;
        },
    },
});
