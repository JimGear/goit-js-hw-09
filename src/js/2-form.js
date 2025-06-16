const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    if (parsedData.email) {
      form.elements.email.value = parsedData.email;
      formData.email = parsedData.email;
    }
    if (parsedData.message) {
      form.elements.message.value = parsedData.message;
      formData.message = parsedData.message;
    }
  } catch (e) {
    console.error('Помилка при читанні localStorage:', e);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Відправлено:', formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
