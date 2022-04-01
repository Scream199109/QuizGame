const registration = document.querySelector('#registration');
const removeDiv = document.querySelector('#removeDiv');

registration?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    method, action, name, email, password,
  } = event.target;
  console.log(name, email, password);
  const response = await fetch('/reg', {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: name.value,
      userEmail: email.value,
      userPass: password.value,
    }),
  });
  const responseObj = await response.text();
  removeDiv.innerHTML = 'fdsfsfsd';
  if (response.status === 200) {
    window.location.assign('/');
  }
  if (response.status === 400) {
    window.location.assign('/error');
  }
});
