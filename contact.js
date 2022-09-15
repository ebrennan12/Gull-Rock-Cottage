function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 




function handleContactFormSubmission(event) {
  event.preventDefault();
  
  let firstNameInput = event.target['name[first]'];
  let firstName = firstNameInput.value;
  
  let firstNameErrorContainer = document.querySelector('.first-name-error');
  if (firstName.length <= 0) {
    firstNameErrorContainer.innerText = 'First name cannot be empty.';
  } else {
    firstNameErrorContainer.innerText = '';
  }
  
  let lastNameInput = event.target['name[last]'];
  let lastName = lastNameInput.value;
  
  let lastNameErrorContainer = document.querySelector('.last-name-error');
  if (lastName.length <= 0) {
    lastNameErrorContainer.innerText = 'Last name cannot be empty.';
  } else {
    lastNameErrorContainer.innerText = '';
  }
  
  
  let phoneNumberInput = event.target['phone[number]'];
  let phoneNumber = phoneNumberInput.value;
  
  let phoneNumberErrorContainer = document.querySelector('.phone-number-error');
  if (phoneNumber.length <= 0) {
    phoneNumberErrorContainer.innerText = 'Phone number cannot be empty.';
  } else {
    phoneNumberErrorContainer.innerText = '';
  }
  
  
  let emailInput = event.target['email[address]'];
  let email = emailInput.value;
  
  let emailErrorContainer = document.querySelector('.email-error');
  if (email.length <= 0) {
    emailErrorContainer.innerText = 'Email cannot be empty.';
  } else {
    emailErrorContainer.innerText = '';
  }
  
  
  let messageInput = event.target['message'];
  let message = messageInput.value;
  
  let messageErrorContainer = document.querySelector('.message-error');
  if (email.length <= 0) {
    messageErrorContainer.innerText = 'Message cannot be empty.';
  } else {
    messageErrorContainer.innerText = '';
  }
  
  
}

let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleContactFormSubmission);
