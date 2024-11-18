const counters = document.querySelectorAll('.counter');
const speed = 100; // Lower is faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target.toLocaleString(); // Format numbers
    }
  };

  const onScroll = () => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      updateCount();
      window.removeEventListener('scroll', onScroll); // Trigger only once
    }
  };

  window.addEventListener('scroll', onScroll);
});
