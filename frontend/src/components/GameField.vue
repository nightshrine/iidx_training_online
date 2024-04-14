<template>
    <div id="game-display">
        <div id="red-line"></div>
        <!-- レーン部分 -->
        <div id="game-lane">
            <Lane color="white" :lane-num="0" />
            <Lane color="blue" :lane-num="1" />
            <Lane color="white" :lane-num="2" />
            <Lane color="blue" :lane-num="3" />
            <Lane color="white" :lane-num="4" />
            <Lane color="blue" :lane-num="5" />
            <Lane color="white" :lane-num="6" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Lane from "../game/Lane.vue";



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
