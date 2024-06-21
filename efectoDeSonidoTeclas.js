const buttons = document.querySelector(".buttons");
    buttons.addEventListener("click",() => {
        const sound = document.querySelector("#click1");
        sound.volume = 1;
        const playSound = sound.play();
    } )



