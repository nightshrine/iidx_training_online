import { useGameStore } from "@/stores/GameStore";
import { TIME_UNIT } from "../util/constants";
import { useConfigStore } from "@/stores/ConfigStore";
import { TimerService } from "./TimerService";
import { MakeNotesService } from "./MakeNotesService";

/**
 * ゲーム操作や進行に関する処理を行う
 */
export class GameService {
    /**
     * ゲームを開始する
     */
    public static gameStart(): void {
        MakeNotesService.makeNotesList(useConfigStore().configInputDict);
        this.registerEventListeners();
        TimerService.startTimer();
    }

    /**
     * ゲームを終了する
     */
    private static gameEnd(): void {
        useConfigStore().setIsStart(false);
        useGameStore().clearTimer(useGameStore().timer);
        if (useConfigStore().mode === "RANKING") {
            useConfigStore().setIsDisplayRankingForm(true);
        }
    }

    /**
     * イベントリスナーを登録する
     */
    private static registerEventListeners(): void {
        addEventListener("keydown", (event) => {
            if (!useConfigStore().isStart) return;
            for (let i = 0; i < useGameStore().buttonPressed.length; i++) {
                if (event.key === useConfigStore().keyBindList[i]) {
                    useGameStore().setButtonPressed(i, true);
                }
            }
            // 一旦全ボタンを離さないと次のノーツが押せないようにする
            if (!useGameStore().canGoNext) return;

            const notes: number[] = [];
            for (let i = 0; i < useGameStore().notesList.length; i++) {
                notes.push(useGameStore().notesList[i][0]);
            }
            if (this.isPressNotes(notes)) {
                useGameStore().setCanGoNext(false);
                // ノーツを削除
                for (let i = 0; i < useGameStore().notesList.length; i++) {
                    useGameStore().notesList[i].shift();
                }
                // ノーツがなくなったらゲーム終了
                if (
                    useGameStore().notesList.every(
                        (notes) => notes.length === 0
                    )
                ) {
                    this.gameEnd();
                }
            }
        });

        addEventListener("keyup", (event) => {
            if (!useConfigStore().isStart) return;
            for (let i = 0; i < useGameStore().buttonPressed.length; i++) {
                if (event.key === useConfigStore().keyBindList[i]) {
                    useGameStore().setButtonPressed(i, false);
                }
                useGameStore().buttonPressed[i] = false;
            }
            // 全てのボタンを離したら次のノーツが押せるようにする
            if (useGameStore().buttonPressed.every((pressed) => !pressed))
                useGameStore().setCanGoNext(true);
        });
    }

    /**
     * ノーツが押されたかどうかを判定する関数
     * @param notes ノーツの配列
     */
    private static isPressNotes(notes: number[]): boolean {
        const buttonPressed = useGameStore().buttonPressed;
        const judgeList = [];
        for (let i = 0; i < notes.length; i++) {
            if (notes[i] === 1 && buttonPressed[i]) {
                judgeList.push(true);
                // 関係ないボタンを押してたらfalse
            } else if (notes[i] === 0 && buttonPressed[i]) {
                judgeList.push(false);
            } else if (notes[i] === 0 && !buttonPressed[i]) {
                continue;
            } else {
                judgeList.push(false);
            }
        }
        return judgeList.every((judge) => judge);
    }
}
