<template>
    <div class="black-back">
        <div id="config-key-bind-dialog">
            <h2>キーバインド設定</h2>
            <button id="config-key-bind-cancel" @click="configKeyBindClose">
                キャンセル
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "../stores/ConfigStore";
import { ref } from "vue";

const configKeyBindClose = () => {
    useConfigStore().setIsDisplayConfigKeyBind(false);
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
#config-key-bind-dialog {
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

#config-key-bind-dialog #ranking-form-cancel {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #707070;
    color: #ffffff;
    cursor: pointer;
}
</style>
