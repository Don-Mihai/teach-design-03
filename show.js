// 'usestrict'
import { createAlert } from './utils.js';

const button = document.getElementById('more');

// button.onclick = () => {
//     const div = createAlert();

//     // установка таймера, для удаления алерта
//     // первый таймер
//     let id = setTimeout(() => div.remove(), 3000);

//     // очистка
//     div.onmouseover = () => {
//         // clearTimeout(id)
//         div.classList.remove('hideModal')
//     };

//     // повторный вызов, другого таймера с другим айдишником
//     div.onmouseout = () => {
//         id =  setTimeout(() => div.remove(), 3000)
//         div.classList.add('hideModal')
//     };
// };

function showNotification(message, type = 'info', duration = 3000, onClose = null) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `<div class="notification-message">${message}</div>
                              <div class="notification-close">&times;</div>`;
  
    const body = document.querySelector('body');
    body.appendChild(notification);
  
    const closeNotification = () => {
      notification.classList.add('hide');
      if (onClose) onClose();
      setTimeout(() => {
        body.removeChild(notification);
      }, 500);
    };
  
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', closeNotification);
  
    setTimeout(() => {
      notification.classList.add('show');
      setTimeout(closeNotification, duration);
    }, 100);
  }

  showNotification('Успешно сохранено!', 'success', 5000, () => {
    console.log('Уведомление закрыто');
  });