<template>
    <div id="ranking">
        <p>ランキング(レベル: {{ level }})</p>
        <div
            v-for="(record, index) in displayRecords"
            :key="record.user_name + record.level"
            class="ranking_record"
        >
            <p>{{ index + 1 }}位：{{ record.user_name }}</p>
            <p>{{ getDisplayTime(record.time) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "@/stores/ConfigStore";
import { useRecordsStore } from "@/stores/RecordsStore";
import type { IRecord } from "@/util/types";
import { getDisplayTimeString } from "@/composables/Game";

const level = computed(() => useConfigStore().level);

// 表示する記録情報
const displayRecords = computed(() => {
    const records: IRecord[] = useRecordsStore().records;
    // 記録情報の中で、指定されたレベルのものだけを抽出
    console.log(records);
    const displayRecords = records.filter(
        (record) => record.level === level.value
    );
    // 時間が短い順に並び替え
    displayRecords.sort((a, b) => a.time - b.time);
    // 上位5件だけを表示
    return displayRecords.slice(0, 5);
});

// 時間を表示用の文字列に変換
const getDisplayTime = (time: number): string => {
    return getDisplayTimeString(time);
};

</script>

<style scoped>
#ranking {
    margin: 0 auto;
    width: 250px;
    text-align: center;
}
.ranking_record {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
</style>
