<template>
    <div class="black-back">
        <div id="ranking-form-dialog">
            <h2>ランキングに登録</h2>
            <div
                class="game-result"
                v-for="(value, key) in gameResultList"
                :key="key"
            >
                <p>{{ key }}：</p>
                <p>{{ value }}</p>
            </div>
            <div id="ranking-form">
                <input type="text" placeholder="名前" v-model="registerRankingName" />
                <button id="ranking-form-submit" @click="RankingFormSubmit">
                    登録
                </button>
            </div>
            <button id="ranking-form-cancel" @click="RankingFormClose">
                登録しない
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "../stores/ConfigStore";
import { useGameStore } from "../stores/GameStore";
import { TIME } from "@/util/constants";
import { getDisplayString } from "@/composables/Game";
import { ref } from "vue";

const gameResultList = {
    level: useConfigStore().level,
    time: getDisplayString(TIME, useGameStore().time),
};

// ランキングに登録する名前
const registerRankingName = ref("");

// ランキングに登録する処理
const RankingFormSubmit = () => {
    // TODO: ランキングに登録する処理
    console.log(registerRankingName.value);
    RankingFormClose();
}

// ランキングフォームを閉じる
const RankingFormClose = () => {
    useConfigStore().setIsDisplayRankingForm(false);
}
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
    padding: 20px;
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
#ranking-form #ranking-form-submit {
    width: 50px;
    height: 30px;
    border: 1px solid #222222;
    border-radius: 5px;
    background-color: #222222;
    color: #ffffff;
    cursor: pointer;
}
#ranking-form-dialog #ranking-form-cancel {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #707070;
    color: #ffffff;
    cursor: pointer;
}
</style>
