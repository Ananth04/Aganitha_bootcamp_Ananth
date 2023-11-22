document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
  
    textInput.addEventListener('input', function() {
      const text = textInput.value;
      const count = text.length;
      charCount.textContent = count;
    });
  });
  