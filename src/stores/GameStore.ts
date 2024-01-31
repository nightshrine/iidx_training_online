import { defineStore } from "pinia";

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useGameStore = defineStore("keydown", {
    state: () => ({
        // ボタンが押されているかどうかを保持する配列
        buttonPressed: [false, false, false, false, false, false, false],
        // ノーツの情報を保持する配列
        notesList: [[]] as number[][],
        // 次に進んでいいかどうか
        canGoNext : true,
    }),
    actions: {
        setButtonPressed(buttonNum: number, pressed: boolean) {
            this.buttonPressed[buttonNum] = pressed;
        },
        // ノーツの情報をセットする
        setNotesList(notesList: number[][]) {
            this.notesList = notesList;
        },
        setNotesListDefault() {
            this.notesList = [[]];
        },
        setCanGoNext(canGoNext: boolean) {
            this.canGoNext = canGoNext;
        }
    },
});
