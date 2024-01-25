<template>
    <main>
        <!-- 設定 -->
        <Config />
        <!-- ゲーム画面 -->
        <GameField />
        <!-- 結果表示 -->
        <!-- <Result /> -->
    </main>
</template>

<script setup lang="ts">
import Config from "./components/Config.vue";
import GameField from "./components/GameField.vue";
// import Result from './components/Result.vue'
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    color: #dddddd;
    background-color: #222222;
}

main {
    width: 1000px;
    height: 780px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
}
</style>
./stores/GameStore
