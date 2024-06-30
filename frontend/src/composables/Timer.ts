import { useGameStore } from "@/stores/GameStore";
import { COUNTDOWN_SEC, MSEC, TIME_UNIT } from "@/util/constants";
import { gameStart } from "./Game";

// カウントダウンしてからゲームを開始
export const countDownToStart = (): void => {
    useGameStore().setCountDownTime(COUNTDOWN_SEC);
    const countDownTimer = setInterval(() => {
        useGameStore().setCountDownTime(useGameStore().countDownTime - 1);
        if (useGameStore().countDownTime <= 0) {
            clearInterval(countDownTimer);
            gameStart();
        }
    }, MSEC);
};

// タイマー開始
export const startTimer = (): void => {
    // タイムを初期化
    useGameStore().setTime(0);
    // タイマーをセット
    const timer = setInterval(() => {
        useGameStore().setTime(useGameStore().time + 1);
    }, MSEC / TIME_UNIT);
    useGameStore().setTimer(timer);
};
