// ==UserScript==
// @name        Discord Direct Video Embed v2
// @description Embed MP4 videos in Discord.
// @namespace   Violentmonkey Scripts
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require     https://raw.githubusercontent.com/pie6k/jquery.initialize/master/jquery.initialize.min.js
// @match       *://discordapp.com/*
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==
$(document.body).on('click', '.video' ,function(){
    if (this.paused === false) {
        this.pause();
    } else {
        this.play();
    }
});

$("a[class^='filename']").initialize( function(){
    if ($(this).attr('href').endsWith(".mp4")) {
        var videoPlayer = document.createElement('video');
        videoPlayer.src = $(this).attr('href');
        videoPlayer.setAttribute('controls', 'controls');
        videoPlayer.setAttribute('class', 'video');
        videoPlayer.setAttribute('loop', true);
        videoPlayer.setAttribute('style', 'max-width: 500px; max-height: 500px; border-radius: 3px;');
        $(this).parent().parent().after(videoPlayer);
    }

});