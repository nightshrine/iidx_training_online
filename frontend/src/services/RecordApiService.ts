import { RECORD_POST_API_URL } from "@/util/constants";
import { ApiService } from "./ApiService";
import type { IRecord } from "@/util/types";

/**
 *　記録情報に関するAPIを呼び出すサービス
 */
export class RecordApiService {
    /**
     * TODO: ランキング情報を取得するAPI
     */

    /**
     * 記録をDBに保存するAPI
     * @param record 記録情報
     */
    public static async recordPost(
        record: IRecord
    ): Promise<void> {
        const url = RECORD_POST_API_URL;
        await ApiService.callPostApi(url, record);
    }
}
