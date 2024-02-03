import { useGameStore } from "@/stores/GameStore";
import { LANE_NUM } from "@/util/constants";
import type { IConfigInputDict } from "@/util/types";

export const makeNotesList = (configInputDict: IConfigInputDict): void => {
    useGameStore().setNotesListDefault();
    const questionNum = configInputDict["問題数"];
    const notesRateList = [
        configInputDict["1notes"],
        configInputDict["2notes"],
        configInputDict["3notes"],
        configInputDict["4notes"],
        configInputDict["5notes"],
        configInputDict["6notes"],
    ];

    // ノーツリストをレーンごとに保持する
    const notesList: number[][] = [[], [], [], [], [], [], []];

    // 一つ前のノーツの位置を保持する
    let preNotesGroup: number[] = [];
    // 問題数分のノーツを作成する
    for (let i = 0; i < questionNum; i++) {
        const notesNum = getNotesNum(notesRateList);
        let notes = [];
        [notes, preNotesGroup] = getNotesGroup(notesNum, preNotesGroup);
        for (let j = 0; j < LANE_NUM; j++) {
            if (notes.indexOf(j) === -1) {
                notesList[j].push(0);
            } else {
                notesList[j].push(1);
            }
        }
    }

    useGameStore().setNotesList(notesList);
};

// 1行に何個のノーツを配置するかを決める
export const getNotesNum = (notesRateList: number[]): number => {
    const notesRateListSum = notesRateList.reduce((a, b) => a + b);
    const randomNum = Math.floor(Math.random() * notesRateListSum);
    let judgeNum = 0;
    for (let i = 0; i < notesRateList.length; i++) {
        judgeNum += notesRateList[i];
        if (randomNum < judgeNum) {
            return i + 1;
        }
    }
    // ここには来ないはず
    return 0;
};

// 1行に配置するノーツの位置を決める
export const getNotesGroup = (
    notesNum: number,
    preNotesGroup: number[] = []
): [number[], number[]] => {
    let selectNotes = [];
    let notesNumSum = preNotesGroup.length + notesNum;
    if (notesNumSum <= 7) {
        while (selectNotes.length < notesNum) {
            let note = Math.floor(Math.random() * 7);
            if (
                selectNotes.indexOf(note) === -1 &&
                preNotesGroup.indexOf(note) === -1
            ) {
                selectNotes.push(note);
            }
        }
    } else {
        for (let i = 0; i < 7; i++) {
            if (preNotesGroup.indexOf(i) === -1) {
                selectNotes.push(i);
            }
        }
        while (selectNotes.length < notesNum) {
            let note = Math.floor(Math.random() * 7);
            if (selectNotes.indexOf(note) === -1) {
                selectNotes.push(note);
            }
        }
    }
    preNotesGroup = selectNotes;
    return [selectNotes, preNotesGroup];
};
