function changeFontSize() {
    var slider = document.getElementById('textSizeSlider');
    var textParagraph = document.getElementById('resizableText');
    var fontSize = slider.value;
  
    textParagraph.style.fontSize = fontSize + 'em';
}

document.getElementById('textSizeSlider').addEventListener('input', changeFontSize);
  