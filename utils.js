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

export const summArrElem = arr => {
    let result = 0;

    for (let i = 0; i < arr.length; ++i) {
        result = result + arr[i];
    }

    console.log(result);
};