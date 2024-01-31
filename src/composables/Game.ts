import { useGameStore } from "@/stores/GameStore";
import { BUTTON_KEY } from "../util/constants";
import { useConfigStore } from "@/stores/ConfigStore";

export const game = () => {
    registerEventListeners();
};

const registerEventListeners = () => {
    addEventListener("keydown", (event) => {
        if (!useConfigStore().isStart) return;
        for (let i = 0; i < useGameStore().buttonPressed.length; i++) {
            if (event.key === BUTTON_KEY[i]) {
                useGameStore().setButtonPressed(i, true);
            }
        }
        // 一旦全ボタンを離さないと次のノーツが押せないようにする
        if (!useGameStore().canGoNext) return;

        const notes: number[] = [];
        for (let i = 0; i < useGameStore().notesList.length; i++) {
            notes.push(useGameStore().notesList[i][0]);
        }
        if (isPressNotes(notes)) {
            useGameStore().setCanGoNext(false);
            // ノーツを削除
            for (let i = 0; i < useGameStore().notesList.length; i++) {
                useGameStore().notesList[i].shift();
            }
            // ノーツがなくなったらゲーム終了
            if (useGameStore().notesList.every((notes) => notes.length === 0)) {
                useConfigStore().setIsStart(false);
            }
        }
    });

    addEventListener("keyup", (event) => {
        for (let i = 0; i < useGameStore().buttonPressed.length; i++) {
            if (event.key === BUTTON_KEY[i]) {
                useGameStore().setButtonPressed(i, false);
            }
            useGameStore().buttonPressed[i] = false;
        }
        // 全てのボタンを離したら次のノーツが押せるようにする
        if (useGameStore().buttonPressed.every((pressed) => !pressed))
            useGameStore().setCanGoNext(true);
    });
};

const isPressNotes = (notes: number[]) => {
    const buttonPressed = useGameStore().buttonPressed;
    const judgeList = [];
    for (let i = 0; i < notes.length; i++) {
        if (notes[i] === 1 && buttonPressed[i]) {
            judgeList.push(true);
        } else if (notes[i] === 0) {
            continue;
        } else {
            judgeList.push(false);
        }
    }
    return judgeList.every((judge) => judge);
};
