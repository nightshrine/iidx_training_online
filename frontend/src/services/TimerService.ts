import { useGameStore } from "@/stores/GameStore";
import { COUNTDOWN_SEC, MSEC, TIME_UNIT } from "@/util/constants";
import { GameService } from "./GameService";

/**
 * タイマーに関する処理を行う
 */
export class TimerService {
    /**
     * カウントダウンしてからゲームを開始
     */
    public static countDownToStart(): void {
        useGameStore().setCountDownTime(COUNTDOWN_SEC);
        const countDownTimer = setInterval(() => {
            useGameStore().setCountDownTime(useGameStore().countDownTime - 1);
            if (useGameStore().countDownTime <= 0) {
                clearInterval(countDownTimer);
                GameService.gameStart();
            }
        }, MSEC);
    }

    /**
     * タイマー開始
     */
    public static startTimer(): void {
        // タイムを初期化
        useGameStore().setTime(0);
        // タイマーをセット
        const timer = setInterval(() => {
            useGameStore().setTime(useGameStore().time + 1);
        }, MSEC / TIME_UNIT);
        useGameStore().setTimer(timer);
    }

    /**
     * タイムを表示するための関数
     * @param value タイム
     */
    public static getDisplayTimeString(value: number): string {
        const valueStr: string = value.toString();
        // TIME_UNITが1の場合はそのまま秒に変換
        if (TIME_UNIT === 1) {
            return `${valueStr}秒`;
        }
        // 数字の桁数
        const lengthValue: number = valueStr.length;
        // 数字の後ろから何文字目に小数点があるか
        const pointIndex: number =
            lengthValue - TIME_UNIT.toString().length + 1;
        // 小数点以下の桁数が足りない場合は0を追加
        if (pointIndex <= 0) {
            return `0.${"0".repeat(-1 * pointIndex)}${valueStr}秒`;
        }
        // 必要に応じて0を追加した数字の文字列
        return `${valueStr.slice(0, pointIndex)}.${valueStr.slice(
            pointIndex
        )}秒`;
    }
}
