<template>
    <div class="black-back">
        <div id="config-key-bind-dialog">
            <h2>キーバインド設定</h2>
            <!-- フォーカス当たってるときに関数実行 -->
            <ConfigAutoInputString
                v-for="keyBind in configKeyBindList"
                :key="keyBind.keyTitle"
                :title="keyBind.keyTitle"
                v-model:value="keyBind.keyName"
            />
            <button id="config-key-bind-save" @click="configKeyBindSave">
                保存
            </button>
            <button id="config-key-bind-cancel" @click="configKeyBindClose">
                キャンセル
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "../stores/ConfigStore";
import { onMounted, ref } from "vue";
import ConfigAutoInputString from "./config/ConfigAutoInputString.vue";

onMounted(() => {
    // 一番最初のキーバインド設定にフォーカス
    document.getElementById("key1")?.focus();
});

interface IConfigKeyBind {
    keyTitle: string;
    keyName: string;
}

// キーバインド
const configKeyBindList = ref<IConfigKeyBind[]>([
    { keyTitle: "key1", keyName: useConfigStore().keyBindList[0] },
    { keyTitle: "key2", keyName: useConfigStore().keyBindList[1] },
    { keyTitle: "key3", keyName: useConfigStore().keyBindList[2] },
    { keyTitle: "key4", keyName: useConfigStore().keyBindList[3] },
    { keyTitle: "key5", keyName: useConfigStore().keyBindList[4] },
    { keyTitle: "key6", keyName: useConfigStore().keyBindList[5] },
    { keyTitle: "key7", keyName: useConfigStore().keyBindList[6] },
]);

// キーバインド設定を保存
const configKeyBindSave = () => {
    const keyBindList = configKeyBindList.value.map(
        (keyBind) => keyBind.keyName
    );
    useConfigStore().setKeyBindList(keyBindList);
    configKeyBindClose();
};

// キーバインド設定画面を閉じる
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

#config-key-bind-dialog #config-key-bind-save {
    width: 100px;
    height: 30px;
    margin-top: 20px;
    margin-right: 40px;
    border: none;
    border-radius: 5px;
    background-color: #222222;
    color: #ffffff;
    cursor: pointer;
}

#config-key-bind-dialog #config-key-bind-cancel {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #707070;
    color: #ffffff;
    cursor: pointer;
}
</style>
