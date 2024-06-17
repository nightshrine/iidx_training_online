import type { IRecord } from "@/util/types";
import { RecordApiService } from "./RecordApiService";
import { useRecordsStore } from "@/stores/RecordsStore";

/**
 * 記録情報に関するクラス
 */
export class RecordsService {
    /**
     * 記録情報を取得し、ストアにセットする
     */
    public static async initGetRecords(): Promise<void> {
        const records = await RecordApiService.recordsGet();
        useRecordsStore().setRecords(records);
    }
}
