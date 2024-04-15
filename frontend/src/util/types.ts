export interface IConfigInputDict {
    [key: string]: number;
}

export interface IConfigInputToPinia {
    title: string;
    setNotes: (distance: number) => void;
    defaultValue: number;
}
