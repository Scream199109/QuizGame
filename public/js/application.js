const test = document.getElementById('testB');
const test1 = test.textContent.trim().split('\n');
const test3 = test1.map((el) => el.split(','));
// console.log(test3[0])

const cardDiv = document.querySelector('.cardContainer');
const hre = document.createElement('div');
hre.innerHTML = `
<div class="card">
  <div class="card__topic">
    <h2></h2>
  </div>
  <div class="card__question">
    <p>${test3[0][0]}</p>
  </div>
  <div class="card__input">
    <input type="text" class="inp-card" id='curAnswer'>
  </div>
  <div class="card__btn">
    <button class="card-btn" id='nextQuestion'> <span> GAME ON
      </span></button>
  </div>
</div>
`;
cardDiv.appendChild(hre)
const anser = document.getElementById('curAnswer');
const next = document.getElementById('nextQuestion');
const output = document.querySelector('.outputAnswer');

let countTrue = 0;
next?.addEventListener('click', () => {
 console.log(test3)
  if (anser.value === test3[0][1]) {
    countTrue++;
    output.innerHTML = `Правильный ответ: ${test3[0][1]}, ваш счетчик: ${countTrue}`;
    setTimeout(()=>{
      hre.innerHTML = `
      <div class="card">
        <div class="card__topic">
          <h2></h2>
        </div>
        <div class="card__question">
          <p>${test3[1][0]}</p>
        </div>
        <div class="card__input">
          <input type="text" class="inp-card">
        </div>
        <div class="card__btn">
          <button class="card-btn" id='nextQuestion'> <span> GAME ON
            </span></button>
        </div>
      </div>
    `
    },5000);
  }
  else {
    output.innerHTML = `Правильный ответ: ${test3[0][1]}, ваш счетчик: ${countTrue}`;
    setTimeout(()=>{
      hre.innerHTML = `
      <div class="card">
        <div class="card__topic">
          <h2></h2>
        </div>
        <div class="card__question">
          <p>${test3[1][0]}</p>
        </div>
        <div class="card__input">
          <input type="text" class="inp-card">
        </div>
        <div class="card__btn">
          <button class="card-btn" id='nextQuestion'> <span> GAME ON
            </span></button>
        </div>
      </div>
    `
    },5000);
  }
  }
});
