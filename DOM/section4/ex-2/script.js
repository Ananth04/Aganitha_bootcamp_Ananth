document.addEventListener('DOMContentLoaded', function() {
    const myForm = document.getElementById('myForm');
  
    myForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(myForm);
      const formObject = {};
  
      for (let [key, value] of formData.entries()) {
        formObject[key] = value;
      }
  
      console.log(formObject);
    });
  });
  