function successNotification() {
  const element = document.createElement('p');
  element.textContent = 'Your message has sent';

  const input = document.getElementById('input-email');
  input.parentNode.replaceChild(element, input);

  setTimeout(function () {
    element.parentNode.replaceChild(input, element);
  }, 3000);
}


const baseSuccessCallback = (event) => {
  successNotification();
  event.preventDefault();
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
