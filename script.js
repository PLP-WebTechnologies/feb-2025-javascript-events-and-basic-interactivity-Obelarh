const button = document.getElementById('button');
const hoverButton = document.getElementById('hoverButton');

button.addEventListener('click', () => {
  alert('Button clicked!');
});

hoverButton.addEventListener('mouseover', () => {
  hoverButton.style.backgroundColor = 'green';
  hoverButton.style.color = 'white';
});

hoverButton.addEventListener('mouseout', () => {
  hoverButton.style.backgroundColor = 'blue';
  hoverButton.style.color = 'white';
});


document.addEventListener('keydown', function(event) {
    const output = document.getElementById('key-output');
    output.textContent = `You pressed: ${event.key}`;
});


const Dbutton = document.getElementById('myButton');
Dbutton.addEventListener('dblclick', function() {
    alert('Double Click Detected!');
});

const ChangeTextColor = document.getElementById('change');
ChangeTextColor.addEventListener('click', function() {
    const text = document.getElementById('magic');
    if (text.style.color === 'black' && text.textContent === 'This is magic!') {
        text.style.color = 'red';
        text.textContent = 'I will be a great programmer!';
    }
    else {
        text.style.color = 'black';
        text.textContent = 'This is magic!';
    }
});



let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});


  const form = document.getElementById('myForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const formSuccess = document.getElementById('formSuccess');

  // Validation Functions
  function validateName() {
    if (nameInput.value.trim() === '') {
      nameError.style.display = 'block';
      return false;
    } else {
      nameError.style.display = 'none';
      return true;
    }
  }

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = 'block';
      return false;
    } else {
      emailError.style.display = 'none';
      return true;
    }
  }

  function validatePassword() {
    if (passwordInput.value.length < 8) {
      passwordError.style.display = 'block';
      return false;
    } else {
      passwordError.style.display = 'none';
      return true;
    }
  }

  // Real-time Feedback
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

  // Form Submit
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
      formSuccess.style.display = 'block';
      form.reset();
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 3000);
    }
  });