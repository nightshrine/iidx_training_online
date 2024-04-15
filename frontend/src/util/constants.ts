// レーンの数
export const LANE_NUM = 7;
// モードの種類
export enum Mode {
    FREE_MODE = "0",
    RANKING_MODE = "1",
}
// レベルの種類
export enum Level {
    EASY = "0",
    NORMAL = "1",
    HARD = "2",
}
// ノーツ描画の範囲
export const NOTE_MOTION_RANGE = 624;
// ノーツの高さ
export const NOTE_HEIGHT = 10;
// レーンに対応するボタンキーコード
export const BUTTON_KEY = ["Control", "a", "s", "o", ".", "-", "["];
// 設定の初期値
export const DEFAULT_QUESTION_NUM = 15;
export const DEFAULT_1NOTES_RATE = 0;
export const DEFAULT_2NOTES_RATE = 2;
export const DEFAULT_3NOTES_RATE = 0;
export const DEFAULT_4NOTES_RATE = 0;
export const DEFAULT_5NOTES_RATE = 0;
export const DEFAULT_6NOTES_RATE = 0;
// notesの設定における最大値
export const MAX_CONFIG_INPUT = 1000;
// notesの設定における最小値
export const MIN_CONFIG_INPUT = 0;
// 何分の1秒でタイムを管理するか
export const MSEC: number = 1000;
export const TIME_UNIT: number = 100;
// リザルトのプロパティ名
export const TIME: string = "タイム";
// カウントダウンの秒数
export const COUNTDOWN_SEC: number = 3;
