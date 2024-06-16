import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "iidx_online_time_record";

export const handler = async (event) => {
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        const scanCommand = new ScanCommand({ TableName: tableName });
        const { Items } = await dynamo.send(scanCommand);

        return {
            statusCode: 200,
            body: JSON.stringify({
                items: Items,
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
