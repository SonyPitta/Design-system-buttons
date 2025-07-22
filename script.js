document.querySelectorAll('.btn').forEach(button => {
  if (!button.disabled) {
    button.addEventListener('click', () => {
      alert(`You clicked: ${button.textContent}`);
    });
  }
});
