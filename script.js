const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const suffix = counter.getAttribute('data-suffix') || '+';
  let count = 0;

  const updateCounter = () => {
    const increment = target / 100;

    if (count < target) {
      count += increment;
      if (suffix === '%') {
        counter.innerText = `${Math.round(count)}%`;
      } else {
        counter.innerText = `${Math.round(count)}+`;
      }
      requestAnimationFrame(updateCounter);
    } else {
      if (suffix === '%') {
        counter.innerText = `${target}%`;
      } else {
        counter.innerText = `${target}+`;
      }
    }
  };

  updateCounter();
});

function togglemenu(){


    if(document.getElementById('menu').style.display=='none'){
        console.log("object")
      document.getElementById('menu').style.display='block';
    }
    else{
      document.getElementById('menu').style.display='none';
        console.log("dfj")
    }
}


const toggleButtons = document.querySelectorAll('.toggle-btn');


toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const faqBox = button.closest('.faq-box');


    faqBox.classList.toggle('open');

    
    if (faqBox.classList.contains('open')) {
      button.textContent = '–';
    } else {
      button.textContent = '+';
    }
  });
});


