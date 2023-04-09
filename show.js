// 'usestrict'
const button = document.getElementById('more');

function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification hideModal notification__${type}`;
    notification.innerHTML = `<div class="notification-message">${message}</div>
                              <div class="notification__close">&times;</div>`;
  
    const body = document.querySelector('body');
    body.appendChild(notification);
  
    let id;
    // удаляет всплывашку
    const closeNotification = () => {
        body.removeChild(notification);
    };
  
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', closeNotification);
  
    notification.classList.add('show');
    id = setTimeout(closeNotification, duration);


    notification.onmouseover = () => {
        clearTimeout(id);
        notification.classList.remove('hideModal');
    };

    notification.onmouseout = () => {
        notification.classList.add('show');
        id = setTimeout(closeNotification, duration);

        notification.classList.add('hideModal');
    };
  }



  button.onclick = () => {
    showNotification('Успешно сохранено!')
  }