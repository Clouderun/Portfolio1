const cloudBtn = document.getElementById('nuvem');


function playSound(){
    const tocarAudio = new Audio(`./assets/audio/health-recharge.wav`);
    tocarAudio.volume = 0.1;
    tocarAudio.play();
}

cloudBtn.addEventListener('click', playSound);