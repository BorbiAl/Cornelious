const muteButton = document.getElementById('mute-button');
const muteButtonIcon = document.getElementById('mute-button-icon');
const info = document.getElementById('info');
let mode = 'mute';

const muteToggle = () => {
    if (mode === 'unmute') {
        muteButton.classList.remove('muted');
        muteButtonIcon.classList.add('unmuted');
        muteButtonIcon.classList.remove('muted');
        muteButtonIcon.src = '/static/images/unmute.png';
        info.textContent = 'You are unmuted';
        mode = 'mute';
    } else {
        muteButton.classList.add('muted');
        muteButtonIcon.classList.remove('unmuted');
        muteButtonIcon.classList.add('muted');
        muteButtonIcon.src = '/static/images/mute.png';
        info.textContent = 'You are muted';
        mode = 'unmute';
    }
}

muteButton.onclick = muteToggle;