export const createAlert = text => {
    // создание элемента
    let div = document.createElement('div');
    div.classList.add('olert')
    div.classList.add('hideModal')
    div.innerHTML = text ? text : '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';
    // прикрепление в body
    document.body.append(div);
    return div;
};
