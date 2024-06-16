import type { IRecord } from "@/util/types";
import { defineStore } from "pinia";

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useRecordsStore = defineStore("records", {
    state: () => ({
        // 記録情報を保持する配列
        records: [] as IRecord[],
    }),
    actions: {
        setRecords(records: IRecord[]) {
            this.records = records;
        }
    },
});
