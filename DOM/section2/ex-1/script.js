const para= document.getElementById('WWorld');

function changeColor() {
    para.style.color = 'green';
}

function revertColor() {
    para.style.color = 'black';
}

para.addEventListener("mouseover", changeColor);
para.addEventListener("mouseout", revertColor);