// Direct link to the audio source
const audioUrl = 'https://archive.org/download/frank-ocean-nights/Frank%20Ocean%20-%20Nights.mp3';
const audio = new Audio(audioUrl);
const playBtn = document.getElementById('playBtn');
const timeDisplay = document.getElementById('time');

// Set initial button text
playBtn.innerText = "PLAY";

function toggleMusic() {
    if (audio.paused) {
        // Simple play command
        audio.play().catch(e => {
            console.error("Playback error:", e);
            playBtn.innerText = "ERROR";
        });
        playBtn.innerText = "PAUSE";
    } else {
        audio.pause();
        playBtn.innerText = "PLAY";
    }
}

// Keep the time counter moving
audio.addEventListener('timeupdate', () => {
    const mins = Math.floor(audio.currentTime / 60);
    const secs = Math.floor(audio.currentTime % 60);
    timeDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
});

// Reset if the song finishes
audio.addEventListener('ended', () => {
    playBtn.innerText = "PLAY";
});
