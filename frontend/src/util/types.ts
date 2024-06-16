export interface IConfigInputDict {
    [key: string]: number;
}

export interface IConfigInputToPinia {
    title: string;
    setNotes: (distance: number) => void;
    defaultValue: number;
}

// 型情報を抽出する方法があるはず
export type ILevel = "EASY" | "NORMAL" | "HARD";
export type IMode = "FREE" | "RANKING";
export type IDataName = ILevel | "FREE";

// 記録を送る
export interface IRecord {
    user_name: string;
    level: ILevel;
    time: number;
}
