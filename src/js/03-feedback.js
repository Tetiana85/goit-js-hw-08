import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleInputData, 500));
form.addEventListener('submit', handleSubmitForm);

let formData = JSON.parse(localStorage.getItem(KEY_STORAGE)) || {};
const { email, message } = form.elements;
loadFormData();

function handleInputData(event) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function loadFormData() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function handleSubmitForm(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля!`);
  }

  localStorage.removeItem(KEY_STORAGE);
  form.reset();
  formData = {};
}




