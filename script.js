const targetDate = new Date(2025, 0, 1);

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector('.days').textContent = days.toString().padStart(2, '0');
  document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
  document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000); // Update every second
