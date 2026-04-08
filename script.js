/* script.js */
// Using a direct link to the audio file so you don't have to upload it
const audio = new Audio('https://files.catbox.moe/97p9v6.mp3'); 
const playBtn = document.getElementById('playBtn');
const timeDisplay = document.getElementById('time');

function toggleMusic() {
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Playback failed. Click the button again.");
        });
        playBtn.innerText = "PAUSE";
    } else {
        audio.pause();
        playBtn.innerText = "PLAY";
    }
}

// Update time display
audio.addEventListener('timeupdate', () => {
    const mins = Math.floor(audio.currentTime / 60);
    const secs = Math.floor(audio.currentTime % 60);
    timeDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
});

audio.addEventListener('ended', () => {
    playBtn.innerText = "PLAY";
});
