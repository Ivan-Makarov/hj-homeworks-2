'use strict';

let dropdownButtons = document.getElementsByClassName('wrapper-dropdown');

function showDropdown() {
    this.classList.toggle('active')
}

for (const button of dropdownButtons) {
    button.onclick = showDropdown;
}
