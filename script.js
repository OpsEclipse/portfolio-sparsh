const scrollbtn = document.getElementById("downBtn");

scrollbtn.addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
})