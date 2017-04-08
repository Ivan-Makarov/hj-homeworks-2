'use strict';

let buttons = document.getElementsByClassName('drum-kit__drum');

for (let button of buttons) {
    let player = button.getElementsByTagName('audio')[0];
    button.onclick = () => {
        player.play();
    }
}
