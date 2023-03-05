import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener(
  'input',
  throttle(() => {
    const formState = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500)
);

const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state'));
emailInput.value = savedFormState?.email ?? '';
messageInput.value = savedFormState?.message ?? '';

feedbackForm.addEventListener('submit', event => {
  console.log('Form data:', {
    email: emailInput.value,
    message: messageInput.value,
  });

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  event.preventDefault();
});
