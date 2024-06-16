import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    PutCommand,
    GetCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "iidx_online_time_record";

export const handler = async (event, context) => {
    const headers = {
        "Content-Type": "application/json",
    };

    // クライアントからのデータの受け取り
    const { user_name, level, time } = event;
    const params = {
        TableName: tableName,
        Key: {
            user_name: user_name,
            level: level,
        },
    };

    try {
        // レコードを更新する
        const updateParams = {
            TableName: tableName,
            Item: {
                user_name: user_name,
                level: level,
                time: time,
            },
        };
        const putCommand = new PutCommand(updateParams);
        await dynamo.send(putCommand);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "レコードを正常に更新できました",
            }),
            headers,
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "エラーが発生しました",
            }),
            headers,
        };
    }
};
