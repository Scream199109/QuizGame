const showBtn = document.getElementById('showBtn');
const startOne = document.getElementById('startOne');
const content = document.getElementById('list');

showBtn.addEventListener('click', async () => {
  showBtn.innerText = 'Больше не кликай!';
  const response = await fetch('/show');
  const data = await response.json();
  // console.log(data)
  for (let i = 0; i < data.length; i++) {
    const item = document.createElement('li');
    item.innerHTML = data[i].topicName;
    content.appendChild(item);
  }
});

startOne.addEventListener('click', async () => {
  const response = await fetch('/showOne');
  const data = await response.json();
  const test = document.createElement('div');
  // console.log(data)
  test.textContent = data[0].question;
  content.appendChild(test);
});
