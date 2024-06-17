import { RECORDS_GET_API_URL, RECORD_POST_API_URL } from "@/util/constants";
import { ApiService } from "./ApiService";
import type { IRecord } from "@/util/types";
import { RecordsService } from "./RecordsService";

interface IRecordsGetResponse {
    statusCode: number;
    body: string;
    header : {
        "Content-Type": string;
    };
}

/**
 *　記録情報に関するAPIを呼び出すサービス
 */
export class RecordApiService {
    /**
     * 記録情報を取得するAPI
     */
    public static async recordsGet(): Promise<IRecord[]> {
        const url = RECORDS_GET_API_URL;
        const data: IRecordsGetResponse = await ApiService.callGetApi(url);
        const body: string = data.body;
        const records = JSON.parse(body);
        return records.items;
    }

    /**
     * 記録をDBに保存するAPI
     * @param record 記録情報
     */
    public static async recordPost(record: IRecord): Promise<void> {
        const url = RECORD_POST_API_URL;
        await ApiService.callPostApi(url, record);
        await RecordsService.initGetRecords();
    }
}
