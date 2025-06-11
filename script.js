const scrollbtn = document.getElementById("downBtn");
const mainTxt = document.getElementById('main-txt');

scrollbtn.addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
})

let i = 0;
let txt = 'Hey, My name is Sparsh.';
let speed;

const typewriter = () => {
  if (i < txt.length) {
    let char = txt.charAt(i);
    if (char != ' '){
      speed = 100;
    }
    else{
      speed = 300;
    }
    
    console.log(speed);
    mainTxt.innerHTML += char;
    i++;
    setTimeout(typewriter, speed);
  }
}
document.addEventListener('DOMContentLoaded', () => typewriter());


