import axios, { type AxiosResponse } from "axios";

/**
 * APIに関する処理を行う
 */
export class ApiService {
    /**
     * GET APIを実行
     */
    public static async callGetApi<T>(url: string): Promise<T> {
        return axios
            .get(url)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }
    /**
     * POST APIを実行
     */
    public static async callPostApi<T>(url: string, data: T): Promise<void> {
        return axios
            .post(url, data)
            .then((response: any) => {
                console.log(response);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }
}
