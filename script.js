document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = Math.ceil(target / 200); // Adjust speed here

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 10); // Timing between increments
      } else {
        counter.innerText = target; // Ensure exact value at the end
      }
    };

    updateCount();
  });
});
