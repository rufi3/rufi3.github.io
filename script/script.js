var observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    var naslov1 = entry.target.querySelector('.naslov-1');
    var naslov3 = entry.target.querySelector('.naslov-3');

    if (entry.isIntersecting) {
      naslov1.classList.add('naslov-1-anim');
      naslov3.classList.add('naslov-3-anim');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    naslov1.classList.remove('naslov-1-anim');
    naslov3.classList.remove('naslov-3-anim');
  });
});

observer1.observe(document.querySelector('.obs1'));

var observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    var naslov4 = entry.target.querySelector('.naslov-4');

    if (entry.isIntersecting) {
      naslov4.classList.add('naslov-4-anim');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    naslov4.classList.remove('naslov-4-anim');
  });
});

observer2.observe(document.querySelector('.obs2'));

var observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    var naslov5 = entry.target.querySelector('.naslov-5');

    if (entry.isIntersecting) {
      naslov5.classList.add('naslov-5-anim');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    naslov5.classList.remove('naslov-5-anim');
  });
});

observer3.observe(document.querySelector('.obs3'));

var observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    var naslov6 = entry.target.querySelector('.naslov-6');

    if (entry.isIntersecting) {
      naslov6.classList.add('naslov-6-anim');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    naslov6.classList.remove('naslov-6-anim');
  });
});

observer4.observe(document.querySelector('.obs4'));

var observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    var naslov7 = entry.target.querySelector('.naslov-7');

    if (entry.isIntersecting) {
      naslov7.classList.add('naslov-7-anim');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    naslov7.classList.remove('naslov-7-anim');
  });
});

observer5.observe(document.querySelector('.obs5'));
