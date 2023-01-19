// Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//     get: function () {
//         return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//     }
// });

// const videoElement = document.getElementById('backgroundVideo');

//     console.log(videoElement);
//     videoElement.addEventListener('suspend', () => {
//         // suspend invoked
//         // show play button
//         // iphone is in low power mode
//         videoElement.play();
//     });

//     videoElement.addEventListener('play', () => {
//         // video is played
//         // remove play button UI
//         // iphone is not in low power mode
//     });