<template>
    <div id="game-display">
        <div id="red-line"></div>
        <!-- レーン部分 -->
        <div id="game-lane">
            <Lane
                v-for="lane in lanes"
                :key="lane.laneNum"
                :color="lane.color"
                :lane-num="lane.laneNum"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ILane } from "@/util/types";
import Lane from "@/components/game/Lane.vue";

const lanes: ILane[] = [
    { color: "white", laneNum: 0 },
    { color: "blue", laneNum: 1 },
    { color: "white", laneNum: 2 },
    { color: "blue", laneNum: 3 },
    { color: "white", laneNum: 4 },
    { color: "blue", laneNum: 5 },
    { color: "white", laneNum: 6 },
];
</script>

<style scoped>
#game-display {
    height: 100%;
    position: relative;
}

#red-line {
    width: 474px;
    position: absolute;
    border-bottom: 1px solid #dd0000;
    top: 619px;
    left: 2px;
    z-index: 1;
}

#game-lane {
    height: 100%;
    border-right: 1px solid #dddddd;
    border-left: 2px solid #dddddd;
    border-bottom: 2px solid #dddddd;
    display: flex;
}

#game-lane .note-display {
    border-right: 1px solid #dddddd;
    position: relative;
}

#one-note-display,
#three-note-display,
#five-note-display,
#seven-note-display {
    width: 72px;
    background-color: #2d2d2d;
}
#two-note-display,
#four-note-display,
#six-note-display {
    width: 60px;
}

#one-note-display .note,
#three-note-display .note,
#five-note-display .note,
#seven-note-display .note {
    margin: 0 auto;
    width: 68px;
    height: 10px;
    position: absolute;
    left: 2px;
    background-color: #dddddd;
    z-index: 0;
}
#two-note-display .note,
#four-note-display .note,
#six-note-display .note {
    margin: 0 auto;
    width: 56px;
    height: 10px;
    position: absolute;
    left: 2px;
    background-color: #4973ff;
    z-index: 0;
}
</style>
