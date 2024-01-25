import { defineStore } from "pinia";

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useGameStore = defineStore("keydown", {
    state: () => ({
        // ボタンが押されているかどうかを保持する配列
        buttonPressed: [false, false, false, false, false, false, false],
        // ノーツの情報を保持する配列
        notesList: [[]] as number[][],
        // 押したボタンが正しいかどうか
        isCorrect: false,
    }),
    actions: {
        setButton0Pressed(pressed: boolean) {
            this.buttonPressed[0] = pressed;
        },
        setButton1Pressed(pressed: boolean) {
            this.buttonPressed[1] = pressed;
        },
        setButton2Pressed(pressed: boolean) {
            this.buttonPressed[2] = pressed;
        },
        setButton3Pressed(pressed: boolean) {
            this.buttonPressed[3] = pressed;
        },
        setButton4Pressed(pressed: boolean) {
            this.buttonPressed[4] = pressed;
        },  
        setButton5Pressed(pressed: boolean) {
            this.buttonPressed[5] = pressed;
        },
        setButton6Pressed(pressed: boolean) {
            this.buttonPressed[6] = pressed;
        },
        // ノーツの情報をセットする
        setNotesList(notesList: number[][]) {
            this.notesList = notesList;
        },
        setNotesListDefault() {
            this.notesList = [[]];
        }
    },
});
