<template>
    <div class="black-back">
        <div id="ranking-form-dialog">
            <h2>ランキングに登録</h2>
            <div class="game-result" v-for="(value, key) in gameResultList" :key="key">
                <p>{{ key }}：</p>
                <p>{{ value }}</p>
            </div>
            <form id="ranking-form">
                <input type="text" placeholder="名前" />
                <button type="submit">送信</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "../stores/ConfigStore";
import { useGameStore } from "../stores/GameStore";
import { TIME } from "@/util/constants";
import { getDisplayString } from "@/composables/Game";

const gameResultList = {
    level: useConfigStore().level,
    time: getDisplayString(TIME, useGameStore().time),
};
</script>

<style scoped>
.black-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
#ranking-form-dialog {
    width: 300px;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 7px 7px 20px #222222;
    color: #222222;
    animation: fadeIn 0.5s;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.game-result {
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 23px;
    max-width: 50%;
    justify-content: space-between;
    margin-bottom: 10px;
}

#ranking-form {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#ranking-form input {
    width: 150px;
    height: 30px;
    border: 1px solid #222222;
    border-radius: 5px;
    margin-right: 10px;
    padding: 0 10px;
}
#ranking-form button {
    width: 50px;
    height: 30px;
    border: 1px solid #222222;
    border-radius: 5px;
    background-color: #222222;
    color: #ffffff;
    cursor: pointer;
}

</style>
