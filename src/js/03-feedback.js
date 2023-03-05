const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});
const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormState) {
  emailInput.value = savedFormState.email;
  messageInput.value = savedFormState.message;
}
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
