// инициализация
export function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger);
  modal = document.querySelector(modal);
  close = document.querySelector(close);

  const body = document.body;
  if (trigger != null) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
      body.classList.add('locked');
    });
  }
  close.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('locked');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('locked');
    }
  });
}

// вызов
flsFunctions.bindModal('trigger-selector', 'modal-selector', 'close-selecor');
