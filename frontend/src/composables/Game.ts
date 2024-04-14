import { useGameStore } from "@/stores/GameStore";
import { BUTTON_KEY, TIME, TIME_UNIT } from "../util/constants";
import { useConfigStore } from "@/stores/ConfigStore";
import { startTimer } from "./Timer";
import type { IConfigInputDict } from "@/util/types";
import { makeNotesList } from "./MakeNotesData";

export const gameStart = () => {
    useConfigStore().setIsStart(true);
    registerEventListeners();
    startTimer();
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
                useGameStore().clearTimer(useGameStore().timer);
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
};

export const getDisplayString = (prop: string, value: number): string => {
    if (prop === TIME) {
        const valueStr: string = value.toString();
        // TIME_UNITが1の場合はそのまま秒に変換
        if (TIME_UNIT === 1) {
            return `${valueStr}秒`;
        }
        // 数字の桁数
        const lengthValue: number = valueStr.length;
        // 数字の後ろから何文字目に小数点があるか
        const pointIndex: number = lengthValue - TIME_UNIT.toString().length + 1;
        // 小数点以下の桁数が足りない場合は0を追加
        if (pointIndex <= 0) {
            return `0.${"0".repeat(-1 * pointIndex)}${valueStr}秒`;
        }
        // 必要に応じて0を追加した数字の文字列
        return `${valueStr.slice(0, pointIndex)}.${valueStr.slice(pointIndex)}秒`;
    }
    return `${value}`;
};

