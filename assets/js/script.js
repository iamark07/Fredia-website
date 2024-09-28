// menu slider function

let menu_slider_val = true;
function menu_slider(){
    // let menu_btn = document.querySelectorAll(".menu_slider_icon");

    if(menu_slider_val){
        document.querySelector(".menu_slider_container").classList.add("left-0");
        menu_slider_val = false;
        console.log(menu_slider_val);
    }
}

function close_menu_slider(){
    // let menu_slider = true;
    if(menu_slider_val == false){
        document.querySelector(".menu_slider_container").classList.remove("left-0");
        menu_slider_val = true;
        console.log(menu_slider_val);
    }
}




// form validation 

function validateForm(event) {
    // Prevent form submission
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
  
    let isValid = true;
  
    // Validate Name
    if (name.length < 5) {
      nameError.classList.remove('hidden');
      isValid = false;
    } else {
      nameError.classList.add('hidden');
    }
  
    // Validate Email (basic regex pattern for email validation)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      emailError.classList.remove('hidden');
      isValid = false;
    } else {
      emailError.classList.add('hidden');
    }
  
    // Validate Message
    if (message.length < 10) {
      messageError.classList.remove('hidden');
      isValid = false;
    } else {
      messageError.classList.add('hidden');
    }
  
    // Submit form if valid
    if (isValid) {
      document.getElementById('contactForm').submit();
    }
  }
