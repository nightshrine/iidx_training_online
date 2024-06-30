import { useConfigStore } from "./stores/ConfigStore";

export const init = () => {
    useConfigStore().init();
}