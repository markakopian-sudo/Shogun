/* script.js */
const audio = new Audio('assets/nights.mp3');
const playBtn = document.getElementById('playBtn');
const timeDisplay = document.getElementById('time');

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "PAUSE";
    } else {
        audio.pause();
        playBtn.innerText = "PLAY";
    }
}

// Update time display every second
audio.addEventListener('timeupdate', () => {
    const mins = Math.floor(audio.currentTime / 60);
    const secs = Math.floor(audio.currentTime % 60);
    timeDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
});

// Reset button when song ends
audio.addEventListener('ended', () => {
    playBtn.innerText = "PLAY";
});
