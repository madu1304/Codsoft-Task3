document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.bar');
  const buttons = document.querySelectorAll('.inputs button');

  let currentInput = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent.trim();

      if (value === 'AC') {
        currentInput = '';
      } else if (value === 'ANS') {
        try {
          currentInput = eval(currentInput).toString();
        } catch {
          currentInput = 'Error';
        }
      } else {
        currentInput += value;
      }

      display.textContent = currentInput;
    });
  });
});
