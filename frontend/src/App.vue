<template>
    <main>
        <!-- 設定 -->
        <Config />
        <!-- ゲーム画面 -->
        <GameField />
        <!-- 結果表示 -->
        <Result />
        <!-- カウントダウン -->
        <CountDown />
    </main>
    <!-- ランキングフォーム -->
    <RankingFormDialog v-if="isDisplayRankingForm" />
    <!-- キーバインド設定 -->
    <ConfigKeyBindDialog v-if="isDisplayConfigKeyBind" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import Config from "./components/Config.vue";
import GameField from "./components/GameField.vue";
import Result from "./components/Result.vue";
import CountDown from "./components/CountDown.vue";
import RankingFormDialog from "./components/RankingFormDialog.vue";
import ConfigKeyBindDialog from "./components/ConfigKeyBindDialog.vue";
import { useConfigStore } from "./stores/ConfigStore";
import { RecordsService } from "./services/RecordsService";
import { init } from "./Init";

// ランキングフォームの表示
const isDisplayRankingForm = computed(() => {
    return useConfigStore().isDisplayRankingForm;
});

// キーバインド設定の表示
const isDisplayConfigKeyBind = computed(() => {
    return useConfigStore().isDisplayConfigKeyBind;
});

// 記録情報をストアへ格納
RecordsService.initGetRecords();

// 初期化処理
init();
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    color: #dddddd;
    background-color: #222222;
}

main {
    width: 1200px;
    height: 780px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
    position: relative;
}
</style>
./stores/GameStore
