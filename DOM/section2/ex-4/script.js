function handleKeyPress(event) {
    var keyPressed = event.key;
    if (keyPressed.toLowerCase() === 'a') {
      alert('The "A" key was pressed.');
    }
}
  
document.addEventListener('keydown', handleKeyPress);
  