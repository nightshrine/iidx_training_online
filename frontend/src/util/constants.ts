// レーンの数
export const LANE_NUM = 7;
// モードの種類
export enum Mode {
    FREE_MODE = "FREE",
    RANKING_MODE = "RANKING",
}
// レベルの種類
export enum Level {
    EASY = "EASY",
    NORMAL = "NORMAL",
    HARD = "HARD",
}
// ノーツ描画の範囲
export const NOTE_MOTION_RANGE = 624;
// ノーツの高さ
export const NOTE_HEIGHT = 10;
// レーンに対応するボタンキーコード
export const BUTTON_KEY = ["Control", "a", "s", "o", ".", "-", "["];
// フリーモードを表す文字列
export const FREE_MODE = "FREE";
// 設定の初期値
export const ConfigDefault = {
    // Freeモードの初期値
    FREE: {
        QUESTION_NUM: 15,
        NOTES1_RATE: 0,
        NOTES2_RATE: 2,
        NOTES3_RATE: 0,
        NOTES4_RATE: 0,
        NOTES5_RATE: 0,
        NOTES6_RATE: 0,
    },
    // Easyの初期値
    EASY: {
        QUESTION_NUM: 30,
        NOTES1_RATE: 1,
        NOTES2_RATE: 1,
        NOTES3_RATE: 0,
        NOTES4_RATE: 0,
        NOTES5_RATE: 0,
        NOTES6_RATE: 0,
    },
    // Normalの初期値
    NORMAL: {
        QUESTION_NUM: 50,
        NOTES1_RATE: 1,
        NOTES2_RATE: 2,
        NOTES3_RATE: 2,
        NOTES4_RATE: 0,
        NOTES5_RATE: 0,
        NOTES6_RATE: 0,
    },
    // Hardの初期値
    HARD: {
        QUESTION_NUM: 100,
        NOTES1_RATE: 0,
        NOTES2_RATE: 1,
        NOTES3_RATE: 2,
        NOTES4_RATE: 2,
        NOTES5_RATE: 1,
        NOTES6_RATE: 0,
    },
};
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

// レコードを保存するAPIのURL
export const RECORD_POST_API_URL = "https://30pflty4l9.execute-api.ap-northeast-1.amazonaws.com/develop/post_record";
// レコードを一括取得するAPIのURL
export const RECORDS_GET_API_URL = "https://30pflty4l9.execute-api.ap-northeast-1.amazonaws.com/develop/get_records";
