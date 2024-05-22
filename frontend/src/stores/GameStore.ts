import { COUNTDOWN_SEC } from "@/util/constants";
import { defineStore } from "pinia";

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useGameStore = defineStore("keydown", {
    state: () => ({
        // ボタンが押されているかどうかを保持する配列
        buttonPressed: [false, false, false, false, false, false, false],
        // ノーツの情報を保持する配列
        notesList: [[]] as number[][],
        // 次に進んでいいかどうか
        canGoNext: true,
        // タイマーのカウント
        time: 0,
        // タイマーのセットインターバル
        timer: 0,
        // カウントダウンのカウント
        countDownTime: 0,
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
        },
        setTime(time: number) {
            this.time = time;
        },
        // タイマーをセットする
        setTimer(timer: number) {
            this.timer = timer;
        },
        // タイマーをクリアする(カウントをリセットするわけではない)
        clearTimer(timer: number) {
            clearInterval(timer);
            timer = 0;
        },
        // カウントダウンのカウントをセットする
        setCountDownTime(countDownTime: number) {
            this.countDownTime = countDownTime;
        },
    },
});
