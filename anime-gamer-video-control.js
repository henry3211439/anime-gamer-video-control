// ==UserScript==
// @name         巴哈姆特動畫瘋影片控制
// @namespace    https://github.com/henry3211439
// @version      1.0.0
// @description  Allow to control video with keyboard in ani.gamer.com.tw
// @author       Terafony
// @license      GNU GPLv3
// @match        https://ani.gamer.com.tw/animeVideo.php?sn=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gamer.com.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 播放/暫停
    function togglePlayVideo(e) {
        // Checking press key is K
        if (e.which !== 75) return;

        // Simulate button click
        document.getElementsByClassName("vjs-play-control")[0].click();
    }

    // 啟用/停用「劇院模式」
    function toggleTheaterMode(e) {
        // Check keycode is key T
        if (e.which !== 84) return;

        // Simulate button click
        document.getElementsByClassName("vjs-indent-button")[0].click();
    }

    // 啟用/停用「全螢幕」
    function toggleFullscreen(e) {
        // Check keycode is key F
        if (e.which !== 70) return;

        // Simulate button click
        document.getElementsByClassName("vjs-fullscreen-control")[0].click();
    }

    // 調整影片播放速度
    function changeSpeedRate(e) {
        // Check keycode is key [ or ]
        if (e.which !== 219 && e.which !== 221) return;

        const menuDOM        =       document.getElementsByClassName("vjs-playback-rate")[0];
        const menuContentDOM =        menuDOM.getElementsByClassName("vjs-menu-content")[0];
        const listDOM        = menuContentDOM.getElementsByClassName("vjs-menu-item");

        // Default speed 1.0
        var selectedSpeedIndex = 4;

        // Get selected speed rate
        for (let i = 0; i < listDOM.length; i++)
            selectedSpeedIndex = (listDOM[i].className.includes("vjs-selected")) ? i : selectedSpeedIndex;

        // Press [ to speed up
        // Press ] to speed down
        if      (e.which === 219)
            selectedSpeedIndex = (selectedSpeedIndex <= 0)                    ? 0                    : (selectedSpeedIndex - 1);
        else if (e.which === 221)
            selectedSpeedIndex = (selectedSpeedIndex >= (listDOM.length - 1)) ? (listDOM.length - 1) : (selectedSpeedIndex + 1);

        listDOM[selectedSpeedIndex].click();
    }


    // 開啟/關閉「彈幕」
    function toggleBulletScreen(e) {
        // Checking press key is C
        if (e.which !== 67) return;

        // Simulate button click
        document.getElementsByClassName("vjs-danmu-button")[0].click();
    }

    // 開啟/關閉「靜音」
    function toggleMute(e) {
        // Checking press key is M
        if (e.which !== 77) return;

        // Simulate button click
        document.getElementsByClassName("vjs-mute-control")[0].click();
    }

    // 上一集
    function prevEpisode(e) {
        // Checking press key is SHIFT+P
        if (e.which !== 80 || e.shiftKey !== true) return;

        // Simulating button click
        const prev = document.getElementsByClassName("vjs-pre-button")[0];

        // Check if the episode is first episode
        if (prev === undefined) return;

        prev.click();
    }

    // 上一集
    function nextEpisode(e) {
        // Checking press key is SHIFT+N
        if (e.which !== 78 || e.shiftKey !== true) return;

        // Simulating button click
        const next = document.getElementsByClassName("vjs-next-button")[0];

        // Check if the episode is first episode
        if (next === undefined) return;

        next.click();
    }

    // 偵測鍵盤事件
    document.addEventListener("keydown", toggleTheaterMode);
    document.addEventListener("keydown", toggleFullscreen);

    document.addEventListener("keydown", togglePlayVideo);
    document.addEventListener("keydown", changeSpeedRate);
    document.addEventListener("keydown", toggleBulletScreen);
    document.addEventListener("keydown", toggleMute);

    document.addEventListener("keydown", prevEpisode);
    document.addEventListener("keydown", nextEpisode);
})();
