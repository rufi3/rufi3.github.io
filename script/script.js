const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const naslov1 = entry.target.querySelector('.naslov-1');
    const naslov3 = entry.target.querySelector('.naslov-3');

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

observer.observe(document.querySelector('.naslov'));
