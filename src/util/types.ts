export interface IConfigInput {
    [key: string]: number;
}

export interface IConfigInputToPinia {
    title: string;
    setNotes: (distance: number) => void;
    defaultValue: number;
}