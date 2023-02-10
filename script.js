window.onload = () => {
  
  let heart = 3;
  
  const input = document.querySelector('.input');
  const boxes = document.querySelectorAll('.box');
  const generateBtn = document.querySelector('#generate-btn');
  
  function startGames() {
    const color = hexColorGenerator();
    input.value = color;
    setColorBox(color);
    return color;
  }
  
  let result = startGames();
  
  function hexColorGenerator() {
    let str = '0123456789abcdef';
    let result = '#';
    for (let i = 0; i < 6; i++) {
      result += str[Math.floor(Math.random() * str.length)];
    }
    return result.toLowerCase();
  }
  
  function setColorBox(color) {
    boxes.forEach(box => {
      box.style.background = hexColorGenerator();
      box.setAttribute('data-color', hexColorGenerator());
    });
    
    const box = boxes[Math.floor(Math.random() * boxes.length)];
    box.style.background = color;
    box.setAttribute('data-color', color);
  }
  
  boxes.forEach(box => {
    box.addEventListener('click', function() {
      const data = this.dataset.color;
      const check = getResult(data, result);
      if (check == true) alert(`your heart : ${heart} times again!`);
      if (heart == 0) {
        alert('game over! you lose!');
        playAgain();
      }
    });
  });
  
  function getResult(color, result) {
    if (color == result) {
      alert(`congratulation! the right color is ${color}`);
      playAgain();
    } else if (color != result) {
      alert('wrong color! please try again!');
      heart--;
      return true;
    }
  }
  
  function playAgain() {
    const ask = confirm('do you want to play again?');
    if (ask == true) {
      heart = 3;
      result = startGames();
    } else {
      alert('thanks for playing with us!');
    }
  }
  
  generateBtn.addEventListener('click', function() {
    startGames();
  });

}