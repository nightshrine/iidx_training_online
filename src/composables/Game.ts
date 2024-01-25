import { useGameStore } from "@/stores/GameStore";
import {
    BUTTON0_KEY,
    BUTTON1_KEY,
    BUTTON2_KEY,
    BUTTON3_KEY,
    BUTTON4_KEY,
    BUTTON5_KEY,
    BUTTON6_KEY,
} from "../util/constants";
import { useConfigStore } from "@/stores/ConfigStore";

export const game = () => {
    registerEventListeners();
};

const registerEventListeners = () => {
    addEventListener("keydown", (event) => {
        if (!useConfigStore().isStart) return;
        if (event.key === BUTTON0_KEY) {
            useGameStore().setButton0Pressed(true);
        } else if (event.key === BUTTON1_KEY) {
            useGameStore().setButton1Pressed(true);
        } else if (event.key === BUTTON2_KEY) {
            useGameStore().setButton2Pressed(true);
        } else if (event.key === BUTTON3_KEY) {
            useGameStore().setButton3Pressed(true);
        } else if (event.key === BUTTON4_KEY) {
            useGameStore().setButton4Pressed(true);
        } else if (event.key === BUTTON5_KEY) {
            useGameStore().setButton5Pressed(true);
        } else if (event.key === BUTTON6_KEY) {
            useGameStore().setButton6Pressed(true);
        } else {
            return;
        }
        const notes: number[] = [];
        for (let i = 0; i < useGameStore().notesList.length; i++) {
            notes.push(useGameStore().notesList[i][0]);
        }
        if (isPressNotes(notes)) {
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
        if (event.key === BUTTON0_KEY) {
            useGameStore().setButton0Pressed(false);
        } else if (event.key === BUTTON1_KEY) {
            useGameStore().setButton1Pressed(false);
        } else if (event.key === BUTTON2_KEY) {
            useGameStore().setButton2Pressed(false);
        } else if (event.key === BUTTON3_KEY) {
            useGameStore().setButton3Pressed(false);
        } else if (event.key === BUTTON4_KEY) {
            useGameStore().setButton4Pressed(false);
        } else if (event.key === BUTTON5_KEY) {
            useGameStore().setButton5Pressed(false);
        } else if (event.key === BUTTON6_KEY) {
            useGameStore().setButton6Pressed(false);
        }
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
